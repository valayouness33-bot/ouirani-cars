"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="bg-gray-900 border-b border-white/5 py-12">
        <div className="container mx-auto px-4">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Contact
          </p>
          <h1 className="text-4xl font-extrabold text-white mb-2">
            Contactez-nous
          </h1>
          <p className="text-gray-400">
            Notre équipe répond dans l'heure durant les heures d'ouverture.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Nos coordonnées</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    title: "Adresse",
                    lines: ["Boulevard Mohammed V", "Agadir 80000, Maroc"],
                  },
                  {
                    icon: Phone,
                    title: "Téléphone / WhatsApp",
                    lines: ["+212 6 00 00 00 00"],
                    link: "tel:+212600000000",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    lines: ["contact@ouranicars.ma"],
                    link: "mailto:contact@ouranicars.ma",
                  },
                  {
                    icon: Clock,
                    title: "Horaires",
                    lines: ["Lun – Sam : 08h00 – 20h00", "Dim : 09h00 – 18h00", "Assistance 24h/24 par téléphone"],
                  },
                ].map(({ icon: Icon, title, lines, link }) => (
                  <div key={title} className="flex gap-4 p-4 bg-gray-900 border border-white/5 rounded-xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 shrink-0">
                      <Icon className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">
                        {title}
                      </p>
                      {lines.map((line, i) =>
                        link && i === 0 ? (
                          <a
                            key={i}
                            href={link}
                            className="text-white font-medium hover:text-orange-400 transition-colors block"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={i} className="text-white font-medium">
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-900 border border-white/5 rounded-2xl overflow-hidden h-56 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Boulevard Mohammed V, Agadir</p>
                <a
                  href="https://maps.google.com/?q=Agadir+Boulevard+Mohammed+V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 text-sm hover:text-orange-300 mt-1 inline-block"
                >
                  Voir sur Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h2>

            {submitted ? (
              <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-10 text-center">
                <CheckCircle2 className="h-14 w-14 text-green-400 mx-auto mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">Message envoyé !</h3>
                <p className="text-gray-400">
                  Merci {name}, nous vous répondrons très rapidement.
                </p>
                <Button
                  variant="ghost"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-orange-400 hover:text-orange-300"
                >
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-1.5 block">Nom complet *</label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Ahmed Benali"
                      className="bg-gray-800 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-1.5 block">Téléphone</label>
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+212 6 XX XX XX XX"
                      className="bg-gray-800 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-orange-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1.5 block">Email *</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="votre@email.com"
                    className="bg-gray-800 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1.5 block">Message *</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Décrivez votre demande, dates souhaitées, type de véhicule..."
                    rows={5}
                    className="w-full rounded-lg bg-gray-800 border border-white/10 text-white placeholder:text-gray-600 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-400 text-white h-12"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer le message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
