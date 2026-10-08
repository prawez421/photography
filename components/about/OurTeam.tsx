
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowUpRight, Camera } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "MUSKAN KUMARI",
    role: "Lead Photographer",
    specialty: "Wedding & Portrait",
    image: "/images/about/teams-1.png",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    id: 2,
    name: "MD PRAWEZ ANSARI",
    role: "Creative Photographer",
    specialty: "Fashion & Editorial",
    image: "/images/about/team-2.png",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    id: 3,
    name: "SAMEER ANSARI",
    role: "Event Photographer",
    specialty: "Events & Lifestyle",
    image: "/images/about/teamo-3.png",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    id: 4,
    name: "KHURSHID ANSARI",
    role: "Visual Artist",
    specialty: "Product & Creative",
    image: "/images/about/team-4.png",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 55,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function OurTeam() {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.12,
  });

  return (
    <section
      id="our-team"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#001018] py-20 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#FFC400]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col justify-between gap-7 lg:mb-16 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-11 bg-[#FFC400]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFC400]">
                Meet The Creatives
              </span>
            </div>

            <h2 className="text-4xl font-black uppercase leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              THE PEOPLE
              <br />
              <span className="text-[#FFC400]">
                BEHIND THE LENS.
              </span>
            </h2>

            <p className="mt-6 max-w-[580px] text-sm leading-8 text-gray-400 sm:text-base">
              A creative team dedicated to capturing meaningful
              moments through photography, storytelling,
              and artistic vision.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#FFC400] pb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#FFC400]"
          >
            Work With Our Team
            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

        {/* Team Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className="group relative overflow-hidden border border-white/10 bg-[#0A2029] transition-colors duration-500 hover:border-[#FFC400]/60"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#10252D]">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#001018]/90 via-[#001018]/10 to-transparent" />

                {/* Social Icons */}
                <div className="absolute right-4 top-4 flex translate-x-14 flex-col gap-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Instagram`}
                    className="flex h-10 w-10 items-center justify-center bg-[#FFC400] text-[#001018] transition-colors hover:bg-white"
                  >
                    <FaInstagram size={18} />
                  </a>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="flex h-10 w-10 items-center justify-center bg-[#FFC400] text-[#001018] transition-colors hover:bg-white"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                </div>

                {/* Image Bottom Label */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2">
                  <Camera size={16} className="text-[#FFC400]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                    {member.specialty}
                  </span>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#FFC400]">
                  {member.name}
                </h3>

                <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-[#FFC400]">
                  {member.role}
                </p>

                <div className="mt-6 h-[2px] w-10 bg-[#FFC400]/40 transition-all duration-500 group-hover:w-full group-hover:bg-[#FFC400]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
