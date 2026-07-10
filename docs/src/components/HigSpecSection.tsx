import React from 'react';

export interface AnatomyItem {
  id: string;
  name: string;
  tokenOrClass: string;
  description: string;
}

export interface DoDontItem {
  type: 'do' | 'dont';
  title: string;
  description: string;
  codeSnippet?: string;
}

export interface TokenItem {
  name: string;
  defaultValue: string;
  darkValue?: string;
  description: string;
}

export interface HigSpecProps {
  anatomy?: AnatomyItem[];
  doDont?: DoDontItem[];
  tokens?: TokenItem[];
  responsiveRules?: string[];
}

export default function HigSpecSection({
  anatomy,
  doDont,
  tokens,
  responsiveRules,
}: HigSpecProps) {
  return (
    <div className="knds-mt-400 knds-border-top knds-pt-300">
      
      {/* 1. ANATOMY SPECIFICATION */}
      {anatomy && anatomy.length > 0 && (
        <div className="knds-mb-400">
          <div className="knds-flex-row knds-items-center knds-gap-100 knds-mb-200">
            <span className="knds-badge" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>ANATOMY</span>
            <h3 className="knds-text-heading-24" style={{ fontSize: '20px' }}>구조 명세 및 엘리먼트 분해 (Anatomy)</h3>
          </div>
          <p className="knds-text-copy-14 knds-text-muted knds-mb-200">
            해당 디자인 패턴/컴포넌트를 구성하는 세부 계층과 각 요소가 참조하는 CSS 토큰 명세입니다.
          </p>
          <div className="knds-overflow-x-auto">
            <table className="knds-table">
              <thead>
                <tr>
                  <th style={{ width: '60px' }}>번호</th>
                  <th style={{ width: '180px' }}>요소명 (Element)</th>
                  <th style={{ width: '220px' }}>클래스 / CSS 변수 토큰</th>
                  <th>역할 및 렌더링 명세</th>
                </tr>
              </thead>
              <tbody>
                {anatomy.map((item, idx) => (
                  <tr key={item.id}>
                    <td className="knds-text-label-14-mono knds-font-bold">{idx + 1}</td>
                    <td className="knds-text-label-16" style={{ fontSize: '14px' }}>{item.name}</td>
                    <td>
                      <code className="knds-code-block" style={{ fontSize: '12px', color: 'var(--color-functional-red)' }}>
                        {item.tokenOrClass}
                      </code>
                    </td>
                    <td className="knds-text-copy-14 knds-text-muted">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 2. BEST PRACTICES (DO / DON'T) */}
      {doDont && doDont.length > 0 && (
        <div className="knds-mb-400">
          <div className="knds-flex-row knds-items-center knds-gap-100 knds-mb-200">
            <span className="knds-badge" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>BEST PRACTICES</span>
            <h3 className="knds-text-heading-24" style={{ fontSize: '20px' }}>권장 및 금지 사항 (Do & Don't)</h3>
          </div>
          <p className="knds-text-copy-14 knds-text-muted knds-mb-200">
            Apple HIG 가이드라인 정신에 입각하여 시각적 일관성과 기능적 정직성을 유지하기 위한 실무 준칙입니다.
          </p>
          <div className="knds-grid knds-grid-cols-1 knds-md:grid-cols-2 knds-gap-200">
            {doDont.map((item, idx) => {
              const isDo = item.type === 'do';
              return (
                <div
                  key={idx}
                  className="knds-panel"
                  style={{
                    borderLeft: `4px solid ${isDo ? '#10B981' : 'var(--color-functional-red)'}`,
                    marginBottom: 0,
                  }}
                >
                  <div className="knds-flex-row knds-items-center knds-gap-100 knds-mb-150">
                    <span
                      className="knds-text-label-14-mono knds-font-bold"
                      style={{
                        color: isDo ? '#10B981' : 'var(--color-functional-red)',
                        backgroundColor: isDo ? 'rgba(16, 185, 129, 0.1)' : 'var(--color-red-light)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                      }}
                    >
                      {isDo ? '✔ RECOMMENDED (DO)' : '✘ AVOID (DON\'T)'}
                    </span>
                    <h4 className="knds-text-label-16" style={{ fontSize: '15px' }}>{item.title}</h4>
                  </div>
                  <p className="knds-text-copy-14 knds-text-muted knds-mb-150">
                    {item.description}
                  </p>
                  {item.codeSnippet && (
                    <div className="knds-code-block knds-selectable" style={{ fontSize: '12px', whiteSpace: 'pre-wrap' }}>
                      {item.codeSnippet}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. TOKEN MATRICES */}
      {tokens && tokens.length > 0 && (
        <div className="knds-mb-400">
          <div className="knds-flex-row knds-items-center knds-gap-100 knds-mb-200">
            <span className="knds-badge" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>TOKENS</span>
            <h3 className="knds-text-heading-24" style={{ fontSize: '20px' }}>CSS Custom Properties 매트릭스</h3>
          </div>
          <p className="knds-text-copy-14 knds-text-muted knds-mb-200">
            해당 영역에서 참조되는 CSS 변수의 기본값(Light Mode)과 다크 모드 전환 시 변경값입니다.
          </p>
          <div className="knds-overflow-x-auto">
            <table className="knds-table">
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>토큰 이름 (CSS Variable)</th>
                  <th style={{ width: '160px' }}>기본값 (Light)</th>
                  <th style={{ width: '160px' }}>다크 모드 값 (Dark)</th>
                  <th>속성 설명</th>
                </tr>
              </thead>
              <tbody>
                {tokens.map((token, idx) => (
                  <tr key={idx}>
                    <td>
                      <code className="knds-text-label-14-mono knds-font-bold" style={{ color: 'var(--color-text-primary)' }}>
                        {token.name}
                      </code>
                    </td>
                    <td>
                      <code className="knds-code-block" style={{ fontSize: '12px' }}>{token.defaultValue}</code>
                    </td>
                    <td>
                      {token.darkValue ? (
                        <code className="knds-code-block" style={{ fontSize: '12px', color: '#60A5FA' }}>
                          {token.darkValue}
                        </code>
                      ) : (
                        <span className="knds-text-label-14-mono knds-text-muted">동일 유지 (Inherit)</span>
                      )}
                    </td>
                    <td className="knds-text-copy-14 knds-text-muted">{token.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 4. RESPONSIVE ADAPTATION RULES */}
      {responsiveRules && responsiveRules.length > 0 && (
        <div className="knds-mb-400">
          <div className="knds-flex-row knds-items-center knds-gap-100 knds-mb-200">
            <span className="knds-badge" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>RESPONSIVE ADAPTATION</span>
            <h3 className="knds-text-heading-24" style={{ fontSize: '20px' }}>디바이스 분기 및 반응형 변형 규칙</h3>
          </div>
          <div className="knds-panel knds-grid-bg">
            <ul className="knds-list-disc knds-text-copy-14">
              {responsiveRules.map((rule, idx) => (
                <li key={idx} className="knds-mb-100">
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

    </div>
  );
}
