
"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
  Camera,
} from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  category: string;
  rating: number;
  review: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Wedding Client",
    category: "Wedding Photography",
    rating: 5,
    initials: "PS",
    review:
      "SamPhotography captured every beautiful moment of our wedding. The pictures feel so natural, emotional, and timeless. We couldn't have asked for a better experience!",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Portrait Client",
    category: "Portrait Photography",
    rating: 5,
    initials: "RV",
    review:
      "The creativity and attention to detail were incredible. Every portrait looked professional and cinematic. The entire photoshoot was comfortable and enjoyable.",
  },
  {
    id: 3,
    name: "Ananya Singh",
    role: "Fashion Model",
    category: "Fashion Photography",
    rating: 5,
    initials: "AS",
    review:
      "An amazing photography experience! The lighting, styling, and composition were perfect. My portfolio turned out even better than I imagined.",
  },
  {
    id: 4,
    name: "Aman Gupta",
    role: "Event Client",
    category: "Event Photography",
    rating: 5,
    initials: "AG",
    review:
      "Our celebration was beautifully documented. From candid moments to group photographs, every image tells a wonderful story. Highly recommended!",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (paused || !isInView) return;

    const interval = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [paused, isInView]);

  const active = testimonials[activeIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#FFC400] py-20 text-[#001018] sm:py-28 lg:py-32"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-28 -top-28 h-[450px] w-[450px] rounded-full border-[65px] border-[#001018]/5" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full border-[55px] border-[#001018]/5" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center lg:mb-16"
        >
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-[2px] w-10 bg-[#001018]" />
            <span className="text-xs font-bold uppercase tracking-[0.3em]">
              Client Experiences
            </span>
            <span className="h-[2px] w-10 bg-[#001018]" />
          </div>

          <h2 className="text-4xl font-black uppercase leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            WHAT OUR
            <br />
            CLIENTS SAY.
          </h2>

          <p className="mx-auto mt-6 max-w-[570px] text-sm leading-7 text-[#001018]/75 sm:text-base">
            Beautiful photographs are important, but the memories
            and experiences behind them matter even more.
          </p>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : {}
          }
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setPaused(false);
            }
          }}
          className="relative mx-auto max-w-[960px] overflow-hidden border border-[#001018]/10 bg-[#001018] px-6 py-10 text-white shadow-2xl sm:px-12 sm:py-14 lg:px-20 lg:py-16"
        >
          {/* Quote decoration */}
          <Quote
            size={90}
            strokeWidth={1}
            className="pointer-events-none absolute right-7 top-5 text-[#FFC400]/10 sm:right-12"
          />

          <div className="relative z-10 min-h-[340px] sm:min-h-[290px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
              >
                {/* Rating */}
                <div className="mb-7 flex items-center gap-1.5">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={19}
                      className="fill-[#FFC400] text-[#FFC400]"
                    />
                  ))}
                </div>

                {/* Review */}
                <blockquote className="max-w-[760px] text-xl font-medium leading-[1.65] tracking-tight text-white sm:text-2xl lg:text-[28px]">
                  &ldquo;{active.review}&rdquo;
                </blockquote>

                {/* Client */}
                <div className="mt-9 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#FFC400]/50 bg-[#FFC400]/15 text-base font-bold text-[#FFC400]">
                    {active.initials}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white">
                      {active.name}
                    </h3>
                    <p className="mt-1 text-xs text-[#FFC400]">
                      {active.role}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-gray-500">
                  {active.category}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom controls */}
          <div className="relative z-10 mt-9 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-7">
            <div className="flex items-center gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-9 bg-[#FFC400]"
                      : "w-2 bg-white/25 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={prevSlide}
                className="flex h-12 w-12 items-center justify-center border border-white/20 text-white transition-all duration-300 hover:border-[#FFC400] hover:text-[#FFC400]"
              >
                <ArrowLeft size={20} />
              </button>

              <button
                type="button"
                aria-label="Next testimonial"
                onClick={nextSlide}
                className="flex h-12 w-12 items-center justify-center bg-[#FFC400] text-[#001018] transition-all duration-300 hover:bg-white"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <Camera size={19} />
          <span className="text-xs font-bold uppercase tracking-[0.18em]">
            Every Frame, A Beautiful Memory
          </span>
        </motion.div>
      </div>
    </section>
  );
}
