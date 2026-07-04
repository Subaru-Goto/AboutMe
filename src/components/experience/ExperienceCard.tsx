type ExperienceCardProps = {
  exp: {
    title: string;
    company: string;
    period: string;
    description: string;
  };
  index: number;
  refCallback: (el: HTMLDivElement | null) => void;
};

const ExperienceCard = ({ exp, index, refCallback }: ExperienceCardProps) => {
  return (
    <div className="relative">
      {/* Timeline Dot */}
      <div className="absolute left-6.5 md:left-1/2 md:-translate-x-1/2 size-3 bg-accent rounded-full ring-4 ring-surface-alt z-10" />

      <div
        className={`relative w-full md:w-5/12 ${
          index % 2 === 0
            ? "pb-11 md:mr-auto md:pr-8 pl-16 md:pl-0"
            : "pb-11 md:ml-auto md:pl-8 pl-16"
        }`}
        role="region"
        aria-label={`Experience at ${exp.company}`}
      >
        <div
          ref={refCallback}
          className="experience-card bg-surface-raised rounded-card border border-line p-6"
        >
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
            <p className="text-lg text-accent font-medium">{exp.company}</p>
            <p className="text-sm text-ink-tertiary mt-1">{exp.period}</p>
          </div>
          <p className="text-ink-secondary leading-relaxed">
            {exp.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
