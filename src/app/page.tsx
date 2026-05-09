"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/UI/CursorGlow";
import { NoiseOverlay } from "@/components/UI/NoiseOverlay";

export default function Page() {
  return (
    <>
      <NoiseOverlay />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
