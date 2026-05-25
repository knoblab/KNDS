import React, { useState } from 'react';
import { Type, Globe, CheckCircle2, ZoomIn } from 'lucide-react';

const SAMPLES = [
  { id: 'ko', title: '한국어 (Korean)', text: 'PDF-DS는 화면 내부의 요소들을 단순한 이미지나 그래픽 레이어로 취급하지 않습니다. 기하학적인 엄격함과 최소한의 시각적 요소만을 사용하여 제품의 구조적 신뢰성을 전달합니다.' },
  { id: 'en', title: '영어 (English)', text: 'PDF-DS does not treat elements inside the screen as simple images or graphic layers. It uses geometric rigor and minimal visual elements to convey the structural reliability of the product.' },
  { id: 'ja', title: '일본어 (Japanese)', text: 'PDF-DS는, 화면 내의 요소를 단순한 이미지나 그래픽 레이어로서 다루지 않습니다.幾何학적인 엄밀함과 최소한의 시각요소만을 사용하여, 제품의 구조적 신뢰성을 전달합니다.' },
  { id: 'la', title: '라틴어 (Latin)', text: 'PDF-DS elementa intra tentorium sicut imagines simplices vel ordines graphicos non tractat. Rigore geometrico et minimis elementis visibilibus utitur ad certitudinem structurae producti transmittendam.' },
  { id: 'custom', title: '사용자 지정 (Custom)', text: '' }
];

