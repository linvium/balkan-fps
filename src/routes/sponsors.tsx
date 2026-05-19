import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { LayoutGrid, Table2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import heroBg from "@/assets/page-heroes/sponsors-bg.jpg";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors — VI Balkan Symposium on Fruit Production Systems" },
      {
        name: "description",
        content:
          "Sponsorship packages for the VI Balkan Symposium on Fruit Production Systems — Diamond, Gold, Silver, Bronze, and Symposium Supporter tiers. Showcase your brand in Banja Luka 2027.",
      },
      {
        property: "og:title",
        content: "Sponsors — VI Balkan Symposium on Fruit Production Systems",
      },
      {
        property: "og:description",
        content: "Become a partner: sponsorship packages, benefits, and comparison overview.",
      },
    ],
  }),
  component: SponsorsPage,
});

type TierPackage = {
  tier: string;
  recommended?: boolean;
  perks: string[];
};

const sponsorshipPackages: TierPackage[] = [
  {
    tier: "Diamond Sponsor",
    recommended: true,
    perks: [
      "Full-page logo in the Book of Abstracts",
      "Premium logo placement on the symposium website",
      "Dedicated sponsor slide (rotating during breaks)",
      "Exhibition space (table + chairs in the lobby)",
      "5 full registrations",
      "10-minute company/product presentation",
      "Acknowledgement during opening and closing ceremony",
      "Inclusion in official communications (newsletter & social media)",
      "Option to include promotional materials in participant bags",
      "Additional visibility and promotion during the Cherry+ Day pre-symposium event",
    ],
  },
  {
    tier: "Gold Sponsor",
    perks: [
      "1/4 page logo in the Book of Abstracts",
      "Logo on the symposium website",
      "Sponsor slide (rotating during breaks)",
      "Exhibition space (table + chairs)",
      "3 full registrations",
      "5-minute company/product presentation",
      "Mention in official communications",
      "Additional visibility during the Cherry+ Day pre-symposium event",
    ],
  },
  {
    tier: "Silver Sponsor",
    perks: [
      "1/8 page logo in the Book of Abstracts",
      "Logo on the symposium website",
      "Sponsor slide (rotating during breaks)",
      "Shared exhibition space",
      "2 registrations",
    ],
  },
  {
    tier: "Bronze Sponsor",
    perks: [
      "1/12 page logo in the Book of Abstracts",
      "Logo on the symposium website",
      "Sponsor slide (rotating during breaks)",
      "1 registration",
    ],
  },
  {
    tier: "Symposium Supporter",
    perks: ["1/25 page logo in the Book of Abstracts", "Logo on the symposium website"],
  },
];

type ComparisonRow = {
  feature: string;
  diamond: string;
  gold: string;
  silver: string;
  bronze: string;
  supporter: string;
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Book of Abstracts",
    diamond: "Full page",
    gold: "1/4 page",
    silver: "1/8 page",
    bronze: "1/12 page",
    supporter: "1/25 page",
  },
  {
    feature: "Website logo",
    diamond: "Premium",
    gold: "✔",
    silver: "✔",
    bronze: "✔",
    supporter: "✔",
  },
  {
    feature: "Break slide visibility",
    diamond: "✔ (premium)",
    gold: "✔",
    silver: "✔",
    bronze: "✔",
    supporter: "—",
  },
  {
    feature: "Exhibition space",
    diamond: "Full",
    gold: "Full",
    silver: "Shared",
    bronze: "—",
    supporter: "—",
  },
  {
    feature: "Registrations included",
    diamond: "5",
    gold: "3",
    silver: "2",
    bronze: "1",
    supporter: "—",
  },
  {
    feature: "Company presentation",
    diamond: "10 min",
    gold: "5 min",
    silver: "—",
    bronze: "—",
    supporter: "—",
  },
  {
    feature: "Opening/closing acknowledgement",
    diamond: "✔",
    gold: "—",
    silver: "—",
    bronze: "—",
    supporter: "—",
  },
  {
    feature: "Communications (newsletter/social)",
    diamond: "✔",
    gold: "✔",
    silver: "—",
    bronze: "—",
    supporter: "—",
  },
  {
    feature: "Promo materials in bags",
    diamond: "✔",
    gold: "—",
    silver: "—",
    bronze: "—",
    supporter: "—",
  },
  {
    feature: "Cherry+ Day (pre-symposium) visibility",
    diamond: "✔",
    gold: "✔",
    silver: "—",
    bronze: "—",
    supporter: "—",
  },
];

const subnavItems: { id: string; label: string; Icon: LucideIcon; pillClass: string }[] = [
  {
    id: "sponsorship-packages",
    label: "Sponsorship packages",
    Icon: LayoutGrid,
    pillClass:
      "border-primary/45 bg-primary/10 text-primary hover:bg-primary/[0.16] hover:border-primary/55",
  },
  {
    id: "comparison-overview",
    label: "Comparison overview",
    Icon: Table2,
    pillClass:
      "border-violet-500/40 bg-violet-500/[0.1] text-violet-950 hover:bg-violet-500/[0.15] dark:text-violet-100",
  },
];

