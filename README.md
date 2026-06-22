# PDF-DS

**Physical-Digital Fusion Design System**

[![Release](https://img.shields.io/github/v/release/qpi-labels/PDF-DS?label=Latest%20Release&style=flat-square)](https://github.com/qpi-labels/PDF-DS/releases/latest)
[![License](https://img.shields.io/badge/License-Proprietary-lightgrey?style=flat-square)]()
[![CSS](https://img.shields.io/badge/Pure%20CSS-No%20Runtime-blue?style=flat-square)]()

> **PDF-DS**는 물리적 제품이 가진 촉각적 피드백(tactile feedback)과 디지털 인터페이스의 구조적 미니멀리즘을 단일 디자인 언어로 통합한 CSS 기반 디자인 시스템이다. Dieter Rams의 10가지 원칙과 고대비 무채색(achromatic) 팔레트를 근간으로 하며, 형태 변형(shape-morphing) 마이크로인터랙션을 통해 하드웨어 조작감을 스크린 위에 재현한다.

<br/>

<p>
  <a href="http://pdf-ds.qpi.digital">Design Guideline & Interactive Sandbox →</a>
</p>

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Architecture](#architecture)
3. [Installation](#installation)
4. [Token System](#token-system)
5. [Component Reference](#component-reference)
6. [Theming](#theming)
7. [Utility Classes](#utility-classes)

---

## Design Philosophy

PDF-DS는 세 가지 설계 원칙 위에 구축되었다.

| Principle | Description |
|---|---|
| **Tactile Fidelity** | 물리적 버튼의 저항감, 표면의 미세한 곡률(bevel), 누름 시의 광원 반전을 `box-shadow` 레이어 스택으로 시뮬레이션한다. |
| **Achromatic Discipline** | 무채색 그레이스케일을 주조색으로 사용하고, 기능적 의미를 전달해야 하는 단일 지점에만 Red(`#ad1d1d`)를 허용한다. |
| **Golden Ratio Spacing** | 모든 여백 토큰은 8px 기본 단위의 배수 체계를 따르며, 시각적 리듬의 수학적 일관성을 보장한다. |

이 원칙들은 프레임워크에 비종속적(framework-agnostic)인 순수 CSS로 구현되어 있으므로, HTML 마크업에 클래스명을 부여하는 것만으로 어떠한 환경에서든 즉시 적용된다.

---

## Architecture

```
PDF-DS/
├── src/
│   └── index.css          # 디자인 토큰, 컴포넌트, 유틸리티를 포함하는 단일 스타일시트
├── .env.example            # 환경 변수 템플릿
├── vite.config.ts          # Vite 빌드 설정
├── wrangler.jsonc          # Cloudflare Workers 배포 설정
└── metadata.json           # 프로젝트 메타데이터
```

`src/index.css`는 다음의 논리적 섹션으로 구성된다:

1. **Design Tokens** — 색상, 간격, 타이포그래피, 그림자 등 모든 시각적 속성의 원자적 변수 선언
2. **Base Styles** — 전역 리셋 및 기본 요소 스타일링
3. **Component Styles** — 레이아웃, 버튼, 패널, 입력 필드 등 재사용 가능한 컴포넌트
4. **Utility Classes** — 인라인 레벨의 간격·배치·색상 제어를 위한 단축 클래스

---

## Installation

> **주의**: `git clone`으로 본 리포지토리를 복제하면 원격 origin이 자동으로 연결되어 의도치 않은 source control 충돌이 발생할 수 있다. 아래의 방법 중 하나를 사용할 것을 권장한다.
>
> **[→ Releases 페이지에서 ZIP 다운로드](https://github.com/qpi-labels/PDF-DS/releases/latest)**

### Method 1 — CDN (권장)

외부 의존성 없이 `<link>` 태그 하나로 전체 디자인 시스템을 로드한다.

```html
<head>
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/qpi-labels/PDF-DS@main/src/index.css">
</head>
```

### Method 2 — Local Import

CSS 파일을 프로젝트에 직접 포함하여 토큰 수준의 커스터마이징이 필요한 경우에 사용한다.

```javascript
// 진입점 파일 (main.tsx, App.vue, etc.)
import './styles/pdf-ds.css';
```

### Method 3 — Development Server

샌드박스 환경을 로컬에서 실행한다.

```bash
npm install
npm run dev        # http://localhost:3000
```

---

## Token System

모든 시각적 속성은 CSS Custom Properties로 선언되며, 테마 전환 시 변수 값만 교체된다.

### Spacing

| Token | Value | Usage |
|---|---|---|
| `--space-025` | 2px | 미세 간격, 아이콘 내부 패딩 |
| `--space-050` | 4px | 인접 요소 간 최소 간격 |
| `--space-100` | 8px | 기본 단위 |
| `--space-200` | 16px | 컴포넌트 내부 패딩 |
| `--space-300` | 24px | 섹션 간 간격 |
| `--space-400` | 32px | 카드·패널 내부 여백 |
| `--space-600` | 48px | 페이지 레벨 섹션 구분 |
| `--space-800` | 64px | 최상위 레이아웃 마진 |

### Color Palette

```
Light Mode                          Dark Mode
──────────────────────────          ──────────────────────────
bg-primary:    #ffffff              bg-primary:    #09090b
bg-secondary:  #f4f4f5              bg-secondary:  #18181b
border:        #e4e4e7              border:        #27272a
text-primary:  #09090b              text-primary:  #ffffff
text-secondary:#71717a              text-secondary:#a1a1aa
──────────────────────────          ──────────────────────────
functional-red:#ad1d1d   (공통)
```

### Elevation

그림자 시스템은 하드웨어 표면의 광원 반응을 모델링한다.

| Token | Description |
|---|---|
| `--shadow-hardware-bevel` | 상단 하이라이트 + 하단 암부. 볼록한 버튼의 기본 상태를 표현 |
| `--shadow-hardware-bevel-active` | 광원 방향 반전. 버튼이 눌린 오목한 상태를 표현 |
| `--shadow-functional-glow` | Red 기능색의 확산 광(diffuse glow). 주요 액션 강조 |
| `--shadow-functional-glow-active` | 축소된 광원 반경. 액션 활성화 상태 |

### Typography

| Font Stack | Role |
|---|---|
| `Pretendard Variable` → `Geist Sans` → system | 본문 및 UI 텍스트 |
| `JetBrains Mono` | 코드 블록 및 모노스페이스 컨텍스트 |

---

## Component Reference

모든 컴포넌트는 `pdf-` 접두사 네임스페이스를 사용한다.

### Layout

앱 셸(App Shell)은 사이드바-메인 뷰 이중 구조를 기본 패턴으로 한다. 반응형 분기점에서 사이드바는 하단 시트로 전환된다.

```html
<div class="pdf-app">
  <aside class="pdf-sidebar">
    <nav>
      <div class="pdf-nav-item active">Dashboard</div>
      <div class="pdf-nav-item">Settings</div>
    </nav>
  </aside>
  <main class="pdf-main-view">
    <div class="pdf-main-content">
      <!-- Content -->
    </div>
  </main>
</div>
```

### Button

버튼은 `primary`(기능색 배경)와 `secondary`(무채색 테두리)의 두 가지 변형을 제공하며, 각각 `sm`, `md`, `lg` 크기 토큰을 조합할 수 있다.

```html
<button class="pdf-btn-primary pdf-btn-md">Confirm</button>
<button class="pdf-secondary-btn">Cancel</button>
```

눌림 시 `--shadow-hardware-bevel`에서 `--shadow-hardware-bevel-active`로의 전환이 자동 적용되어, 물리적 버튼의 깊이감 변화를 재현한다.

### Panel

정보 그룹화를 위한 컨테이너. 하드웨어 디스플레이의 미세 곡률(bevel)이 적용된다.

```html
<div class="pdf-panel">
  <div class="pdf-panel-header">
    <h3 class="pdf-text-label-16">System Configuration</h3>
  </div>
  <p class="pdf-text-copy-14 pdf-text-muted">
    Subsystem parameters and runtime options.
  </p>
</div>
```

### Typography Scale

```html
<h1 class="pdf-text-heading-72">Display</h1>
<h2 class="pdf-text-heading-32">Heading</h2>
<strong class="pdf-text-label-16">Label</strong>
<p class="pdf-text-copy-14">Body text.</p>
```

### Input

```html
<input type="text" class="pdf-input pdf-input-md" placeholder="Enter value" />
```

---

## Theming

PDF-DS는 Light/Dark 이중 테마를 지원한다. 최상위 컨테이너에 `data-theme` 속성을 선언하여 전환한다.

```html
<!-- Dark Mode -->
<body data-theme="dark">
  <div class="pdf-app">...</div>
</body>
```

토큰 시스템이 `:root`와 `[data-theme='dark']` 선택자에 이중 선언되어 있으므로, 테마 전환 시 컴포넌트 수준의 코드 변경은 불필요하다. JavaScript에서 `document.body.dataset.theme`을 토글하는 것만으로 런타임 전환이 가능하다.

---

## Utility Classes

인라인 레벨에서 레이아웃과 시각적 속성을 빠르게 제어하기 위한 단축 클래스를 제공한다.

| Category | Classes | Description |
|---|---|---|
| **Flexbox** | `pdf-flex-row`, `pdf-flex-col`, `pdf-items-center`, `pdf-justify-between` | 축 방향 및 정렬 |
| **Spacing** | `pdf-mt-{token}`, `pdf-mb-{token}`, `pdf-p-{token}`, `pdf-px-{token}` | 마진·패딩 (토큰: `100`–`800`) |
| **Color** | `pdf-text-red`, `pdf-text-muted`, `pdf-bg-secondary` | 의미론적 색상 적용 |
| **Elevation** | `pdf-shadow-bevel`, `pdf-shadow-glow` | 그림자 효과 |

모든 간격 토큰(`100`, `200`, `300`, …)은 8px 기본 단위의 정수 배수 체계를 따른다.

---

<sub>PDF-DS is maintained by <a href="https://github.com/qpi-labels">qpi-labels</a>.</sub>
