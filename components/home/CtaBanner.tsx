import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, MessageCircle } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-gray-900 border border-white/5 p-12 md:p-16">
          {/* Orange glow */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative z-10 max-w-2xl">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Réservez maintenant
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Prêt à prendre
              <br />
              la route ?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Confirmation sous 30 minutes. Aucun paiement immédiat requis.
              Annulation gratuite jusqu'à 24h avant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold text-base h-14 px-8 rounded-xl"
              >
                <Link href="/reservation">
                  Réserver maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white font-semibold text-base h-14 px-8 rounded-xl"
              >
                <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5 text-green-400" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-gray-400 hover:text-white font-semibold text-base h-14 px-6"
              >
                <a href="tel:+212600000000">
                  <Phone className="mr-2 h-5 w-5 text-orange-400" />
                  Appeler
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
