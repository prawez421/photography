
"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  type Variants,
} from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Camera,
  Heart,
  UserRound,
  Shirt,
  CalendarDays,
  Mountain,
  Package,
  Sparkles,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Wedding Photography",
    description:
      "Beautifully capturing your love story, emotions, and once-in-a-lifetime wedding moments.",
    icon: Heart,
    features: [
      "Pre-Wedding Shoots",
      "Wedding Coverage",
      "Cinematic Portraits",
    ],
    slug: "wedding",
  },
  {
    id: "02",
    title: "Portrait Photography",
    description:
      "Express your personality through artistic portraits, professional headshots, and creative sessions.",
    icon: UserRound,
    features: [
      "Personal Portraits",
      "Studio Photography",
      "Professional Headshots",
    ],
    slug: "portrait",
  },
  {
    id: "03",
    title: "Fashion Photography",
    description:
      "Editorial and fashion photography that brings style, creativity, and elegance into every frame.",
    icon: Shirt,
    features: [
      "Fashion Editorials",
      "Model Portfolios",
      "Brand Campaigns",
    ],
    slug: "fashion",
  },
  {
    id: "04",
    title: "Event Photography",
    description:
      "From celebrations to corporate events, we preserve the atmosphere and unforgettable moments.",
    icon: CalendarDays,
    features: [
      "Birthday Parties",
      "Corporate Events",
      "Special Celebrations",
    ],
    slug: "events",
  },
  {
    id: "05",
    title: "Nature Photography",
    description:
      "Discover the beauty of landscapes, natural light, and breathtaking outdoor environments.",
    icon: Mountain,
    features: [
      "Landscape Shoots",
      "Outdoor Photography",
      "Travel Stories",
    ],
    slug: "nature",
  },
  {
    id: "06",
    title: "Product Photography",
    description:
      "Premium product photography that highlights every detail and helps your brand stand out.",
    icon: Package,
    features: [
      "E-Commerce Products",
      "Creative Product Shoots",
      "Brand Photography",
    ],
    slug: "product",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
  });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#061820] py-20 sm:py-28 lg:py-32"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#FFC400]/5 blur-[130px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#FFC400]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 45 }
          }
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-11 bg-[#FFC400]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFC400]">
                What We Offer
              </span>
            </div>

            <h2 className="text-4xl font-black uppercase leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              OUR
              <br />
              <span className="text-[#FFC400]">
                SERVICES.
              </span>
            </h2>

            <p className="mt-6 max-w-[550px] text-sm leading-8 text-gray-400 sm:text-base">
              Every story deserves to be captured beautifully.
              Explore our photography services designed to
              preserve your most meaningful moments.
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#FFC400] pb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#FFC400] transition-all duration-300 hover:gap-5"
          >
            Explore All Services

            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </Link>
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 lg:gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-[#0A2029] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#FFC400]/60 hover:bg-[#0D2630] sm:p-9"
              >
                {/* Golden hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#FFC400]/0 blur-[70px] transition-all duration-500 group-hover:bg-[#FFC400]/10" />

                {/* Corner decoration */}
                <div className="absolute right-0 top-0 h-16 w-16 border-r-2 border-t-2 border-[#FFC400]/0 transition-all duration-500 group-hover:border-[#FFC400]" />

                {/* TOP ROW */}
                <div className="relative mb-9 flex items-start justify-between">
                  <motion.div
                    whileHover={{
                      rotate: -8,
                      scale: 1.08,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                    }}
                    className="flex h-16 w-16 items-center justify-center border border-[#FFC400]/30 bg-[#FFC400]/10 text-[#FFC400] transition-all duration-300 group-hover:border-[#FFC400] group-hover:bg-[#FFC400] group-hover:text-[#001018]"
                  >
                    <Icon size={29} strokeWidth={1.5} />
                  </motion.div>

                  <span className="text-5xl font-black tracking-tight text-white/[0.06] transition-colors duration-500 group-hover:text-[#FFC400]/20">
                    {service.id}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="relative flex flex-1 flex-col">
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#FFC400] sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {service.description}
                  </p>

                  {/* FEATURES */}
                  <div className="mt-7 space-y-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFC400]" />

                        <span className="text-xs text-gray-300 sm:text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* BOTTOM LINK */}
                  <div className="mt-auto pt-9">
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex items-center justify-between border-t border-white/10 pt-6 transition-colors duration-300 group-hover:border-[#FFC400]/40"
                    >
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors duration-300 group-hover:text-[#FFC400]">
                        View Details
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-all duration-300 group-hover:border-[#FFC400] group-hover:bg-[#FFC400] group-hover:text-[#001018]">
                        <ArrowUpRight
                          size={19}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* BOTTOM CTA */}
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
          className="relative mt-14 overflow-hidden border border-[#FFC400]/25 bg-[#0A2029] p-7 sm:p-10 lg:mt-20 lg:p-12"
        >
          {/* Background shape */}
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border-[45px] border-[#FFC400]/5" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="flex items-start gap-5">
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center border border-[#FFC400]/40 text-[#FFC400] sm:flex">
                <Camera size={26} strokeWidth={1.6} />
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2 text-[#FFC400]">
                  <Sparkles size={16} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                    Your Vision, Our Creativity
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
                  Have Something
                  <span className="text-[#FFC400]">
                    {" "}Special In Mind?
                  </span>
                </h3>

                <p className="mt-3 max-w-[560px] text-sm leading-7 text-gray-400">
                  Let&apos;s create something extraordinary
                  together. Tell us your idea and we&apos;ll
                  help bring it to life.
                </p>
              </div>
            </div>

            <Link
              href="/booking"
              className="group inline-flex shrink-0 items-center gap-4 bg-[#FFC400] px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#001018] transition-all duration-300 hover:bg-[#ffda45] hover:shadow-[0_0_35px_rgba(255,196,0,0.25)]"
            >
              Book Your Session

              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
