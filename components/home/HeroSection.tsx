
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown, Camera, Aperture } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative isolate flex min-h-[780px] items-center overflow-hidden bg-[#001018] pt-28 pb-20 lg:min-h-screen lg:pt-24 lg:pb-12"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_45%,#19303a_0%,#001018_65%)]" />

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Animated golden circle */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="pointer-events-none absolute right-[-180px] top-[15%] h-[500px] w-[500px] rounded-full border-[65px] border-[#FFC400]/10 sm:right-[-100px] lg:right-[4%] lg:top-[12%] lg:h-[680px] lg:w-[680px] lg:border-[95px]"
      />

      {/* Golden decorative line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 130 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute left-5 top-36 hidden w-px bg-gradient-to-b from-[#FFC400] to-transparent xl:block"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-12 px-6 sm:px-10 lg:grid-cols-[1fr_1.05fr] lg:gap-5 lg:px-16">
        {/* LEFT CONTENT */}
        <motion.div
          style={{ y: textY, opacity }}
          className="relative z-20 max-w-[650px]"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-7 flex items-center gap-4"
          >
            <span className="h-[2px] w-12 bg-[#FFC400]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#FFC400] sm:text-xs">
              Creative Photography Studio
            </span>
          </motion.div>

          {/* Main heading */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-[clamp(3.2rem,6vw,6.5rem)] font-black leading-[0.99] tracking-[-0.06em] text-white"
            >
              WE CAPTURE
              <br />
              <span className="text-[#FFC400]">YOUR</span>
              <br />
              MOMENTS.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-8 max-w-[480px] text-sm leading-8 text-[#aeb8bd] sm:text-base"
          >
            Every moment tells a story. At SamPhotography,
            we transform your beautiful memories into
            timeless works of art through creative,
            cinematic photography.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-4 bg-[#FFC400] px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#001018] transition-all duration-300 hover:bg-[#ffda45] hover:shadow-[0_0_35px_rgba(255,196,0,0.3)]"
            >
              Explore My Work
              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/booking"
              className="group inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-[#FFC400] hover:text-[#FFC400]"
            >
              Book a Shoot
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>

          {/* Bottom decorative details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-14 flex items-center gap-5 border-t border-white/10 pt-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FFC400]/40 text-[#FFC400]">
              <Camera size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                The Art of Storytelling
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Through every frame
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT PHOTOGRAPHER IMAGE */}
        <motion.div
          style={{ y: imageY }}
          className="relative mx-auto w-full max-w-[650px] lg:ml-auto"
        >
          {/* Background golden glow */}
          <div className="pointer-events-none absolute inset-x-[10%] bottom-[10%] h-[65%] rounded-full bg-[#FFC400]/15 blur-[100px]" />

          {/* Animated outlined circles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#FFC400]/25"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-[530px] overflow-hidden rounded-t-[220px] border border-[#FFC400]/25 bg-[#10242b] sm:rounded-t-[280px]"
          >
            <Image
              src="/images/home/photographer.png"
              alt="SamPhotography professional photographer"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover object-center transition-transform duration-1000 hover:scale-105"
            />

            {/* Image gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#001018] via-transparent to-transparent" />
          </motion.div>

          {/* Floating image badge */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-[12%] right-[-5px] z-10 flex items-center gap-3 border border-[#FFC400]/30 bg-[#071b24]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:right-0 sm:px-5 sm:py-4"
          >
            <Aperture size={28} className="text-[#FFC400]" />
            <div>
              <p className="text-xs font-bold text-white">
                CREATIVE VISION
              </p>
              <p className="mt-1 text-[10px] tracking-wider text-gray-400">
                SAM PHOTOGRAPHY
              </p>
            </div>
          </motion.div>

          {/* Vertical label */}
          <span className="absolute right-[-26px] top-[25%] hidden rotate-90 text-[10px] font-semibold tracking-[0.35em] text-[#FFC400] xl:block">
            CAPTURE THE MOMENT
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#recent-work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-400 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown size={18} className="text-[#FFC400]" />
        </motion.div>
      </motion.a>
    </section>
  );
}
