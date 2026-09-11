import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Voitures à Agadir — Dacia, Renault, Hyundai, Volkswagen",
  description:
    "Consultez notre flotte : Dacia Logan (200 MAD/j), Dacia Sandero, Clio 5, Clio 5 Automatique, Dacia Duster 4x4, Hyundai Tucson, VW Touareg. Kilométrage illimité, assurance incluse à Agadir.",
  alternates: {
    canonical: "https://www.ouiranicars.com/voitures",
  },
};

export default function VoituresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
