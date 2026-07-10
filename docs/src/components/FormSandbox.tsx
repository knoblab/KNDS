import React from 'react';

export default function FormSandbox() {
  return (
    <div className="knds-bg-secondary knds-border knds-p-300">
      <h3 className="knds-text-label-16 knds-mb-200">Forms & Inputs (입력 폼 컴포넌트)</h3>
      <p className="knds-text-copy-14 knds-text-muted knds-mb-300">
        입력 폼은 시스템과 사용자가 대화하는 가장 기초적인 수단입니다. 상태(Normal, Focus, Error, Disabled)에 따라 명확하고 즉각적인 시각적 피드백을 제공해야 합니다.
      </p>

      <div className="knds-flex-col knds-gap-300">
        
        {/* 1. Normal State */}
        <div className="knds-flex-col knds-gap-100">
          <label className="knds-text-label-14-mono knds-text-muted">1. Default State (기본 상태)</label>
          <input 
            type="text" 
            placeholder="이메일을 입력하세요" 
            className="knds-w-full knds-radius-md knds-border"
            style={{ 
              padding: '12px 16px', 
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              maxWidth: '400px',
              backgroundColor: 'var(--color-bg-primary)',
              color: 'var(--color-text-primary)'
            }} 
          />
          <p className="knds-text-copy-13-mono knds-text-muted">도움말 텍스트는 좌측 하단에 배치하며 은은한 색상을 사용합니다.</p>
        </div>

        {/* 2. Focus State */}
        <div className="knds-flex-col knds-gap-100">
          <label className="knds-text-label-14-mono knds-text-muted">2. Focus State (포커스 상태)</label>
          <input 
            type="text" 
            defaultValue="focusing@example.com"
            className="knds-w-full knds-radius-md"
            style={{ 
              padding: '12px 16px', 
              border: '1px solid var(--color-text-primary)', 
              outline: '2px solid var(--color-border-hover)',
              outlineOffset: '2px',
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              maxWidth: '400px',
              backgroundColor: 'var(--color-bg-primary)',
              color: 'var(--color-text-primary)'
            }} 
          />
          <p className="knds-text-copy-13-mono knds-text-muted">입력 중일 때는 윤곽선을 강하게 대비시켜 사용자 위치를 안내합니다.</p>
        </div>

        {/* 3. Error State */}
        <div className="knds-flex-col knds-gap-100">
          <label className="knds-text-label-14-mono knds-text-muted">3. Validation Error (검증 오류 상태)</label>
          <input 
            type="text" 
            defaultValue="invalid-email"
            className="knds-w-full knds-radius-md knds-shadow-glow"
            style={{ 
              padding: '12px 16px', 
              border: '1px solid var(--color-functional-red)', 
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              maxWidth: '400px',
              backgroundColor: 'var(--color-bg-primary)',
              color: 'var(--color-text-primary)'
            }} 
          />
          <p className="knds-text-copy-13-mono knds-text-red">유효한 이메일 주소 형식이 아닙니다.</p>
          <p className="knds-text-copy-14 knds-text-muted knds-mt-100">오류 시에는 강렬한 Functional Red 색상과 함께 텍스트로 명확한 원인을 설명해야 합니다.</p>
        </div>

        {/* 4. Disabled State */}
        <div className="knds-flex-col knds-gap-100">
          <label className="knds-text-label-14-mono knds-text-muted">4. Disabled State (비활성 상태)</label>
          <input 
            type="text" 
            disabled
            value="수정할 수 없는 데이터"
            className="knds-w-full knds-radius-md knds-border"
            style={{ 
              padding: '12px 16px', 
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              maxWidth: '400px',
              backgroundColor: 'var(--color-bg-secondary)',
              color: 'var(--color-text-secondary)',
              cursor: 'not-allowed',
              opacity: 0.7
            }} 
          />
        </div>

      </div>
    </div>
  );
}
