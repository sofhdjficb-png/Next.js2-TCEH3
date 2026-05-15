"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const navLinks = [
  { href: "#about",    label: "О нас" },
  { href: "#services", label: "Услуги" },
  { href: "#pricing",  label: "Цены" },
  { href: "#contact",  label: "Контакты" },
];

export function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-5xl rounded-2xl transition-all duration-500 border ${
        scrolled || menuOpen
          ? "bg-obsidian/80 backdrop-blur-xl border-white/[0.08] shadow-2xl py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="flex items-center justify-between px-6">
        <Link href="/" className="text-2xl font-black tracking-tighter">
          ЦЕХ<span className="text-titanium">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-platinum/70">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-titanium transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex bg-titanium text-obsidian px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide hover:shadow-[0_0_20px_rgba(212,197,176,0.3)] transition-all"
          >
            ЗАПИСАТЬСЯ
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-[2px] bg-white origin-center"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.15 }}
              className="block w-6 h-[2px] bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-[2px] bg-white origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-white/[0.06] mt-3"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="px-4 py-3 rounded-xl text-platinum/80 hover:text-titanium hover:bg-white/[0.04] transition-colors font-medium"
                >
                  {label}
                </Link>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 bg-titanium text-obsidian px-5 py-3 rounded-xl text-sm font-bold tracking-wide text-center"
              >
                ЗАПИСАТЬСЯ
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}