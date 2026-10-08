
"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Camera,
} from "lucide-react";

export default function Newsletter() {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const cleanEmail = email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setStatus("idle");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: cleanEmail }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Subscription failed. Please try again."
        );
      }

      setStatus("success");
      setMessage(
        data.message || "Thank you for subscribing!"
      );
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="newsletter"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#001018] py-20 sm:py-28 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-[#FFC400]/5 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-[#FFC400]/5 blur-[120px]" />

      {/* Animated decorative circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute -right-28 top-10 h-[350px] w-[350px] rounded-full border border-dashed border-[#FFC400]/10 lg:right-10"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -60 }
            }
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-11 bg-[#FFC400]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFC400]">
                Stay Inspired
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-black uppercase leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              LET&apos;S STAY
              <br />
              <span className="text-[#FFC400]">
                CONNECTED.
              </span>
            </h2>

            <p className="mt-7 max-w-[530px] text-sm leading-8 text-gray-400 sm:text-base">
              Subscribe to our newsletter for photography
              inspiration, behind-the-scenes stories, new
              projects, and exclusive updates from
              SamPhotography.
            </p>

            {/* Highlights */}
            <div className="mt-9 flex flex-wrap gap-5">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Sparkles
                  size={19}
                  className="text-[#FFC400]"
                />
                Creative Inspiration
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Camera
                  size={19}
                  className="text-[#FFC400]"
                />
                Latest Projects
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.96 }}
            animate={
              isInView
                ? { opacity: 1, x: 0, scale: 1 }
                : { opacity: 0, x: 60, scale: 0.96 }
            }
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="group relative overflow-hidden border border-[#FFC400]/25 bg-[#0A2029] p-7 transition-colors duration-500 hover:border-[#FFC400]/60 sm:p-10 lg:p-12"
          >
            {/* Card corner decoration */}
            <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 border-r-2 border-t-2 border-[#FFC400]/60" />

            {/* Icon */}
            <motion.div
              whileHover={{
                rotate: -10,
                scale: 1.08,
              }}
              className="mb-8 flex h-16 w-16 items-center justify-center border border-[#FFC400]/40 bg-[#FFC400]/10 text-[#FFC400]"
            >
              <Mail size={29} strokeWidth={1.5} />
            </motion.div>

            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Join Our Newsletter
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Be the first to discover our latest work,
              photography tips, and special announcements.
            </p>

            {/* FORM */}
            <form
              onSubmit={handleSubscribe}
              className="mt-8 space-y-4"
            >
              <label
                htmlFor="newsletter-email"
                className="block text-xs font-semibold uppercase tracking-[0.15em] text-gray-300"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#FFC400]"
                />

                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "idle") {
                      setStatus("idle");
                      setMessage("");
                    }
                  }}
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                  disabled={loading}
                  className="h-14 w-full border border-white/15 bg-[#001018] pl-12 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#FFC400] focus:ring-1 focus:ring-[#FFC400]/30 disabled:opacity-60"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={
                  loading ? undefined : { scale: 1.02 }
                }
                whileTap={
                  loading ? undefined : { scale: 0.98 }
                }
                className="group/btn flex h-14 w-full items-center justify-center gap-3 bg-[#FFC400] px-6 text-xs font-bold uppercase tracking-[0.15em] text-[#001018] transition-all duration-300 hover:bg-[#ffda45] hover:shadow-[0_0_30px_rgba(255,196,0,0.2)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#001018]/30 border-t-[#001018]" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe Now
                    <Send
                      size={18}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                    />
                  </>
                )}
              </motion.button>

              {/* STATUS MESSAGE */}
              {message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-2 text-sm ${
                    status === "success"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0"
                    />
                  ) : (
                    <AlertCircle
                      size={18}
                      className="mt-0.5 shrink-0"
                    />
                  )}

                  <span>{message}</span>
                </div>
              )}
            </form>

            {/* Bottom note */}
            <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6">
              <ArrowUpRight
                size={18}
                className="shrink-0 text-[#FFC400]"
              />

              <p className="text-xs leading-6 text-gray-500">
                No spam. Just photography inspiration
                and occasional updates.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
