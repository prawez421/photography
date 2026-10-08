
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-[#061820] pt-32 pb-20 sm:min-h-[480px] lg:min-h-[520px]">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border-[60px] border-[#FFC400]/5" />

      <div className="pointer-events-none absolute -bottom-48 -left-36 h-[420px] w-[420px] rounded-full border-[50px] border-[#FFC400]/5" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#FFC400]/5 blur-[120px]" />

      {/* Decorative lines */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-px w-32 bg-gradient-to-r from-[#FFC400]/30 to-transparent" />

      <div className="pointer-events-none absolute bottom-16 right-0 h-px w-40 bg-gradient-to-l from-[#FFC400]/30 to-transparent" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-16">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.15em]"
        >
          <Link
            href="/"
            className="text-gray-400 transition-colors hover:text-[#FFC400]"
          >
            Home
          </Link>

          <ChevronRight size={15} className="text-[#FFC400]" />

          <span className="font-semibold text-[#FFC400]">
            About Us
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-[850px]"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[2px] w-12 bg-[#FFC400]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFC400]">
              Get To Know Us
            </span>
          </div>

          <h1 className="text-5xl font-black uppercase leading-[1.05] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            BEHIND THE
            <br />
            <span className="text-[#FFC400]">
              LENS.
            </span>
          </h1>

          <p className="mt-7 max-w-[650px] text-sm leading-8 text-gray-400 sm:text-base">
            We believe every photograph has a story to tell.
            Discover the passion, creativity, and vision behind
            SamPhotography.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="#our-story"
              className="group inline-flex items-center gap-3 bg-[#FFC400] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#001018] transition-all duration-300 hover:bg-[#ffda45]"
            >
              Discover Our Story

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 border-b border-[#FFC400] pb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#FFC400]"
            >
              View Portfolio

              <Camera size={18} />
            </Link>
          </div>
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-14 flex items-center gap-3 text-gray-500"
        >
          <Sparkles size={17} className="text-[#FFC400]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
            Capturing Moments, Creating Memories
          </span>
        </motion.div>
      </div>
    </section>
  );
}
