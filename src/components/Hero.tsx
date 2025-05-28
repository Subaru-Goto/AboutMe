import { translations } from "../constant/data";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 px-4">
    <div className="container mx-auto text-center max-w-4xl">
      <div className="mb-8">
        <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
          {t.name.charAt(0)}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t.name}
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">{t.title}</h2>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w4xl mx-auto mb-8 px-4">{t.subtitle}</p>
      </div>
    </div>
  </section>
  )
}