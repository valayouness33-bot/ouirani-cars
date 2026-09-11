import Link from "next/link";
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500">
                <Car className="h-5 w-5 text-white" />
              </div>
              <div className="leading-none">
                <p className="font-bold text-white text-lg">Ouirani</p>
                <p className="text-orange-400 text-xs font-medium tracking-widest uppercase">Cars</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              La référence de la location de voitures à Agadir et dans tout le Maroc.
              Service premium, tarifs transparents, disponible 24h/24.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-orange-500 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-orange-500 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Navigation</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Accueil" },
                { href: "/voitures", label: "Nos Voitures" },
                { href: "/reservation", label: "Réservation" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-orange-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-orange-400 mt-0.5 shrink-0" />
                <span>Boulevard Mohammed V, Agadir 80000, Maroc</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orange-400 shrink-0" />
                <a href="tel:+212600000000" className="hover:text-orange-400 transition-colors">
                  +212 6 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-orange-400 shrink-0" />
                <a href="mailto:contact@ouranicars.ma" className="hover:text-orange-400 transition-colors">
                  contact@ouranicars.ma
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Horaires</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-orange-400" />
                <span className="font-medium text-white">Lun – Sam</span>
              </li>
              <li className="pl-6">08h00 – 20h00</li>
              <li className="flex items-center gap-2 mt-2">
                <Clock className="h-4 w-4 text-orange-400" />
                <span className="font-medium text-white">Dimanche</span>
              </li>
              <li className="pl-6">09h00 – 18h00</li>
              <li className="mt-3 text-orange-400 font-medium">
                Assistance 24h/24 par téléphone
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2024 Ouirani Cars – Agadir, Maroc. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-orange-400 transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-orange-400 transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
