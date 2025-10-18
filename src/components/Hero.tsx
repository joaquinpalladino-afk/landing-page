"use client"
import React from 'react';
import { Language } from '@/app/types';
import { COPY } from '@/app/constants';
import WaitlistForm from './WaitlistForm';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const copy = COPY[language];

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 items-center gap-16">
        <div className="text-center md:text-left">
          <div className="inline-block bg-blue-900/90 text-blue-300 text-sm py-1 px-4 rounded-full mb-6 animate-pulse-slow">
            {copy.devBadge}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            {copy.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto md:mx-0 mb-10">
            {copy.heroSubtitle}
          </p>
          <WaitlistForm language={language} />
        </div>
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute -inset-2 bg-blue-700/20 rounded-lg blur-xl"></div>
            <img src="/screenshots/screenshot-1.png" alt="Loomtask Screenshot" className="relative rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
