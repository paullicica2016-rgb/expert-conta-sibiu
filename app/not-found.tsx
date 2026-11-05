export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", textAlign: "center", padding: "24px" }}>
      <div>
        <h1 style={{ fontSize: "clamp(2.5rem,8vw,4.5rem)", marginBottom: 12 }}>Pagina nu a fost găsită</h1>
        <p style={{ marginBottom: 28 }}>Linkul pe care l-ai accesat nu mai există sau a fost mutat.</p>
        <a className="button" href="/">Înapoi la pagina principală</a>
      </div>
    </main>
  );
}
