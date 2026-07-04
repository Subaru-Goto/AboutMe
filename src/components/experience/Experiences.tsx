import { useRef } from "react";
import { translations } from "../../constant/data";
import { useLanguage } from "../../context/LanguageContext";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceCard from "./ExperienceCard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Experiences() {
  const { language } = useLanguage();
  const t = translations[language];

  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (timelineRef.current) {
          gsap.fromTo(
            timelineRef.current,
            { height: 0 },
            {
              height: "100%",
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

        experienceRefs.current.forEach((ref, index) => {
          if (!ref) return;

          gsap.from(ref, {
            autoAlpha: 0,
            x: index % 2 === 0 ? -32 : 32,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 85%",
              once: true,
            },
          });

          ScrollTrigger.create({
            trigger: ref,
            start: "top 60%",
            end: "bottom 40%",
            toggleClass: { targets: ref, className: "is-active" },
          });
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="experience"
      className="scroll-mt-16 bg-surface-alt px-4 py-24 md:py-32"
    >
      <div ref={containerRef} className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">
          {t.experience}
        </h2>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-px bg-line h-full">
            <div
              ref={timelineRef}
              className="w-full bg-accent rounded-full"
              style={{ height: 0 }}
            />
          </div>

          <div className="space-y-12 overflow-x-hidden">
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
