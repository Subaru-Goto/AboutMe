import { useEffect, useRef, type RefObject } from "react";

if (typeof document !== "undefined") {
  document.documentElement.classList.add("reveals-enabled");
}

type RevealOptions = {
  selector?: string;
  stagger?: number;
  duration?: number;
  onMount?: boolean;
};

export function useReveal<T extends HTMLElement>(
  options: RevealOptions = {}
): RefObject<T | null> {
  const scope = useRef<T>(null);
  const {
    selector = "[data-reveal]",
    stagger = 0.1,
    duration = 0.7,
    onMount = false,
  } = options;

  useEffect(() => {
    const root = scope.current;
    if (!root) return;

    const timers: number[] = [];
    const reveal = (el: HTMLElement, delaySeconds: number) => {
      timers.push(
        window.setTimeout(() => {
          el.classList.add("is-revealed");
          timers.push(
            window.setTimeout(
              () => el.classList.add("reveal-done"),
              duration * 1000 + 100
            )
          );
        }, delaySeconds * 1000)
      );
    };

    const targets = [...root.querySelectorAll<HTMLElement>(selector)];
    if (!targets.length) return;

    if (onMount) {
      targets.forEach((el, index) => reveal(el, 0.1 + index * stagger));
      return () => timers.forEach(clearTimeout);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, index) => {
            reveal(entry.target as HTMLElement, index * stagger);
            io.unobserve(entry.target);
          });
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    targets.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [selector, stagger, duration, onMount]);

  return scope;
}
