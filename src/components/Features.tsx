"use client"

import React from 'react';
import { Language } from '@/app/types';
import { COPY } from '@/app/constants';

const FeatureCard: React.FC<{ title: string; text: string; icon: React.ReactNode }> = ({ title, text, icon }) => (
  <div className="bg-[#444444]/80 p-6 rounded-lg border border-gray-700 hover:border-[#156193] hover:bg-[#444444]/50 transition-all duration-300">
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
    <section id="features" className="py-20 px-6">
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
            <p className="text-gray-300">{copy.comingSoonText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

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

export default Features;
