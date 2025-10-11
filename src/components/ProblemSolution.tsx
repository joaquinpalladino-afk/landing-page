"use client"

import React from 'react';
import { Language } from '@/app/types';
import { COPY } from '@/app/constants';

const ProblemSolution: React.FC<{ language: Language }> = ({ language }) => {
  const copy = COPY[language];

  return (
    <section className="py-20 px-6 bg-[#444444]/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{copy.problemTitle}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">{copy.problemSimpleTitle}</h3>
            <p className="text-gray-300">{copy.problemSimpleText}</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-red-400 mb-4">{copy.problemComplexTitle}</h3>
            <p className="text-gray-300">{copy.problemComplexText}</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#156193]/30 to-gray-900/10 p-8 rounded-lg border border-[#156193]/50 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{copy.solutionTitle}</h3>
          <p className="text-gray-200 md:text-lg max-w-3xl mx-auto">{copy.solutionText}</p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
