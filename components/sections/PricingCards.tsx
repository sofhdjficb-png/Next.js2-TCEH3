"use client";

import { motion } from "motion/react";
import { SITE_DATA } from "@/lib/constants";
import { fadeUp } from "@/lib/animations";

export function PricingCards() {
  return (
    <section id="pricing" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-4">Пакетные решения</h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">Выгоднее, чем собирать услуги по одной. Выберите уровень ухода для вашего автомобиля.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        {SITE_DATA.pricing.map((pkg, i) => (
          <motion.div
            key={pkg.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.12 }}
            className={`relative rounded-3xl p-8 flex flex-col h-full
              ${
                pkg.isPopular
                  ? 'bg-[rgba(255,255,255,0.025)] backdrop-blur-[20px] border border-titanium/50 shadow-[0_0_50px_rgba(212,197,176,0.1)] md:-translate-y-4'
                  : 'bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)]'
              }
            `}
          >
            {pkg.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-titanium text-obsidian px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                Хит продаж
              </div>
            )}
            
            <h3 className="text-2xl font-bold text-center mb-4">{pkg.title}</h3>
            
            <div className="text-center mb-8">
              <span className="text-4xl font-black">{pkg.price}</span>
            </div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-platinum/80 text-sm">
                  <svg className="w-5 h-5 text-titanium shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            
            <a 
              href="#contact" 
              className={`w-full py-4 rounded-xl font-bold tracking-widest uppercase text-center transition-all ${
                pkg.isPopular
                  ? 'bg-titanium text-obsidian hover:shadow-lg'
                  : 'border border-surface-border hover:bg-surface-border/50 text-white'
              }`}
            >
              Выбрать
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}