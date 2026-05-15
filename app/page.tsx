import { Hero } from "@/components/sections/Hero";
import { AboutBento } from "@/components/sections/AboutBento";
import { ServicesSticky } from "@/components/sections/ServicesSticky";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Gallery } from "@/components/sections/Gallery";
import { PricingCards } from "@/components/sections/PricingCards";
import { Reviews } from "@/components/sections/Reviews";
import { ContactGate } from "@/components/sections/ContactGate";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutBento />
      <ServicesSticky />
      <ProcessTimeline />
      <Gallery />
      <PricingCards />
      <Reviews />
      <ContactGate />
    </div>
  );
}