import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cache for parsed knds.css
let kndsMasterCache = null;

/**
 * Escape CSS selector class name (e.g. `dark:hover:knds-w-[342px]` -> `dark\:hover\:knds-w-\\[342px\\]`)
 */
export function escapeClassName(className) {
  return className.replace(/([^a-zA-Z0-9_-])/g, '\\$1');
}

/**
 * Load and parse the master knds.css into base, components, and utilities maps
 */
export function getKndsMasterData() {
  if (kndsMasterCache) {
    return kndsMasterCache;
  }

  const kndsPath = path.resolve(__dirname, '../knds.css');
  let rawContent = '';
  if (fs.existsSync(kndsPath)) {
    rawContent = fs.readFileSync(kndsPath, 'utf8');
  }

  // Normalize CRLF to LF
  const content = rawContent.replace(/\r\n/g, '\n');

  // Split base layer (lines up to 3. LAYOUT SYSTEM)
  const layoutIdx = content.indexOf('/* ==========================================================================\n   3. LAYOUT SYSTEM');
  const baseCss = layoutIdx !== -1 ? content.slice(0, layoutIdx).trim() : '';
  
  const restCss = layoutIdx !== -1 ? content.slice(layoutIdx) : content;
  const utilIdx = restCss.indexOf('/* ==========================================================================\n   6. UTILITIES');
  
  const compSection = utilIdx !== -1 ? restCss.slice(0, utilIdx) : restCss;
  const utilSection = utilIdx !== -1 ? restCss.slice(utilIdx) : '';

  const componentsMap = new Map();
  const utilitiesMap = new Map();

  // Balanced brace CSS walker
  function extractRules(cssText, targetMap, isComponentSection = false) {
    const noComments = cssText.replace(/\/\*[\s\S]*?\*\//g, '');
    let i = 0;

    while (i < noComments.length) {
      const openBrace = noComments.indexOf('{', i);
      if (openBrace === -1) break;

      const selectorsText = noComments.slice(i, openBrace).trim();

      // Find matching close brace
      let depth = 1;
      let j = openBrace + 1;
      while (j < noComments.length && depth > 0) {
        if (noComments[j] === '{') depth++;
        else if (noComments[j] === '}') depth--;
        j++;
      }

      const bodyText = noComments.slice(openBrace + 1, j - 1).trim();
      i = j;

      if (!selectorsText) continue;

      if (selectorsText.startsWith('@media') || selectorsText.startsWith('@supports')) {
        extractRules(bodyText, targetMap, isComponentSection);
        continue;
      }

      if (selectorsText.startsWith('@')) {
        continue;
      }

      const fullRuleString = `${selectorsText} {\n  ${bodyText}\n}`;
      const selParts = selectorsText.split(',').map(s => s.trim());

      for (const sel of selParts) {
        // Match primary class name like `.knds-panel` or `.knds-btn-primary:hover` or `.knds-table th`
        const dotMatch = sel.match(/^\.([a-zA-Z0-9_-]+)/);
        if (dotMatch) {
          const baseClass = dotMatch[1];
          if (isComponentSection && (sel.includes(':') || sel.includes(' '))) {
            // Compound/child component rule: attach to baseClass (e.g. knds-btn-primary:hover -> knds-btn-primary)
            const existing = targetMap.get(baseClass);
            if (existing && typeof existing === 'object' && existing.isCompound) {
              existing.rules.push(fullRuleString);
            } else if (existing && typeof existing === 'string') {
              targetMap.set(baseClass, { isCompound: true, rules: [`@CLASS_RULE@`, fullRuleString], decls: existing });
            } else {
              targetMap.set(baseClass, { isCompound: true, rules: [fullRuleString] });
            }
          } else {
            const existing = targetMap.get(baseClass);
            if (existing && typeof existing === 'object' && existing.isCompound) {
              existing.decls = bodyText;
              // Replace @CLASS_RULE@ placeholder with primary rule
              for (let idx = 0; idx < existing.rules.length; idx++) {
                if (existing.rules[idx] === `@CLASS_RULE@`) {
                  existing.rules[idx] = fullRuleString;
                }
              }
            } else {
              targetMap.set(baseClass, bodyText);
            }
          }
        }
      }
    }
  }

  extractRules(compSection, componentsMap, true);
  extractRules(utilSection, utilitiesMap, false);

  kndsMasterCache = {
    baseCss,
    componentsMap,
    utilitiesMap,
    fullContent: content
  };

  return kndsMasterCache;
}

/**
 * Parse candidate string into variants (`['dark', 'hover']`) and core class (`knds-w-[342px]`)
 */
export function parseCandidate(candidate) {
  const parts = candidate.split(':');
  const coreClass = parts.pop();
  const variants = parts;
  return { coreClass, variants };
}

/**
 * Match core class against static maps or generate dynamic rule declarations
 */
export function generateDeclarations(coreClass, config) {
  const masterData = getKndsMasterData();
  const prefix = config.prefix || 'knds-';

  // 1. Check static maps first
  if (masterData.componentsMap.has(coreClass)) {
    const val = masterData.componentsMap.get(coreClass);
    if (val && typeof val === 'object' && val.isCompound) {
      return { layer: 'components', declarations: val.decls || '', compoundRules: val.rules.filter(r => r !== '@CLASS_RULE@') };
    }
    return { layer: 'components', declarations: val };
  }
  if (masterData.utilitiesMap.has(coreClass)) {
    const val = masterData.utilitiesMap.get(coreClass);
    if (val && typeof val === 'object' && val.isCompound) {
      return { layer: 'utilities', declarations: val.decls || '', compoundRules: val.rules.filter(r => r !== '@CLASS_RULE@') };
    }
    return { layer: 'utilities', declarations: val };
  }

  // Check if starts with prefix
  if (prefix && !coreClass.startsWith(prefix)) {
    return null;
  }

  const unprefixed = prefix ? coreClass.slice(prefix.length) : coreClass;

  // 2. Arbitrary value parser: e.g. w-[342px], bg-[#121212], p-[1.5rem], top-[-17px], grid-cols-[1fr_2fr]
  const arbMatch = unprefixed.match(/^([a-z0-9_-]+)-\[(.+)\]$/i);
  if (arbMatch) {
    const propKey = arbMatch[1];
    let arbValue = arbMatch[2].replace(/_/g, ' ');

    const propMap = {
      'w': 'width',
      'min-w': 'min-width',
      'max-w': 'max-width',
      'h': 'height',
      'min-h': 'min-height',
      'max-h': 'max-height',
      'p': 'padding',
      'pt': 'padding-top',
      'pb': 'padding-bottom',
      'pl': 'padding-left',
      'pr': 'padding-right',
      'px': ['padding-left', 'padding-right'],
      'py': ['padding-top', 'padding-bottom'],
      'm': 'margin',
      'mt': 'margin-top',
      'mb': 'margin-bottom',
      'ml': 'margin-left',
      'mr': 'margin-right',
      'mx': ['margin-left', 'margin-right'],
      'my': ['margin-top', 'margin-bottom'],
      'gap': 'gap',
      'gap-x': 'column-gap',
      'gap-y': 'row-gap',
      'top': 'top',
      'bottom': 'bottom',
      'left': 'left',
      'right': 'right',
      'inset': ['top', 'bottom', 'left', 'right'],
      'bg': 'background-color',
      'text': (arbValue.match(/^[0-9.]+(px|rem|em|vh|vw|%)$/) || !isNaN(arbValue)) ? 'font-size' : 'color',
      'border': 'border-color',
      'rounded': 'border-radius',
      'z': 'z-index',
      'opacity': 'opacity',
      'grid-cols': 'grid-template-columns',
      'grid-rows': 'grid-template-rows',
      'shadow': 'box-shadow',
    };

    const targetProp = propMap[propKey];
    if (targetProp) {
      if (Array.isArray(targetProp)) {
        const decls = targetProp.map(p => `${p}: ${arbValue};`).join(' ');
        return { layer: 'utilities', declarations: decls };
      } else {
        return { layer: 'utilities', declarations: `${targetProp}: ${arbValue};` };
      }
    }
  }

  // 3. Theme token matches
  const theme = config.resolvedTheme || {};

  // Check Spacing
  const spacingMatch = unprefixed.match(/^(p|pt|pb|pl|pr|px|py|m|mt|mb|ml|mr|mx|my|gap|gap-x|gap-y|top|bottom|left|right|w|h|min-w|max-w|min-h|max-h)-([0-9]+|auto|px|full|screen)$/);
  if (spacingMatch) {
    const propKey = spacingMatch[1];
    const tokenKey = spacingMatch[2];
    const tokenVal = (theme.spacing && theme.spacing[tokenKey]) ? theme.spacing[tokenKey] : null;
    if (tokenVal) {
      const propMap = {
        'w': 'width', 'min-w': 'min-width', 'max-w': 'max-width',
        'h': 'height', 'min-h': 'min-height', 'max-h': 'max-height',
        'p': 'padding', 'pt': 'padding-top', 'pb': 'padding-bottom', 'pl': 'padding-left', 'pr': 'padding-right',
        'px': ['padding-left', 'padding-right'], 'py': ['padding-top', 'padding-bottom'],
        'm': 'margin', 'mt': 'margin-top', 'mb': 'margin-bottom', 'ml': 'margin-left', 'mr': 'margin-right',
        'mx': ['margin-left', 'margin-right'], 'my': ['margin-top', 'margin-bottom'],
        'gap': 'gap', 'gap-x': 'column-gap', 'gap-y': 'row-gap',
        'top': 'top', 'bottom': 'bottom', 'left': 'left', 'right': 'right'
      };
      const targetProp = propMap[propKey];
      if (Array.isArray(targetProp)) {
        return { layer: 'utilities', declarations: targetProp.map(p => `${p}: ${tokenVal};`).join(' ') };
      } else {
        return { layer: 'utilities', declarations: `${targetProp}: ${tokenVal};` };
      }
    }
  }

  // Check Colors
  const colorMatch = unprefixed.match(/^(bg|text|border)-([a-z0-9_-]+)$/);
  if (colorMatch && theme.colors) {
    const propKey = colorMatch[1];
    const tokenKey = colorMatch[2];
    if (theme.colors[tokenKey]) {
      const propName = propKey === 'bg' ? 'background-color' : propKey === 'text' ? 'color' : 'border-color';
      return { layer: 'utilities', declarations: `${propName}: ${theme.colors[tokenKey]};` };
    }
  }

  // Check Shadows
  if (unprefixed.startsWith('shadow-') && theme.boxShadow) {
    const tokenKey = unprefixed.slice('shadow-'.length);
    if (theme.boxShadow[tokenKey]) {
      return { layer: 'utilities', declarations: `box-shadow: ${theme.boxShadow[tokenKey]};` };
    }
  }

  return null;
}

/**
 * Wrap declarations with selector and variant media queries
 */
export function wrapRule(candidate, layer, declarations, variants, config, compoundRules = null) {
  const escaped = escapeClassName(candidate);
  let selector = `.${escaped}`;
  let mediaWrappers = [];

  for (const variant of variants) {
    if (variant === 'hover') {
      selector = `${selector}:hover`;
    } else if (variant === 'focus') {
      selector = `${selector}:focus`;
    } else if (variant === 'active') {
      selector = `${selector}:active`;
    } else if (variant === 'group-hover') {
      selector = `.group:hover ${selector}`;
    } else if (variant === 'dark') {
      selector = `[data-theme='dark'] ${selector}, .dark ${selector}`;
    } else if (config && config.resolvedTheme && config.resolvedTheme.screens && config.resolvedTheme.screens[variant]) {
      const minWidth = config.resolvedTheme.screens[variant];
      mediaWrappers.push(`@media (min-width: ${minWidth})`);
    }
  }

  let cssRule;
  if (compoundRules && compoundRules.length > 0 && variants.length === 0) {
    // If exact primary compound rules exist and no modifiers are added, output them directly
    cssRule = compoundRules.join('\n\n');
  } else {
    cssRule = `${selector} {\n  ${declarations}\n}`;
  }

  for (const media of mediaWrappers.reverse()) {
    cssRule = `${media} {\n  ${cssRule.split('\n').join('\n  ')}\n}`;
  }

  return { layer, cssRule };
}

/**
 * Generate layered CSS string from candidate Set
 */
export function generateCss(candidates, config = {}, options = { includeBase: true }) {
  const masterData = getKndsMasterData();
  
  const componentsList = [];
  const utilitiesList = [];

  const sortedCandidates = Array.from(candidates).sort();

  for (const candidate of sortedCandidates) {
    const { coreClass, variants } = parseCandidate(candidate);
    const match = generateDeclarations(coreClass, config);
    if (match) {
      const wrapped = wrapRule(candidate, match.layer, match.declarations, variants, config, match.compoundRules);
      if (wrapped.layer === 'components') {
        componentsList.push(wrapped.cssRule);
      } else {
        utilitiesList.push(wrapped.cssRule);
      }
    }
  }

  let output = '/* Generated by KNDS JIT Compiler */\n\n';

  if (options.includeBase && masterData.baseCss) {
    output += `@layer base {\n${masterData.baseCss}\n}\n\n`;
  }

  if (componentsList.length > 0) {
    output += `@layer components {\n${componentsList.join('\n\n')}\n}\n\n`;
  }

  if (utilitiesList.length > 0) {
    output += `@layer utilities {\n${utilitiesList.join('\n\n')}\n}\n`;
  }

  return output.trim();
}
