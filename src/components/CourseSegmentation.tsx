"use client";

import { motion } from "framer-motion";
import { COURSE_SEGMENTS } from "@/lib/constants";

export default function CourseSegmentation() {
  return (
    <section className="relative py-24 depth-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Tailored <span className="text-accent">Course Segmentation</span>
          </h2>
          <p className="text-lg text-body/70">
            Explore Custom-fit Courses Designed to Address Every Professional
            Focus
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSE_SEGMENTS.map((seg, i) => (
            <motion.div
              key={seg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Image header */}
              <div className="h-40 relative overflow-hidden bg-white/5">
                <img 
                  src={seg.image} 
                  alt={seg.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 to-transparent mix-blend-multiply" />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-accent mb-3">
                  {seg.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {seg.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-body font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
