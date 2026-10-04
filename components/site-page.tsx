"use client";

import { useEffect, useState } from "react";
import { business, services } from "@/lib/business";

const nav = [["Acasă", "/"], ["Servicii", "/#servicii"], ["Despre mine", "/#despre"], ["Recenzii", "/#recenzii"], ["Întrebări", "/#intrebari"], ["Contact", "/#contact"]];
const googleReviewsUrl = "https://www.google.com/maps/place/Expert+Conta+Sibiu/@45.7699777,24.1314975,13z/data=!4m10!1m2!2m1!1sgeorgiana+contabil!3m6!1s0x474c676132ca14c1:0xb1f9aeae468d7eea!8m2!3d45.7770764!4d24.1786185!15sChJnZW9yZ2lhbmEgY29udGFiaWxaFCISZ2VvcmdpYW5hIGNvbnRhYmlskgEPYWNjb3VudGluZ19maXJt4AEA!16s%2Fg%2F11y7tzh71v?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D";
const curatedReviewGroups = [
  {
    title: "Comunicare clară",
    reviews: [
      { name: "Marius Șerb", date: "acum 6 luni", summary: "Apreciază răspunsurile rapide, explicațiile clare și faptul că actele și declarațiile sunt pregătite la timp." },
      { name: "Codoban Ioan", date: "acum un an", summary: "Pune accent pe explicațiile pe înțelesul antreprenorului, receptivitate și încrederea construită de la începutul colaborării." },
      { name: "Bianca Chiricescu", date: "acum un an", summary: "Spune că discuțiile și explicațiile au ajutat-o să înțeleagă mai bine partea financiară a afacerii." },
    ],
  },
  {
    title: "Promptitudine și soluții",
    reviews: [
      { name: "Ioana", date: "acum o săptămână", summary: "Relatează că o situație care o încurca de mult timp a fost clarificată și rezolvată rapid, cu soluții concrete." },
      { name: "Ligia Toader", date: "acum 4 zile", summary: "O recenzie recentă care evidențiază profesionalismul, operativitatea și amabilitatea." },
      { name: "Andra Mirmea", date: "acum un an", summary: "Apreciază rezolvarea rapidă a cerințelor și soluțiile clare, adaptate situației sale." },
    ],
  },
  {
    title: "Sprijin pentru afacere",
    reviews: [
      { name: "Laura Radu", date: "acum 11 luni", summary: "Povestește despre ajutorul primit la început de drum și răspunsurile utile pentru afacerea sa." },
      { name: "Ani Bny", date: "acum un an", summary: "Descrie sprijinul primit pentru a pune în ordine situații contabile rămase în urmă, cu răbdare și eficiență." },
      { name: "Lucian Ștefan · trupa CALEnDAR", date: "acum un an", summary: "Apreciază ajutorul oferit pentru teme contabile, fiscale și administrative, de la înființare până la închiderea unei firme." },
    ],
  },
  {
    title: "Rigoare și încredere",
    reviews: [
      { name: "Flavia Danciu", date: "acum un an", summary: "Subliniază organizarea, atenția la detalii și disponibilitatea de a explica lucrurile, care îi dau siguranță." },
      { name: "Maria Costea", date: "acum 7 luni", summary: "Descrie colaborarea ca fiind corectă și atentă la detalii, cu încredere în serviciile primite." },
      { name: "Mitra Maria", date: "acum 7 luni", summary: "Apreciază profesionalismul, răbdarea și informațiile clare primite la timp." },
    ],
  },
];
const evaluationFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdtJ4TOSXFAGuImk-ruanFKHsNy1pfQAsGV_ZCO33mMRvd0tA/viewform?usp=publish-editor";
const mapEmbedUrl = "https://www.google.com/maps?q=Strada%20Cornel%20Medrea%2014%2C%20Selimbar%2C%20Romania&output=embed";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Strada+Cornel+Medrea+14%2C+Selimbar%2C+Romania";
const faqs = [
  ["Cât costă serviciile de contabilitate?", "Costul se stabilește în funcție de tipul activității, volumul documentelor, TVA și numărul de angajați. Scrie-ne pe WhatsApp pentru o evaluare potrivită firmei tale."],
  ["Pot schimba contabilul dacă firma mea este deja activă?", "Da. Te ajutăm să facem tranziția organizat, cu documentele și informațiile necesare pentru continuitate."],
  ["Lucrați și cu PFA-uri?", "Da, lucrăm cu PFA-uri, întreprinderi individuale, cabinete și SRL-uri."],
  ["Oferiți servicii de salarizare?", "Da. Pregătim statele de plată, documentele de personal și declarațiile aferente."],
  ["Mă puteți ajuta cu înființarea unui SRL?", "Da. Îți explicăm opțiunile și te ghidăm în pașii de înființare pentru SRL, PFA, II sau ONG."],
  ["Cum transmit documentele contabile?", "Prin canale digitale, într-un mod simplu și stabilit împreună la începutul colaborării."],
  ["Lucrați doar cu firme din Sibiu?", "Nu. Colaborăm cu firme din toată România, inclusiv la distanță, printr-un flux digital de documente și comunicare."],
];

