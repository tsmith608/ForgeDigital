export const metadata = { title: "Terms of Service — Forge Digital" };

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-zinc-100">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="text-sm text-zinc-400 mb-10">Last updated: {new Date().toLocaleDateString()}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Scope</h2>
      <p>These terms govern your use of our website and any proposals, quotes, or services we provide.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Proposals & payment</h2>
      <p>Quotes specify scope, timeline, and price. Deposits are non-refundable once work begins.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Content & IP</h2>
      <p>You own your content; we grant you a license to the deliverables upon full payment unless otherwise agreed.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Warranties</h2>
      <p>We deliver workmanlike services; no guarantee of specific rankings or leads.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Limitation of liability</h2>
      <p>To the maximum extent allowed by law, our liability is limited to fees paid for the specific service.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Governing law</h2>
      <p>Commonwealth of Pennsylvania, without regard to conflict of laws.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Contact</h2>
      <p><a className="underline" href="mailto:contactforgedigital@gmail.com">contactforgedigital@gmail.com</a></p>
    </main>
  );
}
