import { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // githubUrl と relatedLinks を重複なく結合するロジック
  const links = [
    ...(project.githubUrl && !project.relatedLinks?.some((l) => l.type === "github")
      ? [{ label: "GitHub", url: project.githubUrl, type: "github" as const }]
      : []),
    ...(project.relatedLinks || []),
  ];

  return (
    <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-md transition-all duration-300 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10 flex flex-col justify-between h-full">
      <div>
        {/* ヘッダーエリア（バッジ ＋ 右上リンク） */}
        <div className="flex items-center justify-between mb-4">
          {/* バッジ表示エリア (カテゴリ + プラットフォーム複数) */}
          <div className="flex flex-wrap items-center gap-1.5">
            {/* カテゴリバッジ */}
            <span className="text-xs font-medium text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20">
              {project.category}
            </span>

            {/* プラットフォームバッジ（複数対応：配列をループ表示） */}
            {project.platform?.map((plat) => (
              <span
                key={plat}
                className="text-xs font-medium text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20"
              >
                {plat}
              </span>
            ))}
          </div>

          {/* 関連リンク表示エリア（GitHub、Topaz、ProtoPedia、デモ、記事など複数対応） */}
          {links.length > 0 && (
            <div className="flex items-center gap-2.5">
              {links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-white p-1"
                  title={link.label}
                  aria-label={link.label}
                >
                  {/* ① GitHubアイコン */}
                  {link.type === "github" ? (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  ) : link.type === "topaz" ? (
                    /* ② Topaz用（宝石/ダイヤモンド型アイコン） */
                    <svg
                      className="w-4 h-4 stroke-current fill-none stroke-2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 3h12l4 6-10 12L2 9l4-6z"
                      />
                    </svg>
                  ) : link.type === "protopedia" ? (
                    /* ③ ProtoPedia用（「P」モチーフアイコン） */
                    <svg
                      className="w-4 h-4 stroke-current fill-none stroke-2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 4h6a4 4 0 010 8H7V4zm0 8v8"
                      />
                    </svg>
                  ) : (
                    /* ④ 汎用外部リンク / デモ / 記事用アイコン */
                    <svg
                      className="w-4 h-4 stroke-current fill-none stroke-2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* タイトル & 説明文 */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      {/* タグ一覧 */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/50"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}