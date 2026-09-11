import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-500 to-amber-600 p-12 text-center">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-8 text-[200px] font-black leading-none select-none">
              🚗
            </div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Prêt à prendre la route ?
            </h2>
            <p className="text-orange-100 text-xl mb-8 max-w-xl mx-auto">
              Réservez dès maintenant et profitez de nos meilleurs tarifs. 
              Confirmation en moins de 30 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 text-base px-8 h-14 font-semibold"
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
                className="border-white/40 text-white hover:bg-white/10 hover:text-white text-base px-8 h-14"
              >
                <a href="tel:+212600000000">
                  <Phone className="mr-2 h-5 w-5" />
                  Appelez-nous
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
