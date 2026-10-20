import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formular de evaluare a societății | Expert Conta Sibiu",
  description: "Completează formularul de evaluare și primești o discuție adaptată nevoilor contabile ale firmei tale.",
};

const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdtJ4TOSXFAGuImk-ruanFKHsNy1pfQAsGV_ZCO33mMRvd0tA/viewform";

export default function EvaluarePage() {
  return (
    <main className="privacy-page evaluation-page">
      <a className="privacy-back" href="/#evaluare">← Înapoi la pagina principală</a>
      <p className="eyebrow">EXPERT CONTA SIBIU</p>
      <h1>Formular de evaluare a societății</h1>
      <p className="privacy-updated">Îți ia doar câteva minute. Răspunsurile ajung direct la Expert Conta Sibiu.</p>
      <iframe className="evaluation-iframe" title="Formular de evaluare a societății" src={`${formUrl}?embedded=true`} loading="lazy">Se încarcă…</iframe>
      <p className="privacy-note">Dacă formularul nu se încarcă, îl poți completa direct <a href={formUrl} target="_blank" rel="noreferrer">pe Google Forms</a>.</p>
    </main>
  );
}
