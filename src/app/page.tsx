'use client';
import { useState } from "react";
import Header from "@/components/Header";
import { projectsData, skillsData, experienceData } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import ExperienceCard from "@/components/ExperienceCard";
import { ExternalLink, ArrowRight } from "lucide-react";
import { SkillContext } from "@/types/portfolio";

export default function Home() {
  // タブの状態管理 ('all' | 'school' | 'hackathon' | 'personal')
  const [activeTab, setActiveTab] = useState<'all' | SkillContext>('all');

  const tabs: { id: 'all' | SkillContext; label: string }[] = [
    { id: 'all', label: 'すべて' },
    { id: 'school', label: '学校' },
    { id: 'hackathon', label: 'ハッカソン' },
    { id: 'personal', label: '個人開発' },
  ];

  return (
    <div className="min-h-screen bg-[#070a13] text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* 画面上部の固定ヘッダー */}
      <Header />

      {/* 画面全体の幅を100%活用する main タグ */}
      <main className="w-full px-6 sm:px-12 lg:px-20 pt-24 pb-16">
        
        {/* 1. Hero / 自己紹介セクション */}
        <section id="home" className="py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center border-b border-slate-800/80">
          
          {/* 左側：テキスト & アクションボタン */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-3 py-1.5 rounded-full border border-sky-500/20">
              セキュリティエンジニア志望 / フルスタックエンジニア
            </span>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Hello, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
                yuyu--
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg lg:text-xl leading-relaxed">
              大学で情報学を学びながら、Web・Androidアプリ・バックエンドの開発に取り組んでいます。セキュリティの知識を活かし、安全で使いやすいサービスを作ることを目指しています。
            </p>

            {/* ボタン群 */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-medium shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 hover:scale-[1.02] transition-all flex items-center gap-2 group"
              >
                制作物を見る
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-medium hover:bg-slate-800 hover:border-slate-600 transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current text-slate-200" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* 右側：PC・スマホのビジュアル枠 */}
          <div className="hidden lg:col-span-5 lg:flex relative justify-center items-center">
            <div className="absolute w-96 h-96 bg-gradient-to-tr from-purple-600/30 via-sky-500/20 to-indigo-500/30 rounded-full blur-3xl -z-10 animate-pulse" />
            
            <div className="w-full h-80 lg:h-96 bg-slate-900/60 border border-slate-800 rounded-2xl backdrop-blur-md flex flex-col items-center justify-center gap-3 p-6 text-center group hover:border-sky-500/40 transition-colors shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 text-2xl">
                💻
              </div>
              <p className="text-slate-200 font-semibold text-base">
                メインビジュアル（PC / スマホモックアップ）
              </p>
              <p className="text-slate-400 text-xs max-w-xs leading-relaxed">
                ※ ここにラップトップとスマホの合成画像を配置します
              </p>
            </div>
          </div>

        </section>

        {/* 2. 制作実績セクション */}
        <section id="projects" className="py-20 border-b border-slate-800/80">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <span className="w-2 h-7 bg-sky-500 rounded-full"></span>
              Projects <span className="text-sky-400 text-sm sm:text-base font-normal font-mono">/ 制作実績</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* 3. スキル一覧セクション (タブ切り替え機能付き) */}
        <section id="skills" className="py-20 border-b border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <span className="w-2 h-7 bg-sky-500 rounded-full"></span>
              Skills <span className="text-sky-400 text-sm sm:text-base font-normal font-mono">/ スキルセット</span>
            </h2>

            {/* タブ切り替えボタン群 */}
            <div className="flex items-center gap-1 p-1 bg-slate-900/80 border border-slate-800 rounded-xl self-start md:self-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* スキルカード一覧 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {skillsData.map((category) => (
              <SkillBadge
                key={category.categoryName}
                category={category}
                activeTab={activeTab}
              />
            ))}
          </div>
        </section>

        {/* 4. 経歴・実績セクション */}
        <section id="experience" className="py-20">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-10 flex items-center gap-3">
            <span className="w-2 h-7 bg-sky-500 rounded-full"></span>
            Experience <span className="text-sky-400 text-sm sm:text-base font-normal font-mono">/ 経歴・実績</span>
          </h2>
          
          <div className="relative border-l-2 border-slate-800/80 ml-3 md:ml-4 pl-6 md:pl-8 space-y-10">
            {experienceData.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}