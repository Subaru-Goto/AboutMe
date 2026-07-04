import { translations } from "../constant/data";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="py-12 px-4 border-t border-line">
      <div className="container mx-auto text-center text-sm text-ink-tertiary">
        <p>
          &copy; {new Date().getFullYear()} {t.name} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
