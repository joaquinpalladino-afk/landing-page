"use client"

import React from 'react';
import { Language } from '@/app/types';
import { COPY } from '@/app/constants';

const MockupCard: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="bg-[#444444]/30 p-4 rounded-lg border border-gray-700 hover:border-[#156193] hover:bg-[#444444]/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:brightness-110">
    <img src={src} alt={alt} className="rounded-md" />
  </div>
);

const Mockup: React.FC<{ language: Language }> = ({ language }) => {
  const copy = COPY[language];
  const [selectedImage, setSelectedImage] = React.useState<{src: string; alt: string; description: string} | null>(null);

  const mockupImages = [
    { src: '/screenshots/screenshot-2.png', alt: 'Loomtask Screenshot 2', description: copy.mockupScreenshot2 },
    { src: '/screenshots/screenshot-3.png', alt: 'Loomtask Screenshot 3', description: copy.mockupScreenshot3 },
    { src: '/screenshots/screenshot-4.png', alt: 'Loomtask Screenshot 4', description: copy.mockupScreenshot4 },
  ];

  return (
    <section className="py-20 px-6 bg-[#444444]/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{copy.mockupTitle}</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">{copy.mockupSubtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {mockupImages.map(image => (
            <div key={image.src} onClick={() => setSelectedImage(image)}>
                <MockupCard {...image} />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            onClick={() => setSelectedImage(null)}
        >
            <div className="bg-[#2d2d2d] p-4 rounded-lg max-w-5xl w-full mx-4" onClick={e => e.stopPropagation()}>
                <div className="relative">
                    <img src={selectedImage.src} alt={selectedImage.alt} className="rounded-md w-full" />
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <p className="text-white text-center mt-4">{selectedImage.description}</p>
            </div>
        </div>
    )}
    </section>
  );
};

export default Mockup;
