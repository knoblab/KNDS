import React, { useState, useRef } from 'react';
import { useEditorStore } from '../store';

import { exportToZip } from '../utils/exportHtml';
import { importFromZip } from '../utils/importZip';

export default function PageSidebar({ onPreview }: { onPreview: () => void }) {
  const { pages, activePageId, addPage, removePage, setActivePage, updatePageTitle, appTitle, appDescription, loadProject } = useEditorStore();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddPage = () => {
    addPage('New Page');
  };

  const handleExportZip = async () => {
    try {
      await exportToZip(pages, appTitle, appDescription);
    } catch (e) {
      console.error('Failed to export zip:', e);
      alert('ZIP 내보내기 실패');
    }
  };

  const handleImportZip = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    await importFromZip(
      file,
      (loadedPages, title, desc) => {
        loadProject(loadedPages, title, desc);
      },
      (errorMsg) => {
        alert(errorMsg);
      }
    );
    e.target.value = ''; // Reset input
  };

  const startEdit = (id: string, title: string) => {
    setEditingId(id);
    setEditTitle(title);
  };

  const saveEdit = (id: string) => {
    updatePageTitle(id, editTitle);
    setEditingId(null);
  };

  return (
    <aside className="pdf-sidebar" style={{ width: '25%', borderRight: '1px solid var(--color-border-default)', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="pdf-content-relative pdf-p-300" style={{ flex: 1, overflowY: 'auto' }}>
        <div className="pdf-mb-300">
          <span className="pdf-text-label-14-mono pdf-text-red pdf-mb-100" style={{ display: 'block' }}>
            {appDescription || '사이트 설명을 입력하세요'}
          </span>
          <div className="pdf-flex-row pdf-justify-between pdf-items-center pdf-mb-100">
            <h1 className="pdf-text-heading-32">{appTitle || '사이트 제목'}</h1>
          </div>
        </div>

        <nav>
          <span className="pdf-text-label-14-mono pdf-text-muted pdf-border-bottom pdf-pb-100 pdf-mb-100 pdf-font-bold" style={{ display: 'block' }}>
            SITE NAVIGATOR
          </span>
          
          <div className="pdf-mb-200">
            {pages.map((page, idx) => {
              const isSelected = activePageId === page.id;
              const num = idx + 1;
              return (
                <div 
                  key={page.id} 
                  className={`pdf-nav-item ${isSelected ? 'active' : ''}`}
                  onClick={() => setActivePage(page.id)}
                  style={{ marginBottom: '8px', cursor: 'pointer' }}
                >
                  <div className="pdf-flex-row pdf-items-center pdf-gap-150 pdf-overflow-hidden pdf-w-full">
                    <span className="pdf-text-label-14-mono pdf-text-center pdf-font-bold" style={{
                      backgroundColor: isSelected ? 'var(--color-functional-red)' : 'var(--color-border-default)',
                      color: isSelected ? 'var(--color-bg-primary)' : 'var(--color-text-secondary)',
                      padding: '4px 8px',
                      borderRadius: '2px',
                      minWidth: '32px'
                    }}>
                      {num < 10 ? `0${num}` : num}
                    </span>
                    <div className="pdf-flex-col pdf-overflow-hidden" style={{ flex: 1 }}>
                      {editingId === page.id ? (
                        <input
                          autoFocus
                          type="text"
                          value={editTitle}
                          className="pdf-input pdf-input-sm"
                          onChange={(e) => setEditTitle(e.target.value)}
                          onBlur={() => saveEdit(page.id)}
                          onKeyDown={(e) => e.key === 'Enter' && saveEdit(page.id)}
                          onClick={(e) => e.stopPropagation()}
                        />
                      ) : (
                        <span className="pdf-text-label-16 pdf-flex-row pdf-items-center pdf-overflow-hidden" style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                          {page.title}
                        </span>
                      )}
                    </div>
                    {/* Action buttons */}
                    <div className="pdf-flex-row pdf-gap-100">
                      {editingId !== page.id && (
                        <button 
                          className="pdf-text-label-14-mono pdf-text-muted" 
                          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                          onClick={(e) => { e.stopPropagation(); startEdit(page.id, page.title); }}
                        >
                          Edit
                        </button>
                      )}
                      {pages.length > 1 && (
                        <button 
                          className="pdf-text-label-14-mono pdf-text-red" 
                          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                          onClick={(e) => { e.stopPropagation(); removePage(page.id); }}
                        >
                          X
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </nav>
      </div>

      <div className="pdf-p-200 pdf-border-top pdf-flex-col pdf-gap-100" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <button className="pdf-btn-primary pdf-w-full" onClick={handleAddPage}>
          + 새 페이지 추가
        </button>
        <button className="pdf-secondary-btn pdf-w-full" onClick={onPreview}>
          미리보기 모드
        </button>
        <button className="pdf-secondary-btn pdf-w-full" onClick={handleExportZip}>
          ZIP 파일로 내보내기
        </button>
        <button className="pdf-secondary-btn pdf-w-full" onClick={() => fileInputRef.current?.click()}>
          ZIP 파일 불러오기
        </button>
        <input 
          type="file" 
          accept=".zip" 
          ref={fileInputRef} 
          style={{ display: 'none' }} 
          onChange={handleImportZip} 
        />
      </div>
    </aside>
  );
}
