export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10 text-zinc-300">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs">
          © {new Date().getFullYear()} Forge Digital. All rights reserved.
        </p>
        <nav className="flex items-center gap-6 text-xs">
          <a href="/privacy" className="hover:text-amber-300">Privacy Policy</a>
          <a href="/terms" className="hover:text-amber-300">Terms of Service</a>
          <a href="/legal" className="hover:text-amber-300">Legal & Disclosures</a>
        </nav>
      </div>
    </footer>
  );
}
