import { SkillCategory } from "@/types/portfolio";

interface SkillBadgeProps {
  category: SkillCategory;
}

export default function SkillBadge({ category }: SkillBadgeProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
      <h3 className="text-base font-semibold text-slate-200 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-sky-400"></span>
        {category.categoryName}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-medium text-slate-300 bg-slate-800/50 border border-slate-700/60 px-3 py-1.5 rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}