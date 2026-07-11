import fs from 'node:fs';
import path from 'node:path';

/**
 * Scan text/code content and extract candidate utility classes
 * @param {string} content - Raw source code string (.html, .tsx, .vue, etc.)
 * @param {object} options - Scanner options { prefix: 'knds-', safelist: [], blocklist: [] }
 * @returns {Set<string>} - Set of candidate utility strings
 */
export function scanText(content, options = {}) {
  const prefix = options.prefix || 'knds-';
  const safelist = options.safelist || [];
  const blocklist = new Set(options.blocklist || []);

  const candidates = new Set();

  // Add safelist items first
  for (const item of safelist) {
    if (typeof item === 'string') {
      candidates.add(item);
    }
  }

  if (!content || typeof content !== 'string') {
    return candidates;
  }

  // Regex to match token sequences that might be class names
  // Matches non-whitespace and non-delimiter characters
  const tokenRegex = /[^<>"'`\s,;{}()]+/g;
  let match;

  while ((match = tokenRegex.exec(content)) !== null) {
    const token = match[0].trim();

    // Remove trailing dots, colons or exclamation marks if attached by accident
    const cleanedToken = token.replace(/^[.!]+/g, '').replace(/[.!]+$/g, '');

    if (!cleanedToken || blocklist.has(cleanedToken)) {
      continue;
    }

    // Check against safelist regexes
    let matchedSafelistRegex = false;
    for (const item of safelist) {
      if (item instanceof RegExp && item.test(cleanedToken)) {
        candidates.add(cleanedToken);
        matchedSafelistRegex = true;
        break;
      }
    }

    if (matchedSafelistRegex) {
      continue;
    }

    // If prefix is set, only include tokens containing the prefix
    if (prefix) {
      if (cleanedToken.includes(prefix)) {
        candidates.add(cleanedToken);
      }
    } else {
      // If prefix is empty string, add all tokens (or let generator filter valid ones)
      candidates.add(cleanedToken);
    }
  }

  return candidates;
}

/**
 * Simple zero-dependency glob/pattern to regex matcher
 */
function globToRegex(globPattern) {
  let regexStr = globPattern
    .replace(/\\/g, '/')
    .replace(/\./g, '\\.')
    .replace(/\*\*\/\*/g, '.*')
    .replace(/\*\*/g, '.*')
    .replace(/\*/g, '[^/]*');

  // Handle {html,js,ts} syntax
  regexStr = regexStr.replace(/\{([^}]+)\}/g, (_, group) => {
    return `(${group.split(',').map(s => s.trim()).join('|')})`;
  });

  return new RegExp(`^${regexStr}$`);
}

/**
 * Recursively find files matching glob patterns
 */
export function resolveContentFiles(patterns, baseDir = process.cwd()) {
  if (!patterns || !Array.isArray(patterns)) {
    return [];
  }

  const matchedFiles = new Set();

  for (const pattern of patterns) {
    const normalizedPattern = pattern.replace(/\\/g, '/');
    const regex = globToRegex(normalizedPattern);

    // Find the fixed base directory before any '*' or glob syntax
    const parts = normalizedPattern.split('/');
    let searchRootParts = [];
    for (const part of parts) {
      if (part.includes('*') || part.includes('{') || part.includes('?')) {
        break;
      }
      searchRootParts.push(part);
    }
    const searchRoot = path.resolve(baseDir, searchRootParts.join('/') || '.');

    if (!fs.existsSync(searchRoot)) {
      continue;
    }

    const stat = fs.statSync(searchRoot);
    if (stat.isFile()) {
      const relPath = path.relative(baseDir, searchRoot).replace(/\\/g, '/');
      if (regex.test(relPath) || regex.test('./' + relPath)) {
        matchedFiles.add(searchRoot);
      }
      continue;
    }

    // Recursive directory traversal
    function traverse(dir) {
      let entries;
      try {
        entries = fs.readdirSync(dir, { withFileTypes: true });
      } catch (err) {
        return;
      }

      for (const entry of entries) {
        if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'dist') {
          continue;
        }
        const fullPath = path.join(dir, entry.name);
        const relPath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
        const checkPath = relPath.startsWith('.') ? relPath : './' + relPath;

        if (entry.isDirectory()) {
          traverse(fullPath);
        } else if (entry.isFile()) {
          if (regex.test(relPath) || regex.test(checkPath) || regex.test(fullPath)) {
            matchedFiles.add(fullPath);
          }
        }
      }
    }

    traverse(searchRoot);
  }

  return Array.from(matchedFiles);
}

/**
 * Scan multiple files based on content patterns and extract all candidate utility classes
 */
export function scanFiles(patterns, options = {}, baseDir = process.cwd()) {
  const files = resolveContentFiles(patterns, baseDir);
  const allCandidates = new Set();

  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const candidates = scanText(content, options);
      for (const c of candidates) {
        allCandidates.add(c);
      }
    } catch (err) {
      // Ignore read errors
    }
  }

  return { candidates: allCandidates, files };
}
