export interface ChapterMeta {
  num: number;
  title: string;
  sub: string;
  group: string;
}

export const CHAPTERS_DATA: ChapterMeta[] = [
  {
    num: 1,
    title: 'Philosophy',
    sub: '철학적 토대와 물리-디지털 융합 원칙',
    group: 'Foundations (설계 기초)'
  },
  {
    num: 2,
    title: 'System Architecture & JIT Engine',
    sub: '단일 레이어 순수 CSS 및 온디맨드 아키텍처',
    group: 'Foundations (설계 기초)'
  },
  {
    num: 3,
    title: 'Installation & CLI Pipeline',
    sub: 'CDN 및 JIT CLI/PostCSS 파이프라인 구축 가이드',
    group: 'Foundations (설계 기초)'
  },
  {
    num: 4,
    title: 'Blueprint Grid & Spacing',
    sub: '청사진 그리드와 기하학적 8px 여백 스케일',
    group: 'Foundations (설계 기초)'
  },
  {
    num: 5,
    title: 'Typography',
    sub: 'Pretendard 및 JetBrains Mono 이원 위계',
    group: 'Foundations (설계 기초)'
  },
  {
    num: 6,
    title: 'Color System',
    sub: '아크로매틱 고대비 도화지 및 펑셔널 레드 통제',
    group: 'Foundations (설계 기초)'
  },
  {
    num: 7,
    title: 'Tactile Materials',
    sub: '하드웨어 베벨 표면 및 반투명 머티리얼',
    group: 'Foundations (설계 기초)'
  },
  {
    num: 8,
    title: 'Buttons & Shape Morphing',
    sub: '택타일 스위치 모사 및 형태 모핑 상호작용',
    group: 'Components (컴포넌트 명세)'
  },
  {
    num: 9,
    title: 'Form Controls & Validation',
    sub: '입력 폼 제어기 및 직관적 시각 피드백',
    group: 'Components (컴포넌트 명세)'
  },
  {
    num: 10,
    title: 'Modals & Overlays',
    sub: '입체적 부유 레이어 및 키보드 접근성 제어',
    group: 'Components (컴포넌트 명세)'
  },
  {
    num: 11,
    title: 'Navigation Architecture',
    sub: '좌측 기능성 엣지 및 계층 이동 구조',
    group: 'Patterns (핵심 UX 패턴)'
  },
  {
    num: 12,
    title: 'Split Screen (25:75 Layout)',
    sub: '25:75 비율의 비대칭 스크린 레이아웃',
    group: 'Patterns (핵심 UX 패턴)'
  },
  {
    num: 13,
    title: 'Responsive Mobile Adaptation',
    sub: '모바일 100% 수직 스택 및 바텀 드로어 적응',
    group: 'Patterns (핵심 UX 패턴)'
  },
  {
    num: 14,
    title: 'QA Checklist & Verification',
    sub: '자동화 토큰 무결성 검수 및 실무 배포 수칙',
    group: 'Specifications & Credits'
  },
  {
    num: 15,
    title: 'Credits & Contributors',
    sub: 'KNDS 디자인 시스템 제작 공로자 및 기여자',
    group: 'Specifications & Credits'
  }
];

export const NAVIGATION_GROUPS = [
  'Foundations (설계 기초)',
  'Patterns (핵심 UX 패턴)',
  'Components (컴포넌트 명세)',
  'Specifications & Credits'
].map(groupName => ({
  category: groupName,
  items: CHAPTERS_DATA.filter(ch => ch.group === groupName)
}));
