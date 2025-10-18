"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Language } from "@/app/types";

interface CookieBannerProps {
  language: Language;
}

const translations = {
  [Language.EN]: {
    text: "We use cookies to improve your experience. By continuing to visit this site, you accept our use of cookies.",
    learnMore: "Learn more",
    accept: "Accept",
  },
  [Language.ES]: {
    text: "Utilizamos cookies para mejorar su experiencia. Al continuar visitando este sitio, usted acepta nuestro uso de cookies.",
    learnMore: "Saber más",
    accept: "Aceptar",
  },
};

const CookieBanner = ({ language }: CookieBannerProps) => {
  const [showBanner, setShowBanner] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie_consent");
    if (cookieConsent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0 text-center md:text-left">
          {t.text}{" "}
          <Link href="/cookies-policy" className="underline">
            {t.learnMore}
          </Link>
        </p>
        <div className="flex gap-4">
          <button
            onClick={handleAccept}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
