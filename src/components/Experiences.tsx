"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Activity } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { useDictionary } from "@/i18n/DictionaryProvider";

const tourImages = [
  "/images/hero-las-canteras.jpg",
  "/images/vegueta-cathedral-sunset.jpg",
  "/images/las-palmas-aerial.jpg",
];

const badgeColors = [
  "from-orange-500 to-amber-400",
  "from-sky-500 to-blue-600",
  "from-emerald-500 to-teal-500",
];

const tourPrices = [35, 40, 55];

export default function Experiences() {
  const { dict } = useDictionary();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiences" className="py-24 lg:py-32" ref={ref}>
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
            {dict.experiences.label}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-[#1E293B] sm:text-4xl lg:text-5xl"
          >
            {dict.experiences.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-lg text-[#64748B]"
          >
            {dict.experiences.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {dict.experiences.tours.map((tour, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden sm:h-72">
                <Image
                  src={tourImages[i]}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span
                  className={`absolute top-4 left-4 rounded-full bg-gradient-to-r ${badgeColors[i]} px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md`}
                >
                  {tour.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#1E293B]">
                  {tour.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#64748B]">
                  {tour.description}
                </p>

                <div className="mt-5 flex items-center gap-4 border-t border-gray-100 pt-4 text-xs font-medium text-[#64748B]">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-[#F97316]" />
                    {tour.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} className="text-[#F97316]" />
                    {tour.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Activity size={14} className="text-[#F97316]" />
                    {tour.level}
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <span className="text-sm text-[#64748B]">
                      {dict.experiences.from}{" "}
                    </span>
                    <span className="text-2xl font-bold text-[#0C4A6E]">
                      &euro;{tourPrices[i]}
                    </span>
                    <span className="text-sm text-[#64748B]">
                      {dict.experiences.person}
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className="rounded-full bg-[#F97316] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#EA580C] hover:shadow-md hover:shadow-orange-500/20"
                  >
                    {dict.experiences.bookNow}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
