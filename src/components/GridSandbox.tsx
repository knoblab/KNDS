import React, { useState } from 'react';
import { LayoutGrid, Eye, Check } from 'lucide-react';
import { SpacingToken } from '../types';

export default function GridSandbox() {
  const [selectedToken, setSelectedToken] = useState<string>('$space-200');
  
  const tokens: SpacingToken[] = [
    { name: '$space-025', rem: '0.125rem', px: 2, useCase: '미세 경계선 오프셋, 입력 필드 내 선택 표시기 정렬' },
    { name: '$space-050', rem: '0.25rem', px: 4, useCase: '배치 뱃지 내측 여백, 체크박스 내부 아이콘 마진' },
    { name: '$space-100', rem: '0.5rem', px: 8, useCase: '기본 베이스라인, 수직 리스트 요소 간 간정 격자' },
    { name: '$space-150', rem: '0.75rem', px: 12, useCase: '입력 폼 레이블과 입력 창 간의 결합 거리' },
    { name: '$space-200', rem: '1.0rem', px: 16, useCase: '카드 컨테이너 내측 기본 패딩, 표준 버튼 좌우 패딩' },
    { name: '$space-300', rem: '1.5rem', px: 24, useCase: '섹션 수직 격차, 표준 대화상자 여백, 마케팅 레이아웃' },
    { name: '$space-400', rem: '2.0rem', px: 32, useCase: '데스크톱 대시보드 주 격화 분할, 헤더 콘텐츠 외측' },
    { name: '$space-600', rem: '3.0rem', px: 48, useCase: '페이지 좌우 전역 마진, 히어로 영역 수직 패딩' },
    { name: '$space-800', rem: '4.0rem', px: 64, useCase: '비대칭 스플릿 수평 분할 경계면, 극단적 환기 공간' },
  ];

  const currentToken = tokens.find(t => t.name === selectedToken) || tokens[4];

  return (
    <div className="border border-zinc-200 bg-white p-6 rounded-lg font-sans my-4 shadow-sm relative">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-100">
        <div>
          <span className="font-mono text-xs tracking-wider text-red-700 font-bold uppercase block">
            CH.2 INTERACTIVE SANBOX
          </span>
          <h4 className="font-sans text-base font-semibold text-zinc-900">
            실시간 다중 스케일 여백(Spacing Scale) 조작기
          </h4>
        </div>
        <LayoutGrid className="text-zinc-400 w-4 h-4" />
      </div>

      <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
        아래 표에서 여백 토큰을 선택하면 <strong>물리적 부피와 간격 구조</strong>가 우측 다이어그램에 즉각적으로 반영됩니다. 이 가상 컴포넌트는 모든 마진, 패딩, 갭 계산이 엄밀한 토큰 가스 배수를 유지함을 보증합니다.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Token Table selector */}
        <div className="lg:col-span-7 overflow-x-auto text-[11px] font-mono border border-zinc-200 rounded">
          <table className="min-w-full divide-y divide-zinc-200">
            <thead className="bg-zinc-50">
              <tr>
                <th className="px-3 py-2 text-left text-[10px] font-bold text-zinc-600 uppercase tracking-wider">토큰명</th>
                <th className="px-3 py-2 text-left text-[10px] font-bold text-zinc-600 uppercase tracking-wider">Rem</th>
                <th className="px-3 py-2 text-left text-[10px] font-bold text-zinc-600 uppercase tracking-wider">Pixel</th>
                <th className="px-3 py-2 text-left text-[10px] font-bold text-zinc-600 uppercase tracking-wider">시각 바</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-zinc-150">
              {tokens.map((token) => (
                <tr 
                  key={token.name}
                  onClick={() => setSelectedToken(token.name)}
                  className={`cursor-pointer transition-colors ${selectedToken === token.name ? 'bg-red-50/70 font-bold' : 'hover:bg-zinc-50'}`}
                >
                  <td className="px-3 py-2.5 text-zinc-900 flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${selectedToken === token.name ? 'bg-red-700' : 'bg-transparent'}`} />
                    {token.name}
                  </td>
                  <td className="px-3 py-2.5 text-zinc-500">{token.rem}</td>
                  <td className="px-3 py-2.5 text-zinc-950 font-bold">{token.px}px</td>
                  <td className="px-3 py-2.5">
                    <div 
                      className={`h-2.5 rounded ${selectedToken === token.name ? 'bg-red-700' : 'bg-zinc-300'}`} 
                      style={{ width: `${Math.min(100, Math.max(4, token.px * 1.5))}px` }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Dynamic visual preview panel */}
        <div className="lg:col-span-5 bg-zinc-50 border border-zinc-200 rounded p-4 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono text-zinc-400 block mb-1">SELECTED SPACING VISUALIZATION</span>
            <div className="p-3 bg-white border border-zinc-200 rounded mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-zinc-800 font-sans">{currentToken.name}</span>
                <span className="text-xs font-mono font-bold text-red-700">{currentToken.px}px</span>
              </div>
              <p className="text-[11px] text-zinc-500 font-sans leading-normal">{currentToken.useCase}</p>
            </div>
          </div>

          {/* Precision mockup layout demonstrating the spacing */}
          <div className="border border-dashed border-zinc-300 p-2 rounded relative bg-white overflow-hidden min-h-[160px] flex flex-col justify-center">
            {/* The Outer Margin visualizer */}
            <div className="text-[9px] font-mono text-zinc-300 absolute top-1 left-2">PARENT WRAPPER</div>

            {/* Gap visualizer block */}
            <div className="flex flex-col gap-2">
              <div className="bg-zinc-100 border border-zinc-200 p-2 rounded text-center text-[10px] font-mono text-zinc-600">
                컨테이너 요소 A
              </div>
              
              {/* This is the spacer representing selected token */}
              <div className="relative flex items-center justify-center py-1">
                {/* Horizontal dimension lines */}
                <div className="absolute inset-x-0 h-[1px] bg-red-700 opacity-40 top-1/2" />
                
                {/* Visual Gap Representation block */}
                <div 
                  className="bg-red-100 border-t border-b border-red-300 transition-all duration-300 flex items-center justify-center overflow-hidden z-10"
                  style={{ height: `${currentToken.px}px`, minHeight: '6px' }}
                >
                  <span className="text-[8px] font-mono text-red-800 font-bold leading-none bg-red-50 px-1 rounded transform scale-75">
                    {currentToken.name}
                  </span>
                </div>
              </div>

              <div className="bg-zinc-100 border border-zinc-200 p-2 rounded text-center text-[10px] font-mono text-zinc-600">
                컨테이너 요소 B
              </div>
            </div>

            {/* Scale indicator inside diagram */}
            <div className="mt-4 pt-2 border-t border-zinc-100 flex justify-between items-center text-[9px] font-mono text-zinc-400">
              <span>수치 배수: ×{currentToken.px / 8} (8dp Base)</span>
              <span>Rem 환율: {currentToken.rem}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
