import Link from "next/link";
import { Car } from "@/lib/cars";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Gauge, Fuel, Calendar, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="group relative bg-gray-900 border border-white/5 rounded-2xl overflow-hidden hover:border-amber-500/40 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.2)] transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-white shrink-0">
        <Image
          src={car.image}
          alt={`${car.name} - Location voiture Agadir`}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

        {/* Top badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {car.badge && (
            <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              {car.badge}
            </span>
          )}
          <span className="bg-gray-900/80 backdrop-blur text-gray-200 text-xs px-2.5 py-1 rounded-full capitalize">
            {car.category}
          </span>
        </div>

        {/* Availability */}
        <div className="absolute top-3 right-3">
          {car.available ? (
            <div className="flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 backdrop-blur rounded-full px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-medium">Disponible</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 bg-red-500/15 border border-red-400/30 backdrop-blur rounded-full px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              <span className="text-red-400 text-xs font-medium">Indisponible</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Brand & Name */}
        <div className="mb-4">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-0.5">
            {car.brand}
          </p>
          <h3 className="text-white font-bold text-xl leading-tight">{car.name}</h3>
        </div>

        {/* Specs row */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
          {[
            { icon: Users, label: `${car.seats} places` },
            { icon: Gauge, label: car.transmission },
            { icon: Fuel, label: car.fuel },
            { icon: Calendar, label: `${car.year}` },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="h-3.5 w-3.5 text-amber-400/80 shrink-0" />
              <span className="text-gray-400 text-xs">{label}</span>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {car.features.slice(0, 3).map((f) => (
            <span key={f} className="flex items-center gap-1 text-xs bg-white/5 text-gray-400 rounded-lg px-2.5 py-1">
              <CheckCircle2 className="h-3 w-3 text-amber-400/60 shrink-0" />
              {f}
            </span>
          ))}
          {car.features.length > 3 && (
            <span className="text-xs text-gray-600 px-2 py-1">
              +{car.features.length - 3} équipements
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-4 mt-auto">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-gray-600 text-xs mb-0.5">À partir de</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-white">{formatPrice(car.pricePerDay)}</span>
                <span className="text-gray-500 text-xs">/jour</span>
              </div>
              <p className="text-gray-600 text-xs mt-0.5">Kilométrage illimité inclus</p>
            </div>
            <Button
              asChild
              disabled={!car.available}
              className="bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-xl px-5 disabled:opacity-40"
            >
              <Link href={car.available ? `/reservation?car=${car.id}` : "#"}>
                Réserver
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
