export async function GET() {
  const html = `
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Johnson's Heating & Cooling - Home</title>
<style type="text/css">
  body { background:#dcdcdc; margin:0; font-family: Arial, Helvetica, sans-serif; color:#000; }
  a { color:#003366; text-decoration:none; }
  a:hover { text-decoration:underline; }
  .wrap { width:980px; margin:0 auto; }
  .hdr { background:#003366 url('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==') repeat-x; color:#fff; }
  .hdr td { padding:10px; }
  .brand { font-size:28px; font-weight:bold; letter-spacing:1px; }
  .since { font-size:11px; }
  .callnow { font-size:22px; font-weight:bold; background:#ffcc66; color:#000; padding:6px 10px; border:2px ridge #cc9900; }
  .nav { background:#ffcc66; font-weight:bold; }
  .nav a { padding:10px 14px; display:inline-block; }
  .marq { background:#fff8e1; border-top:1px solid #f1d49a; border-bottom:1px solid #f1d49a; color:#663300; }
  .tbl { background:#f4f4f4; border-left:1px solid #bbb; border-right:1px solid #bbb; }
  .left { width:210px; background:#e9eef7; border-right:1px solid #c5d0e3; vertical-align:top; }
  .box { background:#ffffff; border:2px groove #c9c9c9; margin:10px; padding:10px; }
  .btn { display:block; background:linear-gradient(#ffffff,#e5eefc); border:2px outset #a9c1e6; padding:8px; margin:6px 0; text-align:center; font-weight:bold; }
  .btn:active { border:2px inset #a9c1e6; }
  .main { vertical-align:top; }
  .h1 { font-size:22px; font-weight:bold; color:#003366; border-bottom:2px solid #c5d0e3; padding-bottom:6px; }
  .blurb { font-size:14px; line-height:1.5; }
  .services td { border:1px solid #cccccc; background:#ffffff; padding:8px; }
  .footer { font-size:11px; color:#555; padding:10px; background:#ececec; border-top:1px solid #bbb; text-align:center; }
  .badge { font: bold 11px Verdana, sans-serif; background:#e8ffe8; border:1px solid #8dc98d; color:#1f5a1f; padding:3px 6px; display:inline-block; }
</style>
</head>
<body>
  <div class="wrap">
    <table class="hdr" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <div class="brand">JOHNSON'S HEATING & COOLING</div>
          <div class="since">Serving Our Community Since 1987 • Licensed & Insured</div>
        </td>
        <td align="right" valign="middle">
          <span class="callnow">CALL NOW: (555) 0134</span>
        </td>
      </tr>
    </table>

    <div class="nav">
      <a href="#">HOME</a>
      <a href="#">SERVICES</a>
      <a href="#">SPECIALS</a>
      <a href="#">ABOUT</a>
      <a href="#">CONTACT</a>
    </div>

    <div class="marq">
      <marquee behavior="scroll" scrollamount="4" direction="left">
        24/7 EMERGENCY HEAT CALLS • SENIOR & VETERAN DISCOUNTS • FREE ESTIMATES ON NEW SYSTEMS
      </marquee>
    </div>

    <table class="tbl" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <!-- LEFT COLUMN -->
        <td class="left">
          <div class="box">
            <div style="font-weight:bold; color:#003366; margin-bottom:6px;">Request Service</div>
            <form>
              <input type="text" name="name" placeholder="Your Name" style="width:100%; margin:4px 0; padding:6px; border:1px solid #9bb3d8;">
              <input type="text" name="phone" placeholder="Phone" style="width:100%; margin:4px 0; padding:6px; border:1px solid #9bb3d8;">
              <textarea name="msg" rows="4" placeholder="Brief description" style="width:100%; margin:4px 0; padding:6px; border:1px solid #9bb3d8;"></textarea>
              <a href="#" class="btn">SUBMIT REQUEST</a>
            </form>
          </div>

          <div class="box">
            <div style="font-weight:bold; color:#003366; margin-bottom:6px;">Why Choose Us</div>
            <ul style="margin:0 0 0 18px; padding:0; font-size:13px;">
              <li>Family-Owned</li>
              <li>Fair Pricing</li>
              <li>We Service All Brands</li>
              <li>Fully Insured</li>
            </ul>
          </div>

          <div class="box" align="center">
            <div style="margin-bottom:6px;">Visitor Counter</div>
            <div style="font-family:'Courier New', monospace; font-weight:bold; background:#000; color:#0f0; padding:6px 10px; display:inline-block;">
              0001287
            </div>
          </div>
        </td>

        <!-- MAIN CONTENT -->
        <td class="main" style="padding:12px 14px;">
          <div class="h1">Welcome to Johnson's!</div>
          <div class="blurb">
            Honest work. Tidy installs. Systems that run right. From winter heat calls to summer AC,
            our friendly technicians keep your home comfortable without the runaround.
          </div>

          <table class="services" width="100%" cellpadding="6" cellspacing="0" style="margin-top:10px;">
            <tr>
              <td width="33%">
                <div style="font-weight:bold; color:#003366;">Furnaces & Boilers</div>
                Clean installs • Safety checks • Annual tune-ups
              </td>
              <td width="33%">
                <div style="font-weight:bold; color:#003366;">AC & Heat Pumps</div>
                SEER2 systems • Ducted & ductless • Quiet operation
              </td>
              <td width="33%">
                <div style="font-weight:bold; color:#003366;">Air Quality</div>
                Filters • Humidifiers • Fresh air systems
              </td>
            </tr>
          </table>

          <div style="margin-top:10px;">
            <span class="badge">FREE ESTIMATES</span>
            <span class="badge" style="background:#fff3e0; border-color:#f2c388; color:#7a4d00;">FINANCING AVAILABLE</span>
            <span class="badge" style="background:#eef3ff; border-color:#b9c9f0; color:#203c7a;">10-YR PARTS WARRANTY</span>
          </div>

          <div style="margin-top:14px; border:2px ridge #c9c9c9; background:#ffffff; padding:10px;">
            <div style="font-weight:bold; color:#003366; margin-bottom:6px;">Service Area</div>
            Metro & surrounding towns • Mon–Sat 8–6 • Emergency heat calls 24/7
          </div>

          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:14px;">
            <tr>
              <td align="center">
                <a href="tel:5550134" class="btn" style="font-size:18px; width:260px;">📞 CALL (555) 0134</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <div class="footer">
      © 1987–2025 Johnson's Heating & Cooling • 123 Main St • Mon–Sat 8–6
    </div>
  </div>
</body>
</html>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
}
