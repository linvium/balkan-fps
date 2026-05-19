import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import heroBg from "@/assets/page-heroes/cherry-plus-bg.png";
import { Cherry } from "lucide-react";
import photoGregoryLang from "@/assets/speakers/greg-lang.png";
import photoMatthewWhiting from "@/assets/speakers/mathew-whiting.png";
import photoJuanPablo from "@/assets/cherry-plus/juan-pablo-zoffoli.png";
import photoLorenzo from "@/assets/cherry-plus/lorenzo-bergonzoni.jpg";
import photoGiacomo from "@/assets/cherry-plus/giacomo-gatti.png";
import imgMorningTalks from "@/assets/cherry-plus/programme-morning-talks.png";
import imgFieldTrellis from "@/assets/cherry-plus/programme-field-trellis.png";
import imgFieldOrchard from "@/assets/cherry-plus/programme-field-orchard.png";
import imgEec1 from "@/assets/cherry-plus/programme-eec-1.png";
import imgEec2 from "@/assets/cherry-plus/programme-eec-2.png";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/cherry-plus")({
  head: () => ({
    meta: [
      { title: "Cherry+ · 30 August 2027 — Balkan FPS 2027" },
      {
        name: "description",
        content:
          "Pre-symposium Cherry+ day — sweet cherry production with expert talks, field visits, and demonstrations in Banja Luka, 30 August 2027.",
      },
      { property: "og:title", content: "Cherry+ · 30 August 2027 — Balkan FPS 2027" },
      {
        property: "og:description",
        content:
          "Science meets practice: invited experts, orchard visits, and hands-on demonstrations before the main symposium.",
      },
    ],
  }),
  component: CherryPlusPage,
});

type Expert = {
  name: string;
  lines: string[];
  photo: string;
};

const experts: Expert[] = [
  {
    name: "Gregory Lang",
    lines: ["Michigan State University"],
    photo: photoGregoryLang,
  },
  {
    name: "Matthew Whiting",
    lines: ["Washington State University"],
    photo: photoMatthewWhiting,
  },
  {
    name: "Juan Pablo Zoffoli",
    lines: ["Pontificia Universidad Católica de Chile", "Faculty of Agronomy and Natural Systems"],
    photo: photoJuanPablo,
  },
  {
    name: "Lorenzo Bergonzoni",
    lines: ["University of Bologna, Department of Agricultural and Food Sciences"],
    photo: photoLorenzo,
  },
  {
    name: "Giacomo Gatti",
    lines: ["Laimburg Research Centre"],
    photo: photoGiacomo,
  },
];

const experienceIntroClass =
  "text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed";

const programmeBlocks = [
  {
    key: "morning",
    chip: "Morning · University of Banja Luka campus",
    chipClass:
      "border-primary/45 bg-primary/12 text-primary ring-1 ring-primary/15 dark:bg-primary/18",
    stripe: "from-primary via-primary/60 to-teal-500",
    shell:
      "border-primary/35 bg-gradient-to-br from-primary/[0.08] via-card to-card ring-1 ring-primary/10",
    body: "Start the day with inspiring, practice-oriented talks from leading international experts, focusing on modern sweet cherry production — from choosing the right training system to optimizing key orchard practices for consistent, high-quality yields. Throughout the sessions, special emphasis will be placed on interactive exchange with growers, encouraging discussion and knowledge transfer aimed at improving production practices.",
    figures: [
      {
        src: imgMorningTalks,
        alt: "Invited expert presenting on sweet cherry production to an audience",
      },
    ],
  },
  {
    key: "field",
    chip: "Field visits · From innovation to commercial reality",
    chipClass:
      "border-emerald-600/45 bg-emerald-600/12 text-emerald-950 ring-1 ring-emerald-600/15 dark:text-emerald-100 dark:bg-emerald-950/35",
    stripe: "from-emerald-500 via-emerald-600 to-lime-500",
    shell:
      "border-emerald-600/30 bg-gradient-to-br from-emerald-500/[0.1] via-card to-card ring-1 ring-emerald-600/12 dark:from-emerald-950/28",
    body: "Step directly into production: explore a cutting-edge substrate-grown cherry system and a commercial orchard spanning 4 hectares with more than 15 cultivars — a unique opportunity to compare systems, varieties, and real-world performance, with continuous dialogue between experts and farmers in real orchard conditions.",
    figures: [
      {
        src: imgFieldOrchard,
        alt: "Cherry saplings in black pots with irrigation lines and support wires in the field",
      },
      {
        src: imgFieldTrellis,
        alt: "Young cherry trees in substrate containers in outdoor rows with drip irrigation",
      },
    ],
  },
  {
    key: "eec",
    chip: "Afternoon · Experimental and Educational Centre, Faculty of Agriculture",
    chipClass:
      "border-violet-500/45 bg-violet-500/12 text-violet-950 ring-1 ring-violet-500/15 dark:text-violet-100 dark:bg-violet-950/35",
    stripe: "from-violet-500 via-indigo-600 to-sky-600",
    shell:
      "border-violet-500/35 bg-gradient-to-br from-violet-500/[0.1] via-card to-card ring-1 ring-violet-500/12 dark:from-violet-950/28",
    body: "Finish the day where science truly meets practice — with live demonstrations of summer pruning in different training systems (Spindle, UFO, KGB), providing hands-on insights through direct interaction with experts and growers.",
    figures: [
      {
        src: imgEec1,
        alt: "Cherry orchard in bloom at the Experimental and Educational Centre, with trellis and protective netting",
      },
      {
        src: imgEec2,
        alt: "Cherry trees in full flower, modern mulch, irrigation and overhead netting between rows",
      },
    ],
  },
];

