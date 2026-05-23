import React, { useState } from 'react';
import { Columns, Maximize2, Monitor, Tablet, Smartphone, Unlock, Lock } from 'lucide-react';

export default function SplitSandbox() {
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [splitRatio, setSplitRatio] = useState<number>(38); // percentage for the left panel
  const [isSidebarHidden, setIsSidebarHidden] = useState<boolean>(false);
  const [savedRatio, setSavedRatio] = useState<number>(38);

  // Set preset ratios and trigger feedback
  const changeRatioDirectly = (val: number) => {
    setSplitRatio(val);
    setIsSidebarHidden(false);
  };

  const toggleSidebarCollapse = () => {
    if (isSidebarHidden) {
      setSplitRatio(savedRatio);
      setIsSidebarHidden(false);
    } else {
      setSavedRatio(splitRatio);
      setSplitRatio(0);
      setIsSidebarHidden(true);
    }
  };

  // Draggable slider simulator logic for custom percentage change
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = Number(e.target.value);
    // Boundary caps check: The spec bans collapsing or growing out of (20% to 50%) bounds during drag
    if (newVal >= 20 && newVal <= 50) {
      setSplitRatio(newVal);
      setIsSidebarHidden(false);
    } else {
      // Trigger short failure feedback
    }
  };

  return (
    <div className="border border-zinc-200 bg-white p-6 rounded-lg font-sans my-4 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-100">
        <div>
          <span className="font-mono text-xs tracking-wider text-red-700 font-bold uppercase block">
            CH.6 INTERACTIVE SANBOX
          </span>
          <h4 className="font-sans text-base font-semibold text-zinc-900">
            비대칭 스플릿 스크린(Asymmetric Split Screen) 가변 조율 시뮬레이터
          </h4>
        </div>
        <Columns className="text-zinc-400 w-4 h-4" />
      </div>

      <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
        PDF-DS 규격에 따른 황금 비대칭 배치(38:62)를 시뮬레이션할 수 있습니다. <strong>스플리터 제어바</strong>를 사용해 슬라이스 비율을 조율해 보세요. 드래그 조율 범위는 <strong>시스템 제한 수칙(20% ~ 50%)</strong> 내부로 자동 제약됩니다. 더블 클릭하여 사이드바의 완전 축소(Collapse) 상태를 점진 도약시킬 수도 있습니다.
      </p>

      {/* Select active device simulation breakpoint */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5 pb-3 border-b border-zinc-100">
        <div className="flex bg-zinc-150 p-1 rounded-lg border border-zinc-200">
          <button
            id="btn-split-desktop"
            onClick={() => { setViewportMode('desktop'); }}
            className={`flex items-center gap-1 text-[11px] font-mono py-1 px-3.5 rounded transition ${viewportMode === 'desktop' ? 'bg-white text-zinc-900 font-bold' : 'text-zinc-500 hover:text-zinc-900'}`}
          >
            <Monitor className="w-3 h-3" /> Desktop (&gt;= 1200px)
          </button>
          <button
            id="btn-split-tablet"
            onClick={() => { setViewportMode('tablet'); }}
            className={`flex items-center gap-1 text-[11px] font-mono py-1 px-3.5 rounded transition ${viewportMode === 'tablet' ? 'bg-white text-zinc-900 font-bold' : 'text-zinc-500 hover:text-zinc-900'}`}
          >
            <Tablet className="w-3 h-3" /> Tablet (768px-1199px)
          </button>
          <button
            id="btn-split-mobile"
            onClick={() => { setViewportMode('mobile'); }}
            className={`flex items-center gap-1 text-[11px] font-mono py-1 px-3.5 rounded transition ${viewportMode === 'mobile' ? 'bg-white text-zinc-900 font-bold' : 'text-zinc-500 hover:text-zinc-900'}`}
          >
            <Smartphone className="w-3 h-3" /> Mobile (&lt; 768px)
          </button>
        </div>

        {/* Double-click actions */}
        <div className="flex items-center gap-2">
          <button 
            id="btn-split-collapse"
            onClick={toggleSidebarCollapse}
            className="text-[11px] font-mono py-1.5 px-3 border border-zinc-200 rounded hover:bg-zinc-50 font-bold text-zinc-700 active:scale-95"
            title="스플리터 더블클릭 상태 점프"
          >
            📂 {isSidebarHidden ? '사이드 패널 팽창 (Restore)' : '사이드 패널 완전 축소 (Collapse)'}
          </button>
        </div>
      </div>

      {/* Simulator Device Render Frame */}
      <div className="border border-zinc-300 rounded overflow-hidden shadow-inner bg-zinc-900 p-3 max-w-full relative">
        <div className="absolute top-1 left-2 text-[8px] font-mono text-zinc-500">
          VIRTUAL DEVICE VIEWPORT — {viewportMode.toUpperCase()} VIEW
        </div>

        {/* Preview Sandbox inner frame */}
        <div className={`mt-2.5 transition-all duration-500 ${viewportMode === 'desktop' ? 'w-full' : viewportMode === 'tablet' ? 'max-w-xl' : 'max-w-xs'} mx-auto h-[220px] bg-white border border-zinc-300 rounded-sm overflow-hidden flex ${viewportMode === 'mobile' ? 'flex-col' : 'flex-row'}`}>
          {viewportMode !== 'mobile' ? (
            <>
              {/* Desktop/Tablet Left panel */}
              <div 
                className="bg-zinc-50 border-r border-zinc-200 p-3 flex flex-col justify-between shrink-0 transition-all duration-300"
                style={{ width: `${splitRatio}%`, opacity: splitRatio === 0 ? 0 : 1, display: splitRatio === 0 ? 'none' : 'flex' }}
              >
                <div>
                  <div className="w-4 h-4 rounded bg-red-700 mb-2" />
                  <span className="text-[11px] font-bold text-zinc-800 font-sans block truncate">메타 컨트롤 ({splitRatio}%)</span>
                  <div className="h-1 w-1/2 bg-zinc-300 rounded my-1" />
                  <div className="h-1 w-3/4 bg-zinc-200 rounded" />
                </div>
                <div className="text-[9px] font-mono text-zinc-400">사이드 정보판</div>
              </div>

              {/* Physical interactive resizer splitter bar line inside mockup */}
              <div 
                onDoubleClick={toggleSidebarCollapse}
                className="w-1.5 bg-zinc-200 hover:bg-red-700/80 cursor-col-resize flex items-center justify-center transition-colors group relative border-r border-l border-white"
                title="더블클릭시 축소/팽창 토글"
              >
                <div className="w-0.5 h-6 bg-zinc-400 group-hover:bg-white rounded" />
              </div>

              {/* Right core panel */}
              <div className="flex-1 bg-white p-3 flex flex-col justify-between overflow-hidden">
                <div>
                  <span className="text-[11px] font-extrabold text-zinc-950 font-sans block uppercase">코어 캔버스 ({100 - splitRatio}%)</span>
                  <p className="text-[10px] text-zinc-600 mt-1 font-sans line-clamp-3">
                    이곳은 주 작업 스페이스 영역으로 스플릿 비율에 따라 유동적인 반응형 리플로우가 적용됩니다. 황금 분할인 38:62 상태에서 가장 이상적인 가독 호흡을 보장합니다.
                  </p>
                </div>
                <div className="flex justify-between items-center border-t border-zinc-100 pt-1 text-[9px] font-mono text-zinc-400">
                  <span>REF: {100 - splitRatio}% Width</span>
                  <span>상태: 안정화</span>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Mobile Stacking View Layout */}
              <div className="bg-zinc-50 border-b border-zinc-200 p-3 flex-1 h-2/5 flex flex-col justify-between overflow-hidden">
                <div>
                  <span className="text-[10px] font-bold text-zinc-800 font-sans block">상단 제어 레이어</span>
                  <div className="h-1 w-2/3 bg-zinc-300 rounded my-1" />
                </div>
                <span className="text-[8px] font-mono text-zinc-400 text-right">TOP LAYER</span>
              </div>
              <div className="bg-white p-3 flex-1 h-3/5 flex flex-col justify-between overflow-hidden">
                <span className="text-[10px] font-bold text-zinc-900 font-sans block">코어 주 영역 (100% 면적 확장)</span>
                <p className="text-[9px] text-zinc-500 font-serif leading-tight">
                  모바일에서는 비대칭 가로 분할이 무력화되고 위아래 100% 수직 스택으로 재배치됩니다. 터치 충돌 방지 법칙을 수호하기 위해 가로 스와이프 제스처는 자동 중단됩니다.
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Manual Splitter Ratio fine slider */}
      {viewportMode !== 'mobile' && (
        <div className="mt-4 p-3 bg-zinc-50 rounded-lg border border-zinc-200">
          <div className="flex justify-between items-center text-xs font-mono mb-2">
            <span className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-red-700" />
              비대칭 스플릿 수동 분할바 조율 
              <span className="text-[10px] text-zinc-400">(상한선 제한: 20% ~ 50%)</span>
            </span>
            <span className="font-bold text-zinc-950">{splitRatio}% / {100 - splitRatio}%</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-zinc-400">20% 최소</span>
            <input 
              type="range"
              min="15" 
              max="55" 
              value={splitRatio}
              onChange={handleSliderChange}
              className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-red-700"
            />
            <span className="text-[10px] font-mono text-zinc-400">50% 최대</span>
          </div>

          <div className="mt-3 flex gap-2 justify-center">
            <button 
              id="btn-split-preset-38"
              onClick={() => changeRatioDirectly(38)}
              className={`text-[10px] font-mono py-1 px-2 border rounded ${splitRatio === 38 ? 'bg-red-700 text-white border-red-800' : 'bg-white text-zinc-600 border-zinc-200'}`}
            >
              황금 가이드 38:62 적용
            </button>
            <button 
              id="btn-split-preset-30"
              onClick={() => changeRatioDirectly(30)}
              className={`text-[10px] font-mono py-1 px-2 border rounded ${splitRatio === 30 ? 'bg-red-700 text-white border-red-800' : 'bg-white text-zinc-600 border-zinc-200'}`}
            >
              대칭형에 가까운 30:70 적용
            </button>
            <button 
              id="btn-split-preset-20"
              onClick={() => changeRatioDirectly(20)}
              className={`text-[10px] font-mono py-1 px-2 border rounded ${splitRatio === 20 ? 'bg-red-700 text-white border-red-800' : 'bg-white text-zinc-600 border-zinc-200'}`}
            >
              미니멀 밴드형 20:80 적용
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
