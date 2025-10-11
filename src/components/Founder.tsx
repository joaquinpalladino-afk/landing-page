"use client"
import React from 'react';
import { Language } from '@/app/types';
import { COPY } from '@/app/constants';

const Founder: React.FC<{ language: Language }> = ({ language }) => {
  const copy = COPY[language];

  return (
    <section className="py-20 px-6 bg-[#444444]/20">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="w-24 h-24 mx-auto mb-6">
          <img src="/founder/Qpa7nwBL_400x400.jpg" alt={copy.founderName} className="w-full h-full rounded-full object-cover" />
        </div>
        <blockquote className="text-xl md:text-2xl italic text-white mb-6">
          {copy.founderQuote}
        </blockquote>
        <div>
          <p className="font-bold text-white text-lg">{copy.founderName}</p>
          <p className="text-gray-400">{copy.founderTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Founder;
