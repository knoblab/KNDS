import React, { useState } from 'react';
import { Palette, Copy, Check, Moon, Sun } from 'lucide-react';
import { ColorToken } from '../types';

export default function ColorSandbox() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const colors: (ColorToken & { darkHex: string })[] = [
    { token: '--color-bg-primary', hex: '#ffffff', darkHex: '#09090B', layer: '메인 화폭', rule: '디폴트 상태의 메인 캔버스 극단 대비' },
    { token: '--color-bg-secondary', hex: '#F4F4F5', darkHex: '#18181B', layer: '구획 분할면', rule: '인접한 패널 간 시각적 명도 격리' },
    { token: '--color-border-default', hex: '#E4E4E7', darkHex: '#27272A', layer: '모서리 선', rule: '일반 상태 1px 경계선, 정직한 구획 분할' },
    { token: '--color-border-hover', hex: '#A1A1AA', darkHex: '#52525B', layer: '포커스 선', rule: '호버 구역 1차 시각 피드백 명도' },
    { token: '--color-text-primary', hex: '#09090B', darkHex: '#ffffff', layer: '주 서식', rule: '초고대비의 완벽한 폰트 인지 대비 확보' },
    { token: '--color-text-secondary', hex: '#71717A', darkHex: '#A1A1AA', layer: '설명서 및 기호', rule: '설명 단락, 부가 수치 단위 레이블' },
    { token: '--color-functional-red', hex: '#AD1D1D', darkHex: '#AD1D1D', layer: '전략 액센트 적색', rule: '역사적 하드웨어 가압 적색 계승 및 상태 환기' },
  ];

  const triggerCopy = (hex: string, tokenName: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedToken(tokenName);
    setTimeout(() => {
      setCopiedToken(null);
    }, 1500);
  };

  const getDisplayColor = (color: typeof colors[0]): string => {
    return theme === 'light' ? color.hex : color.darkHex;
  };
  
  const getSimulatedBg = () => theme === 'light' ? '#ffffff' : '#09090B';
  const getSimulatedText = () => theme === 'light' ? '#09090B' : '#ffffff';

  return (
    <div className="knds-panel">
      <div className="knds-panel-header knds-flex-row knds-justify-between knds-items-center">
        <div>
          <span className="knds-text-label-14-mono knds-text-red knds-mb-100 knds-font-bold" style={{ display: 'block' }}>
            CH.4 INTERACTIVE SANDBOX
          </span>
          <h4 className="knds-text-label-16 knds-font-bold">
            아크로매틱 컬러 & 테마 시뮬레이터 (Light & Dark Mode)
          </h4>
        </div>
        <Palette className="knds-text-muted" style={{ width: 16, height: 16 }} />
      </div>

      <p className="knds-text-copy-14 knds-text-muted knds-mb-300">
        KNDS는 복잡한 그라디언트를 배제하고 <strong>완벽한 모노크롬 대비(Achromatic Scale)</strong>와 오직 하나의 펑셔널 레드로만 구성됩니다. 우측 상단의 테마를 전환하여, 두 극단(White & Black)의 완벽한 반전 균형을 검측하십시오.
      </p>

      {/* Simulator mode controller buttons */}
      <div className="knds-flex-row knds-gap-100 knds-mb-200 knds-bg-secondary knds-p-050 knds-border knds-radius-md" style={{ maxWidth: 320 }}>
        <button
          onClick={() => { setTheme('light'); }}
          className="knds-text-label-14-mono knds-flex-row knds-items-center knds-justify-center knds-gap-100 knds-font-bold knds-radius-sm knds-cursor-pointer"
          style={{
            flex: 1, padding: '8px 16px', border: 'none', transition: 'all 0.2s',
            backgroundColor: theme === 'light' ? 'var(--color-bg-primary)' : 'transparent',
            color: theme === 'light' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
            boxShadow: theme === 'light' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none'
          }}
        >
          <Sun style={{ width: 14, height: 14 }} /> Light Theme
        </button>
        <button
          onClick={() => { setTheme('dark'); }}
          className="knds-text-label-14-mono knds-flex-row knds-items-center knds-justify-center knds-gap-100 knds-font-bold knds-radius-sm knds-cursor-pointer"
          style={{
            flex: 1, padding: '8px 16px', border: 'none', transition: 'all 0.2s',
            backgroundColor: theme === 'dark' ? '#09090B' : 'transparent',
            color: theme === 'dark' ? '#ffffff' : 'var(--color-text-secondary)',
            boxShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none'
          }}
        >
          <Moon style={{ width: 14, height: 14 }} /> Dark Theme
        </button>
      </div>

      <div className="knds-flex-row knds-gap-300 knds-p-200 knds-border knds-flex-wrap" style={{ borderRadius: '8px', backgroundColor: getSimulatedBg(), transition: 'background-color 0.3s' }}>
        
        {/* SWATCH PANEL LIST */}
        <div className="knds-flex-col knds-gap-100" style={{ flex: '1 1 50%' }}>
          {colors.map((color) => {
            const displayColor = getDisplayColor(color);
            return (
              <div 
                key={color.token}
                className="knds-flex-row knds-items-center knds-justify-between knds-border knds-radius-md"
                style={{ padding: '16px', transition: 'colors 0.3s', borderColor: getDisplayColor(colors[2]), backgroundColor: theme === 'light' ? '#ffffff' : '#18181B' }}
              >
                <div className="knds-flex-row knds-items-center knds-gap-150">
                  <div 
                    className="knds-radius-sm"
                    style={{ width: 40, height: 40, border: '1px solid', boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)', transition: 'all 0.3s', backgroundColor: displayColor, borderColor: getDisplayColor(colors[3]) }}
                  />
                  <div className="knds-flex-col">
                    <span className="knds-text-label-14-mono knds-font-bold" style={{ color: getSimulatedText(), fontSize: 11 }}>{color.token}</span>
                    <span className="knds-text-label-14-mono" style={{ color: getDisplayColor(colors[5]), fontSize: 9 }}>{color.layer} — {displayColor}</span>
                  </div>
                </div>

                <div className="knds-flex-row knds-items-center knds-gap-100">
                  <span className="knds-text-copy-14" style={{ fontSize: 10, maxWidth: 140, textAlign: 'right', color: getDisplayColor(colors[5]) }}>
                    {color.rule}
                  </span>
                  <button
                    onClick={() => triggerCopy(displayColor, color.token)}
                    className="knds-radius-sm knds-cursor-pointer"
                    style={{ padding: '8px', transition: 'colors 0.2s', border: 'none', background: 'none', color: getDisplayColor(colors[5]) }}
                    title="Hex 코드 복사"
                  >
                    {copiedToken === color.token ? (
                      <Check style={{ width: 14, height: 14, color: getDisplayColor(colors[6]) }} />
                    ) : (
                      <Copy style={{ width: 14, height: 14 }} />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CONTRAST WARNING SYSTEM DEMONSTRATOR */}
        <div className="knds-flex-col knds-justify-between knds-border knds-p-200 knds-radius-sm" style={{ flex: '1 1 40%', backgroundColor: getDisplayColor(colors[1]), borderColor: getDisplayColor(colors[2]) }}>
          <div>
            <span className="knds-text-label-14-mono knds-font-bold" style={{ display: 'block', marginBottom: 8, fontSize: 10, color: getDisplayColor(colors[5]) }}>PART B: DOUBLE SAFE-GUARD</span>
            <div className="knds-border knds-p-200 knds-radius-md" style={{ boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: getSimulatedBg(), borderColor: getDisplayColor(colors[2]) }}>
              
              <div 
                className="knds-border knds-p-150 knds-mb-200 knds-radius-sm"
                style={{ 
                  transition: 'colors 0.3s',
                  backgroundColor: theme === 'light' ? '#FEF2F2' : 'rgba(127, 29, 29, 0.12)',
                  borderColor: theme === 'light' ? '#FEE2E2' : 'rgba(127, 29, 29, 0.5)'
                }}
              >
                <div className="knds-flex-row knds-gap-100 knds-items-start">
                  <div 
                    className="knds-radius-full knds-flex-row knds-items-center knds-justify-center knds-font-bold knds-flex-shrink-0"
                    style={{ width: 20, height: 20, fontSize: 12, color: 'var(--color-bg-primary)', backgroundColor: getDisplayColor(colors[6]) }}
                  >
                    !
                  </div>
                  <div>
                    <span 
                      className="knds-font-bold"
                      style={{ fontSize: 12, display: 'block', transition: 'colors 0.3s', color: getDisplayColor(colors[6]) }}
                    >
                      실패: 검증 연산 누락
                    </span>
                    <p style={{ fontSize: 10, fontFamily: 'var(--font-sans)', marginTop: 8, lineHeight: 1.5, transition: 'colors 0.3s', color: theme === 'light' ? '#52525B' : '#A1A1AA' }}>
                      데이터베이스와 실시간 소켓 바운딩 터널이 끊겼습니다. 네트워크 라우트 세팅값을 지금 바로 점검하세요.
                    </p>
                  </div>
                </div>
              </div>

              <div className="knds-flex-col knds-gap-050 knds-text-copy-14" style={{ fontSize: 10, lineHeight: 1.6, color: getDisplayColor(colors[5]) }}>
                <span style={{ fontWeight: 'bold', color: getSimulatedText() }}>완벽한 반전 균형 (Light & Dark):</span>
                <span>
                  시스템은 밝은 테마와 어두운 테마 환경에서 <strong>완벽한 1:1 대칭 명도</strong>를 유지합니다. 가장 순수한 흑과 백의 대비를 통해, 사용자는 어떠한 환경 설정에서도 콘텐츠 유실 없이 완벽한 정밀도로 작업을 계속할 수 있습니다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
