"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarCheck, MapPin, Flag } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useDictionary } from "@/i18n/DictionaryProvider";

const icons = [CalendarCheck, MapPin, Flag];

export default function HowItWorks() {
  const { dict } = useDictionary();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F97316]"
          >
            {dict.howItWorks.label}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-[#1E293B] sm:text-4xl lg:text-5xl"
          >
            {dict.howItWorks.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-lg text-[#64748B]"
          >
            {dict.howItWorks.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mt-16 grid gap-8 sm:grid-cols-3"
        >
          {dict.howItWorks.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative flex flex-col items-center text-center"
              >
                {i < dict.howItWorks.steps.length - 1 && (
                  <div className="absolute top-10 left-[calc(50%+40px)] hidden h-px w-[calc(100%-80px)] bg-gradient-to-r from-[#F97316]/40 to-[#FBBF24]/40 sm:block" />
                )}
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F97316] to-[#FBBF24] shadow-lg shadow-orange-500/20">
                  <Icon size={32} className="text-white" />
                </div>
                <span className="mt-2 text-xs font-bold text-[#F97316]">
                  {dict.howItWorks.step} {i + 1}
                </span>
                <h3 className="mt-3 font-[var(--font-heading)] text-xl font-bold text-[#1E293B]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#64748B]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
