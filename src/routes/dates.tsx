import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  CalendarRange,
  ClipboardList,
  FileText,
  LayoutGrid,
  Sparkles,
  PartyPopper,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import heroBg from "@/assets/page-heroes/dates-bg.png";
import logoWatermark from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dates")({
  head: () => ({
    meta: [
      { title: "Important Dates — Balkan FPS 2027" },
      {
        name: "description",
        content:
          "Timeline of milestones from abstract submission and registration to the symposium and post-symposium excursions — VI Balkan Symposium on Fruit Production Systems.",
      },
      { property: "og:title", content: "Important Dates — Balkan FPS 2027" },
      {
        property: "og:description",
        content:
          "Abstract deadlines, registration windows, and symposium dates for Balkan FPS 2027.",
      },
    ],
  }),
  component: DatesPage,
});

type MilestoneCategory = "papers" | "registration" | "event";

type Milestone = {
  title: string;
  sortDate: string;
  dateDisplay: string;
  year: 2026 | 2027;
  category: MilestoneCategory;
};

const milestonesRaw: Milestone[] = [
  {
    title: "Cherry+ (pre-symposium day)",
    sortDate: "2027-08-30",
    dateDisplay: "August 30, 2027",
    year: 2027,
    category: "event",
  },
  {
    title: "Abstract submission open",
    sortDate: "2026-09-20",
    dateDisplay: "September 20, 2026",
    year: 2026,
    category: "papers",
  },
  {
    title: "Deadline abstract submission",
    sortDate: "2026-12-20",
    dateDisplay: "December 20, 2026",
    year: 2026,
    category: "papers",
  },
  {
    title: "Deadline abstract modification",
    sortDate: "2027-01-30",
    dateDisplay: "January 30, 2027",
    year: 2027,
    category: "papers",
  },
  {
    title: "Abstract acceptance",
    sortDate: "2027-02-20",
    dateDisplay: "February 20, 2027",
    year: 2027,
    category: "papers",
  },
  {
    title: "Early registration",
    sortDate: "2027-03-01",
    dateDisplay: "March 1, 2027",
    year: 2027,
    category: "registration",
  },
  {
    title: "Registration",
    sortDate: "2027-06-30",
    dateDisplay: "June 30, 2027",
    year: 2027,
    category: "registration",
  },
  {
    title: "Deadline full paper",
    sortDate: "2027-07-30",
    dateDisplay: "July 30, 2027",
    year: 2027,
    category: "papers",
  },
  {
    title: "Begin date",
    sortDate: "2027-08-31",
    dateDisplay: "August 31, 2027",
    year: 2027,
    category: "event",
  },
  {
    title: "End date",
    sortDate: "2027-09-03",
    dateDisplay: "September 3, 2027",
    year: 2027,
    category: "event",
  },
  {
    title: "Post-symposium excursions",
    sortDate: "2027-09-04",
    dateDisplay: "September 4, 2027",
    year: 2027,
    category: "event",
  },
  {
    title: "Deadline full paper modification",
    sortDate: "2027-11-30",
    dateDisplay: "November 30, 2027",
    year: 2027,
    category: "papers",
  },
];

const milestones = [...milestonesRaw].sort(
  (a, b) => new Date(a.sortDate).getTime() - new Date(b.sortDate).getTime(),
);

const milestones2026 = milestones.filter((m) => m.year === 2026);
const milestones2027 = milestones.filter((m) => m.year === 2027);

const categoryIcon: Record<MilestoneCategory, LucideIcon> = {
  papers: FileText,
  registration: ClipboardList,
  event: PartyPopper,
};

const categoryLabel: Record<MilestoneCategory, string> = {
  papers: "Abstracts & papers",
  registration: "Registration",
  event: "Symposium programme",
};

const categoryCardStyle: Record<
  MilestoneCategory,
  { shell: string; stripe: string; icon: string }
