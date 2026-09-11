"use client";

import { useState } from "react";
import { cars, categories } from "@/lib/cars";
import CarCard from "@/components/CarCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, Car } from "lucide-react";
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
      <div className="relative bg-gray-900 border-b border-white/5 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Location voiture Agadir
          </p>
          <h1 className="text-5xl font-extrabold text-white mb-3">
            Notre flotte de véhicules
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            {cars.length} voitures disponibles à Agadir — kilométrage illimité, assurance tous risques incluse.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Filters */}
        <div className="bg-gray-900 border border-white/5 rounded-2xl p-5 mb-8 sticky top-20 z-20 backdrop-blur">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="h-4 w-4 text-orange-400" />
            <span className="text-white font-medium text-sm">Filtrer les voitures</span>
            <span className="ml-auto text-gray-500 text-sm">{filtered.length} résultat{filtered.length !== 1 ? "s" : ""}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Rechercher un modèle..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 bg-gray-800 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-orange-500/50"
              />
            </div>
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
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="bg-gray-800 border-white/10 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-white/10">
                <SelectItem value="default" className="text-white">Ordre par défaut</SelectItem>
                <SelectItem value="price-asc" className="text-white">Prix : croissant</SelectItem>
                <SelectItem value="price-desc" className="text-white">Prix : décroissant</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <Car className="h-12 w-12 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-400 text-lg mb-2">Aucun véhicule trouvé</p>
            <p className="text-gray-600 text-sm mb-6">Essayez de modifier vos critères de recherche.</p>
            <Button
              variant="ghost"
              className="text-orange-400 hover:text-orange-300"
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

        {/* SEO text block */}
        <div className="mt-16 bg-gray-900 border border-white/5 rounded-2xl p-8">
          <h2 className="text-white font-bold text-xl mb-4">
            Location de voitures à Agadir — Ouirani Cars
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Ouirani Cars est votre agence de location de voitures de référence à Agadir, Maroc. 
            Nous proposons une large sélection de véhicules adaptés à tous vos besoins : 
            des citadines économiques comme la <strong className="text-gray-300">Dacia Logan</strong>, <strong className="text-gray-300">Dacia Sandero</strong> et <strong className="text-gray-300">Renault Clio 5</strong>, 
            des SUV polyvalents comme le <strong className="text-gray-300">Dacia Duster 4x4</strong> et le <strong className="text-gray-300">Hyundai Tucson</strong>, 
            ou encore des véhicules de luxe comme le <strong className="text-gray-300">Volkswagen Touareg</strong>. 
            Tous nos tarifs incluent le kilométrage illimité, l'assurance tous risques et la TVA. 
            Livraison disponible à l'aéroport Al Massira et dans tous les hôtels d'Agadir.
          </p>
        </div>
      </div>
    </div>
  );
}
