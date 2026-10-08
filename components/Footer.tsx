
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowUp,
  Camera,
  Mail,
  MapPin,
  Phone,
  Heart,
  Aperture,
} from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Gallery", href: "/gallery" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  { name: "Wedding Photography", href: "/services/wedding" },
  { name: "Portrait Photography", href: "/services/portrait" },
  { name: "Fashion Photography", href: "/services/fashion" },
  { name: "Event Photography", href: "/services/events" },
  { name: "Nature Photography", href: "/services/nature" },
  { name: "Product Photography", href: "/services/product" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaFacebookF,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: FaYoutube,
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/",
    icon: FaPinterestP,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative isolate overflow-hidden bg-[#001018] text-white">
      {/* TOP GOLDEN BORDER */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#FFC400] to-transparent" />

      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#FFC400]/5 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#FFC400]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 pt-20 pb-10 sm:px-8 lg:px-16 lg:pt-24">
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* COLUMN 1: BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#FFC400]/50 bg-[#FFC400]/10 text-[#FFC400] transition-all duration-300 group-hover:bg-[#FFC400] group-hover:text-[#001018]">
                <Camera size={23} strokeWidth={1.7} />
              </div>

              <div>
                <h2 className="text-xl font-black tracking-tight">
                  Sam
                  <span className="text-[#FFC400]">
                    Photography
                  </span>
                </h2>

                <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-gray-400">
                  Capture Every Moment
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-[300px] text-sm leading-8 text-gray-400">
              Capturing beautiful memories through creative,
              cinematic photography. Every frame tells a
              story worth remembering.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{ y: -5 }}
                    className="flex h-11 w-11 items-center justify-center border border-white/15 bg-white/[0.03] text-gray-300 transition-all duration-300 hover:border-[#FFC400] hover:bg-[#FFC400] hover:text-[#001018]"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* COLUMN 2: QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <h3 className="text-base font-bold uppercase tracking-[0.1em]">
              Quick Links
            </h3>

            <span className="mt-4 block h-[2px] w-12 bg-[#FFC400]" />

            <ul className="mt-7 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-3 text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFC400]"
                  >
                    <ArrowUpRight
                      size={15}
                      className="text-[#FFC400] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 3: SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <h3 className="text-base font-bold uppercase tracking-[0.1em]">
              Our Services
            </h3>

            <span className="mt-4 block h-[2px] w-12 bg-[#FFC400]" />

            <ul className="mt-7 space-y-4">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-3 text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFC400]"
                  >
                    <ArrowUpRight
                      size={15}
                      className="text-[#FFC400] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 4: CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.3 }}
          >
            <h3 className="text-base font-bold uppercase tracking-[0.1em]">
              Get In Touch
            </h3>

            <span className="mt-4 block h-[2px] w-12 bg-[#FFC400]" />

            <p className="mt-7 text-sm leading-7 text-gray-400">
              Have a photography project or special
              celebration in mind? We&apos;d love to hear
              from you.
            </p>

            <div className="mt-7 space-y-5">
              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-[#FFC400]"
                />

                <span className="text-sm leading-6 text-gray-400">
                  India
                </span>
              </div>

              {/* Email */}
              <a
                href="mailto:hello@samphotography.com"
                className="group flex items-start gap-3"
              >
                <Mail
                  size={19}
                  className="mt-0.5 shrink-0 text-[#FFC400]"
                />

                <span className="break-all text-sm text-gray-400 transition-colors group-hover:text-[#FFC400]">
                  hello@samphotography.com
                </span>
              </a>

              {/* Contact page */}
              <Link
                href="/contact"
                className="group flex items-center gap-3"
              >
                <Phone
                  size={19}
                  className="shrink-0 text-[#FFC400]"
                />

                <span className="text-sm text-gray-400 transition-colors group-hover:text-[#FFC400]">
                  Contact for Booking
                </span>
              </Link>
            </div>

            {/* BOOKING BUTTON */}
            <Link
              href="/booking"
              className="group mt-8 inline-flex items-center gap-3 bg-[#FFC400] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-[#001018] transition-all duration-300 hover:bg-[#ffda45] hover:shadow-[0_0_25px_rgba(255,196,0,0.25)]"
            >
              Book a Photoshoot

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* BOTTOM FOOTER */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <p className="text-xs leading-6 text-gray-500">
  © 2026{" "}
  <span className="font-semibold text-[#FFC400]">
    SamPhotography
  </span>
  . All Rights Reserved.
</p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-xs text-gray-500 transition-colors hover:text-[#FFC400]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-gray-500 transition-colors hover:text-[#FFC400]"
            >
              Terms & Conditions
            </Link>
          </div>

          {/* BACK TO TOP */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-[#FFC400]"
          >
            Back To Top

            <span className="flex h-10 w-10 items-center justify-center border border-[#FFC400]/50 transition-all duration-300 group-hover:bg-[#FFC400] group-hover:text-[#001018]">
              <ArrowUp
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </span>
          </button>
        </div>

        {/* FOOTER DECORATIVE BRAND TEXT */}
        <div className="mt-12 overflow-hidden border-t border-white/5 pt-8">
          <div className="flex items-center justify-center gap-3 text-[#FFC400]/20">
            <Aperture size={22} />

            <span className="text-center text-[clamp(1.7rem,6vw,6rem)] font-black uppercase leading-none tracking-[-0.06em]">
              SAM PHOTOGRAPHY
            </span>

            <Heart size={22} />
          </div>
        </div>
      </div>
    </footer>
  );
}
