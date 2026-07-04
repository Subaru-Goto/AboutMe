import { translations } from "../constant/data";
import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";

function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const scope = useReveal<HTMLElement>();

  const projects = t.projectsList.filter((project) => project.link);

  return (
    <section
      ref={scope}
      id="projects"
      className="scroll-mt-16 bg-surface px-4 py-24 md:py-32"
    >
      <div className="container mx-auto max-w-6xl">
        <h2
          data-reveal
          className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16"
        >
          {t.projects}
        </h2>
        <div
          className={
            projects.length === 1
              ? "max-w-2xl mx-auto"
              : "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          }
        >
          {projects.map((project) => (
            <a
              data-reveal
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-surface-raised rounded-card border border-line p-8 hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center justify-between gap-2">
                  {project.title}
                  <span
                    aria-hidden
                    className="text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  >
                    ↗
                  </span>
                </h3>
                <p className="text-ink-secondary">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-surface-alt text-ink-secondary px-3 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
