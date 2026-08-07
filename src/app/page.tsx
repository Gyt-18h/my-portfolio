import { projectsData, skillsData } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070a13] text-slate-100 px-6 py-16 max-w-5xl mx-auto selection:bg-sky-500 selection:text-white">
      {/* 自己紹介セクション */}
      <section className="py-12 flex flex-col items-start gap-4 border-b border-slate-800/80">
        <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-3 py-1.5 rounded-full border border-sky-500/20">
          セキュリティエンジニア志望 / フルスタック開発
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
          Hello, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
            yuyu--
          </span>
        </h1>
        <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
          大学で情報学を専攻。Web・Androidアプリ開発やバックエンド構築に取り組みながら、安全で高品質なシステム開発を目指しています。
        </p>
      </section>

      {/* 制作実績セクション */}
      <section className="py-16 border-b border-slate-800/80">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Projects <span className="text-sky-400 text-sm font-normal font-mono ml-2">/ 制作実績</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* スキル一覧セクション */}
      <section className="py-16">
        <h2 className="text-2xl font-bold tracking-tight text-white mb-8">
          Skills <span className="text-sky-400 text-sm font-normal font-mono ml-2">/ スキルセット</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.map((category) => (
            <SkillBadge key={category.categoryName} category={category} />
          ))}
        </div>
      </section>
    </main>
  );
}