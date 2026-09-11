"use client";

import { useState } from "react";
import { cars, categories } from "@/lib/cars";
import CarCard from "@/components/CarCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function VoituresPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tous");
  const [sort, setSort] = useState("default");
  const [transmission, setTransmission] = useState("Tous");

  const filtered = cars
    .filter((c) => {
      const matchSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.brand.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "Tous" || c.category === category;
      const matchTransmission =
        transmission === "Tous" || c.transmission === transmission;
      return matchSearch && matchCategory && matchTransmission;
    })
    .sort((a, b) => {
      if (sort === "price-asc") return a.pricePerDay - b.pricePerDay;
      if (sort === "price-desc") return b.pricePerDay - a.pricePerDay;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="bg-gray-900 border-b border-white/5 py-12">
        <div className="container mx-auto px-4">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Notre flotte
          </p>
          <h1 className="text-4xl font-extrabold text-white mb-2">
            Toutes nos voitures
          </h1>
          <p className="text-gray-400">
            {cars.length} véhicules disponibles à Agadir — kilométrage illimité inclus
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Filters */}
        <div className="bg-gray-900 border border-white/5 rounded-2xl p-5 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="h-4 w-4 text-orange-400" />
            <span className="text-white font-medium text-sm">Filtres</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Rechercher..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 bg-gray-800 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-orange-500"
              />
            </div>

            {/* Category */}
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="bg-gray-800 border-white/10 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-white/10">
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat} className="text-white capitalize">
                    {cat === "Tous" ? "Toutes catégories" : cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Transmission */}
            <Select value={transmission} onValueChange={setTransmission}>
              <SelectTrigger className="bg-gray-800 border-white/10 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-white/10">
                {["Tous", "Manuelle", "Automatique"].map((t) => (
                  <SelectItem key={t} value={t} className="text-white">
                    {t === "Tous" ? "Toutes transmissions" : t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="bg-gray-800 border-white/10 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-white/10">
                <SelectItem value="default" className="text-white">Trier par défaut</SelectItem>
                <SelectItem value="price-asc" className="text-white">Prix croissant</SelectItem>
                <SelectItem value="price-desc" className="text-white">Prix décroissant</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-gray-500 text-sm mb-6">
          {filtered.length} véhicule{filtered.length !== 1 ? "s" : ""} trouvé{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Aucun véhicule ne correspond à vos critères.</p>
            <Button
              variant="ghost"
              className="mt-4 text-orange-400 hover:text-orange-300"
              onClick={() => {
                setSearch("");
                setCategory("Tous");
                setTransmission("Tous");
                setSort("default");
              }}
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
