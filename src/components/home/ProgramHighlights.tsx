import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  Apple,
  ArrowRight,
  Cherry,
  GraduationCap,
  Landmark,
  Leaf,
  Sparkles,
  Sprout,
  Tractor,
  Wine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import imgRafting from "@/assets/highlights/social-rafting.png";
import imgGala from "@/assets/highlights/social-gala.jpg";
import imgDajak from "@/assets/highlights/social-dajak.png";
import imgWine from "@/assets/highlights/social-wine.jpg";
import imgMrakovica from "@/assets/highlights/social-mrakovica.png";

type WorkCard = {
  tag: string;
  title: string;
  body: string;
  icon: LucideIcon;
  linkCherry?: boolean;
};

/** Scientific programme cards — rendered in day-based rows below. */
const workHighlights: WorkCard[] = [
  {
    tag: "Day 0 · Pre-symposium",
    title: "Pre-Symposium Cherry Day",
    body: "Science and practice in sweet cherry production.",
    icon: Cherry,
    linkCherry: true,
  },
  {
    tag: "Day 1",
    title: "Opening & Plenary Session",
    body: "Keynote lectures and official opening.",
    icon: Landmark,
  },
  {
    tag: "Day 2",
    title: "Session I: Genetic Resources, Breeding and Biotechnology",
    body: "Germplasm, breeding strategies and modern biotechnological tools.",
    icon: Sprout,
  },
  {
    tag: "Day 2",
    title: "Session II: Fruit Physiology and Production Systems",
    body: "Plant performance, canopy architecture and production approaches.",
    icon: Activity,
  },
  {
    tag: "Day 3",
    title: "Session III: Orchard Management and Sustainable Practices",
    body: "Crop management, plant protection and sustainable solutions.",
    icon: Leaf,
  },
  {
    tag: "Day 3",
    title: "Session IV: Fruit Quality, Postharvest and Innovation",
    body: "Quality, storage, processing and value-oriented approaches.",
    icon: Apple,
  },
  {
    tag: "Day 4",
    title: "Technical Tour",
    body: "Visits to leading fruit-growing operations and the Experimental–Educational Centre of the Faculty of Agriculture.",
    icon: Tractor,
  },
];

const [day0, day1, day2a, day2b, day3a, day3b, technicalTour] = workHighlights;

type SocialCardBase = {
  tag: string;
  title: string;
  body: string;
};

type SocialCardSingle = SocialCardBase & {
  image: string;
  alt: string;
};

type SocialGallerySlide = { image: string; alt: string };

type SocialCardGallery = SocialCardBase & {
  gallery: readonly [SocialGallerySlide, SocialGallerySlide];
};

type SocialCard = SocialCardSingle | SocialCardGallery;

const socialHighlights: SocialCard[] = [
  {
    tag: "Day 1",
    title: "The Balkans in a Bottle",
    body: "Regional wines, spirits and traditional cuisine.",
    image: imgWine,
    alt: "Wine glasses and bottles suggesting a regional tasting evening",
  },
  {
    tag: "Day 2",
    title: "River & Rhythm Night",
    body: "Evening on the Vrbas River with local atmosphere — including a ride in classic dajak boats.",
    image: imgDajak,
    alt: "Traditional dajak wooden boat on the clear waters of the Vrbas river",
  },
  {
    tag: "Day 3",
    title: "Gala Dinner",
    body: "Formal gathering in a unique setting.",
    image: imgGala,
    alt: "Elegant dining tables prepared for a formal dinner",
  },
  {
    tag: "Day 5 · Optional",
    title: "Post-symposium excursions",
    body: "Rafting on the Vrbas, or a relaxed Kozara Nature & Heritage Tour — choose what suits you.",
    gallery: [
      {
        image: imgRafting,
        alt: "Rafting excursion on the Vrbas river",
      },
      {
        image: imgMrakovica,
        alt: "Aerial view of the Monument to the Revolution on Mrakovica, Kozara — Kozara Nature & Heritage Tour",
      },
    ],
  },
];

