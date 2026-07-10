import React, { useState, useEffect } from 'react';
import { Type, Move, RefreshCw } from 'lucide-react';

export default function AlignmentSandbox() {
  const [opticalOffset, setOpticalOffset] = useState<number>(0);
  const [tabularNumsActive, setTabularNumsActive] = useState<boolean>(true);
  const [metrics, setMetrics] = useState({
    price: 3840200,
    speed: 98.42,
    count: 1420
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setMetrics((prev) => ({
        price: prev.price + Math.floor((Math.random() - 0.45) * 120),
        speed: Number((prev.speed + (Math.random() - 0.5) * 0.15).toFixed(2)),
        count: prev.count + (Math.random() > 0.5 ? 1 : -1)
      }));
    }, 450);
    return () => clearInterval(timer);
  }, []);

  const handleNudge = (direction: 'up' | 'down') => {
    setOpticalOffset((prev) => {
      const next = direction === 'up' ? prev - 1 : prev + 1;
      return Math.max(-10, Math.min(10, next));
    });
  };

  const resetOffset = () => {
    setOpticalOffset(0);
  };

  return (
    <div className="knds-panel">
      <div className="knds-panel-header knds-flex-row knds-justify-between knds-items-center">
        <div>
          <span className="knds-text-label-14-mono knds-text-red knds-mb-100 knds-font-bold" style={{ display: 'block' }}>
            CH.3 INTERACTIVE SANDBOX
          </span>
          <h4 className="knds-text-label-16 knds-font-bold">
            정밀 광학 보정(Optical Alignment) & 고정폭 가령(Tabular Numerals)
          </h4>
        </div>
        <Type className="knds-text-muted" style={{ width: 16, height: 16 }} />
      </div>

      <p className="knds-text-copy-14 knds-text-muted knds-mb-300">
        기하학적 중앙 계산(Geometric Center)이 인간의 실제 안구 인지 상에 어색하게 편향되는 현상을 직접 눈으로 교정할 수 있는 툴입니다. 또한 통계 수치 비교 시 레이아웃 흔들림을 유발하는 가령 떨림 현상과 <strong>tabular-nums</strong> 해결책을 대조하여 확인할 수 있습니다.
      </p>

      <div className="knds-flex-row knds-gap-300" style={{ flexWrap: 'wrap' }}>
        
        {/* SECTION A: Optical alignment playground */}
        <div className="knds-bg-secondary knds-border knds-p-200 knds-flex-col knds-justify-between knds-radius-sm" style={{ flex: '1 1 45%' }}>
          <div>
            <span className="knds-text-label-14-mono knds-text-muted" style={{ fontSize: '10px', display: 'block', marginBottom: 8 }}>PART A: OPTICAL VS GEOMETRIC NUDGE</span>
            <div className="knds-flex-row knds-gap-100 knds-mb-150">
              <span className="knds-text-label-14-mono" style={{ fontSize: '11px', backgroundColor: 'var(--color-border-default)', padding: '2px 8px', borderRadius: 4 }}>
                미세 보정 값: {opticalOffset}px
              </span>
              {opticalOffset !== 0 && (
                <button 
                  onClick={resetOffset} 
                  className="knds-text-label-14-mono knds-text-red knds-flex-row knds-items-center knds-gap-050 knds-cursor-pointer"
                  style={{ fontSize: '10px', border: 'none', background: 'none' }}
                >
                  <RefreshCw style={{ width: 10, height: 10 }} /> 초기화
                </button>
              )}
            </div>
          </div>

          <div className="knds-bg-secondary knds-border knds-p-300 knds-flex-col knds-items-center knds-justify-center knds-radius-sm knds-relative" style={{ minHeight: '140px' }}>
            <div className="knds-text-label-14-mono knds-text-muted" style={{ fontSize: '8px', position: 'absolute', top: 4, left: 8 }}>ALIGNMENT TEST STAGE</div>
            
            <div className="knds-flex-col knds-items-center knds-gap-200">
              <div className="knds-flex-row knds-items-center knds-gap-300">
                
                <div className="knds-flex-col knds-items-center">
                  <span className="knds-text-label-14-mono knds-text-muted" style={{ fontSize: '9px', marginBottom: 4 }}>수학적 연산 (오차 방치)</span>
                  <div className="knds-border knds-flex-row knds-items-center knds-justify-center knds-radius-sm" style={{ width: 96, height: 48, backgroundColor: 'var(--color-bg-primary)' }}>
                    <div className="knds-flex-row knds-items-center knds-gap-050">
                      <div className="knds-radius-full knds-flex-row knds-items-center knds-justify-center knds-font-bold" style={{ width: 20, height: 20, backgroundColor: 'var(--color-functional-red)', color: 'var(--color-bg-primary)', fontSize: '10px' }}>▶</div>
                      <span className="knds-text-label-14-mono" style={{ fontSize: '12px', fontWeight: 'bold' }}>재생</span>
                    </div>
                  </div>
                </div>

                <div className="knds-flex-col knds-items-center">
                  <span className="knds-text-label-14-mono knds-text-muted" style={{ fontSize: '9px', fontWeight: 'bold', marginBottom: 4 }}>사용자 광학 보정 스테이지</span>
                  <div className="knds-border knds-flex-row knds-items-center knds-justify-center knds-radius-sm" style={{ width: 96, height: 48, backgroundColor: '#09090b', borderColor: 'var(--color-border-hover)' }}>
                    <div className="knds-flex-row knds-items-center knds-gap-100">
                      <div 
                        className="knds-radius-full knds-flex-row knds-items-center knds-justify-center knds-font-bold"
                        style={{ width: 20, height: 20, backgroundColor: 'var(--color-functional-red)', color: 'var(--color-bg-primary)', fontSize: '9px', transform: `translateX(${opticalOffset}px)`, transition: 'transform 0.2s' }}
                      >
                        ▶
                      </div>
                      <span className="knds-text-label-14-mono" style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--color-bg-primary)' }}>재생</span>
                    </div>
                  </div>
                </div>

              </div>

              <div className="knds-text-copy-14 knds-text-muted knds-text-center knds-flex-row knds-items-center knds-justify-center" style={{ fontSize: '10px', maxWidth: '280px', height: '32px' }}>
                {opticalOffset === 0 ? (
                  <span>우측 재생기 내부 삼각 화살표 아이콘을 좌우로 미조 조정해보세요. (추천 광학 오프셋: <code style={{ backgroundColor: 'var(--color-bg-primary)', padding: '0 4px', border: '1px solid var(--color-border-default)', borderRadius: 2, fontWeight: 'bold', color: 'var(--color-text-primary)' }}>+1px</code>)</span>
                ) : opticalOffset === 1 ? (
                  <span className="knds-text-red" style={{ fontWeight: 'bold' }}>정답! 삼각 아이콘이 물리적 중앙에서 우측으로 1px 이동하여 광학적 안구 균형을 성취했습니다.</span>
                ) : (
                  <span>현재 오프셋: {opticalOffset}px. 화살표의 시각 중력 중심을 맞춰보세요.</span>
                )}
              </div>
            </div>
          </div>

          <div className="knds-flex-row knds-gap-100 knds-mt-200">
            <button 
              onClick={() => handleNudge('up')}
              className="knds-secondary-btn"
              style={{ flex: 1, justifyContent: 'center', fontSize: '12px', padding: '8px' }}
            >
              <Move style={{ width: 14, height: 14, transform: 'rotate(180deg)' }} /> -1px 오프셋 이동
            </button>
            <button 
              onClick={() => handleNudge('down')}
              className="knds-secondary-btn"
              style={{ flex: 1, justifyContent: 'center', fontSize: '12px', padding: '8px' }}
            >
              <Move style={{ width: 14, height: 14 }} /> +1px 오프셋 이동
            </button>
          </div>
        </div>

        {/* SECTION B: Tabular Numbers Comparison */}
        <div className="knds-bg-secondary knds-border knds-p-200 knds-flex-col knds-justify-between knds-radius-sm" style={{ flex: '1 1 45%' }}>
          <div>
            <div className="knds-flex-row knds-items-center knds-justify-between knds-mb-150">
              <span className="knds-text-label-14-mono knds-text-muted" style={{ fontSize: '10px', display: 'block' }}>PART B: TABULAR VS PROPORTIONAL STATIC NUMS</span>
              <button 
                onClick={() => setTabularNumsActive(!tabularNumsActive)}
                className="knds-text-label-14-mono"
                style={{
                  fontSize: '10px', padding: '2px 8px', borderRadius: 4, border: '1px solid', cursor: 'pointer',
                  backgroundColor: tabularNumsActive ? 'var(--color-functional-red)' : 'var(--color-bg-primary)',
                  color: tabularNumsActive ? 'var(--color-bg-primary)' : 'var(--color-text-secondary)',
                  borderColor: tabularNumsActive ? 'var(--color-functional-red)' : 'var(--color-border-default)'
                }}
              >
                {tabularNumsActive ? 'Tabular 활성' : 'Default Proportional'}
              </button>
            </div>
          </div>

          <div className="knds-bg-secondary knds-border knds-p-200 knds-radius-sm knds-flex-col knds-justify-center" style={{ gap: 12, minHeight: '140px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, borderBottom: '1px solid var(--color-border-default)', paddingBottom: 8 }}>
              <span className="knds-text-label-14-mono knds-text-muted" style={{ fontSize: '10px', fontWeight: 'bold' }}>지표 부문</span>
              <span className="knds-text-label-14-mono knds-text-muted" style={{ fontSize: '10px', fontWeight: 'bold', textAlign: 'right' }}>기본 가변폭 숫자</span>
              <span className="knds-text-label-14-mono" style={{ fontSize: '10px', fontWeight: 'bold', textAlign: 'right' }}>정밀 고정폭 수치 (tabular)</span>
            </div>

            <div className="knds-flex-col" style={{ gap: 10 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'center' }}>
                <span className="knds-text-copy-14 knds-text-muted" style={{ fontSize: '12px' }}>시스템 매출액</span>
                <span className="knds-text-copy-14 knds-text-muted" style={{ fontSize: '12px', textAlign: 'right', letterSpacing: '-0.05em' }}>
                  ₩{metrics.price.toLocaleString()}
                </span>
                <span className="knds-text-label-14-mono" style={{ fontSize: '12px', fontWeight: 'bold', textAlign: 'right', fontVariantNumeric: tabularNumsActive ? 'tabular-nums' : 'normal' }}>
                  ₩{metrics.price.toLocaleString()}
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'center' }}>
                <span className="knds-text-copy-14 knds-text-muted" style={{ fontSize: '12px' }}>코어 가압 인덱스</span>
                <span className="knds-text-copy-14 knds-text-muted" style={{ fontSize: '12px', textAlign: 'right' }}>
                  {metrics.speed} m/s
                </span>
                <span className="knds-text-label-14-mono" style={{ fontSize: '12px', fontWeight: 'bold', textAlign: 'right', fontVariantNumeric: tabularNumsActive ? 'tabular-nums' : 'normal' }}>
                  {metrics.speed} m/s
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'center' }}>
                <span className="knds-text-copy-14 knds-text-muted" style={{ fontSize: '12px' }}>누적 제어량</span>
                <span className="knds-text-copy-14 knds-text-muted" style={{ fontSize: '12px', textAlign: 'right' }}>
                  {metrics.count} hps
                </span>
                <span className="knds-text-label-14-mono" style={{ fontSize: '12px', fontWeight: 'bold', textAlign: 'right', fontVariantNumeric: tabularNumsActive ? 'tabular-nums' : 'normal' }}>
                  {metrics.count} hps
                </span>
              </div>
            </div>
          </div>

          <div className="knds-text-copy-14 knds-text-muted knds-mt-200" style={{ fontSize: '10px', lineHeight: 1.6 }}>
            {tabularNumsActive ? (
              <p className="knds-text-red knds-bg-secondary knds-p-100 knds-radius-sm knds-font-bold">
                ✓ <strong>tabular-nums</strong> 속성을 통과시키고 있습니다. 숫자 1과 8의 가로폭이 완벽히 대칭되므로, 실시간 통계가 폭동할 때 레이아웃 열이 미세하게 좌우로 진동하며 눈의 피로를 유발하는 떨림이 일절 관측되지 않습니다.
              </p>
            ) : (
              <p className="knds-text-muted knds-bg-secondary knds-p-100 knds-radius-sm">
                 <strong>proportional-nums</strong> 상태입니다. 숫자가 변경될 때 전체 문자열의 너비가 동적으로 요동쳐 레이아웃을 좌우로 교란합니다.
              </p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
