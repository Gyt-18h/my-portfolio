'use client';
import { SkillCategory, SkillContext } from "@/types/portfolio";

interface SkillBadgeProps {
  category: SkillCategory;
  activeTab: 'all' | SkillContext;
}

export default function SkillBadge({ category, activeTab }: SkillBadgeProps) {
  // 選択中タブに基づいてスキルをフィルタリング
  const filteredSkills = category.skills.filter((skill) => {
    if (activeTab === 'all') return true;
    return skill.contexts?.includes(activeTab);
  });

  // 該当するスキルが1つもないカテゴリはカード自体を非表示にする
  if (filteredSkills.length === 0) return null;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 backdrop-blur-sm flex flex-col justify-start h-full transition-all">
      {/* カテゴリタイトル */}
      <h3 className="text-sm font-semibold text-slate-200 mb-3 flex items-center justify-between border-b border-slate-800/80 pb-2">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-400"></span>
          {category.categoryName}
        </span>
        <span className="text-[10px] text-slate-500 font-normal font-mono">
          {filteredSkills.length} items
        </span>
      </h3>

      {/* 修正: 横4列固定 (スマホは2列、PC・タブレットは4列) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-sky-500/50 hover:bg-slate-800/80 transition-all group aspect-square"
          >
            {/* アイコン画像 */}
            <img
              src={`https://cdn.simpleicons.org/${skill.iconSlug}`}
              alt={`${skill.name} icon`}
              className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform object-contain"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            {/* スキル名 */}
            <span className="text-[10px] font-medium text-slate-300 group-hover:text-white text-center leading-tight line-clamp-1">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}