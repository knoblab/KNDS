import React from 'react';

export default function GoldenRatioSandbox() {
  return (
    <div className="bg-zinc-50 border border-zinc-200 p-4 shrink-0 rounded-lg my-8 flex flex-col justify-center overflow-hidden relative shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="font-mono text-xs tracking-wider text-red-700 font-bold uppercase block">
            CH.5 BLUEPRINT FORMAT
          </span>
          <h4 className="font-sans text-base font-semibold text-zinc-900 mt-1">
            38:62 비대칭 황금 분할 (Asymmetric Golden Ratio)
          </h4>
        </div>
      </div>

      {/* 16:9 윈도우 모니터 프레임 */}
      <div className="mx-auto w-full max-w-4xl aspect-video bg-zinc-950 rounded-md border-[6px] border-zinc-800 shadow-xl overflow-hidden flex flex-col relative transition-all duration-500">
        
        {/* OS Top: Browser Tabs & URL Bar */}
        <div className="bg-zinc-200 w-full shrink-0 flex flex-col">
          {/* Tabs */}
          <div className="flex items-end h-8 px-2 gap-1 pt-2 bg-zinc-300">
            <div className="w-32 h-full bg-zinc-100 rounded-t-md flex items-center px-2 text-[8px] font-sans text-zinc-700">
              PDF-DS System
            </div>
            <div className="w-8 h-6 bg-zinc-300 rounded-full flex items-center justify-center text-[10px] text-zinc-500">+</div>
          </div>
          {/* URL Bar */}
          <div className="h-10 bg-zinc-100 flex items-center px-2 gap-2 border-b border-zinc-300">
            <div className="flex gap-1">
              <div className="w-4 h-4 rounded-full bg-zinc-300"></div>
              <div className="w-4 h-4 rounded-full bg-zinc-300"></div>
              <div className="w-4 h-4 rounded-full bg-zinc-300"></div>
            </div>
            <div className="flex-1 h-6 bg-white border border-zinc-300 rounded-full text-[8px] flex items-center px-3 text-zinc-400 font-mono">
              https://pdf-ds.system/
            </div>
          </div>
        </div>

        {/* Website Content Area */}
        <div className="flex-1 bg-white relative overflow-hidden flex transition-all duration-500">
            
          {/* PDF-DS LAYOUT */}
          <div className="w-full flex-1 flex relative animate-fade-in">
            {/* PDF-DS LEFT 38% */}
            <div className="w-[38%] bg-zinc-100 border-r border-zinc-300 h-full flex flex-col relative group">
              {/* Overlay Annotation */}
              <div className="absolute inset-0 bg-red-700/5 border-2 border-red-500/50 z-20 flex flex-col items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-red-700 text-white font-mono font-bold text-xs px-3 py-1.5 rounded shadow-lg">
                  38% CONTROL PANEL
                </div>
                <div className="text-[10px] text-red-700 font-bold bg-white/90 px-2 mt-2 rounded border border-red-200">
                  Geist Mono / #F4F4F5 / Fixed
                </div>
              </div>

              {/* PDF-DS Header Area */}
              <div className="h-14 border-b border-zinc-200 flex items-center px-4 shrink-0">
                <div className="w-4 h-4 bg-red-750"></div>
                <span className="text-[10px] font-mono text-zinc-900 font-bold ml-2">PDF-DS SYSTEM</span>
              </div>
              {/* PDF-DS Controls */}
              <div className="p-4 flex flex-col gap-3 flex-1 overflow-y-auto">
                  <div className="w-full h-6 bg-zinc-200 rounded-sm"></div>
                  <div className="flex gap-2">
                    <div className="w-1/2 h-8 bg-white border border-zinc-200 rounded-sm"></div>
                    <div className="w-1/2 h-8 bg-white border border-zinc-200 rounded-sm"></div>
                  </div>
                  <div className="w-full h-24 bg-white border border-zinc-200 rounded-sm mt-2 flex flex-col gap-2 p-3 text-[8px] text-zinc-400 font-mono">
                    [SYSTEM_METADATA_BLOCK]
                    <div className="w-3/4 h-1.5 bg-zinc-200 mt-1"></div>
                    <div className="w-1/2 h-1.5 bg-zinc-200 mt-1"></div>
                    <div className="w-2/3 h-1.5 bg-zinc-200 mt-1"></div>
                  </div>
                    <div className="mt-auto pt-4">
                    <div className="w-full h-10 rounded-full bg-red-750 flex items-center justify-center overflow-hidden">
                      <div className="w-4 h-4 bg-white/20 rounded-full mr-2"></div>
                      <span className="text-white text-[9px] font-bold tracking-wider">PRIMARY ACTION</span>
                    </div>
                  </div>
              </div>
            </div>

            {/* PDF-DS RIGHT 62% */}
            <div className="w-[62%] h-full bg-white flex flex-col border-l border-zinc-200/50 relative group">
              {/* Overlay Annotation */}
              <div className="absolute inset-0 bg-blue-700/5 border-2 border-blue-500/50 z-20 flex flex-col items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-blue-700 text-white font-mono font-bold text-xs px-3 py-1.5 rounded shadow-lg">
                  62% CONTENT CANVAS
                </div>
                <div className="text-[10px] text-blue-700 font-bold bg-white/90 px-2 mt-2 rounded border border-blue-200">
                  Pretendard / #FFFFFF / Scrollable
                </div>
              </div>

                {/* 62 Canvas Header */}
                <div className="h-14 flex items-center px-8 shrink-0 justify-end border-b border-zinc-50">
                  <span className="text-[9px] font-mono text-zinc-400">DATA CANVAS VIEW</span>
                </div>
                {/* 62 Canvas Body */}
                <div className="flex-1 p-8 grid grid-cols-2 gap-4">
                  <div className="col-span-2 h-12 flex items-center border-b border-zinc-100">
                    <div className="w-48 h-6 bg-zinc-200 rounded"></div>
                  </div>
                  <div className="bg-white border border-zinc-100 shadow-sm h-32 rounded-lg p-4 flex flex-col relative overflow-hidden">
                    <div className="w-1/3 h-4 bg-zinc-200 rounded mb-4"></div>
                    <div className="w-full border-b border-zinc-100 my-2"></div>
                    <div className="w-full h-2 bg-zinc-100 rounded mb-2"></div>
                    <div className="w-full h-2 bg-zinc-100 rounded mb-2"></div>
                    <div className="w-2/3 h-2 bg-zinc-100 rounded"></div>
                  </div>
                  <div className="bg-white border border-zinc-100 shadow-sm h-32 rounded-lg p-4 flex flex-col relative overflow-hidden">
                    <div className="w-1/3 h-4 bg-zinc-200 rounded mb-4"></div>
                    <div className="w-full border-b border-zinc-100 my-2"></div>
                    <div className="w-full h-2 bg-zinc-100 rounded mb-2"></div>
                    <div className="w-full h-2 bg-zinc-100 rounded mb-2"></div>
                    <div className="w-2/3 h-2 bg-zinc-100 rounded"></div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* OS Bottom: Windows Taskbar */}
        <div className="h-10 bg-zinc-900 w-full shrink-0 flex items-center px-2 justify-between z-30 ring-1 ring-black/50">
           <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 text-[10px]">W</div>
             <div className="w-6 h-6 rounded bg-zinc-800"></div>
             <div className="w-6 h-6 rounded bg-zinc-800 border-b-2 border-blue-400 shadow-sm"></div>
           </div>
           <div className="flex gap-3 text-[8px] text-zinc-400 font-mono items-center">
             <span>ENG</span>
             <div className="flex flex-col items-end leading-tight">
               <span>12:00 PM</span>
               <span>2024-05-23</span>
             </div>
           </div>
        </div>
      </div>
      <p className="text-[10px] text-zinc-400 mt-4 text-center">
        * 마우스를 레이아웃 영역에 호버하여 38:62 정밀 할당 영역을 확인하세요.
      </p>
    </div>
  );
}