> = {
  papers: {
    shell:
      "border-primary/40 bg-gradient-to-br from-primary/[0.12] via-card to-card shadow-md shadow-primary/5 ring-1 ring-primary/10",
    stripe: "from-primary via-primary/70 to-teal-500/80",
    icon: "bg-primary/15 text-primary",
  },
  registration: {
    shell:
      "border-emerald-600/35 bg-gradient-to-br from-emerald-500/[0.12] via-card to-card shadow-md shadow-emerald-900/10 ring-1 ring-emerald-500/15 dark:from-emerald-950/35",
    stripe: "from-emerald-500 via-emerald-600 to-lime-500",
    icon: "bg-emerald-600/15 text-emerald-800 dark:text-emerald-200",
  },
  event: {
    shell:
      "border-amber-600/35 bg-gradient-to-br from-amber-500/[0.12] via-card to-card shadow-md shadow-amber-900/10 ring-1 ring-amber-500/15 dark:from-amber-950/30",
    stripe: "from-amber-500 via-orange-500 to-amber-700/90",
    icon: "bg-amber-600/15 text-amber-900 dark:text-amber-100",
  },
};

const legendItems = [
  {
    key: "papers" as const,
    label: "Abstracts & papers",
    desc: "Submission, acceptance, full papers",
    Icon: FileText,
    pillClass:
      "border-primary/45 bg-primary/10 text-primary hover:bg-primary/[0.16] hover:border-primary/55",
  },
  {
    key: "registration" as const,
    label: "Registration",
    desc: "Early & standard windows",
    Icon: ClipboardList,
    pillClass:
      "border-emerald-600/40 bg-emerald-600/10 text-emerald-950 hover:bg-emerald-600/[0.16] dark:text-emerald-100",
  },
  {
    key: "event" as const,
    label: "Symposium programme",
    desc: "Cherry+, sessions, socials, tour",
    Icon: PartyPopper,
    pillClass:
      "border-amber-600/40 bg-amber-600/10 text-amber-950 hover:bg-amber-600/[0.16] dark:text-amber-50",
  },
];

const subnavItems: { id: string; label: string; Icon: LucideIcon; pillClass: string }[] = [
  {
    id: "dates-guide",
    label: "Guide",
    Icon: LayoutGrid,
    pillClass:
      "border-violet-500/40 bg-violet-500/10 text-violet-950 hover:bg-violet-500/[0.15] dark:text-violet-100",
  },
  {
    id: "year-2026",
    label: "2026",
    Icon: CalendarRange,
    pillClass:
      "border-sky-500/45 bg-sky-500/10 text-sky-950 hover:bg-sky-500/[0.16] dark:text-sky-100",
  },
  {
    id: "year-2027",
    label: "2027",
    Icon: Sparkles,
    pillClass:
      "border-indigo-500/40 bg-indigo-500/10 text-indigo-950 hover:bg-indigo-500/[0.15] dark:text-indigo-100",
  },
];

function DatesSubnav() {
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

function YearBanner({
  year,
  subtitle,
  gradientClass,
}: {
  year: 2026 | 2027;
  subtitle: string;
  gradientClass: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border-2 px-8 py-8 shadow-lg md:px-12 md:py-10",
        gradientClass,
      )}
    >
      <div className="pointer-events-none absolute -right-8 -top-12 font-display text-[10rem] font-bold leading-none text-white/10 md:text-[12rem]">
        {year}
      </div>
      <p className="relative text-xs font-semibold uppercase tracking-[0.28em] text-white/85">
        Milestones
      </p>
      <h2 className="relative mt-2 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {year}
      </h2>
      <p className="relative mt-3 max-w-xl text-sm font-medium text-white/90 md:text-base">
        {subtitle}
      </p>
    </div>
  );
}

function MilestoneCard({ m, index }: { m: Milestone; index: number }) {
  const Icon = categoryIcon[m.category];
  const st = categoryCardStyle[m.category];
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.28) }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border-2 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-7",
        st.shell,
      )}
    >
      <div
        className={cn(
          "absolute inset-y-4 left-0 w-1.5 rounded-full bg-gradient-to-b opacity-95",
          st.stripe,
        )}
        aria-hidden
      />
      <div className="relative flex items-start gap-4 pl-4">
        <div
          className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl", st.icon)}
        >
          <Icon className="h-6 w-6" aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {categoryLabel[m.category]}
          </p>
          <p className="mt-2 font-display text-xl font-semibold tabular-nums tracking-tight text-primary md:text-2xl">
            {m.dateDisplay}
          </p>
          <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-foreground md:text-xl">
            {m.title}
          </h3>
        </div>
      </div>
    </motion.article>
  );
}

