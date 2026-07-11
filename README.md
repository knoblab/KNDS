# KNDS (Knoblab Design Language Specification)

오디오 하드웨어의 조작감과 촉각적 피드백을 디지털 UI로 옮긴 CSS 디자인 토큰 & 컴파일러입니다.

[![Release](https://img.shields.io/github/v/release/knoblab/KNDS?label=Latest%20Release&style=flat-square)](https://github.com/knoblab/KNDS/releases/latest)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)]()
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)]()

`@knoblab/knds`는 정적 CSS 파일(CDN)로 바로 쓸 수도 있고, 빌드 파이프라인에 붙여서 사용한 클래스만 추출한 최소 CSS를 생성할 수도 있습니다.

---

## 왜 쓰나

- 색상은 흰색/검은색 대비만 쓰고, 강조색(레드)은 상태 표시용으로만 제한
- 버튼/스위치를 누르면 실제 눌리는 것 같은 그림자·스케일 변화
- 8px/24px 그리드에 맞춘 여백 값만 제공해서 임의 값 사용을 줄임

---

## 1. 설치 / 시작하기

### 방법 A — CDN, 빌드 없음

정적 HTML이나 프로토타입에서 바로 링크만 걸면 됩니다.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/knoblab/KNDS@main/knds.css">
```

```html
<body class="knds-bg-primary knds-text-primary">
  <main class="knds-panel knds-p-400 knds-max-w-xl knds-mx-auto knds-mt-400 knds-shadow-bevel">
    <div class="knds-panel-header knds-flex-row knds-justify-between knds-items-center knds-border-bottom knds-pb-200 knds-mb-300">
      <span class="knds-text-label-14-mono knds-text-red">SYSTEM READY</span>
      <span class="knds-badge">v1.0.0</span>
    </div>
    <h1 class="knds-text-heading-32 knds-font-bold knds-mb-200">Knoblab Design Language</h1>
    <p class="knds-text-copy-14 knds-text-muted knds-mb-400">Achromatic precision interface engineered for high-density control panels.</p>
    <button class="knds-btn-primary knds-btn-md">
      <span>Actuate Switch</span>
    </button>
  </main>
</body>
```

전체 시트(`knds.css`, 약 46KB)를 그대로 받기 때문에 별도 설정이 필요 없습니다. 대신 빌드 최적화는 없습니다.

### 방법 B — 온디맨드 컴파일러 (Vite / Next.js / CLI)

소스 코드를 스캔해서 실제로 쓴 클래스만 뽑아 5KB 미만의 CSS로 압축합니다.

```bash
npm install -D @knoblab/knds
```

```javascript
// postcss.config.js
import postcssKnds from '@knoblab/knds/postcss';

export default {
  plugins: [postcssKnds({ config: './knds.config.js' })]
};
```

```css
/* src/index.css */
@knds base;
@knds components;
@knds utilities;
```

CLI로 직접 빌드할 수도 있습니다.

```bash
npx knds -i knds.css -o dist/output.css --minify   # 1회 빌드
npx knds -i knds.css -o dist/output.css --watch    # 변경 감지(증분 컴파일)
```

내부 동작: 정규식 스캐너가 소스에서 토큰 후보를 뽑고 → 컴포넌트 원형/임의 값(`w-[342px]` 등)을 매칭 → `@layer base, components, utilities` 순서로 정렬된 CSS를 출력합니다. 파일당 스캔 시간은 평균 0.5ms 정도입니다.

---

## 2. 설정 파일 (`knds.config.js`)

```javascript
/** @type {import('@knoblab/knds').Config} */
export default {
  // 스캔할 소스 경로
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue,svelte,html}',
    './template/**/*.html'
  ],

  // 클래스 접두사 (기본값: 'knds-')
  prefix: 'knds-',

  // 색상/스페이싱 등 토큰 확장
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

  // 컴파일 시 항상 포함시킬 클래스 (동적으로 조합돼서 스캐너가 못 잡는 경우 대비)
  safelist: [
    'knds-indicator-dot',
    'knds-btn-primary',
    'knds-shadow-bevel'
  ]
};
```

---

## 3. 주요 토큰

| 분류 | 변수 / 클래스 | 값 | 용도 |
| :--- | :--- | :--- | :--- |
| 배경/텍스트 | `--color-bg-primary`<br>`--color-text-primary` | `#ffffff` / `#09090b` (light)<br>`#09090b` / `#f4f4f5` (dark) | 기본 배경·텍스트 색. 다크모드 자동 반전 |
| 베벨 그림자 | `--shadow-hardware-bevel`<br>`.knds-shadow-bevel` | `inset 0 1px 0 rgba(255,255,255,0.8), 0 1px 3px rgba(0,0,0,0.12)` | 패널에 입체감을 주는 그림자 |
| 눌림 피드백 | `.knds-btn-primary:active` | `transform: scale(0.98); box-shadow: inset 0 2px 4px rgba(0,0,0,0.2)` | 버튼/스위치 클릭 시 눌리는 느낌 |
| 강조색 | `--color-functional-red`<br>`.knds-text-red` | `#ad1d1d` | 상태 표시, 주요 액션에만 사용 (장식용 금지) |
| 그리드 | `--blueprint-grid-pattern`<br>`.knds-blueprint-grid` | `24px x 24px linear-gradient` | 정렬 확인용 배경 그리드 |

### 자주 쓰는 컴포넌트 클래스

- `.knds-panel` — 베벨 그림자 + 패딩이 적용된 패널 컨테이너
- `.knds-btn-primary` — 눌림 피드백 + 강조색이 적용된 기본 버튼
- `.knds-indicator-dot` — 상태(Ready/Alert/Off)를 발광 효과로 표시하는 LED 점

---

## 4. 저장소 구조

```
KNDS/
 ├── package.json
 ├── README.md
 ├── knds.css              # 전체 토큰/컴포넌트 시트 (~46KB, CDN용)
 ├── knds.config.js        # 설정 템플릿
 ├── wrangler.jsonc        # Cloudflare Pages 배포 설정
 ├── compiler/
 │    ├── config.js        # 토큰 사전/설정 병합
 │    ├── scanner.js       # 소스에서 클래스 후보 추출
 │    ├── generator.js     # 추출된 후보로 CSS 규칙 생성
 │    ├── index.js         # compile() API
 │    ├── postcss.js       # PostCSS 플러그인
 │    └── cli.js           # CLI 실행 파일
 ├── test/
 │    ├── jit.test.js
 │    └── demo.html
 ├── template/
 │    ├── starter-html/    # CDN 방식 스타터
 │    └── starter-vite/    # Vite + TS + React 스타터
 └── docs/                 # 별도 워크스페이스 (문서용 SPA, 독립 빌드)
```

---

## 5. 라이선스

[MIT License](https://opensource.org/licenses/MIT) — Knoblab Design Team (`@knoblab/knds`)
