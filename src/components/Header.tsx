import Link from "next/link";

export default function Header() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#070a13]/80 backdrop-blur-md border-b border-slate-800/60">
      <div className="w-full px-4 sm:px-12 lg:px-16 h-16 flex items-center justify-between gap-3">
        <Link href="/" className="text-lg sm:text-xl font-bold text-white tracking-wider shrink-0">
          G.<span className="text-sky-400">yt</span>
        </Link>
        <nav aria-label="メインナビゲーション" className="flex items-center gap-3.5 sm:gap-8 text-xs sm:text-sm font-medium text-slate-400">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap hover:text-sky-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}