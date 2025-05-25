import { CodeBracketIcon as Code, ServerStackIcon as Server, CircleStackIcon as Database } from "@heroicons/react/24/outline";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../constant/data";

function Skills() {

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="h-5 w-5" />,
      skills: ["React", "TypeScript", "Tailwind CSS", "GSAP"],
    },
    {
      title: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: ["Node.js", "Express.js", "Python"],
    },
    {
      title: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: ["SQL", "MongoDB", "Pyspark"],
    },
  ];

  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl dark:text-white font-bold text-center mb-12">{t.skills}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center dark:text-white gap-2 text-lg font-semibold mb-4">
                {category.icon}
                {category.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
