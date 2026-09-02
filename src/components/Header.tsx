// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  // 指定の順番に更新し、About と Contact を削除
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#070a13]/80 backdrop-blur-md border-b border-slate-800/60">
      <div className="w-full px-6 sm:px-12 lg:px-16 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white tracking-wider">
          yuyu<span className="text-sky-400">--</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-sky-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}