"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import FloatingFish from "./FloatingFish";

export default function Hero({ onEnquire }: { onEnquire: () => void }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center depth-1 pt-20 overflow-hidden"
    >
      {/* Extra hero shimmer */}
      <div className="absolute inset-0 shimmer pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Next-Gen{" "}
              <span className="text-accent drop-shadow-[0_0_12px_rgba(0,212,255,0.5)]">Expertise</span>
              <br />
              For Your{" "}
              <span className="text-accent drop-shadow-[0_0_12px_rgba(0,212,255,0.5)]">Enterprise</span>
            </h1>

            <p className="text-lg sm:text-xl text-body/80 mb-8 max-w-lg">
              Cultivate high-performance teams through expert learning.
            </p>

            {/* Horizontal checklist row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6 mb-10"
            >
              {["Tailored Solutions", "Industry Insights", "Expert Guidance"].map(
                (item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.12 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle
                      className="text-accent drop-shadow-[0_0_6px_rgba(0,212,255,0.6)] flex-shrink-0"
                      size={22}
                    />
                    <span className="text-heading font-semibold text-sm sm:text-base">
                      {item}
                    </span>
                  </motion.div>
                )
              )}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              onClick={onEnquire}
              className="btn-glow text-lg"
            >
              Enquire Now
            </motion.button>
          </motion.div>

          {/* Right — underwater coral/kelp SVG illustration (enhanced visibility) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-[460px] h-[460px]">
              {/* Background Kelp - Scaled down */}
              <svg
                viewBox="0 0 460 460"
                className="absolute inset-0 w-full h-full scale-[0.5] translate-y-[15%] opacity-40"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="ray1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(0,212,255,0.35)" />
                    <stop offset="100%" stopColor="rgba(0,212,255,0)" />
                  </linearGradient>
                  <linearGradient id="ray2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                  <filter id="kelpGlow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="strongGlow">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Sunlight rays — more visible */}
                <polygon
                  points="120,0 95,460 145,460"
                  fill="url(#ray1)"
                  opacity="0.7"
                >
                  <animate
                    attributeName="opacity"
                    values="0.5;0.8;0.5"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </polygon>
                <polygon
                  points="240,0 210,460 270,460"
                  fill="url(#ray2)"
                  opacity="0.6"
                >
                  <animate
                    attributeName="opacity"
                    values="0.4;0.7;0.4"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </polygon>
                <polygon
                  points="360,0 335,460 385,460"
                  fill="url(#ray1)"
                  opacity="0.5"
                >
                  <animate
                    attributeName="opacity"
                    values="0.5;0.8;0.5"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </polygon>

                {/* Kelp / Coral — darker strokes with glow filter */}
                <g filter="url(#kelpGlow)">
                  {/* Left tall kelp */}
                  <path
                    d="M70 460 Q75 380 60 320 Q50 270 65 230 Q55 190 70 160 Q60 130 75 100 Q65 75 80 55"
                    stroke="rgba(0,180,210,0.85)"
                    strokeWidth="4.5"
                    fill="none"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="d"
                      values="M70 460 Q75 380 60 320 Q50 270 65 230 Q55 190 70 160 Q60 130 75 100 Q65 75 80 55;M70 460 Q80 380 65 320 Q55 270 60 230 Q65 190 55 160 Q65 130 60 100 Q70 75 65 55;M70 460 Q75 380 60 320 Q50 270 65 230 Q55 190 70 160 Q60 130 75 100 Q65 75 80 55"
                      dur="8s"
                      repeatCount="indefinite"
                    />
                  </path>
                  {/* Left branches */}
                  <path
                    d="M63 320 Q90 295 85 260"
                    stroke="rgba(0,180,210,0.7)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M55 270 Q30 245 38 210"
                    stroke="rgba(0,180,210,0.65)"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M70 160 Q95 140 90 115"
                    stroke="rgba(0,180,210,0.6)"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Center large coral */}
                  <path
                    d="M210 460 Q205 390 220 330 Q230 280 210 245 Q220 200 205 165 Q215 130 200 100 Q210 70 195 45"
                    stroke="rgba(0,160,200,0.9)"
                    strokeWidth="5.5"
                    fill="none"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="d"
                      values="M210 460 Q205 390 220 330 Q230 280 210 245 Q220 200 205 165 Q215 130 200 100 Q210 70 195 45;M210 460 Q215 390 205 330 Q215 280 225 245 Q210 200 220 165 Q205 130 215 100 Q200 70 210 45;M210 460 Q205 390 220 330 Q230 280 210 245 Q220 200 205 165 Q215 130 200 100 Q210 70 195 45"
                      dur="10s"
                      repeatCount="indefinite"
                    />
                  </path>
                  {/* Center branches */}
                  <path
                    d="M220 330 Q255 305 248 270"
                    stroke="rgba(0,160,200,0.75)"
                    strokeWidth="3.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M210 245 Q175 220 182 185"
                    stroke="rgba(0,160,200,0.7)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M205 165 Q240 148 235 118"
                    stroke="rgba(0,160,200,0.65)"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M200 100 Q170 85 178 60"
                    stroke="rgba(0,160,200,0.6)"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Right coral fan */}
                  <path
                    d="M350 460 Q360 400 345 350 Q355 300 340 265 Q350 230 335 195 Q345 170 330 145"
                    stroke="rgba(0,180,210,0.8)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="d"
                      values="M350 460 Q360 400 345 350 Q355 300 340 265 Q350 230 335 195 Q345 170 330 145;M350 460 Q355 400 360 350 Q345 300 355 265 Q340 230 350 195 Q335 170 345 145;M350 460 Q360 400 345 350 Q355 300 340 265 Q350 230 335 195 Q345 170 330 145"
                      dur="9s"
                      repeatCount="indefinite"
                    />
                  </path>
                  {/* Right branches */}
                  <path
                    d="M345 350 Q375 325 368 290"
                    stroke="rgba(0,180,210,0.7)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M340 265 Q315 240 322 210"
                    stroke="rgba(0,180,210,0.65)"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Small foreground kelp */}
                  <path
                    d="M140 460 Q145 410 135 370 Q140 340 130 310"
                    stroke="rgba(0,190,220,0.7)"
                    strokeWidth="3.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M400 460 Q395 420 405 385 Q395 355 405 330"
                    stroke="rgba(0,190,220,0.65)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </g>

                {/* Seafloor ground */}
                <path
                  d="M0 450 Q60 435 120 445 Q180 438 230 448 Q300 432 370 443 Q420 436 460 445 L460 460 L0 460 Z"
                  fill="rgba(0,160,190,0.15)"
                />
              </svg>

              {/* Swimming Fish */}
              <div className="absolute inset-0 pointer-events-none">
                <FloatingFish color="#00d4ff" size={0.8} duration={20} delay={0} direction="left" className="top-[30%]" />
                <FloatingFish color="#b2f0e8" size={0.5} duration={25} delay={5} direction="right" className="top-[60%]" />
                <FloatingFish color="#00d4ff" size={0.6} duration={18} delay={12} direction="left" className="top-[80%]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