function tierCardClass(tier: string, recommended?: boolean): string {
  if (recommended) {
    return cn(
      "border-sky-500/45 bg-gradient-to-br from-sky-500/[0.07] to-card ring-2 ring-sky-500/20 ring-offset-2 ring-offset-background",
    );
  }
  switch (tier) {
    case "Gold Sponsor":
      return "border-amber-500/40 bg-gradient-to-br from-amber-500/[0.08] to-card";
    case "Silver Sponsor":
      return "border-slate-400/45 bg-gradient-to-br from-slate-400/[0.06] to-card";
    case "Bronze Sponsor":
      return "border-orange-700/35 bg-gradient-to-br from-orange-600/[0.07] to-card";
    case "Symposium Supporter":
      return "border-emerald-700/30 bg-gradient-to-br from-emerald-600/[0.06] to-card";
    default:
      return "border-border";
  }
}

function SponsorsSubnav() {
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

function SponsorsPage() {
  return (
    <>
      <PageHero
        backgroundImage={heroBg}
        eyebrow=""
        title="Become a partner of the VI Balkan Symposium on Fruit Production Systems."
        description="Showcase your brand, connect with experts, and shape the future of fruit production."
      />

      <SponsorsSubnav />

      <section className="bg-background pt-12 pb-24 md:pt-16">
        <div className="mx-auto max-w-6xl space-y-16 px-5 lg:px-8">
          <div id="sponsorship-packages" className="scroll-mt-28">
            <h2 className="font-display text-xl text-foreground md:text-2xl">
              Sponsorship packages
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Choose a tier that fits your organisation. For bespoke arrangements or questions,
              contact the organising committee via the Symposium chairs on the home page.
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {sponsorshipPackages.map((pkg, i) => (
                <motion.article
                  key={pkg.tier}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className={cn(
                    "flex flex-col rounded-3xl border p-8 shadow-soft md:p-9",
                    tierCardClass(pkg.tier, pkg.recommended),
                  )}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl text-foreground md:text-2xl">{pkg.tier}</h3>
                    {pkg.recommended && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-sky-600/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-sky-900 dark:text-sky-100">
                        <span aria-hidden>⭐</span> Recommended
                      </span>
                    )}
                  </div>
                  <ul
                    className={cn(
                      "mt-6 min-h-0 flex-1 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-muted-foreground",
                      pkg.recommended && "marker:text-sky-700",
                      pkg.tier === "Gold Sponsor" && "marker:text-amber-700",
                      pkg.tier === "Silver Sponsor" && "marker:text-slate-600",
                      pkg.tier === "Bronze Sponsor" && "marker:text-orange-800",
                      pkg.tier === "Symposium Supporter" && "marker:text-emerald-800",
                    )}
                  >
                    {pkg.perks.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>

          <div id="comparison-overview" className="scroll-mt-28">
            <h2 className="font-display text-xl text-foreground md:text-2xl">
              Comparison overview
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Quick reference across sponsorship tiers.
            </p>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card shadow-soft">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-secondary/50">
                    <th
                      scope="col"
                      className="sticky left-0 z-10 bg-secondary/95 px-4 py-4 font-display text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground backdrop-blur-sm"
                    >
                      Feature
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-4 text-center font-display text-xs font-semibold uppercase tracking-[0.1em] text-primary"
                    >
                      Diamond
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-4 text-center font-display text-xs font-semibold uppercase tracking-[0.1em] text-foreground"
                    >
                      Gold
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-4 text-center font-display text-xs font-semibold uppercase tracking-[0.1em] text-foreground"
                    >
                      Silver
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-4 text-center font-display text-xs font-semibold uppercase tracking-[0.1em] text-foreground"
                    >
                      Bronze
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-4 text-center font-display text-xs font-semibold uppercase tracking-[0.08em] text-foreground"
                    >
                      Supporter
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, ri) => {
                    const stripe = ri % 2 === 0 ? "bg-background" : "bg-secondary/25";
                    return (
                      <tr key={row.feature} className={stripe}>
                        <th
                          scope="row"
                          className={cn(
                            "sticky left-0 z-10 px-4 py-3 pr-6 font-normal text-foreground backdrop-blur-sm",
                            stripe,
                          )}
                        >
                          {row.feature}
                        </th>
                        <td className="px-3 py-3 text-center text-muted-foreground">
                          {row.diamond}
                        </td>
                        <td className="px-3 py-3 text-center text-muted-foreground">{row.gold}</td>
                        <td className="px-3 py-3 text-center text-muted-foreground">
                          {row.silver}
                        </td>
                        <td className="px-3 py-3 text-center text-muted-foreground">
                          {row.bronze}
                        </td>
                        <td className="px-3 py-3 text-center text-muted-foreground">
                          {row.supporter}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
