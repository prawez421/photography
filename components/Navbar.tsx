
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  Menu,
  X,
} from "lucide-react";

import { FaInstagram, FaFacebookF } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Gallery", href: "/gallery" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () =>
      window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-[#001018]/95 backdrop-blur-xl border-b border-white/10 shadow-xl"
            : "bg-[#001018]/40 backdrop-blur-sm"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12 transition-all duration-500 ${
            scrolled ? "h-[72px]" : "h-[88px]"
          }`}
        >
          {/* LOGO */}
          <Link
            href="/"
            className="relative z-50 flex items-center gap-3 group"
          >
            <motion.div
              whileHover={{ rotate: -12, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FFC400]/50 bg-[#FFC400]/10"
            >
              <Camera
                size={22}
                strokeWidth={1.8}
                className="text-[#FFC400]"
              />
            </motion.div>

            <div className="flex flex-col leading-none">
              <span className="text-[19px] sm:text-[22px] font-bold tracking-tight text-white">
                Sam
                <span className="text-[#FFC400]">
                  Photography
                </span>
              </span>

              <span className="mt-1 text-[9px] tracking-[0.3em] uppercase text-gray-400">
                Capture Every Moment
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-3 text-[13px] font-medium tracking-wide group"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      active
                        ? "text-[#FFC400]"
                        : "text-gray-200 group-hover:text-[#FFC400]"
                    }`}
                  >
                    {link.name}
                  </span>

                  <span
                    className={`absolute bottom-1 left-0 h-[2px] bg-[#FFC400] transition-all duration-300 ${
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex items-center">
            <Link href="/booking">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="group relative flex items-center gap-2 overflow-hidden rounded-sm bg-[#FFC400] px-6 py-3.5 text-[13px] font-bold text-[#001018] transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(255,196,0,0.35)]"
              >
                <span className="relative z-10">
                  BOOK A SHOOT
                </span>

                <ArrowUpRight
                  size={17}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.div>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="relative z-50 flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400] lg:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex h-[100dvh] flex-col overflow-y-auto bg-[#001018] px-7 pb-10 pt-28 lg:hidden"
          >
            {/* Decorative background */}
            <div className="pointer-events-none absolute right-[-100px] top-[20%] h-[280px] w-[280px] rounded-full bg-[#FFC400]/5 blur-[100px]" />

            <nav className="relative flex flex-col gap-1">
              {navLinks.map((link, index) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href ||
                      pathname.startsWith(link.href + "/");

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.07,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`group flex items-center justify-between border-b border-white/10 py-4 text-2xl font-semibold transition-colors ${
                        active
                          ? "text-[#FFC400]"
                          : "text-white hover:text-[#FFC400]"
                      }`}
                    >
                      <span>{link.name}</span>

                      <ArrowUpRight
                        size={20}
                        className="text-gray-500 transition-all group-hover:rotate-45 group-hover:text-[#FFC400]"
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* MOBILE BOOK BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-9"
            >
              <Link
                href="/booking"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center gap-3 bg-[#FFC400] px-6 py-4 font-bold text-[#001018] transition-colors hover:bg-[#e6b000]"
              >
                BOOK A PHOTOSHOOT
                <ArrowUpRight size={19} />
              </Link>
            </motion.div>

            {/* MOBILE FOOTER */}
            <div className="mt-auto pt-12">
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-gray-500">
                Follow Our Journey
              </p>

              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center border border-white/20 text-white">
                  <FaInstagram size={19} />
                </span>

                <span className="flex h-11 w-11 items-center justify-center border border-white/20 text-white">
                  <FaFacebookF size={19} />
                </span>
              </div>

              <p className="mt-8 text-xs text-gray-600">
                © {new Date().getFullYear()} SamPhotography.
                All rights reserved.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
