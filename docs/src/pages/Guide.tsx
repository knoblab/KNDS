import React, { useState, useEffect, useRef } from 'react';
import ChapterContent from '../components/ChapterContent';

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
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleChapterSwitch = (num: number) => {
    setActiveChapter(num);
    setIsMobileNavOpen(false);
    const scrollableDiv = document.getElementById('documentation-scroller');
    if (scrollableDiv) {
      scrollableDiv.scrollTop = 0;
    }
  };

  const startResizing = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing || !containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const relativeX = e.clientX - containerRect.left;
      const percentage = (relativeX / containerRect.width) * 100;

      // Enforce 20% to 50% boundary caps in Section 6
      if (percentage >= 20 && percentage <= 50) {
        setSidebarWidth(percentage);
      }
    };

    const handleMouseUp = () => {
      if (isResizing) {
        setIsResizing(false);
      }
    };

    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  // Chapter mapping metadata from PDF (Storytelling Order)
  const chapters = [
    { num: 1, title: 'Philosophy', sub: '철학적 토대와 시스템 미학의 융합' },
    { num: 2, title: 'System Architecture', sub: '통합 소프트웨어 아키텍처 및 토큰 구현' },
    { num: 3, title: 'Installation', sub: 'KNDS 시작하기 및 설치 가이드' },
    { num: 4, title: 'Blueprint Grid & Spacing', sub: '청사진 그리드와 멀티 스케일 여백 시스템' },
    { num: 5, title: 'Typography', sub: '정밀 타이포그래피 및 레이아웃 정렬 명세' },
    { num: 6, title: 'Color', sub: '아크로매틱 컬러 체계와 펑셔널 레드' },
    { num: 7, title: 'Materials', sub: '머티리얼 디자인 및 물리적 재질감' },
    { num: 8, title: 'Buttons & Morphing', sub: '초정밀 버튼 설계 및 형태 모핑 상호작용' },
    { num: 9, title: 'Forms', sub: '입력 폼 및 데이터 제어 UI' },
    { num: 10, title: 'Modals', sub: '모달 및 다이얼로그 시스템' },
    { num: 11, title: 'Navigation', sub: '네비게이션 및 계층 이동 구조' },
    { num: 12, title: 'Split Screen', sub: '비대칭 황금 분할 25:75 스크린' },
    { num: 13, title: 'Mobile Screen', sub: '모바일 스택 및 반응형 레이아웃 복원' },
    { num: 14, title: 'QA & Checklist', sub: '최종 통합 실무 체크리스트 및 검수 수칙' },
    { num: 15, title: 'Credits', sub: 'KNDS 디자인 시스템 제작 공로자 및 기여자' }
  ];

  // Categorized chapter mapping for HIG style sidebar
  const navigationGroups = [
    {
      category: 'Foundations (설계 기초)',
      items: [
        { num: 1, title: 'Philosophy', sub: '철학적 토대와 물리-디지털 융합 원칙' },
        { num: 2, title: 'System Architecture', sub: '단일 레이어 순수 CSS 및 토큰 구현' },
        { num: 3, title: 'Installation & Quick Start', sub: 'KNDS CDN 퀵 스타트 및 설치 가이드' },
        { num: 4, title: 'Blueprint Grid & Spacing', sub: '청사진 그리드와 8px 여백 스케일' },
        { num: 5, title: 'Typography', sub: '정밀 타이포그래피 (Pretendard / Mono)' },
        { num: 6, title: 'Color System', sub: '아크로매틱 고대비 & 기능성 레드' },
        { num: 7, title: 'Tactile Materials', sub: '하드웨어 베벨 및 물리적 표면 재질감' },
      ]
    },
    {
      category: 'Patterns (핵심 UX 패턴)',
      items: [
        { num: 11, title: 'Navigation Architecture', sub: '네비게이션 및 계층 이동 구조' },
        { num: 12, title: 'Split Screen (25:75)', sub: '비대칭 황금 분할 25:75 스크린' },
        { num: 13, title: 'Responsive Mobile Adaptation', sub: '모바일 100% 스택 및 반응형 복원' },
      ]
    },
    {
      category: 'Components (컴포넌트 명세)',
      items: [
        { num: 8, title: 'Buttons & Shape Morphing', sub: '초정밀 버튼 설계 및 형태 모핑 상호작용' },
        { num: 9, title: 'Form Controls & Validation', sub: '입력 폼 및 데이터 제어 UI' },
        { num: 10, title: 'Modals & Overlays', sub: '모달 및 다이얼로그 오버레이' },
      ]
    },
    {
      category: 'Specifications & Credits',
      items: [
        { num: 14, title: 'QA Checklist & Verification', sub: '최종 통합 실무 체크리스트 및 검수 수칙' },
        { num: 15, title: 'Credits & Contributors', sub: 'KNDS 디자인 시스템 제작 공로자 및 기여자' },
      ]
    }
  ];

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
                onClick={() => setIsDarkMode(!isDarkMode)}
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
          onDoubleClick={() => setSidebarWidth(38)}
          className={`knds-splitter ${isResizing ? 'active' : ''}`}
          title="더블클릭시 38% 표준 비율로 리셋"
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
