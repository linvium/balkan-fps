import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mic,
  CalendarDays,
  FlaskConical,
  Sprout,
  Activity,
  Tractor,
  Apple,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { cn } from "@/lib/utils";
import heroBg from "@/assets/page-heroes/program-bg.png";
import imgGregLang from "@/assets/speakers/greg-lang.png";
import imgJasminka from "@/assets/speakers/jasminka-milivojevic.png";
import imgMathewWhiting from "@/assets/speakers/mathew-whiting.png";
import imgFlorinStanica from "@/assets/speakers/florin-stanica.png";
import imgTomKon from "@/assets/speakers/tom-kon.png";
import imgJuanPabloZoffoli from "@/assets/cherry-plus/juan-pablo-zoffoli.png";

export const Route = createFileRoute("/program")({
  head: () => ({
    meta: [
      { title: "Programme — Balkan FPS 2027" },
      {
        name: "description",
        content:
          "Symposium programme and scientific sessions: agenda by day at the University of Banja Luka, plenary and invited lecturers, and four thematic sessions.",
      },
      { property: "og:title", content: "Programme — Balkan FPS 2027" },
      {
        property: "og:description",
        content:
          "Agenda, speakers, and scientific session themes — VI Balkan Symposium on Fruit Production Systems.",
      },
    ],
  }),
  component: ProgramPage,
});

type Slot = { time: string; title: string; desc?: string; highlight?: boolean };
type Day = { id: string; date: string; label: string; venue: string; slots: Slot[] };

const days: Day[] = [
  {
    id: "d1",
    date: "31 Aug 2027",
    label: "Day 1 · Opening",
    venue: "University of Banja Luka",
    slots: [
      { time: "14:00 – 15:00", title: "Registration" },
      { time: "15:00 – 17:00", title: "Opening ceremony", desc: "Welcome addresses and reception" },
      {
        time: "17:00 – 18:00",
        title: "Plenary lecture",
        // desc: "Greg Lang (Michigan State University)",
      },
      {
        time: "18:30 – 21:00",
        title: "The Balkans in a Bottle: A Tasting Experience",
        desc: "Tasting of regional wines and spirits paired with traditional appetisers.",
        highlight: true,
      },
    ],
  },
  {
    id: "d2",
    date: "1 Sep 2027",
    label: "Day 2 · Sessions 1 & 2",
    venue: "University of Banja Luka",
    slots: [
      {
        time: "09:00 – 12:30",
        title: "Session 1 — Genetic resources",
        desc: "KNS, oral and poster presentations",
      },
      {
        time: "12:30 – 16:30",
        title: "Session 2 — Fruit physiology",
        desc: "KNS, oral and poster presentations",
      },
      {
        time: "19:00 – 22:00",
        title: "River & Rhythm Night",
        desc: "Vrbas — traditional dajak boat ride at sunset, refreshments, and local atmosphere.",
        highlight: true,
      },
    ],
  },
  {
    id: "d3",
    date: "2 Sep 2027",
    label: "Day 3 · Sessions 3 & 4",
    venue: "University of Banja Luka",
    slots: [
      {
        time: "09:00 – 12:30",
        title: "Session 3 — Orchard management",
        desc: "KNS, oral and poster presentations",
      },
      {
        time: "12:30 – 16:30",
        title: "Session 4 — Fruit quality",
        desc: "KNS, oral and poster presentations",
      },
      { time: "19:30 – 23:30", title: "Gala dinner", highlight: true },
    ],
  },
  {
    id: "d4",
    date: "3 Sep 2027",
    label: "Day 4 · Technical tour",
    venue: "University of Banja Luka",
    slots: [
      {
        time: "08:00 – 17:30",
        title: "Technical tour",
        desc: "Visits to renowned fruit producers in the region, including both family-run orchards and large commercial fruit-growing companies. Lunch and coach transport included.",
      },
      {
        time: "18:00 – 21:00",
        title: "EEC Aleksandrovac",
        desc: "Experimental and Educational Center (EEC) of the Faculty of Agriculture – visit to experimental orchards with various fruit species and training systems.",
      },
    ],
  },
];

