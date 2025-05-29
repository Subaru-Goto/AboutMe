import { useState } from "react";
import { translations } from "../constant/data";
import { useLanguage } from "../context/LanguageContext";
import { FaGithub as Github } from "react-icons/fa";
import { FaLinkedin as Linkedin } from "react-icons/fa6";
import { EnvelopeIcon as Mail } from "@heroicons/react/24/outline";

const Contacts = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const openContactModal = () => {
    setIsContactModalOpen(true)
  }

  return (
    <section className="py-16 px-4 bg-white dark:bg-slate-800">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl dark:text-white font-bold mb-6">{t.contact}</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          {t.contactText}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center"></div>
        <div className="flex gap-4 mb-8 justify-center">
          <a
            href={import.meta.env.VITE_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <Github className="cursor-pointer h-5 w-5" />
          </a>
          <a
            href={import.meta.env.VITE_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <Linkedin className="cursor-pointer h-5 w-5" />
          </a>
        </div>

        <button
          onClick={openContactModal}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium text-lg"
        >
          {t.getInTouch}
        </button>

      </div>

      <button
        onClick={openContactModal}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center z-40 hover:scale-110"
      >
        <Mail className="h-6 w-6" />
      </button>

    </section>
  );
};

export default Contacts;
