import { useRef, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type RevealOptions = {
  selector?: string;
  y?: number;
  stagger?: number;
  duration?: number;
  start?: string;
  onMount?: boolean;
};

export function useReveal<T extends HTMLElement>(
  options: RevealOptions = {}
): RefObject<T | null> {
  const scope = useRef<T>(null);
  const {
    selector = "[data-reveal]",
    y = 24,
    stagger = 0.1,
    duration = 0.7,
    start = "top 80%",
    onMount = false,
  } = options;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = gsap.utils.toArray<HTMLElement>(selector, scope.current);
        if (!targets.length) return;
        gsap.from(targets, {
          autoAlpha: 0,
          y,
          duration,
          stagger,
          ease: "power2.out",
          ...(onMount
            ? { delay: 0.1 }
            : {
                scrollTrigger: {
                  trigger: scope.current,
                  start,
                  once: true,
                },
              }),
        });
      });
    },
    { scope }
  );

  return scope;
}
