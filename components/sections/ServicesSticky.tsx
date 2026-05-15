"use client";

import { motion } from "motion/react";
import { SITE_DATA } from "@/lib/constants";

export function ServicesSticky() {
  return (
    <section id="services" className="relative py-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
      {/* Sticky Header Left */}
      <div className="lg:sticky lg:top-32 lg:w-1/3 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-6 leading-none">
            <span className="block">Наши</span>
            <span className="block text-titanium">Услуги</span>
          </h2>
          <p className="text-platinum/70 leading-relaxed text-lg mb-8">
            Полный спектр услуг по уходу за автомобилем. От деликатной мойки до сложной реставрации лакокрасочного покрытия.
          </p>
          <a 
            href="#pricing"
            className="inline-flex items-center gap-2 text-titanium font-bold tracking-widest uppercase hover:text-white transition-colors"
          >
            Смотреть пакетные цены →
          </a>
        </motion.div>
      </div>

      {/* Scrolling Content Right */}
      <div className="lg:w-2/3 flex flex-col gap-6">
        {SITE_DATA.services.map((service, i) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
            className="bento-surface rounded-3xl p-8 lg:p-10 group relative overflow-hidden"
          >
            {/* Subtle hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-titanium/0 to-titanium/0 group-hover:from-titanium/5 transition-colors duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-4">
              <h3 className="text-2xl font-bold">{service.name}</h3>
              <div className="inline-block px-4 py-2 rounded-full border border-titanium/20 text-titanium font-semibold whitespace-nowrap bg-obsidian">
                {service.price}
              </div>
            </div>
            
            <p className="relative z-10 text-platinum/60 leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}