import JSZip from 'jszip';
import { EditorPageItem } from '../types';

export const importFromZip = async (
  file: File,
  onImport: (pages: EditorPageItem[], appTitle: string, appDescription: string) => void,
  onError: (msg: string) => void
) => {
  try {
    const zip = new JSZip();
    const contents = await zip.loadAsync(file);
    const projectFile = contents.file('knds-ds-project.json');

    if (!projectFile) {
      onError('업로드한 ZIP 파일 안에 프로젝트 세이브 파일(knds-ds-project.json)이 없습니다. 구버전에서 추출한 ZIP 파일이거나 잘못된 파일입니다.');
      return;
    }

    const jsonText = await projectFile.async('string');
    const projectData = JSON.parse(jsonText);

    if (projectData && projectData.pages && Array.isArray(projectData.pages)) {
      onImport(
        projectData.pages,
        projectData.appTitle || 'KNDS System',
        projectData.appDescription || '물리-디지털 융합 디자인 가이드라인'
      );
    } else {
      onError('잘못된 세이브 데이터 형식입니다.');
    }
  } catch (err) {
    console.error('ZIP Import failed:', err);
    onError('ZIP 파일 분석 중 오류가 발생했습니다.');
  }
};
