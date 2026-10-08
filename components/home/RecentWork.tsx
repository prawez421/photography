
"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Camera,
} from "lucide-react";

type Category =
  | "All"
  | "Wedding"
  | "Portrait"
  | "Fashion"
  | "Nature"
  | "Events";

type Work = {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  image: string;
  year: string;
};

const categories: Category[] = [
  "All",
  "Wedding",
  "Portrait",
  "Fashion",
  "Nature",
  "Events",
];

const works: Work[] = [
  {
    id: 1,
    title: "A Timeless Love",
    category: "Wedding",
    image: "/images/home/recent/wedding-1.png",
    year: "2026",
  },
  {
    id: 2,
    title: "The Beauty Within",
    category: "Portrait",
    image: "/images/home/recent/portrait-1.png",
    year: "2026",
  },
  {
    id: 3,
    title: "Modern Elegance",
    category: "Fashion",
    image: "/images/home/recent/fashion-1.png",
    year: "2026",
  },
  {
    id: 4,
    title: "Into The Wild",
    category: "Nature",
    image: "/images/home/recent/nature-1.png",
    year: "2026",
  },
  {
    id: 5,
    title: "Unforgettable Moments",
    category: "Events",
    image: "/images/home/recent/event-1.png",
    year: "2026",
  },
  {
    id: 6,
    title: "Forever Together",
    category: "Wedding",
    image: "/images/home/recent/wedding-2.png",
    year: "2026",
  },
  {
    id: 7,
    title: "Soulful Expressions",
    category: "Portrait",
    image: "/images/home/recent/portrait-2.png",
    year: "2026",
  },
];

export default function RecentWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter(
          (work) => work.category === activeCategory
        );

  const scrollSlider = (direction: "left" | "right") => {
    const slider = sliderRef.current;

    if (!slider) return;

    const card = slider.querySelector<HTMLElement>(
      "[data-work-card]"
    );

    const distance = card
      ? card.getBoundingClientRect().width + 24
      : 350;

    slider.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);

    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="recent-work"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#001018] py-20 sm:py-24 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-52 top-20 h-[450px] w-[450px] rounded-full bg-[#FFC400]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end"
        >
          <div>
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-11 bg-[#FFC400]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFC400]">
                Selected Portfolio
              </span>
            </div>

            <h2 className="text-4xl font-black uppercase leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              RECENT
              <br />
              <span className="text-[#FFC400]">
                WORK.
              </span>
            </h2>

            <p className="mt-6 max-w-[520px] text-sm leading-7 text-gray-400 sm:text-base">
              Every photograph holds a unique story.
              Explore a selection of moments captured
              through our lens.
            </p>
          </div>

          {/* VIEW ALL BUTTON */}
          <Link
            href="/portfolio"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#FFC400] pb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#FFC400] transition-all duration-300 hover:gap-5"
          >
            View All Projects
            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </Link>
        </motion.div>

        {/* CATEGORY FILTERS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 25 }
          }
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-10 flex flex-wrap items-center gap-3"
        >
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  handleCategoryChange(category)
                }
                className={`relative overflow-hidden border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  active
                    ? "border-[#FFC400] bg-[#FFC400] text-[#001018]"
                    : "border-white/15 bg-white/[0.03] text-gray-400 hover:border-[#FFC400]/60 hover:text-[#FFC400]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* SLIDER */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            <div
              ref={sliderRef}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {filteredWorks.map((work, index) => (
                <motion.div
                  key={work.id}
                  data-work-card
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  className="group relative w-[82vw] max-w-[380px] shrink-0 snap-start sm:w-[340px] lg:w-[380px]"
                >
                  {/* IMAGE CARD */}
                  <Link
                    href="/portfolio"
                    className="relative block aspect-[4/5] overflow-hidden bg-[#10242b]"
                  >
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      sizes="(max-width: 640px) 82vw, 380px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Image gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001018]/95 via-[#001018]/10 to-transparent" />

                    {/* Golden border on hover */}
                    <div className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-[#FFC400]/70" />

                    {/* Top number */}
                    <div className="absolute left-5 top-5 flex items-center gap-2">
                      <span className="text-xs font-bold tracking-wider text-white/90">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px w-7 bg-[#FFC400]" />
                    </div>

                    {/* Hover arrow */}
                    <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-[-10px] items-center justify-center rounded-full bg-[#FFC400] text-[#001018] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight size={21} />
                    </div>

                    {/* Bottom image content */}
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FFC400]">
                        {work.category} Photography
                      </span>

                      <h3 className="text-2xl font-bold text-white">
                        {work.title}
                      </h3>

                      <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-4">
                        <span className="text-xs text-gray-300">
                          SamPhotography
                        </span>
                        <span className="text-xs text-gray-400">
                          {work.year}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* BOTTOM CONTROLS */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-7">
          {/* LEFT TEXT */}
          <div className="flex items-center gap-3">
            <Camera
              size={19}
              className="text-[#FFC400]"
            />

            <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Capturing Stories Through The Lens
            </span>
          </div>

          {/* SLIDER ARROWS */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollSlider("left")}
              aria-label="Previous projects"
              className="flex h-12 w-12 items-center justify-center border border-white/20 text-white transition-all duration-300 hover:border-[#FFC400] hover:bg-[#FFC400] hover:text-[#001018]"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => scrollSlider("right")}
              aria-label="Next projects"
              className="flex h-12 w-12 items-center justify-center border border-[#FFC400] bg-[#FFC400] text-[#001018] transition-all duration-300 hover:bg-white"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
