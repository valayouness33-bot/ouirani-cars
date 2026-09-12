"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { cars } from "@/lib/cars";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Car, Calendar, User, Phone, Mail, Loader2 } from "lucide-react";

function ReservationForm() {
  const searchParams = useSearchParams();
  const carId = searchParams.get("car");

  const [selectedCarId, setSelectedCarId] = useState(carId || "");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupLocation, setPickupLocation] = useState("agence");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const selectedCar = cars.find((c) => c.id === Number(selectedCarId));

  const days =
    pickupDate && returnDate
      ? Math.max(
          1,
          Math.ceil(
            (new Date(returnDate).getTime() - new Date(pickupDate).getTime()) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 0;

  const total = selectedCar ? selectedCar.pricePerDay * days : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          carName: selectedCar?.name,
          pickupDate,
          returnDate,
          pickupLocation,
          name,
          phone,
          email,
          days,
          total,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Erreur lors de l'envoi. Appelez-nous directement au +212613612850");
      }
    } catch {
      setError("Erreur réseau. Appelez-nous au +212613612850");
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  if (submitted) {
    return (
      <div className="text-center py-16 px-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 mx-auto mb-6">
          <CheckCircle2 className="h-10 w-10 text-emerald-400" />
        </div>
        <h2 className="text-3xl font-extrabold text-white mb-3">
          Réservation confirmée !
        </h2>
        <p className="text-gray-400 text-lg max-w-md mx-auto mb-6">
          Merci {name}. Nous vous contactons dans les 30 minutes sur le{" "}
          <span className="text-white font-medium">{phone}</span> pour confirmer les détails.
        </p>
        <div className="bg-gray-800 border border-white/5 rounded-2xl p-6 max-w-sm mx-auto text-left mb-8">
          <p className="text-gray-400 text-sm mb-1">Voiture réservée</p>
          <p className="text-white font-bold text-xl mb-4">{selectedCar?.name}</p>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Prise en charge</span>
            <span className="text-white">{pickupDate}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-400">Retour</span>
            <span className="text-white">{returnDate}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-400">Durée</span>
            <span className="text-white">{days} jour{days > 1 ? "s" : ""}</span>
          </div>
          <div className="border-t border-white/10 mt-4 pt-4 flex justify-between">
            <span className="text-gray-400 font-medium">Total estimé</span>
            <span className="text-amber-400 font-black text-lg">{formatPrice(total)}</span>
          </div>
        </div>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="border-white/20 text-white hover:bg-white/10 hover:text-white"
        >
          Faire une autre réservation
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Car Selection */}
      <div className="bg-gray-800 border border-white/5 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Car className="h-5 w-5 text-amber-400" />
          <h2 className="text-white font-semibold text-lg">Choisir un véhicule</h2>
        </div>
        <Select value={selectedCarId} onValueChange={(v) => setSelectedCarId(v ?? "")}>
          <SelectTrigger className="bg-gray-700 border-white/10 text-white">
            <SelectValue placeholder="Sélectionner une voiture..." />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-white/10 max-h-60">
            {cars
              .filter((c) => c.available)
              .map((c) => (
                <SelectItem key={c.id} value={String(c.id)} className="text-white">
                  {c.name} — {formatPrice(c.pricePerDay)}/jour
                </SelectItem>
              ))}
          </SelectContent>
        </Select>

        {selectedCar && (
          <div className="mt-4 flex items-center gap-4 p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl">
            <img
              src={selectedCar.image}
              alt={selectedCar.name}
              className="h-16 w-24 object-cover rounded-lg"
            />
            <div>
              <p className="text-white font-semibold">{selectedCar.name}</p>
              <p className="text-gray-400 text-sm capitalize">{selectedCar.category} · {selectedCar.transmission}</p>
              <p className="text-amber-400 font-bold mt-1">{formatPrice(selectedCar.pricePerDay)}/jour</p>
            </div>
          </div>
        )}
      </div>

      {/* Dates */}
      <div className="bg-gray-800 border border-white/5 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="h-5 w-5 text-amber-400" />
          <h2 className="text-white font-semibold text-lg">Dates & Lieu</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-gray-400 text-sm mb-1.5 block">Date de prise en charge *</label>
            <Input
              type="date"
              value={pickupDate}
              min={today}
              onChange={(e) => setPickupDate(e.target.value)}
              required
              className="bg-gray-700 border-white/10 text-white"
            />
          </div>
          <div>
            <label className="text-gray-400 text-sm mb-1.5 block">Date de retour *</label>
            <Input
              type="date"
              value={returnDate}
              min={pickupDate || today}
              onChange={(e) => setReturnDate(e.target.value)}
              required
              className="bg-gray-700 border-white/10 text-white"
            />
          </div>
        </div>

        <div>
          <label className="text-gray-400 text-sm mb-1.5 block">Lieu de prise en charge *</label>
          <Select value={pickupLocation} onValueChange={(v) => setPickupLocation(v ?? "agence")}>
            <SelectTrigger className="bg-gray-700 border-white/10 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-white/10">
              <SelectItem value="agence" className="text-white">
                Agence Ouirani Cars — Agadir Centre
              </SelectItem>
              <SelectItem value="aeroport" className="text-white">
                Aéroport Al Massira — Agadir
              </SelectItem>
              <SelectItem value="hotel" className="text-white">
                Livraison à votre hôtel (+50 MAD)
              </SelectItem>
              <SelectItem value="adresse" className="text-white">
                Adresse personnalisée (+100 MAD)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Personal Info */}
      <div className="bg-gray-800 border border-white/5 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <User className="h-5 w-5 text-amber-400" />
          <h2 className="text-white font-semibold text-lg">Vos informations</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-gray-400 text-sm mb-1.5 block">Nom complet *</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Ex: Ahmed Benali"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="pl-9 bg-gray-700 border-white/10 text-white placeholder:text-gray-600"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-sm mb-1.5 block">Téléphone *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="+212 6 XX XX XX XX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="pl-9 bg-gray-700 border-white/10 text-white placeholder:text-gray-600"
                />
              </div>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1.5 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-9 bg-gray-700 border-white/10 text-white placeholder:text-gray-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary & Submit */}
      {selectedCar && days > 0 && (
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4">Récapitulatif</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">{selectedCar.name}</span>
              <span className="text-white">{formatPrice(selectedCar.pricePerDay)}/jour</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Durée</span>
              <span className="text-white">{days} jour{days > 1 ? "s" : ""}</span>
            </div>
            <div className="border-t border-white/10 pt-3 flex justify-between">
              <span className="text-white font-semibold text-base">Total estimé</span>
              <span className="text-amber-400 font-black text-xl">{formatPrice(total)}</span>
            </div>
          </div>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="w-full bg-amber-500 hover:bg-amber-400 text-white h-14 text-base font-semibold"
      >
        {loading ? (
          <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Envoi en cours...</>
        ) : (
          "Confirmer la réservation"
        )}
      </Button>
      {error && (
        <p className="text-center text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
          {error}
        </p>
      )}
      <p className="text-center text-gray-500 text-xs">
        Votre réservation sera confirmée par téléphone sous 30 minutes. Aucun paiement immédiat requis.
      </p>
    </form>
  );
}

export default function ReservationPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="bg-gray-900 border-b border-white/5 py-12">
        <div className="container mx-auto px-4">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Réservation
          </p>
          <h1 className="text-4xl font-extrabold text-white mb-2">
            Réservez votre voiture
          </h1>
          <p className="text-gray-400">
            Remplissez le formulaire ci-dessous et nous vous confirmons sous 30 minutes.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-2xl mx-auto">
          <Suspense fallback={<div className="text-gray-400">Chargement...</div>}>
            <ReservationForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
