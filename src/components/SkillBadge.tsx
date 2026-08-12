'use client';
import { SkillCategory } from "@/types/portfolio";

interface SkillBadgeProps {
  category: SkillCategory;
}

export default function SkillBadge({ category }: SkillBadgeProps) {
  return (
    /* h-full と justify-start を設定し、カード自体の高さを親要素（一番高いカード）に統一 */
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-sm flex flex-col justify-start h-full">
      {/* カテゴリタイトル */}
      <h3 className="text-sm font-semibold text-slate-200 mb-4 flex items-center gap-2 border-b border-slate-800/80 pb-2">
        <span className="w-2 h-2 rounded-full bg-sky-400"></span>
        {category.categoryName}
      </h3>

      {/* 横最大4列（スマホは2列）。5個以上ある場合は自動的に下の行へ折り返す */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center px-1 py-2 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-sky-500/50 hover:bg-slate-800/80 transition-all group aspect-square"
          >
            {/* アイコン画像 (SkillItem の iconSlug を直接使用) */}
            <img
              src={`https://cdn.simpleicons.org/${skill.iconSlug}`}
              alt={`${skill.name} icon`}
              className="w-7 h-7 mb-1.5 group-hover:scale-110 transition-transform object-contain"
              loading="lazy"
              onError={(e) => {
                // 画像が読み込めなかった場合のフォールバック処理
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            {/* スキル名 (SkillItem の name を表示) */}
            <span className="text-[10px] font-medium text-slate-300 group-hover:text-white text-center leading-tight line-clamp-1">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}