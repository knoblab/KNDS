import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

/**
 * KNDS Default Design Tokens
 * 물리-디지털 퓨전 웹 디자인 언어를 구성하는 핵심 토큰 사전
 */
export const defaultTokens = {
  spacing: {
    '0': '0px',
    '025': 'var(--space-025, 2px)',
    '050': 'var(--space-050, 4px)',
    '100': 'var(--space-100, 8px)',
    '150': 'var(--space-150, 12px)',
    '200': 'var(--space-200, 16px)',
    '300': 'var(--space-300, 24px)',
    '400': 'var(--space-400, 32px)',
    '600': 'var(--space-600, 48px)',
    '800': 'var(--space-800, 64px)',
    '1': '4px',
    '2': '8px',
    '3': '12px',
    '4': '16px',
    '5': '20px',
    '6': '24px',
    '8': '32px',
    '10': '40px',
    '12': '48px',
    '16': '64px',
    'auto': 'auto',
    'px': '1px',
    'full': '100%',
    'screen': '100vw',
  },
  colors: {
    'bg-primary': 'var(--color-bg-primary, #ffffff)',
    'bg-secondary': 'var(--color-bg-secondary, #f4f4f5)',
    'border-default': 'var(--color-border-default, #e4e4e7)',
    'border-hover': 'var(--color-border-hover, #a1a1aa)',
    'text-primary': 'var(--color-text-primary, #09090b)',
    'text-secondary': 'var(--color-text-secondary, #71717a)',
    'functional-red': 'var(--color-functional-red, #ad1d1d)',
    'red-hover': 'var(--color-red-hover, #c21f1f)',
    'red-active': 'var(--color-red-active, #941a1a)',
    'red-light': 'var(--color-red-light, #fef2f2)',
    'transparent': 'transparent',
    'white': '#ffffff',
    'black': '#000000',
  },
  boxShadow: {
    'hardware-bevel': 'var(--shadow-hardware-bevel, inset 0 1px 0 rgba(255, 255, 255, 1), inset 0 -1px 0 var(--color-border-default), 0 1px 2px rgba(0, 0, 0, 0.05))',
    'hardware-bevel-active': 'var(--shadow-hardware-bevel-active, inset 0 1px 0 var(--color-border-default), inset 0 -1px 0 rgba(255, 255, 255, 1), 0 1px 1px rgba(0, 0, 0, 0.02))',
    'functional-glow': 'var(--shadow-functional-glow, 0 0 16px 0 rgba(173, 29, 29, 0.3))',
    'functional-glow-active': 'var(--shadow-functional-glow-active, 0 0 8px 0 rgba(148, 26, 26, 0.6))',
    'none': 'none',
  },
  fontFamily: {
    'sans': 'var(--font-sans, "Pretendard Variable", Pretendard, "Geist Sans", -apple-system, sans-serif)',
    'mono': 'var(--font-mono, "JetBrains Mono", var(--font-sans))',
  },
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
  borderRadius: {
    'none': 'var(--radius-none, 0px)',
    'sm': 'var(--radius-sm, 4px)',
    'md': 'var(--radius-md, 8px)',
    'lg': 'var(--radius-lg, 16px)',
    'xl': 'var(--radius-xl, 24px)',
    '2xl': 'var(--radius-2xl, 32px)',
    'full': 'var(--radius-full, 50%)',
  }
};

/**
 * Default KNDS Configuration
 */
export const defaultConfig = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue,svelte,html}',
    './template/**/*.html'
  ],
  prefix: 'knds-',
  theme: {
    extend: {}
  },
  safelist: [],
  blocklist: []
};

/**
 * Merge objects deeply
 */
function deepMerge(target, source) {
  const result = { ...target };
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

/**
 * Load and merge user config with default config and default tokens
 */
export async function loadConfig(configInput) {
  let userConfig = {};

  if (typeof configInput === 'string') {
    const configPath = path.resolve(process.cwd(), configInput);
    if (fs.existsSync(configPath)) {
      try {
        const fileUrl = url.pathToFileURL(configPath).href;
        const imported = await import(`${fileUrl}?t=${Date.now()}`);
        userConfig = imported.default || imported;
      } catch (err) {
        console.error(`[KNDS] Error loading config from ${configPath}:`, err.message);
      }
    }
  } else if (configInput && typeof configInput === 'object') {
    userConfig = configInput;
  } else {
    // Try auto-discovering knds.config.js in CWD
    const autoPath = path.resolve(process.cwd(), 'knds.config.js');
    if (fs.existsSync(autoPath)) {
      try {
        const fileUrl = url.pathToFileURL(autoPath).href;
        const imported = await import(`${fileUrl}?t=${Date.now()}`);
        userConfig = imported.default || imported;
      } catch (err) {
        // Ignore error if default file doesn't load or exist
      }
    }
  }

  // Merge defaultConfig and userConfig
  const mergedConfig = deepMerge(defaultConfig, userConfig);

  // Build resolved theme tokens by extending default tokens with theme.extend
  const resolvedTheme = deepMerge(defaultTokens, mergedConfig.theme || {});
  if (mergedConfig.theme && mergedConfig.theme.extend) {
    for (const category in mergedConfig.theme.extend) {
      resolvedTheme[category] = deepMerge(resolvedTheme[category] || {}, mergedConfig.theme.extend[category]);
    }
  }

  mergedConfig.resolvedTheme = resolvedTheme;
  return mergedConfig;
}

/**
 * Resolve a theme token value (e.g. spacing.400 -> '32px' or 'var(--space-400, 32px)')
 */
export function resolveThemeToken(config, category, key) {
  if (!config || !config.resolvedTheme || !config.resolvedTheme[category]) {
    return null;
  }
  return config.resolvedTheme[category][key] || null;
}
