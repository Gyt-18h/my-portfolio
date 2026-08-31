// src/data/portfolio.ts
import { Project, SkillCategory } from "@/types/portfolio";

export const projectsData: Project[] = [
  {
    id: "body-manager",
    title: "BodyManager",
    description: "毎日の身体データを記録しグラフで可視化するAndroidアプリ",
    category: "個人開発",
    tags: ["Java", "Supabase"],
    githubUrl: "https://github.com/Gyt-18h/BodyManager",
  },
  {
    id: "visual-trip",
    title: "VisualTrip",
    description: "旅行の思い出写真で地図を埋めるAndroidアプリ",
    category: "学校",
    tags: ["Java", "Firebase"],
    githubUrl: "https://github.com",
  },
];

export const skillsData: SkillCategory[] = [
  {
    categoryName: "Frontend",
    skills: [
      { name: "React", iconSlug: "react" },
      { name: "TypeScript", iconSlug: "typescript" },
      { name: "Next.js", iconSlug: "nextdotjs" },
      { name: "TailwindCSS", iconSlug: "tailwindcss" },
      { name: "HTML5", iconSlug: "html5" },
      { name: "CSS", iconSlug: "css" },
      { name: "JavaScript", iconSlug: "javascript" },
    ],
  },
  {
    categoryName: "Backend",
    skills: [
      { name: "Python", iconSlug: "python" },
      { name: "FastAPI", iconSlug: "fastapi" },
      { name: "PHP", iconSlug: "php" },
    ],
  },
  {
    categoryName: "Mobile",
    skills: [
      { name: "Android", iconSlug: "android" },
      { name: "Java", iconSlug: "openjdk" },
    ],
  },
  {
    categoryName: "Database",
    skills: [
      { name: "PostgreSQL", iconSlug: "postgresql" },
      { name: "SQLite", iconSlug: "sqlite" },
      { name: "Supabase", iconSlug: "supabase" },
      { name: "Firebase", iconSlug: "firebase" },
    ],
  },
  {
    categoryName: "Infra / Tools",
    skills: [
      { name: "Docker", iconSlug: "docker" },
      { name: "Git", iconSlug: "git" },
      { name: "Linux", iconSlug: "linux" },
      { name: "C++", iconSlug: "cplusplus" },
    ],
  },
];

export const experienceData: Experience[] = [
  {
    id: "exp-web-atcoder",
    period: "2025.04 - 現在",
    title: "Webフロントエンド開発 & AtCoder挑戦",
    role: "個人開発",
    category: "開発",
    description: "Next.jsやTypeScriptを用いたWebフロントエンド開発の実践。アルゴリズムと思考力向上を目指しAtCoderに定期参加。",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "AtCoder", "C++"],
  },
  {
    id: "exp-security-camp",
    period: "202x.xx", // ※参加年月を入力してください
    title: "セキュリティ・キャンプ 参加",
    role: "選抜参加者",
    category: "実績",
    description: "全国選考を通過しセキュリティキャンプに参加。低レイヤ領域の解析やセキュアなシステム構築・セキュアコーディングの実践ノウハウを修得。",
    tags: ["セキュリティ", "Linux", "セキュアプログラミング"],
  },
  {
    id: "exp-android-hackathon",
    period: "2024.04 - 現在",
    title: "Androidアプリ開発 & ハッカソン・チーム開発",
    role: "チーム開発・個人開発",
    category: "開発",
    description: "Java/Androidでのアプリ開発（BodyManager等）。ハッカソン（2回参加）や授業課題でのチーム開発を通じてMVP構築や役割分担を経験。",
    tags: ["Android", "Java", "Supabase", "Firebase", "Git"],
  },
  {
    id: "exp-certifications",
    period: "2025.10.15",
    title:"情報セキュリティマネジメント試験 (SG) 取得",
    role: "国家資格",
    category: "資格",
    description: "セキュリティの基礎を学んだ。",
    tags: ["情報セキュリティマネジメント"],
  },
  {
    id: "exp-certifications",
    period: "2025.08.15",
    title: "基本情報技術者試験 (FE) 取得",
    role: "国家資格",
    category: "資格",
    description: "幅広い分野の情報基礎を学んだ。",
    tags: ["基本情報技術者"],
  },
  {
    id: "exp-highschool",
    period: "2023.03",
    title: "部活の卒業制作",
    role: "部活動",
    category: "学歴",
    description: "コンピュータ部として卒業制作でテストの点数を記録するExcelVBAマクロ作成をした。",
    tags: ["Excel VBA"],
  },
   {
    id: "exp-highschool",
    period: "2023.03",
    title: "授業の卒業制作",
    role: "授業",
    category: "学歴",
    description: "ビジネス情報科として卒業制作でEclipse2Dレースゲームを制作した。",
    tags: ["Java","Eclipse"],
  },
   {
    id: "exp-certifications",
    period: "2023.07.14",
    title: "ITパスポート試験 (IP) 取得",
    role: "国家資格",
    category: "資格",
    description: "幅広い分野の基礎を学んだ。",
    tags: ["ITパスポート"],
  },
  {
    id: "exp-highschool",
    period: "2021.04 - 2023.03",
    title: "高校時代：IT基礎習得・Javaゲーム開発・iパス取得",
    role: "学習・部活動",
    category: "学歴",
    description: "部活でのテスト点数記録VBAマクロ作成や、卒業制作でのJava 2Dゲーム（Eclipse）開発を通じてモノづくりの原体験を得る。ITパスポート取得。",
    tags: ["Java", "Excel VBA", "Eclipse", "ITパスポート"],
  },
];