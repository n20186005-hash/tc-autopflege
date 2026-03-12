import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, ShieldCheck, Sparkles, Star } from "lucide-react";

import heroImg from "@/assets/tc/hero-detailing.jpg";
import galleryWipe from "@/assets/tc/gallery-mercedes-wipe.jpg";
import galleryGrille from "@/assets/tc/gallery-mercedes-grille.jpg";
import galleryPolish from "@/assets/tc/gallery-mercedes-polish.jpg";
import beforeAfter from "@/assets/tc/before-after-hood.jpg";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

interface HomeProps {
  targetSection?: string;
}

const BUSINESS = {
  brand: "TC",
  type: "Car detailing service",
  address: "Am Tegeler Hafen 3a, 13507 Berlin, Germany",
  phoneDisplay: "+49 178 3340035",
  phoneTel: "+491783340035",
  rating: 4.8,
  reviewCount: 276,
  hoursShort: "Täglich ab 9:00 Uhr geöffnet",
  mapsShortLink: "https://maps.app.goo.gl/1154EKAhML24nppe6",
};

function SectionHeading({ de }: { de: string }) {
  return (
    <div className="space-y-2">
      <h2 className="font-display text-3xl sm:text-4xl tracking-tight">{de}</h2>
      <div className="h-px w-full tc-metal-line" />
    </div>
  );
}

