import Link from "next/link";
import Logo from "@/components/Logo";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const PHONE = "+212613612850";
const WHATSAPP = "https://wa.me/212613612850";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/">
              <Logo className="h-11 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed">
              La référence de la location de voitures à Agadir. Service premium, tarifs transparents en euros, disponible 24h/24.
            </p>
            <div className="flex gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600/20 border border-green-600/40 hover:bg-green-600 text-green-400 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
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
                <span>Ouirani Cars, Faabi, Rue 115 Dakhla, Agadir 80000, Maroc</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orange-400 shrink-0" />
                <a href={`tel:${PHONE}`} className="hover:text-orange-400 transition-colors">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-orange-400 shrink-0" />
                <a href="mailto:ouiranicars@gmail.com" className="hover:text-orange-400 transition-colors">
                  ouiranicars@gmail.com
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
                Assistance 24h/24 par WhatsApp
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2024 Ouirani Cars — Agadir, Maroc. Tous droits réservés.</p>
          <p className="text-gray-600">ouiranicars@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