function DatesPage() {
  return (
    <>
      <PageHero
        backgroundImage={heroBg}
        eyebrow=""
        title="Important Dates"
        description="Every deadline and programme moment in one place — grouped by year so nothing gets lost."
      />

      <DatesSubnav />

      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-background py-14 md:py-20">
        <div
          className="pointer-events-none absolute -left-4 top-16 z-0 hidden w-[min(48vw,18rem)] opacity-[0.05] grayscale sm:block lg:top-24"
          aria-hidden
        >
          <img src={logoWatermark} alt="" className="w-full object-contain object-left" />
        </div>
        <div
          className="pointer-events-none absolute -right-8 bottom-10 z-0 hidden w-[min(55vw,22rem)] select-none opacity-[0.045] grayscale contrast-110 sm:block"
          aria-hidden
        >
          <img
            src={logoWatermark}
            alt=""
            className="w-full object-contain object-right dark:opacity-[0.07]"
          />
        </div>

        <div className="relative z-[1] mx-auto max-w-6xl space-y-16 px-5 lg:space-y-20 lg:px-8">
          <div id="dates-guide" className="scroll-mt-28">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">
              How to read this timeline
            </p>
            <h2 className="mt-3 text-center font-display text-2xl text-foreground md:text-3xl">
              Three tracks to follow
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground md:text-base">
              Each card is colour-coded. Jump to a year below, or scan for abstracts, registration,
              or on-site programme dates.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
              {legendItems.map(({ key, label, desc, Icon, pillClass }) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.35 }}
                  className={cn(
                    "rounded-3xl border-2 bg-card/95 p-6 shadow-soft backdrop-blur-sm transition hover:shadow-elevated md:p-7",
                    key === "papers" && "border-primary/30",
                    key === "registration" && "border-emerald-600/30",
                    key === "event" && "border-amber-600/30",
                  )}
                >
                  <div
                    className={cn(
                      "inline-flex h-11 w-11 items-center justify-center rounded-2xl",
                      categoryCardStyle[key].icon,
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-display text-xl text-foreground">{label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  <p className="mt-4 flex flex-wrap gap-2">
                    {key === "papers" ? (
                      <>
                        <a
                          href="#year-2026"
                          className={cn(
                            "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition",
                            pillClass,
                          )}
                        >
                          2026
                        </a>
                        <a
                          href="#year-2027"
                          className={cn(
                            "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition",
                            pillClass,
                          )}
                        >
                          2027
                        </a>
                      </>
                    ) : (
                      <a
                        href="#year-2027"
                        className={cn(
                          "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition",
                          pillClass,
                        )}
                      >
                        Go to 2027
                      </a>
                    )}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div id="year-2026" className="scroll-mt-28 space-y-8">
            <YearBanner
              year={2026}
              subtitle="Opening calls and abstract cycle — plan your submission early."
              gradientClass="border-sky-600/40 bg-gradient-to-br from-sky-600 via-sky-700 to-cyan-800 shadow-xl shadow-sky-900/25"
            />
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              {milestones2026.map((m, i) => (
                <MilestoneCard key={`${m.sortDate}-${m.title}`} m={m} index={i} />
              ))}
            </div>
          </div>

          <div id="year-2027" className="scroll-mt-28 space-y-8">
            <YearBanner
              year={2027}
              subtitle="Registration, the symposium in Banja Luka, Cherry+, and everything through to proceedings."
              gradientClass="border-indigo-600/40 bg-gradient-to-br from-indigo-600 via-violet-700 to-slate-900 shadow-xl shadow-indigo-900/25"
            />
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              {milestones2027.map((m, i) => (
                <MilestoneCard key={`${m.sortDate}-${m.title}`} m={m} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
