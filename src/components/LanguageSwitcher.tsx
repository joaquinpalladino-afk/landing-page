"use client";

import { usePathname, useRouter } from "next/navigation";
import { i18n, type Locale } from "@/lib/i18n/config";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";

export default function LanguageSwitcher({
  dictionary,
  type = "desktop",
}: {
  dictionary: any;
  type?: "desktop" | "mobile";
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (newLocale: Locale) => {
    if (!pathname) return;
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    const newPath = pathname.replace(
      new RegExp(`^/(${i18n.locales.join("|")})`),
      `/${newLocale}`
    );
    router.replace(newPath);
  };

  const currentLocale = pathname.split("/")[1] as Locale;

  if (type === "mobile") {
    return (
      <div className="flex flex-col space-y-2">
        <button
          onClick={() => handleLocaleChange("en")}
          className={`px-4 py-3 rounded-md text-left transition-colors duration-200 ${
            currentLocale === "en"
              ? "bg-[#156193] text-white"
              : "hover:bg-gray-700/50"
          }`}
        >
          {dictionary.english}
        </button>
        <button
          onClick={() => handleLocaleChange("es")}
          className={`px-4 py-3 rounded-md text-left transition-colors duration-200 ${
            currentLocale === "es"
              ? "bg-[#156193] text-white"
              : "hover:bg-gray-700/50"
          }`}
        >
          {dictionary.spanish}
        </button>
      </div>
    );
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <motion.button
          className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-200"
          aria-label={dictionary.language}
          whileTap={{ scale: 0.95 }}
        >
          <Globe size={20} />
          <span>{currentLocale.toUpperCase()}</span>
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
                {dictionary.english}
              </DropdownMenu.Item>
              <DropdownMenu.Item
                onSelect={() => handleLocaleChange("es")}
                className="px-3 py-2 rounded-md text-sm flex items-center gap-2 cursor-pointer hover:bg-[#156193] focus:bg-[#156193] focus:outline-none"
              >
                {dictionary.spanish}
              </DropdownMenu.Item>
            </motion.div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </AnimatePresence>
    </DropdownMenu.Root>
  );
}