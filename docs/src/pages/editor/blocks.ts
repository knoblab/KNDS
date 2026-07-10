import { EditorNode, NodeType } from './types';

const generateId = () => 'node-' + Math.random().toString(36).substr(2, 9);

export const createNode = (
  type: NodeType,
  classes: string[] = [],
  content?: string,
  attributes: Record<string, string> = {},
  styles: React.CSSProperties = {},
  children: EditorNode[] = []
): EditorNode => ({
  id: generateId(),
  type,
  classes,
  styles,
  content,
  attributes,
  children
});

export const Blocks = {
  // Primitives
  Div: () => createNode('div', [], 'Empty Container'),
  Text: () => createNode('p', ['knds-text-copy-14'], '텍스트를 입력하세요'),
  Heading: () => createNode('h2', ['knds-text-heading-32'], '새로운 제목'),
  Image: () => createNode('img', ['knds-w-full', 'knds-radius-md', 'knds-border'], undefined, { src: 'https://via.placeholder.com/800x400?text=Placeholder+Image', alt: 'Placeholder' }),
  Button: () => createNode('button', ['knds-btn-primary'], 'Click Me', { href: '' }),
  Link: () => createNode('a', ['knds-text-copy-14', 'knds-text-red'], 'Link Text', { href: '#' }),

  // Composite Blocks
  Panel: () => createNode('div', ['knds-panel', 'knds-p-400', 'knds-bg-secondary'], undefined, {}, {}, [
    createNode('h3', ['knds-text-heading-24', 'knds-mb-200'], '패널 제목'),
    createNode('p', ['knds-text-copy-14'], '이곳에 패널 내용을 작성하세요.')
  ]),
  
  SplitLayout: () => createNode('div', ['knds-flex-row', 'knds-gap-400'], undefined, {}, {}, [
    createNode('div', [], undefined, {}, { width: '25%' }, [
      createNode('p', ['knds-text-muted'], 'Left Side (25%)')
    ]),
    createNode('div', [], undefined, {}, { width: '75%' }, [
      createNode('p', ['knds-text-muted'], 'Right Side (75%)')
    ])
  ]),
  
  HeroSection: () => createNode('div', ['knds-panel', 'knds-grid-bg', 'knds-p-400', 'knds-mb-400'], undefined, {}, {}, [
    createNode('span', ['knds-text-label-14-mono', 'knds-text-red', 'knds-mb-100'], 'CHAPTER XX'),
    createNode('h1', ['knds-text-heading-72'], 'Hero Title')
  ]),

  CodeBlock: () => createNode('div', ['knds-panel', 'knds-bg-secondary', 'knds-p-200', 'knds-radius-md'], undefined, {}, {}, [
    createNode('span', ['knds-text-label-13-mono', 'knds-text-muted'], 'Code Snippet')
  ])
};
