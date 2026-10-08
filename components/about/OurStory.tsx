
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  Aperture,
  Sparkles,
  Check,
} from "lucide-react";

const highlights = [
  "Creative & Cinematic Photography",
  "Natural & Timeless Storytelling",
  "Attention to Every Detail",
  "Personalized Photography Experience",
];

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#001018] py-20 sm:py-28 lg:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#FFC400]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -70 }
            }
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[580px] lg:mx-0"
          >
            {/* Golden border decoration */}
            <div className="absolute -bottom-5 -left-5 h-[65%] w-[65%] border-b-2 border-l-2 border-[#FFC400] sm:-bottom-7 sm:-left-7" />

            <div className="absolute -right-4 -top-4 h-32 w-32 border-r-2 border-t-2 border-[#FFC400]/60" />

            {/* Main Image */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-[#0A2029]">
              <Image
                src="/images/about/our-story.jpeg"
                alt="Photographer capturing a beautiful moment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Image gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001018]/65 via-transparent to-transparent" />

              {/* Image Bottom Label */}
              <div className="absolute bottom-7 left-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center border border-[#FFC400]/60 bg-[#001018]/70 text-[#FFC400] backdrop-blur-sm">
                  <Camera size={22} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white">
                    SamPhotography
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#FFC400]">
                    Behind The Lens
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -right-2 top-10 flex h-28 w-28 flex-col items-center justify-center border-4 border-[#001018] bg-[#FFC400] text-center text-[#001018] shadow-xl sm:-right-7 sm:h-36 sm:w-36"
            >
              <Aperture size={28} strokeWidth={1.6} />

              <span className="mt-2 text-[10px] font-black uppercase tracking-[0.1em] sm:text-xs">
                Every Frame
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-wider">
                Tells A Story
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 70 }
            }
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {/* Section Label */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-11 bg-[#FFC400]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFC400]">
                Our Story
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-black uppercase leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              PASSION
              <br />
              BEHIND EVERY
              <br />
              <span className="text-[#FFC400]">
                FRAME.
              </span>
            </h2>

            {/* Description */}
            <div className="mt-8 space-y-5 text-sm leading-8 text-gray-400 sm:text-base">
              <p>
                At SamPhotography, we believe photography
                is more than just taking pictures. It&apos;s
                about capturing genuine emotions, preserving
                beautiful memories, and telling stories
                that last forever.
              </p>

              <p>
                Our creative approach combines natural
                moments with cinematic artistry. Whether
                it&apos;s a wedding, portrait session,
                fashion shoot, or special event, we aim
                to make every photograph meaningful
                and unforgettable.
              </p>

              <p>
                Every project is an opportunity to create
                something unique, with attention to
                lighting, composition, and the little
                details that make your story special.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-[#FFC400]/10 text-[#FFC400]">
                    <Check size={15} strokeWidth={2.5} />
                  </span>

                  <span className="text-sm leading-6 text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Decorative Line */}
            <div className="mt-10 h-px w-full bg-gradient-to-r from-[#FFC400]/40 via-white/10 to-transparent" />

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-3 bg-[#FFC400] px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#001018] transition-all duration-300 hover:bg-[#ffda45] hover:shadow-[0_0_30px_rgba(255,196,0,0.2)]"
              >
                Explore Our Work

                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <div className="flex items-center gap-2 text-[#FFC400]">
                <Sparkles size={17} />

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                  Creating Timeless Memories
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
