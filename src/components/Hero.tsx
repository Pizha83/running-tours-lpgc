"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function Hero() {
  const { dict } = useDictionary();

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <Image
        src="/images/las-palmas-aerial.jpg"
        alt="Las Palmas de Gran Canaria aerial view"
        fill
        className="object-cover"
        priority
        quality={85}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C4A6E]/85 via-[#0C4A6E]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#FBBF24]"
          >
            {dict.hero.tagline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-[var(--font-heading)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {dict.hero.title}
            <span className="block text-[#FBBF24]">
              {dict.hero.titleHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/85 sm:text-xl"
          >
            {dict.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#experiences"
              className="inline-flex items-center justify-center rounded-full bg-[#F97316] px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#EA580C] hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              {dict.hero.cta1}
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/80 hover:bg-white/10"
            >
              {dict.hero.cta2}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-8 flex items-center gap-2 text-white/80"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-[#FBBF24] text-[#FBBF24]"
                />
              ))}
            </div>
            <span className="text-sm">{dict.hero.rating}</span>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <a href="#trust" aria-label="Scroll down">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={32} className="text-white/70" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