const dayPickerStyles = [
  {
    active:
      "border-sky-600 bg-sky-600 text-white shadow-md shadow-sky-900/15 ring-2 ring-sky-400/40 ring-offset-2 ring-offset-background",
    idle: "border-sky-400/45 bg-sky-500/[0.12] text-foreground hover:border-sky-500/55 hover:bg-sky-500/[0.18]",
    dateActive: "text-sky-100",
    dateIdle: "text-sky-900/70 dark:text-sky-200/80",
  },
  {
    active:
      "border-violet-600 bg-violet-600 text-white shadow-md shadow-violet-900/15 ring-2 ring-violet-400/35 ring-offset-2 ring-offset-background",
    idle: "border-violet-400/45 bg-violet-500/[0.12] text-foreground hover:border-violet-500/55 hover:bg-violet-500/[0.18]",
    dateActive: "text-violet-100",
    dateIdle: "text-violet-900/70 dark:text-violet-200/80",
  },
  {
    active:
      "border-amber-600 bg-amber-600 text-white shadow-md shadow-amber-900/15 ring-2 ring-amber-400/40 ring-offset-2 ring-offset-background",
    idle: "border-amber-400/50 bg-amber-500/[0.14] text-foreground hover:border-amber-500/60 hover:bg-amber-500/[0.2]",
    dateActive: "text-amber-100",
    dateIdle: "text-amber-950/75 dark:text-amber-100/85",
  },
  {
    active:
      "border-emerald-600 bg-emerald-600 text-white shadow-md shadow-emerald-900/15 ring-2 ring-emerald-400/35 ring-offset-2 ring-offset-background",
    idle: "border-emerald-500/45 bg-emerald-500/[0.12] text-foreground hover:border-emerald-500/55 hover:bg-emerald-500/[0.18]",
    dateActive: "text-emerald-100",
    dateIdle: "text-emerald-950/75 dark:text-emerald-100/85",
  },
] as const;

type IntroSpeaker = {
  name: string;
  affiliation: string;
  image?: string;
};

/** Order: Matthew, Juan Pablo, Jasminka, Florin, Tom */
const introSpeakers: IntroSpeaker[] = [
  {
    name: "Matthew Whiting",
    affiliation: "Washington State University, USA",
    image: imgMathewWhiting,
  },
  {
    name: "Juan Pablo Zoffoli",
    affiliation:
      "Pontificia Universidad Católica de Chile, Faculty of Agronomy and Natural Systems",
    image: imgJuanPabloZoffoli,
  },
  {
    name: "Jasminka Milivojević",
    affiliation: "University of Belgrade Faculty of Agriculture, Serbia",
    image: imgJasminka,
  },
  {
    name: "Florin Stănica",
    affiliation: "University of Agronomic Sciences and Veterinary Medicine of Bucharest, Romania",
    image: imgFlorinStanica,
  },
  {
    name: "Tom Kon",
    affiliation: "North Carolina State University, USA",
    image: imgTomKon,
  },
];

const subnavItems: { id: string; label: string; Icon: LucideIcon; pillClass: string }[] = [
  {
    id: "agenda",
    label: "Agenda",
    Icon: CalendarDays,
    pillClass:
      "border-primary/45 bg-primary/10 text-primary hover:bg-primary/[0.16] hover:border-primary/55",
  },
  {
    id: "scientific-sessions",
    label: "Scientific sessions",
    Icon: FlaskConical,
    pillClass:
      "border-violet-500/40 bg-violet-500/[0.1] text-violet-950 hover:bg-violet-500/[0.15] hover:border-violet-500/50 dark:text-violet-100",
  },
];

