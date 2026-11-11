// src/data/portfolio.ts
import { Project, SkillCategory, Experience } from "@/types/portfolio";

export const projectsData: Project[] = [
  {
    id: "body-manager",
    title: "BodyManager",
    description: "毎日の身体データを記録しグラフで可視化するアプリ。",
    category: "個人開発",
    platform: ["Android"],
    tags: ["Java"],
    //githubUrl: "https://github.com/Gyt-18h/BodyManager",
  },
  {
    id: "visual-trip",
    title: "VisualTrip",
    description: "旅行の思い出写真で日本地図を埋めるアプリ。",
    category: "学校",
    platform: ["Android"],
    tags: ["Java"],
    relatedLinks: [{ label: "ProtoPedia", url: "https://protopedia.net/prototype/9007", type: "protopedia" },]
  },
  {
    id: "weather-wise",
    title: "WeatherWise",
    description: "ホーム画面とロック画面の壁紙を天気によってリアルタイムに変動するアプリ。",
    category: "学校",
    platform: ["Android"],
    tags: ["Java"],
    relatedLinks: [{ label: "ProtoPedia", url: "https://protopedia.net/prototype/9136", type: "protopedia" },]
  },
  {
    id: "secret-frontier",
    title: "SecretFrontier",
    description: "条件を選択してスマホを振ると隠れた目的地が確定。地図を一切出さず、向きに応じた「音と振動」を頼りに歩き、撮影してAIが正解を解き明かす徒歩特化型の体験・探検ナビアプリ。",
    category: "ハッカソン",
    platform: ["Android"],
    tags: ["Java"],
    githubUrl: "https://github.com/spajam-jp/spajam2026-2-02",
  },
  {
    id: "omotenashi",
    title: "表無し",
    description: "地元民しか知らない裏スポットを共有するアプリ。",
    category: "ハッカソン",
    platform: ["Android / IOS"],
    tags: ["ReactNative","TypeScript","TailwindCSS","FastAPI"],
    githubUrl: "https://github.com/progatehackathon-26-07-kawappiramochi/omotenashi",
    relatedLinks:[{label:"Topaz",url:"https://topaz.dev/projects/50b90b0dc5732dc3bc14",type:"topaz"}]
  },
  {
    id: "inou-network",
    title: "伊能ネットワーク",
    description: "地図が無い歩いた奇跡だけ記録する散歩アプリ。",
    category: "ハッカソン",
    platform: ["Android / IOS"],
    award: "サポーターズ賞",
    tags: ["ReactNative","TypeScript","TailwindCSS","FastAPI"],
    githubUrl: "https://github.com/East-Instant/walking-App",
  },
];

export const skillsData: SkillCategory[] = [
  {
    categoryName: "Frontend",
    skills: [
      { name: "React", iconSlug: "react", contexts: ["hackathon", "personal"] },
      { name: "TypeScript", iconSlug: "typescript", contexts: ["hackathon", "personal"] },
      { name: "Next.js", iconSlug: "nextdotjs", contexts: ["personal"] },
      { name: "TailwindCSS", iconSlug: "tailwindcss", contexts: ["hackathon", "personal"] },
      { name: "HTML5", iconSlug: "html5", contexts: ["school","personal"] },
      { name: "CSS", iconSlug: "css", contexts: ["school","personal"] },
      { name: "JavaScript", iconSlug: "javascript", contexts: ["school","personal"] },
    ],
  },
  {
    categoryName: "Backend",
    skills: [
      { name: "Python", iconSlug: "python", contexts: ["hackathon"] },
      { name: "FastAPI", iconSlug: "fastapi", contexts: ["hackathon"] },
      { name: "PHP", iconSlug: "php", contexts: ["school"] },
    ],
  },
  {
    categoryName: "Mobile",
    skills: [
      { name: "Android", iconSlug: "android", contexts: ["school", "hackathon", "personal"] },
      { name: "Java", iconSlug: "openjdk", contexts: ["school","hackathon", "personal"] },
      { name: "Expo", iconSlug: "expo", contexts: ["hackathon"] },
    ],
  },
  {
    categoryName: "Database",
    skills: [
      { name: "Supabase", iconSlug: "supabase", contexts: ["personal"] },
      { name: "Firebase", iconSlug: "firebase", contexts: ["school"] },
    ],
  },
  {
    categoryName: "Infra / Tools",
    skills: [
      { name: "XAMPP", iconSlug: "xampp", contexts: ["school"] },
      { name: "Docker", iconSlug: "docker", contexts: ["hackathon"] },
      { name: "Git", iconSlug: "git", contexts: ["hackathon", "personal"] },
      { name: "Linux", iconSlug: "linux", contexts: ["school", "personal"] },
      { name: "C++", iconSlug: "cplusplus", contexts: ["personal"] },
    ],
  },
];

