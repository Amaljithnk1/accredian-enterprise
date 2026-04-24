"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import CausticBackground from "@/components/CausticBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import AccredianEdge from "@/components/AccredianEdge";
import DomainExpertise from "@/components/DomainExpertise";
import CourseSegmentation from "@/components/CourseSegmentation";
import HowItWorks from "@/components/HowItWorks";
import FAQs from "@/components/FAQs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";



export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <CausticBackground />

      <Navbar onEnquire={() => setModalOpen(true)} />

      <main className="relative z-[1]">
        <Hero onEnquire={() => setModalOpen(true)} />
        <Stats />
        <Clients />
        <AccredianEdge />
        <DomainExpertise />
        <CourseSegmentation />
        <HowItWorks />
        <FAQs />
        <Testimonials />
      </main>

      <Footer />
      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
