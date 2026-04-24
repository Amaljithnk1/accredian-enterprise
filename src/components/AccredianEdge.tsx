"use client";

import { motion } from "framer-motion";
import { EDGE_ITEMS } from "@/lib/constants";
import FloatingFish from "./FloatingFish";
import {
  Settings,
  GraduationCap,
  Lightbulb,
  Cpu,
  LayoutGrid,
  TrendingUp,
  Truck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Settings,
  GraduationCap,
  Lightbulb,
  Cpu,
  LayoutGrid,
  TrendingUp,
  Truck,
};

export default function AccredianEdge() {
  return (
    <section id="accredian-edge" className="relative py-24 depth-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <FloatingFish color="#b2f0e8" size={0.8} duration={24} delay={3} direction="right" className="top-[40%]" />
        <FloatingFish color="#4aada3" size={0.5} duration={20} delay={8} direction="left" className="top-[80%]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            The <span className="text-accent">Accredian Edge</span>
          </h2>
          <p className="text-lg text-body/70">
            Key Aspects of Our Strategic Training
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative">
          {/* Dashed connection line */}
          <div className="absolute top-1/2 left-8 right-8 h-[2px] border-t-2 border-dashed border-accent/30 -translate-y-1/2" />

          <div className="flex justify-between items-center relative">
            {EDGE_ITEMS.map((item, i) => {
              const Icon = iconMap[item.icon];
              const isAbove = i % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: isAbove ? -20 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center relative"
                  style={{ width: `${100 / EDGE_ITEMS.length}%` }}
                >
                  {/* Label above */}
                  {isAbove && (
                    <span className="text-xs sm:text-sm font-semibold text-heading text-center mb-3 max-w-[100px]">
                      {item.title}
                    </span>
                  )}

                  {/* Node */}
                  <div className="w-14 h-14 rounded-full glass glow-border flex items-center justify-center relative z-10">
                    {Icon && <Icon className="text-accent" size={24} />}
                  </div>

                  {/* Label below */}
                  {!isAbove && (
                    <span className="text-xs sm:text-sm font-semibold text-heading text-center mt-3 max-w-[100px]">
                      {item.title}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative">
          {/* Vertical dashed line */}
          <div className="absolute top-0 bottom-0 left-7 w-[2px] border-l-2 border-dashed border-accent/30" />

          <div className="space-y-6">
            {EDGE_ITEMS.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-4 relative"
                >
                  <div className="w-14 h-14 rounded-full glass glow-border flex items-center justify-center flex-shrink-0 relative z-10">
                    {Icon && <Icon className="text-accent" size={22} />}
                  </div>
                  <span className="text-sm font-semibold text-heading">
                    {item.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
