import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { carName, pickupDate, returnDate, pickupLocation, name, phone, email, days, total } =
      await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const locationLabels: Record<string, string> = {
      agence: "Agence Ouirani Cars — Agadir Centre",
      aeroport: "Aéroport Al Massira — Agadir",
      hotel: "Livraison à l'hôtel (+50 MAD)",
      adresse: "Adresse personnalisée (+100 MAD)",
    };

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #111827; color: #fff; border-radius: 12px; overflow: hidden;">
        <div style="background: #f97316; padding: 24px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; color: white;">🚗 Nouvelle Réservation</h1>
          <p style="margin: 4px 0 0; color: rgba(255,255,255,0.8);">Ouirani Cars — Agadir</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #9ca3af; font-size: 14px;">Voiture</td>
              <td style="padding: 10px 0; color: #fff; font-weight: bold; font-size: 16px;">${carName}</td>
            </tr>
            <tr style="border-top: 1px solid #374151;">
              <td style="padding: 10px 0; color: #9ca3af; font-size: 14px;">Client</td>
              <td style="padding: 10px 0; color: #fff; font-weight: bold;">${name}</td>
            </tr>
            <tr style="border-top: 1px solid #374151;">
              <td style="padding: 10px 0; color: #9ca3af; font-size: 14px;">Téléphone</td>
              <td style="padding: 10px 0; color: #f97316; font-weight: bold; font-size: 16px;">
                <a href="tel:${phone}" style="color: #f97316;">${phone}</a>
              </td>
            </tr>
            ${email ? `<tr style="border-top: 1px solid #374151;">
              <td style="padding: 10px 0; color: #9ca3af; font-size: 14px;">Email</td>
              <td style="padding: 10px 0; color: #fff;">${email}</td>
            </tr>` : ""}
            <tr style="border-top: 1px solid #374151;">
              <td style="padding: 10px 0; color: #9ca3af; font-size: 14px;">Prise en charge</td>
              <td style="padding: 10px 0; color: #fff;">${pickupDate}</td>
            </tr>
            <tr style="border-top: 1px solid #374151;">
              <td style="padding: 10px 0; color: #9ca3af; font-size: 14px;">Retour</td>
              <td style="padding: 10px 0; color: #fff;">${returnDate}</td>
            </tr>
            <tr style="border-top: 1px solid #374151;">
              <td style="padding: 10px 0; color: #9ca3af; font-size: 14px;">Durée</td>
              <td style="padding: 10px 0; color: #fff;">${days} jour${days > 1 ? "s" : ""}</td>
            </tr>
            <tr style="border-top: 1px solid #374151;">
              <td style="padding: 10px 0; color: #9ca3af; font-size: 14px;">Lieu</td>
              <td style="padding: 10px 0; color: #fff;">${locationLabels[pickupLocation] ?? pickupLocation}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; background: #1f2937; border-radius: 10px; padding: 20px; text-align: center;">
            <p style="margin: 0 0 4px; color: #9ca3af; font-size: 13px;">Total estimé</p>
            <p style="margin: 0; font-size: 32px; font-weight: 900; color: #f97316;">${total}€</p>
          </div>
          <div style="margin-top: 24px; text-align: center;">
            <a href="https://wa.me/212613612850?text=Bonjour+${encodeURIComponent(name)}%2C+votre+réservation+${encodeURIComponent(carName)}" 
               style="display: inline-block; background: #16a34a; color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: bold;">
              💬 Répondre sur WhatsApp
            </a>
          </div>
        </div>
        <div style="background: #1f2937; padding: 16px; text-align: center; font-size: 12px; color: #6b7280;">
          Ouirani Cars — Faabi, Rue 115 Dakhla, Agadir 80000 — +212613612850
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Ouirani Cars" <${process.env.GMAIL_USER}>`,
      to: "ouiranicars@gmail.com",
      subject: `🚗 Nouvelle réservation — ${carName} — ${name}`,
      html: htmlBody,
      replyTo: email || undefined,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ success: false, error: "Erreur envoi email" }, { status: 500 });
  }
}