const sessions = [
  {
    n: "01",
    icon: Sprout,
    title: "Genetic resources, breeding and biotechnology",
    body: "This session welcomes contributions on fruit genetic resources, breeding strategies, and the application of advanced biotechnological and molecular tools in fruit science. Special emphasis is placed on the characterization, conservation, and utilization of germplasm, as well as the development of climate-resilient cultivars through modern genomic tools, phenotyping platforms, and innovative breeding approaches.",
    keywords:
      "germplasm, breeding, genetic diversity, molecular markers, genomics, phenotyping, biotechnology, climate resilience",
    stripeClass: "bg-gradient-to-b from-emerald-600 via-emerald-500/70 to-emerald-400/30",
    cardBorderClass: "border-emerald-500/30",
    iconBg: "bg-emerald-500/15 text-emerald-800 dark:text-emerald-200",
  },
  {
    n: "02",
    icon: Activity,
    title: "Fruit physiology and production systems",
    body: "This session focuses on plant physiological processes and their interaction with training systems, canopy architecture, and productivity in modern fruit growing. Contributions addressing innovative production approaches, precision horticulture, sensor-based monitoring, digital technologies, and strategies for improving resource-use efficiency and adaptation to climate change are particularly encouraged.",
    keywords:
      "physiology, light interception, canopy architecture, training systems, productivity, precision horticulture, sensors, digital tools, resource efficiency, climate adaptation",
    stripeClass: "bg-gradient-to-b from-sky-600 via-sky-500/70 to-sky-400/30",
    cardBorderClass: "border-sky-500/35",
    iconBg: "bg-sky-500/15 text-sky-800 dark:text-sky-200",
  },
  {
    n: "03",
    icon: Tractor,
    title: "Orchard management and sustainable practices",
    body: "This session covers modern orchard management practices, including pruning, nutrition, irrigation, crop load regulation, and integrated plant protection, with emphasis on sustainable and technology-driven solutions. Particular attention is given to integrated pest management (IPM), biological control, reduced pesticide use, resistance management, and environmentally friendly approaches. Topics may also include mechanization, digital agriculture, decision support systems, and integrated management strategies aimed at improving efficiency, reducing inputs, and enhancing overall orchard performance.",
    keywords:
      "pruning, nutrition, irrigation, crop load, plant protection, pest and disease management, IPM, biological control, reduced pesticides, resistance management, orchard systems, mechanization, digital agriculture, decision support systems, sustainable practices",
    stripeClass: "bg-gradient-to-b from-amber-600 via-amber-500/70 to-amber-400/30",
    cardBorderClass: "border-amber-500/40",
    iconBg: "bg-amber-500/15 text-amber-900 dark:text-amber-100",
  },
  {
    n: "04",
    icon: Apple,
    title: "Fruit quality, postharvest and innovation",
    body: "This session includes research on fruit quality, postharvest handling and storage, and processing, as well as the evaluation of nutritional and functional properties. In addition, contributions addressing economic aspects, value chains, market-oriented production, and innovative technologies in fruit production and commercialization are encouraged, including digitalization and new business models in the fruit sector.",
    keywords:
      "fruit quality, postharvest, storage, processing, bioactive compounds, food science, economics, value chain, digital agriculture, innovation",
    stripeClass: "bg-gradient-to-b from-rose-600 via-rose-500/70 to-rose-400/30",
    cardBorderClass: "border-rose-500/35",
    iconBg: "bg-rose-500/15 text-rose-900 dark:text-rose-100",
  },
] as const;

