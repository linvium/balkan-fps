import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

type CountStat = {
  kind: "count";
  target: number;
  suffix: string;
  /** Appended immediately after the animated number (before mid), e.g. "-day" */
  afterNumber?: string;
  /** Text between number block and label line */
  mid?: string;
  label: string;
};

type TextStat = {
  kind: "text";
  title: string;
  subtitle?: string;
};

const STATS: (CountStat | TextStat)[] = [
  { kind: "count", target: 20, suffix: "+", label: "countries represented" },
  { kind: "count", target: 150, suffix: "+", label: "participants from academia and practice" },
  { kind: "count", target: 5, suffix: "", afterNumber: "-day", label: "intensive programme" },
  {
    kind: "text",
    title: "Pre-symposium Cherry Day",
    subtitle: "Dedicated pre-conference programme",
  },
  { kind: "count", target: 4, suffix: "", label: "focused scientific sessions" },
  { kind: "count", target: 5, suffix: "+", label: "invited keynote speakers" },
  {
    kind: "text",
    title: "Curated social programme",
    subtitle: "Inspired by Balkan tradition",
  },
  {
    kind: "text",
    title: "Post-symposium excursions",
    subtitle: "Rafting or Kozara nature & heritage tour",
  },
];

function CountStatCard({ stat }: { stat: CountStat }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const n = useCountUp(stat.target, 1400, inView);

  return (
    <div ref={ref} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <p className="font-display text-2xl tabular-nums text-primary">
        {n}
        {stat.afterNumber}
        {stat.suffix}
        {stat.mid}
      </p>
      <p className="mt-1 text-base leading-snug text-muted-foreground">{stat.label}</p>
    </div>
  );
}

function TextStatCard({ stat }: { stat: TextStat }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <p className="font-display text-base leading-snug text-primary">{stat.title}</p>
      {stat.subtitle && (
        <p className="mt-2 text-base leading-relaxed text-muted-foreground">{stat.subtitle}</p>
      )}
    </div>
  );
}

export function WelcomeStatCards() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {STATS.map((s) =>
        s.kind === "count" ? (
          <CountStatCard key={s.label} stat={s} />
        ) : (
          <TextStatCard key={s.title} stat={s} />
        ),
      )}
    </div>
  );
}
