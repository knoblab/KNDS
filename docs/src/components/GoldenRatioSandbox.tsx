import React from 'react';

export default function GoldenRatioSandbox() {
  return (
    <div className="knds-bg-secondary knds-border knds-p-200 knds-flex-col knds-justify-center knds-radius-md knds-relative knds-overflow-hidden" style={{ flexShrink: 0, margin: '32px 0', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
      <div className="knds-flex-row knds-justify-between knds-items-center knds-mb-300">
        <div>
          <span className="knds-text-label-14-mono knds-text-red knds-mb-100 knds-font-bold" style={{ display: 'block' }}>
            CH.5 BLUEPRINT FORMAT
          </span>
          <h4 className="knds-text-label-16 knds-font-bold" style={{ marginTop: 4 }}>
            25:75 비대칭 스플릿 분할 (1:3 Split Ratio)
          </h4>
        </div>
      </div>

      {/* 16:9 윈도우 모니터 프레임 */}
      <div className="knds-w-full knds-relative knds-overflow-hidden knds-flex-col" style={{ margin: '0 auto', maxWidth: '896px', aspectRatio: '16/9', backgroundColor: '#09090b', borderRadius: '8px', border: '8px solid var(--color-border-hover)', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', transition: 'all 0.5s' }}>

        {/* OS Top: Browser Tabs & URL Bar */}
        <div className="knds-w-full knds-flex-shrink-0 knds-flex-col" style={{ backgroundColor: 'var(--color-border-default)' }}>
          {/* Tabs */}
          <div className="knds-flex-row knds-items-end" style={{ height: 32, padding: '0 8px', gap: 4, paddingTop: 8, backgroundColor: 'var(--color-border-default)' }}>
            <div className="knds-flex-row knds-items-center" style={{ width: 128, height: '100%', backgroundColor: 'var(--color-bg-primary)', borderTopLeftRadius: 6, borderTopRightRadius: 6, padding: '0 8px', fontSize: 8, fontFamily: 'var(--font-sans)', color: 'var(--color-text-primary)' }}>
              KNDS System
            </div>
            <div className="knds-radius-sm knds-flex-row knds-items-center knds-justify-center" style={{ width: 32, height: 24, backgroundColor: 'var(--color-border-default)', fontSize: 10, color: 'var(--color-text-secondary)', borderRadius: '4px 4px 0 0' }}>+</div>
          </div>
          {/* URL Bar */}
          <div className="knds-flex-row knds-items-center knds-border-bottom" style={{ height: 40, backgroundColor: 'var(--color-bg-primary)', padding: '0 8px', gap: 8, borderBottomColor: 'var(--color-border-hover)' }}>
            <div className="knds-flex-row" style={{ gap: 4 }}>
              <div className="knds-radius-sm" style={{ width: 16, height: 16, backgroundColor: 'var(--color-border-default)', borderRadius: '4px' }}></div>
              <div className="knds-radius-sm" style={{ width: 16, height: 16, backgroundColor: 'var(--color-border-default)', borderRadius: '4px' }}></div>
              <div className="knds-radius-sm" style={{ width: 16, height: 16, backgroundColor: 'var(--color-border-default)', borderRadius: '4px' }}></div>
            </div>
            <div className="knds-border knds-radius-sm knds-flex-row knds-items-center" style={{ flex: 1, height: 24, backgroundColor: 'var(--color-bg-primary)', borderColor: 'var(--color-border-hover)', fontSize: 8, padding: '0 12px', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}>
              https://knds-ds.system/
            </div>
          </div>
        </div>

        {/* Website Content Area */}
        <div className="knds-relative knds-overflow-hidden knds-flex-row" style={{ flex: 1, backgroundColor: 'var(--color-bg-primary)', transition: 'all 0.5s' }}>

          {/* KNDS LAYOUT */}
          <div className="knds-w-full knds-flex-row knds-relative" style={{ flex: 1, animation: 'fadeIn 0.5s' }}>
            {/* KNDS LEFT 25% */}
            <div className="knds-golden-ratio-panel knds-flex-col knds-relative" style={{ width: '25%', backgroundColor: 'var(--color-bg-primary)', borderRight: '1px solid var(--color-border-hover)', height: '100%' }}>
              {/* Overlay Annotation */}
              <div className="knds-absolute knds-inset-0 knds-flex-col knds-items-center knds-justify-center" style={{ backgroundColor: 'rgba(173, 29, 29, 0.05)', border: '2px solid rgba(173, 29, 29, 0.5)', zIndex: 20, pointerEvents: 'none' }}>
                <div style={{ backgroundColor: 'var(--color-functional-red)', color: 'var(--color-bg-primary)', fontFamily: 'var(--font-mono)', fontWeight: 'bold', fontSize: '13px', padding: '8px 16px', borderRadius: '4px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
                  25% CONTROL PANEL
                </div>
                <div className="knds-radius-sm" style={{ fontSize: '12px', color: 'var(--color-functional-red)', fontWeight: 'bold', backgroundColor: 'rgba(255,255,255,0.9)', padding: '8px', marginTop: '8px', border: '1px solid var(--color-functional-red)', borderRadius: '4px' }}>
                  Geist Mono / #F4F4F5 / Fixed
                </div>
              </div>

              {/* KNDS Header Area */}
              <div className="knds-flex-row knds-items-center knds-border-bottom knds-flex-shrink-0" style={{ height: 56, padding: '0 16px' }}>
                <div style={{ width: 16, height: 16, backgroundColor: 'var(--color-functional-red)' }}></div>
                <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--color-text-primary)', fontWeight: 'bold', marginLeft: 8 }}>KNDS SYSTEM</span>
              </div>
              {/* KNDS Controls */}
              <div className="knds-flex-col" style={{ padding: '16px', gap: '16px', flex: 1, overflowY: 'auto' }}>
                <div style={{ width: '100%', height: 24, backgroundColor: 'var(--color-border-default)', borderRadius: '4px' }}></div>
                <div className="knds-flex-row" style={{ gap: '8px' }}>
                  <div style={{ width: '50%', height: 32, backgroundColor: 'var(--color-bg-primary)', border: '1px solid var(--color-border-default)', borderRadius: '4px' }}></div>
                  <div style={{ width: '50%', height: 32, backgroundColor: 'var(--color-bg-primary)', border: '1px solid var(--color-border-default)', borderRadius: '4px' }}></div>
                </div>
                <div className="knds-w-full knds-border knds-flex-col" style={{ height: 96, backgroundColor: 'var(--color-bg-primary)', borderRadius: '4px', marginTop: '8px', gap: '8px', padding: '16px', fontSize: 8, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}>
                  [SYSTEM_METADATA_BLOCK]
                  <div style={{ width: '75%', height: '8px', backgroundColor: 'var(--color-border-default)', marginTop: '8px' }}></div>
                  <div style={{ width: '50%', height: '8px', backgroundColor: 'var(--color-border-default)', marginTop: '8px' }}></div>
                  <div style={{ width: '66%', height: '8px', backgroundColor: 'var(--color-border-default)', marginTop: '8px' }}></div>
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                  <div className="knds-w-full knds-radius-sm knds-flex-row knds-items-center knds-justify-center knds-overflow-hidden" style={{ height: 40, backgroundColor: 'var(--color-functional-red)', borderRadius: '4px' }}>
                    <div style={{ width: 16, height: 16, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '4px', marginRight: '8px' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* KNDS RIGHT 75% */}
            <div className="knds-flex-col knds-relative" style={{ width: '75%', height: '100%', backgroundColor: 'var(--color-bg-primary)', borderLeft: '1px solid var(--color-border-default)' }}>
              {/* Overlay Annotation */}
              <div className="knds-absolute knds-inset-0 knds-flex-col knds-items-center knds-justify-center" style={{ backgroundColor: 'rgba(161, 161, 170, 0.08)', border: '2px solid var(--color-border-hover)', zIndex: 20, pointerEvents: 'none' }}>
                <div style={{ backgroundColor: 'var(--color-text-primary)', color: 'var(--color-bg-primary)', fontFamily: 'var(--font-mono)', fontWeight: 'bold', fontSize: '13px', padding: '8px 16px', borderRadius: '4px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
                  75% CONTENT CANVAS
                </div>
                <div className="knds-radius-sm" style={{ fontSize: '12px', color: 'var(--color-text-secondary)', fontWeight: 'bold', backgroundColor: 'rgba(255,255,255,0.9)', padding: '8px', marginTop: '8px', border: '1px solid var(--color-border-default)', borderRadius: '4px' }}>
                  Pretendard / #FFFFFF / Scrollable
                </div>
              </div>

              {/* 75 Canvas Header */}
              <div className="knds-flex-row knds-items-center knds-flex-shrink-0 knds-border-bottom" style={{ height: 56, padding: '0 32px', justifyContent: 'flex-end' }}>
                <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}>DATA CANVAS VIEW</span>
              </div>
              {/* 75 Canvas Body */}
              <div style={{ flex: 1, padding: '32px 15% 32px 32px', display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '16px' }}>
                <div className="knds-flex-row knds-items-center knds-border-bottom" style={{ gridColumn: 'span 2 / span 2', height: 48 }}>
                  <div style={{ width: 192, height: 24, backgroundColor: 'var(--color-border-default)', borderRadius: '4px' }}></div>
                </div>
                <div className="knds-border knds-flex-col knds-relative knds-overflow-hidden" style={{ backgroundColor: 'var(--color-bg-primary)', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', height: 128, borderRadius: '8px', padding: '16px' }}>
                  <div style={{ width: '33%', height: 16, backgroundColor: 'var(--color-border-default)', borderRadius: '4px', marginBottom: '16px' }}></div>
                  <div style={{ width: '100%', borderBottom: '1px solid var(--color-border-default)', margin: '8px 0' }}></div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--color-bg-primary)', borderRadius: '4px', marginBottom: '8px' }}></div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--color-bg-primary)', borderRadius: '4px', marginBottom: '8px' }}></div>
                  <div style={{ width: '66%', height: '8px', backgroundColor: 'var(--color-bg-primary)', borderRadius: '4px' }}></div>
                </div>
                <div className="knds-border knds-flex-col knds-relative knds-overflow-hidden" style={{ backgroundColor: 'var(--color-bg-primary)', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', height: 128, borderRadius: '8px', padding: '16px' }}>
                  <div style={{ width: '33%', height: 16, backgroundColor: 'var(--color-border-default)', borderRadius: '4px', marginBottom: '16px' }}></div>
                  <div style={{ width: '100%', borderBottom: '1px solid var(--color-border-default)', margin: '8px 0' }}></div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--color-bg-primary)', borderRadius: '4px', marginBottom: '8px' }}></div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--color-bg-primary)', borderRadius: '4px', marginBottom: '8px' }}></div>
                  <div style={{ width: '66%', height: '8px', backgroundColor: 'var(--color-bg-primary)', borderRadius: '4px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OS Bottom: Windows Taskbar */}
        <div className="knds-w-full knds-flex-shrink-0 knds-flex-row knds-items-center knds-justify-between" style={{ height: 40, backgroundColor: '#09090b', padding: '0 8px', zIndex: 30, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.5)' }}>
          <div className="knds-flex-row knds-items-center" style={{ gap: '8px' }}>
            <div className="knds-flex-row knds-items-center knds-justify-center" style={{ width: 24, height: 24, borderRadius: '4px', backgroundColor: 'var(--color-bg-tertiary)', color: 'var(--color-text-secondary)', fontSize: '12px', fontWeight: 'bold' }}>W</div>
            <div style={{ width: 24, height: 24, borderRadius: '4px', backgroundColor: '#09090b' }}></div>
            <div style={{ width: 24, height: 24, borderRadius: '4px', backgroundColor: '#09090b', borderBottom: '2px solid var(--color-text-secondary)', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}></div>
          </div>
          <div className="knds-flex-row knds-items-center" style={{ gap: '16px', fontSize: '12px', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}>
            <span>ENG</span>
            <div className="knds-flex-col knds-items-end" style={{ lineHeight: 1.2 }}>
              <span>12:00 PM</span>
              <span>2024-05-23</span>
            </div>
          </div>
        </div>
      </div>
      <p className="knds-text-copy-14 knds-text-muted knds-mt-200" style={{ fontSize: '12px', textAlign: 'center' }}>
        * 25:75 정밀 할당 영역을 나타냅니다.
      </p>
    </div>
  );
}
