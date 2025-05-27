import { translations } from "../constant/data";
import { useLanguage } from "../context/LanguageContext"

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="py-8 px-4 border-t">
    <div className="container mx-auto text-center text-slate-500 dark:text-slate-400">
      <p>
        &copy; {new Date().getFullYear()} {t.name} All rights reserved.
      </p>
    </div>
  </footer>
  )
}

export default Footer