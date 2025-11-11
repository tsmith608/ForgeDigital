export async function GET() {
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Maple Grove Heating & Air — Honest Work. Fair Prices.</title>
<style>
  :root{
    --bg:#f6f8fb; --paper:#ffffff; --ink:#102a43; --muted:#5b6676;
    --blue:#1f6fd6; --blue-2:#0f56aa; --orange:#f59e0b; --line:#e6edf7;
    --shadow:0 10px 18px rgba(16,42,67,.06), 0 3px 8px rgba(16,42,67,.05);
  }
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:var(--bg);color:var(--ink)}
  a{text-decoration:none;color:inherit}
  .wrap{max-width:1120px;margin:0 auto;padding:20px}

  /* Header */
  .top{display:flex;align-items:center;justify-content:space-between;padding:10px 0}
  .brand{display:flex;gap:12px;align-items:center}
  .logo{width:42px;height:42px;border-radius:12px;box-shadow:inset 0 0 0 1px #cfe3ff;background:
    radial-gradient(70% 70% at 30% 30%, #fff 0 40%, #e9f1ff 41% 100%),
    linear-gradient(135deg,#4c8df0,#1f6fd6)}
  .title{font-weight:800;letter-spacing:.2px}
  .since{font-size:12px;color:var(--muted)}
  .cta{display:flex;gap:10px}
  .btn{background:var(--blue);color:#fff;padding:10px 14px;border-radius:10px;font-weight:800;border:1px solid #1656a8;box-shadow:var(--shadow)}
  .btn.ghost{background:#fff;border:1px solid var(--line);color:var(--ink);box-shadow:none}

  /* Hero */
  .hero{border-radius:16px;overflow:hidden;background:linear-gradient(180deg,#ffffff,#f8fbff);}
  .hero-head{padding:26px 26px 0;border-bottom:1px solid var(--line);background:
    radial-gradient(600px 140px at 10% -20%, #dbe9ff 0, transparent 70%),
    radial-gradient(600px 140px at 90% -30%, #ffe8c7 0, transparent 70%)}
  .nav{display:flex;gap:18px;font-weight:700;color:#173e75}
  .nav a{padding:8px 0}

  .hero-body{display:grid;grid-template-columns:1.25fr 1fr;gap:22px;padding:26px}
  .kicker{color:#1f6fd6;font-weight:700;letter-spacing:.14em;text-transform:uppercase;font-size:12px}
  h1{margin:8px 0 10px 0;font-size:clamp(34px,5.5vw,56px);line-height:1.08}
  .sub{color:var(--muted);font-size:18px;max-width:720px}
  .badges{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px}
  .pill{display:inline-flex;gap:8px;align-items:center;background:#f1f6ff;border:1px solid #dce8ff;color:#17457a;padding:6px 10px;border-radius:999px;font-size:12px}

  .photo-card{position:relative;border-radius:14px;overflow:hidden;border:1px solid var(--line);box-shadow:var(--shadow);background:#fff}
  .photo-wrap{position:relative;width:100%;padding-bottom:70%;}
  .photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
  .photo-cap{position:absolute;left:10px;bottom:10px;background:#ffffffea;border:1px solid #e7eef9;padding:6px 10px;border-radius:999px;font-size:12px;color:#234}
  .trust-stamp{position:absolute;right:10px;top:10px;background:#fff7ed;border:1px solid #ffe3b6;color:#8a5a07;padding:6px 10px;border-radius:999px;font-size:12px}

  /* Quote box */
  .right{background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:16px;box-shadow:var(--shadow)}
  .right h3{margin:0 0 6px 0}
  .note{color:var(--muted);font-size:12px;margin-top:6px}
  .form input,.form textarea{width:100%;padding:10px;border:1px solid #d9e2ef;border-radius:10px;margin-top:8px;background:#fff}
  .form button{width:100%;margin-top:10px}

  /* Services */
  .section{margin-top:22px}
  .grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
  .card{background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:16px}
  .card h3{margin:4px 0 6px 0}
  .list{display:grid;gap:8px;color:var(--muted)}

  /* Footer */
  .foot{color:#6b7280;text-align:center;font-size:12px;padding:20px}
  @media (max-width:900px){ .hero-body{grid-template-columns:1fr} .grid3{grid-template-columns:1fr} }
</style>
</head>
<body>
  <div class="wrap">
    <header class="top">
      <div>
        <div class="brand">
          <div class="logo" aria-hidden="true"></div>
          <div>
            <div class="title">Johnsons Heating & Air</div>
            <div class="since">Family-owned • Licensed & Insured • Since 1994</div>
          </div>
        </div>
      </div>
      <div class="cta">
        <a class="btn ghost" href="#">Schedule Online</a>
        <a class="btn" href="tel:5550134">Call 555-0134</a>
      </div>
    </header>

    <section class="hero">
      <div class="hero-head">
        <nav class="nav">
          <a href="#">Home</a><a href="#">Services</a><a href="#">Financing</a><a href="#">About</a><a href="#">Contact</a>
        </nav>
      </div>

      <div class="hero-body">
        <div>
          <div class="kicker">Install • Repair • Maintenance</div>
          <h1>Warm winters. Cool summers. Friendly folks.</h1>
          <p class="sub">Straight talk, tidy work, and fair pricing. We show up when we say, and we stand behind every job.</p>
          <div class="badges">
            <span class="pill">✔ Same-day heat calls</span>
            <span class="pill">✔ Senior & military discounts</span>
            <span class="pill">✔ 10-yr parts warranty</span>
            <span class="pill">✔ Financing available</span>
          </div>
        </div>

        <!-- Hero photo using /hvac.jpg -->
        <aside class="photo-card">
          <div class="photo-wrap">
            <img class="photo" src="/hvac.jpg" alt="HVAC technician smiling while servicing a unit" loading="eager" decoding="async" />
          </div>
          <div class="trust-stamp">4.9★ Neighbor-approved</div>
          <div class="photo-cap">Local, friendly, and on time</div>
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="grid3">
        <div class="card">
          <h3>Furnaces & Boilers</h3>
          <ul class="list">
            <li>High-efficiency replacements</li>
            <li>Clean, safe installs</li>
            <li>Annual tune-ups</li>
          </ul>
        </div>
        <div class="card">
          <h3>AC & Heat Pumps</h3>
          <ul class="list">
            <li>Quiet, efficient systems</li>
            <li>Ducted & ductless</li>
            <li>SEER2 compliant</li>
          </ul>
        </div>
        <div class="card">
          <h3>Air Quality</h3>
          <ul class="list">
            <li>Whole-home filtration</li>
            <li>Humidifiers & dehumidifiers</li>
            <li>Fresh air systems</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="card">
        <h3 style="margin:0 0 6px 0">Why neighbors choose us</h3>
        <ul class="list">
          <li>Real windows, text-ahead on the way.</li>
          <li>Clear menu pricing—no surprises.</li>
          <li>We register warranties and keep your service records handy.</li>
        </ul>
      </div>
    </section>

    <footer class="foot">© Johnsons Heating & Air • 123 Main St, Maple Grove • Mon–Sat 8–6 • Emergency heat calls 24/7</footer>
  </div>
</body>
</html>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
}
