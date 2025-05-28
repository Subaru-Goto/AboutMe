import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constant/data";

function Header() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center gap-2">
      <h1 className="text-xl font-bold dark:text-white">{t.name}</h1>
      <LanguageSelector />
    </div>
  </header>
  )
}

export default Header