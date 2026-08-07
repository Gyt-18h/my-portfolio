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
    categoryName: "Frontend / Mobile",
    skills: ["HTML","CSS","JavaScript","Next.js", "React", "TypeScript", "Tailwind CSS", "Java(Android)"],
  },
  {
    categoryName: "Backend / Database",
    skills: ["PHP","Python", "FastAPI", "Supabase", "Firebase","PostgreSQL", "NoSQL"],
  },
  {
    categoryName: "Security / Other",
    skills: ["Git / GitHub", "Linux", "Docker", "セキュリティ基礎","C++(競技プログラミング)"],
  },
];