export interface Project {
  id: string;            // 識別用ID
  title: string;         // プロジェクト名
  description: string;   // 説明文
  category: '個人開発' | 'ハッカソン' | '学校'; // カテゴリ
  tags: string[];        // 使用技術の配列
  githubUrl: string;     // GitHubのURL
  demoUrl?: string;      // 任意：デモサイトのURL
}

// 1つのスキルアイテムの型定義（名前 ＋ アイコン用識別ID）
export interface SkillItem {
  name: string;          // 表示名（例: "React"）
  iconSlug: string;      // アイコン取得用ID（例: "react"）
}

export interface SkillCategory {
  categoryName: string;  // カテゴリ名
  skills: SkillItem[];   // スキルオブジェクトの配列
}