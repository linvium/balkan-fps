import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { ProgramHighlights } from "@/components/home/ProgramHighlights";
import { WelcomeStatCards } from "@/components/home/WelcomeStatCards";
import { WelcomeEventGrid } from "@/components/home/WelcomeEventGrid";
import heroImg from "@/assets/home-hero-plums.png";

const btnRegistration =
  "inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-white px-5 py-2.5 text-xs font-semibold text-primary shadow-soft transition hover:bg-white/95";

const HASHTAG_SOCIAL_URL = "https://www.instagram.com/explore/tags/balkanfps2027/";

const SYMPOSIUM_EMAIL = "balkanfps2027@agro.unibl.org";
const CHAIR_ADDRESS = "Bulevar vojvode Petra Bojovića 1A, 78000 Banja Luka";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Balkan FPS 2027 — VI Symposium on Fruit Production Systems" },
      {
        name: "description",
        content:
          "VI Balkan Symposium on Fruit Production Systems — Banja Luka, 31 Aug–3 Sep 2027. Science, growers, and industry in the heart of the Balkans.",
      },
      { property: "og:title", content: "VI Balkan Symposium on Fruit Production Systems" },
      {
        property: "og:description",
        content: "Banja Luka, 31 Aug–3 Sep 2027. Join us.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO — full viewport; plum photo keeps brighter right side for fruit, text on left */}
      <section className="relative flex min-h-svh overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Ripe plums on the branch in an orchard"
            width={1920}
            height={1080}
            className="h-full w-full object-cover object-[56%_center] lg:object-[52%_center]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/58 to-primary/22"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15"
            aria-hidden
          />
        </div>

        <div className="relative z-10 flex w-full flex-1 items-center">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl text-primary-foreground drop-shadow-[0_1px_2px_rgb(0_0_0/0.35)]"
            >
              <div className="inline-flex flex-col items-start gap-1.5 rounded-2xl border border-accent/45 bg-accent/15 px-4 py-2.5 text-left md:px-5 md:py-3">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-primary-foreground/85 md:text-xs md:tracking-[0.22em]">
                  Under the aegis of
                </p>
                <p className="inline-flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs font-medium uppercase tracking-[0.14em] text-accent md:text-sm md:tracking-[0.18em]">
                  <Sparkles className="h-3.5 w-3.5 shrink-0 md:h-4 md:w-4" aria-hidden />
                  <a
                    href="https://ishs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 hover:underline"
                  >
                    ISHS
                  </a>
                  <span className="text-primary-foreground/50" aria-hidden>
                    —
                  </span>
                  <a
                    href="https://ishs.org/scientific-structure/dfru-temperate-tree-fruits/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 hover:underline"
                  >
                    Division Temperate Tree Fruits
                  </a>
                </p>
              </div>
              <h1 className="mt-5 font-display text-2xl leading-[1.1] text-balance md:mt-6 md:text-3xl lg:text-4xl">
                VI Balkan Symposium on Fruit Production Systems
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/90 md:mt-5 md:text-base">
                Where science, growers, and industry come together in the heart of the Balkans to
                shape the future of sustainable fruit production.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/registration" className={btnRegistration}>
                  Registration
                </Link>
                <a
                  href={HASHTAG_SOCIAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary-foreground/12 px-5 py-2.5 text-xs font-semibold text-primary-foreground ring-1 ring-primary-foreground/25 backdrop-blur-sm transition hover:bg-primary-foreground/20"
                >
                  #BalkanFPS2027
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary/80">
              Welcome
            </p>
            <h2 className="mt-3 font-display text-2xl leading-tight text-foreground md:text-3xl lg:text-4xl">
              A meeting point of fruit science, innovation, and the spirit of the Balkans.
            </h2>
            <div className="mt-8 space-y-5 text-left text-sm leading-relaxed text-foreground/85 hyphens-auto md:text-justify md:text-base md:leading-relaxed">
              <p>
                The VI Balkan Symposium on Fruit Production Systems is the region’s leading
                scientific conference dedicated to advancing modern fruit production. Over four
                days, researchers, professionals, and growers from around the world will come
                together to exchange knowledge on genetics, physiology, orchard management, and
                fruit quality.
              </p>
              <p>
                Through four core scientific sessions and plenary lectures by distinguished
                international experts, the symposium creates a dynamic platform for dialogue,
                collaboration, and the exchange of ideas.
              </p>
              <p>
                Beyond the scientific programme, the event offers a welcoming environment for
                networking and connection, enriched by carefully designed activities that reflect
                the region’s tradition and hospitality. Participants will have the opportunity to
                experience local flavours, informal gatherings, and technical visits to leading
                fruit-growing operations in Republika Srpska.
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <WelcomeEventGrid />
          </div>

          <div className="lg:col-span-12">
            <WelcomeStatCards />
            <div className="mt-8 max-w-fit rounded-2xl bg-primary px-6 py-4 text-primary-foreground shadow-elevated">
              <p className="text-sm uppercase tracking-[0.18em] text-accent">Save the date</p>
              <p className="font-display text-lg">31 Aug – 03 Sep 2027</p>
            </div>
          </div>
        </div>
      </section>

      <ProgramHighlights />

      {/* CONVENERS */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary/80">
              Conveners
            </p>
            <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
              Symposium chairs
            </h2>
            <p className="mt-4 text-left text-sm text-muted-foreground hyphens-auto md:text-justify md:text-base">
              University of Banja Luka, Faculty of Agriculture — host of the VI Balkan Symposium on
              Fruit Production Systems.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              {
                name: "Prof. Dr. Miljan Cvetković",
                org: "University of Banja Luka, Faculty of Agriculture",
                addr: CHAIR_ADDRESS,
                phone: "+387 51 330 938",
                personalEmail: "miljan.cvetkovic@agro.unibl.org",
              },
              {
                name: "Prof. Dr. Boris Pašalić",
                org: "University of Banja Luka, Faculty of Agriculture",
                addr: CHAIR_ADDRESS,
                phone: null,
                personalEmail: "boris.pasalic@agro.unibl.org",
              },
            ].map((p) => (
              <div
                key={p.name}
                className="rounded-3xl border border-border bg-card p-8 shadow-soft"
              >
                <h3 className="font-display text-xl text-foreground">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.org}</p>
                <dl className="mt-6 space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{p.addr}</span>
                  </div>
                  {p.phone && (
                    <div className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{p.phone}</span>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
                          Symposium
                        </p>
                        <a
                          href={`mailto:${SYMPOSIUM_EMAIL}`}
                          className="mt-1 inline-block font-medium text-primary underline-offset-4 hover:underline"
                        >
                          {SYMPOSIUM_EMAIL}
                        </a>
                      </div>
                      <div>
                        <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
                          Direct
                        </p>
                        <a
                          href={`mailto:${p.personalEmail}`}
                          className="mt-1 inline-block text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                        >
                          {p.personalEmail}
                        </a>
                      </div>
                    </div>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-5 text-center lg:px-8">
          <h2 className="font-display text-xl leading-tight text-balance md:text-2xl lg:text-3xl">
            Ready to submit your work?
          </h2>
          <p className="max-w-2xl text-sm text-primary-foreground/85 md:text-base">
            Abstracts are submitted through the ROSA system until 20 November 2026. Early-bird
            registration is open until 31 December 2026.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/abstracts"
              className="inline-flex items-center gap-2 rounded-full bg-abstract-cta px-6 py-2.5 text-xs font-semibold text-white shadow-soft transition hover:translate-y-[-1px] hover:bg-abstract-cta-hover"
            >
              Submit abstract
            </Link>
            <Link
              to="/dates"
              className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-2.5 text-xs font-medium text-primary-foreground backdrop-blur hover:bg-primary-foreground/20"
            >
              View all dates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
