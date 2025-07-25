'use client';

import { GettingStarted } from "@/components/website/sections/whatwehealsection/GettingStarted";
import { HealingApproach } from "@/components/website/sections/whatwehealsection/HealingApproach";
import { WhatWeDoHeroSection } from "@/components/website/sections/whatwehealsection/HeroSection";
import { SuccessStories } from "@/components/website/sections/whatwehealsection/SuccessStories";
import { TreatmentCategories } from "@/components/website/sections/whatwehealsection/TreatmentCategories";



export default function WhatWeHealPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      <WhatWeDoHeroSection />      
      <TreatmentCategories />
      <HealingApproach />
      <SuccessStories />
      <GettingStarted />
    </div>
  );
}