export const experienceData: Experience[] = [
  {
    id: "exp-security-camp",
    period: "2026.09.12",
    title: "セキュリティキャンプミニ",
    role: "選抜参加者",
    category: ["実績"],
    description: "IPA主催セキュリティキャンプミニ愛知に参加。サイバー犯罪の現状と低レイヤ領域の学習。",
    tags: ["サイバー犯罪","セキュリティ", "Java", "バイトコード","２次元コードリーダー"],
  },
  {
    id: "exp-hackathons",
    period: "2026.06 - 現在",
    title: "ハッカソン・チーム開発への継続的挑戦(計3回)",
    role: "チーム開発",
    category: ["開発"],
    description: "短期間でのプロダクト構築とチーム開発スキルの向上を目的にハッカソンへ積極的に参加。Progateハッカソンではフロントエンドを担当しGitの使い方を学んだ。SPAJAM予選ではPL/PMとしてチームを牽引。技育CAMPでは初対面でのオンライン協調開発を完遂し、実践的開発手法を習得。",
    tags: ["ハッカソン3回", "PL/PM", "チーム開発", "Git", "フロントエンド","バックエンド","Mobile","Android","Ios"],
  },
  {
    id: "exp-personal-development",
    period: "2026.06 - 現在",
    title: "個人開発",
    role: "個人開発",
    category: ["開発"],
    description: "自身の課題意識をもとに、企画・設計・DB構築・UI実装までを一貫して手掛ける個人開発を実施。Android（Java）を用いたモバイルアプリ開発やSupabase/Firebase連携。",
    tags: ["個人開発", "Android", "Java", "Supabase", "Firebase"],
  },
  {
    id: "exp-ctf-security",
    period: "2026.04 - 現在",
    title: "CTF（Capture The Flag）への挑戦 & Webセキュリティ学習",
    role: "個人参加",
    category: ["実績"],
    description: "Webセキュリティ分野を中心に学習を推進。入門向けCTFコンテストへ個人で2〜3回参加し、Web分野の基礎問題を自力で解法・フラグ獲得を達成。実践的な攻撃・防御の仕組みを体系的に探求中。",
    tags: ["CTF", "Webセキュリティ","個人参加", "セキュリティ基礎"],
  },
  {
    id: "exp-competitive-programming",
    period: "2026.03 - 現在",
    title: "競技プログラミング（AtCoder/LeetCode）によるアルゴリズムの強化",
    role: "個人学習",
    category: ["実績"],
    description: "効率的なコード記述とデータ構造・アルゴリズムの理解度を高めるため、AtCoderおよびLeetCodeでの問題演習を日常的に実施。計算量を意識したロジック実装力を鍛錬中。",
    tags: ["AtCoder", "LeetCode", "競技プログラミング", "アルゴリズム", "データ構造"],
  },
  {
    id: "exp-certifications",
    period: "2025.08 - 2025.10",
    title: "国家試験合格（FE・SG）",
    role: "国家試験",
    category: ["資格"],
    description: "基本情報技術者試験で計算機科学・アルゴリズム基礎と、情報セキュリティマネジメント試験で組織的な情報セキュリティ運用・管理知識を体系的に学習し合格。",
    tags: ["基本情報技術者", "情報セキュリティマネジメント"],
  },
  {
    id: "exp-highschool-achievements",
    period: "2022.04 - 2025.03",
    title: "高校：ビジネス情報科/コンピュータ部副部長としての学び",
    role: "授業・部活・国家資格・実績",
    category: ["学歴・資格・実績"],
    description: "ビジネス情報科およびコンピュータ部副部長として活動。競技大会では情報処理部門で東海大会団体6位に入賞。卒業制作として、部活ではテストの点数を記録するExcel VBAマクロ、授業ではEclipseを用いたJava 2Dレースゲームを開発。在学中にITパスポートを取得し、幅広い知識の取得と経験を得た。",
    tags: ["Eclipse","Java","2Dゲーム","Excel VBA","ITパスポート","副部長","東海大会団体6位"],
  },
];