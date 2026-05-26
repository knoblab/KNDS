import React, { createContext, useContext, useState, ReactNode } from 'react';
import { EditorPageItem, EditorNode, NodeType } from './types';

// Helper to generate UUID-like string
const generateId = () => 'node-' + Math.random().toString(36).substr(2, 9);

interface EditorContextProps {
  appTitle: string;
  appDescription: string;
  setAppTitle: (title: string) => void;
  setAppDescription: (desc: string) => void;

  pages: EditorPageItem[];
  activePageId: string | null;
  selectedNodeId: string | null;
  
  // Page actions
  addPage: (title: string) => void;
  removePage: (id: string) => void;
  setActivePage: (id: string) => void;
  updatePageTitle: (id: string, title: string) => void;
  
  // Node actions
  addNode: (node: EditorNode, parentId?: string, index?: number) => void;
  removeNode: (id: string) => void;
  moveNode: (id: string, targetParentId: string, targetIndex: number) => void;
  updateNode: (id: string, updates: Partial<EditorNode>) => void;
  setSelectedNodeId: (id: string | null) => void;

  // Project actions
  loadProject: (pages: EditorPageItem[], title: string, desc: string) => void;
  
  // Utils
  getActivePageRoot: () => EditorNode | null;
  getSelectedNode: () => EditorNode | null;
}

const EditorContext = createContext<EditorContextProps | undefined>(undefined);

const createEmptyRoot = (): EditorNode => ({
  id: generateId(),
  type: 'div',
  classes: ['pdf-main-content'],
  styles: {},
  attributes: {},
  children: []
});

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [appTitle, setAppTitle] = useState('PDF-DS System');
  const [appDescription, setAppDescription] = useState('물리-디지털 융합 디자인 가이드라인');
  
  const [pages, setPages] = useState<EditorPageItem[]>([
    { id: 'home', title: '홈', rootNode: createEmptyRoot() }
  ]);
  const [activePageId, setActivePageId] = useState<string | null>('home');
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const addPage = (title: string) => {
    const newId = title.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + generateId();
    setPages([...pages, { id: newId, title, rootNode: createEmptyRoot() }]);
    setActivePageId(newId);
  };

  const removePage = (id: string) => {
    if (pages.length <= 1) return;
    const newPages = pages.filter(p => p.id !== id);
    setPages(newPages);
    if (activePageId === id) {
      setActivePageId(newPages[0].id);
      setSelectedNodeId(null);
    }
  };

  const setActivePage = (id: string) => {
    setActivePageId(id);
    setSelectedNodeId(null);
  };

  const updatePageTitle = (id: string, title: string) => {
    setPages(pages.map(p => p.id === id ? { ...p, title } : p));
  };

  const updateTree = (root: EditorNode, updater: (node: EditorNode) => EditorNode): EditorNode => {
    const newNode = updater(root);
    return {
      ...newNode,
      children: newNode.children.map(child => updateTree(child, updater))
    };
  };

  const addNode = (node: EditorNode, parentId?: string, index?: number) => {
    if (!activePageId) return;
    setPages(pages.map(page => {
      if (page.id !== activePageId) return page;
      const targetId = parentId || page.rootNode.id;
      
      const newRoot = updateTree(page.rootNode, (n) => {
        if (n.id === targetId) {
          const newChildren = [...n.children];
          if (index !== undefined) {
            newChildren.splice(index, 0, node);
          } else {
            newChildren.push(node);
          }
          return { ...n, children: newChildren };
        }
        return n;
      });
      return { ...page, rootNode: newRoot };
    }));
  };

  const removeNode = (id: string) => {
    if (!activePageId) return;
    setPages(pages.map(page => {
      if (page.id !== activePageId) return page;
      if (page.rootNode.id === id) return page; // Cannot remove root

      const removeFromTree = (node: EditorNode): EditorNode => {
        return {
          ...node,
          children: node.children.filter(c => c.id !== id).map(removeFromTree)
        };
      };
      
      return { ...page, rootNode: removeFromTree(page.rootNode) };
    }));
    if (selectedNodeId === id) setSelectedNodeId(null);
  };

  const moveNode = (id: string, targetParentId: string, targetIndex: number) => {
    if (!activePageId) return;
    setPages(pages.map(page => {
      if (page.id !== activePageId) return page;
      
      // 1. Find the node
      let nodeToMove: EditorNode | null = null;
      const findNode = (n: EditorNode) => {
        if (n.id === id) nodeToMove = n;
        n.children.forEach(findNode);
      };
      findNode(page.rootNode);
      if (!nodeToMove) return page;

      // 2. Remove from old parent
      let tempRoot = updateTree(page.rootNode, (n) => ({
        ...n,
        children: n.children.filter(c => c.id !== id)
      }));

      // 3. Insert to new parent
      tempRoot = updateTree(tempRoot, (n) => {
        if (n.id === targetParentId) {
          const newChildren = [...n.children];
          newChildren.splice(targetIndex, 0, nodeToMove!);
          return { ...n, children: newChildren };
        }
        return n;
      });

      return { ...page, rootNode: tempRoot };
    }));
  };

  const updateNode = (id: string, updates: Partial<EditorNode>) => {
    if (!activePageId) return;
    setPages(pages.map(page => {
      if (page.id !== activePageId) return page;
      const newRoot = updateTree(page.rootNode, (n) => {
        if (n.id === id) {
          return { ...n, ...updates };
        }
        return n;
      });
      return { ...page, rootNode: newRoot };
    }));
  };

  const loadProject = (loadedPages: EditorPageItem[], title: string, desc: string) => {
    setPages(loadedPages);
    setAppTitle(title);
    setAppDescription(desc);
    setActivePageId(loadedPages.length > 0 ? loadedPages[0].id : null);
    setSelectedNodeId(null);
  };

  const getActivePageRoot = () => {
    return pages.find(p => p.id === activePageId)?.rootNode || null;
  };

  const getSelectedNode = () => {
    const root = getActivePageRoot();
    if (!root || !selectedNodeId) return null;
    let found: EditorNode | null = null;
    const findNode = (n: EditorNode) => {
      if (n.id === selectedNodeId) found = n;
      if (!found) n.children.forEach(findNode);
    };
    findNode(root);
    return found;
  };

  return (
    <EditorContext.Provider value={{
      appTitle, appDescription, setAppTitle, setAppDescription,
      pages, activePageId, selectedNodeId,
      addPage, removePage, setActivePage, updatePageTitle,
      addNode, removeNode, moveNode, updateNode,
      setSelectedNodeId,
      loadProject,
      getActivePageRoot, getSelectedNode
    }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorStore = () => {
  const context = useContext(EditorContext);
  if (context === undefined) {
    throw new Error('useEditorStore must be used within EditorProvider');
  }
  return context;
};
