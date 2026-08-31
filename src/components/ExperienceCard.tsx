// src/components/ExperienceCard.tsx
import { Experience } from "@/types/portfolio";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative group">
      {/* タイムライン左側の発光ポインター */}
      <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-sky-400 bg-[#070a13] group-hover:bg-sky-400 group-hover:scale-125 transition-all shadow-sm shadow-sky-500/50" />

      {/* カード本体 */}
      <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-md hover:border-sky-500/30 transition-all">
        {/* 上部ヘッダー（期間 & 区分バッジ） */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs font-mono font-semibold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-md border border-sky-500/20">
            {experience.period}
          </span>
          <span className="text-xs text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/50">
            {experience.role}
          </span>
        </div>

        {/* タイトル */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
          {experience.title}
        </h3>

        {/* 詳細記述 */}
        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          {experience.description}
        </p>

        {/* タグ一覧 */}
        <div className="flex flex-wrap gap-1.5">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}