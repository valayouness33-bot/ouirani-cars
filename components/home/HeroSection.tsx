"use client";

import Link from "next/link";
import { MapPin, ArrowRight, Star, Shield, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800&q=85')",
        }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gray-950/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 pt-20 pb-32">
        <div className="max-w-2xl">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 rounded-full px-4 py-2 mb-8">
            <MapPin className="h-3.5 w-3.5 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">Agadir, Maroc</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6">
            Louez.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Partez.
            </span>
            <br />
            Librement.
          </h1>

          <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-md">
            Ouirani Cars — votre partenaire de location de voitures à Agadir. 
            Flotte récente, tarifs transparents, service 24h/24.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mb-10">
            {[
              { icon: Star, text: "4.9/5 — 500+ avis" },
              { icon: Shield, text: "Assurance incluse" },
              { icon: Clock, text: "Disponible 24h/24" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300"
              >
                <Icon className="h-3.5 w-3.5 text-orange-400" />
                {text}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold text-base h-14 px-8 rounded-xl"
            >
              <Link href="/voitures">
                Voir nos voitures
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white font-semibold text-base h-14 px-8 rounded-xl"
            >
              <a href="tel:+212600000000">
                <Phone className="mr-2 h-5 w-5 text-orange-400" />
                Appeler maintenant
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
