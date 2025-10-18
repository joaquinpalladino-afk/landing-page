"use client"

import React from 'react';
import { Language } from '@/app/types';
import { COPY } from '@/app/constants';

const ProblemSolution: React.FC<{ language: Language }> = ({ language }) => {
  const copy = COPY[language];

  return (
    <section className="py-20 px-6 bg-[#444444]/20">
      <div className="container mx-auto max-w-6xl">

   {/* Nueva sección "¿Para quién es Loomtask?" */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">{copy.whoIsForTitle}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {copy.whoIsForItems.map((item, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-green-400 transition-colors duration-300 flex flex-col">
                <div className="flex-grow">
                  <span className="text-green-400 text-2xl mr-3">✅</span>
                  <h3 className="text-xl font-semibold text-white mt-4 mb-3 inline-block">{item.title}</h3>
                  <p className="text-gray-400 text-m">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Encabezado de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{copy.problemTitle}</h2>
        </div>

        {/* Contenedor de "Problema" */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-yellow-400 transition-colors duration-300">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">{copy.problemSimpleTitle}</h3>
            <p className="text-gray-300">{copy.problemSimpleText}</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-red-400 transition-colors duration-300">
            <h3 className="text-2xl font-semibold text-red-400 mb-4">{copy.problemComplexTitle}</h3>
            <p className="text-gray-300">{copy.problemComplexText}</p>
          </div>
        </div>

        {/* Contenedor de "Solución" */}
        <div className="bg-gradient-to-br from-[#156193]/30 to-gray-900/10 p-10 rounded-lg border border-[#156193]/50 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{copy.solutionTitle}</h3>
          <p className="text-gray-200 md:text-lg max-w-3xl mx-auto">{copy.solutionText}</p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;