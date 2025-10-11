import { ReactNode } from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { getDictionary } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import { Locale } from "@/lib/i18n/config";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  logo?: ReactNode;
  lang: Locale;
}

export default async function Header({ logo, lang }: HeaderProps) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.header;

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
        <Link href={`/${lang}`} className="flex items-center space-x-3">
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
          <LanguageSwitcher dictionary={t} />
        </div>

        {/* MOBILE MENU */}
        <MobileMenu dictionary={t} />
      </div>
    </header>
  );
}
