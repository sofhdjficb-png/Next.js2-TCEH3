"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">
      {/* Cinematic Background Glow — inline style to avoid Tailwind v4 backgroundImage config dependency */}
      <div className="absolute inset-0 opacity-50" style={{ background: 'radial-gradient(circle at center, rgba(212, 197, 176, 0.15) 0%, transparent 70%)' }} />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-titanium/20 bg-titanium/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-titanium animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-titanium font-medium">Премиум Детейлинг</span>
          </div>

          <h1 
            className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-none mb-8"
            style={{ fontVariationSettings: "'wght' 900" }}
          >
            <span className="block whitespace-nowrap">ЭСТЕТИКА</span>
            <span className="block whitespace-nowrap">В КАЖДОЙ</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-titanium to-white whitespace-nowrap">ДЕТАЛИ</span>
          </h1>

          <p className="text-lg md:text-xl text-platinum/70 leading-relaxed max-w-lg mb-12 font-light">
            Возвращаем автомобилю первозданный вид и защищаем его на годы. Профессиональный подход, эксклюзивные материалы.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="bg-titanium text-obsidian px-8 py-4 rounded-xl font-bold tracking-widest uppercase hover:shadow-[0_0_30px_rgba(212,197,176,0.25)] transition-all hover:scale-[1.02]"
            >
              Записаться
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 rounded-xl font-semibold tracking-widest uppercase border border-surface-border bg-surface hover:bg-white/5 transition-all text-platinum"
            >
              Смотреть услуги
            </a>
          </div>
        </motion.div>

        {/* Abstract visual representation instead of generic image for the "premium" vibe */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative hidden lg:block h-[600px]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-obsidian via-transparent to-titanium/10 rounded-[3rem] border border-surface-border overflow-hidden">
            {/* Here would be a high-res abstract 3D render or luxury car fragment */}
            <div className="w-full h-full bg-obsidian flex items-center justify-center text-surface-border">
              <span className="font-geologica tracking-widest text-sm uppercase">[ Cinematic Asset Placeholder ]</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}