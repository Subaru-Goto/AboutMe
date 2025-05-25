import { useRef } from "react";
import { translations } from "../constant/data";
import { useLanguage } from "../context/LanguageContext";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Experiences() {
  const { language } = useLanguage();
  const t = translations[language];

  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (timelineRef.current) {
        gsap.fromTo(
          timelineRef.current,
          { height: 0 },
          {
            height: "100%",
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: timelineRef.current.parentElement,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1,
            },
          }
        );
      }

      // Experience cards animation
      experienceRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.set(ref, {
            opacity: 0.3,
            scale: 0.95,
            x: index % 2 === 0 ? -50 : 50,
          });

          gsap.to(ref, {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 85%",
              end: "top 15%",
              toggleActions: "play none none reverse",
            },
          });

          // Highlight effect when in view
          ScrollTrigger.create({
            trigger: ref,
            start: "top 60%",
            end: "bottom 40%",
            onEnter: () => {
              gsap.to(ref, {
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                borderColor: "rgb(59, 130, 246)",
                duration: 0.3,
              });
            },
            onLeave: () => {
              gsap.to(ref, {
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderColor: "rgb(229, 231, 235)",
                duration: 0.3,
              });
            },
            onEnterBack: () => {
              gsap.to(ref, {
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                borderColor: "rgb(59, 130, 246)",
                duration: 0.3,
              });
            },
            onLeaveBack: () => {
              gsap.to(ref, {
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderColor: "rgb(229, 231, 235)",
                duration: 0.3,
              });
            },
          });
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="py-16 px-4 bg-white dark:bg-slate-800">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl dark:text-white font-bold text-center mb-16">
          {t.experience}
        </h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 dark:bg-gray-700 h-full">
            <div
              ref={timelineRef}
              className="w-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"
              style={{ height: 0 }}
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-12">
            {t.experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-800 z-10" />

                {/* Experience Card */}
                <div
                  ref={(el) => {
                    experienceRefs.current[index] = el;
                  }}
                  className={`relative w-5/12 ${
                    index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"
                  }`}
                >
                  {/* TO DO: Create component */}
                  <div
                    className="bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-gray-600 p-6 shadow-lg"
                    role="region"
                    aria-label={`Experience at ${exp.company}`}
                  >
                    <div className="mb-4">
                      <h3 className="text-xl dark:text-white font-semibold mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {exp.period}
                      </p>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
