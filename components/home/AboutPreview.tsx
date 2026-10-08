
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
  Aperture,
  Sparkles,
  MoveUpRight,
} from "lucide-react";

const highlights = [
  {
    icon: Camera,
    title: "Creative Photography",
    description: "Every frame tells a unique story.",
  },
  {
    icon: Aperture,
    title: "Cinematic Vision",
    description: "Beautiful moments, artistically captured.",
  },
  {
    icon: Sparkles,
    title: "Timeless Memories",
    description: "Photographs to treasure forever.",
  },
];

export default function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [-35, 35]
  );

  return (
    <section
      id="about-preview"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#061820] py-20 sm:py-28 lg:py-36"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[450px] w-[450px] rounded-full bg-[#FFC400]/5 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#FFC400]/20 to-transparent" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* LEFT IMAGE AREA */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -70 }
            }
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[570px] lg:mx-0"
          >
            {/* Decorative frame */}
            <div className="absolute -left-3 -top-3 h-[45%] w-[45%] border-l-2 border-t-2 border-[#FFC400] sm:-left-5 sm:-top-5" />

            <div className="absolute -bottom-3 -right-3 h-[45%] w-[45%] border-b-2 border-r-2 border-[#FFC400] sm:-bottom-5 sm:-right-5" />

            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[#10242b]">
              <motion.div
                style={{ y: imageY }}
                className="absolute -inset-y-10 inset-x-0"
              >
                <Image
                  src="/images/home/about-photographer.png"
                  alt="SamPhotography photographer at work"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-center"
                />
              </motion.div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#001018]/65 via-transparent to-transparent" />

              {/* Image corner label */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <span className="h-px w-9 bg-[#FFC400]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                  Behind The Lens
                </span>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1, rotate: 0 }
                  : { opacity: 0, scale: 0.7, rotate: -15 }
              }
              transition={{
                duration: 0.7,
                delay: 0.5,
                type: "spring",
              }}
              className="absolute -right-2 top-[12%] z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full border-[5px] border-[#061820] bg-[#FFC400] text-[#001018] shadow-[0_0_35px_rgba(255,196,0,0.25)] sm:-right-8 sm:h-32 sm:w-32"
            >
              <Camera size={26} strokeWidth={1.7} />
              <span className="mt-2 text-center text-[9px] font-black uppercase leading-3 tracking-wide sm:text-[10px]">
                Creative
                <br />
                Studio
              </span>
            </motion.div>

            {/* Decorative side text */}
            <div className="absolute -left-10 bottom-[15%] hidden -rotate-90 text-[10px] font-bold uppercase tracking-[0.4em] text-[#FFC400] xl:block">
              Photography Is An Art
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 70 }
            }
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut",
            }}
          >
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-11 bg-[#FFC400]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFC400]">
                Get To Know Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black uppercase leading-[1.08] tracking-[-0.045em] text-white">
              BEHIND
              <br />
              <span className="text-[#FFC400]">
                THE LENS.
              </span>
            </h2>

            <p className="mt-7 max-w-[560px] text-lg font-medium leading-8 text-white/90">
              We don&apos;t just take photographs.
              We capture emotions, connections,
              and stories worth remembering.
            </p>

            <p className="mt-5 max-w-[560px] text-sm leading-8 text-[#9caab1] sm:text-base">
              Welcome to SamPhotography, where creativity
              meets passion. From beautiful wedding
              celebrations to intimate portraits and
              unforgettable events, our goal is to turn
              every special moment into a timeless memory.
            </p>

            {/* Highlights */}
            <div className="mt-9 space-y-5">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    animate={
                      isInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 25 }
                    }
                    transition={{
                      duration: 0.55,
                      delay: 0.35 + index * 0.12,
                    }}
                    className="group flex items-center gap-4 border-b border-white/10 pb-5 last:border-b-0"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#FFC400]/30 bg-[#FFC400]/5 text-[#FFC400] transition-all duration-300 group-hover:border-[#FFC400] group-hover:bg-[#FFC400] group-hover:text-[#001018]">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-white sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-gray-400 sm:text-sm">
                        {item.description}
                      </p>
                    </div>

                    <MoveUpRight
                      size={17}
                      className="text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FFC400]"
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* About button */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 25 }
              }
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-5 bg-[#FFC400] px-7 py-4 text-xs font-bold uppercase tracking-[0.13em] text-[#001018] transition-all duration-300 hover:bg-[#ffdb4d] hover:shadow-[0_0_35px_rgba(255,196,0,0.3)]"
              >
                Discover Our Story
                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
