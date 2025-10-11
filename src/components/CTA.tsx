"use client"
import React from 'react';
import { Language } from '@/app/types';
import { COPY } from '@/app/constants';
import WaitlistForm from './WaitlistForm';

const CTA: React.FC<{ language: Language }> = ({ language }) => {
  const copy = COPY[language];

  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {copy.ctaTitle}
        </h2>
        <p className="text-gray-300 md:text-lg mb-10">
          {copy.ctaSubtitle}
        </p>
        <WaitlistForm language={language} />
      </div>
    </section>
  );
};

export default CTA;
