export const metadata = { title: "Privacy Policy — Forge Digital" };

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-zinc-100">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-zinc-400 mb-10">Last updated: {new Date().toLocaleDateString()}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">What we collect</h2>
      <p>Contact details you submit (name, email, phone), and basic analytics (pages visited, device, referrer).</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">How we use it</h2>
      <p>To reply to inquiries, provide quotes, deliver services, improve the site, and meet legal obligations.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Sharing</h2>
      <p>We don’t sell your data. We use trusted vendors (hosting, email, analytics) bound by contracts.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Data retention</h2>
      <p>Inquiry data is kept as long as needed for service and recordkeeping; analytics per vendor default.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Your rights</h2>
      <p>Request access, correction, or deletion by emailing <a className="underline" href="mailto:contactforgedigital@gmail.com">contactforgedigital@gmail.com</a>.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Cookies</h2>
      <p>We use essential cookies and minimal analytics. You can block cookies in your browser settings.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Contact</h2>
      <p>Forge Digital, 220 Poplar Street, Kane, PA 16735 • (570) 974-3189</p>
    </main>
  );
}
