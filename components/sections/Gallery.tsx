"use client";

import { motion } from "motion/react";
import { SITE_DATA } from "@/lib/constants";
import { bentoItem, staggerContainer } from "@/lib/animations";

export function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.h2 variants={bentoItem} className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
            Наши <span className="text-titanium">Работы</span>
          </motion.h2>
          <motion.p variants={bentoItem} className="text-muted">Результаты, которые говорят сами за себя.</motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 md:auto-rows-[200px] gap-4"
        >
          {SITE_DATA.gallery.map((item, i) => (
            <motion.div
              key={i}
              variants={bentoItem}
              className={`rounded-3xl overflow-hidden bg-white/[0.03] border border-white/[0.06] group relative flex items-center justify-center cursor-pointer${
                i === 0 ? " col-span-2 row-span-2 min-h-[300px] md:min-h-0" : " min-h-[160px] md:min-h-0"
              }`}
            >
              {/* Gold hover overlay */}
              <div className="absolute inset-0 bg-titanium/0 group-hover:bg-titanium/10 transition-colors duration-500 z-10" />

              {/* Caption on hover */}
              <p className="absolute bottom-4 left-4 right-4 text-sm text-white/0 group-hover:text-white/90 transition-colors duration-300 z-20 font-medium">
                {item.alt}
              </p>

              {/* PRE-SALE placeholder */}
              <div className="text-white/20 text-xs text-center px-6">
                <svg className="w-10 h-10 mx-auto mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{item.alt}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
