"use client";

import { motion } from "framer-motion";
import { DOMAIN_CARDS } from "@/lib/constants";
import {
  Lightbulb,
  Brain,
  Users,
  BarChart3,
  Cog,
  Globe,
  Banknote,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Brain,
  Users,
  BarChart3,
  Cog,
  Globe,
  Banknote,
};

export default function DomainExpertise() {
  return (
    <section id="cat" className="relative py-24 depth-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Our <span className="text-accent">Domain Expertise</span>
          </h2>
          <p className="text-lg text-body/70">
            Specialized Programs Designed to Fuel Innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {DOMAIN_CARDS.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`glass glow-border glow-border-hover rounded-2xl p-8 flex flex-col items-center text-center cursor-default
                  transition-all duration-300 hover:-translate-y-2
                  ${i === 6 ? "sm:col-start-1 lg:col-start-2" : ""}`}
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  {Icon && <Icon className="text-accent" size={28} />}
                </div>
                <h3 className="text-lg font-bold text-heading">{card.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
