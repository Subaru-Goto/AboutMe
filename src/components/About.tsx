import { translations } from "../constant/data";
import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";

function About() {
  const { language } = useLanguage();
  const t = translations[language];
  const scope = useReveal<HTMLElement>();

  return (
    <section
      ref={scope}
      id="about"
      className="scroll-mt-16 bg-surface-alt px-4 py-24 md:py-32"
    >
      <div className="container mx-auto max-w-3xl">
        <h2
          data-reveal
          className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12"
        >
          {t.about}
        </h2>
        <p
          data-reveal
          className="text-xl leading-relaxed text-ink-secondary text-center"
        >
          {t.aboutText}
        </p>
      </div>
    </section>
  );
}

export default About;
