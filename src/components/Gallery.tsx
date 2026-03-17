"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useDictionary } from "@/i18n/DictionaryProvider";

const gallerySrcs = [
  "/images/hero-las-canteras.jpg",
  "/images/vegueta-cathedral-sunset.jpg",
  "/images/alfredo-kraus-sunset.jpg",
  "/images/vegueta-colorful-streets.jpg",
  "/images/natural-pool-rocks.jpg",
  "/images/teatro-perez-galdos.jpg",
  "/images/ocean-statue.jpg",
  "/images/black-beach-volcanic.jpg",
];

export default function Gallery() {
  const { dict } = useDictionary();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" ref={ref} className="bg-white py-24 lg:py-32">
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
            {dict.gallery.label}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-[#1E293B] sm:text-4xl lg:text-5xl"
          >
            {dict.gallery.title}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          {gallerySrcs.map((src, i) => (
            <motion.div
              key={src}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 || i === 5
                  ? "col-span-2 row-span-2 aspect-square"
                  : "aspect-[4/3]"
              }`}
            >
              <Image
                src={src}
                alt={dict.gallery.images[i]}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-sm font-semibold text-white">
                  {dict.gallery.images[i]}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
