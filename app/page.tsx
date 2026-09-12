import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedCars from "@/components/home/FeaturedCars";
import WhyUs from "@/components/home/WhyUs";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Ouirani Cars — Location de Voitures à Agadir | Dès 200 MAD/Jour",
  description:
    "Louez votre voiture à Agadir avec Ouirani Cars. Dacia Logan, Sandero, Clio 5, Duster, Tucson, VW Touareg. Dès 29€/jour — Kilométrage illimité, assurance incluse, livraison à domicile. ☎ +212613612850",
  alternates: {
    canonical: "https://www.ouiranicras.com",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedCars />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
