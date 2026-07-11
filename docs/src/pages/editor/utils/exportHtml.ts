import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { EditorPageItem, EditorNode } from '../types';

const generateNodeHtml = (node: EditorNode): string => {
  let contentHtml = node.content ? node.content.replace(/\n/g, '<br/>') : '';

  if (node.children && node.children.length > 0) {
    contentHtml = node.children.map(generateNodeHtml).join('\n');
  }

  const className = node.classes.join(' ');
  const classAttr = className ? ` class="${className}"` : '';

  const stylesStr = Object.entries(node.styles || {})
    .map(([k, v]) => `${k.replace(/([A-Z])/g, '-$1').toLowerCase()}:${v}`)
    .join(';');
  const styleAttr = stylesStr ? ` style="${stylesStr}"` : '';

  const attributesStr = Object.entries(node.attributes)
    .map(([key, value]) => ` ${key}="${value}"`)
    .join('');

  switch (node.type) {
    case 'div':
    case 'span':
    case 'p':
    case 'h1':
    case 'h2':
    case 'h3':
    case 'button':
    case 'a':
      return `<${node.type}${classAttr}${styleAttr}${attributesStr}>${contentHtml}</${node.type}>`;
    case 'img':
      return `<img${classAttr}${styleAttr}${attributesStr} />`;
    case 'input':
      return `<input type="text"${classAttr}${styleAttr}${attributesStr} />`;
    case 'svg':
      return `<svg${classAttr}${styleAttr}${attributesStr}>${contentHtml}</svg>`;
    default:
      return `<div${classAttr}${styleAttr}${attributesStr}>${contentHtml}</div>`;
  }
};

