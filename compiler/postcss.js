import postcss from 'postcss';
import { loadConfig } from './config.js';
import { scanFiles, resolveContentFiles } from './scanner.js';
import { generateCss, getKndsMasterData, parseCandidate, generateDeclarations, wrapRule } from './generator.js';

/**
 * PostCSS 8 Plugin for KNDS Design Token Engine (`postcss-knds`)
 * @param {object|string} options - Path to knds.config.js or config options object
 */
function postcssKndsPlugin(options = {}) {
  return {
    postcssPlugin: 'postcss-knds',
    async Once(root, { result }) {
      const config = await loadConfig(options);
      const baseDir = process.cwd();

      // 1. Resolve watched content files and register with PostCSS dependency watcher (for Vite/Webpack HMR)
      const files = resolveContentFiles(config.content, baseDir);
      for (const file of files) {
        result.messages.push({
          type: 'dependency',
          plugin: 'postcss-knds',
          file
        });
      }

      // Also watch the config file itself if it exists
      const configPath = typeof options === 'string' ? options : 'knds.config.js';
      if (typeof configPath === 'string') {
        const fullConfigPath = resolveContentFiles([configPath], baseDir)[0];
        if (fullConfigPath) {
          result.messages.push({
            type: 'dependency',
            plugin: 'postcss-knds',
            file: fullConfigPath
          });
        }
      }

      // 2. Scan all candidate utility classes
      const { candidates } = scanFiles(config.content, config, baseDir);
      const sortedCandidates = Array.from(candidates).sort();

      const masterData = getKndsMasterData();
      const componentsList = [];
      const utilitiesList = [];

      for (const candidate of sortedCandidates) {
        const { coreClass, variants } = parseCandidate(candidate);
        const match = generateDeclarations(coreClass, config);
        if (match) {
          const wrapped = wrapRule(candidate, match.layer, match.declarations, variants, config);
          if (wrapped.layer === 'components') {
            componentsList.push(wrapped.cssRule);
          } else {
            utilitiesList.push(wrapped.cssRule);
          }
        }
      }

      // 3. Process directives inside the CSS file: `@knds base;`, `@knds components;`, `@knds utilities;`, `@knds;`
      let hasKndsDirective = false;

      root.walkAtRules('knds', (atRule) => {
        hasKndsDirective = true;
        const param = atRule.params.trim();

        if (param === 'base') {
          if (masterData.baseCss) {
            atRule.replaceWith(postcss.parse(`/* KNDS Base Layer */\n${masterData.baseCss}`));
          } else {
            atRule.remove();
          }
        } else if (param === 'components') {
          if (componentsList.length > 0) {
            atRule.replaceWith(postcss.parse(`/* KNDS Components Layer */\n${componentsList.join('\n\n')}`));
          } else {
            atRule.remove();
          }
        } else if (param === 'utilities') {
          if (utilitiesList.length > 0) {
            atRule.replaceWith(postcss.parse(`/* KNDS Utilities Layer */\n${utilitiesList.join('\n\n')}`));
          } else {
            atRule.remove();
          }
        } else if (!param || param === 'all') {
          // Replace single `@knds;` with full layered output
          const fullOutput = generateCss(candidates, config, { includeBase: true });
          atRule.replaceWith(postcss.parse(fullOutput));
        }
      });

      // Also check for `@import "knds/base";`, `@import "knds/utilities";` etc.
      root.walkAtRules('import', (atRule) => {
        const param = atRule.params.replace(/["']/g, '').trim();
        if (param === 'knds/base' || param === 'knds.css/base') {
          hasKndsDirective = true;
          atRule.replaceWith(postcss.parse(`/* KNDS Base Layer */\n${masterData.baseCss || ''}`));
        } else if (param === 'knds/components' || param === 'knds.css/components') {
          hasKndsDirective = true;
          atRule.replaceWith(postcss.parse(`/* KNDS Components Layer */\n${componentsList.join('\n\n')}`));
        } else if (param === 'knds/utilities' || param === 'knds.css/utilities') {
          hasKndsDirective = true;
          atRule.replaceWith(postcss.parse(`/* KNDS Utilities Layer */\n${utilitiesList.join('\n\n')}`));
        } else if (param === 'knds' || param === '@knoblab/knds') {
          hasKndsDirective = true;
          const fullOutput = generateCss(candidates, config, { includeBase: true });
          atRule.replaceWith(postcss.parse(fullOutput));
        }
      });

      // If CSS had no @knds directives at all, append the generated utilities & components to root
      if (!hasKndsDirective) {
        const fullOutput = generateCss(candidates, config, { includeBase: root.nodes.length === 0 });
        if (fullOutput) {
          root.append(postcss.parse(`\n${fullOutput}`));
        }
      }
    }
  };
}

postcssKndsPlugin.postcss = true;

export default postcssKndsPlugin;