function WorkHighlightCard({
  card,
  index,
  className,
  iconWrapClassName,
  compact,
}: {
  card: WorkCard;
  index: number;
  /** Warm accents: gradient wash + tinted left edge */
  className?: string;
  iconWrapClassName?: string;
  compact?: boolean;
}) {
  const Icon = card.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className={cn(
        "flex gap-4 rounded-2xl border border-l-[5px] bg-card shadow-soft ring-1 ring-black/[0.04] transition hover:shadow-elevated dark:ring-white/[0.06]",
        compact ? "p-4 md:p-5" : "p-6",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-shrink-0 items-center justify-center rounded-xl",
          compact ? "h-10 w-10" : "h-12 w-12",
          iconWrapClassName ?? "bg-primary/12 text-primary",
        )}
      >
        <Icon className={cn(compact ? "h-5 w-5" : "h-6 w-6")} aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <p
          className={cn(
            "font-semibold uppercase tracking-[0.18em] text-primary/80",
            compact ? "text-xs" : "text-sm",
          )}
        >
          {card.tag}
        </p>
        <h3
          className={cn(
            "mt-2 font-display leading-snug text-foreground",
            compact ? "text-sm md:text-base" : "text-base md:text-lg",
          )}
        >
          {card.title}
        </h3>
        <p
          className={cn(
            "mt-3 leading-relaxed text-muted-foreground",
            compact ? "text-xs md:text-sm" : "text-sm md:text-base",
          )}
        >
          {card.body}{" "}
          {card.linkCherry && (
            <>
              More on the{" "}
              <Link
                to="/cherry-plus"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Cherry+
              </Link>{" "}
              page.
            </>
          )}
        </p>
      </div>
    </motion.article>
  );
}

function SocialHighlightCard({
  card,
  index,
  wideImage,
}: {
  card: SocialCard;
  index: number;
  /** Full-width banner image (taller / wider crop) */
  wideImage?: boolean;
}) {
  const media =
    "gallery" in card ? (
      <div className="relative grid min-h-52 grid-cols-2 gap-0.5 overflow-hidden bg-muted sm:min-h-56 md:min-h-64">
      {card.gallery.map((item, j) => (
        <div key={`${item.alt}-${j}`} className="relative min-h-[11rem] sm:min-h-0">
          <img
            src={item.image}
            alt={item.alt}
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>
      ))}
      <div className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-800/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
        <Sparkles className="h-3.5 w-3.5" aria-hidden />
        Networking
      </div>
    </div>
    ) : (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-muted",
        wideImage
          ? "aspect-[16/9] min-h-[13rem] md:aspect-[2.4/1] md:min-h-[16rem] md:max-h-[22rem]"
          : "aspect-[16/10]",
      )}
    >
      <img
        src={card.image!}
        alt={card.alt!}
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="lazy"
      />
      <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-800/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
        <Sparkles className="h-3.5 w-3.5" aria-hidden />
        Networking
      </div>
    </div>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={cn(
        "flex flex-col overflow-hidden rounded-2xl border border-emerald-700/20 bg-card shadow-soft ring-1 ring-emerald-600/15 transition hover:shadow-elevated",
        "gallery" in card && "w-full",
      )}
    >
      {media}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800/90">
          {card.tag}
        </p>
        <h3 className="mt-2 font-display text-lg text-foreground">{card.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">{card.body}</p>
      </div>
    </motion.article>
  );
}

