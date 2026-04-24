import React from "react";

type FishProps = {
  color?: string;
  size?: number;
  duration?: number;
  delay?: number;
  direction?: "left" | "right";
  className?: string; // E.g., 'top-20', 'bottom-10'
};

export default function FloatingFish({
  color = "#00d4ff",
  size = 1,
  duration = 15,
  delay = 0,
  direction = "left",
  className = "",
}: FishProps) {
  const flip = direction === "right" ? "scaleX(-1)" : "scaleX(1)";

  return (
    <div
      className={`absolute pointer-events-none z-0 ${className}`}
      style={{
        animation: `swim-${direction} ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        opacity: 0, // Starts invisible, keyframes will fade it in
        willChange: "left, transform, opacity",
      }}
      aria-hidden="true"
    >
      <div
        style={{
          transform: `scale(${size}) ${flip}`,
          filter: `drop-shadow(0 0 10px ${color})`,
        }}
      >
        <svg
          width="100"
          height="50"
          viewBox="0 0 100 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          {/* Top Fin */}
          <path
            d="M40,18 Q50,0 60,18"
            stroke={color}
            strokeWidth="1.5"
            fill="rgba(255,255,255,0.1)"
          />
          {/* Bottom Fin */}
          <path
            d="M40,32 Q45,50 55,32"
            stroke={color}
            strokeWidth="1.5"
            fill="rgba(255,255,255,0.1)"
          />
          {/* Main Body */}
          <path
            d="M15,25 Q35,5 75,25 Q35,45 15,25 Z"
            fill="rgba(255,255,255,0.15)"
            stroke={color}
            strokeWidth="2"
          />
          {/* Tail */}
          <path
            d="M75,25 Q95,5 95,25 Q95,45 75,25 Z"
            fill="rgba(255,255,255,0.1)"
            stroke={color}
            strokeWidth="1.5"
          />
          {/* Eye */}
          <circle cx="25" cy="22" r="2" fill="#fff" filter="blur(0.5px)" />
          {/* Internal glowing lateral line */}
          <path
            d="M25,25 Q50,28 70,25"
            stroke={color}
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </div>
    </div>
  );
}
