"use client";

import Link from "next/link";
import { MapPin, ArrowRight, Star, Shield, Clock, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=60&fm=webp')",
        }}
      />
      <div className="absolute inset-0 bg-gray-950/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/98 via-gray-950/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-950 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 pt-20 pb-32">
        <div className="max-w-2xl">
          {/* Location */}
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-2 mb-8">
            <MapPin className="h-3.5 w-3.5 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium">
              Location de voitures · Agadir, Maroc
            </span>
          </div>

          {/* H1 — optimisé SEO */}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6">
            Location
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
              voiture Agadir
            </span>
            <br />
            <span className="text-4xl md:text-5xl font-extrabold text-gray-300">
              dès 29€/jour
            </span>
          </h1>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
            <strong className="text-white">Ouirani Cars</strong> — flotte récente, kilométrage illimité,
            assurance incluse. Dacia, Renault, Hyundai, Volkswagen disponibles à Agadir.
          </p>

          {/* USPs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
            {[
              "Kilométrage illimité inclus",
              "Assurance tous risques incluse",
              "Livraison à votre hôtel / aéroport",
              "Confirmation en moins de 30 min",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>

          {/* Trust */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { icon: Star, text: "4.9/5 · 500+ avis" },
              { icon: Shield, text: "Assurance incluse" },
              { icon: Clock, text: "Disponible 24h/24" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300"
              >
                <Icon className="h-3.5 w-3.5 text-amber-400" />
                {text}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-white font-bold text-base h-14 px-8 rounded-xl"
            >
              <Link href="/voitures">
                Voir toutes les voitures
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white font-semibold text-base h-14 px-8 rounded-xl"
            >
              <a href="tel:+212613612850">
                <Phone className="mr-2 h-5 w-5 text-amber-400" />
                +212 613 612 850
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
