# KNDS (Knoblab Design System)

**Physical-Digital Fusion Web Design Language & On-Demand JIT Utility Framework**

[![Release](https://img.shields.io/github/v/release/knoblab/KNDS?label=Latest%20Release&style=flat-square)](https://github.com/knoblab/KNDS/releases/latest)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)]()
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)]()

KNDS (`@knoblab/knds`) is an achromatic, hardware-inspired design system and CSS framework engineered to bridge physical hardware tactile feedback with structural digital minimalism. It delivers precise high-contrast layouts, multi-layered inner/outer bevel shadows, and strict functional red indicators through either a zero-build static stylesheet or an on-demand Just-In-Time (JIT) utility compiler engine.

---

## 1. Architectural Overview & Design Tokens

KNDS is governed by strict functional design tokens that eliminate non-functional decorative overhead:

* **Achromatic High Contrast (`--color-bg-primary: #ffffff` / `--color-text-primary: #09090b`)**: Maximizes visual recognition speed and legibility across standard (`:root`) and automated dark (`[data-theme="dark"]`) modes without chromatic aberration.
* **Tactile Hardware Bevels (`--shadow-hardware-bevel`)**: Emulates physical audio hardware indentation and surface extrusion using multi-layered CSS inner (`inset 0 1px 0 rgba(255,255,255,0.8)`) and outer box shadows. Active states (`:active`) invert shadow offsets (`transform: scale(0.98)`) to provide deterministic tactile key-press feedback.
* **Functional Red Accent (`--color-functional-red: #ad1d1d`)**: Restricted exclusively to critical user interactions, system readiness indicators, and primary action triggers. Never applied as a decorative background or passive border.
* **Blueprint Grid Architecture (`--blueprint-grid-pattern`)**: A mathematical 24px cross-section grid overlay (`linear-gradient`) used to verify structural alignment and component boundaries.

---

## 2. Delivery Modes & Compilation Engine

KNDS supports two distinct delivery architectures depending on project complexity and build tooling requirements.

### Mode A: Zero-Build Master Static Stylesheet (CDN)

For static HTML environments, prototypes, and lightweight applications where external build chains are unnecessary.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KNDS Static Terminal</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/knoblab/KNDS@main/knds.css">
</head>
<body class="knds-bg-primary knds-text-primary">
  <main class="knds-panel knds-p-400 knds-max-w-xl knds-mx-auto knds-mt-400 knds-shadow-bevel">
    <div class="knds-panel-header knds-flex-row knds-justify-between knds-items-center knds-border-bottom knds-pb-200 knds-mb-300">
      <span class="knds-text-label-14-mono knds-text-red">SYSTEM READY #AD1D1D</span>
      <span class="knds-badge">v1.0.0</span>
    </div>
    <h1 class="knds-text-heading-32 knds-font-bold knds-mb-200">Knoblab Design Language</h1>
    <p class="knds-text-copy-14 knds-text-muted knds-mb-400">Achromatic precision interface engineered for high-density control panels.</p>
    <button class="knds-btn-primary knds-btn-md">
      <span>Execute Action</span>
    </button>
  </main>
