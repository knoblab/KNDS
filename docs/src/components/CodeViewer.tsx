import React, { useState } from 'react';
import { Code, Copy, Check, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export interface CodeTab {
  label: string;
  code: string;
  tag?: string;
}

export interface CodeViewerProps {
  title?: string;
  subtitle?: string;
  code?: string;
  codeBlocks?: CodeTab[];
  defaultOpen?: boolean;
  note?: string;
}

export default function CodeViewer({
  title = '구현 코드 및 토큰 명세 보기',
  subtitle = 'KNDS JIT & Static Token Spec',
  code,
  codeBlocks,
  defaultOpen = false,
  note = 'KNDS JIT 및 CDN 마스터 스타일시트 환경에서 100% 동일한 피지컬 모핑 및 레이아웃이 보장됩니다.'
}: CodeViewerProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [activeIdx, setActiveIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const tabs: CodeTab[] = codeBlocks && codeBlocks.length > 0
    ? codeBlocks
    : [{ label: 'HTML / KNDS Class', code: code || '', tag: 'HTML' }];

  const currentTab = tabs[activeIdx] || tabs[0];
  const currentCode = currentTab ? currentTab.code.trim() : '';

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentCode) return;
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = currentCode.split('\n');

  return (
    <div className="knds-panel knds-border knds-radius-md knds-overflow-hidden knds-mt-300 knds-mb-300 knds-transition-all">
      {/* Top Header Toggle Bar */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="knds-flex-row knds-items-center knds-justify-between knds-p-200 knds-bg-secondary knds-cursor-pointer hover:knds-border-hover knds-transition-colors"
      >
        <div className="knds-flex-row knds-items-center knds-gap-150">
          <div className="knds-flex-row knds-items-center knds-justify-center knds-bg-primary knds-p-100 knds-radius-sm knds-border">
            <Code className="knds-text-red" size={18} />
          </div>
          <div>
            <div className="knds-flex-row knds-items-center knds-gap-100">
              <span className="knds-text-label-16 knds-font-bold">{title}</span>
              <span className="knds-text-label-14-mono knds-bg-primary knds-px-100 knds-py-050 knds-radius-sm knds-text-muted knds-border">
                {subtitle}
              </span>
            </div>
            <p className="knds-text-copy-13-mono knds-text-muted knds-mt-050 knds-mb-0">
              {isOpen ? '하단 코드 블록에서 프레임워크별 적용 명세를 확인하고 복사할 수 있습니다.' : '클릭하여 실무 프로젝트에 즉시 적용 가능한 구현 소스코드를 확인하십시오.'}
            </p>
          </div>
        </div>

        <div className="knds-flex-row knds-items-center knds-gap-100">
          {isOpen && (
            <button
              type="button"
              onClick={handleCopy}
              className="knds-flex-row knds-items-center knds-gap-050 knds-px-100 knds-py-050 knds-radius-sm knds-bg-primary knds-border hover:knds-text-primary knds-text-secondary knds-text-label-14-mono knds-cursor-pointer knds-transition-all"
            >
              {copied ? (
                <>
                  <Check size={14} className="knds-text-red" />
                  <span className="knds-font-bold knds-text-red">복사 완료!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>클립보드 복사</span>
                </>
              )}
            </button>
          )}

          <div className="knds-flex-row knds-items-center knds-gap-050 knds-px-100 knds-py-050 knds-radius-sm knds-bg-primary knds-border knds-text-secondary">
            <span className="knds-text-label-14-mono knds-font-bold">
              {isOpen ? '코드 닫기' : '코드 열기'}
            </span>
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </div>
      </div>

      {/* Expanded Code & Specification View */}
      {isOpen && (
        <div className="knds-border-top knds-bg-primary">
          {/* Multi-Tab Switcher (If multiple framework/code tabs provided) */}
          {tabs.length > 1 && (
            <div className="knds-flex-row knds-items-center knds-justify-between knds-p-150 knds-bg-secondary knds-border-bottom knds-overflow-x-auto">
              <div className="knds-flex-row knds-items-center knds-gap-100">
                {tabs.map((tab, idx) => (
                  <button
                    key={tab.label}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`knds-flex-row knds-items-center knds-gap-050 knds-px-150 knds-py-050 knds-radius-sm knds-text-label-14-mono knds-cursor-pointer knds-transition-all ${
                      activeIdx === idx
                        ? 'knds-bg-primary knds-text-primary knds-font-bold knds-border knds-shadow-sm'
                        : 'knds-bg-transparent knds-text-muted hover:knds-text-primary knds-border-transparent'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {tab.tag && (
                      <span className="knds-px-100 knds-py-050 knds-radius-sm knds-bg-secondary knds-text-muted knds-font-mono">
                        {tab.tag}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="knds-text-label-14-mono knds-text-muted knds-px-100">
                {tabs[activeIdx]?.tag || 'CODE SPEC'}
              </div>
            </div>
          )}

          {/* Code Box Pane */}
          <div className="knds-bg-black knds-text-white knds-p-200 knds-overflow-x-auto knds-max-h-[480px] knds-font-mono knds-relative">
            <div className="knds-flex-row knds-items-start knds-gap-200">
              {/* Line Numbers (Non-selectable) */}
              <div className="knds-text-muted knds-select-none knds-text-right knds-opacity-40 knds-border-right knds-pr-150">
                {lines.map((_, i) => (
                  <div key={i} className="knds-line-height-relaxed">
                    {i + 1}
                  </div>
                ))}
              </div>

              {/* Source Code Snippet */}
              <pre className="knds-selectable knds-w-full knds-m-0 knds-whitespace-pre-wrap knds-word-break">
                <code>{currentCode}</code>
              </pre>
            </div>
          </div>

          {/* Bottom Footer Tip */}
          {note && (
            <div className="knds-flex-row knds-items-center knds-gap-100 knds-p-150 knds-bg-secondary knds-border-top knds-text-copy-13-mono knds-text-secondary">
              <Sparkles size={15} className="knds-text-red knds-flex-shrink-0" />
              <span>{note}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
