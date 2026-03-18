"use client";

import { ArrowLeft } from "lucide-react";
import { useDictionary } from "@/i18n/DictionaryProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  const { dict, locale } = useDictionary();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <a
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-[#F97316] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            {dict.legal.backToHome}
          </a>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#0C4A6E] mb-2">
            {title}
          </h1>
          <p className="text-sm text-[#64748B] mb-10">
            {dict.legal.lastUpdated}
          </p>

          <div className="prose prose-slate max-w-none">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
