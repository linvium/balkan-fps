import { Link } from "@tanstack/react-router";
import imgCherries from "@/assets/welcome-grid-cherries.jpg";
import imgHarvest from "@/assets/welcome-grid-harvest.jpg";
import imgFieldDay from "@/assets/welcome-grid-field-day.png";
import imgLandscape from "@/assets/welcome-grid-landscape.png";

const tiles = [
  {
    key: "cherry-plus",
    image: imgCherries,
    alt: "Sweet cherries on the branch",
    line: "Pre-conference Cherry+ day",
    href: "/cherry-plus" as const,
  },
  {
    key: "sessions",
    image: imgFieldDay,
    alt: "Wooden crates of fresh plums between orchard rows",
    line: "Four scientific sessions",
  },
  {
    key: "networking",
    image: imgLandscape,
    alt: "Symposium participants on a technical visit in an orchard",
    line: "Networking",
  },
  {
    key: "tours",
    image: imgHarvest,
    alt: "Aerial view of orchards and hills in the countryside",
    line: "Technical tours across Republika Srpska",
  },
] as const;

function EventTile({
  image,
  alt,
  line,
  href,
}: {
  image: string;
  alt: string;
  line: string;
  href?: "/cherry-plus";
}) {
  const inner = (
    <>
      <img
        src={image}
        alt={alt}
        width={900}
        height={675}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-5">
        <p className="text-left text-xs font-medium leading-snug text-white text-pretty sm:text-sm md:text-[0.9375rem] md:leading-relaxed">
          {line}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        to={href}
        className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-border/40 shadow-soft ring-1 ring-black/5 transition hover:border-primary/25 hover:shadow-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        {inner}
      </Link>
    );
  }

  return (
    <article className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/40 shadow-soft ring-1 ring-black/5">
      {inner}
    </article>
  );
}

export function WelcomeEventGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4" aria-label="Symposium highlights">
      {tiles.map((t) => (
        <EventTile
          key={t.key}
          image={t.image}
          alt={t.alt}
          line={t.line}
          href={"href" in t ? t.href : undefined}
        />
      ))}
    </div>
  );
}
