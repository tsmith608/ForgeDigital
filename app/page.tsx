"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Variants } from "framer-motion";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Handshake, Menu, X, ArrowRight, Wrench, Droplets, Hammer,
  Phone, Mail, MapPin, Clock, Play, Users, ShieldCheck, Sparkles
} from "lucide-react";

/** ---------- Helpers ---------- */
function useCounter(target: number, inView: boolean, duration = 1.2) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / (duration * 1000), 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, inView, duration]);
  return val;
}

export default function Home() {
  const [open, setOpen] = useState(false);               // mobile nav
  const [contactOpen, setContactOpen] = useState(false); // contact panel
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [sendState, setSendState] = useState<"idle"|"sending"|"ok"|"err">("idle");


  // simple fade-up helper for headings/paragraphs
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 1 },
    viewport: { once: true },
  });

  // Staggered grid + card variants (for "How We Help")
  const gridVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.18, delayChildren: 0.1 },
    },
  };
  const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 30,
    x: i % 2 === 0 ? -22 : 22,
    scale: 0.98,
  }),
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 90, damping: 16 },
  },
} satisfies Variants;

  // Close contact panel on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setContactOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => { if (contactOpen && panelRef.current) panelRef.current.focus(); }, [contactOpen]);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  return (
    <main className="relative min-h-screen text-white">
      {/* GLOBAL BACKGROUND (river.jpg) */}
      <div className="fixed inset-0 -z-10">
        <Image src="/nature/river.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX, transformOrigin: "0% 50%" }}
        className="fixed top-0 left-0 h-1 w-full bg-amber-400 z-[60]"
      />

      {/* STICKY BANNER / NAV */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-4 bg-black/30 backdrop-blur-md z-50">
        <a href="#top" className="flex items-center gap-2">
          <Handshake className="w-6 h-6 text-amber-400" />
          <span className="text-lg font-semibold tracking-wide">Forge Digital</span>
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-amber-400 transition">Services</a>
          <a href="#results" className="hover:text-amber-400 transition">Results</a>
          <a href="#demo" className="hover:text-amber-400 transition">Demo</a>
          <a href="#about" className="hover:text-amber-400 transition">About</a>
          <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
          <button
            onClick={() => setContactOpen(true)}
            className="bg-amber-400 text-black px-4 py-2 rounded-full hover:bg-amber-300 transition"
          >
            Get Started
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-black/90 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 text-lg"
          >
            {[
              { label: "Services", href: "#services" },
              { label: "Results", href: "#results" },
              { label: "Demo", href: "#demo" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="hover:text-amber-400 transition">
                {item.label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); setContactOpen(true); }}
              className="inline-flex items-center gap-2 bg-amber-400 text-black px-6 py-3 rounded-full hover:bg-amber-300 transition"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* FLOATING CONTACT PILL */}
      <button
        onClick={() => setContactOpen(true)}
        className="fixed bottom-6 right-6 z-40 shadow-lg rounded-full px-4 py-3 bg-amber-400 text-black font-semibold hover:bg-amber-300 transition md:bottom-8 md:right-8"
        aria-label="Open Contact Panel"
      >
        Contact • Get a Quote
      </button>

      {/* CONTACT PANEL */}
      
      <AnimatePresence>
        {contactOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setContactOpen(false)}
            />
            <motion.aside
              role="dialog" aria-modal="true" aria-label="Contact information and inquiry form"
              ref={panelRef} tabIndex={-1}
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-zinc-950 z-50 shadow-2xl border-l border-white/10 flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Handshake className="w-6 h-6 text-amber-400" />
                  <span className="font-semibold">Talk to Forge Digital</span>
                </div>
                <button onClick={() => setContactOpen(false)} className="p-2 rounded-lg hover:bg-white/10 transition" aria-label="Close contact panel">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 space-y-5">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-zinc-400">Call or text</p>
                    <a href="tel:+15709743189" className="font-medium hover:text-amber-400 transition">(570) 974-3189</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-zinc-400">Email</p>
                    <a href="mailto:contactforgedigital@gmail.com" className="font-medium hover:text-amber-400 transition">contactforgedigital@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-zinc-400">Address</p>
                    <p className="font-medium">220 Poplar Street<br/>Kane, PA 16735</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-zinc-400">Hours</p>
                    <p className="font-medium">Mon–Sun: 8am–8pm</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/10" />
              <form
                onSubmit={async (e) => {
                e.preventDefault();
                setSendState("sending");
                const formEl = e.currentTarget as HTMLFormElement;
                const data = new FormData(formEl);

                try {
                  const res = await fetch("/api/forge-inquiry", { method: "POST", body: data });

                  if (!res.ok) {
                    // read server error so you actually see why
                    const j = await res.json().catch(() => ({}));
                    throw new Error(j.error || `HTTP ${res.status}`);
                  }

                  setSendState("ok");
                  formEl.reset();

                  // optional: auto-clear success after a bit
                  setTimeout(() => setSendState("idle"), 4000);
                } catch (err) {
                  console.error("inquiry send failed:", err);
                  setSendState("err");
                }
              }}
                className="p-6 space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-zinc-400">Name</label>
                    <input name="name" required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm text-zinc-400">Phone</label>
                    <input name="phone" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400" placeholder="(555) 123-4567" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-zinc-400">Email</label>
                  <input type="email" name="email" required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="text-sm text-zinc-400">What do you need?</label>
                  <textarea name="message" rows={4} required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400" placeholder="Website refresh, new site, online booking, SEO…" />
                </div>

                {/* Honeypot (hidden) */}
                <input name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                <button
                  type="submit"
                  disabled={sendState === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 text-black font-semibold px-4 py-3 rounded-xl hover:bg-amber-300 disabled:opacity-60 transition"
                >
                  {sendState === "sending" ? "Sending…" : "Send Inquiry"}
                  <ArrowRight className="w-4 h-4" />
                </button>

                {sendState === "ok" && <p className="text-emerald-400 text-sm">Thanks — we’ll get back within one business day.</p>}
                {sendState === "err" && <p className="text-red-400 text-sm">Couldn’t send right now. Try again in a minute.</p>}
              </form>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section id="top" className="h-screen flex flex-col justify-center items-center text-center px-6 pt-24">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">Built for the Builders</h1>
          <p className="text-zinc-100 text-lg md:text-xl max-w-2xl mx-auto">
            Digital craftsmanship for family-owned and blue-collar businesses. Respect the trade. Show the local pride. Win more work.
          </p>
          <button onClick={() => setContactOpen(true)} className="mt-10 inline-flex items-center gap-2 bg-amber-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-amber-300 transition">
            Let’s Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>

      {/* WHY WEBSITE MATTERS */}
      <section className="py-32 text-center bg-black/35 backdrop-blur-sm">
        <motion.h2 {...fadeUp(0)} className="text-4xl font-bold mb-4">
          Why your website matters
        </motion.h2>
        <motion.p {...fadeUp(0.15)} className="text-zinc-200 max-w-2xl mx-auto mb-10">
          For better or worse, the first impression isn’t a handshake anymore—it’s your homepage.  
          A modern site brings in work while you’re still on the job.
        </motion.p>

        {/* 2x2 grid on small+ screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div {...fadeUp(0.5)} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-5xl font-extrabold tracking-tight mb-2">81%</div>
            <p className="text-zinc-300">of shoppers research online before choosing who to call.</p>
            <p className="text-xs text-zinc-400 mt-3">Source: Retail Dive Consumer Survey</p>
          </motion.div>
          
          <motion.div {...fadeUp(0.3)} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-5xl font-extrabold tracking-tight mb-2">76%</div>
            <p className="text-zinc-300">of people who search locally visit a business within a day.</p>
            <p className="text-xs text-zinc-400 mt-3">Source: Google Consumer Insights</p>
          </motion.div>
          
          <motion.div {...fadeUp(0.4)} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-5xl font-extrabold tracking-tight mb-2">75%</div>
            <p className="text-zinc-300">judge a company’s credibility by its web design.</p>
            <p className="text-xs text-zinc-400 mt-3">Source: Stanford Web Credibility Project</p>
          </motion.div>
          
          <motion.div {...fadeUp(0.2)} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-5xl font-extrabold tracking-tight mb-2">53%</div>
            <p className="text-zinc-300">of visitors leave if a site takes over 3 seconds to load.</p>
            <p className="text-xs text-zinc-400 mt-3">Source: Google / Think With Google</p>
          </motion.div>
        </div>
      </section>
      
      {/* HOW WE HELP */}
      <section id="services" className="py-32 px-6 md:px-20 text-center bg-black/35 backdrop-blur-sm">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-5xl font-bold mb-12">
          How We Help
        </motion.h2>

        <motion.div variants={gridVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-3 gap-10">
          {[
            { Icon: Wrench,  title: "Modern Websites", desc: "Clean, fast, and easy to use. We will get you online quickly and efficiently." },
            { Icon: Droplets, title: "Story & Trust",   desc: "Your crew, your mission, your story. We tell it with photos, motion, and simple words." },
            { Icon: Hammer,   title: "Support That Sticks", desc: "Updates, fixes, and a real person to call. No tickets to nowhere. We’ve got you." },
          ].map(({ Icon, title, desc }, i) => (
            <motion.div key={title} variants={cardVariants} custom={i} whileHover={{ y: -4, scale: 1.01 }} className="p-10 bg-white/10 rounded-2xl hover:bg-white/15 transition">
              <Icon className="w-10 h-10 text-amber-300 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-zinc-100 text-base leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      

      {/* LOGO MARQUEE */}
      <LogoMarquee />

      {/* BEFORE / AFTER SLIDER */}
      <BeforeAfter />

      {/* DEMO VIDEO */}
      <DemoVideo />

      {/* STORY / APPROACH */}
      <section className="py-40 px-6 md:px-32 text-center bg-black/30 backdrop-blur-sm">
        <motion.h2 {...fadeUp(0)} className="text-5xl font-bold mb-8">Websites that feel like hard work done right</motion.h2>
        <motion.p {...fadeUp(0.4)} className="text-zinc-100 text-lg max-w-3xl mx-auto leading-relaxed">
           We provide modern sites. Built for people who build.
          <br /><br />We focus on the install. You keep working.


        </motion.p>
      </section>

      {/* ABOUT US (new, before Contact) */}
      <section id="about" className="py-32 px-6 md:px-20 bg-black/30 backdrop-blur-sm">
        <motion.h2 {...fadeUp(0)} className="text-5xl font-bold text-center mb-4">About Us</motion.h2>
        <motion.p {...fadeUp(0.2)} className="text-center text-zinc-200 max-w-3xl mx-auto mb-12">
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <motion.div {...fadeUp(0.3)} className="p-8 rounded-2xl bg-white/10">
            <h3 className="text-2xl font-semibold mb-3">Our Approach</h3>
            <p className="text-zinc-200 leading-relaxed">
              Were a dedicated team, born and raised in rural Pennsylvania, that believes in modernizing blue-collar and family-owned businesses so they can attract more customers and simplify orders in the digital age. We think you deserve enterprise-level polish without corporate nonsense and inflated prices.
            </p>
          </motion.div>

          <motion.ul {...fadeUp(0.4)} className="grid sm:grid-cols-3 gap-6">
            <li className="p-6 rounded-2xl bg-white/10">
              <Users className="w-6 h-6 text-amber-300 mb-3" />
              <h4 className="font-semibold mb-1">Owner-Led</h4>
              <p className="text-zinc-200 text-sm">No cookie-cutter templates. Your ideas are welcome, and your design will be unique.</p>
            </li>
            <li className="p-6 rounded-2xl bg-white/10">
              <ShieldCheck className="w-6 h-6 text-amber-300 mb-3" />
              <h4 className="font-semibold mb-1">No Surprises</h4>
              <p className="text-zinc-200 text-sm">Clear scope, clear prices, continuous support.</p>
            </li>
            <li className="p-6 rounded-2xl bg-white/10">
              <Sparkles className="w-6 h-6 text-amber-300 mb-3" />
              <h4 className="font-semibold mb-1">Built to Last</h4>
              <p className="text-zinc-200 text-sm">Fast, accessible, and easy to update later.</p>
            </li>
          </motion.ul>
        </div>
      </section>

      




      {/* CONTACT (anchor + CTA opens panel) */}
      <section id="contact" className="py-32 text-center bg-black/30 backdrop-blur-sm">
        <motion.h2 {...fadeUp(0)} className="text-5xl font-bold mb-6">Ready to get started?</motion.h2>
        <motion.p {...fadeUp(0.3)} className="text-zinc-100 mb-10 max-w-xl mx-auto">
          We’ll modernize your site without the jargon or stress. You handle the craft — we’ll handle the clicks.
        </motion.p>
        <button onClick={() => setContactOpen(true)} className="inline-flex items-center gap-2 bg-amber-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-amber-300 transition">
          Open Contact Panel <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </main>
  );
}

/** ---------- Widgets ---------- */



// Logo marquee (looping)
function LogoMarquee() {
  const logos = [
    "Plumbers", "Electricians", "HVAC",
    "Landscaping", "Auto", "Cafes", "Salons", "Cleaners",
    "Notaries", "Contractors", "Roofers", "Masonry",
    "Painters", "Carpenters"
  ];

  // Duplicate once for seamless loop
  const loop = [...logos, ...logos];

  return (
    <section className="py-12 bg-black/30 backdrop-blur-sm overflow-hidden">
      <div
        className="whitespace-nowrap"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="inline-block animate-marquee">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="mx-8 inline-flex items-center gap-2 text-zinc-200/80"
            >
              <span className="w-2 h-2 rounded-full bg-amber-300 inline-block" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}



// Before / After slider (drag to reveal)
function BeforeAfter() {
  const [pos, setPos] = useState(50); // % of modern revealed
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  // drag handlers
  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current || !trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const clientX =
        (e as TouchEvent).touches?.[0]?.clientX ?? (e as MouseEvent).clientX;
      const x = Math.max(rect.left, Math.min(clientX, rect.right));
      setPos(Math.round(((x - rect.left) / rect.width) * 100));
    };
    const stop = () => (dragging.current = false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove as any);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, []);

  return (
    <section className="py-24 px-6 md:px-20 bg-black/35 backdrop-blur-sm">
      <h2 className="text-4xl font-bold text-center mb-8">Before &amp; After</h2>
      <p className="text-center text-zinc-200 mb-8">
        Slide to see just one example of how we can modernize your site and give you the polish you need.
      </p>

      <div
        ref={trackRef}
        className="relative max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden bg-black/40 border border-white/10 select-none touch-none"
        aria-label="Before and After comparison"
        role="region"
      >
        {/* OLD site = BASE layer */}
        <Image src="/ba-before.jpg" alt="Old site" fill className="object-cover" priority />

        {/* MODERN site = TOP overlay, clipped by width */}
        <div
          className="absolute inset-y-0 left-0"
          style={{ width: `${pos}%` }}
        >
          <Image
            src="/ba-after.jpg"
            alt="Modern site"
            fill
            className="object-cover pointer-events-none"
            priority
          />
        </div>

        {/* Handle + divider */}
        <div
          className="absolute inset-y-0"
          style={{ left: `${pos}%` }}
        >
          <div className="w-1 h-full bg-white/80 -translate-x-1/2" />
          <button
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-black rounded-full p-2 shadow focus:outline-none focus:ring-2 focus:ring-amber-400"
            style={{ left: 0 }}
            aria-label="Reveal modern site"
            role="slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={pos}
            onMouseDown={(e) => {
              e.preventDefault();
              dragging.current = true;
            }}
            onTouchStart={() => (dragging.current = true)}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 2));
              if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 2));
            }}
          >
            ↔
          </button>
        </div>

        {/* Optional range for fine control */}
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(parseInt(e.target.value, 10))}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/2 accent-amber-400"
          aria-label="Slider percentage"
        />
      </div>

      <div className="mt-8 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-amber-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-amber-300 transition"
        >
          Start My Upgrade
        </a>
        
      </div>
    </section>
  );
}

function DemoAutoplay() {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Try to play immediately (desktop). iOS will allow if muted+inline.
    el.play().catch(() => {});

    // Pause when scrolled off-screen
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!el) return;
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 bg-black/40">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <video
          ref={ref}
          className="absolute inset-0 w-full h-full object-cover"
          src="/demo.mp4"
          poster="/demo-poster.jpg"
          // Autoplay essentials:
          autoPlay
          muted={muted}
          playsInline
          loop
          preload="metadata"
          controls={false}
        >
          <source src="/demo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}


// Demo Video section (drop demo.mp4 or YouTube URL)
function DemoVideo() {
  return (
    <section id="demo" className="py-32 px-6 md:px-20 bg-black/30 backdrop-blur-sm">
      <h2 className="text-4xl font-bold text-center mb-4">See It in Action</h2>
      <p className="text-center text-zinc-200 mb-10">
        A quick peek at how we can build you a modern, lead-ready site from the ground up.
      </p>

      <DemoAutoplay />
    </section>
  );
}

