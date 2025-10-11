<<<<<<< HEAD
"use client";

import { motion } from "framer-motion";

// Since we are using a client component, we can't use async/await for dictionary
// We will assume the dictionary is passed as a prop.
// The page component that uses this component will handle fetching the dictionary.
interface ProblemSolutionProps {
  dictionary: any; // A more specific type can be used if you have one for your dictionaries
  className?: string;
  locale?: "es" | "en";
}

export default function ProblemSolution({
  dictionary,
  className = "",
  locale = "es",
}: ProblemSolutionProps) {
  const t = dictionary.problemSolution;

  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 30px -10px rgba(21, 97, 147, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const gradientBackground = {
    background:
      "linear-gradient(180deg, rgba(21,97,147,0.18), rgba(10,40,60,0.05))",
  };

  return (
    <section
      className={`bg-[#1A1D25] text-white py-20 md:py-28 ${className}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
          {t.heading}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12 md:mb-20">
          {/* Card 1: Post-it Apps */}
          <motion.div
            className="rounded-lg p-8 border border-[rgba(21,97,147,0.12)] shadow-lg"
            style={gradientBackground}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-[#F0C419]">
                {t.cards.postit.title}
              </h3>
              <p className="text-sm text-[#c9d1d9] leading-relaxed">
                {t.cards.postit.body}
              </p>
            </div>
          </motion.div>

          {/* Card 2: Corporate Monsters */}
          <motion.div
            className="rounded-lg p-8 border border-[rgba(21,97,147,0.12)] shadow-lg"
            style={gradientBackground}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-[#E76A6A]">
                {t.cards.corporate.title}
              </h3>
              <p className="text-sm text-[#c9d1d9] leading-relaxed">
                {t.cards.corporate.body}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Hero Panel */}
        <motion.div
          className="bg-[#1A1A1A] rounded-lg p-10 md:p-12 text-center border border-[rgba(21,97,147,0.12)] shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t.hero.title}
            </h3>
            <p className="text-sm text-[#bfc8cf] max-w-3xl mx-auto leading-relaxed">
              {t.hero.body}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
=======
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
>>>>>>> main
