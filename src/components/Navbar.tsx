"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { locales, localeNames, localeFlags, type Locale } from "@/i18n/config";

export default function Navbar() {
  const { dict, locale } = useDictionary();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { label: dict.nav.experiences, href: "#experiences" },
    { label: dict.nav.howItWorks, href: "#how-it-works" },
    { label: dict.nav.about, href: "#about" },
    { label: dict.nav.gallery, href: "#gallery" },
    { label: dict.nav.reviews, href: "#reviews" },
    { label: dict.nav.faq, href: "#faq" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function switchLocale(newLocale: Locale) {
    const path = window.location.pathname;
    const segments = path.split("/");
    segments[1] = newLocale;
    window.location.pathname = segments.join("/");
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/images/logo.jpg"
              alt="Running Tours LPGC"
              width={80}
              height={80}
              className={`rounded-full transition-all duration-300 ${
                scrolled ? "w-14 h-14" : "w-16 h-16 lg:w-20 lg:h-20"
              }`}
            />
            <span
              className={`font-[var(--font-heading)] font-bold text-lg transition-colors duration-300 hidden sm:inline ${
                scrolled ? "text-[#0C4A6E]" : "text-white"
              }`}
            >
              Running Tours LPGC
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[#F97316] ${
                  scrolled ? "text-[#1E293B]" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 hover:text-[#F97316] ${
                  scrolled ? "text-[#1E293B]" : "text-white/90"
                }`}
              >
                <Globe size={16} />
                {localeFlags[locale]} {locale.toUpperCase()}
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-xl bg-white shadow-lg border border-gray-100"
                  >
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          switchLocale(loc);
                          setLangOpen(false);
                        }}
                        className={`flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 ${
                          loc === locale
                            ? "font-semibold text-[#F97316] bg-orange-50"
                            : "text-[#1E293B]"
                        }`}
                      >
                        <span>{localeFlags[loc]}</span>
                        {localeNames[loc]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#contact"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
            >
              {dict.nav.bookYourRun}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  scrolled ? "text-[#1E293B]" : "text-white"
                }`}
                aria-label="Change language"
              >
                <Globe size={20} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-xl bg-white shadow-lg border border-gray-100"
                  >
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          switchLocale(loc);
                          setLangOpen(false);
                        }}
                        className={`flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 ${
                          loc === locale
                            ? "font-semibold text-[#F97316] bg-orange-50"
                            : "text-[#1E293B]"
                        }`}
                      >
                        <span>{localeFlags[loc]}</span>
                        {localeNames[loc]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? "text-[#1E293B]" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white lg:hidden"
          >
            <div className="flex items-center justify-between px-4 py-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo.jpg"
                  alt="Running Tours LPGC"
                  width={44}
                  height={44}
                  className="rounded-full w-11 h-11"
                />
                <span className="font-bold text-[#0C4A6E]">
                  Running Tours LPGC
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-[#1E293B]"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center gap-6 pt-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-[#1E293B] hover:text-[#F97316] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold px-8 py-3 rounded-full transition-all"
              >
                {dict.nav.bookYourRun}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
