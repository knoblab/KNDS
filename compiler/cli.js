#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { compile, loadConfig, resolveContentFiles } from './index.js';

const args = process.argv.slice(2);

function printHelp() {
  console.log(`
KNDS Design Token & Archetype Compiler Engine (Knoblab Design Language)
Usage: knds [options]

Options:
  -i, --input <file>     Input CSS file containing @knds directives (optional)
  -o, --output <file>    Output destination CSS file path (required)
  -c, --config <file>    Path to knds.config.js (optional)
  -w, --watch            Watch for file changes and rebuild on the fly
  --minify               Minify generated CSS output
  -h, --help             Display help menu
  -v, --version          Display KNDS version
`);
}

function getArgValue(flags) {
  for (const flag of flags) {
    const idx = args.indexOf(flag);
    if (idx !== -1 && idx + 1 < args.length) {
      return args[idx + 1];
    }
  }
  return null;
}

const hasFlag = (flags) => flags.some(f => args.includes(f));

if (hasFlag(['-h', '--help'])) {
  printHelp();
  process.exit(0);
}

if (hasFlag(['-v', '--version'])) {
  console.log('KNDS Design Token & Archetype Compiler Engine v1.0.0');
  process.exit(0);
}

const inputFile = getArgValue(['-i', '--input']);
const outputFile = getArgValue(['-o', '--output']);
const configFile = getArgValue(['-c', '--config']);
const isWatch = hasFlag(['-w', '--watch']);
const isMinify = hasFlag(['--minify']);

if (!outputFile) {
  console.error('[KNDS CLI Error] --output (-o) file path is required. Run `knds --help` for usage.');
  process.exit(1);
}

async function runBuild() {
  const startTime = performance.now();
  const config = await loadConfig(configFile);

  let inputCss = '';
  if (inputFile && fs.existsSync(inputFile)) {
    inputCss = fs.readFileSync(inputFile, 'utf8');
  }

  const result = await compile({ config, inputCss, includeBase: true });
  let outputCss = result.css;

  // If inputCss has @knds directives, replace them in inputCss
  if (inputCss && inputCss.includes('@knds')) {
    outputCss = inputCss
      .replace(/@knds\s+base\s*;/g, result.css.includes('@layer base') ? result.css.slice(result.css.indexOf('@layer base')) : '')
      .replace(/@knds\s*;?/g, result.css);
  }

  if (isMinify) {
    outputCss = outputCss
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\s+/g, ' ')
      .replace(/\s*([{}:;,])\s*/g, '$1')
      .trim();
  }

  // Ensure output directory exists
  const outDir = path.dirname(path.resolve(process.cwd(), outputFile));
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(path.resolve(process.cwd(), outputFile), outputCss, 'utf8');

  const duration = (performance.now() - startTime).toFixed(2);
  const sizeKb = (Buffer.byteLength(outputCss, 'utf8') / 1024).toFixed(2);
  console.log(`[KNDS Design Engine] Successfully compiled design tokens & archetypes (${outputFile}: ${sizeKb} KB - ${result.candidates.size} token specifications in ${duration}ms)`);

  return config;
}

await runBuild();

if (isWatch) {
  console.log(`[KNDS Token Watcher] Watching source files for design token changes...`);
  const config = await loadConfig(configFile);
  const watchedFiles = new Set(resolveContentFiles(config.content));

  if (inputFile && fs.existsSync(inputFile)) {
    watchedFiles.add(path.resolve(process.cwd(), inputFile));
  }
  if (configFile && fs.existsSync(configFile)) {
    watchedFiles.add(path.resolve(process.cwd(), configFile));
  }

  let buildTimeout = null;
  const triggerRebuild = (eventType, filename) => {
    if (buildTimeout) clearTimeout(buildTimeout);
    buildTimeout = setTimeout(async () => {
      console.log(`\n[KNDS Token Watcher] Change detected (${filename || eventType}). Recompiling design tokens...`);
      try {
        await runBuild();
      } catch (err) {
        console.error(`[KNDS Token Watcher Error]`, err.message);
      }
    }, 50);
  };

  // Watch individual files or their parent directories
  const watchedDirs = new Set();
  for (const f of watchedFiles) {
    watchedDirs.add(path.dirname(f));
  }

  for (const dir of watchedDirs) {
    if (fs.existsSync(dir)) {
      try {
        fs.watch(dir, { recursive: false }, triggerRebuild);
      } catch (err) {
        // Fallback or ignore watch errors on Windows
      }
    }
  }
}
