import Link from "next/link";
import { cars } from "@/lib/cars";
import CarCard from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FeaturedCars() {
  const featured = cars.filter((c) => c.popular).slice(0, 3);

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-2">
              Notre flotte
            </p>
            <h2 className="text-4xl font-extrabold text-white">
              Voitures les plus populaires
            </h2>
            <p className="text-gray-400 mt-3 max-w-md">
              Découvrez nos véhicules les plus demandés, tous entretenus et assurés.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 hover:text-white shrink-0"
          >
            <Link href="/voitures">
              Voir toute la flotte
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