function ProgrammeSubnav() {
  return (
    <nav
      aria-label="On this page"
      className="scroll-mt-24 border-b border-border bg-background/95 py-4 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2 px-5 lg:px-8">
        {subnavItems.map((item) => {
          const Icon = item.Icon;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] shadow-soft transition",
                item.pillClass,
              )}
            >
              <Icon className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

function ProgramPage() {
  const [active, setActive] = useState(days[0].id);
  const day = days.find((d) => d.id === active)!;

  return (
    <>
      <PageHero
        backgroundImage={heroBg}
        eyebrow=""
        title="Programme & scientific sessions"
        description="Symposium agenda, invited lecturers, and four thematic sessions for contributed papers — connecting research with practice in Banja Luka."
      />

      <ProgrammeSubnav />

      <div id="agenda" className="scroll-mt-28">
        <section className="border-b border-border/60 bg-secondary/35 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">
              Introductory lecturers
            </p>
            <h2 className="mt-3 text-center font-display text-2xl text-foreground md:text-3xl">
              Plenary &amp; invited lecturers
            </h2>

            <motion.article
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45 }}
              className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/12 via-card to-card shadow-elevated"
            >
              <div className="grid gap-6 p-6 md:grid-cols-[minmax(0,280px)_1fr] md:items-center md:gap-10 md:p-10">
                <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl bg-muted md:mx-0">
                  <img
                    src={imgGregLang}
                    alt="Greg Lang, plenary lecturer"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    loading="eager"
                  />
                </div>
                <div className="text-center md:text-left">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground">
                    <Mic className="h-3.5 w-3.5" aria-hidden />
                    Plenary lecture
                  </span>
                  <h3 className="mt-4 font-display text-xl text-foreground md:text-2xl">
                    Greg Lang
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground">
                    Michigan State University, USA
                  </p>
                </div>
              </div>
            </motion.article>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {introSpeakers.map((k, i) => (
                <motion.article
                  key={k.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:shadow-elevated"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                    {k.image ? (
                      <img
                        src={k.image}
                        alt={`${k.name}`}
                        className="absolute inset-0 h-full w-full object-cover object-center"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-b from-primary/15 to-primary/5 p-4 text-center">
                        <span
                          className="font-display text-4xl font-semibold text-primary/35"
                          aria-hidden
                        >
                          JH
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg leading-snug text-foreground">{k.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {k.affiliation}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Programme by day
            </p>
            <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-3 lg:mx-0 lg:flex-wrap lg:px-0 lg:overflow-visible">
              {days.map((d, di) => {
                const styles = dayPickerStyles[di] ?? dayPickerStyles[0];
                const isActive = active === d.id;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setActive(d.id)}
                    className={cn(
                      "flex-shrink-0 rounded-2xl border px-5 py-3 text-left transition",
                      isActive ? styles.active : styles.idle,
                    )}
                  >
                    <p
                      className={cn(
                        "text-xs font-semibold uppercase tracking-[0.18em]",
                        isActive ? styles.dateActive : styles.dateIdle,
                      )}
                    >
                      {d.date}
                    </p>
                    <p className="mt-1 font-display text-base font-medium">{d.label}</p>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={day.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="mt-10"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" /> {day.venue}
                </div>
                <h2 className="mt-2 font-display text-2xl text-foreground md:text-3xl">
                  {day.label}
                </h2>

                <ol className="mt-10 space-y-4">
                  {day.slots.map((s) => (
                    <li
                      key={s.time + s.title}
                      className={cn(
                        "grid gap-2 rounded-2xl border p-6 shadow-soft md:grid-cols-[180px_1fr] md:gap-8",
                        s.highlight ? "border-accent/40 bg-accent/10" : "border-border bg-card",
                      )}
                    >
                      <div>
                        <p className="font-display text-lg text-primary">{s.time}</p>
                      </div>
                      <div>
                        <h3 className="font-display text-xl text-foreground">{s.title}</h3>
                        {s.desc && (
                          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                            {s.desc}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </div>

      <section
        id="scientific-sessions"
        className="scroll-mt-28 border-t border-border/60 bg-secondary/25 py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            BFGS 2027
          </p>
          <h2 className="mt-2 font-display text-2xl text-foreground md:text-3xl">
            Scientific sessions
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Scope and topics for each thematic session. Invited lecturers are listed under{" "}
            <a
              href="#agenda"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Agenda
            </a>
            .
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {sessions.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.article
                  key={s.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className={cn(
                    "group relative flex flex-col overflow-hidden rounded-3xl border-2 bg-card p-9 shadow-elevated transition hover:shadow-xl md:p-10",
                    s.cardBorderClass,
                  )}
                >
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-y-3 left-0 w-1 rounded-full",
                      s.stripeClass,
                    )}
                  />
                  <div className="pointer-events-none absolute right-2 top-0 font-display text-[7rem] leading-none text-primary/10 select-none md:right-4 md:text-[9rem]">
                    {s.n}
                  </div>
                  <div
                    className={cn(
                      "relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl",
                      s.iconBg,
                    )}
                  >
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>
                  <h3 className="relative z-10 mt-7 font-display text-xl leading-snug text-foreground md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="relative z-10 mt-5 text-justify text-base leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                  <p className="relative z-10 mt-6 text-justify text-sm leading-relaxed text-muted-foreground/95">
                    <span className="font-semibold text-foreground/80">Keywords: </span>
                    {s.keywords}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
