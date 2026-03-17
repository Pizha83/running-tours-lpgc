"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram } from "lucide-react";
import { slideFromLeft, slideFromRight } from "@/lib/animations";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function AboutGuide() {
  const { dict } = useDictionary();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideFromLeft}
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl lg:mx-0"
          >
            <Image
              src="/images/nano-guide.jpg"
              alt="Nano - Your running guide in Las Palmas"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C4A6E]/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#F97316] to-[#FBBF24]">
                    <span className="text-lg font-bold text-white">N</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E293B]">
                      {dict.about.guideCard}
                    </p>
                    <p className="text-sm text-[#64748B]">
                      {dict.about.guideLocation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideFromRight}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F97316]">
              {dict.about.label}
            </p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-[#1E293B] sm:text-4xl">
              {dict.about.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#64748B]">
              {dict.about.p1}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
              {dict.about.p2}
            </p>

            <div className="mt-8 flex gap-8">
              <div>
                <p className="text-2xl font-bold text-[#0C4A6E]">10+</p>
                <p className="text-sm text-[#64748B]">{dict.about.yearsRunning}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#0C4A6E]">{dict.about.local}</p>
                <p className="text-sm text-[#64748B]">{dict.about.bornRaised}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#0C4A6E]">EN / ES</p>
                <p className="text-sm text-[#64748B]">{dict.about.languages}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/runningtourslpgc/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <Instagram size={18} />
                {dict.about.followInstagram}
              </a>
              <a
                href="https://www.strava.com/clubs/2017860"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#FC4C02] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/></svg>
                {dict.about.joinStrava}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
