import React, { useEffect, useState } from 'react';

export default function Landing() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  return (
    <div className="knds-app knds-flex-col">
      {/* Top Header */}
      <header className="knds-content-relative knds-flex-row knds-justify-between knds-items-center knds-p-200 knds-border-bottom">
        <div className="knds-text-label-16 knds-font-bold">
          KNDS
        </div>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="knds-secondary-btn knds-btn-xs"
        >
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      {/* Main Hero Area (100% width) */}
      <main className="knds-grid-bg knds-flex-col knds-items-center knds-justify-center knds-text-center knds-flex-1 knds-p-600">
        <div className="knds-max-w-4xl knds-mx-auto">
          <span className="knds-text-label-14-mono knds-text-red knds-mb-200 knds-inline-block">
            PHYSICAL-DIGITAL FUSION DESIGN SYSTEM
          </span>
          <h1 className="knds-text-heading-72 knds-mb-300">
            물리적 촉각을 지닌<br />디지털 설계 언어
          </h1>
          <p className="knds-text-copy-14 knds-text-muted knds-mb-600 knds-mx-auto knds-max-w-2xl" style={{ fontSize: '18px', lineHeight: '1.6' }}>
            디터 람스의 철학과 하드웨어적 정밀함을 웹 환경에 완벽히 이식한 통합 디자인 시스템입니다.
            복잡한 스타일링 없이, 선언적인 구조와 엄격한 여백만으로 극한의 정밀함을 달성하세요.
          </p>

          <div className="knds-flex-row knds-justify-center knds-gap-200">
            <a href="#/guide" className="knds-btn-primary knds-btn-lg">
              가이드라인 열람
            </a>
            <a href="#/editor" className="knds-secondary-btn knds-btn-lg">
              시각적 편집기 시작
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="knds-p-200 knds-text-label-14-mono knds-text-muted knds-text-center knds-border-top">
        © 2026 KNDS Architecture Team.
      </footer>
    </div>
  );
}
