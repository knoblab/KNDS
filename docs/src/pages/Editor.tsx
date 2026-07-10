import React, { useState } from 'react';
import { exportToZip } from '../utils/exportZip';

export type ElementType = 'panel' | 'heading' | 'paragraph' | 'primary-btn' | 'secondary-btn' | 'split-layout' | 'split-left' | 'split-right';

export interface EditorStyles {
  typography?: string;
  margin?: string;
  padding?: string;
  align?: string;
  size?: string;
}

export interface EditorElement {
  id: string;
  type: ElementType;
  content?: string;
  className?: string; // Custom KNDS classes
  styles?: EditorStyles;
  children: EditorElement[];
}

export default function Editor() {
  const [elements, setElements] = useState<EditorElement[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  // View Modes
  const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);
  const [isCodeMode, setIsCodeMode] = useState<boolean>(false);

  // ----------------------------------------------------------------------
  // Node Operations
  // ----------------------------------------------------------------------
  const addElement = (type: ElementType) => {
    const newEl: EditorElement = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content: getDefaultContent(type),
      className: '',
      styles: {},
      children: []
    };

    if (type === 'split-layout') {
      newEl.children = [
        { id: Math.random().toString(36).substr(2, 9), type: 'split-left', styles: {}, children: [] },
        { id: Math.random().toString(36).substr(2, 9), type: 'split-right', styles: {}, children: [] }
      ];
    }

    if (selectedId) {
      const updateTree = (nodes: EditorElement[]): EditorElement[] => {
        return nodes.map(node => {
          if (node.id === selectedId) {
            // Allow appending children only to containers
            if (['panel', 'split-left', 'split-right'].includes(node.type)) {
              return { ...node, children: [...node.children, newEl] };
            }
            return node;
          }
          return { ...node, children: updateTree(node.children) };
        });
      };
      setElements(updateTree(elements));
    } else {
      setElements([...elements, newEl]);
    }
  };

  const getDefaultContent = (type: ElementType) => {
    switch (type) {
      case 'heading': return '새로운 제목 (H2)';
      case 'paragraph': return '본문 텍스트를 입력하세요.';
      case 'primary-btn': return '기본 버튼';
      case 'secondary-btn': return '보조 버튼';
      default: return '';
    }
  };

  const removeElement = (id: string) => {
    const removeFromTree = (nodes: EditorElement[]): EditorElement[] => {
      return nodes.filter(n => n.id !== id).map(n => ({
        ...n,
        children: removeFromTree(n.children)
      }));
    };
    setElements(removeFromTree(elements));
    if (selectedId === id) setSelectedId(null);
  };

  const updateElementProperty = (id: string, prop: 'content' | 'className', value: string) => {
    const updateTree = (nodes: EditorElement[]): EditorElement[] => {
      return nodes.map(node => {
        if (node.id === id) {
          return { ...node, [prop]: value };
        }
        return { ...node, children: updateTree(node.children) };
      });
    };
    setElements(updateTree(elements));
  };

  const updateElementStyle = (id: string, styleKey: keyof EditorStyles, value: string) => {
    const updateTree = (nodes: EditorElement[]): EditorElement[] => {
      return nodes.map(node => {
        if (node.id === id) {
          return { ...node, styles: { ...(node.styles || {}), [styleKey]: value } };
        }
        return { ...node, children: updateTree(node.children) };
      });
    };
    setElements(updateTree(elements));
  };

  const moveElementUp = (id: string) => {
    const moveInArray = (arr: EditorElement[]): EditorElement[] => {
      const index = arr.findIndex(n => n.id === id);
      if (index > 0) {
        const newArr = [...arr];
        const temp = newArr[index - 1];
        newArr[index - 1] = newArr[index];
        newArr[index] = temp;
        return newArr;
      }
      return arr.map(n => ({ ...n, children: moveInArray(n.children) }));
    };
    setElements(moveInArray(elements));
  };

  const getSelectedNode = (nodes: EditorElement[]): EditorElement | null => {
    for (const node of nodes) {
      if (node.id === selectedId) return node;
      const found = getSelectedNode(node.children);
      if (found) return found;
    }
    return null;
  };

  const selectedNode = selectedId ? getSelectedNode(elements) : null;

  // ----------------------------------------------------------------------
  // Renderers
  // ----------------------------------------------------------------------
  const getCombinedClasses = (node: EditorElement, baseClass: string) => {
    const s = node.styles || {};
    const classes = [baseClass];
    if (s.typography) classes.push(s.typography);
    if (s.margin) classes.push(s.margin);
    if (s.padding) classes.push(s.padding);
    if (s.align) classes.push(s.align);
    if (s.size) classes.push(s.size);
    if (node.className) classes.push(node.className);
    return classes.filter(Boolean).join(' ');
  };

  const generateHTMLString = (nodes: EditorElement[], indent = ''): string => {
    return nodes.map(node => {
      switch (node.type) {
        case 'panel':
          return `${indent}<div class="${getCombinedClasses(node, 'knds-panel')}">\n${generateHTMLString(node.children, indent + '  ')}\n${indent}</div>`;
        case 'split-layout':
          return `${indent}<div class="${getCombinedClasses(node, 'knds-flex-row')}">\n${generateHTMLString(node.children, indent + '  ')}\n${indent}</div>`;
        case 'split-left':
          return `${indent}<div class="${getCombinedClasses(node, '')}" style="width: 38%;">\n${generateHTMLString(node.children, indent + '  ')}\n${indent}</div>`;
        case 'split-right':
          return `${indent}<div class="${getCombinedClasses(node, '')}" style="width: 62%;">\n${generateHTMLString(node.children, indent + '  ')}\n${indent}</div>`;
        case 'heading':
          return `${indent}<h2 class="${getCombinedClasses(node, 'knds-text-heading-32')}">${node.content}</h2>`;
        case 'paragraph':
          return `${indent}<p class="${getCombinedClasses(node, 'knds-text-copy-14')}">${node.content}</p>`;
        case 'primary-btn':
          return `${indent}<button class="${getCombinedClasses(node, 'knds-btn-primary')}">${node.content}</button>`;
        case 'secondary-btn':
          return `${indent}<button class="${getCombinedClasses(node, 'knds-secondary-btn')}">${node.content}</button>`;
        default:
          return '';
      }
    }).join('\n');
  };

  const renderVisualNode = (node: EditorElement) => {
    const isSelected = node.id === selectedId && !isPreviewMode;
    const selectStyle = isSelected 
      ? { outline: '2px solid var(--color-functional-red)', outlineOffset: '2px', position: 'relative' as const } 
      : {};

    const onClick = (e: React.MouseEvent) => {
      if (isPreviewMode) return;
      e.stopPropagation();
      e.preventDefault();
      setSelectedId(node.id);
    };

    // To prevent actual button clicks from triggering
    const contentStyle = { pointerEvents: 'none' as const };

    switch (node.type) {
      case 'panel':
        return (
          <div key={node.id} className={getCombinedClasses(node, 'knds-panel')} style={selectStyle} onClick={onClick}>
            {node.children.length > 0 ? node.children.map(renderVisualNode) : <div className="knds-text-muted knds-text-label-14-mono" style={contentStyle}>패널 (여기에 추가)</div>}
          </div>
        );
      case 'split-layout':
        return (
          <div key={node.id} className={getCombinedClasses(node, 'knds-flex-row')} style={{ ...selectStyle, gap: '16px' }} onClick={onClick}>
            {node.children.map(renderVisualNode)}
          </div>
        );
      case 'split-left':
        return (
          <div key={node.id} className={getCombinedClasses(node, '')} style={{ ...selectStyle, width: '38%' }} onClick={onClick}>
            {node.children.length > 0 ? node.children.map(renderVisualNode) : <div className="knds-text-muted knds-text-label-14-mono" style={{ ...contentStyle, padding: '16px', border: '1px dashed var(--color-border-hover)' }}>좌측 (38%)</div>}
          </div>
        );
      case 'split-right':
        return (
          <div key={node.id} className={getCombinedClasses(node, '')} style={{ ...selectStyle, width: '62%' }} onClick={onClick}>
            {node.children.length > 0 ? node.children.map(renderVisualNode) : <div className="knds-text-muted knds-text-label-14-mono" style={{ ...contentStyle, padding: '16px', border: '1px dashed var(--color-border-hover)' }}>우측 (62%)</div>}
          </div>
        );
      case 'heading':
        return <h2 key={node.id} className={getCombinedClasses(node, 'knds-text-heading-32')} style={selectStyle} onClick={onClick}><span style={contentStyle}>{node.content}</span></h2>;
      case 'paragraph':
        return <p key={node.id} className={getCombinedClasses(node, 'knds-text-copy-14')} style={selectStyle} onClick={onClick}><span style={contentStyle}>{node.content}</span></p>;
      case 'primary-btn':
        return <button key={node.id} className={getCombinedClasses(node, 'knds-btn-primary')} style={selectStyle} onClick={onClick}><span style={contentStyle}>{node.content}</span></button>;
      case 'secondary-btn':
        return <button key={node.id} className={getCombinedClasses(node, 'knds-secondary-btn')} style={selectStyle} onClick={onClick}><span style={contentStyle}>{node.content}</span></button>;
      default:
        return null;
    }
  };

  const renderTree = (nodes: EditorElement[], level = 0) => {
    return nodes.map(node => (
      <div key={node.id} style={{ paddingLeft: level * 12, marginTop: 4 }}>
        <div 
          onClick={() => setSelectedId(node.id)}
          className="knds-flex-row knds-items-center knds-justify-between"
          style={{ 
            cursor: 'pointer', 
            padding: '4px 8px',
            backgroundColor: selectedId === node.id ? 'var(--color-bg-secondary)' : 'transparent',
            borderLeft: selectedId === node.id ? '2px solid var(--color-functional-red)' : '2px solid transparent'
          }}
        >
          <span className="knds-text-label-14-mono">{node.type}</span>
          <div className="knds-flex-row knds-gap-100">
            {node.type !== 'split-left' && node.type !== 'split-right' && (
              <>
                <button onClick={(e) => { e.stopPropagation(); moveElementUp(node.id); }} className="knds-text-label-14-mono knds-text-muted">↑</button>
                <button onClick={(e) => { e.stopPropagation(); removeElement(node.id); }} className="knds-text-label-14-mono knds-text-red">X</button>
              </>
            )}
          </div>
        </div>
        {node.children.length > 0 && renderTree(node.children, level + 1)}
      </div>
    ));
  };

  // ----------------------------------------------------------------------
  // Main Render
  // ----------------------------------------------------------------------
  if (isPreviewMode) {
    return (
      <div className="knds-app knds-flex-col">
        <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 999 }}>
          <button className="knds-btn-primary" onClick={() => setIsPreviewMode(false)} style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            프리뷰 종료 (Exit Preview)
          </button>
        </div>
        <main className="knds-main-view knds-grid-bg knds-w-full" style={{ minHeight: '100vh', padding: 'var(--space-400)' }}>
          <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
            {elements.length === 0 ? (
              <div className="knds-text-heading-32 knds-text-muted knds-text-center" style={{ marginTop: '100px' }}>비어 있음</div>
            ) : elements.map(renderVisualNode)}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="knds-app">
      {/* LEFT PANE: Toolbox & DOM Tree */}
      <aside className="knds-sidebar" style={{ width: '25%', borderRight: '1px solid var(--color-border-default)', overflowY: 'auto' }}>
        <div className="knds-content-relative knds-p-200">
          <div className="knds-flex-row knds-justify-between knds-items-center knds-mb-200">
            <h1 className="knds-text-heading-32" style={{ fontSize: '24px' }}>KNDS Editor</h1>
            <a href="#/" className="knds-text-label-14-mono knds-text-muted" style={{ textDecoration: 'none' }}>나가기</a>
          </div>

          <div className="knds-panel knds-mb-200">
            <h3 className="knds-text-label-16 knds-mb-100">컴포넌트 삽입</h3>
            <div className="knds-flex-row" style={{ gap: '8px', flexWrap: 'wrap' }}>
              <button className="knds-secondary-btn" onClick={() => addElement('panel')}>Panel</button>
              <button className="knds-secondary-btn" onClick={() => addElement('split-layout')}>38:62 Split</button>
              <button className="knds-secondary-btn" onClick={() => addElement('heading')}>Heading</button>
              <button className="knds-secondary-btn" onClick={() => addElement('paragraph')}>Paragraph</button>
              <button className="knds-secondary-btn" onClick={() => addElement('primary-btn')}>Pri Btn</button>
              <button className="knds-secondary-btn" onClick={() => addElement('secondary-btn')}>Sec Btn</button>
            </div>
            {selectedId && (
              <div className="knds-mt-100">
                <button className="knds-secondary-btn" onClick={() => setSelectedId(null)}>선택 해제 (최상위에 추가)</button>
              </div>
            )}
          </div>

          <div className="knds-panel">
            <h3 className="knds-text-label-16 knds-mb-100">DOM 트리</h3>
            {elements.length === 0 ? (
              <p className="knds-text-copy-14 knds-text-muted">요소가 없습니다.</p>
            ) : (
              <div>{renderTree(elements)}</div>
            )}
          </div>
        </div>
      </aside>

      {/* CENTER PANE: Canvas or Code View */}
      <main className="knds-main-view knds-grid-bg knds-relative" style={{ width: selectedNode ? '50%' : '75%', overflowY: 'auto' }} onClick={() => setSelectedId(null)}>
        <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 10, display: 'flex', gap: '8px' }}>
          <button className="knds-secondary-btn" onClick={(e) => { e.stopPropagation(); setIsCodeMode(!isCodeMode); }} style={{ backgroundColor: 'var(--color-bg-primary)' }}>
            {isCodeMode ? '디자인 뷰 (Design)' : '코드 뷰 (Code)'}
          </button>
          <button className="knds-secondary-btn" onClick={(e) => { e.stopPropagation(); setIsPreviewMode(true); }} style={{ backgroundColor: 'var(--color-bg-primary)' }}>
            👁️ 미리보기
          </button>
          <button className="knds-btn-primary" onClick={(e) => { e.stopPropagation(); exportToZip(elements); }}>
            ZIP 내보내기
          </button>
        </div>

        <div className="knds-content-relative" style={{ padding: '64px 32px 32px 32px' }}>
          {isCodeMode ? (
            <div className="knds-panel">
              <span className="knds-text-label-14-mono knds-text-muted knds-mb-100" style={{ display: 'block' }}>GENERATED HTML</span>
              <pre className="knds-text-copy-13-mono knds-selectable" style={{ whiteSpace: 'pre-wrap', color: 'var(--color-text-primary)' }}>
                {generateHTMLString(elements)}
              </pre>
            </div>
          ) : (
            <>
              {elements.length === 0 ? (
                <div className="knds-text-heading-32 knds-text-muted knds-text-center" style={{ marginTop: '100px' }}>
                  좌측에서 요소를 추가하세요
                </div>
              ) : (
                elements.map(renderVisualNode)
              )}
            </>
          )}
        </div>
      </main>

      {/* RIGHT PANE: Properties Inspector */}
      {selectedNode && (
        <aside className="knds-sidebar knds-border-left" style={{ width: '25%', overflowY: 'auto', backgroundColor: 'var(--color-bg-primary)' }}>
          <div className="knds-p-200">
            <div className="knds-flex-row knds-justify-between knds-items-center knds-mb-200">
              <h3 className="knds-text-label-16 knds-font-bold">속성 (Properties)</h3>
              <span className="knds-text-label-14-mono knds-text-red">{selectedNode.type}</span>
            </div>

            {/* Content Field (if applicable) */}
            {!['panel', 'split-layout', 'split-left', 'split-right'].includes(selectedNode.type) && (
              <div className="knds-mb-200">
                <label className="knds-text-label-14-mono knds-mb-050" style={{ display: 'block' }}>텍스트 (Content)</label>
                <textarea 
                  className="knds-text-copy-14"
                  style={{ width: '100%', minHeight: '80px', padding: '8px', backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border-default)', color: 'var(--color-text-primary)', borderRadius: '4px', resize: 'vertical' }}
                  value={selectedNode.content || ''}
                  onChange={(e) => updateElementProperty(selectedNode.id, 'content', e.target.value)}
                />
              </div>
            )}

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border-default)', margin: '16px 0' }} />

            {/* Button Size Dropdown (Only for buttons) */}
            {(selectedNode.type === 'primary-btn' || selectedNode.type === 'secondary-btn') && (
              <div className="knds-mb-200">
                <label className="knds-text-label-14-mono knds-mb-050" style={{ display: 'block' }}>버튼 크기 (Button Size)</label>
                <select 
                  className="knds-text-copy-14"
                  style={{ width: '100%', padding: '8px', backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border-default)', color: 'var(--color-text-primary)', borderRadius: '4px' }}
                  value={selectedNode.styles?.size || ''}
                  onChange={(e) => updateElementStyle(selectedNode.id, 'size', e.target.value)}
                >
                  <option value="">(기본값 - MD 44px)</option>
                  <option value="knds-btn-xs">XS (초소형 - 32px)</option>
                  <option value="knds-btn-sm">S (소형 - 40px)</option>
                  <option value="knds-btn-md">M (중형 - 44px)</option>
                  <option value="knds-btn-lg">L (대형 - 48px)</option>
                  <option value="knds-btn-xl">XL (초대형 - 56px)</option>
                </select>
              </div>
            )}

            {/* Typography Dropdown */}
            <div className="knds-mb-200">
              <label className="knds-text-label-14-mono knds-mb-050" style={{ display: 'block' }}>타이포그래피 (Typography)</label>
              <select 
                className="knds-text-copy-14"
                style={{ width: '100%', padding: '8px', backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border-default)', color: 'var(--color-text-primary)' }}
                value={selectedNode.styles?.typography || ''}
                onChange={(e) => updateElementStyle(selectedNode.id, 'typography', e.target.value)}
              >
                <option value="">(기본값)</option>
                <option value="knds-text-heading-72">Heading 72 (초대형)</option>
                <option value="knds-text-heading-32">Heading 32 (대형)</option>
                <option value="knds-text-label-16">Label 16 (서브타이틀)</option>
                <option value="knds-text-label-14-mono">Label 14 Mono (고정폭)</option>
                <option value="knds-text-copy-14">Copy 14 (본문)</option>
                <option value="knds-text-copy-13-mono">Copy 13 Mono (인라인)</option>
              </select>
            </div>

            {/* Margin Dropdown */}
            <div className="knds-mb-200">
              <label className="knds-text-label-14-mono knds-mb-050" style={{ display: 'block' }}>하단 여백 (Margin Bottom)</label>
              <select 
                className="knds-text-copy-14"
                style={{ width: '100%', padding: '8px', backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border-default)', color: 'var(--color-text-primary)' }}
                value={selectedNode.styles?.margin || ''}
                onChange={(e) => updateElementStyle(selectedNode.id, 'margin', e.target.value)}
              >
                <option value="">(기본값)</option>
                <option value="knds-mb-050">Space-050 (4px)</option>
                <option value="knds-mb-100">Space-100 (8px)</option>
                <option value="knds-mb-150">Space-150 (12px)</option>
                <option value="knds-mb-200">Space-200 (16px)</option>
                <option value="knds-mb-300">Space-300 (24px)</option>
                <option value="knds-mb-400">Space-400 (32px)</option>
              </select>
            </div>

            {/* Padding Dropdown */}
            <div className="knds-mb-200">
              <label className="knds-text-label-14-mono knds-mb-050" style={{ display: 'block' }}>내부 패딩 (Padding)</label>
              <select 
                className="knds-text-copy-14"
                style={{ width: '100%', padding: '8px', backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border-default)', color: 'var(--color-text-primary)' }}
                value={selectedNode.styles?.padding || ''}
                onChange={(e) => updateElementStyle(selectedNode.id, 'padding', e.target.value)}
              >
                <option value="">(기본값)</option>
                <option value="knds-p-100">Space-100 (8px)</option>
                <option value="knds-p-200">Space-200 (16px)</option>
                <option value="knds-p-300">Space-300 (24px)</option>
                <option value="knds-p-400">Space-400 (32px)</option>
              </select>
            </div>

            {/* Align Dropdown */}
            <div className="knds-mb-200">
              <label className="knds-text-label-14-mono knds-mb-050" style={{ display: 'block' }}>정렬 (Alignment)</label>
              <select 
                className="knds-text-copy-14"
                style={{ width: '100%', padding: '8px', backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border-default)', color: 'var(--color-text-primary)' }}
                value={selectedNode.styles?.align || ''}
                onChange={(e) => updateElementStyle(selectedNode.id, 'align', e.target.value)}
              >
                <option value="">(기본값)</option>
                <option value="knds-text-left">좌측 정렬 (Left)</option>
                <option value="knds-text-center">중앙 정렬 (Center)</option>
                <option value="knds-text-right">우측 정렬 (Right)</option>
              </select>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border-default)', margin: '16px 0' }} />

            {/* Custom Classes */}
            <div className="knds-mb-200">
              <label className="knds-text-label-14-mono knds-mb-050" style={{ display: 'block' }}>사용자 커스텀 클래스</label>
              <input 
                type="text"
                className="knds-text-copy-14"
                style={{ width: '100%', padding: '8px', backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border-default)', color: 'var(--color-text-primary)', borderRadius: '4px' }}
                placeholder="ex) text-red-500"
                value={selectedNode.className || ''}
                onChange={(e) => updateElementProperty(selectedNode.id, 'className', e.target.value)}
              />
              <p className="knds-text-copy-13-mono knds-text-muted knds-mt-050" style={{ marginTop: '4px' }}>
                직접 CSS 클래스명을 적을 수 있습니다.
              </p>
            </div>
            
          </div>
        </aside>
      )}
    </div>
  );
}
