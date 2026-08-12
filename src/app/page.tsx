'use client';
import Header from "@/components/Header";
import { projectsData, skillsData } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070a13] text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* 画面上部の固定ヘッダー */}
      <Header />

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* 1. Hero / 自己紹介セクション */}
        <section id="home" className="py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-slate-800/80">
          {/* 左側：テキスト & アクションボタン */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-3 py-1.5 rounded-full border border-sky-500/20">
              セキュリティエンジニア志望 / フルスタックエンジニア
            </span>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hello, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
                yuyu--
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
              大学で情報学を学びながら、Web・Androidアプリ・バックエンドの開発に取り組んでいます。セキュリティの知識を活かし、安全で使いやすいサービスを作ることを目指しています。
            </p>

            {/* ボタン群 */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-medium shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 hover:scale-[1.02] transition-all flex items-center gap-2 group"
              >
                制作物を見る
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-medium hover:bg-slate-800 hover:border-slate-600 transition-all flex items-center gap-2"
              >
                {/* GitHub 公式SVGアイコン */}
                <svg className="w-4 h-4 fill-current text-slate-200" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* 右側：PC・スマホのビジュアル枠（グラデーション光つき） */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* 背景のネオン風グラデーションリング光 */}
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-purple-600/30 via-sky-500/20 to-indigo-500/30 rounded-full blur-3xl -z-10 animate-pulse" />
            
            {/* モックアップ画像の仮置きプレースホルダー */}
            <div className="w-full h-72 sm:h-80 bg-slate-900/60 border border-slate-800 rounded-2xl backdrop-blur-md flex flex-col items-center justify-center gap-3 p-6 text-center group hover:border-sky-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                💻
              </div>
              <p className="text-slate-300 font-medium text-sm">
                メインビジュアル（PC / スマホモックアップ）
              </p>
              <p className="text-slate-500 text-xs max-w-xs">
                ※ 1枚目のようなラップトップとスマホの画像をここに配置します
              </p>
            </div>
          </div>
        </section>

        {/* 2. 制作実績セクション */}
        <section id="projects" className="py-16 border-b border-slate-800/80">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-sky-500 rounded-full"></span>
              Projects <span className="text-sky-400 text-sm font-normal font-mono">/ 制作実績</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* 3. スキル一覧セクション */}
        <section id="skills" className="py-16">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-8 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-sky-500 rounded-full"></span>
            Skills <span className="text-sky-400 text-sm font-normal font-mono">/ スキルセット</span>
          </h2>
          {/* 高さを揃えつつ綺麗に配置するコンテナ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {skillsData.map((category) => (
              <SkillBadge key={category.categoryName} category={category} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}