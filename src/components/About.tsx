import { translations } from "../constant/data";
import { useLanguage } from "../context/LanguageContext";

function About() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section className="py-16 px-4 bg-white dark:bg-slate-800">
    <div className="container mx-auto max-w-4xl px-4">
      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">{t.about}</h2>
      <div className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-center">{t.aboutText}</div>
    </div>
  </section>
  )
}

export default About