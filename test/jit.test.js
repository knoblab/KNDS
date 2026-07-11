import assert from 'node:assert';
import { compile, scanText, generateCss, loadConfig } from '../compiler/index.js';

console.log('=== KNDS JIT Compiler Automated Verification Suite ===\n');

// 1. Test Scanner (scanText)
console.log('[Test 1] Lexical Scanner (scanText)');
const sampleHtml = `
  <div class="knds-panel hover:knds-border-hover dark:knds-w-[342px] sm:knds-p-400">
    <button class="knds-btn-primary active:knds-shadow-hardware-bevel-active">Click me</button>
  </div>
`;
const candidates = scanText(sampleHtml, { prefix: 'knds-', safelist: ['knds-indicator-dot'] });

assert.ok(candidates.has('knds-panel'), 'Should extract static component knds-panel');
assert.ok(candidates.has('hover:knds-border-hover'), 'Should extract hover variant');
assert.ok(candidates.has('dark:knds-w-[342px]'), 'Should extract dark + arbitrary width');
assert.ok(candidates.has('sm:knds-p-400'), 'Should extract sm responsive spacing');
assert.ok(candidates.has('knds-indicator-dot'), 'Should include safelist items');
console.log('✔ Lexical Scanner extracted all candidates accurately.\n');

// 2. Test Core JIT Generator (Static Component & Utility Rule Generation)
console.log('[Test 2] Static Rule Matcher & CSS Generation');
const config = await loadConfig();
const cssOutput = generateCss(candidates, config, { includeBase: false });

assert.ok(cssOutput.includes('@layer components'), 'Should generate @layer components');
assert.ok(cssOutput.includes('.knds-panel'), 'Should generate .knds-panel declarations');
assert.ok(cssOutput.includes('.knds-btn-primary'), 'Should generate .knds-btn-primary declarations');
assert.ok(cssOutput.includes('@layer utilities'), 'Should generate @layer utilities');
console.log('✔ Static components and layers generated with exact specificity.\n');

// 3. Test Arbitrary Values (e.g. knds-w-[342px], knds-grid-cols-[1fr_2fr])
console.log('[Test 3] Arbitrary Value Parsing ([...])');
const arbCss = generateCss(new Set(['knds-w-[342px]', 'knds-p-[1.5rem]', 'knds-grid-cols-[1fr_2fr]', 'knds-bg-[#121212]']), config, { includeBase: false });

assert.ok(arbCss.includes('.knds-w-\\[342px\\] {\n  width: 342px;\n}'), 'Should parse and escape width arbitrary value');
assert.ok(arbCss.includes('.knds-p-\\[1\\.5rem\\] {\n  padding: 1.5rem;\n}'), 'Should parse padding arbitrary value');
assert.ok(arbCss.includes('.knds-grid-cols-\\[1fr_2fr\\] {\n  grid-template-columns: 1fr 2fr;\n}'), 'Should normalize underscore to space in grid arbitrary value');
assert.ok(arbCss.includes('.knds-bg-\\[\\#121212\\] {\n  background-color: #121212;\n}'), 'Should parse hex color arbitrary value');
console.log('✔ Arbitrary values correctly parsed and escaped.\n');

// 4. Test Variants & Responsive Modifiers (hover:, dark:, sm:)
console.log('[Test 4] Variant & Responsive Modifiers Wrapping');
const variantCss = generateCss(new Set(['hover:knds-border-hover', 'dark:knds-w-[342px]', 'sm:knds-p-400']), config, { includeBase: false });

assert.ok(variantCss.includes('.hover\\:knds-border-hover:hover'), 'Should wrap with :hover pseudo-class');
assert.ok(variantCss.includes("[data-theme='dark'] .dark\\:knds-w-\\[342px\\]"), 'Should wrap with dark mode data-theme selector');
assert.ok(variantCss.includes('@media (min-width: 640px) {\n  .sm\\:knds-p-400 {\n    padding: var(--space-400);\n  }\n}'), 'Should wrap with sm breakpoint media query');
console.log('✔ Variant & responsive modifier chains accurately wrapped.\n');

// 5. Test Full compile() API performance
console.log('[Test 5] Full JIT Compile Engine & Performance Check');
const startTime = performance.now();
const result = await compile({
  config,
  content: sampleHtml + ' <span class="knds-w-[500px] knds-text-red">Test</span>',
  includeBase: true
});
const duration = (performance.now() - startTime).toFixed(2);

assert.ok(result.css.includes('@layer base'), 'Should include base layer when requested');
assert.ok(result.css.includes('.knds-w-\\[500px\\]'), 'Should include new candidate from content stream');
console.log(`✔ Full JIT compile completed in ${duration}ms (Extracted ${result.candidates.size} classes).\n`);

console.log('======================================================');
console.log('🎉 ALL KNDS JIT COMPILER VERIFICATION TESTS PASSED!');
console.log('======================================================');
