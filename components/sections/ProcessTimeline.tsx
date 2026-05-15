"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { SITE_DATA } from "@/lib/constants";

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-32 px-6 bg-white/[0.02] border-y border-white/[0.06]" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-4">Процесс Работы</h2>
          <p className="text-muted">Прозрачность и контроль на каждом этапе.</p>
        </div>

        <div className="relative">
          {/* Background Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-surface-border md:-translate-x-1/2" />
          
          {/* Animated Progress Line */}
          <motion.div 
            className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-titanium md:-translate-x-1/2 transform origin-top"
            style={{ scaleY: springProgress }}
          />

          <div className="flex flex-col gap-16">
            {SITE_DATA.process.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    isEven ? "md:flex-row-reverse text-left md:text-right" : "text-left"
                  }`}
                >
                  {/* Content */}
                  <div className="md:w-1/2 pl-16 md:pl-0">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-platinum/60">{step.desc}</p>
                  </div>
                  
                  {/* Node */}
                  <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-obsidian border-4 border-surface-border flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-titanium" />
                  </div>
                  
                  {/* Empty space for grid alignment */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}