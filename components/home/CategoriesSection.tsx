
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useInView,
} from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  ArrowRight,
} from "lucide-react";

type Category = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  slug: string;
  count: string;
  size: string;
};

const categories: Category[] = [
  {
    id: 1,
    title: "Wedding",
    subtitle: "Love & Forever",
    image: "/images/home/categories/wedding.png",
    slug: "wedding",
    count: "01",
    size: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: 2,
    title: "Portrait",
    subtitle: "Expressions & Emotions",
    image: "/images/home/categories/portrait.png",
    slug: "portrait",
    count: "02",
    size: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: 3,
    title: "Fashion",
    subtitle: "Style & Elegance",
    image: "/images/home/categories/fashion.png",
    slug: "fashion",
    count: "03",
    size: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: 4,
    title: "Nature",
    subtitle: "Beauty Of The Earth",
    image: "/images/home/categories/nature.png",
    slug: "nature",
    count: "04",
    size: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: 5,
    title: "Events",
    subtitle: "Unforgettable Moments",
    image: "/images/home/categories/events.png",
    slug: "events",
    count: "05",
    size: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: 6,
    title: "Product",
    subtitle: "Details That Matter",
    image: "/images/home/categories/product.png",
    slug: "product",
    count: "06",
    size: "lg:col-span-2 lg:row-span-1",
  },
];

export default function CategoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
  });

  return (
    <section
      id="categories"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#001018] py-20 sm:py-28 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#FFC400]/5 blur-[130px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#FFC400]/5 blur-[120px]" />

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
          className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div>
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-11 bg-[#FFC400]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFC400]">
                Explore Our Expertise
              </span>
            </div>

            <h2 className="text-4xl font-black uppercase leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              OUR
              <br />
              <span className="text-[#FFC400]">
                CATEGORIES.
              </span>
            </h2>

            <p className="mt-6 max-w-[550px] text-sm leading-8 text-gray-400 sm:text-base">
              From timeless weddings to artistic portraits,
              explore the different worlds we capture
              through our creative lens.
            </p>
          </div>

          {/* Explore button */}
          <Link
            href="/portfolio"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#FFC400] pb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#FFC400] transition-all duration-300 hover:gap-5"
          >
            Explore All Categories

            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </Link>
        </motion.div>

        {/* CATEGORY GRID */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-[240px] lg:grid-cols-4 lg:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }
                  : {
                      opacity: 0,
                      y: 60,
                      scale: 0.95,
                    }
              }
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className={`group relative min-h-[320px] overflow-hidden bg-[#10242b] sm:min-h-[350px] lg:min-h-0 ${category.size}`}
            >
              <Link
                href={`/portfolio?category=${category.slug}`}
                className="relative block h-full w-full overflow-hidden"
                aria-label={`Explore ${category.title} photography`}
              >
                {/* IMAGE */}
                <Image
                  src={category.image}
                  alt={`${category.title} photography`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001018]/95 via-[#001018]/25 to-[#001018]/10 transition-all duration-500 group-hover:from-[#001018]/90" />

                {/* Golden border */}
                <div className="pointer-events-none absolute inset-0 border border-white/10 transition-colors duration-500 group-hover:border-[#FFC400]" />

                {/* Corner decoration */}
                <div className="absolute left-5 top-5 h-8 w-8 border-l-2 border-t-2 border-[#FFC400] opacity-60 transition-all duration-500 group-hover:h-12 group-hover:w-12 group-hover:opacity-100" />

                {/* Number */}
                <span className="absolute right-6 top-6 text-xs font-semibold tracking-[0.2em] text-white/80">
                  {category.count}
                </span>

                {/* Center camera icon */}
                <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full border border-[#FFC400]/50 bg-[#001018]/60 text-[#FFC400] opacity-0 backdrop-blur-md transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                  <Camera size={24} strokeWidth={1.6} />
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-7">
                  <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FFC400]">
                    {category.subtitle}
                  </span>

                  <div className="flex items-end justify-between gap-3">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                      {category.title}
                    </h3>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#FFC400]/60 text-[#FFC400] transition-all duration-300 group-hover:bg-[#FFC400] group-hover:text-[#001018]">
                      <ArrowUpRight
                        size={21}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>

                  {/* Animated underline */}
                  <div className="mt-4 h-[2px] w-0 bg-[#FFC400] transition-all duration-700 group-hover:w-full" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-4">
            <Camera
              size={24}
              className="text-[#FFC400]"
            />

            <p className="max-w-[480px] text-sm leading-7 text-gray-400">
              Have a unique photography idea?
              Let&apos;s bring your vision to life.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-[#FFC400]"
          >
            Let&apos;s Talk

            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