function CherryPlusPage() {
  return (
    <>
      <PageHero
        backgroundImage={heroBg}
        photoFillSection
        readingPanel
        eyebrow="Cherry+ · 30 August 2027"
        title="Cherry+"
        description="A focused pre-symposium day where science meets practice — bringing together leading experts, growers, and researchers interested in practical aspects of sweet cherry production. Designed primarily for producers, Cherry+ offers concise, experience-based insights that connect research with real orchard conditions."
      />

      <section className="border-t border-border/60 bg-background py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:max-w-4xl lg:px-8">
          <div className="flex items-center gap-3">
            <Cherry className="h-5 w-5 text-primary" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Your Cherry+ experience
            </p>
          </div>
          <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
            Intensive, practice-oriented day
          </h2>
          <p className={cn("mt-6 text-justify", experienceIntroClass)}>
            An intensive, practice-oriented day where science meets real orchard conditions,
            combining expert insights, field visits, and live demonstrations of modern sweet cherry
            production systems. Throughout the programme, continuous interaction with growers
            ensures open discussion and practical knowledge exchange aimed at improving production
            decisions and outcomes.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <h2 className="font-display text-2xl text-foreground md:text-3xl">Invited experts</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
            Speakers from leading institutions — practice-oriented insights for growers and
            advisers.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {experts.map((expert) => (
              <article
                key={expert.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:shadow-elevated"
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-muted">
                  <img
                    src={expert.photo}
                    alt=""
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="font-display text-lg font-medium leading-snug text-foreground">
                    {expert.name}
                  </p>
                  {expert.lines.map((line) => (
                    <p
                      key={line}
                      className="mt-1 text-sm leading-snug text-muted-foreground md:text-[15px]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-14 px-5 md:max-w-5xl md:space-y-16 lg:px-8">
          <h2 className="font-display text-2xl text-foreground md:text-3xl">
            Programme — Cherry+ Experience
          </h2>

          {programmeBlocks.map((block) => (
            <div
              key={block.key}
              className={cn(
                "relative overflow-hidden rounded-3xl border-2 p-6 shadow-soft md:p-9",
                block.shell,
              )}
            >
              <div
                className={cn(
                  "absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b md:w-2",
                  block.stripe,
                )}
                aria-hidden
              />
              <div className="relative pl-4 md:pl-6">
                <p
                  className={cn(
                    "inline-flex rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] shadow-sm",
                    block.chipClass,
                  )}
                >
                  {block.chip}
                </p>
                <p className={cn("mt-5 text-justify", experienceIntroClass)}>{block.body}</p>

                {block.figures.length === 1 ? (
                  <figure className="mt-7 overflow-hidden rounded-2xl border border-border/60 bg-muted/30 shadow-soft">
                    <img
                      src={block.figures[0].src}
                      alt={block.figures[0].alt}
                      className="h-72 w-full object-cover object-center sm:h-80 md:h-96 lg:h-[28rem]"
                      loading="lazy"
                    />
                  </figure>
                ) : (
                  <div
                    className={cn(
                      "mt-7 grid gap-4",
                      block.figures.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3",
                    )}
                  >
                    {block.figures.map((fig) => (
                      <figure
                        key={fig.src}
                        className="overflow-hidden rounded-2xl border border-border/60 bg-muted/30 shadow-soft"
                      >
                        <img
                          src={fig.src}
                          alt={fig.alt}
                          className="h-60 w-full object-cover object-center sm:h-72 md:h-80 lg:h-96"
                          loading="lazy"
                        />
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/program"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary/90 md:text-base"
            >
              View full programme
            </Link>
            <Link
              to="/dates"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary md:text-base"
            >
              Important dates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
