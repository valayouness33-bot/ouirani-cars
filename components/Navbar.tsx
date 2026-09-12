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
    <header className="sticky top-0 z-50 w-full border-b border-amber-500/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/90">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-gold.jpg" alt="Ouirani Cars" width={56} height={56} className="h-11 w-11 rounded-full object-cover" priority />
          <div className="hidden sm:block leading-none">
            <p className="text-white font-black text-lg">Ouirani</p>
            <p className="text-amber-400 text-xs font-bold tracking-widest uppercase">Cars</p>
          </div>
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
                  ? "text-amber-400 bg-amber-500/10"
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
            <Phone className="h-4 w-4 text-amber-400" />
            {PHONE}
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-3 py-2 rounded-lg transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <Button asChild size="sm" className="bg-amber-500 hover:bg-amber-400 text-white">
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
            <div className="mb-8 mt-2 flex items-center gap-3">
              <Image src="/logo-gold.jpg" alt="Ouirani Cars" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-white font-black text-lg leading-none">Ouirani</p>
                <p className="text-amber-400 text-sm font-bold tracking-widest">CARS</p>
              </div>
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
                      ? "text-amber-400 bg-amber-500/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 space-y-3">
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-sm text-gray-300 px-4">
                <Phone className="h-4 w-4 text-amber-400" />
                {PHONE}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors w-full"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <Button asChild className="w-full bg-amber-500 hover:bg-amber-400 text-white">
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
