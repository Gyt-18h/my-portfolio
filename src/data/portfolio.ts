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