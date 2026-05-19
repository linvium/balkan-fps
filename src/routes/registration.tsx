import { createFileRoute } from "@tanstack/react-router";
import { Check, Euro, ListChecks, Landmark } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import heroBg from "@/assets/page-heroes/registration-bg.png";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "Registration and fees — Balkan FPS 2027" },
      {
        name: "description",
        content:
          "Registration fees for the VI Balkan Symposium on Fruit Production Systems: ISHS members, non-members, students, one-day ticket. Early registration from 1 March 2027.",
      },
      { property: "og:title", content: "Registration — Balkan FPS 2027" },
      { property: "og:description", content: "Early registration from 1 March 2027. View fees." },
    ],
  }),
  component: RegistrationPage,
});

const tiers = [
  {
    name: "ISHS members",
    early: 350,
    late: 400,
    onsite: 450,
    desc: "For individual members of the International Society for Horticultural Science.",
  },
  {
    name: "Non-members",
    early: 450,
    late: 500,
    onsite: 550,
    desc: "Standard registration for all other participants.",
  },
  {
    name: "Students",
    early: 160,
    late: 180,
    onsite: 200,
    desc: "Valid student ID required.",
  },
  {
    name: "One-day",
    early: 200,
    late: 200,
    onsite: 200,
    desc: "Access to the scientific programme for a selected day.",
    flat: true,
  },
];

const fullIncludes = [
  "Access to all scientific sessions",
  "Participation in the Cherry+ Day (Pre-Symposium Cherry Event)",
  "Symposium materials",
  "Daily lunch and coffee breaks",
  "Certificate of attendance",
  "Access to the e-Acta Horticulturae proceedings",
  "Welcome reception",
  "Entry to The Balkans in a Bottle",
  "Entry to River & Rhythm Night",
  "Gala dinner",
  "Technical tour (coach transport and lunch)",
];

const dayIncludes = [
  "Access to scientific sessions on the selected day",
  "Materials for that day",
  "Lunch and coffee breaks",
  "Certificate of attendance",
  "Access to the e-Acta Horticulturae proceedings",
  "Participation in all programme activities scheduled for the selected day (including social events or the technical tour, if applicable)",
];

/** Same tiers as rafting — post-symposium excursions. */
const EXCURSION_EARLY = 60;
const EXCURSION_LATE = 80;
const EXCURSION_ONSITE = 100;

const subnavItems: { id: string; label: string; Icon: LucideIcon; pillClass: string }[] = [
  {
    id: "registration-fees",
    label: "Registration fees",
    Icon: Euro,
    pillClass:
      "border-primary/45 bg-primary/10 text-primary hover:bg-primary/[0.16] hover:border-primary/55",
  },
  {
    id: "whats-included",
    label: "What's included",
    Icon: ListChecks,
    pillClass:
      "border-sky-500/40 bg-sky-500/10 text-sky-950 hover:bg-sky-500/[0.16] hover:border-sky-500/50 dark:text-sky-100",
  },
  {
    id: "post-symposium",
    label: "Post-symposium",
    Icon: Landmark,
    pillClass:
      "border-emerald-600/40 bg-emerald-600/10 text-emerald-950 hover:bg-emerald-600/[0.16] hover:border-emerald-600/50 dark:text-emerald-100",
  },
];

/** Visual treatment per fee tier — gradients and accents for clearer hierarchy. */
function tierVisuals(name: string) {
  switch (name) {
    case "ISHS members":
      return {
        card: cn(
          "border-2 border-sky-500/45 bg-gradient-to-br from-sky-500/[0.18] via-card to-card",
          "shadow-lg shadow-sky-900/12 ring-1 ring-sky-400/25",
        ),
        stripe: "from-sky-300 via-sky-600 to-teal-500",
        title: "text-sky-950 dark:text-sky-50",
        price: "text-sky-700 dark:text-sky-300",
      };
    case "Non-members":
      return {
        card: cn(
          "border-2 border-violet-500/40 bg-gradient-to-br from-violet-500/[0.15] via-card to-card",
          "shadow-lg shadow-violet-900/12 ring-1 ring-violet-400/20",
        ),
        stripe: "from-violet-300 via-violet-600 to-fuchsia-500",
        title: "text-violet-950 dark:text-violet-50",
        price: "text-violet-700 dark:text-violet-300",
      };
    case "Students":
      return {
        card: cn(
          "border-2 border-emerald-600/45 bg-gradient-to-br from-emerald-500/[0.16] via-card to-card",
          "shadow-lg shadow-emerald-900/12 ring-1 ring-emerald-400/25",
        ),
        stripe: "from-emerald-300 via-emerald-600 to-lime-500",
        title: "text-emerald-950 dark:text-emerald-50",
        price: "text-emerald-700 dark:text-emerald-300",
      };
    case "One-day":
      return {
        card: cn(
          "border-2 border-amber-500/45 bg-gradient-to-br from-amber-500/[0.15] via-card to-card",
          "shadow-lg shadow-amber-900/12 ring-1 ring-amber-400/25",
        ),
        stripe: "from-amber-300 via-amber-600 to-orange-500",
        title: "text-amber-950 dark:text-amber-50",
        price: "text-amber-800 dark:text-amber-300",
      };
    default:
      return {
        card: "border border-border bg-card shadow-soft",
        stripe: "from-primary to-primary/60",
        title: "text-foreground",
        price: "text-primary",
      };
  }
}

