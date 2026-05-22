"use client";

import { Hero } from "@/components/testeb/Hero";
import { Problem } from "@/components/testeb/Problem";
import { Opportunity } from "@/components/testeb/Opportunity";
import { Authority } from "@/components/testeb/Authority";
import { Video } from "@/components/testeb/Video";
import { Qualification } from "@/components/testeb/Qualification";
import { Footer } from "@/components/testeb/Footer";

export default function TestebPageClient() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F0E8] flex flex-col items-center w-full overflow-x-hidden">
      <Hero />
      <Problem />
      <Opportunity />
      <Authority />
      <Video />
      <Qualification />
      <Footer />
    </main>
  );
}
