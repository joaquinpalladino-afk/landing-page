<<<<<<< HEAD
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
=======
"use client"

import React from 'react';
import { Language } from '@/app/types';
import { COPY } from '@/app/constants';

const FeatureCard: React.FC<{ title: string; text: string; icon: React.ReactNode }> = ({ title, text, icon }) => (
  <div className="bg-[#444444]/30 p-6 rounded-lg border border-gray-700 hover:border-[#156193] hover:bg-[#444444]/50 transition-all duration-300">
    <div className="mb-4 text-[#156193]">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{text}</p>
  </div>
);

const Features: React.FC<{ language: Language }> = ({ language }) => {
  const copy = COPY[language];

  const featuresList = [
    { title: copy.featureAuthTitle, text: copy.featureAuthText, icon: <AuthIcon /> },
    { title: copy.featureCrudTitle, text: copy.featureCrudText, icon: <CrudIcon /> },
    { title: copy.featureTagsTitle, text: copy.featureTagsText, icon: <TagsIcon /> },
    { title: copy.featureNotificationsTitle, text: copy.featureNotificationsText, icon: <NotificationIcon /> },
    { title: copy.featureEssentialsTitle, text: copy.featureEssentialsText, icon: <EssentialsIcon /> },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{copy.featuresTitle}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map(feature => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
          <div className="bg-gray-800 p-6 rounded-lg border border-dashed border-gray-600 md:col-span-2 lg:col-span-1 flex flex-col justify-center items-center text-center">
            <h3 className="text-xl font-bold text-white mb-2">{copy.comingSoonTitle}</h3>
            <p className="text-gray-400">{copy.comingSoonText}</p>
          </div>
>>>>>>> main
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
=======
// SVG Icons as components
const AuthIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);
const CrudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);
const TagsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-5 5a2 2 0 01-2.828 0l-7-7A2 2 0 013 8v-3a2 2 0 012-2z" />
  </svg>
);
const NotificationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);
const EssentialsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

>>>>>>> main
export default Features;
