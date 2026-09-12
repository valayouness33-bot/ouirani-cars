"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const PHONE = "+212613612850";
const WHATSAPP = "https://wa.me/212613612850";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/voitures", label: "Nos Voitures" },
  { href: "/reservation", label: "Réservation" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Ouirani Cars" width={130} height={52} className="h-11 w-auto object-contain mix-blend-screen" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-orange-400 bg-orange-500/10"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
            <Phone className="h-4 w-4 text-orange-400" />
            {PHONE}
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-3 py-2 rounded-lg transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-400 text-white">
            <Link href="/reservation">Réserver</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gray-900 border-gray-700 w-72">
            <div className="mb-8 mt-2">
              <Image src="/logo.png" alt="Ouirani Cars" width={120} height={48} className="h-10 w-auto object-contain mix-blend-screen" />
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-orange-400 bg-orange-500/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 space-y-3">
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-sm text-gray-300 px-4">
                <Phone className="h-4 w-4 text-orange-400" />
                {PHONE}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors w-full"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <Button asChild className="w-full bg-orange-500 hover:bg-orange-400 text-white">
                <Link href="/reservation" onClick={() => setOpen(false)}>
                  Réserver Maintenant
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
