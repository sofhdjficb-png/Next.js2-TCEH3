"use client";

import { motion } from "motion/react";
import { fadeUp, bentoItem, staggerContainer } from "@/lib/animations";

export function AboutBento() {
  return (
    <section id="about" className="py-24 relative px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[250px]"
        >
          {/* Main big card */}
          <motion.div variants={bentoItem} className="md:col-span-2 md:row-span-2 rounded-3xl bento-surface p-8 flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10 w-3/4">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">Безупречность как стандарт</h2>
              <p className="text-platinum/70 leading-relaxed text-lg">
                Мы не просто моем машины. Мы восстанавливаем заводской лоск, консервируем результат керамикой и даем гарантию на то, что ваш автомобиль будет собирать взгляды.
              </p>
            </div>
            {/* Decorative element */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-titanium/20 blur-[100px] group-hover:bg-titanium/30 transition-colors duration-700" />
          </motion.div>

          {/* Stat 1 */}
          <motion.div variants={bentoItem} className="rounded-3xl bento-surface p-8 flex flex-col justify-center items-center text-center">
            <div className="text-5xl lg:text-7xl font-black text-titanium mb-2 tracking-tighter">10+</div>
            <div className="text-sm font-medium uppercase tracking-widest text-muted">Лет опыта</div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div variants={bentoItem} className="rounded-3xl bento-surface p-8 flex flex-col justify-center items-center text-center">
            <div className="text-5xl lg:text-7xl font-black text-titanium mb-2 tracking-tighter">5K+</div>
            <div className="text-sm font-medium uppercase tracking-widest text-muted">Довольных клиентов</div>
          </motion.div>

          {/* Small feature 1 */}
          <motion.div variants={bentoItem} className="rounded-3xl bento-surface p-8 flex flex-col justify-end">
            <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
            <p className="text-sm text-platinum/70">Официальный договор и сертификаты на химию.</p>
          </motion.div>

          {/* Small feature 2 */}
          <motion.div variants={bentoItem} className="md:col-span-2 rounded-3xl bento-surface overflow-hidden relative flex items-center p-8">
            <div className="absolute inset-0 bg-titanium/5"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Премиальные материалы</h3>
              <p className="text-platinum/70 max-w-md">Мы используем только сертифицированные составы от лидеров индустрии: Krytex, Koch Chemie, Gyeon.</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}