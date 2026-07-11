import React, { useState, useEffect, useRef } from 'react';
import ChapterContent from '../components/ChapterContent';
import { CHAPTERS_DATA, NAVIGATION_GROUPS } from '../data/chapters';

export default function Guide() {
  const [activeChapter, setActiveChapter] = useState<number>(1);
  const [sidebarWidth, setSidebarWidth] = useState<number>(25); // Standard 25%
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleGroup = (category: string) => {
    setCollapsedGroups(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Theme initialization
    const matchDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(matchDark);
    if (matchDark) document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDarkMode;
    setIsDarkMode(nextTheme);
    if (nextTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const handleChapterSwitch = (num: number) => {
    setActiveChapter(num);
    if (isMobile) setIsMobileNavOpen(false);
    const scroller = document.getElementById('documentation-scroller');
    if (scroller) scroller.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startResizing = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing || !containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const newWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
      if (newWidth >= 18 && newWidth <= 45) {
        setSidebarWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      if (isResizing) setIsResizing(false);
    };

    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  // Use single source of truth from chapters.ts
  const chapters = CHAPTERS_DATA;
  const navigationGroups = NAVIGATION_GROUPS;

  return (
    <div className="knds-app" ref={containerRef}>

      {/* SIDEBAR */}
      <aside
        className={`knds-sidebar ${isMobileNavOpen ? 'mobile-nav-open' : ''}`}
        style={{ width: isMobile ? '100%' : `${sidebarWidth}%` }}
      >
        <div className="knds-content-relative knds-p-300">
          <div className="knds-mb-300">
            <span className="knds-text-label-14-mono knds-text-red knds-mb-100" style={{ display: 'block' }}>
              물리-디지털 융합 디자인 가이드라인
            </span>
            <div className="knds-flex-row knds-justify-between knds-items-center knds-mb-100">
              <h1 className="knds-text-heading-32">
                KNDS System
              </h1>
              <button
                onClick={toggleTheme}
                className="knds-secondary-btn knds-flex-row knds-items-center knds-justify-center"
                style={{ padding: '6px 12px', whiteSpace: 'nowrap', gap: '6px', minWidth: '85px' }}
                aria-label={isDarkMode ? "라이트 모드로 전환" : "다크 모드로 전환"}
              >
                {isDarkMode ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>
            <p className="knds-text-copy-14 knds-text-muted">
              철학적 기능주의의 10대 원칙과 물리적 구조의 명료함을 담은 하드웨어급 디지털 조작기 디자인 규격.
            </p>
            <div className="knds-mt-200">
              {/* Removed Editor Link */}
            </div>
          </div>

          <nav>
            <span className="knds-text-label-14-mono knds-text-muted knds-border-bottom knds-pb-100 knds-mb-100 knds-font-bold" style={{ display: 'block' }}>
              GUIDELINES INDEX
            </span>

            {navigationGroups.map((group, gIdx) => (
              <div key={gIdx} className="knds-mb-200">
                <div
                  className="knds-nav-group-header"
                  onClick={() => toggleGroup(group.category)}
                >
                  <span>{group.category}</span>
                  <svg
                    className={`knds-chevron ${collapsedGroups[group.category] ? 'collapsed' : ''}`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </div>
                {!collapsedGroups[group.category] && group.items.map((item) => {
                  const isSelected = activeChapter === item.num;
                  return (
                    <div
                      key={item.num}
                      onClick={() => !item.disabled && handleChapterSwitch(item.num as number)}
                      className={`knds-nav-item ${isSelected ? 'active' : ''} ${item.disabled ? 'disabled' : ''}`}
                    >
                      <div className="knds-flex-row knds-items-center knds-gap-150 knds-overflow-hidden knds-w-full">
                        {item.disabled ? (
                          <div className="knds-flex-row knds-items-center knds-justify-center knds-bg-secondary" style={{ width: '32px', height: '24px', borderRadius: '2px' }}>
                            <span className="knds-text-label-14-mono knds-text-muted" style={{ fontSize: '10px' }}>-</span>
                          </div>
                        ) : (
                          <span className="knds-text-label-14-mono knds-text-center knds-font-bold" style={{
                            backgroundColor: isSelected ? 'var(--color-functional-red)' : 'var(--color-border-default)',
                            color: isSelected ? 'var(--color-bg-primary)' : 'var(--color-text-secondary)',
                            padding: '4px 8px',
                            borderRadius: '2px',
                            minWidth: '32px'
                          }}>
                            0{item.num}
                          </span>
                        )}
                        <div className="knds-flex-col knds-overflow-hidden" style={{ flex: 1 }}>
                          <span className="knds-text-label-16 knds-flex-row knds-items-center knds-overflow-hidden" style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                            {item.title}
                            {item.disabled && <span className="knds-badge">준비 중</span>}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Nav Overlay & Bottom Toggle */}
      {isMobile && isMobileNavOpen && (
        <div
          className="knds-fixed knds-inset-0"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 999 }}
          onClick={() => setIsMobileNavOpen(false)}
        />
      )}

      {isMobile && (
        <div className="knds-mobile-bottom-bar knds-fixed knds-flex-row knds-justify-center" style={{ bottom: 16, left: 16, right: 16, zIndex: 1000 }}>
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="knds-btn-primary"
            style={{ borderRadius: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', padding: '12px 24px' }}
          >
            {isMobileNavOpen ? '닫기' : '목차 열기'}
          </button>
        </div>
      )}

      {/* SPLITTER DRAGGABLE BAR */}
      {!isMobile && (
        <div
          onMouseDown={startResizing}
          onDoubleClick={() => setSidebarWidth(25)}
          className={`knds-splitter ${isResizing ? 'active' : ''}`}
          title="더블클릭시 25% 표준 비율로 리셋"
        />
      )}

      {/* MAIN CONTENT VIEW */}
      <main
        id="documentation-scroller"
        className="knds-main-view"
      >
        <div className="knds-main-content">
          <div className="knds-panel knds-grid-bg">
            <div className="knds-content-relative">
              <span className="knds-text-label-14-mono knds-text-red knds-mb-100" style={{ display: 'block' }}>
                CHAPTER {activeChapter < 10 ? `0${activeChapter}` : activeChapter}
              </span>
              <div className="knds-flex-row knds-justify-between" style={{ alignItems: 'baseline' }}>
                <h2 className="knds-text-heading-32">
                  {chapters[activeChapter - 1].title}
                </h2>
                <div className="knds-text-label-14-mono knds-text-muted">
                  {Math.round((activeChapter / 15) * 100)}% PROGRESS
                </div>
              </div>
              <p className="knds-text-copy-14 knds-text-muted knds-mt-100">
                {chapters[activeChapter - 1].sub}
              </p>
            </div>
          </div>

          <ChapterContent activeChapter={activeChapter} />

          <div className="knds-footer">
            <button
              disabled={activeChapter === 1}
              onClick={() => handleChapterSwitch(activeChapter - 1)}
              className="knds-secondary-btn"
            >
              ← PREV
            </button>
            <span className="knds-text-label-14-mono knds-text-muted">
              STAGE {activeChapter < 10 ? `0${activeChapter}` : activeChapter} / 15
            </span>
            <button
              disabled={activeChapter === 15}
              onClick={() => handleChapterSwitch(activeChapter + 1)}
              className="knds-secondary-btn"
            >
              NEXT →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
