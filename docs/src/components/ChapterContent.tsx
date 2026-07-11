import React from 'react';
import HigSpecSection from './HigSpecSection';

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
          <div className="knds-mb-400" style={{ textAlign: 'center', padding: 'var(--space-600) 0' }}>
            <span className="knds-text-label-14-mono knds-text-red knds-mb-200" style={{ display: 'inline-block' }}>
              PHYSICAL-DIGITAL FUSION DESIGN SYSTEM
            </span>
            <h1 className="knds-mb-300" style={{ fontSize: '64px', lineHeight: '1.1', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--color-text-primary)' }}>
              물리적 촉각을 지닌<br />디지털 설계 언어
            </h1>
            <p className="knds-text-copy-14 knds-text-muted" style={{ fontSize: '18px', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
              디터 람스의 철학과 하드웨어적 정밀함을 웹 환경에 완벽히 이식한 통합 디자인 시스템입니다. 복잡한 스타일링 없이, 선언적인 구조와 엄격한 여백만으로 극한의 정밀함을 달성하세요.
            </p>
            <div className="knds-mt-400 knds-flex-row knds-justify-center" style={{ gap: '16px' }}>
              <a href="https://github.com/knoblab/KNDS" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="knds-btn-primary knds-btn-md" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </button>
              </a>
              <a href="/editor/" style={{ textDecoration: 'none' }}>
                <button className="knds-secondary-btn knds-btn-md" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                  Open Editor
                </button>
              </a>
            </div>
          </div>

          <div className="knds-mb-400">
            <div className="knds-panel knds-grid-bg knds-flex-row knds-items-center knds-justify-center knds-gap-300 knds-flex-wrap" style={{ padding: 'var(--space-400)' }}>
              <div className="knds-content-relative knds-flex-shrink-0" style={{ width: '240px', height: '240px' }}>
                <img src="/Px7S3.webp" alt="Design Motif" className="knds-w-full knds-h-full knds-radius-lg knds-shadow-bevel" style={{ objectFit: 'cover' }} />
              </div>
              <div className="knds-content-relative">
                <p className="knds-text-label-14-mono knds-text-muted" style={{ lineHeight: '1.8' }}>
                  <strong className="knds-text-red" style={{ fontSize: '12px' }}>DESIGN MOTIF</strong><br />
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
            anatomy={[
              { id: 'ph-1', name: 'Physical Hardware Bevels (.knds-panel)', tokenOrClass: '--shadow-hardware-bevel', description: '물리적 음각과 양각을 모사하여 빛을 반사하는 다층 박스 섀도우' },
              { id: 'ph-2', name: 'Structural Minimalism Grid (.knds-grid-bg)', tokenOrClass: '--blueprint-grid-pattern', description: '장식을 배제하고 기능적 위치를 증명하는 기하학적 청사진 도면' }
            ]}
            doDont={[
              { type: 'do', title: '설계의 정직성과 기능성 집중', description: '모든 요소는 사용자의 조작(Click, Input, Scroll)과 직결되거나 명확한 정보 위계를 가질 때만 렌더링하십시오.', codeSnippet: '<div class="knds-panel knds-grid-bg">기능적 패널</div>' },
              { type: 'dont', title: '불필요한 과장 장식 및 장식성 입체 효과 금지', description: '의미 없는 3D 회전이나 유채색 네온사인 글로우를 남발하여 하드웨어적 정직성을 흐리지 마십시오.', codeSnippet: '<!-- ❌ Avoid -->\n<div style="box-shadow: 0 0 50px pink;">...</div>' }
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
            anatomy={[
              { id: 'ar-1', name: 'Lexical Scanner Engine (compiler/scanner.js)', tokenOrClass: 'Regex Tokenizer (~0.5ms)', description: 'AST 파싱의 무거운 부하를 제거하고 정규식(/[^<>"\'`\\s,;{}()]+/g)을 통해 소스 텍스트 스트림에서 유효한 유틸리티 후보만 초고속으로 추출합니다.' },
              { id: 'ar-2', name: 'Arbitrary Value Extractor (knds-prop-[value])', tokenOrClass: 'knds-w-[342px] → width: 342px;', description: '사전에 정의되지 않은 너비, 높이, 색상, 간격, 그리드 컬럼 등을 동적 파싱하여 즉시 CSS 규칙과 이스케이프 클래스로 생성합니다.' },
              { id: 'ar-3', name: 'Variant Modifier Chain (variants:coreClass)', tokenOrClass: 'hover:dark:sm:knds-...', description: '상태 수식어(hover, focus, active)와 반응형 브레이크포인트(sm, md, lg) 및 다크 모드(dark)를 정확한 Media Query와 Selector로 중첩 래핑합니다.' }
            ]}
            doDont={[
              { type: 'do', title: '프로덕션 빌드 시 JIT 컴파일러 또는 Minify 옵션 활성화', description: '실제 마크업에서 사용된 15~30여 개 클래스만 정렬하여 출력하는 JIT CLI(`knds -o output.min.css --minify`)를 사용하면 번들 용량을 4.5KB 미만으로 최적화할 수 있습니다.', codeSnippet: 'npx knds -o dist/output.min.css --minify' },
              { type: 'dont', title: 'knds.config.js의 content 경로 누락 방지', description: 'JIT 컴파일러가 유틸리티 클래스를 감지할 수 있도록 HTML, JSX, TSX, Vue 파일의 경로가 `content` 배열에 정확히 지정되어야 합니다.', codeSnippet: '<!-- ❌ Avoid missing glob patterns -->\ncontent: ["./src/**/*.tsx"] // HTML 파일이 누락되면 index.html의 클래스가 스캔되지 않음' }
            ]}
            tokens={[
              { name: 'knds.config.js # prefix', defaultValue: "'knds-'", description: '클래스 네임스페이스 충돌 방지 접두사 설정' },
              { name: 'knds.config.js # theme.extend', defaultValue: 'Deep Merge Registry', description: '기본 Knoblab 아크로매틱 토큰을 확장하거나 커스텀 컬러/여백 추가' }
            ]}
            responsiveRules={[
              'HMR 의존성 감지: PostCSS 8 플러그인(`postcss-knds`)은 content 경로 내 모든 파일을 PostCSS dependency로 등록하여, 소스 파일 수정 시 15ms 만에 증분 빌드 및 실시간 브라우저 갱신을 실행합니다.'
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
              프로덕션 웹앱에서 임의 값(`[...]`), 반응형 수식어(`hover:`, `sm:`), 그리고 번들 용량 최소화(4.5KB)를 누리려면 NPM 패키지와 CLI 바이너리를 사용하십시오.
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
              <div style={{ width: '100%', maxWidth: '320px', border: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-bg-primary)', position: 'relative', overflow: 'hidden' }}>
                <aside className="knds-sidebar" style={{ width: '100%', borderRight: 'none', minHeight: '100%' }}>
                  <div className="knds-content-relative knds-p-300">
                    <nav>
                      <span className="knds-text-label-14-mono knds-text-muted knds-border-bottom knds-pb-100 knds-mb-100 knds-font-bold" style={{ display: 'block' }}>
                        GUIDELINES INDEX
                      </span>
                      <div className="knds-mb-200">
                        <div className="knds-nav-group-header">
                          <span>Intro & Architecture</span>
                          <svg className="knds-chevron" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg>
                        </div>
                        <div className="knds-nav-item">
                          <div className="knds-flex-row knds-items-center knds-gap-150 knds-overflow-hidden knds-w-full">
                            <span className="knds-text-label-14-mono knds-text-center knds-font-bold" style={{ backgroundColor: 'var(--color-border-default)', color: 'var(--color-text-secondary)', padding: '4px 8px', borderRadius: '2px', minWidth: '32px' }}>01</span>
                            <span className="knds-text-label-16">Philosophy</span>
                          </div>
                        </div>
                        <div className="knds-nav-item active">
                          <div className="knds-flex-row knds-items-center knds-gap-150 knds-overflow-hidden knds-w-full">
                            <span className="knds-text-label-14-mono knds-text-center knds-font-bold" style={{ backgroundColor: 'var(--color-functional-red)', color: 'var(--color-bg-primary)', padding: '4px 8px', borderRadius: '2px', minWidth: '32px' }}>02</span>
                            <span className="knds-text-label-16">System Architecture</span>
                          </div>
                        </div>
                      </div>
                    </nav>
                    
                    {/* 출처 표시 미리보기 */}
                    <div className="knds-mt-400 knds-pt-200 knds-border-top" style={{ marginTop: '32px', paddingTop: '16px' }}>
                      <div className="knds-text-label-14-mono knds-text-muted knds-mb-050">
                        <a href="https://github.com/knoblab/KNDS" target="_blank" rel="noreferrer"
                          style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
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
            <div className="knds-code-block knds-selectable" style={{ whiteSpace: 'pre-wrap' }}>
              {`<div class="knds-mt-400 knds-pt-200 knds-border-top" style="margin-top: 32px; padding-top: 16px;">
  <div class="knds-text-label-14-mono knds-text-muted knds-mb-050">
    <a href="https://github.com/knoblab/KNDS" target="_blank"
      style="color: var(--color-text-secondary); text-decoration: none; transition: color 0.2s;"
      onmouseover="this.style.color='var(--color-text-primary)'"
      onmouseout="this.style.color='var(--color-text-secondary)'">View on GitHub ↗</a>
  </div>
  <div class="knds-text-label-14-mono knds-text-muted">
    Made with KNDS
  </div>
</div>`}
            </div>
          </div>

          <HigSpecSection
            anatomy={[
              { id: 'in-1', name: 'CDN & Starter Templates', tokenOrClass: 'template/starter-html & template/starter-vite', description: '단 한 줄의 link 태그나 GitHub 템플릿 클론으로 즉각 구동되는 초경량 셋업' }
            ]}
            doDont={[
              { type: 'do', title: 'GitHub Starter Template 활용', description: '신규 프로젝트 시작 시 저장소의 template/starter-vite 또는 template/starter-html 폴더를 복사하여 가장 빠른 보일러플레이트를 구성하십시오.', codeSnippet: 'cp -r template/starter-vite my-app' },
              { type: 'dont', title: 'knds.css 내부 코드를 무단 수정하여 파편화 금지', description: '코어 CSS를 직접 수정하지 않고 CSS Custom Properties(:root 오버라이드)를 통해 안전하게 커스텀하십시오.', codeSnippet: '<!-- ❌ Avoid -->' }
            ]}
            tokens={[
              { name: 'Package Version', defaultValue: 'v1.0.0 (Pre-release)', description: 'KNDS 공식 배포 패키지 및 CDN 버전 관리' }
            ]}
            responsiveRules={[
              '제로 번들 부하: CDN 사용 시 Gzip 압축 기준 8KB 미만의 극소 용량으로 초기 페이지 로딩 속도를 극대화합니다.'
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
          <div className="knds-bg-secondary knds-border knds-p-300 knds-flex-col knds-gap-200 knds-mb-300" style={{ backgroundImage: 'var(--blueprint-grid-pattern)', backgroundSize: 'var(--space-300) var(--space-300)' }}>
            <div className="knds-flex-row knds-gap-100">
              <div style={{ width: 'var(--space-100)', height: 'var(--space-400)', backgroundColor: 'var(--color-functional-red)' }}></div>
              <span className="knds-text-label-14-mono knds-text-red">--space-100 (8px)</span>
            </div>
            <div className="knds-flex-row knds-gap-200">
              <div style={{ width: 'var(--space-200)', height: 'var(--space-400)', backgroundColor: 'var(--color-functional-red)' }}></div>
              <span className="knds-text-label-14-mono knds-text-red">--space-200 (16px)</span>
            </div>
            <div className="knds-flex-row knds-gap-300">
              <div style={{ width: 'var(--space-300)', height: 'var(--space-400)', backgroundColor: 'var(--color-functional-red)' }}></div>
              <span className="knds-text-label-14-mono knds-text-red">--space-300 (24px)</span>
            </div>
          </div>
          <div className="knds-mb-300">
            <GridSandbox />
          </div>

          <HigSpecSection
            anatomy={[
              { id: 'sp-1', name: 'Blueprint Grid Canvas (.knds-grid-bg)', tokenOrClass: '--blueprint-grid-pattern', description: '24px x 24px 간격의 하이 테크닉 청사진 그리드 배경 도화지' },
              { id: 'sp-2', name: 'Spacing Utilities (.knds-p-*, .knds-m-*)', tokenOrClass: '--space-100 to --space-800', description: '8px 배수에 기반한 기하학적 패딩 및 마진 클래스' }
            ]}
            doDont={[
              { type: 'do', title: '8px 기하학적 여백 스케일 사용', description: '여백은 항상 --space-100(8px), --space-200(16px), --space-300(24px) 등의 표준 스케일을 준수하여 요소를 배치하십시오.', codeSnippet: '<div class="knds-p-300 knds-gap-200">...</div>' },
              { type: 'dont', title: '비정형 임의 픽셀 하드코딩 금지', description: '7px, 13px 등 비표준 픽셀을 인라인 스타일이나 임의 CSS로 부여하면 시각적 리듬이 깨지게 됩니다.', codeSnippet: '<!-- ❌ Avoid -->\n<div style="padding: 13px; margin-top: 27px;">...</div>' }
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

          <details className="knds-mt-200 knds-cursor-pointer knds-border-top" style={{ paddingTop: '16px' }}>
            <summary className="knds-text-label-14-mono knds-text-muted knds-font-bold">[+] 타이포그래피 구현 코드 보기</summary>
            <div className="knds-code-block knds-selectable knds-mt-100" style={{ whiteSpace: 'pre-wrap' }}>
              {`<!-- 1. 헤딩 타이틀 (Heading Typography) -->
<!-- 가장 눈에 띄는 제목 요소에 사용합니다. -->
<h1 class="knds-text-heading-72">거대한 메인 타이틀 (72px)</h1>
<h1 class="knds-text-heading-32">최상위 타이틀 (32px)</h1>
<h2 class="knds-text-heading-24">중간 타이틀 (24px)</h2>

<!-- 2. 라벨 (UI Labels & Emphasized Text) -->
<!-- 버튼, 네비게이션, 짧은 강조 텍스트에 사용합니다. -->
<span class="knds-text-label-16">중요 라벨 텍스트 (16px, Bold)</span>
<span class="knds-text-label-14-mono">고정폭 메타데이터 라벨 (14px)</span>

<!-- 3. 본문 텍스트 (Copy/Body Text) -->
<!-- 긴 단락이나 일반 설명 문구에 사용합니다. -->
<p class="knds-text-copy-14">기본 본문 텍스트입니다. (14px)</p>
<p class="knds-text-copy-13-mono knds-text-muted">부가적인 설명이나 작은 캡션 (13px, Muted)</p>

<!-- 4. 다국어/숫자 복합 사용 예시 -->
<!-- JetBrains Mono와 Pretendard가 자동 폴백으로 섞여 렌더링됩니다. -->
<span class="knds-text-label-14-mono">API_KEY_12345 (생성일: 2026-05-26)</span>`}
            </div>
          </details>

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
            anatomy={[
              { id: 'ty-1', name: 'Heading Hierarchy (.knds-text-heading-*)', tokenOrClass: '--font-sans (Pretendard)', description: '72px, 32px, 24px의 엄격한 무게감(700~800 weight)과 타이트한 자간(-0.02em)' },
              { id: 'ty-2', name: 'Monospace Data Labels (.knds-text-label-*-mono)', tokenOrClass: '--font-mono (JetBrains Mono)', description: '숫자, 상태값, 시스템 로그를 위한 고정폭 기하학적 폰트 및 다국어 Pretendard 자동 폴백' }
            ]}
            doDont={[
              { type: 'do', title: '계층화된 타이포그래피 스케일 엄수', description: '화면의 제목과 라벨은 사전에 정의된 72px, 32px, 24px, 16px, 14px 스케일 내에서 선택해야 합니다.', codeSnippet: '<h1 class="knds-text-heading-32">Title</h1>\n<p class="knds-text-copy-14">Body text</p>' },
              { type: 'dont', title: '문장 전체를 Mono 폰트로 장문 작성 금지', description: 'JetBrains Mono 고정폭 서체는 2줄 이상의 일반 산문 본문에 사용할 시 판독성이 급격히 떨어지므로 금지됩니다.', codeSnippet: '<!-- ❌ Avoid -->\n<p class="knds-text-copy-13-mono">이 긴 단락은 모노스페이스로 작성되면 안 됩니다...</p>' }
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
              배경 1 (Background 1: #FFFFFF)<br />
              배경 2 (Background 2: #F4F4F5)<br />
              컴포넌트 Rest (Color 1: #FFFFFF)<br />
              경계선 Rest (Color 4: #E4E4E7)
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

          <details className="knds-mt-200 knds-cursor-pointer knds-border-top" style={{ paddingTop: '16px' }}>
            <summary className="knds-text-label-14-mono knds-text-muted knds-font-bold">[+] 컬러 구현 코드 보기</summary>
            <div className="knds-code-block knds-selectable knds-mt-100" style={{ whiteSpace: 'pre-wrap' }}>
              {`/* 1. 디자인 시스템 토큰을 활용한 CSS 예시 (CSS Variables) */
.my-custom-panel {
  /* 배경과 텍스트 대비 */
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
  
  /* 경계선 토큰 적용 */
  border: 1px solid var(--color-border-default);
}
.my-custom-panel:hover {
  border-color: var(--color-border-hover);
}

/* 2. 유틸리티 클래스를 이용한 HTML 적용 예시 */
<!-- 붉은색 액센트 텍스트 -->
<div class="knds-text-red knds-font-bold">Error: Connection Lost</div>

<!-- 보조 텍스트 색상 (Muted) -->
<div class="knds-text-muted knds-text-copy-14">마지막 업데이트: 1시간 전</div>

<!-- 붉은색 배경 (주로 알림 뱃지 등에 사용) -->
<div class="knds-bg-red" style="color: var(--color-bg-primary);">알림</div>`}
            </div>
          </details>

          <HigSpecSection
            anatomy={[
              { id: 'co-1', name: 'Achromatic Background & Borders', tokenOrClass: '--color-bg-primary, --color-border-default', description: '#FFFFFF ~ #09090B 간의 순도 높은 극대 대비와 #E4E4E7 경계선' },
              { id: 'co-2', name: 'Functional Red Accent', tokenOrClass: '--color-functional-red (#AD1D1D)', description: '화면 내 핵심 인터랙션(Primary Action) 및 위급 경고에만 투입되는 유일한 컬러 포인트' }
            ]}
            doDont={[
              { type: 'do', title: 'Functional Red의 희소성 보존', description: '화면당 펑셔널 레드 요소는 Primary 버튼 및 핵심 뱃지 포함 1~3개 이내로 제한하여 액션 시선을 집중시키십시오.', codeSnippet: '<button class="knds-btn-primary">유일한 핵심 액션</button>' },
              { type: 'dont', title: '파스텔톤, 임의의 블루/그린 등 장식 컬러 혼합 금지', description: 'KNDS의 고대비 물리 아크로매틱 톤앤매너를 훼손하는 임의의 유채색 장식 사용을 금합니다.', codeSnippet: '<!-- ❌ Avoid -->\n<div style="background: #3B82F6; color: white;">...</div>' }
            ]}
            tokens={[
              { name: '--color-bg-primary', defaultValue: '#ffffff', darkValue: '#09090b', description: '최상위 도화지 및 패널 기본 배경색' },
              { name: '--color-bg-secondary', defaultValue: '#f4f4f5', darkValue: '#18181b', description: '계층 구분을 위한 보조 표면 배경색' },
              { name: '--color-border-default', defaultValue: '#e4e4e7', darkValue: '#27272a', description: '모든 패널, 입력창, 구분선의 기본 테두리 색상' },
              { name: '--color-functional-red', defaultValue: '#ad1d1d', darkValue: '#ad1d1d', description: 'KNDS의 아이덴티티이자 액션 유도 컬러' }
            ]}
            responsiveRules={[
              '테마 자동 적응: HTML 태그에 data-theme="dark" 속성 부여 시 모든 아크로매틱 변수가 0.05ms 내로 반전 렌더링됩니다.',
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

          <details className="knds-mt-200 knds-cursor-pointer knds-border-top" style={{ paddingTop: '16px' }}>
            <summary className="knds-text-label-14-mono knds-text-muted knds-font-bold">[+] 머티리얼 및 표면 높이 구현 코드 보기</summary>
            <div className="knds-code-block knds-selectable knds-mt-100" style={{ whiteSpace: 'pre-wrap' }}>
              {`<!-- 1. 기본 하드웨어 패널 (Standard Panel) -->
<!-- 미세한 볼륨감(Bevel)과 그림자가 포함된 기본 표면입니다. -->
<div class="knds-panel">
  <div class="knds-panel-header">
    <h3 class="knds-text-label-16">패널 타이틀</h3>
  </div>
  <p class="knds-text-copy-14 knds-text-muted">안정적인 하드웨어 재질감</p>
</div>

<!-- 2. 프로스트 글래스 / 반투명 표면 (Frosted Glass) -->
<!-- 스크롤 오버레이나 사이드바, 네비게이션 영역에 주로 사용합니다. -->
<div style="background-color: var(--bg-sidebar); backdrop-filter: blur(24px) saturate(180%); -webkit-backdrop-filter: blur(24px) saturate(180%); padding: var(--space-200);">
  <span class="knds-text-label-14-mono">투과되는 유리 재질</span>
</div>

<!-- 3. 상태 표시용 글로우 이펙트 (Glow Effect) -->
<div class="knds-shadow-glow" style="border: 1px solid var(--color-functional-red); border-radius: 8px; padding: 16px;">
  강조되어야 하는 치명적 알림 박스
</div>`}
            </div>
          </details>

          <HigSpecSection
            anatomy={[
              { id: 'ma-1', name: 'Standard Bevel Surface (.knds-panel)', tokenOrClass: '--shadow-hardware-bevel', description: '상단 1px 화이트 하이라이트와 하단 보더 그림자가 만드는 물리적 표면' },
              { id: 'ma-2', name: 'Frosted Glass Layer (.knds-sidebar / .knds-overlay)', tokenOrClass: 'backdrop-filter: blur(24px) saturate(180%)', description: '하위 레이어의 그리드와 색상을 은은하게 투과시키는 광학 유리 효과' }
            ]}
            doDont={[
              { type: 'do', title: '계층별 머티리얼 고유 역할 존중', description: '기본 정보 표면에는 .knds-panel을, 고정 헤더나 사이드바 네비게이션에는 반투명 블러 머티리얼을 적용하여 깊이 단계를 부여하십시오.', codeSnippet: '<div class="knds-panel">...</div>' },
              { type: 'dont', title: '블러 레이어의 과도한 중첩 금지', description: 'backdrop-filter가 적용된 요소를 3겹 이상 중첩하면 GPU 연산 부하가 발생하고 표면 투명도가 혼탁해지므로 지양하십시오.', codeSnippet: '<!-- ❌ Avoid -->\n<div style="backdrop-filter:blur(24px)">\n  <div style="backdrop-filter:blur(24px)">...</div>\n</div>' }
            ]}
            tokens={[
              { name: '--shadow-hardware-bevel', defaultValue: 'inset 0 1px 0 rgba(255, 255, 255, 1)...', darkValue: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)...', description: '표면 상단 하이라이트 및 음영 콤비네이션' },
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

          <details className="knds-mt-200 knds-cursor-pointer knds-border-top" style={{ paddingTop: '16px' }}>
            <summary className="knds-text-label-14-mono knds-text-muted knds-font-bold">[+] 버튼 구현 코드 보기</summary>
            <div className="knds-code-block knds-selectable knds-mt-100" style={{ whiteSpace: 'pre-wrap' }}>
              {`<!-- 1. 1차 액션 (Primary Button) -->
<!-- 화면당 1개 제한 권장, 가장 중요한 단일 액션 -->
<!-- Hover/Active 시 둥근 알약(Capsule) 형태에서 직사각형으로 모핑(Morphing)됩니다. -->
<button class="knds-btn-primary">
  SUBMIT DATA
</button>

<!-- 2. 2차 액션 (Secondary Button) -->
<!-- 폼 취소, 뒤로가기 등 보조적인 동작 -->
<button class="knds-secondary-btn">
  CANCEL
</button>

<!-- 3. 고스트 액션 (Ghost Button / Text Button) -->
<!-- 테두리 없이 텍스트만 존재, 중요도가 낮은 부가 기능 -->
<!-- knds-secondary-btn 구조에서 border를 빼고 여백을 줄여 사용 가능 -->
<button class="knds-secondary-btn" style="border: none; background: transparent;">
  Learn More
</button>

<!-- 4. 버튼 사이즈 토큰 (Button Sizing Modifiers) -->
<!-- XS (32px) | SM (40px) | MD (44px, 기본) | LG (48px) | XL (56px) -->
<div class="knds-flex-row knds-gap-100">
  <button class="knds-btn-primary knds-btn-xs">XS BTN</button>
  <button class="knds-btn-primary knds-btn-sm">SM BTN</button>
  <button class="knds-btn-primary knds-btn-md">MD BTN</button>
</div>`}
            </div>
          </details>

          <HigSpecSection
            anatomy={[
              { id: 'bt-1', name: 'Primary Capsule-to-Rect Morphing Button (.knds-btn-primary)', tokenOrClass: '--btn-height: 44px, border-radius transition', description: 'Rest 시 곡률 calc(--btn-height / 2)의 알약 형태에서 Hover 시 14px, Active 시 8px로 수축하는 동역학 스위치' },
              { id: 'bt-2', name: 'Secondary Monospace Hardware Button (.knds-secondary-btn)', tokenOrClass: 'border: 1px solid --color-border-default', description: 'JetBrains Mono 13px 기반의 정밀 기기 보조 조작 버튼' }
            ]}
            doDont={[
              { type: 'do', title: '버튼 사이즈와 인풋 사이즈 1:1 수평 대응', description: '폼 요소 배치 시 .knds-btn-md(44px)와 .knds-input-md(44px)를 일치시켜 하드웨어 기판처럼 단정한 수평선을 만드십시오.', codeSnippet: '<div class="knds-flex-row knds-gap-100">\n  <input class="knds-input knds-input-md" />\n  <button class="knds-btn-primary knds-btn-md">SEND</button>\n</div>' },
              { type: 'dont', title: '한 섹션 내 Primary 버튼 다중 병치 금지', description: '사용자의 판단을 흐리게 하는 2개 이상의 Primary Red 버튼 동시 노출을 피하고 보조 버튼으로 위계를 분리하십시오.', codeSnippet: '<!-- ❌ Avoid -->\n<button class="knds-btn-primary">Save</button>\n<button class="knds-btn-primary">Delete</button>' }
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

          <details className="knds-mt-200 knds-cursor-pointer knds-border-top" style={{ paddingTop: '16px' }}>
            <summary className="knds-text-label-14-mono knds-text-muted knds-font-bold">[+] 폼 입력 구현 코드 보기</summary>
            <div className="knds-code-block knds-selectable knds-mt-100" style={{ whiteSpace: 'pre-wrap' }}>
              {`<!-- 1. 기본 텍스트 입력 폼 세트 -->
<div class="knds-flex-col knds-gap-100">
  <label class="knds-text-label-14-mono knds-text-muted">USERNAME</label>
  <input type="text" class="knds-input" placeholder="Enter your name" />
</div>

<!-- 2. 드롭다운(Select) 폼 세트 -->
<div class="knds-flex-col knds-gap-100">
  <label class="knds-text-label-14-mono knds-text-muted">USER ROLE</label>
  <select class="knds-input">
    <option value="admin">Administrator</option>
    <option value="editor">Editor</option>
    <option value="viewer">Viewer</option>
  </select>
</div>

<!-- 3. 입력 폼 사이즈 토큰 (Form Sizing Modifiers) -->
<!-- 버튼 사이즈와 1:1로 대응하여 수평 정렬을 완벽하게 맞출 수 있습니다. -->
<input type="text" class="knds-input knds-input-xs" placeholder="XS Input (32px)" />
<input type="text" class="knds-input knds-input-sm" placeholder="SM Input (40px)" />
<input type="text" class="knds-input knds-input-md" placeholder="MD Input (44px, Default)" />
<input type="text" class="knds-input knds-input-lg" placeholder="LG Input (48px)" />
<input type="text" class="knds-input knds-input-xl" placeholder="XL Input (56px)" />`}
            </div>
          </details>

          <HigSpecSection
            anatomy={[
              { id: 'fo-1', name: 'Text & Select Control (.knds-input)', tokenOrClass: 'border: 1px solid --color-border-default', description: '8px 곡률 반경과 아크로매틱 1px 경계선을 갖는 정밀 입력기' },
              { id: 'fo-2', name: 'Input Focus Ring (:focus)', tokenOrClass: 'box-shadow: 0 0 0 2px --color-border-hover', description: '포커스 진입 시 키보드 접근성을 보장하는 2px 아우터 링' }
            ]}
            doDont={[
              { type: 'do', title: '입력창 상단 고정폭 라벨 매칭', description: '모든 .knds-input 요소 상단에는 .knds-text-label-14-mono 라벨을 위치시켜 데이터 속성을 명확히 안내하십시오.', codeSnippet: '<label class="knds-text-label-14-mono">SYSTEM_ID</label>\n<input class="knds-input" />' },
              { type: 'dont', title: '플레이스홀더를 라벨 대용으로 단독 사용 금지', description: '플레이스홀더(placeholder) 텍스트는 입력 시 사라지므로 필수 라벨을 대체할 수 없습니다.', codeSnippet: '<!-- ❌ Avoid -->\n<input class="knds-input" placeholder="라벨 없이 플레이스홀더만 사용" />' }
            ]}
            tokens={[
              { name: '.knds-input', defaultValue: 'height: 44px, padding: 12px 16px', description: '표준 MD 입력 필드 높이 및 내부 여백' },
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

          <details className="knds-mt-200 knds-cursor-pointer knds-border-top" style={{ paddingTop: '16px' }}>
            <summary className="knds-text-label-14-mono knds-text-muted knds-font-bold">[+] 모달 다이얼로그 구현 코드 보기</summary>
            <div className="knds-code-block knds-selectable knds-mt-100" style={{ whiteSpace: 'pre-wrap' }}>
              {`<!-- 1. 전체 화면 오버레이 (Dimmed Background) -->
<!-- z-index를 높게 설정하고 화면 전체를 덮습니다. -->
<div class="knds-overlay" style="position: fixed; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px); z-index: 998;"></div>

<!-- 2. 모달 다이얼로그 본체 -->
<!-- 화면 중앙에 고정시키며 입체감을 강하게 부여합니다. -->
<div class="knds-panel" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 999; min-width: 420px; box-shadow: 0 20px 40px rgba(0,0,0,0.2);">
  
  <!-- 모달 헤더 -->
  <div class="knds-border-bottom knds-pb-150 knds-mb-200 knds-flex-row knds-justify-between knds-items-center">
    <h3 class="knds-text-label-16">DELETE SYSTEM DATA</h3>
    <button class="knds-text-muted knds-cursor-pointer" style="font-size: 18px;">✕</button>
  </div>
  
  <!-- 모달 콘텐츠 -->
  <p class="knds-text-copy-14 knds-text-muted knds-mb-300">
    이 동작은 되돌릴 수 없습니다.<br/>서버에서 영구적으로 삭제하시겠습니까?
  </p>
  
  <!-- 모달 푸터 (액션 버튼) -->
  <div class="knds-flex-row knds-justify-end knds-gap-100">
    <button class="knds-secondary-btn">Cancel</button>
    <button class="knds-btn-primary">Confirm Delete</button>
  </div>
  
</div>`}
            </div>
          </details>

          <HigSpecSection
            anatomy={[
              { id: 'mo-1', name: 'Modal Backdrop (.knds-overlay)', tokenOrClass: 'z-index: 998, backdrop-filter: blur(4px)', description: '배경 인터랙션을 차단하고 사용자의 시선을 다이얼로그로 집중시키는 암전 층' },
              { id: 'mo-2', name: 'Elevated Hardware Dialog (.knds-panel)', tokenOrClass: 'z-index: 999, box-shadow: 0 20px 40px...', description: '최상위 레이어에 부유하는 고대비 하드웨어 다이얼로그 박스' }
            ]}
            doDont={[
              { type: 'do', title: '취소 버튼은 좌측, 확인 버튼은 우측 배치', description: '모달 푸터에서는 취소(Cancel)를 왼쪽, 실행(Confirm/Delete)을 오른쪽에 두어 OS 네이티브 버튼 패턴과 일치시키십시오.', codeSnippet: '<div class="knds-flex-row knds-justify-end knds-gap-100">\n  <button class="knds-secondary-btn">Cancel</button>\n  <button class="knds-btn-primary">Confirm</button>\n</div>' },
              { type: 'dont', title: '다중 중첩 모달(Modal inside Modal) 금지', description: '모달 다이얼로그 위로 또 다른 모달이 뜨는 구조는 인지적 혼란을 초래하므로 금지됩니다.', codeSnippet: '<!-- ❌ Avoid -->' }
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

          <details className="knds-mt-200 knds-cursor-pointer knds-border-top" style={{ paddingTop: '16px' }}>
            <summary className="knds-text-label-14-mono knds-text-muted knds-font-bold">[+] 네비게이션 구현 코드 보기</summary>
            <div className="knds-code-block knds-selectable knds-mt-100" style={{ whiteSpace: 'pre-wrap' }}>
              {`<!-- 1. 사이드바 네비게이션 그룹 헤더 -->
<!-- 클릭하여 하위 메뉴를 접고 펼칠 수 있는 인터페이스용 -->
<div class="knds-nav-group-header">
  <span>LAYOUT & GRID</span>
  <!-- 화살표 아이콘 (상태에 따라 .collapsed 클래스 토글) -->
  <svg class="knds-chevron collapsed" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg>
</div>

<!-- 2. 네비게이션 메뉴 아이템 -->
<!-- .active 클래스 부여 시 좌측에 붉은 인디케이터가 활성화됨 -->
<div class="knds-nav-item active">
  <div class="knds-flex-row knds-items-center knds-gap-100">
    <span class="knds-text-label-14-mono knds-bg-secondary knds-p-050" style="border-radius:2px;">01</span>
    <span class="knds-text-label-16">PC Split Screen</span>
  </div>
</div>

<!-- 3. 비활성(Disabled) 아이템 -->
<div class="knds-nav-item disabled">
  <span class="knds-text-label-16">Mobile Screen (준비중)</span>
</div>`}
            </div>
          </details>

          <HigSpecSection
            anatomy={[
              { id: 'na-1', name: 'Navigation Group Header (.knds-nav-group-header)', tokenOrClass: 'font-weight: 700, chevron toggle', description: '카테고리 폴더를 열고 닫는 아크로매틱 그룹 타이틀' },
              { id: 'na-2', name: 'Active Indicator Item (.knds-nav-item.active)', tokenOrClass: 'border-left: 3px solid --color-functional-red', description: '현재 활성 페이지를 가리키는 좌측 3px 기능성 레드 엣지' }
            ]}
            doDont={[
              { type: 'do', title: '현재 위치의 명확한 시각적 표지', description: '사용자가 어느 페이지에 있는지 1초 내로 파악할 수 있도록 active 클래스와 기능성 레드 인디케이터를 반드시 부여하십시오.', codeSnippet: '<div class="knds-nav-item active">...</div>' },
              { type: 'dont', title: '3단계 이상 깊은 중첩 네비게이션 금지', description: '메뉴 하위에 하위 메뉴, 그 하위에 또 하위 메뉴가 열리는 복잡한 트리 구조는 인지 피로를 높이므로 2뎁스 이내로 수평화하십시오.', codeSnippet: '<!-- ❌ Avoid -->' }
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
              화면 분할 철학은 대칭 분리를 타파하고 비대칭 황금비에 준하는 25:75 비율의 스플릿 스크린을 기본 표준으로 채택한다.
            </p>
          </div>
          <div className="knds-mb-300">
            <GoldenRatioSandbox />
          </div>
          <div className="knds-mb-300">
            <SplitSandbox defaultMode="desktop" />
          </div>

          <details className="knds-mt-200 knds-cursor-pointer knds-border-top" style={{ paddingTop: '16px' }}>
            <summary className="knds-text-label-14-mono knds-text-muted knds-font-bold">[+] 스플릿 스크린 구현 코드 보기</summary>
            <div className="knds-code-block knds-selectable knds-mt-100" style={{ whiteSpace: 'pre-wrap' }}>
              {`<!-- 25:75 비율의 황금비 스플릿 스크린 전체 구조 -->
<div class="knds-app">
  
  <!-- 좌측 25% 사이드바 영역 -->
  <!-- 블러 효과와 그리드 패턴이 포함된 KNDS 특유의 사이드바 클래스 -->
  <aside class="knds-sidebar" style="width: 25%;">
    <nav>네비게이션 메뉴</nav>
  </aside>
  
  <!-- 드래그 가능한 중앙 스플리터 막대 -->
  <div class="knds-splitter"></div>
  
  <!-- 우측 75% 메인 콘텐츠 영역 -->
  <main class="knds-main-view" style="width: 75%;">
    <!-- 실제 콘텐츠가 담기는 중앙 정렬된 컨테이너 -->
    <div class="knds-main-content">
      <h1 class="knds-text-heading-32">Main Title</h1>
      <p class="knds-text-copy-14">Main content goes here.</p>
    </div>
  </main>

</div>`}
            </div>
          </details>

          <HigSpecSection
            anatomy={[
              { id: 'sp-pc-1', name: 'Asymmetric 25% Sidebar (.knds-sidebar)', tokenOrClass: 'width: 25% / min-width: 280px', description: '네비게이션, 인덱스, 메타 정보를 담는 좌측 하드웨어 컨트롤 기판' },
              { id: 'sp-pc-2', name: '75% Main Content Workspace (.knds-main-view)', tokenOrClass: 'width: 75% / overflow-y: auto', description: '사용자의 실제 본문 작업이 이루어지는 광활한 우측 도화지 영역' },
              { id: 'sp-pc-3', name: 'Draggable Splitter Bar (.knds-splitter)', tokenOrClass: 'width: 4px, cursor: col-resize', description: '두 영역의 경계를 분리하며 사용자가 너비를 미세 조정할 수 있는 1px 액센트 바' }
            ]}
            doDont={[
              { type: 'do', title: '25:75 비대칭 황금 분할 원칙 준수', description: '데스크톱 화면에서 좌측은 25% (280px~360px), 우측은 75% 비율을 유지하여 시각적 밸런스를 달성하십시오.', codeSnippet: '<aside style="width: 25%">...</aside>\n<main style="width: 75%">...</main>' },
              { type: 'dont', title: '50:50 대칭 분할이나 4개 이상 과도한 수직 컬럼 분열 금지', description: '50:50 분할은 화면 주인공(Main View)의 집중도를 떨어뜨리고 시선을 산만하게 만듭니다.', codeSnippet: '<!-- ❌ Avoid -->\n<div style="width: 50%">Side</div>\n<div style="width: 50%">Main</div>' }
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
            anatomy={[
              { id: 'mo-st-1', name: 'Mobile Header Toggle Bar (.knds-mobile-header)', tokenOrClass: 'height: 56px, display: none (PC) / flex (Mobile)', description: '모바일 화면 최상단에 등장하는 네비게이션 드로어 트리거 바' },
              { id: 'mo-st-2', name: '100% Full Width Stack Container (.knds-main-view)', tokenOrClass: 'width: 100% (on mobile)', description: '모든 컴포넌트와 카드가 상하 수직으로 안전하게 정렬되는 모바일 뷰' }
            ]}
            doDont={[
              { type: 'do', title: '모바일 터치 타겟 최소 44x44px 이상 확보', description: '모바일 스택킹 전환 시 모든 버튼과 탭 항목은 최소 44px 이상의 수직 높이를 유지하여 터치 오작동을 방지하십시오.', codeSnippet: '<button class="knds-btn-primary knds-w-full knds-btn-md">TOUCH TARGET OK</button>' },
              { type: 'dont', title: '모바일에서 수평 스크롤이 발생하는 테이블이나 고정 너비 강제 금지', description: '모바일 화면 너비(360~430px)를 초과하는 고정 너비 요소(예: min-width: 600px)를 방치하여 좌우 스크롤이 생기게 하면 안 됩니다.', codeSnippet: '<!-- ❌ Avoid -->' }
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
              <li><strong>하드코딩 배제 검수:</strong> 모든 여백 및 내부 패딩 코드가 기하학적인 정수형 픽셀 단위로 선언되어 있지 않고, 반드시 $space- 계열의 토큰으로 대체되었는지 확인한다.</li>
              <li><strong>청사진 그리드 대비:</strong> 배경 격자선의 명도 투명도 수치가 10% - 20% 임계를 넘지 않는지 검측한다.</li>
              <li><strong>터치 영역 확보:</strong> 48x48dp 이상을 확보하여 모바일 터치 누락을 방지한다.</li>
              <li><strong>펑셔널 레드 위계 통제:</strong> 펑셔널 레드 색상이 적용된 컴포넌트가 과도하게 남발되지 않고 화면당 최대 3개 이하로 통제되고 있는지 체크한다.</li>
            </ul>
          </div>
          <div className="knds-mb-300">
            <QASandbox />
          </div>

          <HigSpecSection
            anatomy={[
              { id: 'qa-1', name: 'Automated QA & Token Compliance Checker', tokenOrClass: 'knds.css Token Verifier', description: 'CSS 변수 미선언 하드코딩 요소를 실시간으로 탐지하고 펑셔널 레드 남발 여부를 검증하는 실무 수칙' }
            ]}
            doDont={[
              { type: 'do', title: '배포 전 5대 QA 준칙 체크리스트 완수', description: '1. 토큰 100% 준수 / 2. 터치 타겟 44px+ / 3. 다크 모드 대비 확인 / 4. 펑셔널 레드 3개 제한 / 5. 반응형 1199px 스택 테스트를 통과하십시오.', codeSnippet: 'npm run build && npm test' },
              { type: 'dont', title: '검증 단계 생략 및 임의 핫픽스 배포 금지', description: '긴급 배포라는 명목으로 인라인 스타일(style="color:red")을 삽입하여 시스템 일관성을 깨뜨려서는 안 됩니다.', codeSnippet: '<!-- ❌ Avoid -->' }
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
          <div className="knds-mb-400" style={{ textAlign: 'center', padding: 'var(--space-400) 0' }}>
            <span className="knds-text-label-14-mono knds-text-red knds-mb-150" style={{ display: 'inline-block' }}>
              KNDS CO-CREATION LABS
            </span>
            <h2 className="knds-text-heading-32 knds-mb-200">
              System Creators & Inspirations
            </h2>
            <p className="knds-text-copy-14 knds-text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
              물리 하드웨어의 감각을 디지털 스크린으로 확장하는 여정을 함께한 기여자입니다.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>

            {/* User Card */}
            <div className="knds-panel knds-grid-bg knds-relative" style={{ minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 'var(--space-300)' }}>
              <div className="knds-content-relative">
                <div className="knds-flex-row knds-justify-between knds-items-start knds-mb-200">
                  <span className="knds-text-label-14-mono knds-text-red" style={{ backgroundColor: 'var(--color-red-light)', padding: '4px 8px', borderRadius: '4px' }}>LEAD ARCHITECT</span>
                  <span className="knds-text-label-14-mono knds-text-muted">01</span>
                </div>
                <h3 className="knds-text-heading-32 knds-font-bold knds-mb-100" style={{ fontSize: '24px' }}>Jaewon Lee</h3>
                <p className="knds-text-copy-14 knds-text-muted">
                  시스템 기획 및 검증 총괄.
                </p>
              </div>
              <div className="knds-content-relative knds-border-top knds-pt-150 knds-mt-200 knds-flex-row knds-justify-between knds-items-center">
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
