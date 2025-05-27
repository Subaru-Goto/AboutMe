import { translations } from "../constant/data";
import { useLanguage } from "../context/LanguageContext"

function Projects() {
  const { language } = useLanguage();
  const t = translations[language]; 
  return (
    <section className="py-16 px-4">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl dark:text-white font-bold text-center mb-12">{t.projects}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.projectsList.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transform hover:-translate-y-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open(project.link, "_blank")}
          >
            <div className="mb-4">
              <h3 className="text-xl dark:text-white font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Projects