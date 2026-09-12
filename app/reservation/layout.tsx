import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réserver une Voiture à Agadir — Confirmation en 30 Minutes",
  description:
    "Réservez votre voiture à Agadir en ligne. Choisissez votre véhicule, vos dates et votre lieu de prise en charge. Confirmation immédiate, aucun paiement à l'avance.",
  alternates: {
    canonical: "https://www.ouiranicras.com/reservation",
  },
};

export default function ReservationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
