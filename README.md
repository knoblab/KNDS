# KNDS (Knoblab Design System)

**Physical-Digital Fusion Web Design Language & Utility Framework**

[![Release](https://img.shields.io/github/v/release/knoblab/KNDS?label=Latest%20Release&style=flat-square)](https://github.com/knoblab/KNDS/releases/latest)
[![CSS](https://img.shields.io/badge/Pure%20CSS-No%20Build%20Tools-blue?style=flat-square)]()
[![Runtime](https://img.shields.io/badge/JS%20Runtime-Not%20Required-lightgrey?style=flat-square)]()

> **KNDS(Knoblab Design System)**는 물리적 오디오 디바이스의 촉각적 베벨 피드백(Tactile Bevels)과 디지털 인터페이스의 구조적 미니멀리즘(Structural Minimalism)을 단일 스타일시트(`knds.css`)로 통합한 **순수 CSS 기반 웹 디자인 언어(Web Design Language Framework)**입니다.  
> 어떠한 JS 런타임이나 복잡한 빌드 체인 없이도, `<link>` 태그 단 하나로 브라우저에 즉시 고 품격 인터페이스를 렌더링합니다.

---

## ⚡ Quick Start (CDN)

가장 빠르게 KNDS 웹 디자인 언어를 적용하는 방법은 HTML `<head>`에 스타일시트를 추가하는 것입니다:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KNDS App</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/knoblab/KNDS@main/knds.css">
</head>
<body class="knds-bg-primary knds-text-primary">
  <main style="max-width: 520px; margin: 80px auto; padding: 0 16px;">
    <!-- KNDS Panel Container -->
    <div class="knds-panel knds-grid-bg">
      <div class="knds-panel-header knds-flex-row knds-justify-between knds-items-center">
        <span class="knds-text-label-14-mono knds-text-red">SYSTEM READY</span>
        <span class="knds-badge">v1.0.0</span>
      </div>
      
      <h1 class="knds-text-heading-32 knds-mb-200">Knoblab Design Language</h1>
      <p class="knds-text-copy-14 knds-text-muted knds-mb-400">
        디터 람스(Dieter Rams)의 10가지 디자인 원칙을 디지털 웹 환경에 맞게 재해석했습니다. 고대비 아크로매틱 컬러와 하드웨어 베벨 섀도우가 정확하게 맞물립니다.
      </p>
      
      <div class="knds-flex-row knds-gap-200">
        <button class="knds-btn-primary">
          <span>Get Started</span>
        </button>
        <button class="knds-secondary-btn">
          <span>Documentation</span>
        </button>
      </div>
    </div>
  </main>
</body>
</html>
```

---

## 📂 Repository Architecture

본 리포지토리는 누구나 웹앱 뼈대로 바로 복제하여 쓰거나, 공식 명세 문서를 개발할 수 있도록 명확히 분리된 구조를 가집니다:

```
KNDS/
 ├── knds.css                 # [CORE] 단일 스타일시트로 구동되는 KNDS 마스터 디자인 언어
 ├── template/                # [GITHUB TEMPLATE] 즉시 사용 가능한 스타터 뼈대
 │    ├── starter-html/       # 빌드 도구 없는 순수 HTML + CDN 스타터 뼈대
 │    └── starter-vite/       # Vite + TypeScript + React 스타터 뼈대
 └── docs/                    # [APPLE HIG-LEVEL DOCS] Apple HIG 체계의 공식 라이브 가이드 & 에디터 SPA
```

---

## 🎨 Core Design Principles

1. **Achromatic High Contrast (아크로매틱 고대비)**  
   배경과 텍스트의 대비도를 극대화(`--color-bg-primary: #FFFFFF` vs `--color-text-primary: #09090B`)하여 시각적 인지 속도를 최대로 높입니다. 다크 모드(`[data-theme='dark']`)로 자동 전환 시에도 균형 잡힌 대비율을 유지합니다.

2. **Functional Red Accent (기능성 레드 포인트)**  
   모든 장식적 컬러를 배제하고, 사용자 액션(`Primary Button`, `Active Navigation`, `Warning Badge`)이 일어나는 필수 지점에만 기능성 레드(`--color-functional-red: #AD1D1D`)를 부여하여 시선 경로를 유도합니다.

3. **Tactile Hardware Bevels (촉각적 하드웨어 베벨)**  
   평면적 Flat UI의 한계를 넘어, 실제 물리 장비의 버튼과 패널이 가진 미세한 홈과 그림자를 CSS Inner/Outer Shadow(`--shadow-hardware-bevel`)로 정교하게 구현했습니다. 버튼 누름(`:active`) 시 베벨이 수축되며 물리적 타건감을 줍니다.

---

## 🚀 Using as a GitHub Template

이 리포지토리를 복제하여 새로운 프로젝트를 시작할 때, 목적에 맞게 뼈대를 선택하세요:

### 1. 단일 HTML CDN 프로젝트 시작 시 (`template/starter-html`)
`template/starter-html/index.html` 파일을 열거나 복사하면 바로 개발 준비가 끝납니다. 별도의 `npm install`이나 빌드 과정이 불필요합니다.

### 2. Vite + React TypeScript 프로젝트 시작 시 (`template/starter-vite`)
```bash
cp -r template/starter-vite my-knds-app
cd my-knds-app
npm install
npm run dev
```

---

## 📖 Interactive Documentation & Live Editor (`docs/`)

KNDS의 모든 명세는 **Apple Human Interface Guidelines (HIG)** 수준의 정밀한 명세(Anatomy), Do/Don't 비주얼 비교 가이드, 그리고 실시간 샌드박스로 제작되어 있습니다.

```bash
# 공식 가이드 및 실시간 페이지 에디터 실행
npm run dev
```
브라우저에서 `http://localhost:3000`에 접속하여 Apple HIG 체계(`Foundations`, `Patterns`, `Components`)로 구성된 KNDS 디자인 언어를 직접 체험하고, 나만의 페이지를 실시간 에디팅 후 HTML/ZIP으로 내보내세요.

---

## 📄 License

MIT License © Knoblab Design Team & QPI Labels.
