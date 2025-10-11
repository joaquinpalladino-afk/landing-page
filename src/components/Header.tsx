"use client";

import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu, X, Globe } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { motion, AnimatePresence } from "framer-motion";

// --- TRANSLATIONS ---
const translations = {
  en: {
    features: "Features",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    altLogo: "Loomtask logo",
    language: "Language",
    english: "English",
    spanish: "Spanish",
  },
  es: {
    features: "Características",
    pricing: "Precios",
    about: "Acerca de",
    contact: "Contacto",
    altLogo: "Logo de Loomtask",
    language: "Idioma",
    english: "Inglés",
    spanish: "Español",
  },
};

// --- TYPE DEFINITIONS ---
type Locale = "en" | "es";

interface HeaderProps {
  logo?: ReactNode;
}

// --- HELPER FUNCTIONS ---
/**
 * Gets the initial locale from localStorage or defaults to 'en'.
 * This ensures the component is client-aware.
 */
const getInitialLocale = (): Locale => {
  if (typeof window !== "undefined") {
    return (localStorage.getItem("lang") as Locale) || "en";
  }
  return "en";
};

/**
 * Main Header Component
 */
export default function Header({ logo }: HeaderProps) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Effect to handle locale changes and persist them.
  useEffect(() => {
    localStorage.setItem("lang", locale);
  }, [locale]);

  const t = translations[locale];

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    // Close the dropdown on selection
    // This is handled by DropdownMenu's default behavior
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { href: "#features", label: t.features },
    { href: "#pricing", label: t.pricing },
    { href: "#about", label: t.about },
    { href: "#contact", label: t.contact },
  ];

  return (
    <header className="dark bg-[#1A1A1A] text-white shadow-lg sticky top-0 z-50 border-b border-gray-700/50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-3">
          {logo ? (
            <Slot>{logo}</Slot>
          ) : (
            <span className="font-bold text-2xl text-[#156193]">Loomtask</span>
          )}
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* LANGUAGE SELECTOR */}
        <div className="hidden md:flex items-center">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <motion.button
                className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-200"
                aria-label={t.language}
                whileTap={{ scale: 0.95 }}
              >
                <Globe size={20} />
                <span>{locale.toUpperCase()}</span>
              </motion.button>
            </DropdownMenu.Trigger>
            <AnimatePresence>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="bg-[#1A1A1A] border border-gray-700/50 rounded-lg shadow-xl p-1 mt-2 w-32 text-white"
                  sideOffset={5}
                  align="end"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.1 }}
                  >
                    <DropdownMenu.Item
                      onSelect={() => handleLocaleChange("en")}
                      className="px-3 py-2 rounded-md text-sm flex items-center gap-2 cursor-pointer hover:bg-[#156193] focus:bg-[#156193] focus:outline-none"
                    >
                      {t.english}
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                      onSelect={() => handleLocaleChange("es")}
                      className="px-3 py-2 rounded-md text-sm flex items-center gap-2 cursor-pointer hover:bg-[#156193] focus:bg-[#156193] focus:outline-none"
                    >
                      {t.spanish}
                    </DropdownMenu.Item>
                  </motion.div>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </AnimatePresence>
          </DropdownMenu.Root>
        </div>

        {/* MOBILE MENU BUTTON */}
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
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-[#1A1A1A] border-t border-gray-700/50"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="flex flex-col p-4 space-y-2">
              {navLinks.map((link, i) => (
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
                <span className="px-4 text-sm text-gray-400">{t.language}</span>
                <div className="flex flex-col space-y-2 px-4">
                   <button
                      onClick={() => { handleLocaleChange("en"); handleLinkClick(); }}
                      className={`px-4 py-3 rounded-md text-left transition-colors duration-200 ${
                        locale === "en" ? "bg-[#156193] text-white" : "hover:bg-gray-700/50"
                      }`}
                    >
                      {t.english}
                    </button>
                    <button
                      onClick={() => { handleLocaleChange("es"); handleLinkClick(); }}
                      className={`px-4 py-3 rounded-md text-left transition-colors duration-200 ${
                        locale === "es" ? "bg-[#156193] text-white" : "hover:bg-gray-700/50"
                      }`}
                    >
                      {t.spanish}
                    </button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/*
--- MANUAL TESTING GUIDE ---

1.  **Language Change:**
    - Desktop: Click the language code (e.g., "EN"). A dropdown should appear. Select "Español". All texts in the header should change to Spanish. The choice should persist on page reload.
    - Mobile: Open the hamburger menu. At the bottom, tap "ES". The menu and header texts should update.

2.  **Mobile Menu Navigation:**
    - Shrink the browser window to a mobile width.
    - Click the hamburger icon. The menu should slide down.
    - Click on a navigation link (e.g., "Características").
    - The menu should close automatically, and the page should attempt to scroll to the corresponding ID (e.g., `#features`).

3.  **Responsive Layout:**
    - Resize the browser window from desktop to mobile size.
    - The navigation links should disappear and be replaced by the hamburger menu icon.
    - The CTA button and language selector should also hide on mobile, moving inside the menu.

4.  **Accessibility Checks:**
    - Use the Tab key to navigate the header. All interactive elements (logo, links, buttons) should receive focus in a logical order.
    - The focused element should have a visible outline (e.g., a ring around it).
    - Open dropdowns (language, mobile menu) with Enter or Spacebar when the trigger is focused.

5.  **Logo Prop:**
    - To test the logo prop, you can import an actual SVG and pass it like this in `layout.tsx` or `page.tsx`:
      // import MyLogo from '@/path/to/MyLogo.svg';
      // <Header logo={<MyLogo />} />
    - If no logo is passed, it should render the default circular placeholder.
*/