export const exportToZip = async (pages: EditorPageItem[], appTitle: string, appDescription: string) => {
  const zip = new JSZip();

  pages.forEach((page, pageIndex) => {
    const bodyContent = page.rootNode.children.map(generateNodeHtml).join('\\n');

    // Group pages by category
    const categoriesMap: Record<string, typeof pages> = {};
    pages.forEach(p => {
      const cat = p.category || '';
      if (!categoriesMap[cat]) {
        categoriesMap[cat] = [];
      }
      categoriesMap[cat].push(p);
    });

    const sortedCategories = Object.keys(categoriesMap).sort((a, b) => {
      if (a === '') return 1;
      if (b === '') return -1;
      return a.localeCompare(b);
    });

    const navItems = sortedCategories.map(cat => {
      const catPages = categoriesMap[cat];
      const catDisplayName = cat === '' ? '미분류 페이지' : cat;

      const pageItemsHtml = catPages.map(p => {
        const isCurrent = p.id === page.id;
        const globalIdx = pages.findIndex(x => x.id === p.id);
        const num = globalIdx + 1;
        const numStr = num < 10 ? `0${num}` : `${num}`;
        const href = globalIdx === 0 ? 'index.html' : `page_${p.id}.html`;

        const activeStyleBg = isCurrent ? 'var(--color-functional-red)' : 'var(--color-border-default)';
        const activeStyleColor = isCurrent ? 'var(--color-bg-primary)' : 'var(--color-text-secondary)';

        return `
          <div class="knds-nav-item ${isCurrent ? 'active' : ''}" style="margin-bottom: 4px; cursor: pointer; border-radius: var(--radius-sm);" onclick="window.location.href='${href}'">
            <div class="knds-flex-row knds-items-center knds-gap-150 knds-overflow-hidden knds-w-full" style="padding: 2px 0;">
              <span class="knds-text-label-14-mono knds-text-center knds-font-bold" style="background-color: ${activeStyleBg}; color: ${activeStyleColor}; padding: 2px 6px; border-radius: 2px; font-size: 11px; min-width: 24px;">
                ${numStr}
              </span>
              <div class="knds-flex-col knds-overflow-hidden" style="flex: 1;">
                <span class="knds-text-label-16 knds-flex-row knds-items-center knds-overflow-hidden" style="font-size: 14px; white-space: nowrap; text-overflow: ellipsis;">
                  ${p.title}
                </span>
              </div>
            </div>
          </div>
        `;
      }).join('\n');

      return `
        <div class="knds-mb-150">
          <div 
            class="knds-nav-group-header" 
            onclick="toggleNavGroup(this)"
            style="display: flex; justify-content: space-between; align-items: center; margin: 12px 0 6px 0; padding: 4px 8px; background-color: var(--color-bg-secondary); border-radius: var(--radius-sm); cursor: pointer;"
          >
            <div class="knds-flex-row knds-items-center knds-gap-100">
              <span class="knds-text-label-14-mono" style="font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">
                📁 ${catDisplayName}
              </span>
              <span class="knds-text-label-14-mono knds-text-muted" style="font-size: 11px;">
                (${catPages.length})
              </span>
            </div>
            <svg class="knds-chevron" viewBox="0 0 24 24" style="width: 12px; height: 12px; fill: currentColor;">
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>
          <div class="knds-nav-group-content knds-flex-col" style="padding-left: 8px; border-left: 1px solid var(--color-border-default); margin-left: 8px; gap: 4px; display: flex;">
            ${pageItemsHtml}
          </div>
        </div>
      `;
    }).join('\n');

    const htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${appTitle} - ${page.title}</title>
  <link rel="stylesheet" href="index.css">
  <style>
    body { margin: 0; font-family: 'Inter', sans-serif; background-color: var(--color-bg-primary); }
    .knds-app { display: flex; width: 100vw; height: 100vh; overflow: hidden; }
    .knds-sidebar { width: 25%; border-right: 1px solid var(--color-border-default); display: flex; flex-direction: column; }
    .knds-main-view { flex: 1; overflow-y: auto; }
    .knds-nav-item:hover { background-color: var(--color-bg-secondary); }
  </style>
</head>
<body>
  <div class="knds-app">
    <aside class="knds-sidebar">
      <div class="knds-content-relative knds-p-300">
        <div class="knds-mb-300">
          <span class="knds-text-label-14-mono knds-text-red knds-mb-100" style="display: block;">
            ${appDescription}
          </span>
          <div class="knds-flex-row knds-justify-between knds-items-center knds-mb-100">
            <h1 class="knds-text-heading-32">${appTitle}</h1>
          </div>
        </div>
        <nav>
          <span class="knds-text-label-14-mono knds-text-muted knds-border-bottom knds-pb-100 knds-mb-100 knds-font-bold" style="display: block;">
            SITE NAVIGATOR
          </span>
          <div class="knds-mb-200">
            ${navItems}
          </div>
        </nav>
        <!-- 출처 표시 (Optional Attribution) -->
        <div class="knds-mt-400 knds-pt-200 knds-border-top" style="margin-top: 32px; padding-top: 16px;">
          <div class="knds-text-label-14-mono knds-text-muted knds-mb-050">
            <a href="https://github.com/knoblab/KNDS" target="_blank" rel="noreferrer"
              style="color: var(--color-text-secondary); text-decoration: none; transition: color 0.2s;"
              onmouseover="this.style.color='var(--color-text-primary)'"
              onmouseout="this.style.color='var(--color-text-secondary)'">View on GitHub ↗</a>
          </div>
          <div class="knds-text-label-14-mono knds-text-muted">
            Made with KNDS
          </div>
        </div>
      </div>
    </aside>
    <main class="knds-main-view">
      <div class="knds-main-content">
        <div class="knds-panel knds-grid-bg">
          <div class="knds-content-relative">
            <span class="knds-text-label-14-mono knds-text-red knds-mb-100" style="display: block;">
              PAGE ${pageIndex + 1 < 10 ? '0' + (pageIndex + 1) : pageIndex + 1}
            </span>
            <div class="knds-flex-row knds-justify-between" style="align-items: baseline;">
              <h2 class="knds-text-heading-32">${page.title}</h2>
            </div>
          </div>
        </div>
        ${bodyContent}
      </div>
    </main>
  </div>
  <script>
    function toggleNavGroup(el) {
      var content = el.nextElementSibling;
      var chevron = el.querySelector('.knds-chevron');
      if (content.style.display === 'none') {
        content.style.display = 'flex';
        chevron.classList.remove('collapsed');
      } else {
        content.style.display = 'none';
        chevron.classList.add('collapsed');
      }
    }
  </script>
</body>
</html>`.trim();

    const fileName = pageIndex === 0 ? 'index.html' : `page_${page.id}.html`;
    zip.file(fileName, htmlContent);
  });

  // 2. Add the CSS file
  try {
    const cssResponse = await fetch('/src/index.css');
    const cssContent = await cssResponse.text();
    zip.file('index.css', cssContent);
  } catch (err) {
    zip.file('index.css', '/* Failed to fetch index.css */');
  }

  // 3. Add Project Data JSON for importing
  const projectData = {
    appTitle,
    appDescription,
    pages
  };
  zip.file('knds-ds-project.json', JSON.stringify(projectData, null, 2));

  // 4. Generate and save ZIP
  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, 'knds-ds-export.zip');
};
