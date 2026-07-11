import React from 'react';

export interface OverviewSpec {
  summary: string;
  purpose: string;
}

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
  preview?: React.ReactNode;
}

export interface StateItem {
  state: string;
  visualChange: string;
  functionalRole: string;
}

export interface AccessibilityItem {
  category: string;
  description: string;
}

export interface TokenItem {
  name: string;
  defaultValue: string;
  darkValue?: string;
  description: string;
}

export interface HigSpecProps {
  overview?: OverviewSpec;
  anatomy?: AnatomyItem[];
  doDont?: DoDontItem[];
  interactions?: StateItem[];
  accessibility?: AccessibilityItem[];
  tokens?: TokenItem[];
  responsiveRules?: string[];
}

export default function HigSpecSection({
  overview,
  anatomy,
  doDont,
  interactions,
  accessibility,
  tokens,
  responsiveRules,
}: HigSpecProps) {
  return (
    <div className="knds-mt-400 knds-border-top knds-pt-400 knds-flex-col knds-gap-400">
      
      {/* 1. OVERVIEW (개요) */}
      {overview && (
        <div className="knds-panel knds-p-300">
          <div className="knds-flex-row knds-items-center knds-gap-100 knds-mb-150">
            <span className="knds-badge" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>01. OVERVIEW</span>
            <h3 className="knds-text-heading-24" style={{ fontSize: '20px' }}>Overview (개요 및 핵심 목적)</h3>
          </div>
          <div className="knds-flex-col knds-gap-100">
            <p className="knds-text-copy-14 knds-text-primary knds-font-bold">
              {overview.summary}
            </p>
            <p className="knds-text-copy-14 knds-text-muted">
              <span className="knds-text-red knds-font-bold knds-mr-100">UX Rationale:</span>
              {overview.purpose}
            </p>
          </div>
        </div>
      )}

      {/* 2. ANATOMY SPECIFICATION (구조 및 해부학) */}
      {anatomy && anatomy.length > 0 && (
        <div>
          <div className="knds-flex-row knds-items-center knds-gap-100 knds-mb-200">
            <span className="knds-badge" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>02. ANATOMY</span>
            <h3 className="knds-text-heading-24" style={{ fontSize: '20px' }}>Anatomy (구조 및 해부학)</h3>
          </div>
          <p className="knds-text-copy-14 knds-text-muted knds-mb-200">
            해당 디자인 패턴 및 컴포넌트를 구성하는 핵심 시각적 요소(텍스트, 아이콘, 배경, 여백, 경계선 등)와 참조 CSS 토큰 명세입니다.
          </p>
          <div className="knds-overflow-x-auto">
            <table className="knds-table">
              <thead>
                <tr>
                  <th style={{ width: '60px' }}>번호</th>
                  <th style={{ width: '200px' }}>요소명 (Element)</th>
                  <th style={{ width: '240px' }}>클래스 / CSS 변수 토큰</th>
                  <th>역할 및 렌더링 명세</th>
                </tr>
              </thead>
              <tbody>
                {anatomy.map((item, idx) => (
                  <tr key={item.id}>
                    <td className="knds-text-label-14-mono knds-font-bold">0{idx + 1}</td>
                    <td className="knds-text-label-16 knds-font-bold" style={{ fontSize: '14px' }}>{item.name}</td>
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

      {/* 3. BEST PRACTICES (모범 사례 및 사용법 - DO & DON'T) */}
      {doDont && doDont.length > 0 && (
        <div>
          <div className="knds-flex-row knds-items-center knds-gap-100 knds-mb-200">
            <span className="knds-badge" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>03. BEST PRACTICES</span>
            <h3 className="knds-text-heading-24" style={{ fontSize: '20px' }}>Best Practices (모범 사례 및 사용법)</h3>
          </div>
          <p className="knds-text-copy-14 knds-text-muted knds-mb-200">
            KNDS 디자인 철학에 입각하여 시각적 일관성(Consistency)과 기능적 정직성(Functional Honesty), 그리고 명확한 어포던스(Affordance)를 유지하기 위한 실무 준칙입니다.
          </p>
          <div className="knds-grid knds-grid-cols-1 knds-md:grid-cols-2 knds-gap-200">
            {doDont.map((item, idx) => {
              const isDo = item.type === 'do';
              return (
                <div
                  key={idx}
                  className="knds-panel knds-p-300"
                  style={{
                    borderLeft: `4px solid ${isDo ? 'var(--color-text-primary)' : 'var(--color-functional-red)'}`,
                    marginBottom: 0,
                  }}
                >
                  <div className="knds-flex-row knds-items-center knds-gap-100 knds-mb-150">
                    <span
                      className="knds-text-label-14-mono knds-font-bold"
                      style={{
                        color: isDo ? 'var(--color-text-primary)' : 'var(--color-functional-red)',
                        backgroundColor: isDo ? 'var(--color-bg-tertiary)' : 'var(--color-red-light)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                      }}
                    >
                      {isDo ? '✔ DO (권장 사항)' : '✘ DON\'T (지양 사항)'}
                    </span>
                    <h4 className="knds-text-label-16 knds-font-bold" style={{ fontSize: '15px' }}>{item.title}</h4>
                  </div>
                  {item.preview && (
                    <div
                      className="knds-mb-150 knds-p-200 knds-border knds-radius-sm knds-flex-row knds-items-center knds-justify-center knds-overflow-hidden"
                      style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        minHeight: '72px',
                        borderColor: isDo ? 'var(--color-border-default)' : 'var(--color-functional-red)',
                        borderWidth: '1px',
                        borderStyle: isDo ? 'solid' : 'dashed'
                      }}
                    >
                      {item.preview}
                    </div>
                  )}
                  <p className="knds-text-copy-14 knds-text-muted knds-mb-150" style={{ lineHeight: '1.6' }}>
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

      {/* 4. INTERACTIONS & STATES (상호작용 및 상태) */}
      {interactions && interactions.length > 0 && (
        <div>
          <div className="knds-flex-row knds-items-center knds-gap-100 knds-mb-200">
            <span className="knds-badge" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>04. INTERACTIONS & STATES</span>
            <h3 className="knds-text-heading-24" style={{ fontSize: '20px' }}>Interactions & States (상호작용 및 상태)</h3>
          </div>
          <p className="knds-text-copy-14 knds-text-muted knds-mb-200">
            사용자의 입력 에너지가 전달되는 각 상태(Default, Hover, Pressed/Active, Focus, Disabled, Error 등)에 따른 시각적 및 기능적 변화 명세입니다.
          </p>
          <div className="knds-overflow-x-auto">
            <table className="knds-table">
              <thead>
                <tr>
                  <th style={{ width: '150px' }}>상태 (State)</th>
                  <th style={{ width: '280px' }}>시각적 변화 (Visual Change)</th>
                  <th>기능적 역할 및 피드백 (Functional Role)</th>
                </tr>
              </thead>
              <tbody>
                {interactions.map((stateItem, idx) => (
                  <tr key={idx}>
                    <td>
                      <span className="knds-text-label-14-mono knds-font-bold" style={{ color: 'var(--color-text-primary)' }}>
                        {stateItem.state}
                      </span>
                    </td>
                    <td>
                      <code className="knds-code-block" style={{ fontSize: '12px' }}>
                        {stateItem.visualChange}
                      </code>
                    </td>
                    <td className="knds-text-copy-14 knds-text-muted">
                      {stateItem.functionalRole}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 5. ACCESSIBILITY & CONSIDERATIONS (접근성 및 기타 고려사항) */}
      {((accessibility && accessibility.length > 0) || (responsiveRules && responsiveRules.length > 0)) && (
        <div>
          <div className="knds-flex-row knds-items-center knds-gap-100 knds-mb-200">
            <span className="knds-badge" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>05. ACCESSIBILITY</span>
            <h3 className="knds-text-heading-24" style={{ fontSize: '20px' }}>Accessibility (접근성 및 기타 고려사항)</h3>
          </div>
          <p className="knds-text-copy-14 knds-text-muted knds-mb-200">
            다크 모드 고대비 대응, 스크린 리더(VoiceOver/NVDA) 시맨틱 마크업, Dynamic Type 폰트 크기 변경 및 디바이스 분기 시 보장되어야 할 필수 준칙입니다.
          </p>
          
          <div className="knds-grid knds-grid-cols-1 knds-gap-150 knds-mb-200">
            {accessibility && accessibility.map((acc, idx) => (
              <div key={idx} className="knds-panel knds-p-200 knds-flex-row knds-items-start knds-gap-200">
                <span className="knds-text-label-14-mono knds-font-bold knds-text-red knds-flex-shrink-0" style={{ width: '180px' }}>
                  {acc.category}
                </span>
                <p className="knds-text-copy-14 knds-text-muted knds-flex-1">
                  {acc.description}
                </p>
              </div>
            ))}
          </div>

          {responsiveRules && responsiveRules.length > 0 && (
            <div className="knds-panel knds-grid-bg knds-p-300">
              <span className="knds-text-label-14-mono knds-font-bold knds-text-primary knds-mb-150 knds-block">
                반응형 디바이스 적응 수칙 (Responsive Adaptation)
              </span>
              <ul className="knds-list-disc knds-text-copy-14 knds-text-muted">
                {responsiveRules.map((rule, idx) => (
                  <li key={idx} className="knds-mb-100">
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* 6. TOKEN MATRICES (CSS Custom Properties 매트릭스) */}
      {tokens && tokens.length > 0 && (
        <div>
          <div className="knds-flex-row knds-items-center knds-gap-100 knds-mb-200">
            <span className="knds-badge" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>TOKENS</span>
            <h3 className="knds-text-heading-24" style={{ fontSize: '20px' }}>CSS Custom Properties 매트릭스</h3>
          </div>
          <p className="knds-text-copy-14 knds-text-muted knds-mb-200">
            해당 영역에서 참조되는 CSS 변수의 기본값(Light Mode)과 다크 모드 전환 시 반전되는 속성값입니다.
          </p>
          <div className="knds-overflow-x-auto">
            <table className="knds-table">
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>토큰 이름 (CSS Variable)</th>
                  <th style={{ width: '180px' }}>기본값 (Light)</th>
                  <th style={{ width: '180px' }}>다크 모드 값 (Dark)</th>
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
                        <code className="knds-code-block" style={{ fontSize: '12px', color: 'var(--color-text-primary)' }}>
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

    </div>
  );
}
