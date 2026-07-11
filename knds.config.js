/** @type {import('@knoblab/knds').Config} */
export default {
  // 1. 디자인 토큰 및 컴포넌트 원형(Archetype)을 스캐닝할 소스 파일 패턴
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue,svelte,html}',
    './docs/src/**/*.{js,ts,jsx,tsx,html}',
    './template/**/*.html',
    './test/**/*.html'
  ],

  // 2. 디자인 언어 접두사 문법 (기본값: 'knds-')
  prefix: 'knds-',

  // 3. Knoblab 디자인 토큰 명세 및 물리적 상수에 대한 확장
  theme: {
    extend: {
      colors: {
        'brand-accent': '#ad1d1d',
        'surface-dark': '#09090b',
      },
      spacing: {
        'custom-header': '88px',
      }
    }
  },

  // 4. 온디맨드 빌드 시 강제 보존할 핵심 물리 스위치 및 인디케이터 패턴
  safelist: [
    'knds-indicator-dot',
    'knds-btn-primary',
  ]
};
