import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Ouirani Cars Agadir",
  description:
    "Contactez Ouirani Cars à Agadir. Téléphone, WhatsApp, email et adresse. Notre équipe vous répond rapidement pour votre location de voiture.",
  alternates: {
    canonical: "https://www.ouiranicars.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