function WhatsApp({ children, className = "", message = "Bună ziua! Aș dori mai multe informații despre serviciile Expert Conta Sibiu." }: { children: React.ReactNode; className?: string; message?: string }) {
  return <a className={`button ${className}`} href={`${business.whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" data-event="whatsapp_click">{children} <span aria-hidden>↗</span></a>;
}

function SocialLinks({ className = "social-links hero-socials" }: { className?: string }) {
  const tiktokPath = "M15.8 3c.3 2.2 1.5 3.7 3.6 4.1v3.1c-1.3 0-2.5-.4-3.6-1.1v6.4a5.3 5.3 0 1 1-4.6-5.2v3.2a2.2 2.2 0 1 0 1.5 2.1V3h3.1Z";
  return <div className={className} aria-label="Urmărește Expert Conta Sibiu"><a href={business.socials.facebook} target="_blank" rel="noreferrer" aria-label="Expert Conta Sibiu pe Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#1877F2" d="M13.7 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V11H8v3h2.5v8h3.2Z" /></svg><span>Facebook</span></a><a href={business.socials.instagram} target="_blank" rel="noreferrer" aria-label="Expert Conta Sibiu pe Instagram"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><defs><linearGradient id="instagram-gradient" x1="3" y1="21" x2="21" y2="3"><stop stopColor="#FEDA75"/><stop offset=".45" stopColor="#FA7E1E"/><stop offset=".7" stopColor="#D62976"/><stop offset="1" stopColor="#4F5BD5"/></linearGradient></defs><rect x="3" y="3" width="18" height="18" rx="5" stroke="url(#instagram-gradient)" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="url(#instagram-gradient)" strokeWidth="2"/><circle cx="17.3" cy="6.8" r="1.1" fill="#D62976"/></svg><span>Instagram</span></a><a href={business.socials.tiktok} target="_blank" rel="noreferrer" aria-label="Expert Conta Sibiu pe TikTok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d={tiktokPath} fill="#25F4EE" transform="translate(-.7 .7)"/><path d={tiktokPath} fill="#FE2C55" transform="translate(.7 -.7)"/><path d={tiktokPath} fill="#111"/></svg><span>TikTok</span></a></div>;
}

function PersistentBrand() {
  return <aside className="persistent-brand" aria-label="Expert Conta Sibiu și rețele sociale"><div className="persistent-brand-copy"><strong>{business.owner}</strong><span>„Cumpărați în câștig, vindeți în profit, dar niciodată pe 30 de arginți!”</span></div><a className="persistent-phone" href={business.phoneHref}>{business.phone}</a><SocialLinks className="social-links persistent-socials" /></aside>;
}

function Header() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const handler = () => setScrolled(scrollY > 14); addEventListener("scroll", handler); handler(); return () => removeEventListener("scroll", handler); }, []);
  return <header className={`header ${scrolled ? "header-scrolled" : ""}`}><a href="/" className="brand" aria-label="Expert Conta Sibiu - Acasă"><img src={business.logo} alt="Expert Conta Sibiu" /></a><nav className={open ? "nav nav-open" : "nav"} aria-label="Navigare principală">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<WhatsApp className="nav-cta">Discută pe WhatsApp</WhatsApp></nav><button className="menu" onClick={() => setOpen(!open)} aria-label="Deschide meniul" aria-expanded={open}><i></i><i></i></button></header>;
}

function LeadQualifier() {
  return <section className="qualifier" id="evaluare"><div className="qualifier-copy"><p className="eyebrow">FORMULAR DE EVALUARE</p><h2>Spune-ne câteva lucruri despre afacerea ta.</h2><p>Completează formularul și primim toate informațiile necesare pentru a pregăti o discuție utilă.</p><div className="progress"><span style={{ width: "100%" }} /></div><small>Răspunsurile ajung direct la Expert Conta Sibiu.</small></div><div className="question-card"><p className="question-number">01</p><h3>Începe evaluarea firmei tale.</h3><p className="form-card-copy">Îți ia doar câteva minute. Vei primi apoi o discuție adaptată nevoilor firmei tale.</p><a className="button continue" href={evaluationFormUrl} target="_blank" rel="noreferrer" data-event="evaluation_form_click">Completează formularul <span aria-hidden>↗</span></a></div></section>;
}

function CookieBanner() { const [visible, setVisible] = useState(false); useEffect(() => setVisible(!localStorage.getItem("ecs-cookie")), []); if (!visible) return null; return <aside className="cookies" aria-label="Preferințe cookie"><strong>Preferințele tale contează</strong><p>Folosim cookie-uri necesare pentru funcționarea site-ului. Analiticele opționale rămân oprite până la acord.</p><div><button className="text-button" onClick={() => { localStorage.setItem("ecs-cookie", "necessary"); setVisible(false); }}>Doar necesare</button><button className="dark-button" onClick={() => { localStorage.setItem("ecs-cookie", "accepted"); setVisible(false); }}>Acceptă</button></div></aside> }

function GoogleMark() { return <span className="google-mark" aria-hidden="true">G</span>; }

export function SitePage() {
  useEffect(() => {
    const section = document.querySelector(".value");
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = section.querySelectorAll<HTMLElement>(".section-title, .value-card");
    section.classList.add("motion-ready");

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -24px 0px" });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return <><Header /><PersistentBrand /><main>
  <section className="hero"><SocialLinks /><div className="hero-copy reveal"><p className="eyebrow">EXPERT CONTABIL CECCAR · SERVICII ÎN TOATĂ ROMÂNIA</p><h1>Contabilitatea firmei tale, <em>în mâini sigure.</em></h1><div className="mobile-portrait"><img src={business.portrait} alt="Georgiana Nistor, expert contabil CECCAR" /></div><p className="lead">Mai puțină grijă pentru acte. Mai mult timp pentru afacerea ta.</p><p className="hero-motto">„Cumpărați în câștig, vindeți în profit, dar niciodată pe 30 de arginți!”</p><p className="intro">Servicii contabile pentru firme din întreaga țară. Colaborăm simplu, inclusiv la distanță, cu soluții clare, comunicare directă și peste 11 ani de experiență.</p><div className="hero-actions"><WhatsApp>Discută pe WhatsApp</WhatsApp><a href="#evaluare" className="secondary">Evaluează-ți firma <span>→</span></a></div><div className="hero-proof"><span><b>{business.years}</b> ani experiență</span><span><b>{business.companies}</b> firme gestionate</span><span><b>CECCAR</b> expert contabil</span></div></div></section>
  <section className="section value"><div className="section-title"><p className="eyebrow">CLARITATE PENTRU ANTREPRENORI</p><h2>Contabilitatea nu ar trebui să îți consume timpul.</h2><p>Ai nevoie de obligații respectate, răspunsuri clare și informații pe care să te poți baza.</p></div><div className="value-grid">{[["01", "Fără stres fiscal", "Respectarea obligațiilor fiscale și informare clară, la timp."], ["02", "Decizii mai bune", "Date financiare explicate într-un limbaj ușor de înțeles."], ["03", "Mai mult timp pentru afacere", "Documente și obligații gestionate fără să te pierzi în detalii."]].map(([n,t,d]) => <article key={n} className="value-card"><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  <section className="section services" id="servicii" aria-labelledby="services-title"><div className="services-intro"><div className="section-title"><p className="eyebrow">SERVICII</p><h2 id="services-title">Servicii complete pentru afacerea ta.</h2><p>Servicii contabile pentru firme din întreaga țară, adaptate volumului de lucru și specificului fiecărei activități.</p></div><figure className="services-photo"><img src="/georgiana-in-birou.png" alt="Georgiana Nistor la biroul Expert Conta Sibiu" width="1000" height="875" loading="lazy" /></figure></div><div className="service-grid">{services.map(([t,d,id], i) => <article className="service-card" key={id}><span>0{i + 1}</span><h3>{t}</h3><p>{d}</p><a href={`/#${id}`}>Află mai mult <b>→</b></a></article>)}</div><div className="service-details"><div className="service-details-heading"><p className="eyebrow">DETALII DESPRE SERVICII</p><h3>Cu ce te putem ajuta concret</h3></div>{services.map(([title, description, id, details], i) => <article className="service-detail" id={id} key={id}><span>0{i + 1}</span><div><h4>{title}</h4><p>{description}</p><ul>{details.map((item) => <li key={item}>{item}</li>)}</ul><WhatsApp message={`Bună ziua! Aș dori mai multe informații despre serviciul de ${title.toLowerCase()}.`}>Întreabă despre acest serviciu</WhatsApp></div></article>)}</div></section>
  <section className="about about-section" id="despre" aria-labelledby="about-title"><div className="about-heading"><p className="eyebrow">DESPRE MINE · GEORGIANA NISTOR</p><h2 id="about-title">Un partener pentru afacerea ta, nu doar un contabil.</h2></div><div className="about-single-image"><img src="/georgiana-despre.jpg" alt="Georgiana Nistor, expert contabil CECCAR" width="2187" height="3888" loading="lazy" /></div><div className="about-copy"><p>La Expert Conta Sibiu primești mai mult decât evidențe și declarații: primești un om care ascultă, explică și rămâne aproape de realitatea afacerii tale.</p><ul><li>Comunicare directă și atenție personală</li><li>Experiență de peste 11 ani</li><li>Calificare Expert Contabil CECCAR</li><li>Înțelegerea provocărilor antreprenoriale</li></ul><p className="signature">Georgiana Nistor</p><WhatsApp>Discută cu Georgiana</WhatsApp></div></section>
  <section className="section process process-with-photo" id="colaborare"><div className="section-title centered"><p className="eyebrow">COLABORARE FĂRĂ COMPLICAȚII</p><h2>Începem simplu.</h2></div><div className="process-layout"><figure className="process-context-photo"><img src="/georgiana-documente.jpg" alt="Georgiana Nistor lucrând la laptop" width="5184" height="3888" loading="lazy" /></figure><div className="timeline">{[["01", "Ne contactezi", "Ne scrii pe WhatsApp și ne spui câteva lucruri despre firma ta."], ["02", "Analizăm situația", "Evaluăm nevoile contabile și fiscale ale afacerii."], ["03", "Stabilim colaborarea", "Primești o soluție adaptată firmei tale."], ["04", "Ne ocupăm de contabilitate", "Tu te concentrezi pe business. Noi ne ocupăm de partea contabilă."]].map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
  <section className="section handover" id="schimbare-contabil"><div className="section-title split"><div><p className="eyebrow">SCHIMBI CONTABILUL?</p><h2>Începem cu o discuție clară, fără presiune.</h2></div><p>Preluarea depinde de situația fiecărei firme. Îți explicăm pașii și stabilim împreună ce informații sunt necesare.</p></div><div className="handover-grid"><article className="handover-card handover-steps"><p className="eyebrow">CUM FUNCȚIONEAZĂ</p><h3>O tranziție organizată</h3><ol><li><span>01</span><div><strong>Înțelegem situația</strong><p>Ne spui ce tip de firmă ai și ce ai vrea să se schimbe.</p></div></li><li><span>02</span><div><strong>Clarificăm documentele</strong><p>Stabilim ce informații și documente sunt necesare pentru preluare.</p></div></li><li><span>03</span><div><strong>Agreăm pașii următori</strong><p>Discutăm responsabilitățile și momentul de la care putem începe.</p></div></li></ol></article><article className="handover-card"><p className="eyebrow">OFERTĂ POTRIVITĂ FIRMEI</p><h3>Ce influențează tariful?</h3><ul><li>Volumul și tipul documentelor</li><li>Activitatea firmei și regimul de TVA</li><li>Numărul de angajați și serviciile de salarizare</li><li>Servicii suplimentare de care ai nevoie</li></ul><p className="handover-note">Îți prezentăm o ofertă după ce înțelegem volumul și nevoile firmei.</p></article><article className="handover-card handover-checklist"><p className="eyebrow">PENTRU PRIMA DISCUȚIE</p><h3>Ce e util să ai în minte</h3><ul><li>Forma firmei și domeniul de activitate</li><li>Un volum aproximativ de documente</li><li>Dacă ai angajați sau ești plătitor de TVA</li><li>Întrebările sau problemele pe care vrei să le clarifici</li></ul><p className="handover-note">Nu trebuie să pregătești dosarul complet înainte să ne contactezi.</p></article></div><div className="handover-cta"><p>Ai întrebări despre situația firmei tale?</p><WhatsApp message="Bună ziua! Mă interesează preluarea contabilității firmei mele și aș dori să discutăm pașii și oferta potrivită." >Discută despre preluare</WhatsApp></div></section>
  <LeadQualifier />
  <section className="section reviews curated-reviews" id="recenzii"><div className="section-title split"><div><p className="eyebrow">RECENZII GOOGLE</p><h2>Ce apreciază <em>clienții</em></h2><p>12 recenzii selectate și grupate după temele care revin cel mai des.</p></div><a className="google-reviews-summary" href={googleReviewsUrl} target="_blank" rel="noreferrer"><GoogleMark /><b>5,0</b><span>★★★★★</span><small>· Citește recenziile pe Google</small></a></div><p className="review-summary-note">Rezumat al recenziilor publicate pe Google. Deschide profilul pentru textele originale.</p><div className="review-categories">{curatedReviewGroups.map((group) => <section className="review-category" key={group.title}><h3>{group.title}</h3><div className="real-reviews">{group.reviews.map((review) => <a className="review-card" key={review.name} href={googleReviewsUrl} target="_blank" rel="noreferrer" aria-label={`Deschide recenziile Google pentru ${review.name}`}><div className="review-stars" aria-label="5 din 5 stele">★★★★★</div><p>{review.summary}</p><div className="reviewer"><span className="reviewer-avatar initials" aria-hidden="true">{review.name.split(/[\s·]+/).filter(Boolean).map((part) => part[0]).join("").slice(0, 2).toUpperCase()}</span><span><strong>{review.name}</strong><small>Recenzie Google · {review.date}</small></span><span className="review-source"><GoogleMark /></span></div></a>)}</div></section>)}</div></section>
  <section className="industries"><div className="industries-head"><div><p className="eyebrow">AFACERI DIN MAI MULTE DOMENII</p><h2>Înțelegem felul în care lucrezi.</h2></div><p>Lucrăm cu firme din întreaga Românie, din Sibiu și Șelimbăr până la București, Cluj, Constanța, Galați, Brașov, Timișoara și Vâlcea.</p></div><div className="industries-grid">{["E-commerce", "Servicii", "Cabinete", "Construcții", "HoReCa", "Transport", "Freelanceri", "Consultanță", "Magazine", "Start-up-uri"].map((name) => <a href="#contact" key={name}><strong>{name}</strong><b aria-hidden>↗</b></a>)}</div><div className="industries-foot"><span>Un partener pentru activitatea ta</span><a href="#contact">Nu îți vezi domeniul? Hai să discutăm <b>→</b></a></div></section>
  <section className="resources" id="resurse"><div className="resources-title"><p className="eyebrow">RESURSE UTILE</p><h2>Acces rapid la instituțiile importante.</h2><p>Linkuri directe către surse oficiale pe care antreprenorii le folosesc frecvent.</p></div><div className="resource-grid">{[
    ["ANAF", "Cod fiscal", "https://static.anaf.ro/static/10/Anaf/legislatie/Cod_fiscal_norme_2023.htm", "https://expertcontasibiu.ro/wp-content/uploads/2025/03/694be298-ad6e-4374-9737-c2818b9397ba.jpg"],
    ["Codul muncii", "Legislație muncii", "https://www.inspectiamuncii.ro/legislatie", "https://expertcontasibiu.ro/wp-content/uploads/2025/03/845c4909-f47f-4b7c-9b1e-40c4ed0eac95.jpg"],
    ["ONRC", "Registrul Comerțului", "https://www.onrc.ro/index.php/ro/", "https://expertcontasibiu.ro/wp-content/uploads/2025/04/anaf-sibiui.jpg"],
  ].map(([title, description, href, image]) => <a className="resource-card" href={href} target="_blank" rel="noreferrer" key={title}><img src={image} alt={`${title} – resursă oficială`} /><span className="resource-overlay"><small>{description}</small><strong>{title}</strong><b aria-hidden>↗</b></span></a>)}</div></section>
  <section className="section faq" id="intrebari"><div className="section-title split"><div><p className="eyebrow">ÎNTREBĂRI FRECVENTE</p><h2>Răspunsuri clare, de la început.</h2></div><p>Nu găsești răspunsul? Scrie-ne direct pe WhatsApp.</p></div><div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
  <section className="final-cta"><div className="final-cta-copy"><p className="eyebrow">EXPERT CONTA SIBIU</p><h2>Ai nevoie de un contabil pe care te poți baza?</h2><p>Scrie-ne câteva detalii despre afacerea ta și discutăm despre cea mai potrivită soluție.</p><div><WhatsApp>Discută pe WhatsApp</WhatsApp><a className="secondary light" href={business.phoneHref} data-event="phone_click">Sună acum <span>→</span></a></div></div></section>
  <section className="location" id="contact" aria-labelledby="contact-title"><div className="location-map"><iframe title="Harta către Expert Conta Sibiu" src={mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><div className="location-copy"><p className="eyebrow">CONTACT</p><h2 id="contact-title">Hai să discutăm despre firma ta.</h2><p>Suntem în Șelimbăr, aproape de Sibiu. Te primim cu drag, cu o programare în prealabil.</p><img className="location-portrait" src="/georgiana-colaborare.jpg" alt="Georgiana Nistor, persoana cu care discuți despre contabilitatea firmei tale" width="5184" height="3888" loading="lazy" /><address className="location-details"><div><small>ADRESĂ</small><strong>{business.address}</strong><span>{business.addressNote}</span></div><div><small>TELEFON</small><a href={business.phoneHref}>{business.phone}</a><span>{business.hours}</span></div><div><small>EMAIL</small><a href={`mailto:${business.email}`}>{business.email}</a><a href={`mailto:${business.emailAlt}`}>{business.emailAlt}</a></div></address><div className="location-actions"><a className="button" href={mapsUrl} target="_blank" rel="noreferrer">Deschide harta <span aria-hidden>↗</span></a><WhatsApp className="location-whatsapp">Scrie pe WhatsApp</WhatsApp></div></div></section>
</main><footer><div><img src={business.logo} alt="Expert Conta Sibiu"/><p>Servicii profesionale de contabilitate, fiscalitate și salarizare pentru firme din întreaga Românie.</p></div><div><a href="/#servicii">Servicii</a><a href="/#despre">Despre mine</a><a href="/#contact">Contact</a><a href={business.socials.facebook} target="_blank" rel="noreferrer">Facebook</a><a href={business.socials.instagram} target="_blank" rel="noreferrer">Instagram</a><a href={business.socials.tiktok} target="_blank" rel="noreferrer">TikTok</a><a href="/confidentialitate">Politica de confidențialitate</a></div><small>© 2026 Expert Conta Sibiu. Toate drepturile rezervate.</small></footer><a className="floating-whatsapp" href={business.whatsapp} aria-label="Deschide WhatsApp" target="_blank" rel="noreferrer">◔</a><div className="mobile-actions"><a href={business.phoneHref}>Sună</a><a href={business.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div><CookieBanner /></> }
