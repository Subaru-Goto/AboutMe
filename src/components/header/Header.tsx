import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constant/data";

function Header() {
  const { language } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { href: "#about", label: t.about },
    { href: "#skills", label: t.skills },
    { href: "#experience", label: t.experience },
    { href: "#projects", label: t.projects },
    { href: "#contact", label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-line">
      <div className="container mx-auto px-4 h-12 flex items-center justify-between gap-4">
        <h1 className="text-sm font-semibold">{t.name}</h1>
        <nav className="hidden md:flex gap-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-xs text-ink-secondary hover:text-ink transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
        <LanguageSelector />
      </div>
    </header>
  );
}

export default Header;
