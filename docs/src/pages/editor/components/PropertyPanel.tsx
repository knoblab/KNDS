import React from 'react';
import { useEditorStore } from '../store';
import { EditorNode } from '../types';

export default function PropertyPanel() {
  const { 
    getSelectedNode, 
    updateNode, 
    appTitle, 
    appDescription, 
    setAppTitle, 
    setAppDescription,
    getActivePageRoot,
    setSelectedNodeId,
    selectedNodeId,
    removeNode
  } = useEditorStore();
  
  const node = getSelectedNode();
  const rootNode = getActivePageRoot();

  const renderTree = (node: EditorNode, level = 0) => {
    return (
      <div key={node.id} style={{ paddingLeft: level === 0 ? 0 : 12, marginTop: 4 }}>
        <div 
          onClick={(e) => { e.stopPropagation(); setSelectedNodeId(node.id); }}
          className="knds-flex-row knds-items-center knds-justify-between"
          style={{ 
            cursor: 'pointer', 
            padding: '4px 8px',
            backgroundColor: selectedNodeId === node.id ? 'var(--color-bg-secondary)' : 'transparent',
            borderLeft: selectedNodeId === node.id ? '2px solid var(--color-functional-red)' : '2px solid transparent',
            borderRadius: '4px'
          }}
        >
          <span className="knds-text-label-14-mono" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', flex: 1, paddingRight: '8px', fontSize: '13px' }}>
            {node.type} {node.classes.length > 0 && <span className="knds-text-muted" style={{ fontSize: '11px' }}>.{node.classes[0]}</span>}
          </span>
          <div className="knds-flex-row knds-gap-100">
            {level > 0 && (
              <button onClick={(e) => { e.stopPropagation(); removeNode(node.id); }} className="knds-text-label-14-mono knds-text-red" style={{background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px'}}>X</button>
            )}
          </div>
        </div>
        {node.children.map(c => renderTree(c, level + 1))}
      </div>
    );
  };

  if (!node) {
    return (
      <aside className="knds-sidebar" style={{ width: '300px', overflowY: 'auto', backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="knds-p-300">
          <div className="knds-flex-row knds-justify-between knds-items-center knds-mb-300">
            <h3 className="knds-text-label-16 knds-font-bold">사이트 전체 설정</h3>
          </div>
          <div className="knds-mb-300">
            <label className="knds-text-label-14-mono knds-mb-100" style={{ display: 'block' }}>앱(사이트) 이름</label>
            <input 
              type="text"
              className="knds-input"
              value={appTitle}
              onChange={(e) => setAppTitle(e.target.value)}
            />
          </div>
          <div className="knds-mb-300">
            <label className="knds-text-label-14-mono knds-mb-100" style={{ display: 'block' }}>앱(사이트) 설명</label>
            <textarea 
              className="knds-input"
              style={{ minHeight: '80px', resize: 'vertical' }}
              value={appDescription}
              onChange={(e) => setAppDescription(e.target.value)}
            />
          </div>

          <hr className="knds-border-bottom knds-mb-300" style={{ border: 'none', marginTop: '24px' }} />

          <div className="knds-mb-300">
            <h3 className="knds-text-label-16 knds-mb-200" style={{ fontWeight: 700 }}>요소 탐색기 (DOM Tree)</h3>
            {rootNode && rootNode.children.length > 0 ? (
              <div style={{ maxHeight: '350px', overflowY: 'auto', border: '1px solid var(--color-border-default)', borderRadius: '6px', padding: '8px', backgroundColor: 'var(--color-bg-secondary)' }}>
                {renderTree(rootNode)}
              </div>
            ) : (
              <p className="knds-text-copy-14 knds-text-muted">요소가 없습니다.</p>
            )}
          </div>
        </div>
      </aside>
    );
  }

  const handleClassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateNode(node.id, { classes: e.target.value.split(' ').filter(Boolean) });
  };

  const handleAttrChange = (key: string, value: string) => {
    updateNode(node.id, { attributes: { ...node.attributes, [key]: value } });
  };

  const addClassFromDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) return;
    const newClass = e.target.value;
    if (!node.classes.includes(newClass)) {
      updateNode(node.id, { classes: [...node.classes, newClass] });
    }
    e.target.value = ""; // Reset dropdown
  };

  const mbClasses = ['knds-mb-050', 'knds-mb-100', 'knds-mb-150', 'knds-mb-200', 'knds-mb-300', 'knds-mb-400'];
  const mtClasses = ['knds-mt-100', 'knds-mt-200', 'knds-mt-300', 'knds-mt-400'];
  const pClasses = ['knds-p-050', 'knds-p-100', 'knds-p-150', 'knds-p-200', 'knds-p-300', 'knds-p-400'];
  const typoClasses = [
    'knds-text-heading-72', 'knds-text-heading-32', 'knds-text-heading-24', 
    'knds-text-label-16', 'knds-text-label-14-mono', 'knds-text-copy-14', 'knds-text-copy-13-mono'
  ];
  
  const currentMb = node.classes.find(c => mbClasses.includes(c)) || '';
  const currentMt = node.classes.find(c => mtClasses.includes(c)) || '';
  const currentP = node.classes.find(c => pClasses.includes(c)) || '';
  const currentTypo = node.classes.find(c => typoClasses.includes(c)) || '';

  const handleGroupChange = (group: string[], newValue: string) => {
    const newClasses = node.classes.filter(c => !group.includes(c));
    if (newValue) newClasses.push(newValue);
    updateNode(node.id, { classes: newClasses });
  };

  const hasContent = !['img', 'input', 'div', 'svg'].includes(node.type);

  return (
    <aside className="knds-sidebar" style={{ width: '300px', overflowY: 'auto', backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="knds-p-300">
        <div className="knds-flex-row knds-justify-between knds-items-center knds-mb-300">
          <h3 className="knds-text-label-16 knds-font-bold">속성 패널 (Properties)</h3>
          <span className="knds-text-label-14-mono knds-text-red">{node.type}</span>
        </div>

        {hasContent && (
          <div className="knds-mb-300">
            <div className="knds-flex-row knds-justify-between knds-items-center knds-mb-100">
              <label className="knds-text-label-14-mono" style={{ display: 'block' }}>텍스트 콘텐츠</label>
              <div className="knds-flex-row knds-gap-050">
                <button 
                  className={`knds-btn-sm ${node.styles?.textAlign === 'left' ? 'knds-btn-primary' : 'knds-secondary-btn'}`}
                  style={{ padding: '2px 6px', fontSize: '12px' }}
                  title="왼쪽 정렬"
                  onClick={() => updateNode(node.id, { styles: { ...node.styles, textAlign: 'left' } })}
                >
                  좌
                </button>
                <button 
                  className={`knds-btn-sm ${node.styles?.textAlign === 'center' ? 'knds-btn-primary' : 'knds-secondary-btn'}`}
                  style={{ padding: '2px 6px', fontSize: '12px' }}
                  title="가운데 정렬"
                  onClick={() => updateNode(node.id, { styles: { ...node.styles, textAlign: 'center' } })}
                >
                  중
                </button>
                <button 
                  className={`knds-btn-sm ${node.styles?.textAlign === 'right' ? 'knds-btn-primary' : 'knds-secondary-btn'}`}
                  style={{ padding: '2px 6px', fontSize: '12px' }}
                  title="오른쪽 정렬"
                  onClick={() => updateNode(node.id, { styles: { ...node.styles, textAlign: 'right' } })}
                >
                  우
                </button>
              </div>
            </div>
            
            <div className="knds-flex-row knds-gap-100 knds-mb-100">
              <select 
                className="knds-input knds-input-sm" style={{ flex: 1 }}
                value={currentTypo}
                onChange={(e) => handleGroupChange(typoClasses, e.target.value)}
              >
                <option value="">글씨 크기 (기본)</option>
                <option value="knds-text-heading-72">초대형 제목 (72px)</option>
                <option value="knds-text-heading-32">대형 제목 (32px)</option>
                <option value="knds-text-heading-24">중형 제목 (24px)</option>
                <option value="knds-text-label-16">라벨 (16px)</option>
                <option value="knds-text-copy-14">본문 (14px)</option>
                <option value="knds-text-label-14-mono">라벨 모노 (14px)</option>
                <option value="knds-text-copy-13-mono">본문 모노 (13px)</option>
              </select>

              <select 
                className="knds-input knds-input-sm" style={{ flex: 1 }}
                value={node.styles?.fontFamily || ''}
                onChange={(e) => {
                  const newFont = e.target.value;
                  if (newFont) {
                    updateNode(node.id, { styles: { ...node.styles, fontFamily: newFont } });
                  } else {
                    const newStyles = { ...node.styles };
                    delete newStyles.fontFamily;
                    updateNode(node.id, { styles: newStyles });
                  }
                }}
              >
                <option value="">글꼴 (Pretendard)</option>
                <option value="'JetBrains Mono', monospace">글꼴 (Monospace)</option>
              </select>
            </div>

            <textarea 
              className="knds-input"
              style={{ minHeight: '80px', resize: 'vertical' }}
              value={node.content || ''}
              onChange={(e) => updateNode(node.id, { content: e.target.value })}
            />
          </div>
        )}

        <div className="knds-mb-300">
          <label className="knds-text-label-14-mono knds-mb-100" style={{ display: 'block' }}>여백(공백) 설정</label>
          <div className="knds-flex-col knds-gap-100">
            <div className="knds-flex-row knds-items-center knds-justify-between">
              <span className="knds-text-label-13-mono knds-text-muted">하단 여백:</span>
              <select className="knds-input knds-input-sm" style={{ width: '180px' }} value={currentMb} onChange={(e) => handleGroupChange(mbClasses, e.target.value)}>
                <option value="">없음</option>
                <option value="knds-mb-050">4px (최소)</option>
                <option value="knds-mb-100">8px (소)</option>
                <option value="knds-mb-150">12px</option>
                <option value="knds-mb-200">16px (중)</option>
                <option value="knds-mb-300">24px</option>
                <option value="knds-mb-400">32px (대)</option>
              </select>
            </div>
            <div className="knds-flex-row knds-items-center knds-justify-between">
              <span className="knds-text-label-13-mono knds-text-muted">상단 여백:</span>
              <select className="knds-input knds-input-sm" style={{ width: '180px' }} value={currentMt} onChange={(e) => handleGroupChange(mtClasses, e.target.value)}>
                <option value="">없음</option>
                <option value="knds-mt-100">8px (소)</option>
                <option value="knds-mt-200">16px (중)</option>
                <option value="knds-mt-300">24px</option>
                <option value="knds-mt-400">32px (대)</option>
              </select>
            </div>
            <div className="knds-flex-row knds-items-center knds-justify-between">
              <span className="knds-text-label-13-mono knds-text-muted">내부 여백:</span>
              <select className="knds-input knds-input-sm" style={{ width: '180px' }} value={currentP} onChange={(e) => handleGroupChange(pClasses, e.target.value)}>
                <option value="">없음</option>
                <option value="knds-p-050">4px (최소)</option>
                <option value="knds-p-100">8px (소)</option>
                <option value="knds-p-150">12px</option>
                <option value="knds-p-200">16px (중)</option>
                <option value="knds-p-300">24px</option>
                <option value="knds-p-400">32px (대)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="knds-mb-300">
          <label className="knds-text-label-14-mono knds-mb-100" style={{ display: 'block' }}>클래스 직접 입력 (공백 구분)</label>
          <input 
            type="text"
            className="knds-input"
            value={node.classes.join(' ')}
            onChange={handleClassChange}
            placeholder="knds-panel knds-mb-400"
          />
        </div>

        <div className="knds-mb-300">
          <label className="knds-text-label-14-mono knds-mb-100" style={{ display: 'block' }}>자주 쓰는 클래스 추가</label>
          <select className="knds-input" onChange={addClassFromDropdown} defaultValue="">
            <option value="" disabled>-- 추가할 클래스 선택 --</option>
            <optgroup label="Layout & Background">
              <option value="knds-panel">knds-panel (기본 박스)</option>
              <option value="knds-grid-bg">knds-grid-bg (모눈종이 배경)</option>
              <option value="knds-bg-secondary">knds-bg-secondary (회색 배경)</option>
              <option value="knds-flex-row">knds-flex-row (가로 정렬)</option>
              <option value="knds-flex-col">knds-flex-col (세로 정렬)</option>
              <option value="knds-items-center">knds-items-center (중앙 정렬)</option>
              <option value="knds-justify-between">knds-justify-between (양끝 정렬)</option>
              <option value="knds-justify-center">knds-justify-center (가운데 정렬)</option>
            </optgroup>
            <optgroup label="Spacing (Margin/Padding)">
              <option value="knds-p-400">knds-p-400 (내부 여백 32px)</option>
              <option value="knds-p-300">knds-p-300 (내부 여백 24px)</option>
              <option value="knds-p-200">knds-p-200 (내부 여백 16px)</option>
              <option value="knds-mb-400">knds-mb-400 (하단 여백 32px)</option>
              <option value="knds-mb-300">knds-mb-300 (하단 여백 24px)</option>
              <option value="knds-mb-200">knds-mb-200 (하단 여백 16px)</option>
              <option value="knds-mb-100">knds-mb-100 (하단 여백 8px)</option>
            </optgroup>
            <optgroup label="Colors & Styling">
              <option value="knds-text-red">knds-text-red (레드 텍스트)</option>
              <option value="knds-text-muted">knds-text-muted (회색 텍스트)</option>
            </optgroup>
            <optgroup label="Components">
              <option value="knds-btn-primary">knds-btn-primary (빨간 버튼)</option>
              <option value="knds-secondary-btn">knds-secondary-btn (회색 버튼)</option>
              <option value="knds-input">knds-input (입력창)</option>
            </optgroup>
          </select>
        </div>

        <div className="knds-mb-300">
          <label className="knds-text-label-14-mono knds-mb-100" style={{ display: 'block' }}>사용자 속성 (Attributes)</label>
          {node.type === 'a' || node.type === 'button' ? (
            <div className="knds-mt-100">
              <input type="text" className="knds-input knds-input-sm" placeholder="href (링크 주소)" value={node.attributes.href || ''} onChange={(e) => handleAttrChange('href', e.target.value)} />
            </div>
          ) : null}
          {node.type === 'img' && (
            <div className="knds-mt-100 knds-flex-col knds-gap-100">
              <div className="knds-flex-col knds-gap-050">
                <input 
                  type="file" 
                  accept="image/*" 
                  style={{ display: 'none' }} 
                  id="image-upload-input"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        handleAttrChange('src', event.target?.result as string);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                <button 
                  className="knds-btn-primary knds-btn-sm" 
                  onClick={() => document.getElementById('image-upload-input')?.click()}
                >
                  내 PC에서 이미지 업로드
                </button>
                <span className="knds-text-label-13-mono knds-text-muted" style={{ textAlign: 'center', margin: '4px 0' }}>또는 인터넷 주소(URL) 입력:</span>
              </div>
              <input type="text" className="knds-input knds-input-sm" placeholder="src (이미지 주소)" value={node.attributes.src || ''} onChange={(e) => handleAttrChange('src', e.target.value)} />
              <input type="text" className="knds-input knds-input-sm" placeholder="alt (대체 텍스트)" value={node.attributes.alt || ''} onChange={(e) => handleAttrChange('alt', e.target.value)} />
              
              <div className="knds-flex-row knds-gap-100">
                <div className="knds-flex-col knds-gap-050" style={{ flex: 1 }}>
                  <label className="knds-text-label-13-mono knds-text-muted">너비 (Width)</label>
                  <input 
                    type="text" 
                    className="knds-input knds-input-sm" 
                    placeholder="e.g. 100%, 300px, auto" 
                    value={node.styles?.width || ''} 
                    onChange={(e) => updateNode(node.id, { styles: { ...node.styles, width: e.target.value } })} 
                  />
                </div>
                <div className="knds-flex-col knds-gap-050" style={{ flex: 1 }}>
                  <label className="knds-text-label-13-mono knds-text-muted">높이 (Height)</label>
                  <input 
                    type="text" 
                    className="knds-input knds-input-sm" 
                    placeholder="e.g. auto, 200px" 
                    value={node.styles?.height || ''} 
                    onChange={(e) => updateNode(node.id, { styles: { ...node.styles, height: e.target.value } })} 
                  />
                </div>
              </div>

              <div className="knds-flex-col knds-gap-050">
                <span className="knds-text-label-13-mono knds-text-muted">크기 간편 설정:</span>
                <div className="knds-flex-row knds-gap-050 knds-flex-wrap">
                  <button 
                    className="knds-secondary-btn knds-btn-sm" 
                    style={{ padding: '2px 8px', fontSize: '11px', height: '28px' }}
                    onClick={() => updateNode(node.id, { styles: { ...node.styles, width: '100%', height: 'auto' } })}
                  >
                    가로 100%
                  </button>
                  <button 
                    className="knds-secondary-btn knds-btn-sm" 
                    style={{ padding: '2px 8px', fontSize: '11px', height: '28px' }}
                    onClick={() => updateNode(node.id, { styles: { ...node.styles, width: '50%', height: 'auto' } })}
                  >
                    가로 50%
                  </button>
                  <button 
                    className="knds-secondary-btn knds-btn-sm" 
                    style={{ padding: '2px 8px', fontSize: '11px', height: '28px' }}
                    onClick={() => updateNode(node.id, { styles: { ...node.styles, width: 'auto', height: 'auto' } })}
                  >
                    원본 크기
                  </button>
                </div>
              </div>

              <div className="knds-flex-col knds-gap-050">
                <span className="knds-text-label-13-mono knds-text-muted">정렬 설정 (Alignment):</span>
                <div className="knds-flex-row knds-gap-050">
                  <button 
                    className={`knds-btn-sm ${node.styles?.marginLeft === '0' && node.styles?.marginRight === 'auto' ? 'knds-btn-primary' : 'knds-secondary-btn'}`}
                    style={{ padding: '4px 8px', fontSize: '11px', height: '28px' }}
                    onClick={() => updateNode(node.id, { 
                      styles: { 
                        ...node.styles, 
                        display: 'block', 
                        marginLeft: '0', 
                        marginRight: 'auto' 
                      } 
                    })}
                  >
                    좌측 정렬
                  </button>
                  <button 
                    className={`knds-btn-sm ${node.styles?.marginLeft === 'auto' && node.styles?.marginRight === 'auto' ? 'knds-btn-primary' : 'knds-secondary-btn'}`}
                    style={{ padding: '4px 8px', fontSize: '11px', height: '28px' }}
                    onClick={() => updateNode(node.id, { 
                      styles: { 
                        ...node.styles, 
                        display: 'block', 
                        marginLeft: 'auto', 
                        marginRight: 'auto' 
                      } 
                    })}
                  >
                    중앙 정렬
                  </button>
                  <button 
                    className={`knds-btn-sm ${node.styles?.marginLeft === 'auto' && node.styles?.marginRight === '0' ? 'knds-btn-primary' : 'knds-secondary-btn'}`}
                    style={{ padding: '4px 8px', fontSize: '11px', height: '28px' }}
                    onClick={() => updateNode(node.id, { 
                      styles: { 
                        ...node.styles, 
                        display: 'block', 
                        marginLeft: 'auto', 
                        marginRight: '0' 
                      } 
                    })}
                  >
                    우측 정렬
                  </button>
                </div>
              </div>
            </div>
          )}
          {node.type === 'input' && (
            <div className="knds-mt-100">
              <input type="text" className="knds-input knds-input-sm" placeholder="placeholder" value={node.attributes.placeholder || ''} onChange={(e) => handleAttrChange('placeholder', e.target.value)} />
            </div>
          )}
        </div>

        <hr className="knds-border-bottom knds-mb-300" style={{ border: 'none', marginTop: '24px' }} />

        <div className="knds-mb-300">
          <h3 className="knds-text-label-16 knds-mb-200" style={{ fontWeight: 700 }}>요소 탐색기 (DOM Tree)</h3>
          {rootNode && rootNode.children.length > 0 ? (
            <div style={{ maxHeight: '350px', overflowY: 'auto', border: '1px solid var(--color-border-default)', borderRadius: '6px', padding: '8px', backgroundColor: 'var(--color-bg-secondary)' }}>
              {renderTree(rootNode)}
            </div>
          ) : (
            <p className="knds-text-copy-14 knds-text-muted">요소가 없습니다.</p>
          )}
        </div>

        <hr className="knds-border-bottom knds-mb-300" style={{ border: 'none' }} />

        <p className="knds-text-label-14-mono knds-text-muted knds-mb-100">자주 쓰는 클래스 참조 (KNDS):</p>
        <ul className="knds-text-label-13-mono knds-text-muted" style={{ paddingLeft: '16px' }}>
          <li>knds-panel</li>
          <li>knds-grid-bg</li>
          <li>knds-text-heading-32</li>
          <li>knds-text-copy-14</li>
          <li>knds-mb-200</li>
          <li>knds-p-400</li>
          <li>knds-btn-primary</li>
          <li>knds-flex-row</li>
          <li>knds-justify-between</li>
        </ul>
      </div>
    </aside>
  );
}
