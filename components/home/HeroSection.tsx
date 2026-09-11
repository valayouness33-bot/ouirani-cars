"use client";

import Link from "next/link";
import { MapPin, Calendar, ArrowRight, Star, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-950">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6">
            <MapPin className="h-3.5 w-3.5 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">Agadir, Maroc</span>
            <span className="text-gray-400 text-sm">— Livraison disponible partout</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Conduisez{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
              librement
            </span>{" "}
            <br />à travers le Maroc
          </h1>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
            Ouirani Cars vous propose les meilleurs véhicules à Agadir. 
            Des tarifs imbattables, une flotte récente et un service client exceptionnel.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-6 mb-10">
            {[
              { icon: Star, text: "4.9/5 satisfaction client" },
              { icon: Shield, text: "Assurance incluse" },
              { icon: Clock, text: "Mise à disposition en 1h" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-gray-300 text-sm">
                <Icon className="h-4 w-4 text-orange-400" />
                {text}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-400 text-white text-base px-8 h-14"
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
              className="border-white/20 text-white hover:bg-white/10 hover:text-white text-base px-8 h-14"
            >
              <Link href="/reservation">
                <Calendar className="mr-2 h-5 w-5" />
                Réserver maintenant
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
}
