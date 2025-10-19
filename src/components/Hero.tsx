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
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const mainImage = { 
    src: '/screenshots/screenshot-1.png', 
    alt: 'Loomtask Screenshot 1', 
    description: copy.mockupScreenshot1 
  };

  return (
    <>
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
            <div 
              className="relative cursor-pointer"
              onClick={() => setSelectedImage(mainImage.src)}
            >
              <div className="absolute -inset-2 bg-blue-700/20 rounded-lg blur-xl"></div>
              <img src={mainImage.src} alt={mainImage.alt} className="relative rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      {selectedImage && (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            onClick={() => setSelectedImage(null)}
        >
            <div className="bg-[#2d2d2d] p-4 rounded-lg max-w-5xl w-full mx-4" onClick={e => e.stopPropagation()}>
                <div className="relative">
                    <img src={selectedImage} alt={mainImage.alt} className="rounded-md w-full" />
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <p className="text-white text-center mt-4">{mainImage.description}</p>
            </div>
        </div>
    )}
    </>
  );
};

export default Hero;
