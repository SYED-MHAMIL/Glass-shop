import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import * as Icons from "lucide-react";
import { Phone, Menu, X, Clock, ShieldCheck, Award, Star, Siren, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Logo } from "@/components/site/Logo";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import heroImg from "@/assets/hero-houston.jpg";
import { business, navLinks, services, whyUs, gallery, galleryCategories, steps, reviews } from "@/data/business";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JN Glass & Mirror | 24-Hour Glass Service in Houston, TX" },
      { name: "description", content: "Houston's trusted glass & mirror experts. Windows, shower doors, mirrors, storefronts and railings. Open 24 hours — call 281-714-0745." },
      { property: "og:title", content: "JN Glass & Mirror | Houston Glass Experts" },
      { property: "og:description", content: "Commercial & residential glass service in Houston. Open 24 hours, free estimates." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const Icon = ({ name, className }: { name: string; className?: string }) => {
  const C = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Square;
  return <C className={className} aria-hidden />;
};

function Heading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold text-silver-gradient sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3">
        <Logo />
        <nav className="hidden gap-7 lg:flex" aria-label="Main">
          {navLinks.map((l) => <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition hover:text-foreground focus-visible:text-foreground">{l.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="glow" className="hidden sm:inline-flex"><a href={business.phoneHref}><Phone /> Call Now</a></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background/95 px-4 pb-6 lg:hidden" aria-label="Mobile">
          {navLinks.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-border py-3 font-medium">{l.label}</a>)}
          <Button asChild variant="glow" className="mt-4 w-full"><a href={business.phoneHref}><Phone /> Call {business.phone}</a></Button>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <img src={heroImg} alt="Houston skyline at night" className="absolute inset-0 h-full w-full object-cover" width={1024} height={1024} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/75 to-background" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 text-center">
        <div className="animate-fade-up">
          <p className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-silver">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Open 24 Hours · Emergency Service
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-silver-gradient sm:text-6xl lg:text-7xl">Houston's Trusted Glass & Mirror Experts</h1>
          <p className="mt-6 text-lg text-silver sm:text-xl">Commercial & Residential | 24-Hour Service</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild variant="glow" size="lg" className="h-12 px-8 text-base"><a href="#contact">Get a Free Quote</a></Button>
            <Button asChild variant="silver" size="lg" className="h-12 px-8 text-base"><a href={business.phoneHref}><Phone /> Call {business.phone}</a></Button>
          </div>
        </div>
        <div className="animate-fade-up mx-auto mt-14 grid max-w-3xl gap-3 sm:grid-cols-3" style={{ animationDelay: "200ms" }}>
          {[[Clock, "24/7 Service"], [ShieldCheck, "Licensed & Insured"], [Award, "Quality Guaranteed"]].map(([I, t]) => {
            const C = I as Icons.LucideIcon;
            return <div key={t as string} className="glass flex items-center justify-center gap-3 rounded-xl px-4 py-3"><C className="text-primary" aria-hidden /><span className="font-semibold">{t as string}</span></div>;
          })}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-24">
      <Heading eyebrow="What We Do" title="Glass Services for Every Space" sub="From custom showers to full storefronts, we handle it all with precision." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <article className="glass hover-lift h-full rounded-2xl p-7">
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-primary/15 text-primary"><Icon name={s.icon} className="h-7 w-7" /></div>
              <h3 className="mb-2 text-xl font-bold text-silver">{s.title}</h3>
              <p className="text-muted-foreground">{s.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/50 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 p-8 shadow-glow sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Siren className="h-12 w-12 shrink-0 text-primary" aria-hidden />
            <div><h3 className="text-2xl font-extrabold text-silver-gradient">24-Hour Emergency Glass Service</h3><p className="text-silver">Broken window or storefront? We respond day or night across Houston.</p></div>
          </div>
          <Button asChild variant="glow" size="lg" className="mt-6 h-12 sm:mt-0"><a href={business.phoneHref}><Phone /> {business.phone}</a></Button>
        </div>
      </Reveal>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="bg-card/40 py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Heading eyebrow="Why Choose Us" title="Built on Trust, Finished with Care" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 70}>
              <div className="flex gap-4 rounded-2xl p-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-primary/40 text-primary shadow-glow"><Icon name={w.icon} className="h-5 w-5" /></div>
                <div><h3 className="text-lg font-bold text-silver">{w.title}</h3><p className="text-muted-foreground">{w.text}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [cat, setCat] = useState<string>("All");
  const [active, setActive] = useState<number | null>(null);
  const items = cat === "All" ? gallery : gallery.filter((g) => g.category === cat);
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 py-24">
      <Heading eyebrow="Our Work" title="Recent Projects" />
      <div className="mb-8 flex flex-wrap justify-center gap-2" role="tablist">
        {galleryCategories.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${cat === c ? "bg-primary text-primary-foreground shadow-glow" : "glass text-muted-foreground hover:text-foreground"}`}>{c}</button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {items.map((g, i) => (
          <button key={g.src} onClick={() => setActive(i)} className="group relative aspect-square overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-3 text-left text-xs font-semibold text-silver opacity-0 transition group-hover:opacity-100">{g.category}</span>
          </button>
        ))}
      </div>
      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl border-border bg-background p-2">
          <DialogTitle className="sr-only">{active !== null ? items[active]?.alt : "Photo"}</DialogTitle>
          {active !== null && items[active] && <img src={items[active].src.replace("w=900", "w=1600")} alt={items[active].alt} className="max-h-[80vh] w-full rounded-lg object-contain" />}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="bg-card/40 py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Heading eyebrow="Simple Process" title="How It Works" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="glass hover-lift h-full rounded-2xl p-6 text-center">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-primary font-display text-xl font-extrabold text-primary-foreground shadow-glow">{i + 1}</div>
                <h3 className="mb-2 font-bold text-silver">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-4 py-24">
      <Heading eyebrow="Testimonials" title="What Houston Says" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 80}>
            <figure className="glass hover-lift flex h-full flex-col rounded-2xl p-6">
              <div className="mb-4 flex gap-1 text-primary" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" aria-hidden />)}</div>
              <blockquote className="flex-1 text-foreground/90">"{r.text}"</blockquote>
              <figcaption className="mt-5"><p className="font-bold text-silver">{r.name}</p><p className="text-xs text-muted-foreground">{r.place}</p></figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-card/40 py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Heading eyebrow="Contact" title="Let's Talk About Your Project" sub="Free estimates. Fast response. Available 24 hours a day." />
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal><ContactForm /></Reveal>
          <Reveal delay={150} className="flex flex-col gap-4">
            <a href={business.phoneHref} className="glass hover-lift flex items-center gap-4 rounded-2xl p-6">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow"><Phone aria-hidden /></div>
              <div><p className="text-sm text-muted-foreground">Call us any time</p><p className="font-display text-2xl font-extrabold text-silver">{business.phone}</p></div>
            </a>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass flex items-center gap-3 rounded-2xl p-5"><Clock className="text-primary" aria-hidden /><span className="font-semibold">{business.hours}</span></div>
              <a href={`mailto:${business.email}`} className="glass flex items-center gap-3 rounded-2xl p-5"><Mail className="text-primary" aria-hidden /><span className="truncate font-semibold">{business.email}</span></a>
            </div>
            <div className="glass min-h-72 flex-1 overflow-hidden rounded-2xl">
              <iframe title="Map of Houston, TX" src={business.mapEmbed} className="h-full min-h-72 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div><Logo /><p className="mt-4 text-sm text-muted-foreground">{business.tagline}</p></div>
        <div><h4 className="mb-4 font-bold text-silver">Quick Links</h4><ul className="space-y-2 text-sm text-muted-foreground">{navLinks.map((l) => <li key={l.href}><a href={l.href} className="hover:text-foreground">{l.label}</a></li>)}</ul></div>
        <div><h4 className="mb-4 font-bold text-silver">Services</h4><ul className="space-y-2 text-sm text-muted-foreground">{services.map((s) => <li key={s.title}>{s.title}</li>)}</ul></div>
        <div><h4 className="mb-4 font-bold text-silver">Contact</h4>
          <a href={business.phoneHref} className="flex items-center gap-2 font-semibold text-foreground hover:text-primary"><Phone className="h-4 w-4" aria-hidden /> {business.phone}</a>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground"><Clock className="h-4 w-4" aria-hidden /> {business.hours}</p>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" aria-hidden /> {business.location}</p>
        </div>
      </div>
      <p className="mt-12 text-center text-xs text-muted-foreground">© 2026 {business.name}. All rights reserved.</p>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main><Hero /><Services /><WhyUs /><Gallery /><HowItWorks /><Reviews /><Contact /></main>
      <Footer />
      <a href={business.phoneHref} aria-label={`Call ${business.phone}`} className="fixed bottom-5 right-5 z-50 grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow sm:hidden">
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" /><Phone className="relative h-7 w-7" />
      </a>
    </div>
  );
}