</body>
</html>
```

### Mode B: On-Demand JIT Compiler Engine (CLI & PostCSS 8 Plugin)

For modern web application pipelines (Vite, Next.js, Webpack) that require arbitrary value extrapolation (`knds-w-[342px]`, `knds-p-[18px]`), state/breakpoint modifier chaining (`hover:`, `dark:`, `sm:`), and minimal output bundling (`< 5 KB`).

#### JIT Compilation Lifecycle
1. **Lexical Scanning (`compiler/scanner.js`)**: Scans raw source code files (`.html`, `.jsx`, `.tsx`, `.vue`, `.svelte`) using deterministic regex-based tokenization without full Abstract Syntax Tree (AST) overhead (`~0.5ms` average extraction time per file).
2. **Dynamic Rule Matching (`compiler/generator.js`)**: Evaluates candidate strings against the master `knds.css` component registry and generates exact CSS declarations for dynamic bracket expressions (`w-[...]`, `h-[...]`, `p-[...]`, `m-[...]`, `grid-cols-[...]`, `bg-[...]`, `text-[...]`).
3. **Specificity Layering (`@layer base, components, utilities`)**: Orders generated CSS rules deterministically to guarantee that utility classes override compound component rules without requiring `!important` flags or causing CSS specificity conflicts.

---

## 3. Configuration & CLI Usage

### Configuration Specification (`knds.config.js`)

Create or customize `knds.config.js` in the workspace root directory:

```javascript
/** @type {import('@knoblab/knds').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue,svelte,html}',
    './template/**/*.html'
  ],
  prefix: 'knds-',
  theme: {
    extend: {
      colors: {
        'surface-dark': '#09090b',
        'surface-muted': '#18181b'
      },
      spacing: {
        'custom-header': '88px',
        'console-pad': '32px'
      }
    }
  },
  safelist: [
    'knds-indicator-dot',
    'knds-btn-primary',
    'knds-shadow-bevel'
  ]
};
```

### Standalone CLI Execution

The `@knoblab/knds` package provides the executable `knds` binary:

```bash
# Compile and minify used utilities from knds.config.js content paths
npx knds -o dist/knds.output.css --minify

# Run incremental watch mode for development and continuous integration
npx knds -o dist/knds.output.css --watch
```

### PostCSS 8 Integration (`postcss.config.js`)

To integrate KNDS into standard PostCSS transformation pipelines (e.g., Vite, Next.js):

```javascript
// postcss.config.js
import postcssKnds from '@knoblab/knds/postcss';

export default {
  plugins: [
    postcssKnds({ config: './knds.config.js' })
  ]
};
```

Include the KNDS directive inside the primary stylesheet entry point:

```css
/* src/index.css */
@knds base;
@knds components;
@knds utilities;
```

---

## 4. Repository Architecture & Directory Tree

```
KNDS/
 ├── knds.css                 # Master static stylesheet (CDN & baseline rule definition)
 ├── knds.config.js           # Standard JIT configuration specification
 ├── package.json             # Package manifest exposing CLI binaries and PostCSS exports
 ├── compiler/                # Core JIT Compiler Engine
 │    ├── config.js           # Design token dictionary and configuration resolver
 │    ├── scanner.js          # Regex-based lexical source code scanner
 │    ├── generator.js        # Balanced-brace rule matcher and CSS layer generator
 │    ├── index.js            # Programmatic compilation API (`compile()`)
 │    ├── postcss.js          # PostCSS 8 plugin wrapper (`postcss-knds`)
 │    └── cli.js              # Executable CLI interface (`knds`)
 ├── template/                # Starter project blueprints
 │    ├── starter-html/       # Static HTML + CDN starter structure
 │    └── starter-vite/       # Vite + TypeScript + React starter structure
 ├── test/                    # Automated JIT verification suite and performance benchmarks
 └── docs/                    # Apple HIG-structured interactive documentation web application
      └── src/components/
           ├── CodeViewer.tsx # Multi-tab interactive code viewer with copy and line numbering
           ├── CodeExport.tsx # ZIP & File export console for rapid scaffolding
           └── ...            # Hardware component inspection sandboxes
```

---

## 5. Verification Suite & Quality Assurance

To execute the automated unit test suite and verify JIT compiler performance benchmarks across all compiler modules:

```bash
node test/jit.test.js
```

### Automated QA Criteria
* **Token Compliance**: 100% adherence to `--space-*`, `--color-*`, and `--shadow-*` variable definitions.
* **Touch Target Compliance**: Minimum `44x44px` physical target area (`knds-btn-md`, `knds-input-md`) for touch input reliability.
* **Accent Restriction**: Functional Red (`#AD1D1D`) limited to primary action triggers and error state borders (`knds-border-red`).

---

## 6. License

MIT License © Knoblab Design Team.
