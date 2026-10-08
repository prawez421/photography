
"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Camera,
  Sparkles,
  Aperture,
} from "lucide-react";

export default function AboutCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      id="about-cta"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#FFC400] py-20 text-[#001018] sm:py-28 lg:py-32"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-36 -top-36 h-[450px] w-[450px] rounded-full border-[65px] border-[#001018]/5" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full border-[65px] border-[#001018]/5" />

      {/* Animated circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute right-[8%] top-[12%] hidden h-40 w-40 rounded-full border border-dashed border-[#001018]/20 lg:block"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[1000px] text-center">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-7 flex items-center justify-center gap-3"
          >
            <span className="h-px w-9 bg-[#001018]" />

            <Sparkles size={18} />

            <span className="text-[11px] font-bold uppercase tracking-[0.25em]">
              Let's Create Together
            </span>

            <span className="h-px w-9 bg-[#001018]" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 55 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(2.6rem,6vw,6rem)] font-black uppercase leading-[1.06] tracking-[-0.055em]"
          >
            LET&apos;S CAPTURE
            <br />
            SOMETHING
            <br />
            <span className="text-white">
              EXTRAORDINARY.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-8 max-w-[640px] text-sm leading-8 text-[#001018]/75 sm:text-base"
          >
            Every moment deserves to be remembered.
            Whether it&apos;s a wedding, portrait, fashion
            shoot, or special event, let&apos;s turn your
            beautiful moments into timeless photographs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-11 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/booking"
              className="group inline-flex items-center gap-4 bg-[#001018] px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#0A2630] hover:shadow-xl"
            >
              <Camera size={19} className="text-[#FFC400]" />

              Book Your Photoshoot

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border-2 border-[#001018] px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#001018] transition-all duration-300 hover:bg-[#001018] hover:text-white"
            >
              Get In Touch

              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Bottom Detail */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-14 flex items-center justify-center gap-3"
          >
            <Aperture size={19} />

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] sm:text-xs">
              SamPhotography — Every Frame Tells A Story
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
