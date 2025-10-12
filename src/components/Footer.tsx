"use client"
import React from 'react';
import Link from 'next/link';
import { Language } from '@/app/types';
import { COPY } from '@/app/constants';

const Footer: React.FC<{ language: Language }> = ({ language }) => {
  const copy = COPY[language];

  return (
    <footer className="py-8 px-6 border-t border-gray-800">
      <div className="container mx-auto text-center text-gray-500">
        <p>{copy.footerText}</p>
        <div className="flex justify-center gap-4 mt-4">
          {copy.footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
