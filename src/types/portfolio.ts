export interface Project {
  id: string;            // 識別用ID
  title: string;         // プロジェクト名
  description: string;   // 説明文
  category: '個人開発' | 'ハッカソン' | '学校'; // カテゴリ
  tags: string[];        // 使用技術の配列
  githubUrl: string;     // GitHubのURL
  demoUrl?: string;      // 任意：デモサイトのURL
}

export interface SkillCategory {
  categoryName: string;  // カテゴリ名
  skills: string[];      // スキル名の配列
}