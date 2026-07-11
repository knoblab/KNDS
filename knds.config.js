/** @type {import('@knoblab/knds').Config} */
export default {
  // 1. 스캐너가 추적할 소스 파일 패턴
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue,svelte,html}',
    './docs/src/**/*.{js,ts,jsx,tsx,html}',
    './template/**/*.html',
    './test/**/*.html'
  ],

  // 2. 클래스 접두사 지정 (기본값: 'knds-')
  prefix: 'knds-',

  // 3. Knoblab 디자인 토큰 확장 및 커스텀
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

  // 4. 동적 클래스 생성을 강제 보존할 패턴 (선택 사항)
  safelist: [
    'knds-indicator-dot',
    'knds-btn-primary',
  ]
};
