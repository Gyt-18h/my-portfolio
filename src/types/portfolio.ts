export interface Project {
  id: string;            // 識別用ID
  title: string;         // プロジェクト名
  description: string;   // 説明文
  category: '個人開発' | 'ハッカソン' | '学校'; // カテゴリ
  tags: string[];        // 使用技術の配列
  githubUrl: string;     // GitHubのURL
  demoUrl?: string;      // 任意：デモサイトのURL
}

// 追加: スキルを使用・学んだ環境
export type SkillContext = 'school' | 'hackathon' | 'personal';

export interface SkillItem {
  name: string;          // 表示名（例: "React"）
  iconSlug: string;      // アイコン取得用ID（例: "react"）
  contexts: SkillContext[]; // 追加: 利用シーンの配列（例: ["school", "hackathon"]）
}

export interface SkillCategory {
  categoryName: string;  // カテゴリ名
  skills: SkillItem[];   // スキルオブジェクトの配列
}

export interface Experience {
  id: string;            // 識別用ID
  period: string;        // 期間・日付（例: "yyyy.mm.dd - yyyy.mm.dd"）
  title: string;         // タイトル・主な取り組み
  role: string;          // 役割・区分（例: "個人開発", "選抜参加者", "資格合格"）
  category: '開発' | '実績' | '資格' | '学歴'; // カテゴリ
  description: string;   // 詳細説明文
  tags: string[];        // 関連技術・キーワードの配列
}