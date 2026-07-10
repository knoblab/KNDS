import React, { useState } from 'react';
import { ClipboardCheck, CheckSquare, Square } from 'lucide-react';
import { QACheckItem } from '../types';

export default function QASandbox() {
  const [items, setItems] = useState<QACheckItem[]>([
    { id: '1', category: 'SPACING', label: '하드코딩 배제: 모든 픽셀 간격 값을 제거하고 $space- 토큰 지휘권 하에 배속했는가?', checked: true },
    { id: '2', category: 'GRID', label: '그리드 강제: 청사진 그리드가 1px 두께 및 투명도 10%~20% 임계 내부에서 은은히 렌더링되는가?', checked: true },
    { id: '3', category: 'BUTTONS', label: '터치 유격: XS, S 버튼의 시각 크기와 별개로, 48×48px의 가상 충돌 영역을 가설했는가?', checked: false },
    { id: '4', category: 'COLOR', label: '레드 제한: 펑셔널 레드가 한 화면에 3개 단위를 초과하지 않으며, 텍스트 이중 수호막을 덧댔는가?', checked: false },
    { id: '5', category: 'TEXT', label: '200% 팽창 보전: 서체를 배율 200%로 강제 팽창시 레이어 이탈이나 잘림 없이 유동적인 변조가 흐르는가?', checked: false },
  ]);

  const toggleCheck = (id: string) => {
    setItems((prev) => 
      prev.map((item) => {
        if (item.id === id) {
          const nextChecked = !item.checked;
          return { ...item, checked: nextChecked };
        }
        return item;
      })
    );
  };

  const completedCount = items.filter(item => item.checked).length;
  const score = completedCount * 20;

  const getSlogan = (s: number) => {
    if (s === 100) return { title: 'PERFECTION (시스템 승인 결함 제로)', desc: '피지컬 하드웨어와 아크로매틱 디지털이 완벽하게 융합된 무결점 명세 상태입니다.', color: { text: '#047857', bg: '#ecfdf5', border: '#a7f3d0' } };
    if (s >= 60) return { title: 'APPROVED (표준 가이드 준수)', desc: '모바일 및 저시력 접근성을 충분히 대비한 양질의 릴리즈 승인 규격입니다.', color: { text: 'var(--color-text-primary)', bg: 'var(--color-bg-primary)', border: 'var(--color-border-default)' } };
    return { title: 'CRITICAL WARNING (실격 및 보류)', desc: '사용자 포인팅 유실 우려 및 접근성 규격 누락이 관측됩니다. 신속히 보정하세요.', color: { text: 'var(--color-functional-red)', bg: 'var(--color-bg-primary)', border: 'var(--color-functional-red)' } };
  };

  const slogan = getSlogan(score);

  return (
    <div className="knds-panel">
      <div className="knds-panel-header knds-flex-row knds-justify-between knds-items-center">
        <div>
          <span className="knds-text-label-14-mono knds-text-red knds-mb-100 knds-font-bold" style={{ display: 'block' }}>
            CH.8 INTERACTIVE SANDBOX
          </span>
          <h4 className="knds-text-label-16 knds-font-bold">
            실시간 디자인 검수(QA) 규칙성 자가 채점기
          </h4>
        </div>
        <ClipboardCheck className="knds-text-muted" style={{ width: 16, height: 16 }} />
      </div>

      <p className="knds-text-copy-14 knds-text-muted knds-mb-300">
        KNDS 릴리즈 자격을 획득하기 위한 <strong>5대 물리 검수 강제 수칙</strong>입니다. 항목을 조작하면 감도 지수에 따른 실시간 무결 상태 점수(Compliance Score)가 반영됩니다.
      </p>

      <div className="knds-flex-row knds-gap-300 knds-items-center knds-flex-wrap">
        {/* CHECKLIST LIST */}
        <div className="knds-flex-col knds-gap-100" style={{ flex: '1 1 50%' }}>
          {items.map((item) => (
            <div 
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className="knds-flex-row knds-gap-150 knds-border knds-p-150 knds-items-start knds-radius-md knds-cursor-pointer"
              style={{
                transition: 'all 0.2s',
                backgroundColor: item.checked ? 'var(--color-bg-secondary)' : 'transparent',
                borderColor: item.checked ? 'var(--color-border-hover)' : 'var(--color-border-default)'
              }}
            >
              <button className="knds-cursor-pointer knds-flex-shrink-0" style={{ color: 'var(--color-functional-red)', background: 'none', border: 'none', padding: 0, marginTop: 2 }}>
                {item.checked ? (
                  <CheckSquare style={{ width: 16, height: 16 }} />
                ) : (
                  <Square style={{ width: 16, height: 16, color: 'var(--color-text-secondary)' }} />
                )}
              </button>
              <div>
                <span className="knds-text-label-14-mono knds-text-red knds-font-bold" style={{ fontSize: 9, backgroundColor: 'var(--color-bg-secondary)', padding: '0 4px', borderRadius: 2 }}>
                  {item.category}
                </span>
                <p className="knds-text-copy-14" style={{ fontSize: 12, fontWeight: 500, marginTop: 4, lineHeight: 1.5 }}>
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* COMPLIANCE RADIAL/LINEAR SCOREGUARD METER */}
        <div className="knds-border knds-p-200 knds-bg-secondary knds-flex-col knds-justify-between knds-items-center knds-radius-sm" style={{ flex: '1 1 40%', minHeight: 220 }}>
          <div className="knds-text-center knds-w-full">
            <span className="knds-text-label-14-mono knds-text-muted" style={{ fontSize: 10, display: 'block', marginBottom: 12 }}>SYSTEM COMPLIANCE SCORE</span>
            
            {/* Elegant physical battery/gauge graphic */}
            <div className="knds-flex-row knds-justify-center knds-gap-100 knds-mb-200 knds-w-full" style={{ padding: '0 16px' }}>
              {[20, 40, 60, 80, 100].map((t) => (
                <div 
                  key={t}
                  className="knds-border"
                  style={{
                    height: 32, flex: 1, borderRadius: 2, transition: 'all 0.3s',
                    backgroundColor: score >= t ? 'var(--color-functional-red)' : 'var(--color-bg-secondary)',
                    borderColor: score >= t ? 'var(--color-functional-red)' : 'var(--color-border-hover)'
                  }}
                />
              ))}
            </div>

            <div className="knds-font-mono knds-flex-row knds-items-center knds-justify-center knds-gap-050" style={{ fontSize: 30, fontWeight: 800, color: 'var(--color-text-primary)' }}>
              {score}
              <span style={{ fontSize: 14, fontWeight: 'normal', color: 'var(--color-text-secondary)' }}>/ 100%</span>
            </div>
          </div>

          {/* Dynamic feedback notice */}
          <div className="knds-border knds-p-150 knds-text-center knds-w-full knds-radius-sm" style={{ transition: 'all 0.3s', color: slogan.color.text, backgroundColor: slogan.color.bg, borderColor: slogan.color.border }}>
            <span className="knds-text-label-14-mono knds-font-bold" style={{ fontSize: 10, display: 'block', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {slogan.title}
            </span>
            <p className="knds-text-copy-14" style={{ fontSize: 10, lineHeight: 1.5 }}>
              {slogan.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
