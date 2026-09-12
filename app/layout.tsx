import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://www.ouiranicras.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ouirani Cars — Location de Voitures à Agadir | N°1 au Maroc",
    template: "%s | Ouirani Cars Agadir",
  },
  description:
    "Location de voitures à Agadir dès 29€/jour. Dacia Logan, Sandero, Clio 5, Duster, Tucson, Touareg. Kilométrage illimité, assurance incluse, livraison hôtel. Réservation rapide 24h/24.",
  keywords: [
    "location voiture Agadir",
    "location voiture Maroc",
    "louer voiture Agadir",
    "Ouirani Cars",
    "car rental Agadir",
    "location Dacia Duster Agadir",
    "location Clio 5 Agadir",
    "location SUV Agadir",
    "voiture pas cher Agadir",
    "location voiture aéroport Agadir",
    "تأجير سيارات أكادير",
    "كراء سيارات أكادير",
  ],
  authors: [{ name: "Ouirani Cars", url: siteUrl }],
  creator: "Ouirani Cars",
  publisher: "Ouirani Cars",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: siteUrl,
    siteName: "Ouirani Cars",
    title: "Ouirani Cars — Location de Voitures à Agadir",
    description:
      "Location de voitures à Agadir dès 29€/jour. Kilométrage illimité, assurance incluse, livraison hôtel. Réservation 24h/24.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ouirani Cars - Location de Voitures Agadir Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ouirani Cars — Location de Voitures à Agadir",
    description: "Location de voitures à Agadir dès 29€/jour. Kilométrage illimité, assurance incluse.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "fr-MA": siteUrl,
      "ar-MA": `${siteUrl}/ar`,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CarRental",
        "@id": `${siteUrl}/#organization`,
        name: "Ouirani Cars",
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/og-image.jpg`,
        description: "Location de voitures à Agadir, Maroc. Dacia Logan, Sandero, Clio 5, Duster, Tucson, VW Touareg.",
        telephone: "+212613612850",
        email: "ouiranicars@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Faabi, Rue 115 Dakhla",
          addressLocality: "Agadir",
          postalCode: "80000",
          addressCountry: "MA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "30.4278",
          longitude: "-9.5981",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:00",
            closes: "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        priceRange: "29-110 €/jour",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "500",
          bestRating: "5",
        },
        sameAs: [
          "https://www.facebook.com/ouiranicars",
          "https://www.instagram.com/ouiranicars",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Ouirani Cars",
        description: "Location de voitures à Agadir Maroc",
        publisher: { "@id": `${siteUrl}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/voitures?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <meta name="theme-color" content="#f97316" />
        <meta name="geo.region" content="MA-AGD" />
        <meta name="geo.placename" content="Agadir" />
        <meta name="geo.position" content="30.4278;-9.5981" />
        <meta name="ICBM" content="30.4278, -9.5981" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
