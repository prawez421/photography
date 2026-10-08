
"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Camera,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const missionCards = [
  {
    number: "01",
    title: "Our Mission",
    subtitle: "Capturing What Matters",
    description:
      "To capture genuine emotions, meaningful connections, and unforgettable moments through creative photography that transforms memories into timeless stories.",
    icon: Target,
    points: [
      "Authentic storytelling",
      "Creative photography",
      "Meaningful memories",
    ],
  },
  {
    number: "02",
    title: "Our Vision",
    subtitle: "Beyond The Ordinary",
    description:
      "To create inspiring photography that celebrates individuality, beauty, and human connection while making every photoshoot a memorable experience.",
    icon: Eye,
    points: [
      "Artistic excellence",
      "Innovative creativity",
      "Timeless visual stories",
    ],
  },
  {
    number: "03",
    title: "Our Values",
    subtitle: "Passion In Every Frame",
    description:
      "We believe in creativity, authenticity, trust, and attention to detail. Every client deserves a personalized experience and photographs they will treasure.",
    icon: Heart,
    points: [
      "Creativity & passion",
      "Trust & professionalism",
      "Quality & dedication",
    ],
  },
];

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 55,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function OurMission() {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  return (
    <section
      id="our-mission"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#061820] py-20 sm:py-28 lg:py-32"
    >
      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border-[65px] border-[#FFC400]/5" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full border-[60px] border-[#FFC400]/5" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFC400]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.8 }}
          className="mx-auto mb-14 max-w-[750px] text-center lg:mb-16"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-[2px] w-10 bg-[#FFC400]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFC400]">
              What Drives Us
            </span>

            <span className="h-[2px] w-10 bg-[#FFC400]" />
          </div>

          <h2 className="text-4xl font-black uppercase leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            OUR PURPOSE
            <br />
            <span className="text-[#FFC400]">
              & PASSION.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[610px] text-sm leading-8 text-gray-400 sm:text-base">
            Behind every photograph is a purpose.
            Discover the mission, vision, and values
            that inspire our creative journey.
          </p>
        </motion.div>

        {/* MISSION CARDS */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {missionCards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.number}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-[#0A2029] p-7 transition-colors duration-500 hover:border-[#FFC400]/60 sm:p-9"
              >
                {/* CARD GLOW */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#FFC400]/0 blur-[70px] transition-all duration-500 group-hover:bg-[#FFC400]/10" />

                {/* TOP CORNER */}
                <div className="absolute right-0 top-0 h-16 w-16 border-r-2 border-t-2 border-transparent transition-colors duration-500 group-hover:border-[#FFC400]" />

                {/* ICON & NUMBER */}
                <div className="relative mb-9 flex items-start justify-between">
                  <motion.div
                    whileHover={{
                      rotate: -8,
                      scale: 1.1,
                    }}
                    className="flex h-16 w-16 items-center justify-center border border-[#FFC400]/40 bg-[#FFC400]/10 text-[#FFC400] transition-all duration-300 group-hover:bg-[#FFC400] group-hover:text-[#001018]"
                  >
                    <Icon size={29} strokeWidth={1.6} />
                  </motion.div>

                  <span className="text-5xl font-black text-white/[0.06] transition-colors duration-500 group-hover:text-[#FFC400]/20">
                    {card.number}
                  </span>
                </div>

                {/* CARD CONTENT */}
                <div className="relative flex flex-1 flex-col">
                  <span className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFC400]">
                    {card.subtitle}
                  </span>

                  <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#FFC400]">
                    {card.title}
                  </h3>

                  <p className="mt-5 text-sm leading-8 text-gray-400">
                    {card.description}
                  </p>

                  {/* POINTS */}
                  <div className="mt-8 space-y-4 border-t border-white/10 pt-7">
                    {card.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2
                          size={17}
                          className="shrink-0 text-[#FFC400]"
                        />

                        <span className="text-sm text-gray-300">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* BOTTOM DECORATION */}
                  <div className="mt-auto pt-9">
                    <div className="h-[2px] w-12 bg-[#FFC400]/40 transition-all duration-500 group-hover:w-full group-hover:bg-[#FFC400]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* BOTTOM MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 40 }
          }
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="relative mt-16 overflow-hidden border border-[#FFC400]/20 bg-[#0A2029] p-8 sm:p-10 lg:mt-20 lg:p-12"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border-[40px] border-[#FFC400]/5" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="flex items-start gap-5">
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center border border-[#FFC400]/40 text-[#FFC400] sm:flex">
                <Camera size={26} strokeWidth={1.6} />
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2 text-[#FFC400]">
                  <Sparkles size={16} />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                    Our Creative Promise
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
                  EVERY MOMENT
                  <span className="text-[#FFC400]">
                    {" "}MATTERS.
                  </span>
                </h3>

                <p className="mt-3 max-w-[560px] text-sm leading-7 text-gray-400">
                  We approach every project with passion,
                  creativity, and dedication to capturing
                  your story beautifully.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 bg-[#FFC400] px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#001018] transition-all duration-300 hover:bg-[#ffda45]"
            >
              Work With Us

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