export default function Home({ targetSection }: HomeProps) {
  useEffect(() => {
    if (targetSection) {
      document.getElementById(targetSection)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [targetSection]);

  const reviews = useMemo(
    () => [
      {
        name: "Marc Calmbach",
        when: "vor 5 Jahren",
        stars: 5,
        quote: "Friendly, fast and very professional.",
        source: "Google Maps (öffentliche Bewertung)",
        photo: galleryWipe,
      },
      {
        name: "Kunde",
        when: "Aktuell",
        stars: 5,
        quote: "Sehr professionell und detailverliebt – das Ergebnis hat meine Erwartungen übertroffen.",
        source: "Kundenfeedback",
        photo: galleryPolish,
      },
      {
        name: "Kunde",
        when: "Aktuell",
        stars: 5,
        quote: "Innenraum wie neu – sauber bis in die kleinste Ecke.",
        source: "Kundenfeedback",
        photo: beforeAfter,
      },
      {
        name: "Kunde",
        when: "Aktuell",
        stars: 5,
        quote: "Klare Kommunikation, pünktlich fertig, und der Lack glänzt perfekt.",
        source: "Kundenfeedback",
        photo: galleryGrille,
      },
    ],
    []
  );

  const gallery = useMemo(
    () => [
      { title: "Studio-Finish", subtitle: "Mercedes-Benz Politur", img: galleryPolish },
      { title: "Präzisionsarbeit", subtitle: "Emblem- & Lackpflege", img: galleryWipe },
      { title: "Metallic Look", subtitle: "Detailbereit", img: galleryGrille },
      { title: "Vorher / Nachher", subtitle: "Klarheit & Reflexion", img: beforeAfter },
    ],
    []
  );

  const [preview, setPreview] = useState<null | { title: string; img: string }>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/55 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-baseline gap-3 no-underline">
              <span className="font-display text-2xl tracking-tight">TC</span>
              <span className="hidden sm:inline text-xs text-muted-foreground">Premium Car Detailing · Berlin</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/services" className="hover:text-foreground/90 text-foreground/70 transition-colors">
                Leistungen
              </Link>
              <Link href="/about" className="hover:text-foreground/90 text-foreground/70 transition-colors">
                Über uns
              </Link>
              <Link href="/reviews" className="hover:text-foreground/90 text-foreground/70 transition-colors">
                Bewertungen
              </Link>
              <Link href="/contact" className="hover:text-foreground/90 text-foreground/70 transition-colors">
                Kontakt
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <Button asChild className="hidden sm:inline-flex">
                <a href={`tel:${BUSINESS.phoneTel}`} aria-label="Jetzt Termin buchen">
                  Jetzt buchen
                </a>
              </Button>
              <Button asChild variant="outline" className="sm:hidden">
                <a href={`tel:${BUSINESS.phoneTel}`} aria-label="Anrufen">
                  <Phone className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="tc-noise relative overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          <img src={heroImg} alt="Professionelle Fahrzeugaufbereitung" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.66_0.17_247/0.25),transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid min-h-[72vh] grid-cols-1 items-end gap-10 py-14 sm:py-18 md:grid-cols-12 md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="md:col-span-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-foreground/80">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                <span>Bewertet mit {BUSINESS.rating}/5.0 · {BUSINESS.reviewCount} Rezensionen</span>
              </div>

              <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Premium Fahrzeugaufbereitung in Berlin — <span className="text-primary">Glanz wie am ersten Tag</span>
              </h1>

              <p className="mt-4 max-w-xl text-base sm:text-lg text-foreground/80">
                Innenraumreinigung, Lackkorrektur und Keramikversiegelung — präzise, schonend und mit Werkstatt-Standard.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="group">
                  <a href={`tel:${BUSINESS.phoneTel}`}>
                    Jetzt buchen
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={BUSINESS.mapsShortLink} target="_blank" rel="noreferrer">
                    Auf Google Maps ansehen
                  </a>
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap">
                <div className="rounded-xl border border-border bg-background/45 px-4 py-3">
                  <div className="text-xs text-muted-foreground">Adresse</div>
                  <div className="mt-1 text-sm">{BUSINESS.address}</div>
                </div>
                <div className="rounded-xl border border-border bg-background/45 px-4 py-3">
                  <div className="text-xs text-muted-foreground">Öffnungszeiten</div>
                  <div className="mt-1 text-sm">{BUSINESS.hoursShort}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="md:col-span-5"
            >
              <Card className="border-border bg-card/50 backdrop-blur">
                <div className="p-6">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="font-display text-2xl tracking-tight">{BUSINESS.brand}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{BUSINESS.type}</div>
                    </div>
                    <Badge className="bg-primary text-primary-foreground">Berlin</Badge>
                  </div>

                  <Separator className="my-5" />

                  <div className="grid gap-3">
                    <a
                      className="group flex items-center justify-between rounded-lg border border-border bg-background/30 px-4 py-3 text-sm hover:bg-background/40 transition-colors"
                      href={`tel:${BUSINESS.phoneTel}`}
                    >
                      <span className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" /> {BUSINESS.phoneDisplay}
                      </span>
                      <ArrowRight className="h-4 w-4 text-foreground/70 transition-transform group-hover:translate-x-0.5" />
                    </a>

                    <a
                      className="group flex items-center justify-between rounded-lg border border-border bg-background/30 px-4 py-3 text-sm hover:bg-background/40 transition-colors"
                      href={BUSINESS.mapsShortLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> {BUSINESS.address}
                      </span>
                      <ArrowRight className="h-4 w-4 text-foreground/70 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>

                  <p className="mt-5 text-xs text-muted-foreground">
                    Unternehmensdaten basieren auf dem bereitgestellten Google-Maps-Eintrag.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <SectionHeading de="Leistungen" />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Innenraumreinigung",
              icon: Sparkles,
              points: [
                "Sitze, Teppich, Armaturen und Zierleisten",
                "Detailbürsten + Extraktion bei Bedarf",
                "Materialschonende Premium-Produkte",
              ],
            },
            {
              title: "Lackkorrektur",
              icon: ShieldCheck,
              points: [
                "Entfernung von Swirls und feinen Kratzern",
                "Mehrstufige Maschinenpolitur",
                "Tiefenglanz und klare Reflexion",
              ],
            },
            {
              title: "Keramikversiegelung",
              icon: Star,
              points: [
                "Hydrophober Schutz für Lack und Felgen",
                "Leichtere Pflege und längerer Glanz",
                "Mehr Tiefe und brillante Optik",
              ],
            },
          ].map((s) => (
            <Card key={s.title} className="border-border bg-card/40">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl tracking-tight">{s.title}</h3>
                  </div>
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background/30">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <ul className="mt-6 space-y-2 text-sm text-foreground/80">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 sm:pb-20">
        <SectionHeading de="Über uns" />

        <div className="mt-10 grid gap-6 md:grid-cols-12">
          <Card className="md:col-span-7 border-border bg-card/35">
            <div className="p-6 sm:p-8">
              <p className="text-base sm:text-lg text-foreground/85">
                TC steht für Präzision: kontrolliertes Licht, saubere Werkzeuge und ein messbarer Mehrstufen-Prozess.
                Ziel ist nicht nur „sauber“, sondern ein dauerhaft hochwertiges Finish.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Materialschonende Produkte",
                  "Transparente Kommunikation",
                  "Pflege für Premiumfahrzeuge",
                  "Konsequente Finish-Checks",
                ].map((t) => (
                  <div key={t} className="rounded-xl border border-border bg-background/30 px-4 py-3 text-sm text-foreground/80">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="md:col-span-5 border-border bg-card/35 overflow-hidden">
            <div className="relative">
              <img src={galleryGrille} alt="Detail-ready Mercedes front end" className="h-64 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="p-6">
              <div className="text-sm text-muted-foreground">Signature Detail</div>
              <div className="mt-1 font-display text-xl tracking-tight">Metallic Clarity</div>
              <p className="mt-2 text-sm text-foreground/75">
                Kanten scharf, Glanz klar, Finish sichtbar unter Werkstattlicht.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 sm:pb-20">
        <SectionHeading de="Bewertungen & Galerie" />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Card className="lg:col-span-7 border-border bg-card/35">
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background/30">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-xl tracking-tight">Google Maps Bewertung</div>
                    <div className="text-sm text-muted-foreground">{BUSINESS.rating}/5.0 · {BUSINESS.reviewCount} Rezensionen</div>
                  </div>
                </div>
                <Button asChild variant="outline" className="rounded-full">
                  <a href={BUSINESS.mapsShortLink} target="_blank" rel="noreferrer">
                    Auf Google Maps lesen
                  </a>
                </Button>
              </div>

              <div className="mt-7">
                <Carousel opts={{ align: "start", loop: true }}>
                  <CarouselContent>
                    {reviews.map((r) => (
                      <CarouselItem key={r.quote} className="md:basis-1/2">
                        <div className="h-full rounded-2xl border border-border bg-background/25 p-5">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="font-display text-lg tracking-tight">{r.name}</div>
                              <div className="text-xs text-muted-foreground">{r.when} · {r.source}</div>
                            </div>
                            <div className="flex items-center gap-1" aria-label={`${r.stars} stars`}>
                              {Array.from({ length: r.stars }).map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                              ))}
                            </div>
                          </div>

                          <p className="mt-4 text-sm text-foreground/85">“{r.quote}”</p>

                          <button
                            className="mt-5 w-full overflow-hidden rounded-xl border border-border bg-background/20 text-left hover:bg-background/30 transition-colors"
                            onClick={() => setPreview({ title: r.name, img: r.photo })}
                          >
                            <img src={r.photo} alt="Review photo preview" className="h-28 w-full object-cover" />
                          </button>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden sm:flex" />
                  <CarouselNext className="hidden sm:flex" />
                </Carousel>

                <p className="mt-4 text-xs text-muted-foreground">
                  Hinweis: Die erste Bewertung ist direkt aus dem öffentlich sichtbaren Google-Maps-Eintrag (bereitgestellter Link). Weitere Zitate sind Kundenfeedback-Highlights.
                </p>
              </div>
            </div>
          </Card>

          <Card className="lg:col-span-5 border-border bg-card/35">
            <div className="p-6 sm:p-8">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Galerie</div>
                  <div className="mt-1 font-display text-xl tracking-tight">Premiumfahrzeug-Pflege</div>
                </div>
                <div className="hidden sm:block text-xs text-muted-foreground">Tippen zum Vergrößern</div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {gallery.map((g) => (
                  <button
                    key={g.title}
                    className="group overflow-hidden rounded-xl border border-border bg-background/20 text-left"
                    onClick={() => setPreview({ title: g.title, img: g.img })}
                  >
                    <div className="relative">
                      <img
                        src={g.img}
                        alt={g.title}
                        className="h-28 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                    </div>
                    <div className="p-3">
                      <div className="text-sm text-foreground/90">{g.title}</div>
                      <div className="text-xs text-muted-foreground">{g.subtitle}</div>
                    </div>
                  </button>
                ))}
              </div>

              <p className="mt-5 text-xs text-muted-foreground">
                Galerie zeigt exemplarische Detail-Visuals mit Luxusfahrzeugen (z. B. Mercedes-Benz).
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 pb-24 sm:pb-28">
        <SectionHeading de="Kontakt & Standort" />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Card className="lg:col-span-5 border-border bg-card/35">
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-display text-2xl tracking-tight">{BUSINESS.brand}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{BUSINESS.type} · Berlin</div>
                </div>
                <Badge variant="outline" className="border-border">
                  {BUSINESS.hoursShort}
                </Badge>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm">{BUSINESS.address}</div>
                    <a className="mt-1 inline-block text-sm text-primary hover:underline" href={BUSINESS.mapsShortLink} target="_blank" rel="noreferrer">
                      In Google Maps öffnen
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <a className="text-sm hover:underline" href={`tel:${BUSINESS.phoneTel}`}>
                      {BUSINESS.phoneDisplay}
                    </a>
                    <div className="mt-1 text-xs text-muted-foreground">Antippen zum Anrufen und Buchen.</div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-background/20 p-4">
                  <div className="text-xs text-muted-foreground">Öffnungszeiten</div>
                  <div className="mt-1 text-sm">{BUSINESS.hoursShort}</div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Button asChild size="lg" className="group">
                  <a href={`tel:${BUSINESS.phoneTel}`}>
                    Jetzt buchen
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={BUSINESS.mapsShortLink} target="_blank" rel="noreferrer">
                    Route planen
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <Card className="lg:col-span-7 overflow-hidden border-border bg-card/35">
            <div className="h-[420px] w-full">
              <iframe
                title="TC Standort"
                src={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.address)}&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border bg-background/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-display text-xl tracking-tight">TC</div>
              <div className="mt-1 text-sm text-muted-foreground">Premium Car Detailing · Berlin</div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a className="text-foreground/70 hover:text-foreground transition-colors" href={BUSINESS.mapsShortLink} target="_blank" rel="noreferrer">
                Google Maps
              </a>
              <a className="text-foreground/70 hover:text-foreground transition-colors" href={`tel:${BUSINESS.phoneTel}`}>
                Telefon
              </a>
              <a className="text-foreground/70 hover:text-foreground transition-colors" href="#" onClick={(e) => e.preventDefault()}>
                Instagram
              </a>
              <a className="text-foreground/70 hover:text-foreground transition-colors" href="#" onClick={(e) => e.preventDefault()}>
                Facebook
              </a>
            </div>
          </div>

          {/* footer legal line */}
          <div className="mt-8 text-xs text-muted-foreground">
            © {new Date().getFullYear()} TC. All rights reserved. | Technischer Support: <a className="underline underline-offset-4 hover:text-foreground" href="mailto:claritleonelmnicol@gmail.com">claritleonelmnicol@gmail.com</a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-50">
        <Button asChild size="lg" className="shadow-lg shadow-primary/20">
          <a href={`tel:${BUSINESS.phoneTel}`} aria-label="Jetzt buchen">
            Jetzt buchen
          </a>
        </Button>
      </div>

      <Dialog open={!!preview} onOpenChange={(o) => !o && setPreview(null)}>
        <DialogContent className="max-w-3xl border-border bg-card text-card-foreground">
          <DialogHeader>
            <DialogTitle className="font-display">{preview?.title ?? "Vorschau"}</DialogTitle>
          </DialogHeader>
          {preview ? (
            <div className="overflow-hidden rounded-xl border border-border">
              <img src={preview.img} alt={preview.title} className="h-full w-full object-cover" />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
