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
    <div className="pdf-panel">
      <div className="pdf-panel-header pdf-flex-row pdf-justify-between pdf-items-center">
        <div>
          <span className="pdf-text-label-14-mono pdf-text-red pdf-mb-100" style={{ display: 'block', fontWeight: 'bold' }}>
            CH.2 INTERACTIVE SANDBOX
          </span>
          <h4 className="pdf-text-label-16" style={{ fontWeight: 'bold' }}>
            실시간 다중 스케일 여백(Spacing Scale) 조작기
          </h4>
        </div>
        <LayoutGrid className="pdf-text-muted" style={{ width: 16, height: 16 }} />
      </div>

      <p className="pdf-text-copy-14 pdf-text-muted pdf-mb-300">
        아래 표에서 여백 토큰을 선택하면 <strong>물리적 부피와 간격 구조</strong>가 우측 다이어그램에 즉각적으로 반영됩니다. 이 가상 컴포넌트는 모든 마진, 패딩, 갭 계산이 엄밀한 토큰 가스 배수를 유지함을 보증합니다.
      </p>

      <div className="pdf-flex-row pdf-gap-300" style={{ flexWrap: 'wrap' }}>
        {/* Token Table selector */}
        <div style={{ flex: '1 1 50%', overflowX: 'auto', border: '1px solid var(--color-border-default)', borderRadius: 4 }}>
          <table className="pdf-table" style={{ margin: 0 }}>
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
                  style={{ cursor: 'pointer', backgroundColor: selectedToken === token.name ? 'var(--color-red-light)' : 'transparent', fontWeight: selectedToken === token.name ? 'bold' : 'normal' }}
                >
                  <td className="pdf-text-label-14-mono" style={{ fontSize: '11px', color: 'var(--color-text-primary)' }}>
                    <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', backgroundColor: selectedToken === token.name ? 'var(--color-functional-red)' : 'transparent', marginRight: 6 }} />
                    {token.name}
                  </td>
                  <td className="pdf-text-label-14-mono pdf-text-muted" style={{ fontSize: '11px' }}>{token.rem}</td>
                  <td className="pdf-text-label-14-mono" style={{ fontSize: '11px', fontWeight: 'bold' }}>{token.px}px</td>
                  <td>
                    <div style={{ height: 10, borderRadius: 2, backgroundColor: selectedToken === token.name ? 'var(--color-functional-red)' : 'var(--color-border-default)', width: `${Math.min(100, Math.max(4, token.px * 1.5))}px` }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Dynamic visual preview panel */}
        <div className="pdf-bg-secondary pdf-border" style={{ flex: '1 1 40%', padding: 'var(--space-200)', borderRadius: 4, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span className="pdf-text-label-14-mono pdf-text-muted" style={{ fontSize: '10px', display: 'block', marginBottom: 4 }}>SELECTED SPACING VISUALIZATION</span>
            <div className="pdf-bg-secondary pdf-border pdf-p-150" style={{ borderRadius: 4, marginBottom: 'var(--space-200)' }}>
              <div className="pdf-flex-row pdf-justify-between pdf-items-center pdf-mb-100">
                <span className="pdf-text-label-14-mono" style={{ fontWeight: 'bold' }}>{currentToken.name}</span>
                <span className="pdf-text-label-14-mono pdf-text-red" style={{ fontWeight: 'bold' }}>{currentToken.px}px</span>
              </div>
              <p className="pdf-text-copy-14 pdf-text-muted" style={{ fontSize: '11px' }}>{currentToken.useCase}</p>
            </div>
          </div>

          {/* Precision mockup layout demonstrating the spacing */}
          <div className="pdf-bg-secondary pdf-p-100 pdf-border" style={{ borderStyle: 'dashed', borderColor: 'var(--color-border-hover)', borderRadius: 4, position: 'relative', minHeight: '160px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="pdf-text-label-14-mono pdf-text-muted" style={{ fontSize: '9px', position: 'absolute', top: 4, left: 8 }}>PARENT WRAPPER</div>

            <div className="pdf-flex-col" style={{ gap: 8, marginTop: 16, marginBottom: 16 }}>
              <div className="pdf-bg-secondary pdf-border pdf-p-100" style={{ borderRadius: 4, textAlign: 'center', fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}>
                컨테이너 요소 A
              </div>
              
              {/* This is the spacer representing selected token */}
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px 0' }}>
                <div style={{ position: 'absolute', left: 0, right: 0, height: 1, backgroundColor: 'var(--color-functional-red)', opacity: 0.4, top: '50%' }} />
                
                <div style={{ 
                  backgroundColor: 'var(--color-functional-red)', 
                  borderTop: '1px solid var(--color-functional-red)', 
                  borderBottom: '1px solid var(--color-functional-red)', 
                  height: `${currentToken.px}px`, 
                  minHeight: '6px', 
                  transition: 'height 0.3s ease',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  overflow: 'hidden', 
                  zIndex: 10 
                }}>
                  <span className="pdf-text-label-14-mono pdf-text-red" style={{ fontSize: '8px', fontWeight: 'bold', backgroundColor: 'var(--color-bg-primary)', padding: '0 4px', borderRadius: 2, transform: 'scale(0.75)' }}>
                    {currentToken.name}
                  </span>
                </div>
              </div>

              <div className="pdf-bg-secondary pdf-border pdf-p-100" style={{ borderRadius: 4, textAlign: 'center', fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}>
                컨테이너 요소 B
              </div>
            </div>

            <div className="pdf-border-top pdf-pt-100 pdf-flex-row pdf-justify-between pdf-items-center pdf-text-label-14-mono pdf-text-muted" style={{ fontSize: '9px' }}>
              <span>수치 배수: ×{currentToken.px / 8} (8dp Base)</span>
              <span>Rem 환율: {currentToken.rem}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
