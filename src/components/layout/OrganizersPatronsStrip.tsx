import rsSeal from "@/assets/partners/rs-seal.svg";
import logoFaculty from "@/assets/organizers/faculty-of-agriculture.png";
import logoInstitute from "@/assets/organizers/institute-of-horticulture.png";
import logoUniversity from "@/assets/organizers/university-banja-luka.png";

const organizerLogos = [
  {
    src: logoUniversity,
    alt: "University of Banja Luka",
  },
  {
    src: logoFaculty,
    alt: "University of Banja Luka — Faculty of Agriculture",
  },
  {
    src: logoInstitute,
    alt: "Institute of Horticulture",
  },
] as const;

/** Appears above the site footer on every page. */
export function OrganizersPatronsStrip() {
  return (
    <section
      className="border-t border-border/70 bg-muted/35 py-10 md:py-12"
      aria-label="Organizers and patrons"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14 lg:divide-x lg:divide-border/70">
          {/* Left — Organizers */}
          <div className="flex flex-col items-center gap-6 lg:pr-10">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.26em] text-muted-foreground">
              Organizers
            </h3>
            <div className="flex w-full flex-wrap items-center justify-center gap-8 md:gap-10">
              {organizerLogos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-14 w-auto max-w-[9rem] object-contain sm:h-16 sm:max-w-[10rem]"
                  loading="lazy"
                />
              ))}
            </div>
            <p className="max-w-md text-center font-display text-sm font-semibold uppercase leading-relaxed tracking-[0.06em] text-foreground md:text-base">
              University of Banja Luka · Faculty of Agriculture · Institute of Horticulture
            </p>
          </div>

          {/* Right — Patrons */}
          <div className="flex flex-col items-center gap-6 lg:pl-10">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.26em] text-muted-foreground">
              Patrons
            </h3>
            <img
              src={rsSeal}
              alt="Seal of Republika Srpska"
              className="h-16 w-16 shrink-0 object-contain sm:h-[4.75rem] sm:w-[4.75rem]"
              width={76}
              height={76}
              loading="lazy"
            />
            <p className="max-w-md text-center text-base leading-relaxed text-foreground">
              Ministry of Agriculture, Forestry and Water Management of Republika Srpska
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
