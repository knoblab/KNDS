import React from 'react';
import HigSpecSection from './HigSpecSection';
import CodeViewer from './CodeViewer';

// Import our custom interactive sandboxes
import GridSandbox from './GridSandbox';
import AlignmentSandbox from './AlignmentSandbox';
import TypographySandbox from './TypographySandbox';
import LayoutComparisonSandbox from './LayoutComparisonSandbox';
import GoldenRatioSandbox from './GoldenRatioSandbox';
import ColorSandbox from './ColorSandbox';
import ButtonSandbox from './ButtonSandbox';
import SplitSandbox from './SplitSandbox';
import MobileNavSandbox from './MobileNavSandbox';
import CodeExport from './CodeExport';
import QASandbox from './QASandbox';

// New Components
import MaterialSandbox from './MaterialSandbox';
import FormSandbox from './FormSandbox';
import ModalSandbox from './ModalSandbox';
import NavigationSandbox from './NavigationSandbox';
import JitCompilerSandbox from './JitCompilerSandbox';

interface ChapterProps {
  activeChapter: number;
}

export default function ChapterContent({ activeChapter }: ChapterProps) {
  return (
    <div className="knds-animate-fade-in">

      {/* 1. Philosophy */}
      {activeChapter === 1 && (
        <section id="ch-1">
          <div className="knds-mb-400 knds-text-center knds-py-600">
            <span className="knds-text-label-14-mono knds-text-red knds-mb-200 knds-inline-block">
              PHYSICAL-DIGITAL FUSION DESIGN SYSTEM
            </span>
            <h1 className="knds-mb-300 knds-text-heading-72 knds-font-semibold knds-text-primary knds-tracking-tight">
              물리적 촉각을 지닌<br />디지털 설계 언어
            </h1>
            <p className="knds-text-copy-14 knds-text-muted knds-max-w-2xl knds-mx-auto knds-leading-relaxed">
              디터 람스의 철학과 하드웨어적 정밀함을 웹 환경에 실용적으로 구현한 통합 디자인 시스템입니다. 복잡한 장식 없이, 선언적인 구조와 8px 여백 스케일을 통해 기능 중심의 명확한 UI를 설계할 수 있습니다.
            </p>
            <div className="knds-mt-400 knds-flex-row knds-justify-center knds-gap-200">
              <a href="https://github.com/knoblab/KNDS" target="_blank" rel="noopener noreferrer" className="knds-no-underline">
                <button className="knds-btn-primary knds-btn-md knds-flex-row knds-items-center knds-gap-100">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </button>
              </a>
              <a href="/editor/" className="knds-no-underline">
                <button className="knds-secondary-btn knds-btn-md knds-flex-row knds-items-center knds-gap-100">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                  Open Editor
                </button>
              </a>
            </div>
          </div>

          <div className="knds-mb-400">
            <div className="knds-panel knds-grid-bg knds-flex-row knds-items-center knds-justify-center knds-gap-300 knds-flex-wrap knds-p-400">
              <div className="knds-content-relative knds-flex-shrink-0 knds-w-[240px] knds-h-[240px]">
                <img src="/Px7S3.webp" alt="Design Motif" className="knds-w-full knds-h-full knds-radius-lg knds-shadow-bevel knds-object-cover" />
              </div>
              <div className="knds-content-relative">
                <p className="knds-text-label-14-mono knds-text-muted knds-leading-relaxed">
                  <strong className="knds-text-red">DESIGN MOTIF</strong><br />
                  서로 다른 물리적 재료들이<br />
                  연속성 있게 조화를 이루는<br />
                  하드웨어의 미학
                </p>
              </div>
            </div>
          </div>

          <div className="knds-mb-300">
            <p className="knds-text-copy-14 knds-text-muted">
              현대 소프트웨어 공학에서 사용자 인터페이스는 단순히 화면에 요소를 렌더링하는 것을 넘어, 하드웨어가 가진 물리적 인지성과 촉각적 정직성을 디지털 공간으로 확장하는 다리 역할을 수행해야 한다.
            </p>
          </div>
          <div className="knds-mb-300">
            <p className="knds-text-copy-14">
              본 디자인 시스템(Knoblab Design System, 이하 KNDS)은 20세기 산업 디자인의 거장 디터 람스의 설계 철학과 현대 디지털 제품 설계 방법론을 유기적으로 결합하여 탄생하였다. 디터 람스의 10대 디자인 원칙은 제품의 유용성, 심미성, 이해 가능성, 신뢰성, 지속 가능성, 그리고 불필요한 장식을 배제한 '최소한의 디자인'을 극대화하는 것에 초점을 맞춘다.
            </p>
            <br />
            <p className="knds-text-copy-14">
              물리적 감각을 디지털 인터페이스로 전이하는 과정에서는 Bowers & Wilkins에서 엿볼 수 있는, 물리적 재료 각각의 특성을 유지하면서 조화롭게 만들어낸 고급스러움과 틴에이지 엔지니어링의 정밀한 촉각적 상호작용 방식이 핵심적인 이정표를 제공한다.
            </p>
            <br />
            <p className="knds-text-copy-14">
              KNDS는 이러한 물리적 엔지니어링 사상을 디지털 디자인 언어로 계승한다. 스크린 내부의 요소들을 단순한 이미지나 가상의 레이어로 취급하지 않고, 명확한 두께를 가진 경계선과 규칙적인 격자 체계 위에 정렬된 독립적인 조작기(Manipulator)로 정의한다.
            </p>
          </div>

          <HigSpecSection
            overview={{
              summary: 'KNDS(Knoblab Design System)는 디터 람스의 기능주의 철학과 하드웨어적 정밀함을 웹 인터페이스에 일관성 있게 구현한 물리-디지털 융합(Physical-Digital Fusion) 디자인 시스템입니다.',
              purpose: '가상의 그래픽 레이어가 아닌 물리적 두께와 질감을 지닌 독립적인 조작기(Manipulator)를 제공하여, 사용자에게 높은 어포던스(Affordance)와 직관적인 촉각 피드백을 전달합니다.'
            }}
            anatomy={[
              { id: 'ph-1', name: 'Physical Hardware Bevels (.knds-panel)', tokenOrClass: '--shadow-hardware-bevel', description: '물리적 음각과 양각을 모사하여 빛을 반사하는 다층 박스 섀도우 표면' },
              { id: 'ph-2', name: 'Structural Minimalism Grid (.knds-grid-bg)', tokenOrClass: '--blueprint-grid-pattern', description: '장식을 배제하고 기능적 좌표와 위치를 증명하는 기하학적 청사진 도면' }
            ]}
            doDont={[
              {
                type: 'do',
                title: '설계의 정직성과 기능적 위계(Hierarchy) 집중',
                description: '모든 요소는 사용자의 조작(Click, Input, Scroll)과 직결되거나 명확한 정보 위계를 가질 때만 렌더링하세요. 단순한 비주얼 장식을 배제하고 컴포넌트 본연의 목적에 충실해야 합니다.',
                preview: <div className="knds-panel knds-grid-bg knds-p-200 knds-w-full knds-text-center knds-font-bold">기능적 기판 패널 (.knds-panel)</div>,
                codeSnippet: '<div class="knds-panel knds-grid-bg knds-p-300">기능적 기판 패널</div>'
              },
              {
                type: 'dont',
                title: '무의미한 3D 회전 및 장식성 입체 글로우 사용 금지',
                description: '사용자에게 조작 오인을 유발하는 유채색 네온사인 글로우나 과도한 입체 효과를 남발하지 마세요. KNDS의 고대비 물리적 정직성이 훼손됩니다.',
                preview: <div style={{ boxShadow: '0 0 25px var(--color-functional-red)', transform: 'rotate(-2deg)', padding: '16px', background: '#18181b', color: 'var(--color-functional-red)', textAlign: 'center', borderRadius: '16px', fontWeight: 'bold' }}>❌ 장식성 유채색 글로우 3D</div>,
                codeSnippet: '<!-- ❌ Avoid -->\n<div style="box-shadow: 0 0 50px var(--color-functional-red); transform: rotate3d(1, 1, 1, 45deg);">...</div>'
              }
            ]}
            interactions={[
              { state: 'Rest (기본 상태)', visualChange: '1px 화이트 상단 하이라이트와 2px 하단 음영 (.knds-panel)', functionalRole: '물리적 기판 위에 부유하는 하드웨어 표면임을 직관적으로 안내' },
              { state: 'Manipulate (조작 상태)', visualChange: '코너 곡률 수축 및 섀도우 압착 (Scale Down & Radius Morph)', functionalRole: '스위치 가압 시 발생하는 즉각적 촉각 에너지 피드백 전달' }
            ]}
            accessibility={[
              { category: 'Achromatic Contrast (고대비 명도)', description: '아크로매틱 고대비(#FFFFFF ~ #09090B)를 유지하여 시각 장애 및 저시력 사용자에게도 명확한 정보 분할과 가독성을 보장합니다.' },
              { category: 'Retina / 4K Rendering (서브픽셀 렌더링)', description: '모든 1px 경계선과 베벨 그림자는 고해상도 화면에서 서브픽셀 렌더링을 통해 깨짐 없이 선명하게 출력됩니다.' }
            ]}
            tokens={[
              { name: '--shadow-hardware-bevel', defaultValue: 'inset 0 1px 0 rgba(255,255,255,1)...', description: '하드웨어 베벨 효과의 상단 빛 반사 및 하단 그림자 공식' },
              { name: '--blueprint-grid-pattern', defaultValue: 'linear-gradient(rgba(...) 1px, transparent 1px)', description: '수학적으로 24px마다 교차하는 설계 도면 격자 패턴' }
            ]}
            responsiveRules={[
              '철학 불변성: 디바이스 크기에 관계없이 아크로매틱 고대비와 촉각 베벨 피드백은 동일하게 작동합니다.',
              '고해상도 적응: Retina 및 4K 화면에서 1px 경계선과 하드웨어 베벨 섀도우는 서브픽셀 렌더링을 통해 극한의 선명도를 유지합니다.'
            ]}
          />
        </section>
      )}

      {/* 2. System Architecture */}
      {activeChapter === 2 && (
        <section id="ch-2">
          <div className="knds-mb-300">
            <p className="knds-text-copy-14 knds-text-muted">
              KNDS 아키텍처는 프로젝트의 규모와 복잡도에 맞춰 선택할 수 있는 <strong>듀얼 모드 전달 체계(Dual-Mode Delivery Architecture)</strong>로 설계되었습니다. 빌드 체인이 없는 환경을 위한 <strong>Mode A(정적 단일 스타일시트)</strong>와 초정밀 온디맨드 빌드를 위한 <strong>Mode B(JIT 컴파일러 엔진)</strong>을 완벽하게 동시 지원합니다.
            </p>
          </div>

          {/* Interactive JIT Compiler Simulator */}
          <div className="knds-mb-400">
            <JitCompilerSandbox />
          </div>

          <div className="knds-panel knds-grid-bg knds-mb-300">
            <h3 className="knds-text-label-16 knds-mb-150">3-Layer Specificity 계층 정렬 원칙</h3>
            <p className="knds-text-copy-14 knds-text-muted knds-mb-200">
              KNDS JIT 컴파일러는 CSS 특이도(Specificity) 충돌을 방지하기 위해 생성된 규칙을 엄격한 3-Layer로 분류하여 출력합니다.
            </p>
            <div className="knds-flex-col knds-gap-150">
              <div className="knds-bg-primary knds-border knds-p-200">
                <span className="knds-text-label-14-mono knds-text-red">LAYER 1. @layer base (:root & Reset)</span>
                <p className="knds-text-copy-14 knds-mt-050 knds-text-muted">CSS Custom Properties 기반의 아크로매틱 고대비 팔레트, 하드웨어 베벨 섀도우 변수, 청사진 패턴 원시 정의</p>
              </div>
              <div className="knds-bg-primary knds-border knds-p-200">
                <span className="knds-text-label-14-mono knds-text-red">LAYER 2. @layer components (.knds-panel, .knds-btn-primary...)</span>
                <p className="knds-text-copy-14 knds-mt-050 knds-text-muted">디자인 토큰을 결합한 BEM 유사 구조의 UI 컴포넌트 규칙. 하위/복합 선택자(:hover, span 등)를 자동 결합</p>
              </div>
              <div className="knds-bg-primary knds-border knds-p-200">
                <span className="knds-text-label-14-mono knds-text-red">LAYER 3. @layer utilities (.knds-w-[...], .hover:knds-*, .sm:knds-*)</span>
                <p className="knds-text-copy-14 knds-mt-050 knds-text-muted">임의 값([...]), 반응형 및 상태 수식어가 결합된 온디맨드 아토믹 유틸리티. 컴포넌트 스타일을 안전하게 오버라이드</p>
              </div>
            </div>
          </div>

          <HigSpecSection
            overview={{
              summary: 'KNDS JIT 컴파일러는 소스 코드를 스캔하여 실제 사용된 클래스만 즉시 생성하는 온디맨드(On-Demand) CSS 엔진이자 3-Layer 특이도(Specificity) 정렬 체계입니다.',
              purpose: '스타일시트 용량을 경량화하여 페이지 로드 성능을 높이고, CSS 특이도 충돌 없이 예측 가능한 UI 컴포넌트 제어 환경을 보장합니다.'
            }}
            anatomy={[
              { id: 'ar-1', name: 'Lexical Scanner Engine (compiler/scanner.js)', tokenOrClass: 'Regex Tokenizer (고속 추출 Engine)', description: 'AST 파싱의 무거운 부하를 제거하고 정규식(/[^<>"\'`\\s,;{}()]+/g)을 통해 소스 텍스트 스트림에서 유효한 유틸리티 후보만 초고속으로 추출합니다.' },
              { id: 'ar-2', name: 'Arbitrary Value Extractor (knds-prop-[value])', tokenOrClass: 'knds-w-[342px] → width: 342px;', description: '사전에 정의되지 않은 너비, 높이, 색상, 간격, 그리드 컬럼 등을 동적 파싱하여 즉시 CSS 규칙과 이스케이프 클래스로 생성합니다.' },
              { id: 'ar-3', name: 'Variant Modifier Chain (variants:coreClass)', tokenOrClass: 'hover:dark:sm:knds-...', description: '상태 수식어(hover, focus, active)와 반응형 브레이크포인트(sm, md, lg) 및 다크 모드(dark)를 정확한 Media Query와 Selector로 중첩 래핑합니다.' }
            ]}
            doDont={[
              { type: 'do', title: '프로덕션 빌드 시 JIT 컴파일러 또는 Minify 옵션 활성화', description: '실제 마크업에서 사용된 클래스만 정렬하여 출력하는 JIT CLI(`knds -o output.min.css --minify`)를 사용하여 번들 용량을 최적화하세요.', codeSnippet: 'npx knds -o dist/output.min.css --minify' },
              { type: 'dont', title: 'knds.config.js의 content 경로 누락 방지', description: 'JIT 컴파일러가 유틸리티 클래스를 정확히 감지할 수 있도록 HTML, JSX, TSX, Vue 파일의 경로가 `content` 배열에서 누락되지 않도록 주의하세요.', codeSnippet: '<!-- ❌ Avoid missing glob patterns -->\ncontent: ["./src/**/*.tsx"] // HTML 파일이 누락되면 index.html의 클래스가 스캔되지 않음' }
            ]}
            interactions={[
              { state: 'Incremental Watch (증분 감지)', visualChange: '소스 파일 변경 감지 후 지연 없는 증분 컴파일 및 갱신', functionalRole: '개발 모드(HMR)에서 브라우저 새로고침 없이 즉각적인 스타일 핫 리로딩 제공' },
              { state: 'Zero-Overhead Build (프로덕션 압축)', visualChange: '미사용 유틸리티 제거 후 경량화된 단일 스타일시트로 압축', functionalRole: '최종 사용자에게 불필요한 스타일 오버헤드 없는 최적 렌더링 속도 보장' }
            ]}
            accessibility={[
              { category: 'Performance Accessibility (저사양 기기 배려)', description: '경량화된 단일 CSS는 저사양 모바일 기기 및 열악한 네트워크 환경에서도 스타일 렌더링 병목 현상을 방지합니다.' },
              { category: 'Layer Specificity (계층 안전성)', description: 'base, components, utilities 3레이어 격리를 통해 고대비 및 스크린 리더용 오버라이드 유틸리티가 충돌 없이 안전하게 우선 적용됩니다.' }
            ]}
            tokens={[
              { name: 'knds.config.js # prefix', defaultValue: "'knds-'", description: '클래스 네임스페이스 충돌 방지 접두사 설정' },
              { name: 'knds.config.js # theme.extend', defaultValue: 'Deep Merge Registry', description: '기본 Knoblab 아크로매틱 토큰을 확장하거나 커스텀 컬러/여백 추가' }
            ]}
            responsiveRules={[
              'HMR 의존성 감지: PostCSS 8 플러그인(`postcss-knds`)은 content 경로 내 모든 파일을 PostCSS dependency로 등록하여, 소스 파일 수정 시 지연 없이 즉각적인 증분 빌드 및 실시간 브라우저 갱신을 실행합니다.'
            ]}
          />
        </section>
      )}

      {/* 3. Installation */}
      {activeChapter === 3 && (
        <section id="ch-3">
          <div className="knds-mb-300">
            <p className="knds-text-copy-14 knds-text-muted">
              KNDS는 프로토타이핑을 위한 즉각적인 CDN 연결 방식과, Vite/Next.js/Node 파이프라인에 최적화된 온디맨드 JIT 컴파일러 NPM 패키지 방식을 모두 제공합니다.
            </p>
          </div>

          <h2 className="knds-text-label-16 knds-mb-200">Mode A: CDN 정적 마스터 스타일시트 (Zero-Build)</h2>
          <div className="knds-mb-300">
            <p className="knds-text-copy-14 knds-mb-100">
              HTML <code>&lt;head&gt;</code> 태그에 마스터 스타일시트를 연결하면 별도의 Node.js 설치나 빌드 과정 없이 즉시 100여 개 컴포넌트와 유틸리티를 사용할 수 있습니다.
            </p>
            <div className="knds-code-block knds-selectable" style={{ whiteSpace: 'pre-wrap' }}>
              {`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/knoblab/KNDS@main/knds.css">`}
            </div>
          </div>

          <h2 className="knds-text-label-16 knds-mb-200">Mode B: NPM 패키지 및 온디맨드 JIT CLI 구축</h2>
          <div className="knds-mb-300">
            <p className="knds-text-copy-14 knds-mb-100">
              프로덕션 웹앱에서 임의 값(`[...]`), 반응형 수식어(`hover:`, `sm:`), 그리고 번들 용량 경량화를 누리려면 NPM 패키지와 CLI 바이너리를 사용하십시오.
            </p>
            <div className="knds-code-block knds-selectable" style={{ whiteSpace: 'pre-wrap' }}>
              {`# 1. 패키지 설치
npm install @knoblab/knds

# 2. knds.config.js 생성 및 소스 파일 경로 지정
# -> content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']

# 3. 독립 실행형 CLI 온디맨드 빌드 및 Minify 압축
npx knds -o dist/knds.output.css --minify

# 4. 소스 코드 감지 및 증분 빌드 (Watch Mode)
npx knds -o dist/knds.output.css --watch`}
            </div>
          </div>

          <h2 className="knds-text-label-16 knds-mb-200">Mode B: PostCSS 8 API 플러그인 연동 (Vite / Next.js)</h2>
          <div className="knds-mb-300">
            <p className="knds-text-copy-14 knds-mb-100">
              Vite, Next.js, Webpack 등의 기존 빌드 도구와 완벽하게 동기화하려면 PostCSS 8 플러그인을 설정하십시오.
            </p>
            <div className="knds-code-block knds-selectable" style={{ whiteSpace: 'pre-wrap' }}>
              {`// postcss.config.js
import postcssKnds from '@knoblab/knds/postcss';

export default {
  plugins: [
    postcssKnds({ config: './knds.config.js' })
  ]
};

/* src/index.css 내 지시어 선언 */
@knds base;
@knds components;
@knds utilities;`}
            </div>
          </div>

          <h2 className="knds-text-label-16 knds-mb-200">선택적 출처 표시 (Optional Attribution)</h2>
          <div className="knds-mb-300">
            <p className="knds-text-copy-14 knds-mb-200">
              KNDS를 사용하여 제작된 사이트임을 명시하고 싶다면, 아래의 출처 표시 코드를 사이드바 하단이나 푸터에 자유롭게 추가할 수 있습니다.
            </p>
            
            <div className="knds-mt-100 knds-mb-300">
              <p className="knds-text-label-14-mono knds-text-muted knds-mb-100">디자인 미리보기 (실제 사이드바 적용 예시)</p>
              <div className="knds-w-full knds-max-w-xs knds-border knds-bg-primary knds-relative knds-overflow-hidden">
                <aside className="knds-sidebar knds-w-full knds-h-full knds-border-none">
                  <div className="knds-content-relative knds-p-300">
                    <nav>
                      <span className="knds-text-label-14-mono knds-text-muted knds-border-bottom knds-pb-100 knds-mb-100 knds-font-bold knds-block">
                        GUIDELINES INDEX
                      </span>
                      <div className="knds-mb-200">
                        <div className="knds-nav-group-header">
                          <span>Intro & Architecture</span>
                          <svg className="knds-chevron" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg>
                        </div>
                        <div className="knds-nav-item">
                          <div className="knds-flex-row knds-items-center knds-gap-150 knds-overflow-hidden knds-w-full">
                            <span className="knds-text-label-14-mono knds-text-center knds-font-bold knds-bg-secondary knds-text-secondary knds-p-050 knds-radius-sm knds-min-w-[32px]">01</span>
                            <span className="knds-text-label-16">Philosophy</span>
                          </div>
                        </div>
                        <div className="knds-nav-item active">
                          <div className="knds-flex-row knds-items-center knds-gap-150 knds-overflow-hidden knds-w-full">
                            <span className="knds-text-label-14-mono knds-text-center knds-font-bold knds-bg-red knds-text-white knds-p-050 knds-radius-sm knds-min-w-[32px]">02</span>
                            <span className="knds-text-label-16">System Architecture</span>
                          </div>
                        </div>
                      </div>
                    </nav>
                    
                    {/* 출처 표시 미리보기 */}
                    <div className="knds-mt-400 knds-pt-200 knds-border-top">
                      <div className="knds-text-label-14-mono knds-text-muted knds-mb-050">
                        <a href="https://github.com/knoblab/KNDS" target="_blank" rel="noreferrer"
                          className="knds-text-secondary knds-no-underline knds-transition-colors hover:knds-text-primary">
                          View on GitHub ↗
                        </a>
                      </div>
                      <div className="knds-text-label-14-mono knds-text-muted">
                        Made with KNDS
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>

            <p className="knds-text-label-14-mono knds-text-muted knds-mb-100">적용 코드</p>
            <div className="knds-code-block knds-selectable knds-whitespace-pre-wrap">
              {`<div class="knds-mt-400 knds-pt-200 knds-border-top">
  <div class="knds-text-label-14-mono knds-text-muted knds-mb-050">
    <a href="https://github.com/knoblab/KNDS" target="_blank" class="knds-text-secondary knds-no-underline knds-transition-colors hover:knds-text-primary">View on GitHub ↗</a>
  </div>
  <div class="knds-text-label-14-mono knds-text-muted">
    Made with KNDS
  </div>
</div>`}
            </div>
          </div>

          <HigSpecSection
            overview={{
              summary: 'CDN 정적 링크(Mode A)와 온디맨드 NPM 파이프라인(Mode B)을 지원하여 프론트엔드 환경 제약 없이 즉시 통합되는 셋업 규격입니다.',
              purpose: '초기 프로토타이핑부터 엔터프라이즈 프로덕션 환경까지, 복잡한 보일러플레이트 없이 KNDS의 물리-디지털 융합 UI를 즉시 가동합니다.'
            }}
            anatomy={[
              { id: 'in-1', name: 'Mode A: CDN Static Linkage', tokenOrClass: 'https://cdn.jsdelivr.net/.../knds.css', description: '단 한 줄의 `<link>` 태그 선언만으로 빌드 체인 없이 즉각 구동되는 초경량 셋업' },
              { id: 'in-2', name: 'Mode B: NPM Package & JIT CLI', tokenOrClass: '@knoblab/knds & PostCSS Plugin', description: 'AST 스캐닝과 온디맨드 유틸리티 트리를 생성하는 프로덕션 전용 바이너리' },
              { id: 'in-3', name: 'Optional Attribution Badge', tokenOrClass: 'Made with KNDS Badge', description: '사이드바 또는 푸터 하단에 부착하여 디자인 시스템 출처와 정직성을 표시하는 컴포넌트' }
            ]}
            doDont={[
              { type: 'do', title: '프로덕션 웹앱에서는 Mode B(JIT CLI) 파이프라인 구축 권장', description: '임의 픽셀 값(`[...]`)과 반응형 분기(`hover:`, `sm:`) 및 최고 수준의 번들 최적화를 위해 NPM 패키지와 CLI 바이너리를 사용하세요.', codeSnippet: 'npx knds -o dist/output.min.css --minify' },
              { type: 'dont', title: '타 CSS 프레임워크 리셋과의 임의 중첩 및 파편화 금지', description: 'Tailwind 등 타 CSS 프레임워크의 글로벌 리셋과 중복 로드하거나 knds.css 내부를 직접 수정하지 마세요. 스타일 우선순위 및 박스 모델 충돌이 발생합니다.', codeSnippet: '<!-- ❌ Avoid modifying core knds.css or mixing reset stylesheets -->' }
            ]}
            interactions={[
              { state: 'Mode A (Zero-Build CDN)', visualChange: 'HTML `<head>` 선언 즉시 100여 개 핵심 UI 토큰 및 스타일 활성화', functionalRole: '별도의 Node.js 설치나 빌드 지연 없는 즉각적 시각화 및 디자인 검증' },
              { state: 'Mode B (PostCSS Integration)', visualChange: 'Vite / Next.js 소스 코드 저장 시 지연 없이 즉시 트리 쉐이핑 및 핫 리로딩', functionalRole: '임의 속성 및 동적 뷰포트 변화에 실시간 대응하는 초정밀 빌드 결과물 반환' }
            ]}
            accessibility={[
              { category: 'Network Fallback (장애 복구 보장)', description: '외부 CDN 유실 또는 열악한 네트워크 환경에 대비하여 프로덕션 배포 시에는 Mode B 로컬 번들링을 권장합니다.' },
              { category: 'Zero-JS Dependency (순수 CSS 구동)', description: '자바스크립트 엔진 차단 환경 또는 화면 읽기 프로그램에서도 스타일과 계층 구조가 정상적으로 렌더링됩니다.' }
            ]}
            tokens={[
              { name: 'Package Version', defaultValue: 'v1.0.0 (Stable)', description: 'KNDS 공식 배포 NPM 패키지 및 CDN 버전 관리표' }
            ]}
            responsiveRules={[
              '제로 번들 부하: CDN 사용 시 Gzip 압축 기준 8KB 미만의 극소 용량으로 LCP 및 초기 렌더링 속도를 최적화합니다.'
            ]}
          />
        </section>
      )}

      {/* 4. Blueprint Grid & Spacing */}
      {activeChapter === 4 && (
        <section id="ch-4">
          <div className="knds-mb-300">
            <p className="knds-text-copy-14 knds-text-muted">
              디지털 레이아웃의 구조적 정밀도를 담보하기 위해 KNDS는 물리적 설계 도면에서 착안한 청사진 그리드와 수학적으로 정렬된 다중 스케일 여백 시스템을 채택한다.
            </p>
          </div>
          <div className="knds-bg-secondary knds-border knds-p-300 knds-flex-col knds-gap-200 knds-mb-300 knds-grid-bg">
            <div className="knds-flex-row knds-gap-100">
              <div className="knds-bg-red" style={{ width: 'var(--space-100)', height: 'var(--space-400)' }}></div>
              <span className="knds-text-label-14-mono knds-text-red">--space-100 (8px)</span>
            </div>
            <div className="knds-flex-row knds-gap-200">
              <div className="knds-bg-red" style={{ width: 'var(--space-200)', height: 'var(--space-400)' }}></div>
              <span className="knds-text-label-14-mono knds-text-red">--space-200 (16px)</span>
            </div>
            <div className="knds-flex-row knds-gap-300">
              <div className="knds-bg-red" style={{ width: 'var(--space-300)', height: 'var(--space-400)' }}></div>
              <span className="knds-text-label-14-mono knds-text-red">--space-300 (24px)</span>
            </div>
          </div>
          <div className="knds-mb-300">
            <GridSandbox />
          </div>

          <HigSpecSection
            overview={{
              summary: '물리적 설계 도면에서 착안한 24px 청사진 그리드(`.knds-grid-bg`)와 8px 기하학적 배수 여백 스케일(`--space-100` ~ `800`) 시스템입니다.',
              purpose: '시각적 리듬(Visual Rhythm)과 레이아웃의 수학적 질서를 확립하여, 화면 구성 요소 간의 간격을 예측 가능하고 일관성 있게 통제합니다.'
            }}
            anatomy={[
              { id: 'sp-1', name: 'Blueprint Grid Canvas (.knds-grid-bg)', tokenOrClass: '--blueprint-grid-pattern', description: '24px x 24px 간격으로 정밀 교차하는 하이 테크닉 청사진 그리드 배경 도화지' },
              { id: 'sp-2', name: 'Spacing Utilities (.knds-p-*, .knds-m-*)', tokenOrClass: '--space-100 to --space-800', description: '8px 배수 체계에 기반한 기하학적 패딩 및 마진 제어 클래스' }
            ]}
            doDont={[
              { type: 'do', title: '8px 기하학적 여백 스케일(Spacing Scale) 준수', description: '여백은 항상 --space-100(8px), --space-200(16px), --space-300(24px) 등의 표준 배수 스케일을 준수하여 요소를 배치하세요.', codeSnippet: '<div class="knds-p-300 knds-gap-200">...</div>' },
              { type: 'dont', title: '7px, 13px 등 비정형 임의 픽셀 하드코딩 금지', description: '표준 격자에 어긋나는 비정형 홀수 픽셀을 인라인 스타일이나 임의 CSS로 부여하지 마세요. 화면 전체의 시각적 리듬이 파괴됩니다.', codeSnippet: '<!-- ❌ Avoid -->\n<div style="padding: 13px; margin-top: 27px;">...</div>' }
            ]}
            interactions={[
              { state: 'Desktop Spacing (>= 1200px)', visualChange: '--space-400(32px) ~ --space-600(48px)의 대형 간격 확장', functionalRole: '넓은 뷰포트에서 정보 그룹 간의 독립성과 구조적 숨통(White Space) 확보' },
              { state: 'Mobile Compression (< 1199px)', visualChange: '대형 간격을 --space-200(16px) 또는 --space-300(24px)으로 자동 수축', functionalRole: '제한된 모바일 스크린 내에서 콘텐츠 밀도를 최적화하고 터치 도달 범위 유지' }
            ]}
            accessibility={[
              { category: 'Dynamic Type (폰트 확대 유연성)', description: '브라우저 폰트 확대(200% 등) 시에도 8px 여백 그리드가 텍스트 블록과 충돌하거나 잘리지 않도록 유연한 박스 모델을 제공합니다.' },
              { category: 'Grid Contrast (그리드 명도 제어)', description: '청사진 그리드 배경 패턴(`.knds-grid-bg`)은 배경과의 명도 대비를 10%~15% 이하로 유지하여 본문 텍스트의 판독성을 방해하지 않습니다.' }
            ]}
            tokens={[
              { name: '--space-100', defaultValue: '8px', description: '컴포넌트 내부 아이콘과 텍스트 또는 뱃지 간의 최소 간격' },
              { name: '--space-200', defaultValue: '16px', description: '표준 패딩, 버튼 내부 좌우 여백 및 카드 기본 간격' },
              { name: '--space-300', defaultValue: '24px', description: '섹션과 패널 간 기본 간격 및 청사진 그리드 단위 셀 크기' },
              { name: '--space-400', defaultValue: '32px', description: '주요 뷰 컨테이너 여백 및 그룹 간 분리 여백' }
            ]}
            responsiveRules={[
              '데스크톱 (>= 1200px): --space-600(48px) 이상의 여백을 적극 활용하여 구조적 숨통을 틔웁니다.',
              '모바일 (< 1199px): 뷰포트 너비 제약으로 인해 --space-400 이상의 여백은 --space-300 또는 --space-200으로 자동 압축됩니다.'
            ]}
          />
        </section>
      )}

      {/* 5. Typography */}
      {activeChapter === 5 && (
        <section id="ch-5">
          <div className="knds-mb-300">
            <p className="knds-text-copy-14 knds-text-muted">
              타이포그래피는 KNDS에서 가장 주도적인 구조체이다. 감정적인 서체를 철저히 지양하는 대신, 정교하게 조정된 네오 그로테스크 산세리프 서체인 Pretendard를 바탕으로 타이틀, 본문, 코드(고정폭)를 선언한다.
            </p>
          </div>
          <div className="knds-mb-300">
            <TypographySandbox />
          </div>

          <CodeViewer
            title="타이포그래피 및 네오 그로테스크 폰트 스케일 명세"
            subtitle="Pretendard Variable & JetBrains Mono Token Scale"
            codeBlocks={[
              {
                label: 'HTML / 유틸리티',
                tag: 'HTML',
                code: `<!-- 1. 헤딩 타이틀 (Heading Typography) -->
<!-- 화면 내 가장 큰 강조 및 섹션 구분에 사용합니다. -->
<h1 class="knds-text-heading-72">거대한 메인 타이틀 (72px)</h1>
<h1 class="knds-text-heading-32">최상위 타이틀 (32px)</h1>
<h2 class="knds-text-heading-24">중간 타이틀 (24px)</h2>

<!-- 2. 라벨 (UI Labels & Emphasized Text) -->
<!-- 버튼, 네비게이션, 짧은 강조 텍스트 및 메타데이터에 사용합니다. -->
<span class="knds-text-label-16">중요 라벨 텍스트 (16px, Bold)</span>
<span class="knds-text-label-14-mono">고정폭 메타데이터 라벨 (14px)</span>

<!-- 3. 본문 텍스트 (Copy / Body Text) -->
<!-- 긴 단락이나 일반 설명 문구에 사용합니다. -->
<p class="knds-text-copy-14">기본 본문 텍스트입니다. (14px)</p>
<p class="knds-text-copy-13-mono knds-text-muted">부가적인 설명이나 작은 캡션 (13px, Muted)</p>

<!-- 4. 다국어/숫자 복합 사용 예시 -->
<!-- JetBrains Mono와 Pretendard가 자동 폴백으로 섞여 렌더링됩니다. -->
<span class="knds-text-label-14-mono">API_KEY_12345 (생성일: 2026-05-26)</span>`
              },
              {
                label: 'React / TSX',
                tag: 'TSX',
                code: "export default function StatusPanel({ isError }: { isError: boolean }) {\n  return (\n    <div className={`knds-panel knds-p-300 knds-border ${isError ? 'knds-border-red' : ''}`}>\n      <div className=\"knds-flex-row knds-items-center knds-justify-between\">\n        <span className=\"knds-text-label-16 knds-font-bold\">시스템 코어 온도</span>\n        <span className={`knds-px-100 knds-py-050 knds-radius-sm knds-text-label-14-mono ${\n          isError ? 'knds-bg-red knds-text-white' : 'knds-bg-secondary knds-text-primary'\n        }`}>\n          {isError ? 'OVERHEAT #AD1D1D' : 'STABLE 42°C'}\n        </span>\n      </div>\n    </div>\n  );\n}"
              },
              {
                label: 'CSS Token & Font Face',
                tag: 'CSS',
                code: `@font-face {
  font-family: 'Pretendard Variable';
  src: url('/fonts/PretendardVariable.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-display: swap;
}
:root {
  --font-primary: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
}
.knds-text-heading-32 {
  font-family: var(--font-primary);
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
}`
              }
            ]}
            note="Pretendard는 다국어 타이포그래피의 가독성을 극대화하며 JetBrains Mono와 완벽한 시각적 균형을 이룹니다."
          />

          <div className="knds-mb-300 knds-mt-300">
            <h3 className="knds-text-label-16 knds-mb-100">Primary Typeface: Pretendard</h3>
            <p className="knds-text-copy-14 knds-text-muted knds-mb-100">
              시스템 전반의 기본 텍스트는 <strong>Pretendard</strong>를 사용합니다. Pretendard는 본문 렌더링 시 뛰어난 가독성을 제공할 뿐만 아니라, <strong>한국어, 영어, 일본어 등 다국어 환경을 네이티브 수준으로 완벽하게 지원</strong>하여 별도의 언어별 폰트 폴백(Fallback) 지정 없이도 훌륭한 시각적 일관성을 유지합니다.
            </p>
          </div>
          <div className="knds-mb-300">
            <h3 className="knds-text-label-16 knds-mb-100">Mono Typeface: JetBrains Mono</h3>
            <p className="knds-text-copy-14 knds-text-muted">
              코드, 숫자, 메타데이터 등 기하학적 정렬이 필요한 특수 영역에는 고정폭(Monospace) 폰트인 <strong>JetBrains Mono</strong>를 제한적으로 적용합니다. 고정폭 폰트 적용 시 영문과 숫자 기호에만 JetBrains Mono가 적용되며, 그 외의 <strong>한국어 등 기타 언어 문자는 자동으로 Pretendard 폰트로 부드럽게 폴백(Fallback)</strong>되어 다국어 혼용 환경에서도 깨짐 없는 출력 품질을 보장합니다.
            </p>
          </div>
          <div className="knds-mb-300">
            <h3 className="knds-text-label-16 knds-mb-100">광학적 정렬 및 레이아웃 렌더링 규칙</h3>
            <ul className="knds-list-disc knds-text-copy-14">
              <li><strong>광학적 미세 보정 (Optical Alignment):</strong> 텍스트와 이형의 아이콘이 수평으로 결합할 때 기하학적 중앙 정렬 연산 결과가 어색해 보일 수 있다. 이 경우 ±1px 한도 내에서 수동으로 조정해야 한다.</li>
              <li><strong>구두점 및 표기식의 미학:</strong> 인용구는 둥근 따옴표(“ ”)를 사용하고, 줄바꿈으로 인해 숫자와 단위가 찢어지지 않도록 비줄바꿈 공백(Non-breaking Space) 처리를 선행해야 한다 (예: 10 MB).</li>
            </ul>
          </div>
          <div className="knds-mb-300">
            <AlignmentSandbox />
          </div>

          <HigSpecSection
            overview={{
              summary: '네오 그로테스크 산세리프 서체(Pretendard)와 고정폭 서체(JetBrains Mono)로 이원화된 정밀 타이포그래피 시스템입니다.',
              purpose: '감정적인 장식 서체를 배제하고 명확한 정보 위계(Hierarchy)와 최고 수준의 판독성(Legibility)을 달성하여 사용자의 정보 인지 속도를 극대화합니다.'
            }}
            anatomy={[
              { id: 'ty-1', name: 'Heading Hierarchy (.knds-text-heading-*)', tokenOrClass: '--font-sans (Pretendard)', description: '72px, 32px, 24px의 엄격한 무게감(700~800 weight)과 타이트한 자간(-0.02em)으로 화면 내 최고 위계 설정' },
              { id: 'ty-2', name: 'Monospace Data Labels (.knds-text-label-*-mono)', tokenOrClass: '--font-mono (JetBrains Mono)', description: '숫자, 상태값, 시스템 로그를 위한 고정폭 기하학적 폰트 및 다국어 Pretendard 자동 폴백 시스템' }
            ]}
            doDont={[
              { type: 'do', title: '계층화된 타이포그래피 스케일 및 위계 엄수', description: '화면의 제목과 라벨은 사전에 정의된 72px, 32px, 24px, 16px, 14px 스케일 내에서 선택하여 정보의 중요도에 맞는 위계를 설정하세요.', codeSnippet: '<h1 class="knds-text-heading-32">Title</h1>\n<p class="knds-text-copy-14">Body text</p>' },
              { type: 'dont', title: '2줄 이상의 산문 본문에 고정폭(Mono) 폰트 남용 금지', description: 'JetBrains Mono 고정폭 서체를 일반 본문 단락(Copy text) 전체에 사용하지 마세요. 균일 자간으로 인해 단어 판독성과 시선 이동이 저하됩니다.', codeSnippet: '<!-- ❌ Avoid -->\n<p class="knds-text-copy-13-mono">이 긴 단락은 모노스페이스로 작성되면 안 됩니다...</p>' }
            ]}
            interactions={[
              { state: 'Multilingual Fallback (다국어 혼용)', visualChange: '영문/숫자는 JetBrains Mono, 한글 및 기타 언어는 Pretendard로 실시간 자동 매칭', functionalRole: 'API 키나 날짜 표기 시 숫자 기하 정렬을 유지하면서 한글 설명이 깨짐 없이 부드럽게 렌더링' },
              { state: 'Responsive Scaling (헤딩 수축)', visualChange: '72px 히어로 타이틀(`.knds-text-heading-72`)이 모바일(< 1199px)에서 36~48px로 자동 적응', functionalRole: '작은 화면에서 텍스트 줄바꿈 폭주를 막고 뷰포트 가로 넘침(Overflow) 방지' }
            ]}
            accessibility={[
              { category: 'Screen Reader Hierarchy (시맨틱 구조화)', description: '시각적 헤딩 크기와 HTML 시맨틱 태그(`<h1>` ~ `<h4>`)를 일치시켜 스크린 리더(VoiceOver) 사용자에게 올바른 문서 계층 구조를 안내하세요.' },
              { category: 'Line Height & Spacing (줄 간격 접근성)', description: '본문 텍스트는 최소 1.5배, 헤딩은 1.25배 이상의 줄 간격(Line Height)을 확보하여 난독증 및 저시력 사용자의 텍스트 중첩 오류를 방지합니다.' }
            ]}
            tokens={[
              { name: '--font-sans', defaultValue: '"Pretendard Variable", -apple-system, sans-serif', description: '기본 네오 그로테스크 산세리프 서체 스택' },
              { name: '--font-mono', defaultValue: '"JetBrains Mono", var(--font-sans)', description: '고정폭 코딩/데이터 폰트 및 다국어 폴백 스택' }
            ]}
            responsiveRules={[
              '데스크톱 (>= 1200px): .knds-text-heading-72는 히어로 타이틀로서 전체 화면의 압도적인 시각 위계를 잡습니다.',
              '모바일 (< 1199px): 72px 거대 헤딩은 뷰포트 너비에 맞추어 css 미디어 쿼리 혹은 반응형 클래스로 36px/48px로 자연스럽게 스케일 다운됩니다.'
            ]}
          />
        </section>
      )}

      {/* 6. Color */}
      {activeChapter === 6 && (
        <section id="ch-6">
          <div className="knds-mb-300">
            <p className="knds-text-copy-14 knds-text-muted">
              KNDS의 색상 전술은 완전한 절제에 기반을 둔다. 형형색색의 컬러 스펙트럼과 과도한 그라디언트는 추방된다. 오직 아크로매틱(Achromatic) 토대 위에 구축된다.
            </p>
          </div>
          <div className="knds-mb-300">
            <h3 className="knds-text-label-16 knds-mb-100">아크로매틱 기본 배경 및 경계선 시스템</h3>
            <div className="knds-code-block knds-mb-200">
              배경 1 (.knds-bg-primary: #FFFFFF)<br />
              배경 2 (.knds-bg-secondary: #F4F4F5)<br />
              텍스트 Rest (.knds-text-primary: var(--color-text-primary))<br />
              경계선 Rest (.knds-border: 1px solid var(--color-border-default))
            </div>
            <p className="knds-text-copy-14">
              페이지 전체를 감싸는 최하단 도화지 영역인 '배경 1'은 순수한 백색인 #FFFFFF를 지정하며, 제한적인 수준에서 '배경 2'인 #F4F4F5를 차용하여 깊이 단계를 제어한다.
            </p>
          </div>
          <div className="knds-mb-300">
            <h3 className="knds-text-label-16 knds-mb-100">펑셔널 레드(Functional Red) 액센트 설계</h3>
            <p className="knds-text-copy-14 knds-mb-100">
              오직 단 하나의 핵심 하이라이트 색상인 <strong>펑셔널 레드(Functional Red, #AD1D1D)</strong>가 시각적 폭발력을 획득한다. 오직 세 가지 상황에서만 제한적으로 동원된다.
            </p>
            <ul className="knds-list-disc knds-text-copy-14">
              <li>화면 내부에서 사용자가 즉시 실행해야만 하는 단 하나의 일차적 명령 버튼(Primary Call to Action)</li>
              <li>데이터의 영구적인 변동을 초래하는 위급한 경고성 제어 장치(Critical Destructive Action)</li>
              <li>시스템 오류나 검증 누락 상태를 실시간으로 환기해야 하는 즉각적 위기 상태 표시기(Immediate Validation State Indicator)</li>
            </ul>
          </div>
          <div className="knds-mb-300">
            <ColorSandbox />
          </div>

          <CodeViewer
            title="아크로매틱 고대비 배경 및 펑셔널 레드 명세"
            subtitle="Achromatic Foundations & #AD1D1D Accent Control"
            codeBlocks={[
              {
                label: "HTML / 유틸리티",
                tag: "HTML",
                code: "<!-- 1. 아크로매틱 배경 및 경계선 유틸리티 -->\n<div class=\"knds-panel knds-bg-primary knds-border knds-p-300\">\n  <span class=\"knds-text-label-14-mono knds-text-muted\">SURFACE: PRIMARY</span>\n</div>\n\n<!-- 2. 붉은색 액센트 텍스트 (치명적 오류 또는 유일한 액션 강조) -->\n<div class=\"knds-text-red knds-font-bold knds-mt-200\">\n  ⚠️ Critical Error: Hardware Sensor Connection Lost\n</div>\n\n<!-- 3. 보조 텍스트 색상 (Muted Text) -->\n<div class=\"knds-text-muted knds-text-copy-14\">\n  마지막 하트비트 동기화: 14:02:18 (정상)\n</div>\n\n<!-- 4. 펑셔널 레드 상태 뱃지 -->\n<span class=\"knds-bg-red knds-text-white knds-px-100 knds-py-050 knds-radius-sm knds-text-label-14-mono\">\n  ACTION REQUIRED\n</span>"
              },
              {
                label: "React / TSX",
                tag: "TSX",
                code: "export default function StatusPanel({ isError }: { isError: boolean }) {\n  return (\n    <div className={`knds-panel knds-p-300 knds-border ${isError ? 'knds-border-red' : ''}`}>\n      <div className=\"knds-flex-row knds-items-center knds-justify-between\">\n        <span className=\"knds-text-label-16 knds-font-bold\">시스템 코어 온도</span>\n        <span className={`knds-px-100 knds-py-050 knds-radius-sm knds-text-label-14-mono ${\n          isError ? 'knds-bg-red knds-text-white' : 'knds-bg-secondary knds-text-primary'\n        }`}>\n          {isError ? 'OVERHEAT #AD1D1D' : 'STABLE 42°C'}\n        </span>\n      </div>\n    </div>\n  );\n}"
              },
              {
                label: "CSS Token Specifications",
                tag: "CSS",
                code: ":root {\n  /* Achromatic Foundations */\n  --color-bg-primary: #ffffff;\n  --color-bg-secondary: #f4f4f5;\n  --color-border-default: #e4e4e7;\n  --color-border-hover: #a1a1aa;\n  --color-text-primary: #09090b;\n  --color-text-secondary: #71717a;\n\n  /* Functional Red Accent (#AD1D1D) */\n  --color-functional-red: #ad1d1d;\n  --color-red-hover: #c21f1f;\n  --color-red-active: #941a1a;\n}\n[data-theme=\"dark\"] {\n  --color-bg-primary: #09090b;\n  --color-bg-secondary: #18181b;\n  --color-border-default: #27272a;\n  --color-border-hover: #52525b;\n  --color-text-primary: #ffffff;\n  --color-text-secondary: #a1a1aa;\n}"
              }
            ]}
            note="펑셔널 레드(#AD1D1D)는 뷰포트 내 핵심 버튼 및 경고 뱃지 1~3개에만 제한적으로 부여되어 주의력을 집중시킵니다."
          />

          <HigSpecSection
            overview={{
              summary: '순도 높은 아크로매틱 고대비(#09090B ~ #FFFFFF) 토대 위에 유일한 액션 유도 색상인 펑셔널 레드(#AD1D1D)를 결합한 색상 체계입니다.',
              purpose: '불필요한 색상 간섭을 모두 제거하여 화면의 시각적 피로도를 최소화하고, 사용자가 실행해야 할 명확한 목표 지점(Primary Action)으로 시선을 즉시 인도합니다.'
            }}
            anatomy={[
              { id: 'co-1', name: 'Achromatic Surface & Borders', tokenOrClass: '--color-bg-primary, --color-border-default', description: '#FFFFFF ~ #09090B 간의 순도 높은 극대 대비 도화지와 #E4E4E7 구조 분기 경계선' },
              { id: 'co-2', name: 'Functional Red Accent', tokenOrClass: '--color-functional-red (#AD1D1D)', description: '화면 내 핵심 인터랙션(Primary Call to Action) 및 위급 경고에만 투입되는 유일한 유채색 포인트' }
            ]}
            doDont={[
              { type: 'do', title: 'Functional Red(#AD1D1D)의 극단적 희소성 보존', description: '화면당 펑셔널 레드 요소는 Primary 버튼 및 핵심 상태 뱃지를 포함하여 1~3개 이내로 제한하여 액션 어포던스(Affordance)를 집중시키세요.', codeSnippet: '<button class="knds-btn-primary">유일한 핵심 실행 액션</button>' },
              { type: 'dont', title: '파스텔/네온, 블루/그린 등 임의의 장식 컬러 혼합 금지', description: 'KNDS의 물리 아크로매틱 톤앤매너를 훼손하는 타 유채색을 장식 목적으로 섞지 마세요. 시각적 계층과 조작 정직성이 무너집니다.', codeSnippet: '<!-- ❌ Avoid -->\n<div style="background: #3B82F6; color: white;">...</div>' }
            ]}
            interactions={[
              { state: 'Hover State (마우스 오버)', visualChange: '--color-red-hover (#C21F1F)로 명도 상승', functionalRole: '조작 기판 버튼의 반응 준비 상태 및 커서 도달 피드백' },
              { state: 'Active State (가압 상호작용)', visualChange: '--color-red-active (#941a1a)로 짙은 압착 및 색상 침잠', functionalRole: '물리적 버튼 스위치가 바닥까지 완전히 눌렸음을 촉각/시각적으로 인지' },
              { state: 'Dark Mode Inversion (테마 반전)', visualChange: '#FFFFFF 도화지가 #09090B로 전환되며 경계선은 #27272A로 동기화', functionalRole: '저조도 환경에서 눈부심 방지 및 동일한 계층 대비 유지' }
            ]}
            accessibility={[
              { category: 'WCAG 대비 규격 (명도 대비)', description: '주요 텍스트(Text Primary)와 배경 간의 대비는 언제나 WCAG AAA(7:1 이상) 표준을 준수하며, 보조 텍스트(Text Secondary)와 배경 간의 대비는 인지 가독성을 위한 최적의 명도비(4.3:1 ~ 6.6:1) 범위를 보장합니다.' },
              { category: 'Color Blindness Safe (색약 배려)', description: '색상 단독으로만 상태를 표기하지 마세요. 에러나 경고는 항상 텍스트 라벨(`OVERHEAT`, `ERROR`)과 아이콘(`⚠️`)을 병기하여 색각 이상 사용자도 상태를 파악할 수 있도록 해야 합니다.' }
            ]}
            tokens={[
              { name: '--color-bg-primary', defaultValue: '#ffffff', darkValue: '#09090b', description: '최상위 도화지 및 패널 기본 배경색' },
              { name: '--color-bg-secondary', defaultValue: '#f4f4f5', darkValue: '#18181b', description: '계층 구분을 위한 보조 표면 배경색' },
              { name: '--color-border-default', defaultValue: '#e4e4e7', darkValue: '#27272a', description: '모든 패널, 입력창, 구분선의 기본 테두리 색상' },
              { name: '--color-border-hover', defaultValue: '#a1a1aa', darkValue: '#52525b', description: '요소 호버 또는 활성화 시 강조 경계선 색상' },
              { name: '--color-text-primary', defaultValue: '#09090b', darkValue: '#ffffff', description: '고대비 주 텍스트 및 기본 타이틀 색상' },
              { name: '--color-text-secondary', defaultValue: '#71717a', darkValue: '#a1a1aa', description: '메타 설명서 및 기호용 보조 명도 색상' },
              { name: '--color-functional-red', defaultValue: '#ad1d1d', darkValue: '#ad1d1d', description: 'KNDS의 아이덴티티이자 액션 유도 컬러' }
            ]}
            responsiveRules={[
              '테마 자동 적응: HTML 태그에 data-theme="dark" 속성 부여 시 모든 아크로매틱 변수가 즉시 반전 렌더링됩니다.',
              '고대비 유지: 다크 모드에서도 기능성 레드는 명도 대비를 유지하여 뚜렷한 식별성을 담보합니다.'
            ]}
          />
        </section>
      )}

      {/* 7. Materials */}
      {activeChapter === 7 && (
        <section id="ch-7">
          <div className="knds-mb-300">
            <p className="knds-text-copy-14 knds-text-muted">
              하드웨어의 물리적 재질감을 디지털로 모사하는 머티리얼 시스템입니다. 단순 평면을 넘어선 고도화된 깊이(Elevation)와 빛의 투과율 규칙을 준수합니다.
            </p>
          </div>
          <div className="knds-mb-300">
            <MaterialSandbox />
          </div>

          <CodeViewer
            title="물리적 베벨 및 광학 반투명 글래스 머티리얼 명세"
            subtitle="Hardware Bevel & Frosted Glass Backdrop Elevation"
            codeBlocks={[
              {
                label: "HTML / 유틸리티",
                tag: "HTML",
                code: "<!-- 1. 기본 하드웨어 패널 (Standard Bevel Panel) -->\n<div class=\"knds-panel knds-p-300\">\n  <div class=\"knds-panel-header\">\n    <h3 class=\"knds-text-label-16 knds-font-bold\">시스템 하드웨어 기판</h3>\n  </div>\n  <p class=\"knds-text-copy-14 knds-text-muted\">아크로매틱 고대비 정밀 재질감</p>\n</div>\n\n<!-- 2. 프로스트 글래스 반투명 표면 (Frosted Glass Overlay) -->\n<div class=\"knds-backdrop-blur-lg knds-p-200 knds-border\" style=\"background-color: var(--bg-sidebar);\">\n  <span class=\"knds-text-label-14-mono knds-font-bold\">BLUR 24PX + SATURATE 180%</span>\n</div>\n\n<!-- 3. 치명적 오류 글로우 이펙트 (Glow Effect) -->\n<div class=\"knds-shadow-glow knds-border knds-border-red knds-radius-md knds-p-200\">\n  <span class=\"knds-text-red knds-font-bold\">EMERGENCY CORE EXCURSION</span>\n</div>"
              },
              {
                label: "React / TSX",
                tag: "TSX",
                code: "export default function GlassModal({ isOpen, onClose, children }: {\n  isOpen: boolean;\n  onClose: () => void;\n  children: React.ReactNode;\n}) {\n  if (!isOpen) return null;\n  return (\n    <div className=\"knds-fixed knds-inset-0 knds-z-50 knds-flex-col knds-items-center knds-justify-center knds-p-400\">\n      <div\n        className=\"knds-absolute knds-inset-0 knds-backdrop-blur-lg\"\n        style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}\n        onClick={onClose}\n      />\n      <div className=\"knds-panel knds-content-relative knds-z-10 knds-w-full knds-max-w-lg knds-shadow-bevel\">\n        {children}\n      </div>\n    </div>\n  );\n}"
              },
              {
                label: "CSS Token Specifications",
                tag: "CSS",
                code: ":root {\n  --shadow-hardware-bevel: 0 1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  --bg-sidebar: rgba(255, 255, 255, 0.65);\n}\n[data-theme=\"dark\"] {\n  --shadow-hardware-bevel: 0 1px 0 0 rgba(255, 255, 255, 0.08) inset, 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n  --bg-sidebar: rgba(9, 9, 11, 0.65);\n}\n.knds-backdrop-blur-lg {\n  backdrop-filter: blur(24px) saturate(180%);\n  -webkit-backdrop-filter: blur(24px) saturate(180%);\n}"
              }
            ]}
            note="머티리얼 레이어는 상단 1px 반사와 반투명 블러 필터를 통해 디지털 화면에 깊이와 질감을 부여합니다."
          />

          <CodeExport />

          <HigSpecSection
            overview={{
              summary: '하드웨어 표면의 정밀 음각/양각 베벨(`.knds-panel`)과 광학 반투명 글래스(`backdrop-filter`) 효과로 화면의 깊이(Elevation)를 구분하는 재질 시스템입니다.',
              purpose: '단순한 평면을 넘어 물리적 표면 간의 깊이와 전후 관계를 명확히 하여, 사용자가 어떤 창을 제어 중인지 즉각적으로 인지할 수 있도록 돕습니다.'
            }}
            anatomy={[
              { id: 'ma-1', name: 'Standard Bevel Surface (.knds-panel)', tokenOrClass: '--shadow-hardware-bevel', description: '상단 1px 화이트 하이라이트와 하단 보더 음영이 결합하여 만드는 정밀 물리 표면' },
              { id: 'ma-2', name: 'Frosted Glass Layer (.knds-sidebar / .knds-overlay)', tokenOrClass: 'backdrop-filter: blur(24px) saturate(180%)', description: '하위 레이어의 청사진 그리드와 색상을 은은하게 투과시키는 광학 반투명 유리 효과' }
            ]}
            doDont={[
              { type: 'do', title: '계층 위계에 따른 적합한 머티리얼 부여', description: '본문 정보 표면에는 불투명 고대비 `.knds-panel`을, 부유하는 네비게이션이나 모달 오버레이에는 반투명 블러 머티리얼을 적용하여 깊이 단계를 설계하세요.', codeSnippet: '<div class="knds-panel knds-p-300">본문 하드웨어 표면</div>' },
              { type: 'dont', title: '블러(`backdrop-filter`) 레이어 3중 이상 중첩 금지', description: '블러 필터가 적용된 요소를 3겹 이상 겹치지 마세요. GPU 연산 부하가 심화되고 배경 투명도가 혼탁해져 계층 판독성이 저하됩니다.', codeSnippet: '<!-- ❌ Avoid -->\n<div style="backdrop-filter:blur(24px)">\n  <div style="backdrop-filter:blur(24px)">...</div>\n</div>' }
            ]}
            interactions={[
              { state: 'Scroll Transparency (스크롤 투과)', visualChange: '콘텐츠가 네비게이션/사이드바 밑을 지날 때 빛과 형태가 은은하게 굴절되어 표시', functionalRole: '전체 화면 문맥(Context)을 잃지 않으면서 현재 상단 레이어에 시선을 유지하게 하는 융합 효과' },
              { state: 'Bevel Depression (가압 상태)', visualChange: '상단 1px 화이트 하이라이트 소멸 및 내측 음영(`inset`) 강화', functionalRole: '물리 기판이 섀시 아래로 안착되는 압착감을 시각화' }
            ]}
            accessibility={[
              { category: 'Reduce Transparency (투명도 줄이기 대응)', description: 'OS 설정에서 투명도 줄이기 기능이 켜진 경우, `backdrop-filter`를 무효화하고 불투명 단색 배경(`#FFFFFF` / `#09090B`)으로 안전하게 폴백(Fallback)합니다.' },
              { category: 'GPU Performance (렌더링 최적화)', description: '모바일 및 저사양 기기에서 60fps 스크롤 성능을 유지하기 위해 뷰포트 영역 바깥의 불필요한 블러 렌더링을 자동 차단합니다.' }
            ]}
            tokens={[
              { name: '--shadow-hardware-bevel', defaultValue: 'inset 0 1px 0 rgba(255, 255, 255, 1)...', darkValue: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)...', description: '표면 상단 빛 반사 및 하단 그림자 공식' },
              { name: '--bg-sidebar', defaultValue: 'rgba(255, 255, 255, 0.65)', darkValue: 'rgba(9, 9, 11, 0.65)', description: '블러 효과와 결합되는 반투명 표면 토큰' }
            ]}
            responsiveRules={[
              '하드웨어 가속 최적화: 모바일 및 저사양 디바이스에서는 60fps 스크롤을 보장하기 위해 뷰포트 바깥의 블러 렌더링을 자동 제어합니다.'
            ]}
          />
        </section>
      )}

      {/* 8. Buttons & Morphing */}
      {activeChapter === 8 && (
        <section id="ch-8">
          <div className="knds-mb-300">
            <p className="knds-text-copy-14 knds-text-muted">
              버튼은 물리 하드웨어의 택타일 스위치를 디지털 화면 내부로 완벽하게 복제해 온 KNDS의 핵심 제어 컴포넌트이다. 외곽선의 예리함과 기하학적 형태 변화 메커니즘을 추가하여 정교한 피드백을 완성한다.
            </p>
          </div>
          <div className="knds-mb-300">
            <h3 className="knds-text-label-16 knds-mb-100">형태 모핑(Shape Morphing) 메커니즘</h3>
            <p className="knds-text-copy-14">
              평상시 기본 Rest 상태에서는 완전한 원형 스타일(Fully Rounded)을 유지하다가, 마우스가 진입(Hover)하거나 손가락으로 가압(Press)하는 물리적 에너지가 전달되는 순간 코너 반경을 좁히며 엣지 있는 직사각형 형태로 탈바꿈한다.
            </p>
          </div>
          <div className="knds-mb-300">
            <ButtonSandbox />
          </div>

          <div className="knds-mb-300">
            <h3 className="knds-text-label-16 knds-mb-150">KNDS 시스템 공식 곡률 스펙트럼 (Border Radius Specs)</h3>
            <p className="knds-text-copy-14 knds-text-muted knds-mb-200">
              KNDS의 모든 조작 표면과 하드웨어 섀시는 규정된 7가지 코너 곡률(Border Radius)만을 사용해야 합니다. 임의의 둥글기 값을 하드코딩하지 마십시오.
            </p>
            <div className="knds-overflow-x-auto">
              <table className="knds-table">
                <thead>
                  <tr>
                    <th style={{ width: '120px' }}>곡률 등급</th>
                    <th style={{ width: '280px' }}>토큰 및 클래스</th>
                    <th style={{ width: '100px' }}>반경</th>
                    <th>시스템 설계 적용 규격 및 사례</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="knds-text-label-14-mono knds-font-bold">None</span></td>
                    <td><code className="knds-code-block" style={{ fontSize: '12px' }}>.knds-rounded-none</code></td>
                    <td><span className="knds-font-mono">0px</span></td>
                    <td className="knds-text-copy-14 knds-text-muted">날카로운 직각 섀시. 최외곽 메인 컨테이너 외부 모서리 및 기판 구획선 접합부.</td>
                  </tr>
                  <tr>
                    <td><span className="knds-text-label-14-mono knds-font-bold">Small</span></td>
                    <td><code className="knds-code-block" style={{ fontSize: '12px' }}>.knds-radius-sm</code> / <code className="knds-code-block" style={{ fontSize: '12px' }}>.knds-rounded-sm</code></td>
                    <td><span className="knds-font-mono">4px</span></td>
                    <td className="knds-text-copy-14 knds-text-muted">미세 곡률. 입력창(Input), 드롭다운, 태그/배지, active(가압) 상태의 택타일 버튼.</td>
                  </tr>
                  <tr>
                    <td><span className="knds-text-label-14-mono knds-font-bold">Medium</span></td>
                    <td><code className="knds-code-block" style={{ fontSize: '12px' }}>.knds-rounded</code> / <code className="knds-code-block" style={{ fontSize: '12px' }}>.knds-radius-md</code> / <code className="knds-code-block" style={{ fontSize: '12px' }}>.knds-rounded-md</code></td>
                    <td><span className="knds-font-mono">8px</span></td>
                    <td className="knds-text-copy-14 knds-text-muted">보조 표면 곡률. 카드 뷰(Card), 내부 서브 패널 컨테이너, hover 상태의 택타일 버튼.</td>
                  </tr>
                  <tr>
                    <td><span className="knds-text-label-14-mono knds-font-bold">Large</span></td>
                    <td><code className="knds-code-block" style={{ fontSize: '12px' }}>.knds-radius-lg</code> / <code className="knds-code-block" style={{ fontSize: '12px' }}>.knds-rounded-lg</code></td>
                    <td><span className="knds-font-mono">16px</span></td>
                    <td className="knds-text-copy-14 knds-text-muted">메인 위계 곡률. 부유형 다이얼로그/모달 패널 본체, 대형 이미지 프레임, rest 상태의 택타일 버튼 수축 코너.</td>
                  </tr>
                  <tr>
                    <td><span className="knds-text-label-14-mono knds-font-bold">X-Large</span></td>
                    <td><code className="knds-code-block" style={{ fontSize: '12px' }}>.knds-rounded-xl</code></td>
                    <td><span className="knds-font-mono">24px</span></td>
                    <td className="knds-text-copy-14 knds-text-muted">최외곽 모서리. 브라우저 뷰포트 코너, 데스크톱 앱 창 프레임 최외곽 단면.</td>
                  </tr>
                  <tr>
                    <td><span className="knds-text-label-14-mono knds-font-bold">2X-Large</span></td>
                    <td><code className="knds-code-block" style={{ fontSize: '12px' }}>.knds-rounded-2xl</code></td>
                    <td><span className="knds-font-mono">32px</span></td>
                    <td className="knds-text-copy-14 knds-text-muted">특수 연출 곡률. 대형 모달 레이아웃 프레임 및 초대형 프로모션/배너 프레임.</td>
                  </tr>
                  <tr>
                    <td><span className="knds-text-label-14-mono knds-font-bold">Full</span></td>
                    <td><code className="knds-code-block" style={{ fontSize: '12px' }}>.knds-radius-full</code> / <code className="knds-code-block" style={{ fontSize: '12px' }}>.knds-rounded-full</code></td>
                    <td><span className="knds-font-mono">50% / 9999px</span></td>
                    <td className="knds-text-copy-14 knds-text-muted">완전 둥근 상태. 택타일 버튼의 Rest(대기) 상태, 원형 스위치 손잡이, 상태 LED 표시등.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <CodeViewer
            title="하드웨어 택타일 버튼 및 모핑 메커니즘"
            subtitle="Tactile Switch & Capsule-to-Rectangle Morphing"
            codeBlocks={[
              {
                label: "HTML / 유틸리티",
                tag: "HTML",
                code: "<!-- 1. 1차 핵심 액션 (Primary Button) -->\n<button class=\"knds-btn-primary knds-btn-md\">\n  SUBMIT DATA\n</button>\n\n<!-- 2. 2차 보조 액션 (Secondary Button) -->\n<button class=\"knds-secondary-btn knds-btn-md\">\n  CANCEL\n</button>\n\n<!-- 3. 고스트 액션 (Ghost / Text Button) -->\n<button class=\"knds-secondary-btn knds-btn-md knds-border-none knds-bg-transparent\">\n  Learn More\n</button>\n\n<!-- 4. 버튼 사이즈 스케일 (XS ~ XL) -->\n<div class=\"knds-flex-row knds-gap-100 knds-items-center\">\n  <button class=\"knds-btn-primary knds-btn-xs\">XS (32px)</button>\n  <button class=\"knds-btn-primary knds-btn-sm\">SM (40px)</button>\n  <button class=\"knds-btn-primary knds-btn-md\">MD (44px)</button>\n  <button class=\"knds-btn-primary knds-btn-lg\">LG (48px)</button>\n  <button class=\"knds-btn-primary knds-btn-xl\">XL (56px)</button>\n</div>"
              },
              {
                label: "React / TSX",
                tag: "TSX",
                code: "interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  variant?: 'primary' | 'secondary' | 'ghost';\n  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';\n}\n\nexport default function TactileButton({ variant = 'primary', size = 'md', children, ...props }: ButtonProps) {\n  const variantClass = variant === 'primary' ? 'knds-btn-primary' :\n                       variant === 'secondary' ? 'knds-secondary-btn' :\n                       'knds-secondary-btn knds-border-none knds-bg-transparent';\n  return (\n    <button className={`${variantClass} knds-btn-${size}`} {...props}>\n      {children}\n    </button>\n  );\n}"
              },
              {
                label: "CSS Token Specifications",
                tag: "CSS",
                code: ".knds-btn-primary {\n  height: 44px;\n  padding: 0 24px;\n  border-radius: 9999px; /* Capsule Rest State */\n  background-color: var(--color-text-primary);\n  color: var(--color-bg-primary);\n  transition: border-radius 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.1s ease;\n}\n.knds-btn-primary:hover {\n  border-radius: 6px; /* Morphing to Rectangle */\n  background-color: var(--color-functional-red);\n  color: #ffffff;\n}\n.knds-btn-primary:active {\n  transform: scale(0.98);\n}"
              }
            ]}
            note="KNDS 버튼은 평상시 곡선을 유지하다 가압 순간 예리한 엣지로 모핑되어 물리적 클릭 질감을 극대화합니다."
          />

          <HigSpecSection
            overview={{
              summary: '물리적 택타일 스위치의 촉각적 가압감을 모사하며, 조작 상태에 따라 캡슐에서 직사각형으로 변형(Morphing)되는 핵심 제어 컴포넌트입니다.',
              purpose: '사용자의 커서나 터치가 진입하는 순간 직관적인 형태 변화를 보여줌으로써, 실행 가능한 상호작용 요소(Interactive Affordance)임을 명확히 각인시킵니다.'
            }}
            anatomy={[
              { id: 'bt-1', name: 'Primary Capsule-to-Rect Morphing Button (.knds-btn-primary)', tokenOrClass: '--btn-height: 44px, border-radius transition', description: 'Rest 시 완전 원형(Capsule, 9999px)에서 Hover 시 14px, Active 시 8px 반경으로 동역학 수축하는 스위치' },
              { id: 'bt-2', name: 'Secondary Monospace Hardware Button (.knds-secondary-btn)', tokenOrClass: 'border: 1px solid --color-border-default', description: 'JetBrains Mono 13px 고정폭 폰트 기반의 보조 제어 및 시스템 기능 실행 버튼' }
            ]}
            doDont={[
              { type: 'do', title: '버튼 높이와 인풋 높이의 1:1 수평 대응', description: '폼 요소 배치 시 `.knds-btn-md(44px)`와 `.knds-input-md(44px)`를 일치시켜 하드웨어 제어 기판처럼 단정한 수평 축선을 구축하세요.', codeSnippet: '<div class="knds-flex-row knds-gap-100">\n  <input class="knds-input knds-input-md" />\n  <button class="knds-btn-primary knds-btn-md">SEND</button>\n</div>' },
              { type: 'dont', title: '동일 영역 내 Primary 버튼 다중 병치 금지', description: '사용자의 결정 시선을 분산시키는 2개 이상의 Primary 버튼 동시 노출을 피하세요. 주 행동(Primary)과 보조 행동(Secondary)으로 위계를 분리해야 합니다.', codeSnippet: '<!-- ❌ Avoid -->\n<button class="knds-btn-primary">Save</button>\n<button class="knds-btn-primary">Delete</button>' }
            ]}
            interactions={[
              { state: 'Default State (Rest 상태)', visualChange: '아크로매틱 고대비 배경 + 9999px 완전 원형(Capsule) 캡슐 외곽선', functionalRole: '화면 내에서 대기 중인 독립 조작 스위치로서 시각적 안정성 제공' },
              { state: 'Hover State (마우스 진입)', visualChange: '코너 반경이 14px로 날카롭게 수축하며 펑셔널 레드(#AD1D1D)로 색상 모핑', functionalRole: '조작 준비 완료 상태를 알리고 클릭에 대한 시각적 기대감 형성' },
              { state: 'Active / Pressed (가압 상호작용)', visualChange: '코너 반경 8px 압축 + 0.98 스케일 다운 및 --color-red-active 적용', functionalRole: '스위치가 바닥까지 물리적으로 눌렸음을 나타내는 촉각 에너지 반환' },
              { state: 'Disabled State (비활성화)', visualChange: '투명도(`opacity: 0.4`) 저하 및 마우스 포인터 차단(`cursor: not-allowed`)', functionalRole: '현재 입력 조건 미충족 또는 시스템 제어 불가 상태 안내' }
            ]}
            accessibility={[
              { category: 'Touch Target Minimum (44x44px 준수)', description: '모바일 및 터치 디바이스에서 손가락 터치 오류(Fat-finger error)를 방지하기 위해 최소 조작 영역 규격(`--btn-height: 44px`) 이상을 엄격히 유지하세요.' },
              { category: 'Keyboard Focus Ring (키보드 접근성)', description: 'Tab 키 이동 시 2px 두께의 명확한 외부 포커스 링(`outline`)이 표시되어 마우스 없이도 버튼 위치를 식별하고 Enter/Space로 조작할 수 있습니다.' }
            ]}
            tokens={[
              { name: '--btn-height', defaultValue: '44px (MD)', description: '버튼 수직 높이 (XS: 32px, SM: 40px, MD: 44px, LG: 48px, XL: 56px)' },
              { name: '--btn-hover-radius', defaultValue: '14px', description: 'Hover 시 곡률 반경 수축 목표치' },
              { name: '--btn-active-radius', defaultValue: '8px', description: 'Active(클릭) 시 하드웨어 가압 곡률 수축 목표치' }
            ]}
            responsiveRules={[
              '터치 가이드라인: 모바일 화면에서는 손가락 오타율 최소화를 위해 --btn-height가 최소 44px (MD 이상)을 유지하도록 보장합니다.',
              '전체 너비 옵션: 모바일 하단 액션 바에서는 .knds-w-full 클래스를 결합하여 엄지손가락 도달 영역을 극대화합니다.'
            ]}
          />
        </section>
      )}

      {/* 9. Forms */}
      {activeChapter === 9 && (
        <section id="ch-9">
          <div className="knds-mb-300">
            <p className="knds-text-copy-14 knds-text-muted">
              사용자의 데이터를 정밀하게 입력받고 제어하는 폼 컴포넌트 명세입니다. 입력 필드의 상태에 따라 명확하고 즉각적인 시각 피드백을 제공해야 합니다.
            </p>
          </div>
          <div className="knds-mb-300">
            <FormSandbox />
          </div>

          <CodeViewer
            title="정밀 인풋 콘솔 및 아크로매틱 폼 제어"
            subtitle="Precision Input Terminal & Focus State Indicator"
            codeBlocks={[
              {
                label: "HTML / 유틸리티",
                tag: "HTML",
                code: "<!-- 1. 기본 인풋 필드 세트 -->\n<div class=\"knds-flex-col knds-gap-100\">\n  <label class=\"knds-text-label-14-mono knds-text-muted\">USERNAME OR ID</label>\n  <input type=\"text\" class=\"knds-input knds-input-md\" placeholder=\"Enter alphanumeric identifier...\" />\n</div>\n\n<!-- 2. 셀렉트 드롭다운 -->\n<div class=\"knds-flex-col knds-gap-100 knds-mt-200\">\n  <label class=\"knds-text-label-14-mono knds-text-muted\">SECURITY ACCESS LEVEL</label>\n  <select class=\"knds-input knds-input-md\">\n    <option value=\"level-1\">Level 1 - Administrator Console</option>\n    <option value=\"level-2\">Level 2 - Hardware Engineer</option>\n    <option value=\"level-3\">Level 3 - Guest Observer</option>\n  </select>\n</div>\n\n<!-- 3. 인풋 사이즈 스케일 (버튼 사이즈와 1:1 수평 정렬) -->\n<div class=\"knds-flex-col knds-gap-150 knds-mt-300\">\n  <input type=\"text\" class=\"knds-input knds-input-xs\" placeholder=\"XS Input (32px)\" />\n  <input type=\"text\" class=\"knds-input knds-input-sm\" placeholder=\"SM Input (40px)\" />\n  <input type=\"text\" class=\"knds-input knds-input-md\" placeholder=\"MD Input (44px, Default)\" />\n  <input type=\"text\" class=\"knds-input knds-input-lg\" placeholder=\"LG Input (48px)\" />\n  <input type=\"text\" class=\"knds-input knds-input-xl\" placeholder=\"XL Input (56px)\" />\n</div>"
              },
              {
                label: "React / TSX",
                tag: "TSX",
                code: "interface FormFieldProps {\n  label: string;\n  placeholder?: string;\n  type?: string;\n  isError?: boolean;\n  errorMessage?: string;\n}\n\nexport default function FormField({ label, placeholder, type = 'text', isError, errorMessage }: FormFieldProps) {\n  return (\n    <div className=\"knds-flex-col knds-gap-100\">\n      <div className=\"knds-flex-row knds-justify-between\">\n        <label className=\"knds-text-label-14-mono knds-text-muted\">{label}</label>\n        {isError && <span className=\"knds-text-label-14-mono knds-text-red\">ERROR</span>}\n      </div>\n      <input\n        type={type}\n        placeholder={placeholder}\n        className={`knds-input knds-input-md ${isError ? 'knds-border-red knds-shadow-glow' : ''}`}\n      />\n      {errorMessage && <span className=\"knds-text-copy-14 knds-text-red\">{errorMessage}</span>}\n    </div>\n  );\n}"
              },
              {
                label: "CSS Token Specifications",
                tag: "CSS",
                code: ".knds-input {\n  width: 100%;\n  height: 44px;\n  padding: 0 16px;\n  background-color: var(--color-bg-primary);\n  border: 1px solid var(--color-border-default);\n  border-radius: 8px; /* Standard MD Radius */\n  color: var(--color-text-primary);\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.knds-input:focus {\n  outline: none;\n  border-color: var(--color-text-primary);\n  box-shadow: 0 0 0 2px rgba(9, 9, 11, 0.1);\n}\n[data-theme=\"dark\"] .knds-input:focus {\n  box-shadow: 0 0 0 2px rgba(250, 250, 250, 0.15);\n}"
              }
            ]}
            note="폼 제어 요소는 버튼 높이와 정확히 1:1 일치하여 수평 툴바나 인라인 검색 바 구성 시 여백 오차가 0px입니다."
          />

          <HigSpecSection
            overview={{
              summary: '사용자의 데이터를 정밀하게 입력받고 실시간 유효성 검증 결과를 직관적으로 반환하는 데이터 콘솔 폼 인터페이스입니다.',
              purpose: '오입력 발생 가능성을 원천 차단하고, 입력 필드의 각 상호작용 상태(Focus, Error, Disabled)마다 명확한 시각 피드백을 전달하여 데이터 입력 정확성을 보장합니다.'
            }}
            anatomy={[
              { id: 'fo-1', name: 'Text & Select Control (.knds-input)', tokenOrClass: 'border: 1px solid --color-border-default', description: '6px 곡률 반경과 아크로매틱 1px 경계선을 갖는 정밀 입력 필드' },
              { id: 'fo-2', name: 'Input Focus Ring (:focus)', tokenOrClass: 'box-shadow: 0 0 0 2px rgba(...)', description: '포커스 진입 시 키보드 및 마우스 조작 명확성을 담보하는 2px 아우터 링' },
              { id: 'fo-3', name: 'Monospace Label (.knds-text-label-*-mono)', tokenOrClass: 'font-family: var(--font-mono)', description: '입력창 상단에 위치하여 데이터 속성명과 필수 입력 여부를 안내하는 고정폭 라벨' }
            ]}
            doDont={[
              { type: 'do', title: '입력창 상단 고정폭 라벨 명시적 바인딩', description: '모든 `.knds-input` 요소 상단에는 `<label class="knds-text-label-14-mono">` 라벨을 명시적으로 바인딩(HTML `for`/`id`)하여 데이터 속성을 뚜렷하게 안내하세요.', codeSnippet: '<label for="sys-id" class="knds-text-label-14-mono">SYSTEM_ID</label>\n<input id="sys-id" class="knds-input" />' },
              { type: 'dont', title: '플레이스홀더를 필수 라벨 대용으로 단독 사용 금지', description: '플레이스홀더(`placeholder`) 텍스트는 사용자가 타이핑을 시작하는 순간 사라지므로 필수 라벨을 절대 대체할 수 없습니다. 기억 부담(Cognitive load)을 가중시키지 마세요.', codeSnippet: '<!-- ❌ Avoid -->\n<input class="knds-input" placeholder="라벨 없이 플레이스홀더만 단독 기입" />' }
            ]}
            interactions={[
              { state: 'Default State (Rest 상태)', visualChange: '1px `#E4E4E7` 아크로매틱 보더 및 `#FFFFFF` 배경', functionalRole: '사용자의 데이터 입력을 대기하는 기본 콘솔 필드' },
              { state: 'Focus State (포커스 진입)', visualChange: '보더 색상이 `#09090B`로 짙어지며 2px 외곽 포커스 링 생성', functionalRole: '현재 타이핑 대상 필드임을 명확히 안내하여 시선 이탈 방지' },
              { state: 'Error State (유효성 오류)', visualChange: '경계선이 펑셔널 레드(`knds-border-red`)로 바뀌며 에러 글로우 발산', functionalRole: '필수 항목 누락 또는 데이터 형식 오입력 시 즉각적인 경고 렌더링' },
              { state: 'Disabled State (비활성화)', visualChange: '배경이 `#F4F4F5`로 전환되며 투명도(`opacity: 0.7`) 저하', functionalRole: '현재 권한 부족 또는 선행 조건 미결로 입력이 차단되었음을 표시' }
            ]}
            accessibility={[
              { category: 'Explicit Labeling (`<label for>` 바인딩)', description: '스크린 리더(VoiceOver)가 입력 필드의 목적을 정확히 낭독할 수 있도록 HTML `<label>` 태그의 `for` 속성과 `<input>`의 `id`를 1:1로 일치시키세요.' },
              { category: 'Error ARIA Announcement (`aria-invalid`)', description: '에러 상태 발생 시 `<input aria-invalid="true" aria-describedby="error-id">` 속성을 부여하여 시각 장애 사용자에게도 에러 발생 사유를 실시간 낭독합니다.' }
            ]}
            tokens={[
              { name: '.knds-input', defaultValue: 'height: 44px, padding: 0 16px', description: '표준 MD 입력 필드 높이 및 내부 좌우 여백' },
              { name: '.knds-input:focus', defaultValue: 'border-color: var(--color-text-primary)', description: '포커스 진입 시 강조되는 아크로매틱 텍스트 컬러 보더' },
              { name: '.knds-input:disabled', defaultValue: 'opacity: 0.7, background: var(--color-bg-secondary)', description: '입력 불가능 상태의 회색 반투명 비주얼' }
            ]}
            responsiveRules={[
              'iOS 자동 확대 방지: 모바일 기기(iPhone/iPad)에서 인풋 터치 시 브라우저가 강제 줌인되는 현상을 막기 위해 폰트 사이즈 14px 이상 또는 16px 대응을 완벽히 보장합니다.'
            ]}
          />
        </section>
      )}

      {/* 10. Modals */}
      {activeChapter === 10 && (
        <section id="ch-10">
          <div className="knds-mb-300">
            <p className="knds-text-copy-14 knds-text-muted">
              현재의 흐름을 강제로 멈추고 사용자의 즉각적인 집중과 결정을 요구하는 모달 및 다이얼로그 시스템 명세입니다.
            </p>
          </div>
          <div className="knds-mb-300">
            <ModalSandbox />
          </div>

          <CodeViewer
            title="하드웨어 콘솔 다이얼로그 및 오버레이 레이어"
            subtitle="Elevated Bevel Modal & Backdrop Dimming"
            codeBlocks={[
              {
                label: "HTML / 유틸리티",
                tag: "HTML",
                code: "<!-- 1. 다이얼로그 배경 오버레이 -->\n<div class=\"knds-fixed knds-inset-0 knds-backdrop-blur-sm knds-z-40\" style=\"background: rgba(0,0,0,0.65);\"></div>\n\n<!-- 2. 다이얼로그 패널 본체 -->\n<div class=\"knds-panel knds-fixed knds-inset-center knds-z-50 knds-shadow-xl knds-w-[420px] knds-p-400\">\n  \n  <div class=\"knds-border-bottom knds-pb-200 knds-mb-300 knds-flex-row knds-justify-between knds-items-center\">\n    <h3 class=\"knds-text-label-16 knds-font-bold knds-text-red\">SYSTEM TERMINATE CONFIRMATION</h3>\n    <button class=\"knds-text-muted knds-cursor-pointer knds-border-none knds-bg-transparent\">✕</button>\n  </div>\n  \n  <p class=\"knds-text-copy-14 knds-text-muted knds-mb-400 knds-leading-relaxed\">\n    선택한 하드웨어 클러스터의 데이터 마운트를 해제하고 서버에서 영구 삭제합니다.<br/>\n    이 작업은 <strong>절대 복구할 수 없습니다</strong>.\n  </p>\n  \n  <div class=\"knds-flex-row knds-justify-end knds-gap-200\">\n    <button class=\"knds-secondary-btn knds-btn-md\">Cancel</button>\n    <button class=\"knds-btn-primary knds-btn-md\">Confirm Execution</button>\n  </div>\n  \n</div>"
              },
              {
                label: "React / TSX",
                tag: "TSX",
                code: "export default function HardwareModal({ isOpen, title, children, onConfirm, onCancel }: {\n  isOpen: boolean;\n  title: string;\n  children: React.ReactNode;\n  onConfirm: () => void;\n  onCancel: () => void;\n}) {\n  if (!isOpen) return null;\n  return (\n    <div className=\"knds-fixed knds-inset-0 knds-z-50 knds-flex-col knds-items-center knds-justify-center\">\n      <div className=\"knds-absolute knds-inset-0 knds-backdrop-blur-md\" style={{ background: 'rgba(0,0,0,0.6)' }} onClick={onCancel} />\n      <div className=\"knds-panel knds-content-relative knds-z-10 knds-w-full knds-max-w-md knds-shadow-bevel knds-p-400\">\n        <div className=\"knds-border-bottom knds-pb-200 knds-mb-300 knds-flex-row knds-justify-between knds-items-center\">\n          <span className=\"knds-text-label-16 knds-font-bold\">{title}</span>\n          <button onClick={onCancel} className=\"knds-border-none knds-bg-transparent knds-cursor-pointer\">✕</button>\n        </div>\n        <div className=\"knds-mb-400\">{children}</div>\n        <div className=\"knds-flex-row knds-justify-end knds-gap-200\">\n          <button onClick={onCancel} className=\"knds-secondary-btn knds-btn-md\">취소</button>\n          <button onClick={onConfirm} className=\"knds-btn-primary knds-btn-md\">확인 및 실행</button>\n        </div>\n      </div>\n    </div>\n  );\n}"
              },
              {
                label: "CSS Token Specifications",
                tag: "CSS",
                code: ".knds-inset-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.knds-shadow-xl {\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15);\n}"
              }
            ]}
            note="모달은 물리적 다이얼로그의 무게감을 나타내기 위해 상단 1px 반사와 깊은 드롭 섀도우를 동반합니다."
          />

          <HigSpecSection
            overview={{
              summary: '사용자의 작업 흐름을 일시 중단하고 치명적 결정이나 필수 입력을 즉각적으로 유도하는 최상위 오버레이 다이얼로그 시스템입니다.',
              purpose: '배경 인터랙션을 차단하고 심리적 집중도를 극대화하여, 데이터 삭제나 결제 승인과 같이 복구할 수 없는 주요 의사결정의 무게감을 전달합니다.'
            }}
            anatomy={[
              { id: 'mo-1', name: 'Modal Backdrop Dim overlay (.knds-overlay)', tokenOrClass: 'z-index: 998, backdrop-filter: blur(4px)', description: '배경 상호작용을 완전 차단하고 사용자의 시선을 다이얼로그 콘솔로 유도하는 반투명 암전 층' },
              { id: 'mo-2', name: 'Elevated Hardware Dialog (.knds-panel)', tokenOrClass: 'z-index: 999, box-shadow: 0 20px 40px...', description: '최상위 고대비 입체 섀도우를 안고 부유하는 정밀 다이얼로그 본체' },
              { id: 'mo-3', name: 'Dialog Header & Action Footer', tokenOrClass: '.knds-border-bottom / .knds-border-top', description: '다이얼로그의 목적을 고지하는 타이틀 영역과 취소/실행 버튼이 위치한 조작 푸터' }
            ]}
            doDont={[
              { type: 'do', title: '취소 버튼은 좌측, 실행 버튼은 우측 배치', description: '모달 푸터에서는 취소(Cancel)를 왼쪽, 실행(Confirm/Destructive)을 오른쪽에 두어 OS 네이티브 버튼 패턴과 일치시키세요.', codeSnippet: '<div class="knds-flex-row knds-justify-end knds-gap-100">\n  <button class="knds-secondary-btn">Cancel</button>\n  <button class="knds-btn-primary">Confirm</button>\n</div>' },
              { type: 'dont', title: '다이얼로그 내부 다중 중첩 모달(Modal inside Modal) 금지', description: '모달 다이얼로그 위로 또 다른 모달을 중첩하여 띄우지 마세요. 사용자의 공간 인지 지도가 상실되고 포커스 트랩 충돌이 유발됩니다.', codeSnippet: '<!-- ❌ Avoid -->' }
            ]}
            interactions={[
              { state: 'Open Transition (다이얼로그 진입)', visualChange: '배경 블러(`backdrop-filter: blur(4px)`) 암전과 함께 다이얼로그 0.95 -> 1.0 스케일 업 및 페이드 인', functionalRole: '사용자의 시선을 기존 페이지 작업에서 오버레이 다이얼로그로 부드럽게 전이' },
              { state: 'Escape / Dismiss (다이얼로그 닫기)', visualChange: 'ESC 키 입력 또는 배경 백드롭 클릭 시 페이드 아웃 종료', functionalRole: '치명적 작업이 아닐 때 빠르고 손쉽게 원래 화면으로 복귀할 수 있는 탈출구 보장' }
            ]}
            accessibility={[
              { category: 'Keyboard Focus Trap (포커스 트랩 보장)', description: '모달 활성화 시 Tab 키 이동 범위는 반드시 다이얼로그 내부의 입력창과 버튼으로만 제한(Focus Trap)되어야 합니다. 배경 요소로 포커스가 이탈하지 않도록 차단하세요.' },
              { category: 'ESC Key & ARIA Dialog (`role="dialog"`)', description: '다이얼로그 컨테이너에 `role="dialog"`와 `aria-modal="true"`를 부여하고, ESC 키 감지 이벤트 리스너를 연동하여 접근성을 완벽히 충족하세요.' }
            ]}
            tokens={[
              { name: 'z-index: 998 / 999', defaultValue: '998 (Backdrop), 999 (Dialog)', description: '전체 화면 오버레이 및 모달 레이어 고정 인덱스' }
            ]}
            responsiveRules={[
              '모바일 풀스크린 적응: 모바일 뷰포트(< 640px)에서는 너비 90% 이상으로 확장되거나 하단 바텀 시트(Bottom Sheet) 형태로 렌더링되어 터치 조작성을 확보합니다.'
            ]}
          />
        </section>
      )}

      {/* 11. Navigation */}
      {activeChapter === 11 && (
        <section id="ch-11">
          <div className="knds-mb-300">
            <p className="knds-text-copy-14 knds-text-muted">
              탭, 브레드크럼 등 화면 내에서 현재 위치를 파악하고 다른 계층으로 안전하게 이동할 수 있도록 돕는 네비게이션 명세입니다.
            </p>
          </div>
          <div className="knds-mb-300">
            <NavigationSandbox />
          </div>

          <CodeViewer
            title="하드웨어 사이드바 트리 및 액티브 엣지 명세"
            subtitle="Sidebar Navigation Tree & #AD1D1D Active Edge"
            codeBlocks={[
              {
                label: "HTML / 유틸리티",
                tag: "HTML",
                code: "<!-- 1. 사이드바 그룹 헤더 (접기/펼치기 토글) -->\n<div class=\"knds-nav-group-header knds-flex-row knds-justify-between knds-items-center knds-py-200 knds-cursor-pointer\">\n  <span class=\"knds-text-label-14-mono knds-font-bold knds-text-muted\">01. LAYOUT & GRID ARCHITECTURE</span>\n  <svg class=\"knds-chevron collapsed\" viewBox=\"0 0 24 24\" width=\"16\" height=\"16\"><path d=\"M7 10l5 5 5-5z\" fill=\"currentColor\" /></svg>\n</div>\n\n<!-- 2. 활성화(Active) 네비게이션 아이템 -->\n<div class=\"knds-nav-item active knds-flex-row knds-items-center knds-gap-200 knds-py-150 knds-px-200\">\n  <span class=\"knds-text-label-14-mono knds-bg-red knds-text-white knds-px-100 knds-py-050 knds-radius-sm\">1.1</span>\n  <span class=\"knds-text-label-16 knds-font-bold\">PC Split Screen Workspace</span>\n</div>\n\n<!-- 3. 일반(Inactive) 네비게이션 아이템 -->\n<div class=\"knds-nav-item knds-flex-row knds-items-center knds-gap-200 knds-py-150 knds-px-200 knds-cursor-pointer\">\n  <span class=\"knds-text-label-14-mono knds-bg-secondary knds-text-muted knds-px-100 knds-py-050 knds-radius-sm\">1.2</span>\n  <span class=\"knds-text-label-16 knds-text-muted\">Achromatic Color Token System</span>\n</div>\n\n<!-- 4. 비활성(Disabled / Planned) 아이템 -->\n<div class=\"knds-nav-item disabled knds-opacity-40 knds-py-150 knds-px-200\">\n  <span class=\"knds-text-label-16 knds-text-muted\">Mobile Screen Adaptive (준비중)</span>\n</div>"
              },
              {
                label: "React / TSX",
                tag: "TSX",
                code: "interface NavItemProps {\n  index: string;\n  title: string;\n  isActive?: boolean;\n  isDisabled?: boolean;\n  onClick?: () => void;\n}\n\nexport default function NavItem({ index, title, isActive, isDisabled, onClick }: NavItemProps) {\n  return (\n    <div\n      onClick={!isDisabled ? onClick : undefined}\n      className={`knds-nav-item knds-flex-row knds-items-center knds-gap-200 knds-py-150 knds-px-200 ${\n        isActive ? 'active' : ''\n      } ${isDisabled ? 'disabled knds-opacity-40' : 'knds-cursor-pointer'}`}\n    >\n      <span className={`knds-text-label-14-mono knds-px-100 knds-py-050 knds-radius-sm ${\n        isActive ? 'knds-bg-red knds-text-white' : 'knds-bg-secondary knds-text-muted'\n      }`}>\n        {index}\n      </span>\n      <span className={`knds-text-label-16 ${isActive ? 'knds-font-bold knds-text-primary' : 'knds-text-muted'}`}>\n        {title}\n      </span>\n    </div>\n  );\n}"
              },
              {
                label: "CSS Token Specifications",
                tag: "CSS",
                code: ".knds-nav-item {\n  position: relative;\n  transition: background-color 0.15s ease, color 0.15s ease;\n  border-left: 3px solid transparent;\n}\n.knds-nav-item:hover:not(.disabled) {\n  background-color: var(--color-bg-secondary);\n}\n.knds-nav-item.active {\n  background-color: var(--color-bg-secondary);\n  border-left-color: var(--color-functional-red);\n}"
              }
            ]}
            note="네비게이션 트리는 좌측 3px 레드 인디케이터를 통해 사용자가 현재 어느 기판 위치에 있는지 명확하게 안내합니다."
          />

          <HigSpecSection
            overview={{
              summary: '사용자가 복잡한 정보 체계 속에서 자신의 현재 위치를 혼동 없이 인지하고 계층 간을 빠르고 정확하게 이동하도록 돕는 네비게이션 트리 시스템입니다.',
              purpose: '과도한 중첩 메뉴가 유발하는 미로화 현상을 방지하고, 좌측 3px 기능성 레드 엣지(`border-left`)를 통해 현재 활성 공간을 명명백백히 가리킵니다.'
            }}
            anatomy={[
              { id: 'na-1', name: 'Navigation Group Header (.knds-nav-group-header)', tokenOrClass: 'font-weight: 700, chevron toggle', description: '카테고리 폴더를 열고 닫는 고대비 아크로매틱 그룹 타이틀' },
              { id: 'na-2', name: 'Active Indicator Item (.knds-nav-item.active)', tokenOrClass: 'border-left: 3px solid --color-functional-red', description: '현재 활성 페이지를 시각적으로 확정 짓는 좌측 3px 기능성 레드 엣지' },
              { id: 'na-3', name: 'Nested Sub-item (.knds-nav-subitem)', tokenOrClass: 'padding-left: var(--space-400)', description: '상위 그룹 하위에 속한 2뎁스 상세 항목을 나타내는 인덴트 계층' }
            ]}
            doDont={[
              { type: 'do', title: '현재 위치의 명시적 인디케이터 표지', description: '사용자가 어느 페이지에 체류 중인지 단 1초 만에 파악할 수 있도록 `.active` 클래스와 좌측 기능성 레드 엣지를 반드시 매칭하세요.', codeSnippet: '<div class="knds-nav-item active">현재 체류 페이지</div>' },
              { type: 'dont', title: '3단계 이상 깊은 중첩(3-Depth+) 네비게이션 금지', description: '메뉴 하위에 하위 메뉴, 그 하위에 또 하위 폴더가 열리는 트리 구조를 만들지 마세요. 사용자의 기억 한계를 초과하므로 2뎁스 이내로 수평화해야 합니다.', codeSnippet: '<!-- ❌ Avoid -->' }
            ]}
            interactions={[
              { state: 'Hover State (마우스 오버)', visualChange: '배경색이 `--color-bg-secondary`(`#F4F4F5`)로 전환되어 반응성 제공', functionalRole: '클릭 가능한 네비게이션 대상임을 안내하여 선택 정확도를 높임' },
              { state: 'Accordion Toggle (그룹 폴더 개폐)', visualChange: '우측 셰브론(Chevron) 아이콘 90도 회전 및 하위 목록 부드러운 슬라이드 애니메이션', functionalRole: '방대한 페이지 목록을 필요할 때만 펼쳐 보여줌으로써 좌측 패널 정보 과부하 방지' }
            ]}
            accessibility={[
              { category: 'Current Page ARIA Marker (`aria-current="page"`)', description: '현재 선택된 네비게이션 항목에는 시각적 레드 엣지 외에도 HTML `aria-current="page"` 속성을 반드시 부착하여 스크린 리더 사용자의 위치 파악을 지원하세요.' },
              { category: 'Keyboard Arrow Navigation (방향키 조작)', description: 'Tab 키 이동뿐 아니라 위/아래 방향키(`ArrowUp`/`ArrowDown`)를 통해 네비게이션 항목 간을 고속으로 순회할 수 있는 키보드 단축 탐색을 보장합니다.' }
            ]}
            tokens={[
              { name: '.knds-nav-item.active', defaultValue: 'background: var(--color-bg-secondary), border-left: 3px solid #AD1D1D', description: '선택된 네비게이션 항목의 스타일 공식' }
            ]}
            responsiveRules={[
              '모바일 Drawer 전환: 1200px 미만 화면에서는 사이드바 네비게이션이 화면 하단에서 솟아오르는 슬라이드 업 바텀 드로어(Bottom Drawer)로 자연스럽게 전환됩니다.'
            ]}
          />
        </section>
      )}

      {/* 12. Split Screen */}
      {activeChapter === 12 && (
        <section id="ch-12">
          <div className="knds-mb-300">
            <p className="knds-text-copy-14 knds-text-muted">
              화면 분할 철학은 대칭 분리를 타파하고 1:3 비율(25:75)의 비대칭 스플릿 스크린을 기본 표준으로 채택한다.
            </p>
          </div>
          <div className="knds-mb-300">
            <GoldenRatioSandbox />
          </div>
          <div className="knds-mb-300">
            <SplitSandbox defaultMode="desktop" />
          </div>

          <CodeViewer
            title="25:75 비대칭 스플릿 레이아웃 명세"
            subtitle="Asymmetric Split Screen & Draggable Splitter Bar"
            codeBlocks={[
              {
                label: "HTML / 유틸리티",
                tag: "HTML",
                code: "<!-- 25:75 비율의 데스크톱 스플릿 스크린 메인 레이아웃 -->\n<div class=\"knds-app knds-flex-row knds-w-full knds-h-screen knds-overflow-hidden\">\n  \n  <aside class=\"knds-sidebar knds-w-1/4 knds-border-right knds-p-400 knds-flex-col knds-justify-between\" style=\"min-width: 280px;\">\n    <nav class=\"knds-flex-col knds-gap-200\">\n      <span class=\"knds-text-label-14-mono knds-text-red\">KNDS SYSTEM TREE</span>\n      <ul class=\"knds-list-none knds-p-0 knds-m-0 knds-flex-col knds-gap-100\">\n        <!-- 네비게이션 아이템들 -->\n      </ul>\n    </nav>\n    <div class=\"knds-panel knds-p-200\">\n      <span class=\"knds-text-label-14-mono knds-text-muted\">STATUS: ONLINE 99.9%</span>\n    </div>\n  </aside>\n  \n  <div class=\"knds-splitter knds-w-[4px] knds-cursor-col-resize knds-bg-border hover:knds-bg-red knds-transition-colors\"></div>\n  \n  <main class=\"knds-main-view knds-w-3/4 knds-flex-1 knds-overflow-y-auto knds-p-600\">\n    <div class=\"knds-main-content knds-max-w-4xl knds-mx-auto\">\n      <h1 class=\"knds-text-heading-32 knds-font-bold knds-mb-200\">Workspace Dashboard</h1>\n      <p class=\"knds-text-copy-14 knds-text-muted\">우측 75% 영역은 실제 데이터 작업과 복잡한 표면 조작이 이루어지는 독립 도화지입니다.</p>\n    </div>\n  </main>\n\n</div>"
              },
              {
                label: "React / TSX",
                tag: "TSX",
                code: "export default function SplitLayout({ sidebar, children }: { sidebar: React.ReactNode; children: React.ReactNode }) {\n  const [sidebarWidth, setSidebarWidth] = React.useState(25); // Percentage\n  \n  return (\n    <div className=\"knds-flex-row knds-w-full knds-h-screen knds-overflow-hidden knds-bg-primary\">\n      <aside style={{ width: `${sidebarWidth}%`, minWidth: '280px', maxWidth: '40%' }} className=\"knds-border-right knds-p-400 knds-overflow-y-auto\">\n        {sidebar}\n      </aside>\n      <div className=\"knds-splitter knds-w-[4px] knds-cursor-col-resize knds-bg-border hover:knds-bg-red\" />\n      <main style={{ width: `${100 - sidebarWidth}%` }} className=\"knds-flex-1 knds-overflow-y-auto knds-p-600\">\n        {children}\n      </main>\n    </div>\n  );\n}"
              },
              {
                label: "CSS Token Specifications",
                tag: "CSS",
                code: ".knds-app {\n  display: flex;\n  flex-direction: row;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n.knds-splitter {\n  width: 4px;\n  background-color: var(--color-border-default);\n  cursor: col-resize;\n  transition: background-color 0.15s ease;\n  z-index: 20;\n}\n.knds-splitter:hover, .knds-splitter:active {\n  background-color: var(--color-functional-red);\n}"
              }
            ]}
            note="데스크톱에서 좌측 25% 기판과 우측 75% 작업 도화지를 분리하여 정보 탐색과 실행 영역을 명확히 구분합니다."
          />

          <HigSpecSection
            overview={{
              summary: '대칭적 1:1 분할을 타파하고, 25(좌측 제어 기판) : 75(우측 작업 도화지)의 1:3 비대칭 스플릿 분할을 기본 표준으로 하는 데스크톱 워크스페이스 구조입니다.',
              purpose: '좌측 패널에서 탐색과 인덱싱을 고정하고 우측 75%의 광활한 영역에 본문 데이터와 조작 집중도를 몰입시켜, 인지 분산 없는 최고의 생산성을 달성합니다.'
            }}
            anatomy={[
              { id: 'sp-pc-1', name: 'Asymmetric 25% Control Sidebar (.knds-sidebar)', tokenOrClass: 'width: 25% / min-width: 280px', description: '네비게이션 트리, 시스템 상태, 계층 인덱스를 수용하는 좌측 하드웨어 기판' },
              { id: 'sp-pc-2', name: '75% Main Content Workspace (.knds-main-view)', tokenOrClass: 'width: 75% / overflow-y: auto', description: '사용자의 실제 본문 작업 및 데이터 제어가 이루어지는 광활한 우측 독립 도화지' },
              { id: 'sp-pc-3', name: 'Draggable Splitter Bar (.knds-splitter)', tokenOrClass: 'width: 4px, cursor: col-resize', description: '두 영역의 경계선을 분리하며 사용자가 마우스 드래그로 너비를 미세 조정할 수 있는 4px 액센트 바' }
            ]}
            doDont={[
              { type: 'do', title: '1:3 (25:75) 비대칭 스플릿 비율 원칙 고수', description: '데스크톱 화면에서 좌측 패널은 25%(`min-width: 280px` ~ `max-width: 400px`), 우측 본문은 75% 비율을 엄격히 유지하여 시각적 안정감을 확립하세요.', codeSnippet: '<aside class="knds-w-1/4">좌측 탐색 기판</aside>\n<main class="knds-w-3/4">우측 본문 도화지</main>' },
              { type: 'dont', title: '50:50 대칭 분할 및 4개 이상의 과도한 수직 컬럼 분열 금지', description: '50:50 비율 분할은 화면의 주인공(Main View)을 모호하게 만들며, 4개 이상으로 쪼개진 수직 컬럼은 뷰포트 여백을 훼손하므로 금지됩니다.', codeSnippet: '<!-- ❌ Avoid -->\n<div class="knds-w-1/2">Side</div>\n<div class="knds-w-1/2">Main</div>' }
            ]}
            interactions={[
              { state: 'Splitter Hover (경계 바 진입)', visualChange: '4px 분할 바의 색상이 `--color-border-default`에서 `--color-functional-red`(`#AD1D1D`)로 즉시 모핑', functionalRole: '좌우 패널 너비 조정을 위해 드래그 가능한 제어 축선(Handle)임을 직관적으로 표시' },
              { state: 'Drag Resize (실시간 영역 조정)', visualChange: '마우스 드래그 시 좌우 패널 너비가 실시간(`requestAnimationFrame`)으로 자연스럽게 리사이징', functionalRole: '사용자가 작업 콘텐츠나 코딩 뷰어의 너비에 맞춰 공간을 최적화할 수 있도록 지원' }
            ]}
            accessibility={[
              { category: 'Keyboard Resizing (방향키 너비 조정)', description: '마우스 드래그를 사용할 수 없는 키보드 사용자를 위해 분할 바(`.knds-splitter`)가 포커스(`tabindex="0"`)를 받을 수 있도록 하고, `ArrowLeft`/`ArrowRight` 키로 10px 단위 조정을 지원하세요.' },
              { category: 'Minimum Width Safeguard (최소 너비 방어)', description: '사이드바가 `280px` 미만으로 축소되거나 메인 영역이 `600px` 미만으로 찌그러지지 않도록 CSS `min-width` 방어막을 설정하여 텍스트 겹침 장애를 예방합니다.' }
            ]}
            tokens={[
              { name: '.knds-sidebar min-width', defaultValue: '280px (최소 너비 제한)', description: '사이드바 글자가 뭉개지지 않기 위한 최소 하강 한계치' },
              { name: '.knds-main-content max-width', defaultValue: '880px ~ 1200px', description: '본문 텍스트 한 줄당 가독성 최적 글자 수를 위한 중앙 패딩 제한' }
            ]}
            responsiveRules={[
              '데스크톱 레이아웃 (>= 1200px): 25:75 스플릿 스크린이 상시 유지됩니다.',
              '모바일 임계점 (< 1200px): 좌우 분리 바(.knds-splitter)는 소멸하며, 좌측 사이드바는 접히고 우측 메인 뷰가 100% 화면을 차지합니다.'
            ]}
          />
        </section>
      )}

      {/* 13. Mobile Screen */}
      {activeChapter === 13 && (
        <section id="ch-13">
          <div className="knds-mb-300">
            <p className="knds-text-copy-14 knds-text-muted">
              모바일 환경에서는 비대칭 가로 분할이 무력화되고 위아래 100% 수직 스택으로 재배치된다.
            </p>
          </div>
          <div className="knds-mb-300">
            <MobileNavSandbox />
          </div>
          <div className="knds-mb-300">
            <h3 className="knds-text-label-16 knds-mb-100">모바일 스택 및 반응형 레이아웃 복원 가이드라인</h3>
            <ul className="knds-list-disc knds-text-copy-14">
              <li><strong>수직 위계적 스택킹(Vertical Stacking):</strong> 뷰포트 크기가 수축함에 따라 두 면은 즉각적으로 수직 방향으로 정렬되어 위에서 아래로 스택킹된다.</li>
              <li><strong>콘텐츠 최소 크기 타겟:</strong> 스택 카드는 어떠한 경우에도 너비 또는 높이 기준 220dp 미만으로 축소되지 않도록 최소 공간 제한치를 확보한다.</li>
            </ul>
          </div>
          <div className="knds-mb-300">
            <SplitSandbox defaultMode="mobile" />
          </div>

          <HigSpecSection
            overview={{
              summary: '뷰포트 너비 1200px 미만에서 25:75 가로 분할을 무력화하고 100% 수직 스택(Vertical Stack)으로 구조를 재구획하는 모바일 적응 시스템입니다.',
              purpose: '제한된 모바일 화면 폭(360px~430px)에서 수평 스크롤이나 요소 압축으로 인한 데이터 파손을 방지하고, 모든 조작 요소를 엄지손가락 도달 범위 내에 100% 안착시킵니다.'
            }}
            anatomy={[
              { id: 'mo-st-1', name: 'Mobile Header Toggle Bar (.knds-mobile-header)', tokenOrClass: 'height: 56px, display: none (PC) / flex (Mobile)', description: '모바일 화면 최상단에 고정되어 사이드바를 바텀 드로어로 호출하는 트리거 바' },
              { id: 'mo-st-2', name: '100% Full Width Stack Container (.knds-main-view)', tokenOrClass: 'width: 100% (on mobile)', description: '모든 데이터 표면과 패널이 상하 수직 흐름으로 안전하게 재배치되는 독립 도화지' },
              { id: 'mo-st-3', name: 'Bottom Drawer Sheet (.knds-bottom-drawer)', tokenOrClass: 'position: fixed, bottom: 0', description: '메뉴 버튼 클릭 시 하단에서 부드럽게 상승하여 네비게이션 트리를 노출하는 슬라이딩 시트' }
            ]}
            doDont={[
              { type: 'do', title: '모바일 터치 타겟 최소 44x44px(권장 48px) 엄수', description: '모바일 스택 전환 시 모든 상호작용 버튼과 네비게이션 항목은 최소 44px 이상의 수직 높이를 유지하여 터치 오버랩(Touch overlap) 오류를 방지하세요.', codeSnippet: '<button class="knds-btn-primary knds-w-full knds-btn-md">TOUCH TARGET OK (44px+)</button>' },
              { type: 'dont', title: '모바일 뷰포트를 초과하는 고정 너비 및 수평 스크롤 강제 금지', description: '모바일 화면 너비를 넘어서는 고정 너비(예: `width: 600px`)를 방치하여 좌우 수평 스크롤 바가 나타나게 하지 마세요. 사용자의 읽기 흐름이 절단됩니다.', codeSnippet: '<!-- ❌ Avoid -->' }
            ]}
            interactions={[
              { state: 'Drawer Slide-up (하단 메뉴 호출)', visualChange: '배경 암전과 함께 하단에서 시트가 상승(`transform: translateY(0)`)하며 상단에 드래그 핸들 노출', functionalRole: '한 손 조작(One-handed use) 환경에서 화면 상단 끝까지 손가락을 뻗지 않고도 메뉴에 접근' },
              { state: 'Swipe Down Dismiss (스와이프 닫기)', visualChange: '시트 상단 드래그 또는 아래로 스와이프 제스처 시 하단으로 다시 매끄럽게 퇴장', functionalRole: '직관적인 물리 법칙 제스처를 통해 부드러운 화면 이탈 경험 제공' }
            ]}
            accessibility={[
              { category: 'Thumb Zone Optimization (엄지 도달 영역 최적화)', description: '화면 하단 1/3 영역에 핵심 액션(`Primary Button`)을 집중 배치하여, 모바일 기기 파지 시 엄지손가락 피로도와 조작 오류율을 극소화합니다.' },
              { category: 'No Viewport Pinch-Zoom Lock (확대 차단 금지)', description: '저시력 사용자가 화면을 터치 제스처로 확대할 수 있도록 `<meta name="viewport" content="... user-scalable=no">` 설정을 금지하고 자유로운 줌인/아웃을 보장하세요.' }
            ]}
            tokens={[
              { name: 'Mobile Breakpoint', defaultValue: 'max-width: 1199px', description: '스플릿 스크린에서 수직 모바일 스택으로 전환되는 미디어 쿼리 분기점' }
            ]}
            responsiveRules={[
              '스마트폰 뷰 (< 768px): 여백은 --space-200(16px)으로 최적화되며, 모달은 하단 바텀 시트로 적응합니다.',
              '태블릿 뷰 (768px ~ 1199px): 100% 너비 수직 스택을 유지하되, 내부 카드 그리드는 2열(2-Columns)로 유연하게 펼쳐집니다.'
            ]}
          />
        </section>
      )}

      {/* 14. QA & Checklist */}
      {activeChapter === 14 && (
        <section id="ch-14">
          <div className="knds-mb-300">
            <p className="knds-text-copy-14 knds-text-muted">
              이 디자인 가이드라인이 프로젝트 소스코드에서 정상적으로 완수되고 있는지 판단하기 위한 전방위 디자인 검수(QA) 기준 목록이다.
            </p>
          </div>
          <div className="knds-mb-300">
            <ul className="knds-list-disc knds-text-copy-14">
              <li><strong>하드코딩 배제 검수:</strong> 모든 여백 및 내부 패딩 코드가 기하학적인 정수형 픽셀 단위로 선언되어 있지 않고, 반드시 --space-* CSS 변수 및 .knds-p-*, .knds-m-* 유틸리티 태그로 대체되었는지 확인한다.</li>
              <li><strong>청사진 그리드 대비:</strong> 배경 격자선의 명도 투명도 수치가 10% - 20% 임계를 넘지 않는지 검측한다.</li>
              <li><strong>터치 영역 확보:</strong> 48x48dp 이상을 확보하여 모바일 터치 누락을 방지한다.</li>
              <li><strong>펑셔널 레드 위계 통제:</strong> 펑셔널 레드 색상이 적용된 컴포넌트가 과도하게 남발되지 않고 화면당 최대 3개 이하로 통제되고 있는지 체크한다.</li>
            </ul>
          </div>
          <div className="knds-mb-300">
            <QASandbox />
          </div>

          <HigSpecSection
            overview={{
              summary: '디자인 시스템 명세와 실제 프로덕션 소스코드 간의 1:1 완벽한 무결성(Zero-Deviance)을 보증하기 위한 자동 및 수동 검수 프로토콜입니다.',
              purpose: 'CSS 하드코딩이나 임의의 색상 남발로 인한 디자인 열화를 차단하고, 크로스 디바이스/브라우저 환경에서 동일한 정밀 하드웨어 질감과 접근성을 유지합니다.'
            }}
            anatomy={[
              { id: 'qa-1', name: 'Token Compliance Verifier (`--space-*` / `--color-*`)', tokenOrClass: 'knds.css Token Verifier', description: 'CSS 변수 미선언 하드코딩 요소(`px`, `HEX` 등)를 탐지하여 빌드를 차단하는 정적 검수 수칙' },
              { id: 'qa-2', name: 'Functional Red Frequency Controller (`#AD1D1D`)', tokenOrClass: 'Count <= 3 per view', description: '단일 화면 내에서 펑셔널 레드 포인트가 3개를 초과하지 않는지 감시하는 시각 위계 방어선' }
            ]}
            doDont={[
              { type: 'do', title: '배포 전 5대 핵심 QA 준칙 체크리스트 100% 완수', description: '1. 토큰 무결성 / 2. 터치 타겟 44px+ / 3. WCAG AA 대비 / 4. 기능성 레드 3개 제한 / 5. 1199px 반응형 스택 검증을 모두 완료한 후 프로덕션 배포를 승인하세요.', codeSnippet: 'npm run test:qa-checklist' },
              { type: 'dont', title: '검증 단계 생략 및 임의 인라인 핫픽스 배포 절대 금지', description: '긴급 배포라는 명목으로 HTML 내부에 인라인 스타일(`style="color:red"`, `style="margin:13px"`)을 삽입하지 마세요. 디자인 시스템의 단일 진실 공급원(SSOT)이 붕괴됩니다.', codeSnippet: '<!-- ❌ Avoid inline styles or arbitrary magic numbers -->' }
            ]}
            interactions={[
              { state: 'QA CI/CD Pipeline (자동 검증 루틴)', visualChange: '소스코드 커밋 및 PR 생성 시 스타일 린터(Linter)와 토큰 스캐너가 하드코딩 여부를 자동 파악', functionalRole: '디자인 규정 위반 코드가 메인 브랜치에 병합되는 것을 원천 차단' },
              { state: 'Live Visual Regression (시각 회귀 테스팅)', visualChange: '데스크톱/태블릿/모바일 뷰포트별 스크린샷 자동 대조 후 픽셀 오차(`0.1%` 초과 시) 경고 표출', functionalRole: '예기치 않은 CSS 상속으로 인한 버튼 형태왜곡 및 베벨 깨짐 현상 방지' }
            ]}
            accessibility={[
              { category: 'WCAG 2.1 AA Full Audit (전수 접근성 감사)', description: '모든 페이지 배포 전 스크린 리더(VoiceOver/NVDA) 순회 테스트 및 키보드 포커스(`Tab`/`Enter`/`ESC`) 트랩 검증을 의무적으로 통과해야 합니다.' },
              { category: 'Color Contrast Verification (명도 대비 스캔)', description: '일반 텍스트 `4.5:1`, 대형 텍스트/UI 경계선 `3:1` 대비 기준이 다크 모드 전환 시에도 유지되는지 자동 측정기를 통해 확인하세요.' }
            ]}
            tokens={[
              { name: 'QA Integrity Matrix', defaultValue: '100% Token Compliance', description: '디자인 시스템과 구현 코드 간 1:1 무결성 보증 지표' }
            ]}
            responsiveRules={[
              '크로스 브라우저 QA: Chrome, Safari, Firefox, Edge 및 iOS/Android 네이티브 웹뷰에서 동일한 베벨 및 블러를 렌더링하는지 검증합니다.'
            ]}
          />
        </section>
      )}

      {/* 15. Credits */}
      {activeChapter === 15 && (
        <section id="ch-15">
          <div className="knds-mb-400 knds-text-center knds-py-400">
            <span className="knds-text-label-14-mono knds-text-red knds-mb-150 knds-inline-block">
              KNDS CO-CREATION LABS
            </span>
            <h2 className="knds-text-heading-32 knds-mb-200">
              System Creators & Inspirations
            </h2>
            <p className="knds-text-copy-14 knds-text-muted knds-max-w-2xl knds-mx-auto">
              물리 하드웨어의 감각을 디지털 스크린으로 확장하는 여정을 함께한 기여자입니다.
            </p>
          </div>

          <div className="knds-grid knds-grid-cols-1 knds-md:grid-cols-2 knds-gap-300 knds-mb-400">

            {/* User Card */}
            <div className="knds-panel knds-grid-bg knds-relative knds-flex-col knds-justify-between knds-p-300 knds-min-h-[200px]">
              <div className="knds-content-relative">
                <div className="knds-flex-row knds-justify-between knds-items-start knds-mb-200">
                  <span className="knds-text-label-14-mono knds-text-red knds-bg-red-light knds-px-100 knds-py-050 knds-radius-sm">LEAD ARCHITECT</span>
                  <span className="knds-text-label-14-mono knds-text-muted">01</span>
                </div>
                <h3 className="knds-text-heading-24 knds-font-bold knds-mb-100">Jaewon Lee</h3>
                <p className="knds-text-copy-14 knds-text-muted">
                  시스템 기획 및 검증 총괄.
                </p>
              </div>
              <div className="knds-content-relative knds-border-top knds-pt-150 knds-mt-200 knds-flex-row knds-justify-between knds-items-center">
              </div>
            </div>
          </div>

          <HigSpecSection
            overview={{
              summary: 'KNDS(Physical-Digital Fusion Design System)의 발전과 진화를 이끄는 아키텍처 거버넌스 및 기여자 명세서입니다.',
              purpose: '디터 람스(Dieter Rams)의 물리적 하드웨어 디자인 철학과 디지털 스크린의 동역학적 상호작용을 융합한 KNDS의 단일 진실 공급원(SSOT) 유지 관리 체계를 규정합니다.'
            }}
            anatomy={[
              { id: 'cr-1', name: 'Lead System Architect', tokenOrClass: 'Jaewon Lee (Core Maintainer)', description: '디자인 시스템 코어 설계, 토큰 거버넌스 관리 및 아크로매틱 고대비 물리 표면 렌더링 총괄' },
              { id: 'cr-2', name: 'Co-Creation & Governance Flow', tokenOrClass: 'GitHub PR / Design Token Review', description: '새로운 컴포넌트 추가 및 CSS 변수 수정 시 5대 QA 준칙을 거쳐 병합되는 디자인 거버넌스 파이프라인' }
            ]}
            doDont={[
              { type: 'do', title: '거버넌스 승인 절차를 거친 공식 컴포넌트 활용', description: '모든 프로젝트 팀원은 사전 정의된 `.knds-*` 유틸리티와 공식 디자인 시스템 컴포넌트를 우선적으로 임포트하여 화면을 조립하세요.', codeSnippet: 'import { HigSpecSection, CodeViewer } from "./components";' },
              { type: 'dont', title: '개인 편의에 따른 임의의 로컬 컴포넌트 파편화 금지', description: '공동의 디자인 토큰을 무시하고 개별 컴포넌트 내에서 스타일을 재정의(`styled-components` 하드코딩 등)하여 파편화하지 마세요.', codeSnippet: '<!-- ❌ Avoid building one-off custom buttons outside KNDS -->' }
            ]}
            interactions={[
              { state: 'Community Request (컴포넌트 제안)', visualChange: '신규 디자인 패턴 필요 시 토큰 샌드박스에서 검증 후 PR 제출', functionalRole: '현장 실무의 요구사항을 반영하면서도 전체 아크로매틱 톤앤매너의 일관성을 방어' }
            ]}
            accessibility={[
              { category: 'Long-term System Evolution (지속 가능한 진화)', description: '향후 OS 네이티브 고대비 모드나 공간 컴퓨팅(Spatial Computing) 3D 뎁스 환경으로 확장되더라도 현재의 베벨 및 블러 토큰 구조가 100% 호환되도록 설계되었습니다.' }
            ]}
            tokens={[
              { name: 'KNDS System Version', defaultValue: 'v2.4.0-Stable', description: '현재 활성화된 물리-디지털 융합 디자인 시스템 릴리즈 스펙' }
            ]}
            responsiveRules={[
              '디자인 가이드라인 최적화: 본 공식 가이드라인 페이지는 데스크톱에서 모바일에 이르기까지 모든 해상도에서 최고의 구독성(Readability)을 제공합니다.'
            ]}
          />
        </section>
      )}

    </div>
  );
}
