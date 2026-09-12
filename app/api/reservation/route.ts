import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const formId = process.env.FORMSPREE_ID;

    if (!formId) {
      return NextResponse.json({ success: false, error: "Formspree non configuré" }, { status: 500 });
    }

    const res = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `🚗 Nouvelle réservation — ${body.carName} — ${body.name}`,
        Voiture: body.carName,
        Client: body.name,
        Téléphone: body.phone,
        Email: body.email || "Non renseigné",
        "Date prise en charge": body.pickupDate,
        "Date retour": body.returnDate,
        Durée: `${body.days} jour(s)`,
        Lieu: body.pickupLocation,
        "Total estimé": `${body.total}€`,
      }),
    });

    if (res.ok) {
      return NextResponse.json({ success: true });
    } else {
      const err = await res.json();
      return NextResponse.json({ success: false, error: err }, { status: 400 });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
