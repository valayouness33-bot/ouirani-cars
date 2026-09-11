import Link from "next/link";
import { cars } from "@/lib/cars";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Gauge, Fuel } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function FeaturedCars() {
  const featured = cars.slice(0, 7);
  const [hero, ...rest] = featured;
  const grid = rest.slice(0, 6);

  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-2">
              Notre flotte
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Nos voitures disponibles
              <br />
              <span className="text-gray-400 font-normal text-3xl">à Agadir</span>
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-white/20 text-white hover:bg-white/5 hover:text-white shrink-0"
          >
            <Link href="/voitures">
              Voir toute la flotte
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Main grid: hero card + smaller cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Big hero card */}
          <div className="lg:col-span-1 lg:row-span-2 group relative rounded-3xl overflow-hidden bg-gray-900 border border-white/5 hover:border-orange-500/30 transition-all flex flex-col min-h-[400px]">
            <div className="absolute inset-0">
              <img
                src={hero.image}
                alt={hero.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
            </div>
            <div className="relative z-10 mt-auto p-7">
              <div className="flex gap-2 mb-3">
                <Badge className="bg-orange-500 text-white border-0 text-xs">Populaire</Badge>
                <Badge className="bg-gray-800/80 text-white border-0 text-xs capitalize">{hero.category}</Badge>
              </div>
              <p className="text-gray-400 text-sm font-medium">{hero.brand}</p>
              <h3 className="text-white font-black text-3xl mb-3">{hero.name}</h3>
              <div className="flex gap-4 text-sm text-gray-400 mb-5">
                <span className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-orange-400" />{hero.seats} places
                </span>
                <span className="flex items-center gap-1.5">
                  <Gauge className="h-3.5 w-3.5 text-orange-400" />{hero.transmission}
                </span>
                <span className="flex items-center gap-1.5">
                  <Fuel className="h-3.5 w-3.5 text-orange-400" />{hero.fuel}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-xs">À partir de</p>
                  <p className="text-2xl font-black text-white">
                    {formatPrice(hero.pricePerDay)}
                    <span className="text-gray-500 text-sm font-normal">/jour</span>
                  </p>
                </div>
                <Button asChild className="bg-orange-500 hover:bg-orange-400 text-white rounded-xl">
                  <Link href={`/reservation?car=${hero.id}`}>Réserver</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Smaller cards */}
          {grid.map((car) => (
            <div
              key={car.id}
              className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-white/5 hover:border-orange-500/30 transition-all flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-gray-800 shrink-0">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-gray-900/80 text-white border-0 text-xs capitalize">
                    {car.category}
                  </Badge>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="text-xs bg-orange-500 text-white rounded-full px-2.5 py-1 font-semibold">
                    {car.transmission}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-0.5">{car.brand}</p>
                <h3 className="text-white font-bold text-lg mb-3">{car.name}</h3>
                <div className="flex gap-3 text-xs text-gray-500 mb-4">
                  <span>{car.seats} places</span>
                  <span>·</span>
                  <span>{car.fuel}</span>
                  <span>·</span>
                  <span>{car.year}</span>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-gray-500 text-xs">Dès</p>
                    <p className="text-xl font-black text-white">
                      {formatPrice(car.pricePerDay)}
                      <span className="text-gray-500 text-xs font-normal">/j</span>
                    </p>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    className="bg-orange-500 hover:bg-orange-400 text-white rounded-lg"
                  >
                    <Link href={`/reservation?car=${car.id}`}>Réserver</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
