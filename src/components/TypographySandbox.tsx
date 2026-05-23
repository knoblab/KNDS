import React, { useState } from 'react';
import { Type, Globe, CheckCircle2, ZoomIn } from 'lucide-react';

const SAMPLES = [
  { id: 'ko', title: '한국어 (Korean)', text: 'PDF-DS는 화면 내부의 요소들을 단순한 이미지나 그래픽 레이어로 취급하지 않습니다. 기하학적인 엄격함과 최소한의 시각적 요소만을 사용하여 제품의 구조적 신뢰성을 전달합니다.' },
  { id: 'en', title: '영어 (English)', text: 'PDF-DS does not treat elements inside the screen as simple images or graphic layers. It uses geometric rigor and minimal visual elements to convey the structural reliability of the product.' },
  { id: 'ja', title: '일본어 (Japanese)', text: 'PDF-DSは、画面内の要素を単なる画像やグラフィックレイヤーとして扱いません。幾何学的な厳密さと最小限の視覚要素のみを使用して、製品の構造的信頼性を伝えます。' },
  { id: 'la', title: '라틴어 (Latin)', text: 'PDF-DS elementa intra tentorium sicut imagines simplices vel ordines graphicos non tractat. Rigore geometrico et minimis elementis visibilibus utitur ad certitudinem structurae producti transmittendam.' },
];

export default function TypographySandbox() {
  const [activeLang, setActiveLang] = useState('ko');
  const [weights, setWeights] = useState([400, 700, 900]);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="border border-zinc-200 bg-white p-6 rounded-lg font-sans my-4 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-100">
        <div>
          <span className="font-mono text-xs tracking-wider text-red-700 font-bold uppercase block">
            CH.4 INTERACTIVE SANBOX
          </span>
          <h4 className="font-sans text-base font-semibold text-zinc-900">
            Pretendard 다국어 호환성 및 범용 메트릭(Metrics) 테스트
          </h4>
        </div>
        <Globe className="text-zinc-400 w-4 h-4" />
      </div>

      <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
        Pretendard Variable 글꼴 하나로 다양한 언어권의 텍스트가 어떻게 깨짐 없이 균일한 밀도(Ascender/Descender)를 유지하는지 확인해보세요. 다언어가 혼재되어도 시각적 질서가 유지됩니다.
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 border-b border-zinc-100 pb-4 overflow-x-auto">
        <div className="flex gap-2">
          {SAMPLES.map(lang => (
            <button
              key={lang.id}
              onClick={() => setActiveLang(lang.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${
                activeLang === lang.id ? 'bg-red-50 text-red-700 border-red-200' : 'bg-zinc-50 text-zinc-500 border-zinc-200 hover:bg-zinc-100'
              }`}
            >
              {lang.title}
            </button>
          ))}
        </div>
        
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold transition-all whitespace-nowrap border shrink-0 ${isZoomed ? 'bg-amber-50 text-amber-900 border-amber-200' : 'bg-zinc-50 text-zinc-600 border-zinc-200'}`}
        >
          <ZoomIn className="w-3.5 h-3.5" />
          저시력 200% 배율 시뮬레이터: {isZoomed ? 'ACTIVE' : 'OFF'}
        </button>
      </div>

      <div className={`transition-all duration-300 ${isZoomed ? 'text-lg scale-102 origin-top-left' : ''}`}>
        <div className="bg-zinc-50 border border-zinc-200 rounded p-6 min-h-[220px] flex flex-col justify-center gap-8">
          {weights.map(weight => (
            <div key={weight} className="relative">
              <span className="absolute -left-2 -top-5 text-[9px] font-mono font-bold text-zinc-400">
                w{weight}
              </span>
              <p 
                className="text-zinc-900 leading-normal" 
                style={{ fontWeight: weight, fontSize: isZoomed ? '2.5rem' : '1.25rem' }}
              >
                {SAMPLES.find(s => s.id === activeLang)?.text}
              </p>
            </div>
          ))}
        </div>
      </div>
        
        <div className="bg-zinc-900 text-zinc-300 p-4 rounded text-[11px] font-mono mt-2">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <strong className="text-white">Pretendard 렌더링 무결성 스캔 통과</strong>
          </div>
          <p className="opacity-80 leading-relaxed">
            한글, 영문, 일어를 교차 렌더링 할 때 베이스라인(Baseline)이 흔들리거나 글꼴의 두께비(Weight Scale)가 충돌하는 문제를 발견할 수 없습니다. 이는 왜 PDF-DS가 커스텀 폰트를 혼용하지 않고 오직 <strong>Pretendard Variable</strong> 단일 산세리프로 모든 언어를 커버하는지 증명합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