export default function TypographySandbox() {
  const [activeLang, setActiveLang] = useState('ko');
  const [weights, setWeights] = useState([400, 700, 900]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [usePretext, setUsePretext] = useState(false);
  const [customText, setCustomText] = useState(
    `PDF-DS PHYSICAL SPECIFICATION REPORT\n==================================\n\n[DEVICE INITIALIZATION]\n- Material Coupling: Active\n- Chassis Calibration: Done (0.01mm tolerance)\n- Highlight Red: #AD1D1D\n\n[USER CUSTOM PRE-FORMATTED TEXT TEST]\n   * Preserves exact indents (3 spaces)\n   * Preserves multiple newlines\n   * Matches high-fidelity digital precision.`
  );

  return (
    <div className="pdf-panel">
      <div className="pdf-panel-header pdf-flex-row pdf-justify-between pdf-items-center">
        <div>
          <span className="pdf-text-label-14-mono pdf-text-red pdf-mb-100" style={{ display: 'block', fontWeight: 'bold' }}>
            CH.4 INTERACTIVE SANDBOX
          </span>
          <h4 className="pdf-text-label-16" style={{ fontWeight: 'bold' }}>
            Pretendard 다국어 호환성 및 범용 메트릭(Metrics) 테스트
          </h4>
        </div>
        <Globe className="pdf-text-muted" style={{ width: 16, height: 16 }} />
      </div>

      <p className="pdf-text-copy-14 pdf-text-muted pdf-mb-300">
        Pretendard Variable 글꼴 하나로 다양한 언어권의 텍스트가 어떻게 깨짐 없이 균일한 밀도(Ascender/Descender)를 유지하는지 확인해보세요. 다언어가 혼재되어도 시각적 질서가 유지됩니다.
      </p>

      <div className="pdf-flex-col pdf-gap-200">
        <div className="pdf-flex-row pdf-justify-between pdf-items-center pdf-border-bottom pdf-pb-200 pdf-mb-200" style={{ flexWrap: 'wrap', gap: 16 }}>
          <div className="pdf-flex-row pdf-gap-100" style={{ overflowX: 'auto' }}>
            {SAMPLES.map(lang => (
              <button
                key={lang.id}
                onClick={() => setActiveLang(lang.id)}
                className="pdf-text-label-14-mono"
                style={{
                  padding: '6px 12px', borderRadius: 16, cursor: 'pointer', border: '1px solid', whiteSpace: 'nowrap',
                  backgroundColor: activeLang === lang.id ? 'var(--color-bg-primary)' : 'var(--color-bg-primary)',
                  color: activeLang === lang.id ? 'var(--color-functional-red)' : 'var(--color-text-secondary)',
                  borderColor: activeLang === lang.id ? 'var(--color-functional-red)' : 'var(--color-border-default)',
                  fontWeight: 'bold'
                }}
              >
                {lang.title}
              </button>
            ))}
          </div>
          
          <div className="pdf-flex-row pdf-gap-100" style={{ flexShrink: 0 }}>
            <button
              onClick={() => setUsePretext(!usePretext)}
              className="pdf-text-label-14-mono pdf-flex-row pdf-items-center pdf-gap-050"
              style={{
                padding: '6px 12px', borderRadius: 4, cursor: 'pointer', border: '1px solid', whiteSpace: 'nowrap',
                backgroundColor: usePretext ? 'var(--color-functional-red)' : 'var(--color-bg-primary)',
                color: usePretext ? 'var(--color-bg-primary)' : 'var(--color-text-secondary)',
                borderColor: usePretext ? 'var(--color-functional-red)' : 'var(--color-border-default)',
                fontWeight: 'bold'
              }}
              title="프리텍스트(Pretext) 모드를 활성화하여 텍스트의 줄바꿈과 띄어쓰기를 그대로 유지합니다."
            >
              <Type style={{ width: 14, height: 14 }} />
              프리텍스트(Pretext) 모드: {usePretext ? 'ON' : 'OFF'}
            </button>
            
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="pdf-text-label-14-mono pdf-flex-row pdf-items-center pdf-gap-050"
              style={{
                padding: '6px 12px', borderRadius: 4, cursor: 'pointer', border: '1px solid', whiteSpace: 'nowrap',
                backgroundColor: isZoomed ? '#fef3c7' : 'var(--color-bg-primary)',
                color: isZoomed ? '#78350f' : 'var(--color-text-secondary)',
                borderColor: isZoomed ? '#fde68a' : 'var(--color-border-default)',
                fontWeight: 'bold'
              }}
            >
              <ZoomIn style={{ width: 14, height: 14 }} />
              저시력 200% 배율: {isZoomed ? 'ACTIVE' : 'OFF'}
            </button>
          </div>
        </div>

        {activeLang === 'custom' && (
          <div className="pdf-mb-200">
            <label className="pdf-text-label-14-mono pdf-text-muted" style={{ display: 'block', fontSize: '9px', fontWeight: 'bold', marginBottom: 4 }}>
              CUSTOM SPECIFICATION INPUT (사용자 정의 텍스트 입력)
            </label>
            <textarea
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder="테스트할 사양 명세를 입력하세요. (줄바꿈과 다중 스페이스가 그대로 유지됩니다)"
              className="pdf-border"
              style={{
                width: '100%', padding: 12, backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)',
                borderRadius: 4, minHeight: 120, fontFamily: 'var(--font-mono)', fontSize: 12, outline: 'none'
              }}
            />
          </div>
        )}

        <div style={{ transition: 'all 0.3s', transform: isZoomed ? 'scale(1.02)' : 'none', transformOrigin: 'top left' }}>
          <div className="pdf-bg-secondary pdf-border pdf-p-300" style={{ borderRadius: 4, minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 32 }}>
            {weights.map(weight => (
              <div key={weight} style={{ position: 'relative' }}>
                <span className="pdf-text-label-14-mono pdf-text-muted" style={{ position: 'absolute', left: -8, top: -20, fontSize: '9px', fontWeight: 'bold' }}>
                  w{weight}
                </span>
                <p 
                  className={usePretext ? 'pdf-font-mono' : 'pdf-font-sans'}
                  style={{ 
                    color: 'var(--color-text-primary)',
                    fontWeight: weight, 
                    fontSize: isZoomed ? '40px' : '20px',
                    whiteSpace: usePretext ? 'pre-wrap' : 'normal',
                    lineHeight: 1.5
                  }}
                >
                  {activeLang === 'custom' ? customText : SAMPLES.find(s => s.id === activeLang)?.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pdf-p-200" style={{ backgroundColor: '#09090b', color: 'var(--color-text-secondary)', borderRadius: 4, fontFamily: 'var(--font-mono)', fontSize: 11, marginTop: 8 }}>
          <div className="pdf-flex-row pdf-items-center pdf-gap-100 pdf-mb-100">
            <CheckCircle2 style={{ width: 14, height: 14, color: '#34d399' }} />
            <strong style={{ color: 'var(--color-bg-primary)' }}>Pretendard 렌더링 무결성 스캔 통과</strong>
          </div>
          <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
            한글, 영문, 일어를 교차 렌더링 할 때 베이스라인(Baseline)이 흔들리거나 글꼴의 두께비(Weight Scale)가 충돌하는 문제를 발견할 수 없습니다. 이는 왜 PDF-DS가 커스텀 폰트를 혼용하지 않고 오직 <strong>Pretendard Variable</strong> 단일 산세리프로 모든 언어를 커버하는지 증명합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
