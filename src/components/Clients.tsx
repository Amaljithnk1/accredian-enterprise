"use client";

import { motion } from "framer-motion";
import { CLIENTS } from "@/lib/constants";

export default function Clients() {
  // Double the array for seamless marquee
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clients" className="relative py-24 depth-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Our <span className="text-accent">Proven Partnerships</span>
          </h2>
          <p className="text-lg text-body/70">
            Successful Collaborations With the Industry&apos;s Best
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-2xl p-8 overflow-hidden"
        >
          <div className="flex animate-marquee w-max">
            {doubled.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex-shrink-0 mx-8 sm:mx-12 flex items-center justify-center"
              >
                <span
                  className="text-2xl sm:text-3xl font-bold tracking-tight opacity-80 hover:opacity-100 transition-opacity"
                  style={{ color: client.color }}
                >
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
