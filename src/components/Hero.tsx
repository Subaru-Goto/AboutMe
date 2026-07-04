import { translations } from "../constant/data";
import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];
  const scope = useReveal<HTMLElement>({ onMount: true, y: 28, stagger: 0.12 });

  return (
    <section
      ref={scope}
      className="min-h-[72vh] flex items-center px-4 py-24 bg-surface"
    >
      <div className="container mx-auto text-center max-w-4xl">
        <p data-reveal className="text-accent font-medium mb-4">
          {t.title}
        </p>
        <h1
          data-reveal
          className="text-5xl md:text-7xl font-semibold tracking-tight mb-6"
        >
          {t.name}
        </h1>
        <p
          data-reveal
          className="text-lg md:text-xl text-ink-secondary max-w-2xl mx-auto mb-10"
        >
          {t.subtitle}
        </p>
        <div
          data-reveal
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="#contact"
            className="rounded-full bg-accent hover:bg-accent-hover text-white px-6 py-2.5 font-medium transition-colors"
          >
            {t.getInTouch}
          </a>
          <a
            href="#projects"
            className="text-accent hover:underline font-medium"
          >
            {t.projects} →
          </a>
        </div>
      </div>
    </section>
  );
}
