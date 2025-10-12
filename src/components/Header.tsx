"use client"

import Link from 'next/link';
import { Language } from '@/app/types';
import { COPY } from '@/app/constants';

interface HeaderProps {
  language: Language;
  onLanguageChange: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const copy = COPY[language];

  return (
    <header className="py-5 px-6 md:px-10 lg:px-20 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link href="/">
            <img src="/logo/logo.png" alt="Logo" className="h-8" />
          </Link>
          <div className='flex items-center space-x-4'>
            <Link href="/#features" className="px-4 py-2 text-sm text-white hover:text-gray-300 transition-all duration-300">
              {language === Language.EN ? 'Features' : 'Funciones'}
            </Link>
            <Link href="/#faq" className="px-4 py-2 text-sm text-white hover:text-gray-300 transition-all duration-300">
              FAQs
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={onLanguageChange}
            className="px-4 py-2 text-sm border-2 border-[#444444] rounded-md hover:bg-[#444444] text-white transition-all duration-300"
          >
            {language === Language.EN ? 'Español' : 'English'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
