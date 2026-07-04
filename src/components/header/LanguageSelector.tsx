import type { Language } from "../../types/language";
import { useLanguage } from "../../context/LanguageContext";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ja", label: "日本語" },
  { code: "de", label: "DE" },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const getButtonClass = (lang: Language) =>
    `px-3 py-1 text-xs font-medium rounded-full transition-colors ${
      language === lang
        ? "bg-surface-raised text-ink shadow-sm"
        : "text-ink-secondary hover:text-ink"
    }`;

  return (
    <div className="flex rounded-full bg-surface-alt border border-line p-0.5">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          className={getButtonClass(code)}
          onClick={() => setLanguage(code)}
          aria-label={`Select ${label}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
