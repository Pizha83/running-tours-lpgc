"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Star, Globe, MapPin } from "lucide-react";
import { useDictionary } from "@/i18n/DictionaryProvider";

function AnimatedCounter({
  target,
  decimals = 0,
  suffix = "",
  inView,
}: {
  target: number;
  decimals?: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="text-3xl font-bold text-[#0C4A6E] sm:text-4xl">
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  const { dict } = useDictionary();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Users, value: 500, suffix: "+", label: dict.trust.runners },
    { icon: Star, value: 5.0, suffix: "", label: dict.trust.rating, decimals: 1 },
    { icon: Globe, value: 20, suffix: "+", label: dict.trust.countries },
    { icon: MapPin, value: 3, suffix: "", label: dict.trust.routes },
  ];

  return (
    <section id="trust" ref={ref} className="relative z-10 -mt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6 rounded-2xl bg-white p-8 shadow-xl shadow-black/5 sm:grid-cols-4 sm:gap-4 lg:p-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
              <stat.icon size={24} className="text-[#F97316]" />
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals}
                inView={inView}
              />
              <span className="text-sm font-medium text-[#64748B]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