function RegistrationSubnav() {
  return (
    <nav
      aria-label="On this page"
      className="scroll-mt-24 border-b border-border bg-background/95 py-4 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-5 lg:px-8">
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

function RegistrationPage() {
  return (
    <>
      <PageHero
        backgroundImage={heroBg}
        eyebrow=""
        title="Registration and fees"
        description="Early registration: 1 March 2027. All fees are shown in EUR."
      />

      <RegistrationSubnav />

      <section id="registration-fees" className="scroll-mt-28 bg-background py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {tiers.map((t) => {
              const v = tierVisuals(t.name);
              return (
                <div
                  key={t.name}
                  className={cn(
                    "relative flex flex-col overflow-hidden rounded-3xl p-7 transition duration-300",
                    "hover:-translate-y-1 hover:shadow-xl",
                    v.card,
                  )}
                >
                  <div
                    className={cn(
                      "absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r opacity-95",
                      v.stripe,
                    )}
                    aria-hidden
                  />
                  <h3
                    className={cn(
                      "relative font-display text-2xl font-semibold tracking-tight",
                      v.title,
                    )}
                  >
                    {t.name}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t.desc}
                  </p>

                  <div className="relative mt-6 space-y-3 text-sm">
                    {t.flat ? (
                      <Row label="Flat rate" value={t.early} big priceClassName={v.price} />
                    ) : (
                      <>
                        <Row
                          label="Early bird (until 31 Dec 2026)"
                          value={t.early}
                          big
                          priceClassName={v.price}
                        />
                        <Row
                          label="Late (from 1 Jan 2027)"
                          value={t.late}
                          priceClassName={v.price}
                        />
                        <Row label="On-site" value={t.onsite} priceClassName={v.price} />
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="whats-included" className="scroll-mt-28 bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 lg:px-8">
          <IncludeCard
            title="What full packages include"
            subtitle="ISHS members, non-members, and students"
            items={fullIncludes}
          />
          <IncludeCard
            title="One-day registration"
            subtitle="For individual days of the programme"
            items={dayIncludes}
          />
        </div>
      </section>

      <section id="post-symposium" className="scroll-mt-28 bg-background py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/15 to-leaf/10 p-10 shadow-elevated md:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">
              Optional add-ons
            </p>
            <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
              Post-symposium excursions
            </h2>
            <p className="mt-2 text-muted-foreground">4 September 2027</p>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-soft backdrop-blur-sm md:p-8">
                <h3 className="font-display text-xl text-foreground md:text-2xl">
                  Rafting on the Vrbas
                </h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  Active outdoor networking on the river — includes breakfast, guided rafting, and
                  lunch.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <PriceBox label="Early" price={EXCURSION_EARLY} />
                  <PriceBox label="Late" price={EXCURSION_LATE} />
                  <PriceBox label="On-site" price={EXCURSION_ONSITE} />
                </div>

                <div className="mt-6 rounded-2xl bg-background/80 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    What is included
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden />{" "}
                      Traditional breakfast
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden /> Guided
                      rafting adventure on the Vrbas
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden /> Relaxed
                      outdoor lunch with traditional Balkan cuisine
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-soft backdrop-blur-sm md:p-8">
                <h3 className="font-display text-xl text-foreground md:text-2xl">
                  Kozara Nature &amp; Heritage Tour
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  A relaxing post-symposium excursion through Kozara National Park, combined with
                  visits to selected cultural and religious sites, offering insight into the
                  region&apos;s natural beauty and heritage.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <PriceBox label="Early" price={EXCURSION_EARLY} />
                  <PriceBox label="Late" price={EXCURSION_LATE} />
                  <PriceBox label="On-site" price={EXCURSION_ONSITE} />
                </div>

                <div className="mt-6 rounded-2xl bg-background/80 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    What is included
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden /> Visit to
                      Kozara National Park and the memorial complex at Mrakovica Memorial Monument
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden />{" "}
                      Traditional lunch at an ethno restaurant
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden /> Visits to
                      selected religious and cultural sites in the area
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({
  label,
  value,
  big,
  priceClassName,
}: {
  label: string;
  value: number;
  big?: boolean;
  priceClassName?: string;
}) {
  return (
    <div className="flex items-baseline justify-between border-b border-foreground/10 py-2 last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span
        className={cn(
          "font-display tabular-nums tracking-tight",
          big ? "text-2xl font-semibold" : "text-lg font-medium",
          priceClassName ?? "text-primary",
        )}
      >
        €{value}
      </span>
    </div>
  );
}

function IncludeCard({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
      <h3 className="font-display text-2xl text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      <ul className="mt-6 space-y-2.5">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_0_3px] shadow-primary/15"
              aria-hidden
            />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PriceBox({ label, price }: { label: string; price: number }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className="mt-2 font-display text-2xl text-primary">€{price}</p>
    </div>
  );
}
