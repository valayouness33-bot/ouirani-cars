import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ouirani Cars - Location de Voitures à Agadir",
  description:
    "Louez votre voiture idéale à Agadir avec Ouirani Cars. Large choix de véhicules, tarifs compétitifs, service 24h/24. La référence de la location automobile au Maroc.",
  keywords: "location voiture Agadir, location voiture Maroc, Ouirani Cars, louer voiture Agadir",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
