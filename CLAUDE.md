# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page personal portfolio website (React 19 + TypeScript + Vite + Tailwind CSS v4). No router, no backend, no test suite — `App.tsx` renders all sections in order: Header, Hero, About, Skills, Experiences, Projects, Contacts, Footer.

## Commands

```bash
npm run dev        # start Vite dev server
npm run build      # type-check (tsc -b) then vite build
npm run lint       # eslint .
npm run preview    # serve the production build locally
```

There are no tests configured.

## Architecture

**Internationalization** is the central pattern. All display text lives in `src/constant/data.ts` as a `translations` object keyed by language (`en`, `ja`, `de` — the `Language` union in `src/types/language.ts`). The active language is held in React context (`src/context/LanguageContext.tsx`). Every section component follows the same idiom:

```ts
const { language } = useLanguage();
const t = translations[language];
```

When adding or changing any user-visible text, update **all three language blocks** in `data.ts`. When adding a language, extend the `Language` union and add a full block to `translations`.

**Contact form** (`src/components/contacts/`): `ContactModal.tsx` uses React 19's `useActionState` for submission. Validation is in `src/utils/validateForm.ts` (error messages come from the translations object); sending goes through EmailJS with credentials read from `import.meta.env` via `src/config/emailConfig.ts`. Requires `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` in `.env` (not committed).

**Styling** uses semantic design tokens defined in `src/index.css`: CSS variables on `:root` flipped by `prefers-color-scheme`, exposed to Tailwind via `@theme inline` (`bg-surface`, `text-ink`, `text-accent`, `border-line`, …). Use these instead of raw palette classes or `dark:` variants — colors flip automatically. Tailwind v4 is loaded via the `@tailwindcss/vite` plugin — there is no `tailwind.config.js`.

**Animations**: section reveals are class-driven CSS transitions via `src/hooks/useReveal.ts` (IntersectionObserver adds `is-revealed`/`reveal-done` to `[data-reveal]` elements; CSS lives in `index.css`). Do NOT reintroduce GSAP tweens for reveals — killed/starved tweens strand content at `opacity: 0` (frozen tabs, `ScrollTrigger.refresh()` on language switch). GSAP + ScrollTrigger is used only in `Experiences.tsx` for the scroll-scrubbed timeline fill and the `.is-active` card highlight.
