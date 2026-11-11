export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  alt?: string;
}

export interface RelatedLink {
  label: string; // 表示ラベル (例: "GitHub", "Demo", "Qiita", "Slide")
  url: string;   // 遷移先URL
  type?: 'github' | 'demo' | 'article' | 'external' | 'topaz' | 'protopedia' ; // アイコン判定用
}

export interface Project {
  id: string;            // 識別用ID
  title: string;         // プロジェクト名
  description: string;   // 説明文
  category: '個人開発' | 'ハッカソン' | '学校'; // カテゴリ
  platform?: string[];   //プラットフォーム
  tags: string[];        // 使用技術の配列
  githubUrl?: string;     // GitHubのURL
  relatedLinks?: RelatedLink[]; //関連リンク
  mediaList?: ProjectMedia[]; //写真や動画
  award?: string; //受賞
}

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
  category: string[];    // カテゴリ（例; '開発' | '実績' | '資格' | '学歴'）
  description: string;   // 詳細説明文
  tags: string[];        // 関連技術・キーワードの配列
}