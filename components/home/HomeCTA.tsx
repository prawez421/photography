
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function HomeCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [-60, 60]
  );

  return (
    <section
      id="home-cta"
      ref={sectionRef}
      className="relative isolate flex min-h-[580px] items-center overflow-hidden bg-[#001018] py-24 sm:min-h-[650px] lg:min-h-[720px]"
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        style={{ y: backgroundY }}
        className="pointer-events-none absolute -inset-y-20 inset-x-0 -z-10"
      >
        <Image
          src="/images/home/cta-background.jpg"
          alt="Cinematic photography background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* DARK OVERLAY */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#001018]/80" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#001018]/95 via-[#001018]/70 to-[#001018]/80" />

      {/* GOLDEN GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFC400]/10 blur-[130px]" />

      {/* DECORATIVE CIRCLES */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute -right-36 top-0 h-[450px] w-[450px] rounded-full border border-dashed border-[#FFC400]/20"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full border border-[#FFC400]/10"
      />

      {/* CORNER DETAILS */}
      <div className="absolute left-6 top-8 h-16 w-16 border-l-2 border-t-2 border-[#FFC400]/50 sm:left-12 sm:top-12" />

      <div className="absolute bottom-8 right-6 h-16 w-16 border-b-2 border-r-2 border-[#FFC400]/50 sm:bottom-12 sm:right-12" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 text-center sm:px-10">
        {/* EYEBROW */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-7 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-[#FFC400]" />

          <Sparkles
            size={17}
            className="text-[#FFC400]"
          />

          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#FFC400]">
            Let's Create Something Beautiful
          </span>

          <span className="h-px w-8 bg-[#FFC400]" />
        </motion.div>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.85,
            delay: 0.15,
          }}
          className="text-[clamp(2.7rem,7vw,7rem)] font-black uppercase leading-[1.02] tracking-[-0.055em] text-white"
        >
          YOUR STORY
          <br />
          DESERVES TO BE
          <br />
          <span className="text-[#FFC400]">
            REMEMBERED.
          </span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          className="mx-auto mt-8 max-w-[650px] text-sm leading-8 text-gray-300 sm:text-base"
        >
          From once-in-a-lifetime celebrations to the little
          moments that mean everything, let's capture your
          memories with creativity, passion, and a timeless
          photographic style.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="mt-11 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/booking"
            className="group inline-flex items-center gap-4 bg-[#FFC400] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#001018] transition-all duration-300 hover:bg-[#ffda45] hover:shadow-[0_0_40px_rgba(255,196,0,0.35)]"
          >
            Book Your Photoshoot

            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 border border-white/35 px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-[#FFC400] hover:text-[#FFC400]"
          >
            Get In Touch

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* BOTTOM DETAIL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-14 flex items-center justify-center gap-3"
        >
          <Camera
            size={19}
            className="text-[#FFC400]"
          />

          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400 sm:text-xs">
            SamPhotography — Capturing Life's Finest Moments
          </span>
        </motion.div>
      </div>
    </section>
  );
}
