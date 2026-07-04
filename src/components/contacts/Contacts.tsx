import { useState } from "react";
import { translations } from "../../constant/data";
import { useLanguage } from "../../context/LanguageContext";
import { FaGithub as Github } from "react-icons/fa";
import { FaLinkedin as Linkedin } from "react-icons/fa6";
import { EnvelopeIcon as Mail } from "@heroicons/react/24/outline";
import ContactModal from "./ContactModal";
import { useReveal } from "../../hooks/useReveal";

const Contacts = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  const scope = useReveal<HTMLElement>();

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  return (
    <section
      ref={scope}
      id="contact"
      className="scroll-mt-16 bg-surface-alt px-4 py-24 md:py-32"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2
          data-reveal
          className="text-3xl md:text-4xl font-semibold tracking-tight mb-6"
        >
          {t.contact}
        </h2>
        <p data-reveal className="text-lg text-ink-secondary mb-10">
          {t.contactText}
        </p>
        <div data-reveal className="flex gap-4 mb-10 justify-center">
          <a
            href={import.meta.env.VITE_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="size-11 rounded-full border border-line text-ink-secondary hover:text-ink hover:bg-surface-raised flex items-center justify-center transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={import.meta.env.VITE_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="size-11 rounded-full border border-line text-ink-secondary hover:text-ink hover:bg-surface-raised flex items-center justify-center transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        <div data-reveal>
          <button
            onClick={openContactModal}
            className="rounded-full bg-accent hover:bg-accent-hover text-white px-8 py-3 font-medium text-lg transition-colors"
          >
            {t.getInTouch}
          </button>
        </div>
      </div>

      <button
        onClick={openContactModal}
        aria-label={t.getInTouch}
        className="fixed bottom-6 right-6 size-14 bg-accent hover:bg-accent-hover text-white rounded-full shadow-lg flex items-center justify-center z-40 hover:scale-105 transition"
      >
        <Mail className="h-6 w-6" />
      </button>

      {isContactModalOpen && (
        <ContactModal setIsContactModalOpen={setIsContactModalOpen} />
      )}
    </section>
  );
};

export default Contacts;
