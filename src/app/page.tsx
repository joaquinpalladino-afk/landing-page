"use client"

import Hero from "@/components/Hero";
import Mockup from "@/components/Mockup";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Language } from "./types";
import Header from "@/components/Header";
import { useState, useCallback } from "react";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import Founder from "@/components/Founder";

export default function Home() {
    const [language, setLanguage] = useState<Language>(Language.EN);

  const handleLanguageChange = useCallback(() => {
    setLanguage(prevLang => prevLang === Language.EN ? Language.ES : Language.EN);
  }, []);

  return (
    <div>
            <Header language={language} onLanguageChange={handleLanguageChange} />
            <Hero language={language} />
            <ProblemSolution language={language} />
            <Features language={language} />
            <Mockup language={language} />
            <FAQ language={language} />
            <Founder language={language} />
            <CTA language={language} />
            <Footer language={language} />
    </div>
  );
}
