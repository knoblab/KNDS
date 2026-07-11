# KNDS (Knoblab Design System)

**Physical-Digital Fusion Web Design Language & On-Demand JIT Utility Framework**

[![Release](https://img.shields.io/github/v/release/knoblab/KNDS?label=Latest%20Release&style=flat-square)](https://github.com/knoblab/KNDS/releases/latest)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)]()
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)]()

KNDS (`@knoblab/knds`) is a technical design system and CSS framework engineered to bridge physical hardware tactile feedback (tactile bevels) with structural digital minimalism. It delivers precise achromatic high-contrast layouts, hardware-inspired inner/outer bevel shadows, and functional red indicators through either a zero-build static stylesheet or a high-performance Just-In-Time (JIT) utility compiler engine.

---

## 1. Architectural Overview & Design Tokens

KNDS is built upon strict functional tokens that eliminate decorative overhead:

* **Achromatic High Contrast (`--color-bg-primary: #ffffff` / `--color-text-primary: #09090b`)**: Maximizes visual recognition speed and legibility across standard and automated dark (`[data-theme='dark']`) modes.
* **Tactile Hardware Bevels (`--shadow-hardware-bevel`)**: Emulates physical audio hardware indentation and surface extrusion using multi-layered CSS inner and outer box shadows. Active states (`:active`) invert shadow offsets to provide simulated physical key-press feedback.
* **Functional Red Accent (`--color-functional-red: #ad1d1d`)**: Restricted exclusively to critical user interactions, system readiness indicators, and primary action triggers.

---

## 2. Delivery Modes

KNDS supports two distinct delivery architectures depending on project complexity and build tooling requirements.

### Mode A: Zero-Build Master Static Stylesheet (CDN)

For static HTML environments, prototypes, and lightweight applications where build chains are unnecessary or restricted.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KNDS Static Application</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/knoblab/KNDS@main/knds.css">
</head>
<body class="knds-bg-primary knds-text-primary">
  <main class="knds-panel knds-w-[100%] knds-max-w-500">
    <div class="knds-panel-header knds-flex-row knds-justify-between knds-items-center">
      <span class="knds-text-label-14-mono knds-text-red">SYSTEM READY</span>
      <span class="knds-badge">v1.0.0</span>
    </div>
    <h1 class="knds-text-heading-32 knds-mb-200">Knoblab Design Language</h1>
    <button class="knds-btn-primary">
      <span>Execute Action</span>
    </button>
  </main>
</body>
</html>
```

### Mode B: On-Demand JIT Compiler Engine (CLI & PostCSS 8 Plugin)

For modern web application pipelines (Vite, Next.js, Webpack) that require arbitrary value extrapolation (`knds-w-[342px]`), state/breakpoint modifier chaining (`hover:`, `dark:`, `sm:`), and minimal output bundling (`< 5 KB`).

#### JIT Compilation Lifecycle
1. **Lexical Scanning (`compiler/scanner.js`)**: Scans raw source files (`.html`, `.jsx`, `.tsx`, `.vue`, `.svelte`) using regex-based tokenization without AST overhead (`~0.5ms` extraction time).
2. **Dynamic Rule Matching (`compiler/generator.js`)**: Evaluates candidate strings against the master `knds.css` component registry and parses dynamic bracket expressions (`w-[...]`, `p-[...]`, `grid-cols-[...]`, `bg-[...]`).
3. **Specificity Layering (`@layer base, components, utilities`)**: Orders rules deterministically to ensure utility classes override compound component rules consistently without CSS specificity conflicts.

---

## 3. Configuration & CLI Usage

### Configuration File (`knds.config.js`)

Create or customize `knds.config.js` in the project root:

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
      },
      spacing: {
        'custom-header': '88px',
      }
    }
  },
  safelist: [
    'knds-indicator-dot',
    'knds-btn-primary'
  ]
};
```

### Standalone CLI

The `@knoblab/knds` package exposes the executable `knds` binary:

```bash
# Compile and optimize used utilities from knds.config.js content paths
npx knds -o dist/knds.output.css --minify

# Run incremental watch mode for development
npx knds -o dist/knds.output.css --watch
```

### PostCSS 8 Integration (`postcss.config.js`)

To integrate KNDS into existing PostCSS pipelines (such as Vite or Next.js):

```javascript
// postcss.config.js
import postcssKnds from '@knoblab/knds/postcss';

export default {
  plugins: [
    postcssKnds({ config: './knds.config.js' })
  ]
};
```

Include the KNDS directive inside your entry CSS file:

```css
/* src/index.css */
@knds base;
@knds components;
@knds utilities;
```

---

## 4. Repository Structure

```
KNDS/
 ├── knds.css                 # Master static stylesheet (CDN & baseline rule definition)
 ├── knds.config.js           # Standard JIT configuration specification
 ├── package.json             # Package manifest exposing CLI binaries and PostCSS exports
 ├── compiler/                # Core JIT Compiler Engine
 │    ├── config.js           # Design token dictionary and configuration resolver
 │    ├── scanner.js          # Regex-based lexical source code scanner
 │    ├── generator.js        # Balanced-brace AST rule matcher and CSS layer generator
 │    ├── index.js            # Programmatic compilation API (`compile()`)
 │    ├── postcss.js          # PostCSS 8 plugin wrapper (`postcss-knds`)
 │    └── cli.js              # Executable CLI interface (`knds`)
 ├── template/                # Starter project blueprints
 │    ├── starter-html/       # Static HTML + CDN starter structure
 │    └── starter-vite/       # Vite + TypeScript + React starter structure
 ├── test/                    # Automated JIT verification suite and performance benchmarks
 └── docs/                    # Apple HIG-structured documentation application
```

---

## 5. Verification Suite

Run automated unit tests and performance checks directly across all compiler modules:

```bash
node test/jit.test.js
```

---

## 6. License

MIT License © Knoblab Design Team.
