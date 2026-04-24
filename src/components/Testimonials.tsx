"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import FloatingFish from "./FloatingFish";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 depth-7 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <FloatingFish color="#00d4ff" size={0.7} duration={28} delay={5} direction="left" className="top-[10%]" />
        <FloatingFish color="#b2f0e8" size={0.5} duration={35} delay={15} direction="right" className="top-[70%]" />
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
            Testimonials from <span className="text-accent">Our Partners</span>
          </h2>
          <p className="text-lg text-body/70">
            What <span className="text-accent">Our Clients</span> Are Saying
          </p>
        </motion.div>

        {/* Show all testimonials cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass glow-border rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-2xl font-black text-accent italic tracking-tighter">
                  {t.avatar}
                </div>
              </div>
              <p className="text-sm text-body/80 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
