import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Confidențialitate | Expert Conta Sibiu",
  description: "Informații despre preferințele de cookie și serviciile externe folosite pe site-ul Expert Conta Sibiu.",
};

export default function ConfidentialitatePage() {
  return (
    <main className="privacy-page">
      <a className="privacy-back" href="/">← Înapoi la pagina principală</a>
      <p className="eyebrow">EXPERT CONTA SIBIU</p>
      <h1>Confidențialitate</h1>
      <p className="privacy-updated">Informații despre datele prelucrate prin acest site.</p>

      <section>
        <h2>Preferințe de cookie</h2>
        <p>Site-ul salvează în memoria locală a browserului alegerea făcută în bannerul de cookie-uri, pentru a nu-l afișa din nou la fiecare vizită. Această preferință rămâne pe dispozitivul tău.</p>
        <p>În versiunea actuală a site-ului nu sunt activate instrumente de analiză a traficului. Dacă acestea vor fi adăugate, informațiile și opțiunile vor fi actualizate aici.</p>
      </section>

      <section>
        <h2>Servicii externe</h2>
        <p>Unele funcții trimit vizitatorul către servicii externe, precum Google Maps, Google Forms, WhatsApp și rețele sociale. Dacă alegi să le folosești, furnizorii respectivi pot prelucra date conform propriilor politici de confidențialitate.</p>
        <p>Formularul de evaluare este găzduit de Google Forms. Datele completate acolo sunt trimise către formular, nu sunt stocate în acest site.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Pentru întrebări despre confidențialitate sau solicitări privind datele tale, contactează {business.name} la <a href={`mailto:${business.email}`}>{business.email}</a> sau la <a href={business.phoneHref}>{business.phone}</a>.</p>
      </section>

      <p className="privacy-note">Această pagină descrie funcționarea tehnică actuală a site-ului. Informațiile despre datele transmise prin servicii externe sunt stabilite și de politicile furnizorilor respectivi.</p>
    </main>
  );
}
