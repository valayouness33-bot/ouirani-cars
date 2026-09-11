import Link from "next/link";
import { Car } from "@/lib/cars";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Gauge, Fuel, Calendar, CheckCircle2, XCircle } from "lucide-react";

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="group bg-gray-800/50 border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 hover:bg-gray-800 transition-all flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-900">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />

        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className="bg-gray-900/80 text-white border-0 text-xs capitalize">
            {car.category}
          </Badge>
          {car.popular && (
            <Badge className="bg-orange-500 text-white border-0 text-xs">
              Populaire
            </Badge>
          )}
        </div>

        <div className="absolute top-3 right-3">
          {car.available ? (
            <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 rounded-full px-2.5 py-1">
              <CheckCircle2 className="h-3 w-3 text-green-400" />
              <span className="text-green-400 text-xs font-medium">Disponible</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/30 rounded-full px-2.5 py-1">
              <XCircle className="h-3 w-3 text-red-400" />
              <span className="text-red-400 text-xs font-medium">Indisponible</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">{car.brand}</p>
          <h3 className="text-white font-bold text-xl">{car.name}</h3>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {[
            { icon: Users, label: `${car.seats} places` },
            { icon: Gauge, label: car.transmission },
            { icon: Fuel, label: car.fuel },
            { icon: Calendar, label: `Année ${car.year}` },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-gray-400 text-xs">
              <Icon className="h-3.5 w-3.5 text-orange-400/70 shrink-0" />
              {label}
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {car.features.slice(0, 3).map((f) => (
            <span
              key={f}
              className="text-xs bg-white/5 text-gray-400 rounded-md px-2 py-0.5"
            >
              {f}
            </span>
          ))}
          {car.features.length > 3 && (
            <span className="text-xs bg-white/5 text-gray-500 rounded-md px-2 py-0.5">
              +{car.features.length - 3}
            </span>
          )}
        </div>

        {/* Price & CTA */}
        <div className="flex items-end justify-between mt-auto">
          <div>
            <p className="text-gray-500 text-xs">À partir de</p>
            <p className="text-2xl font-black text-white">
              {formatPrice(car.pricePerDay)}
              <span className="text-gray-500 text-sm font-normal">/jour</span>
            </p>
          </div>
          <Button
            asChild
            disabled={!car.available}
            className="bg-orange-500 hover:bg-orange-400 text-white disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Link href={car.available ? `/reservation?car=${car.id}` : "#"}>
              Réserver
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
