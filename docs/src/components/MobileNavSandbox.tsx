import React, { useState } from 'react';
import { Smartphone, Menu, X } from 'lucide-react';

export default function MobileNavSandbox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="knds-panel">
      <div className="knds-panel-header knds-flex-row knds-justify-between knds-items-center">
        <div>
          <span className="knds-text-label-14-mono knds-text-red knds-mb-100 knds-font-bold" style={{ display: 'block' }}>
            CH.13 INTERACTIVE SANDBOX
          </span>
          <h4 className="knds-text-label-16 knds-font-bold">
            모바일 바텀 시트 네비게이션 시뮬레이터 (Mobile Nav Drawer)
          </h4>
        </div>
        <Smartphone className="knds-text-muted" style={{ width: 16, height: 16 }} />
      </div>

      <p className="knds-text-copy-14 knds-text-muted knds-mb-300">
        모바일 환경에서는 데스크탑의 좌측 사이드바가 숨겨지고, 대신 화면 하단에 <strong>플로팅 액션 버튼(목차 열기)</strong>이 제공됩니다. 이 버튼을 탭하면 화면 전체를 덮는 <strong>바텀 시트(Bottom Sheet) 오버레이 모달</strong> 형태로 전체 목차가 슬라이드업 됩니다.
      </p>

      {/* 모바일 디바이스 프레임 */}
      <div className="knds-border knds-relative knds-overflow-hidden" style={{
        width: '320px',
        height: '568px',
        margin: '0 auto',
        backgroundColor: 'var(--color-bg-primary)',
        borderRadius: '32px',
        border: '8px solid var(--color-border-hover)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}>

        {/* 상단 상태바 가짜 UI */}
        <div className="knds-flex-row knds-justify-between knds-items-center knds-border-bottom knds-font-bold" style={{ height: '24px', backgroundColor: 'var(--color-bg-primary)', padding: '0 16px', fontSize: '10px' }}>
          <span>9:41</span>
          <div className="knds-flex-row" style={{ gap: '8px'}}>
            <div style={{ width: 12, height: 10, backgroundColor: 'var(--color-text-primary)' }}></div>
            <div style={{ width: 16, height: 10, backgroundColor: 'var(--color-text-primary)' }}></div>
          </div>
        </div>

        {/* 메인 콘텐츠 영역 (가짜) */}
        <div style={{ padding: '24px 16px', overflowY: 'auto', height: '100%', backgroundColor: 'var(--color-bg-primary)' }}>
          <span className="knds-text-label-14-mono knds-text-red knds-mb-100" style={{ display: 'block' }}>
            CHAPTER 13
          </span>
          <h2 className="knds-text-heading-24 knds-mb-200">
            Mobile Screen
          </h2>
          <div className="knds-mb-300">
            <div style={{ width: '100%', height: '120px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '8px', border: '1px solid var(--color-border-default)', marginBottom: '16px' }}></div>
            <div style={{ width: '80%', height: '16px', backgroundColor: 'var(--color-border-default)', borderRadius: '8px', marginBottom: '8px' }}></div>
            <div style={{ width: '100%', height: '16px', backgroundColor: 'var(--color-border-default)', borderRadius: '8px', marginBottom: '8px' }}></div>
            <div style={{ width: '60%', height: '16px', backgroundColor: 'var(--color-border-default)', borderRadius: '8px'}}></div>
          </div>

          <p className="knds-text-copy-14 knds-text-muted" style={{ fontSize: '12px' }}>
            스크롤을 내려 콘텐츠를 확인합니다. 하단에 고정된 버튼을 통해 언제든지 다른 챕터로 이동할 수 있습니다.
          </p>
        </div>

        {/* 목차 열기 버튼 (FAB) */}
        <div className="knds-absolute knds-flex-row knds-justify-center" style={{
          bottom: '24px',
          left: '0',
          right: '0',
          zIndex: 10
        }}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="knds-btn-primary knds-flex-row knds-items-center"
            style={{
              borderRadius: '24px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
              padding: '16px 24px',
              gap: '8px'
            }}
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
            {isOpen ? '닫기' : '목차 열기'}
          </button>
        </div>

        {/* 모달 오버레이 배경 */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="knds-absolute knds-inset-0"
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 20,
              animation: 'pdfFadeIn 0.2s ease forwards'
            }}
          />
        )}

        {/* 바텀 시트 (목차 드로어) */}
        <div className="knds-absolute knds-flex-col" style={{
          bottom: 0, left: 0, right: 0,
          height: '75%',
          backgroundColor: 'var(--bg-sidebar)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px',
          borderTop: '1px solid var(--color-border-default)',
          boxShadow: '0 -4px 24px rgba(0,0,0,0.15)',
          zIndex: 30,
          transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundImage: 'var(--blueprint-grid-pattern)',
          backgroundSize: '24px 24px'
        }}>
          {/* 드래그 핸들 (가짜) */}
          <div className="knds-flex-row knds-justify-center knds-flex-shrink-0 knds-cursor-pointer" style={{ padding: '8px 0' }} onClick={() => setIsOpen(false)}>
            <div style={{ width: '40px', height: '4px', backgroundColor: 'var(--color-border-hover)', borderRadius: '8px'}}></div>
          </div>

          <div style={{ padding: '0 24px 24px 24px', overflowY: 'auto', flex: 1 }}>
            <span className="knds-text-label-14-mono knds-text-muted knds-border-bottom knds-pb-100 knds-mb-200 knds-font-bold" style={{ display: 'block' }}>
              GUIDELINES INDEX
            </span>

            {/* 가짜 목차 아이템들 */}
            {[
              { num: 12, title: 'Split Screen' },
              { num: 13, title: 'Mobile Screen', active: true },
              { num: 14, title: 'QA & Checklist' }
            ].map(item => (
              <div key={item.num} className={`knds-nav-item ${item.active ? 'active' : ''}`} style={{ marginBottom: '8px', padding: '8px 16px' }} onClick={() => setIsOpen(false)}>
                <div className="knds-flex-row knds-items-center knds-gap-150">
                  <span className="knds-text-label-14-mono knds-font-bold" style={{
                    backgroundColor: item.active ? 'var(--color-functional-red)' : 'var(--color-border-default)',
                    color: item.active ? 'var(--color-bg-primary)' : 'var(--color-text-secondary)',
                    padding: '8px 8px',
                    borderRadius: '8px'
                  }}>
                    0{item.num}
                  </span>
                  <span className="knds-text-label-16">{item.title}</span>
                </div>
              </div>
            ))}

            <p className="knds-text-copy-14 knds-text-muted knds-mt-300 knds-text-center" style={{ fontSize: '11px' }}>
              * 터치스크린 사용자를 위해 버튼 간격을 여유롭게(최소 48dp) 확보하고 수직 계층을 사용합니다.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
