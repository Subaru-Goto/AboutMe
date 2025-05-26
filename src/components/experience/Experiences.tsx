import { useRef } from "react";
import { translations } from "../../constant/data";
import { useLanguage } from "../../context/LanguageContext";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceCard from "./ExperienceCard";

gsap.registerPlugin(ScrollTrigger);

function Experiences() {
  const { language } = useLanguage();
  const t = translations[language];

  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const animateTimeline = (
    timelineRef: React.RefObject<HTMLDivElement | null>
  ) => {
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
  };

  const animateExperienceCards = (
    experienceRefs: React.RefObject<(HTMLDivElement | null)[]>
  ) => {
    experienceRefs.current.forEach((ref, index) => {
      if (ref) {
        // Initial state
        gsap.set(ref, {
          opacity: 0.3,
          scale: 0.95,
          x: index % 2 === 0 ? -50 : 50,
        });

        // Animate in
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

        // Highlight effect
        ScrollTrigger.create({
          trigger: ref,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => {
            gsap.to(ref, {
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
              borderColor: "rgb(59, 130, 246)",
              duration: 0.3,
              borderRadius: "0.5rem",
            });
          },
          onLeave: () => {
            gsap.to(ref, {
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderColor: "rgb(229, 231, 235)",
              duration: 0.3,
              borderRadius: "0.5rem",
            });
          },
          onEnterBack: () => {
            gsap.to(ref, {
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
              borderColor: "rgb(59, 130, 246)",
              duration: 0.3,
              borderRadius: "0.5rem",
            });
          },
          onLeaveBack: () => {
            gsap.to(ref, {
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderColor: "rgb(229, 231, 235)",
              duration: 0.3,
              borderRadius: "0.5rem",
            });
          },
        });
      }
    });
  };

  useGSAP(
    () => {
      animateTimeline(timelineRef);
      animateExperienceCards(experienceRefs);
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
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gray-200 dark:bg-gray-700 h-full">
            <div
              ref={timelineRef}
              className="w-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"
              style={{ height: 0 }}
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-12">
            {t.experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                exp={exp}
                index={index}
                refCallback={(el) => {
                  experienceRefs.current[index] = el;
                }}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experiences;
