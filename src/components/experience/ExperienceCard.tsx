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

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, index, refCallback }) => {
  return (
    <div className="relative">
      {/* Timeline Dot */}
      <div className="absolute left-6.5 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-800 z-10" />

      {/* Experience Card */}
      <div
        ref={refCallback}
        className={`relative w-full md:w-5/12 ${
          index % 2 === 0 ? "pb-11 md:mr-auto md:pr-8 pl-16 md:pl-0" : "pb-11 md:ml-auto md:pl-8 pl-16"
        }`}
        role="region"
        aria-label={`Experience at ${exp.company}`}
      >
        <div className="bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-gray-600 p-6 shadow-lg">
          <div className="mb-4">
            <h3 className="text-xl dark:text-white font-semibold mb-2">{exp.title}</h3>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{exp.period}</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{exp.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;