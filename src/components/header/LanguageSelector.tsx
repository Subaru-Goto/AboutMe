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
    `px-3 py-1 text-sm font-medium rounded-md transition-colors ${
      language === lang
        ? "bg-blue-600 text-white"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
    }`;

  return (
    <div className="flex gap-2">
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