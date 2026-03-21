"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { reviews } from "@/lib/data";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function Reviews() {
  const { dict } = useDictionary();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" ref={ref} className="bg-[#0F172A] py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FBBF24]"
          >
            {dict.reviews.label}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-[var(--font-heading)] text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            {dict.reviews.title}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mt-12 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              variants={fadeUp}
              className="min-w-[300px] snap-center flex-shrink-0 rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10 sm:min-w-0"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#F97316] to-[#FBBF24] text-sm font-bold text-white">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-white/50">
                    {review.flag} {review.country}
                  </p>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-[#FBBF24] text-[#FBBF24]"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                &ldquo;{review.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
