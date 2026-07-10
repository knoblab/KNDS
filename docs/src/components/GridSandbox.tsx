import React, { useState } from 'react';
import { LayoutGrid } from 'lucide-react';
import { SpacingToken } from '../types';

export default function GridSandbox() {
  const [selectedToken, setSelectedToken] = useState<string>('$space-200');
  
  const tokens: SpacingToken[] = [
    { name: '$space-025', rem: '0.125rem', px: 2, useCase: '미세 경계선 오프셋, 입력 필드 내 선택 표시기 정렬' },
    { name: '$space-050', rem: '0.25rem', px: 4, useCase: '배치 뱃지 내측 여백, 체크박스 내부 아이콘 마진' },
    { name: '$space-100', rem: '0.5rem', px: 8, useCase: '기본 베이스라인, 수직 리스트 요소 간 간정 격자' },
    { name: '$space-150', rem: '0.75rem', px: 12, useCase: '입력 폼 레이블과 입력 창 간의 결합 거리' },
    { name: '$space-200', rem: '1.0rem', px: 16, useCase: '카드 컨테이너 내측 기본 패딩, 표준 버튼 좌우 패딩' },
    { name: '$space-300', rem: '1.5rem', px: 24, useCase: '섹션 수직 격차, 표준 대화상자 여백, 마케팅 레이아웃' },
    { name: '$space-400', rem: '2.0rem', px: 32, useCase: '데스크톱 대시보드 주 격화 분할, 헤더 콘텐츠 외측' },
    { name: '$space-600', rem: '3.0rem', px: 48, useCase: '페이지 좌우 전역 마진, 히어로 영역 수직 패딩' },
    { name: '$space-800', rem: '4.0rem', px: 64, useCase: '비대칭 스플릿 수평 분할 경계면, 극단적 환기 공간' },
  ];

  const currentToken = tokens.find(t => t.name === selectedToken) || tokens[4];

  return (
    <div className="knds-panel">
      <div className="knds-panel-header knds-flex-row knds-justify-between knds-items-center">
        <div>
          <span className="knds-text-label-14-mono knds-text-red knds-mb-100 knds-font-bold" style={{ display: 'block' }}>
            CH.2 INTERACTIVE SANDBOX
          </span>
          <h4 className="knds-text-label-16 knds-font-bold">
            실시간 다중 스케일 여백(Spacing Scale) 조작기
          </h4>
        </div>
        <LayoutGrid className="knds-text-muted" style={{ width: 16, height: 16 }} />
      </div>

      <p className="knds-text-copy-14 knds-text-muted knds-mb-300">
        아래 표에서 여백 토큰을 선택하면 <strong>물리적 부피와 간격 구조</strong>가 우측 다이어그램에 즉각적으로 반영됩니다. 이 가상 컴포넌트는 모든 마진, 패딩, 갭 계산이 엄밀한 토큰 가스 배수를 유지함을 보증합니다.
      </p>

      <div className="knds-flex-row knds-gap-300 knds-flex-wrap">
        {/* Token Table selector */}
        <div className="knds-border knds-radius-sm" style={{ flex: '1 1 50%', overflowX: 'auto' }}>
          <table className="knds-table" style={{ margin: 0 }}>
            <thead>
              <tr>
                <th style={{ fontSize: '10px', fontFamily: 'var(--font-mono)' }}>토큰명</th>
                <th style={{ fontSize: '10px', fontFamily: 'var(--font-mono)' }}>Rem</th>
                <th style={{ fontSize: '10px', fontFamily: 'var(--font-mono)' }}>Pixel</th>
                <th style={{ fontSize: '10px', fontFamily: 'var(--font-mono)' }}>시각 바</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((token) => (
                <tr 
                  key={token.name}
                  onClick={() => setSelectedToken(token.name)}
                  className="knds-cursor-pointer"
                  style={{ backgroundColor: selectedToken === token.name ? 'var(--color-red-light)' : 'transparent', fontWeight: selectedToken === token.name ? 'bold' : 'normal' }}
                >
                  <td className="knds-text-label-14-mono" style={{ fontSize: '11px', color: 'var(--color-text-primary)' }}>
                    <span className="knds-inline-block knds-radius-full" style={{ width: 6, height: 6, backgroundColor: selectedToken === token.name ? 'var(--color-functional-red)' : 'transparent', marginRight: 6 }} />
                    {token.name}
                  </td>
                  <td className="knds-text-label-14-mono knds-text-muted" style={{ fontSize: '11px' }}>{token.rem}</td>
                  <td className="knds-text-label-14-mono knds-font-bold" style={{ fontSize: '11px' }}>{token.px}px</td>
                  <td>
                    <div style={{ height: 10, borderRadius: 2, backgroundColor: selectedToken === token.name ? 'var(--color-functional-red)' : 'var(--color-border-default)', width: `${Math.min(100, Math.max(4, token.px * 1.5))}px` }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Dynamic visual preview panel */}
        <div className="knds-bg-secondary knds-border knds-p-200 knds-radius-sm knds-flex-col knds-justify-between" style={{ flex: '1 1 40%' }}>
          <div>
            <span className="knds-text-label-14-mono knds-text-muted" style={{ fontSize: '10px', display: 'block', marginBottom: 4 }}>SELECTED SPACING VISUALIZATION</span>
            <div className="knds-bg-secondary knds-border knds-p-150 knds-radius-sm knds-mb-200">
              <div className="knds-flex-row knds-justify-between knds-items-center knds-mb-100">
                <span className="knds-text-label-14-mono knds-font-bold">{currentToken.name}</span>
                <span className="knds-text-label-14-mono knds-text-red knds-font-bold">{currentToken.px}px</span>
              </div>
              <p className="knds-text-copy-14 knds-text-muted" style={{ fontSize: '11px' }}>{currentToken.useCase}</p>
            </div>
          </div>

          {/* Precision mockup layout demonstrating the spacing */}
          <div className="knds-bg-secondary knds-p-100 knds-border knds-radius-sm knds-relative knds-flex-col knds-justify-center" style={{ borderStyle: 'dashed', borderColor: 'var(--color-border-hover)', minHeight: '160px' }}>
            <div className="knds-text-label-14-mono knds-text-muted knds-absolute" style={{ fontSize: '9px', top: 4, left: 8 }}>PARENT WRAPPER</div>

            <div className="knds-flex-col" style={{ gap: 8, marginTop: 16, marginBottom: 16 }}>
              <div className="knds-bg-secondary knds-border knds-p-100 knds-radius-sm knds-text-center" style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}>
                컨테이너 요소 A
              </div>
              
              {/* This is the spacer representing selected token */}
              <div className="knds-relative knds-flex-row knds-items-center knds-justify-center" style={{ padding: '4px 0' }}>
                <div className="knds-absolute" style={{ left: 0, right: 0, height: 1, backgroundColor: 'var(--color-functional-red)', opacity: 0.4, top: '50%' }} />
                
                <div className="knds-flex-row knds-items-center knds-justify-center knds-overflow-hidden" style={{ 
                  backgroundColor: 'var(--color-functional-red)', 
                  borderTop: '1px solid var(--color-functional-red)', 
                  borderBottom: '1px solid var(--color-functional-red)', 
                  height: `${currentToken.px}px`, 
                  minHeight: '6px', 
                  transition: 'height 0.3s ease',
                  zIndex: 10 
                }}>
                  <span className="knds-text-label-14-mono knds-text-red knds-font-bold" style={{ fontSize: '8px', backgroundColor: 'var(--color-bg-primary)', padding: '0 4px', borderRadius: 2, transform: 'scale(0.75)' }}>
                    {currentToken.name}
                  </span>
                </div>
              </div>

              <div className="knds-bg-secondary knds-border knds-p-100 knds-radius-sm knds-text-center" style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}>
                컨테이너 요소 B
              </div>
            </div>

            <div className="knds-border-top knds-pt-100 knds-flex-row knds-justify-between knds-items-center knds-text-label-14-mono knds-text-muted" style={{ fontSize: '9px' }}>
              <span>수치 배수: ×{currentToken.px / 8} (8dp Base)</span>
              <span>Rem 환율: {currentToken.rem}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
