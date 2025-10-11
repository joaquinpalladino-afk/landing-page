"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";

export default function MobileMenu({ dictionary }: { dictionary: any }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { href: "#features", label: dictionary.features },
    { href: "#pricing", label: dictionary.pricing },
    { href: "#about", label: dictionary.about },
    { href: "#contact", label: dictionary.contact },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
        className="p-2 rounded-md hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isMenuOpen ? "x" : "menu"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-[#1A1A1A] border-t border-gray-700/50"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-4 py-3 rounded-md text-base font-medium hover:bg-gray-700/50 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-gray-700/50 pt-4 mt-4 flex flex-col space-y-4">
                <span className="px-4 text-sm text-gray-400">
                  {dictionary.language}
                </span>
                <div className="px-4">
                  <LanguageSwitcher dictionary={dictionary} type="mobile" />
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
