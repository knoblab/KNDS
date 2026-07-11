import React, { useState } from 'react';
import { Terminal, Copy, Check, ShieldCheck } from 'lucide-react';
import { CodePlatform } from '../types';

export default function CodeExport() {
  const [platform, setPlatform] = useState<CodePlatform>('web');
  const [copied, setCopied] = useState(false);

  const codeBlocks: Record<CodePlatform, string> = {
    web: `/* KNDS Core Web-Token Stylesheet & Utility Implementation */
:root {
  /* Spacing Scale */
  --space-050: 4px;
  --space-100: 8px;
  --space-150: 12px;
  --space-200: 16px;
  --space-300: 24px;
  --space-400: 32px;
  --space-600: 48px;

  /* Achromatic Base Palette */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f4f4f5;
  --color-border-default: #e4e4e7;
  --color-border-hover: #a1a1aa;
  --color-text-primary: #09090b;
  --color-text-secondary: #71717a;
  
  /* Functional Red Accent (Single CTA Limit) */
  --color-functional-red: #ad1d1d;
  --color-red-hover: #c21f1f;
  --color-red-active: #941a1a;
  
  /* Hardware Bevel & Shadow Physics */
  --shadow-hardware-bevel: 0 1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

/* Primary Capsule-to-Rect Morphing Button */
.knds-btn-primary {
  height: 44px;
  padding: 0 var(--space-200);
  background-color: var(--color-functional-red);
  color: #ffffff;
  border: none;
  font-family: 'Pretendard Variable', Pretendard, -apple-system, sans-serif;
  font-weight: 700;
  border-radius: 9999px; /* Capsule base shape (--radius-full) */
  transition: border-radius 0.28s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s ease;
}
.knds-btn-primary:hover {
  background-color: var(--color-red-hover);
  border-radius: 14px; /* Soft Square Morphing (between --radius-md and --radius-lg) */
}
.knds-btn-primary:active {
  background-color: var(--color-red-active);
  border-radius: 8px; /* Sharp Square Morphing (--radius-md) */
}`,
    react: `// KNDS React TSX Component Integration (JIT Utility Classes)
import React, { useState } from 'react';

interface KndsCardProps {
  title: string;
  category: string;
  onExecute: () => void;
}

export default function KndsHardwareCard({ title, category, onExecute }: KndsCardProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="knds-panel knds-p-300 knds-transition-all hover:knds-border-hover">
      {/* Header with Mono Category Indicator */}
      <div className="knds-flex-row knds-items-center knds-justify-between knds-mb-200">
        <span className="knds-text-label-14-mono knds-bg-secondary knds-px-100 knds-py-050 knds-radius-sm">
          {category}
        </span>
        <span className="knds-text-label-14-mono knds-text-muted">STATUS: READY</span>
      </div>

      {/* Main Title & Body */}
      <h3 className="knds-text-heading-24 knds-mb-100">{title}</h3>
      <p className="knds-text-copy-14 knds-text-secondary knds-mb-300">
        하드웨어 기판의 촉각적 질감과 24px 청사진 격자에 정렬된 정밀 인터페이스입니다.
      </p>

      {/* Footer Controls */}
      <div className="knds-flex-row knds-items-center knds-justify-between knds-border-top knds-pt-200">
        <button
          type="button"
          onClick={() => setIsActive(!isActive)}
          className="knds-secondary-btn knds-btn-md"
        >
          {isActive ? 'DISENGAGE' : 'INSPECT'}
        </button>
        <button
          type="button"
          onClick={onExecute}
          className="knds-btn-primary knds-btn-md"
        >
          ACTIVATE NODE (#AD1D1D)
        </button>
      </div>
    </div>
  );
}`,
    android: `package com.knoblab.designsystem.theme

import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.spring
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsHoveredAsState
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

// KNDS Kotlin Token Mapping
object KndsTokens {
    val Space100 = 8.dp
    val Space150 = 12.dp
    val Space200 = 16.dp
    val Space300 = 24.dp
    
    val ColorFunctionalRed = Color(0xFFAD1D1D)
    val ColorRedHover = Color(0xFFC21F1F)
    val ColorRedActive = Color(0xFF941A1A)
    val ColorBgPrimary = Color(0xFFFFFFFF)
}

@Composable
fun KndsMorphingButton(
    onClick: () -> Unit,
    textLabel: String,
    modifier: Modifier = Modifier
) {
    val interactionSource = remember { MutableInteractionSource() }
    val isPressed by interactionSource.collectIsPressedAsState()
    val isHovered by interactionSource.collectIsHoveredAsState()

    // 하드웨어 가압 피드백 모핑 스프링 물리보간
    val animatedCornerRadius by animateDpAsState(
        targetValue = when {
            isPressed -> 8.dp   // Sharp Square
            isHovered -> 14.dp  // Soft Square
            else -> 22.dp      // Fully Rounded Capsule (Height 44.dp / 2)
        },
        animationSpec = spring(dampingRatio = 0.65f, stiffness = 400f)
    )

    val buttonColor = when {
        isPressed -> KndsTokens.ColorRedActive
        isHovered -> KndsTokens.ColorRedHover
        else -> KndsTokens.ColorFunctionalRed
    }

    Button(
        onClick = onClick,
        shape = RoundedCornerShape(animatedCornerRadius),
        colors = ButtonDefaults.buttonColors(
            containerColor = buttonColor,
            contentColor = KndsTokens.ColorBgPrimary
        ),
        interactionSource = interactionSource,
        modifier = modifier.height(44.dp)
    ) {
        Text(text = textLabel)
    }
}`,
    ios: `import SwiftUI

// KNDS iOS Swift Token Extensions
public struct KndsSpacing {
    public static let space100: CGFloat = 8
    public static let space150: CGFloat = 12
    public static let space200: CGFloat = 16
    public static let space300: CGFloat = 24
}

public struct KndsColors {
    public static let functionalRed = Color(red: 173/255, green: 29/255, blue: 29/255)
    public static let redHover = Color(red: 194/255, green: 31/255, blue: 31/255)
    public static let redActive = Color(red: 148/255, green: 26/255, blue: 26/255)
    public static let bgPrimary = Color.white
}

// SwiftUI Custom Morphing Style Modifier
public struct KndsMorphingButtonStyle: ButtonStyle {
    public func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(.custom("Pretendard-Bold", size: 14))
            .frame(height: 44)
            .padding(.horizontal, KndsSpacing.space200)
            .background(
                configuration.isPressed ? KndsColors.redActive : KndsColors.functionalRed
            )
            .foregroundColor(KndsColors.bgPrimary)
            // SwiftUI 스프링 엔진 보간을 통한 알약-사각형 모핑 연산
            .cornerRadius(configuration.isPressed ? 8 : 22) // Height 44 / 2
            .animation(.spring(response: 0.25, dampingFraction: 0.62), value: configuration.isPressed)
    }
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeBlocks[platform]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTabChange = (plat: CodePlatform) => {
    setPlatform(plat);
  };

  return (
    <div className="knds-panel knds-p-300 knds-mb-400">
      <div className="knds-panel-header knds-flex-row knds-justify-between knds-items-center knds-mb-200">
        <div>
          <span className="knds-text-label-14-mono knds-text-red knds-mb-050 knds-font-bold knds-block">
            CROSS-PLATFORM EXPORTER
          </span>
          <h4 className="knds-text-label-16 knds-font-bold">
            크로스플랫폼 물리 피드백 및 토큰 통합 컴파일 서식
          </h4>
        </div>
        <Terminal className="knds-text-muted" size={18} />
      </div>

      <p className="knds-text-copy-14 knds-text-muted knds-mb-300">
        이종 플랫폼(Web CSS, React TSX, Android Compose, iOS SwiftUI)에서 단 하나의 물리 디자인 규칙을 준수하여 가동되도록 작성된 <strong>피지컬 마스터 서식</strong>입니다. 프레임워크 탭을 클릭하여 각 플랫폼별 동일 규격 구현 소스를 복사하십시오.
      </p>

      {/* Platform Tabs & Copy Bar */}
      <div className="knds-flex-row knds-items-center knds-justify-between knds-gap-150 knds-mb-200 knds-flex-wrap">
        <div className="knds-flex-row knds-bg-secondary knds-p-050 knds-border knds-radius-md knds-overflow-x-auto">
          <button
            type="button"
            onClick={() => handleTabChange('web')}
            className={`knds-px-150 knds-py-050 knds-radius-sm knds-text-label-14-mono knds-cursor-pointer knds-transition-all ${
              platform === 'web'
                ? 'knds-bg-primary knds-text-primary knds-font-bold knds-border knds-shadow-sm'
                : 'knds-bg-transparent knds-text-muted hover:knds-text-primary knds-border-transparent'
            }`}
          >
            Web (CSS Token)
          </button>
          <button
            type="button"
            onClick={() => handleTabChange('react')}
            className={`knds-px-150 knds-py-050 knds-radius-sm knds-text-label-14-mono knds-cursor-pointer knds-transition-all ${
              platform === 'react'
                ? 'knds-bg-primary knds-text-primary knds-font-bold knds-border knds-shadow-sm'
                : 'knds-bg-transparent knds-text-muted hover:knds-text-primary knds-border-transparent'
            }`}
          >
            React (TSX & JIT)
          </button>
          <button
            type="button"
            onClick={() => handleTabChange('android')}
            className={`knds-px-150 knds-py-050 knds-radius-sm knds-text-label-14-mono knds-cursor-pointer knds-transition-all ${
              platform === 'android'
                ? 'knds-bg-primary knds-text-primary knds-font-bold knds-border knds-shadow-sm'
                : 'knds-bg-transparent knds-text-muted hover:knds-text-primary knds-border-transparent'
            }`}
          >
            Android (Kotlin Compose)
          </button>
          <button
            type="button"
            onClick={() => handleTabChange('ios')}
            className={`knds-px-150 knds-py-050 knds-radius-sm knds-text-label-14-mono knds-cursor-pointer knds-transition-all ${
              platform === 'ios'
                ? 'knds-bg-primary knds-text-primary knds-font-bold knds-border knds-shadow-sm'
                : 'knds-bg-transparent knds-text-muted hover:knds-text-primary knds-border-transparent'
            }`}
          >
            iOS (SwiftUI Swift)
          </button>
        </div>

        {/* Copy Trigger */}
        <button
          type="button"
          onClick={handleCopy}
          className="knds-text-label-14-mono knds-flex-row knds-items-center knds-gap-050 knds-px-150 knds-py-050 knds-radius-sm knds-bg-primary knds-border hover:knds-text-primary knds-text-secondary knds-cursor-pointer knds-transition-all"
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
      </div>

      {/* Code Viewer Box */}
      <div className="knds-bg-black knds-text-white knds-p-200 knds-border knds-radius-md knds-font-mono knds-relative knds-overflow-x-auto knds-max-h-[360px]">
        <div className="knds-absolute knds-top-0 knds-right-0 knds-bg-primary knds-text-muted knds-px-100 knds-py-050 knds-radius-sm knds-border knds-text-label-14-mono knds-m-100">
          {platform === 'web'
            ? 'CSS / VARIABLES'
            : platform === 'react'
            ? 'REACT / TSX'
            : platform === 'android'
            ? 'KOTLIN / COMPOSE'
            : 'SWIFT / SWIFTUI'}
        </div>
        <pre className="knds-selectable knds-m-0 knds-whitespace-pre-wrap knds-pb-200">
          <code>{codeBlocks[platform]}</code>
        </pre>
      </div>

      <div className="knds-flex-row knds-items-center knds-gap-100 knds-mt-200 knds-p-150 knds-bg-secondary knds-border knds-radius-md knds-text-secondary">
        <ShieldCheck size={18} className="knds-text-red knds-flex-shrink-0" />
        <span className="knds-text-copy-13-mono">
          ✓ 본 코드는 각 하드웨어 플랫폼의 그래픽 파이프라인(Web GPU / Skia / CoreGraphics) 및 가압 상태 인디케이터 스펙에 부합하게 자동 변환된 피지컬 모핑 명세입니다.
        </span>
      </div>
    </div>
  );
}
