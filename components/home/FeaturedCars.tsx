import Link from "next/link";
import { cars } from "@/lib/cars";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Gauge, Fuel, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function FeaturedCars() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Notre flotte — Agadir 2024
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              7 voitures, <br />un seul objectif :{" "}
              <span className="text-amber-400">votre confort</span>
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-amber-500/40 text-amber-400 hover:bg-amber-500/10 hover:text-amber-300 shrink-0"
          >
            <Link href="/voitures">
              Voir tout le catalogue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Cars grid */}
        <div className="space-y-5">
          {cars.map((car, i) => (
            <div
              key={car.id}
              className={`group relative rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:shadow-[0_0_50px_-15px_rgba(249,115,22,0.25)] ${
                i === 0 ? "bg-gradient-to-r from-gray-900 to-gray-900/80" : "bg-gray-900"
              }`}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative md:w-72 lg:w-80 h-48 md:h-auto shrink-0 overflow-hidden bg-white min-h-[180px]">
                  <Image
                    src={car.image}
                    alt={`${car.name} - Location voiture Agadir`}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 320px"
                    loading={car.id <= 2 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 md:bg-none" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {car.badge && (
                      <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        {car.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">
                          {car.brand} · {car.category}
                        </p>
                        <h3 className="text-white font-black text-2xl md:text-3xl">{car.name}</h3>
                      </div>
                      <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5 shrink-0">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-emerald-400 text-xs font-medium">Disponible</span>
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-5">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Users className="h-4 w-4 text-amber-400/70" />{car.seats} places
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Gauge className="h-4 w-4 text-amber-400/70" />{car.transmission}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Fuel className="h-4 w-4 text-amber-400/70" />{car.fuel}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="text-amber-400/70 text-xs">★</span> {car.year}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {car.features.map((f) => (
                        <span
                          key={f}
                          className="flex items-center gap-1.5 text-xs bg-white/5 text-gray-400 rounded-lg px-3 py-1.5"
                        >
                          <CheckCircle2 className="h-3 w-3 text-amber-400/50 shrink-0" />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/5">
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Location à partir de</p>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-black text-white">{formatPrice(car.pricePerDay)}</span>
                        <span className="text-gray-500 text-sm">/jour</span>
                      </div>
                      <p className="text-gray-600 text-xs mt-0.5">Km illimité · Assurance incluse</p>
                    </div>
                    <Button
                      asChild
                      size="lg"
                      className="bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl px-6"
                    >
                      <Link href={`/reservation?car=${car.id}`}>
                        Réserver maintenant
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
