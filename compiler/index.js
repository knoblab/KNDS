import { loadConfig, defaultConfig, defaultTokens } from './config.js';
import { scanText, scanFiles, resolveContentFiles } from './scanner.js';
import { generateCss, getKndsMasterData, escapeClassName } from './generator.js';

/**
 * Main KNDS Design Token & Archetype Compile API (Knoblab Design Language Engine)
 * @param {object} options
 * @param {string|object} options.config - Path to knds.config.js or config object
 * @param {string} options.content - Raw HTML/JS string to scan directly
 * @param {boolean} options.includeBase - Whether to include `@layer base` reset rules (default: true)
 * @returns {Promise<{ css: string, candidates: Set<string>, config: object }>}
 */
export async function compile(options = {}) {
  const config = await loadConfig(options.config);
  const includeBase = options.includeBase !== undefined ? options.includeBase : true;

  const allCandidates = new Set();

  // If content strings or file patterns are passed explicitly
  if (typeof options.content === 'string') {
    const candidates = scanText(options.content, config);
    for (const c of candidates) allCandidates.add(c);
  } else if (config.content && Array.isArray(config.content)) {
    const { candidates } = scanFiles(config.content, config);
    for (const c of candidates) allCandidates.add(c);
  }

  const css = generateCss(allCandidates, config, { includeBase });

  return {
    css,
    candidates: allCandidates,
    config
  };
}

export {
  loadConfig,
  defaultConfig,
  defaultTokens,
  scanText,
  scanFiles,
  resolveContentFiles,
  generateCss,
  getKndsMasterData,
  escapeClassName
};