export function ProgramHighlights() {
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary/80">
              Highlights
            </p>
            <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
              The programme in a few key moments
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
              Scientific programme blocks are separated from experience &amp; networking — colour
              and layout show what is on the agenda versus informal gatherings.
            </p>
          </div>
          <Link
            to="/program"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-primary hover:underline sm:shrink-0"
          >
            Full programme <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Scientific programme */}
        <div className="mt-14">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground">
              <GraduationCap className="h-3.5 w-3.5" aria-hidden />
              Scientific programme
            </span>
            <span className="text-sm text-muted-foreground">
              Cherry Day, opening &amp; plenary, thematic sessions &amp; technical tour
            </span>
          </div>
          <div className="flex flex-col gap-6 md:gap-7">
            {/* Row 1 — Day 0 */}
            <WorkHighlightCard
              card={day0}
              index={0}
              className="border-amber-900/15 border-l-amber-600/85 bg-gradient-to-br from-amber-50/55 via-card to-card dark:border-amber-400/25 dark:from-amber-950/35"
              iconWrapClassName="bg-amber-600/15 text-amber-900 dark:text-amber-200"
            />

            {/* Row 2 — Day 1 + Day 2 sessions (three cards across) */}
            <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
              <WorkHighlightCard
                card={day1}
                index={1}
                className="border-rose-900/12 border-l-rose-600/80 bg-gradient-to-br from-rose-50/45 via-card to-card dark:border-rose-400/22 dark:from-rose-950/28"
                iconWrapClassName="bg-rose-600/12 text-rose-900 dark:text-rose-200"
              />
              <WorkHighlightCard
                card={day2a}
                index={2}
                className="border-orange-800/15 border-l-orange-600/80 bg-gradient-to-br from-orange-50/45 via-card to-card dark:border-orange-400/18 dark:from-orange-950/32"
                iconWrapClassName="bg-orange-600/12 text-orange-900 dark:text-orange-200"
              />
              <WorkHighlightCard
                card={day2b}
                index={3}
                className="border-orange-800/15 border-l-orange-600/80 bg-gradient-to-br from-orange-50/45 via-card to-card dark:border-orange-400/18 dark:from-orange-950/32"
                iconWrapClassName="bg-orange-600/12 text-orange-900 dark:text-orange-200"
              />
            </div>

            {/* Row 3 — Day 3 | Day 3 */}
            <div className="grid gap-6 md:grid-cols-2">
              <WorkHighlightCard
                card={day3a}
                index={4}
                className="border-emerald-900/12 border-l-emerald-600/80 bg-gradient-to-br from-emerald-50/40 via-card to-card dark:border-emerald-400/20 dark:from-emerald-950/30"
                iconWrapClassName="bg-emerald-600/12 text-emerald-900 dark:text-emerald-200"
              />
              <WorkHighlightCard
                card={day3b}
                index={5}
                className="border-red-950/15 border-l-red-700/75 bg-gradient-to-br from-red-50/35 via-card to-card dark:border-red-400/18 dark:from-red-950/25"
                iconWrapClassName="bg-red-700/12 text-red-900 dark:text-red-200"
              />
            </div>

            {/* Row 4 — Technical tour */}
            <WorkHighlightCard
              card={technicalTour}
              index={6}
              className="border-stone-800/18 border-l-stone-600/80 bg-gradient-to-br from-stone-100/50 via-card to-amber-50/25 dark:border-stone-500/25 dark:from-stone-950/40 dark:to-amber-950/15"
              iconWrapClassName="bg-stone-600/14 text-stone-800 dark:text-stone-200"
            />
          </div>
        </div>

        {/* Experience & networking */}
        <div className="mt-16 rounded-[2rem] border border-emerald-700/15 bg-gradient-to-br from-emerald-50/90 via-background to-background p-6 shadow-soft md:p-10 dark:from-emerald-950/25">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
              <Wine className="h-3.5 w-3.5" aria-hidden />
              Experience &amp; networking
            </span>
            <span className="text-sm text-muted-foreground">
              Regional hospitality, evenings together &amp; optional outdoor programme
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <SocialHighlightCard card={socialHighlights[0]!} index={0} />
            <SocialHighlightCard card={socialHighlights[1]!} index={1} />
          </div>
          <div className="mt-6">
            <SocialHighlightCard card={socialHighlights[2]!} index={2} wideImage />
          </div>
          <div className="mt-6">
            <SocialHighlightCard card={socialHighlights[3]!} index={3} />
          </div>
        </div>
      </div>
    </section>
  );
}
