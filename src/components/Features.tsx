/**
 * README: Features Component
 *
 * Dependencies:
 * - React (v18+)
 * - Next.js (for component structure and types)
 * - TailwindCSS (for styling)
 * - Optional: @radix-ui/react-tooltip (for accessible tooltips, not implemented by default)
 * - Font: Assumes a font like Inter or Poppins is loaded globally.
 *
 * ---
 *
 * This component renders a responsive 3x2 grid of feature cards for a landing page.
 * It is designed to be dark-themed, accessible, and easily translatable.
 *
 * ---
 *
 * Props:
 * - lang: 'en' | 'es' (defaults to 'en'). Determines the display language.
 * - translations: An optional object to override default text for any key.
 * - className: Optional string to extend the component's root container styles.
 *
 * ---
 *
 * Usage:
 *
 * import Features from '@/components/Features';
 *
 * // Basic usage (defaults to English)
 * <Features />
 *
 * // Spanish version
 * <Features lang="es" />
 *
 * // With custom i18n hook (recommended)
 * // const { lang, dictionary } = useI18n();
 * // <Features lang={lang} translations={dictionary.featuresSection} />
 *
 */
import React from 'react';

// --- 1. ICONS (PLACEHOLDERS) ---
// TODO: Replace these with actual SVG components or icons from a library like Lucide/Heroicons.
const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Security Icon"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);
const ClipboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Task Management Icon"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
);
const TagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Tagging Icon"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
);
const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Notifications Icon"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
);
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Completion Icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
);
const DotsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="More Features Icon"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
);

const featureIcons = {
  "one-click": <LockIcon />,
  "tasks": <ClipboardIcon />,
  "projects": <TagIcon />,
  "deadlines": <BellIcon />,
  "obvious": <CheckIcon />,
  "beginning": <DotsIcon />,
};

// --- 2. TRANSLATIONS & DEFAULT CONTENT ---
const defaults = {
  en: {
    title: "Everything You Need. Nothing You Don't.",
    features: [
      {
        id: "one-click",
        title: "One-Click Access",
        body: "Google or GitHub. Click. Done. No 47-field forms.",
      },
      {
        id: "tasks",
        title: "Tasks That Adapt",
        body: "Create, edit, complete, delete. Keyboard shortcuts for everything. Work at the speed of thought.",
      },
      {
        id: "projects",
        title: "Projects That Make Sense",
        body: "Tag by client, project or deadline. Everything visible at a glance. Context switching without the headache.",
      },
      {
        id: "deadlines",
        title: "Deadlines That Don't Surprise You",
        body: "Smart reminders that know when you actually work. Never ghost a deadline again.",
      },
      {
        id: "obvious",
        title: "The Obvious, Done Right",
        body: "Priorities that matter. Descriptions that clarify. Search that finds. Revolutionary, we know.",
      },
      {
        id: "beginning",
        title: "This Is Just The Beginning...",
        body: "AI to break down tasks? Time tracking that doesn't suck? We build what you actually asked for. No committees. No corporate nonsense.",
      },
    ],
  },
  es: {
    title: "Todo Lo Que Necesitas. Nada Que No.",
    features: [
      {
        id: "one-click",
        title: "Acceso En Un Click",
        body: "Google o GitHub. Click. Listo. Sin formularios de 47 campos.",
      },
      {
        id: "tasks",
        title: "Tareas Que Se Adaptan",
        body: "Crear, editar, completar, eliminar. Atajos de teclado para todo. Trabaja a la velocidad del pensamiento.",
      },
      {
        id: "projects",
        title: "Proyectos Con Sentido",
        body: "Etiqueta por cliente, proyecto o deadline. Todo visible de un vistazo. Cambio de contexto sin dolor de cabeza.",
      },
      {
        id: "deadlines",
        title: "Deadlines Que No Te Sorprenden",
        body: "Recordatorios inteligentes que saben cuándo trabajas de verdad. Nunca más ghostees un deadline.",
      },
      {
        id: "obvious",
        title: "Lo Obvio, Bien Hecho",
        body: "Prioridades que importan. Descripciones que aclaran. Búsqueda que encuentra. Revolucionario, lo sabemos.",
      },
      {
        id: "beginning",
        title: "Esto Es Solo El Comienzo...",
        body: "¿IA para desglosar tareas? ¿Time tracking que no apesta? Construimos lo que realmente pediste. Sin comités. Sin tonterías corporativas.",
      },
    ],
  },
};

// --- 3. COMPONENT PROP TYPES ---
type Feature = {
  id: keyof typeof featureIcons;
  title: string;
  body: string;
};

type Props = {
  lang?: 'en' | 'es';
  translations?: {
    title?: string;
    features?: Feature[];
  };
  className?: string;
};

// --- 4. MAIN COMPONENT ---
const Features: React.FC<Props> = ({ lang = 'en', translations = {}, className = '' }) => {
  const content = {
    title: translations.title || defaults[lang].title,
    features: translations.features || defaults[lang].features,
  };

  return (
    <section
      id="features"
      role="region"
      aria-labelledby="features-title"
      // TODO: For theme consistency, move colors to tailwind.config.js
      // e.g., bg-background-dark, text-primary-accent
      className={`bg-[#0B1520] px-8 lg:px-24 py-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="features-title"
          className="text-white font-extrabold text-2xl md:text-3xl lg:text-4xl text-center mb-12"
        >
          {content.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.features.map((feature, index) => (
            <article
              key={feature.id}
              tabIndex={0}
              className={`
                flex flex-col
                bg-[#0f2430]
                border border-[rgba(255,255,255,0.03)]
                rounded-lg p-5 lg:p-6 shadow-sm
                transition-transform duration-300 ease-in-out
                hover:-translate-y-1
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#156193]/50 focus-visible:ring-offset-[#0B1520]
                motion-reduce:transition-none motion-reduce:hover:transform-none
                ${index === 5 ? 'border-dashed items-center justify-center text-center' : ''}
              `}
            >
              {index < 5 ? (
                <>
                  <div className="text-[#156193] mb-3">
                    {featureIcons[feature.id]}
                  </div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#BFC9CF] text-xs md:text-sm leading-relaxed">
                    {feature.body}
                  </p>
                </>
              ) : (
                // Special layout for the last card
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="text-[#156193] mb-3">
                        {featureIcons[feature.id]}
                    </div>
                    <h3 className="text-white font-semibold text-base mb-3">
                        {feature.title}
                    </h3>
                    <p className="text-[#BFC9CF] text-xs md:text-sm leading-relaxed">
                        {feature.body}
                    </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
