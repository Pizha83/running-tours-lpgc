"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function PrivateTourCTA() {
  const { dict } = useDictionary();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      <Image
        src="/images/vegueta-colorful-streets.jpg"
        alt="Colorful streets of Vegueta"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0C4A6E]/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FBBF24]"
          >
            {dict.privateTour.label}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-[var(--font-heading)] text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            {dict.privateTour.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg text-white/80"
          >
            {dict.privateTour.subtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-4">
            <span className="text-3xl font-bold text-white">
              {dict.privateTour.from} &euro;90
            </span>
            <span className="text-white/70">{dict.privateTour.person}</span>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-[#F97316] px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#EA580C] hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              {dict.privateTour.cta}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
