"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { MessageSquare, FileText, BookOpen, BarChart2 } from "lucide-react";
import FloatingFish from "./FloatingFish";

const stepIcons = [MessageSquare, FileText, BookOpen, BarChart2];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 depth-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <FloatingFish color="#4aada3" size={0.4} duration={30} delay={2} direction="right" className="top-[20%]" />
        <FloatingFish color="#00d4ff" size={0.6} duration={22} delay={10} direction="left" className="bottom-[15%]" />
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
            How It <span className="text-accent">Works</span>
          </h2>
          <p className="text-lg text-body/70">
            Your Journey to Enterprise Excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {HOW_IT_WORKS_STEPS.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass glow-border rounded-2xl p-6 text-center relative"
              >
                {/* Step number */}
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg shadow-accent/30">
                  {step.step}
                </div>

                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="text-accent" size={20} />
                </div>

                <h3 className="text-lg font-bold text-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-body/70">{step.description}</p>

                {/* Connector arrow (desktop only, not on last) */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-accent/40 text-2xl">
                    →
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
