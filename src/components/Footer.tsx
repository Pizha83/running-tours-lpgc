"use client";

import Image from "next/image";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function Footer() {
  const { dict } = useDictionary();

  const navLinks = [
    { label: dict.nav.experiences, href: "#experiences" },
    { label: dict.nav.howItWorks, href: "#how-it-works" },
    { label: dict.nav.about, href: "#about" },
    { label: dict.nav.gallery, href: "#gallery" },
    { label: dict.nav.reviews, href: "#reviews" },
    { label: dict.nav.faq, href: "#faq" },
  ];

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt="Running Tours LPGC"
                width={44}
                height={44}
                className="rounded-full"
              />
              <span className="font-[var(--font-heading)] text-lg font-bold">
                Running Tours LPGC
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              {dict.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white/90">{dict.footer.quickLinks}</h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-[#F97316]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white/90">{dict.footer.contact}</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:info@runningtourslpgc.com"
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-[#F97316]"
                >
                  <Mail size={16} />
                  info@runningtourslpgc.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/34671201007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-[#F97316]"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/runningtourslpgc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-[#F97316]"
                >
                  <Instagram size={16} />
                  @runningtourslpgc
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white/90">{dict.footer.findUsOn}</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/50">
              <span>Airbnb Experiences</span>
              <span>GetYourGuide</span>
              <span>TripAdvisor</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/40">
            &copy; 2026 Running Tours LPGC. {dict.footer.rights}
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white/60 transition-colors">
              {dict.footer.privacy}
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              {dict.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
