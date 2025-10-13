"use client"

import { useState, useCallback } from 'react';
import { COPY } from '@/app/constants';
import { Language } from '@/app/types';
import Header from "@/components/Header";

function PrivacyPolicy(){
    const [language, setLanguage] = useState<Language>(Language.ES);

  const handleLanguageChange = useCallback(() => {
    setLanguage(prevLang => prevLang === Language.EN ? Language.ES : Language.EN);
  }, []);
  const selectedCopy = COPY[language].privacyPolicy;

  return (
    <div>
      <Header language={language} onLanguageChange={handleLanguageChange} />
    <section className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          {selectedCopy.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-2">{selectedCopy.lastUpdated}</p>
        <p className="text-lg md:text-xl text-gray-300 mb-10">{selectedCopy.dataController}</p>

        {selectedCopy.sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
              {section.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 whitespace-pre-line">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default PrivacyPolicy;