"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { MessageCircle } from "lucide-react";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function FinalCTA() {
  const { dict } = useDictionary();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-[#F97316] via-[#F59E0B] to-[#FBBF24] py-24 lg:py-32"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            className="font-[var(--font-heading)] text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
          >
            {dict.finalCta.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-lg text-white/90"
          >
            {dict.finalCta.subtitle}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="#experiences"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-base font-bold text-[#F97316] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              {dict.finalCta.cta}
            </a>
            <a
              href="https://wa.me/34671201007?text=Hi!%20I%27d%20like%20to%20book%20a%20running%20tour"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white"
            >
              <MessageCircle size={20} />
              {dict.finalCta.whatsapp}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
