import {
  CodeBracketIcon as Code,
  ServerStackIcon as Server,
  CircleStackIcon as Database,
} from "@heroicons/react/24/outline";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../constant/data";
import { useReveal } from "../hooks/useReveal";

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
      skills: ["Node.js", "Express.js", "Python", "FastAPI", "LangChain"],
    },
    {
      title: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: ["SQL", "MongoDB", "Pyspark"],
    },
  ];

  const { language } = useLanguage();
  const t = translations[language];
  const scope = useReveal<HTMLElement>();

  return (
    <section
      ref={scope}
      id="skills"
      className="scroll-mt-16 bg-surface px-4 py-24 md:py-32"
    >
      <div className="container mx-auto max-w-6xl">
        <h2
          data-reveal
          className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16"
        >
          {t.skills}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              data-reveal
              key={category.title}
              className="bg-surface-raised rounded-card border border-line p-8 hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <div className="flex items-center gap-3 text-lg font-semibold mb-6">
                <span className="size-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                  {category.icon}
                </span>
                {category.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-surface-alt text-ink-secondary px-3 py-1 text-sm"
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
