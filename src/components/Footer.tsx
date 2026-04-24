"use client";

import { NAV_LINKS } from "@/lib/constants";
import { Mail } from "lucide-react";

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 bg-gradient-to-b from-[#3d9e95] to-[#2d8a80] overflow-hidden">
      {/* Subtle caustic shimmer */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="caustic-layer" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & tagline */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold text-white tracking-tight">
                accredian
              </span>
              <p className="text-xs text-white/60 uppercase tracking-wider mt-0.5">
                credentials that matter
              </p>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Empowering enterprises with next-generation learning experiences.
              Cultivate high-performance teams through expert-led programs.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Accredian</h4>
            <div className="flex flex-col gap-2">
              {['About', 'Blog', 'Why Accredian'].map((link) => (
                <button
                  key={link}
                  className="text-sm text-white/70 hover:text-white transition-colors text-left cursor-pointer"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:enterprise@accredian.com"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail size={16} />
                Email us: enterprise@accredian.com
              </a>
              <p className="text-sm text-white/70 leading-relaxed">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 text-center">
          <p className="text-sm text-white/50">
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
