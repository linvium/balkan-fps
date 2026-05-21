import rsSeal from "@/assets/partners/rs-seal.svg";
import ishsLogo from "@/assets/ishs-logo.png";
import logoFaculty from "@/assets/organizers/faculty-of-agriculture.png";
import logoInstitute from "@/assets/organizers/institute-of-horticulture.png";
import logoUniversity from "@/assets/organizers/university-banja-luka.png";

const ISHS_URL = "https://ishs.org/";
const GOVERNMENT_URL = "https://vladars.rs/eng/Pages/default.aspx";

const externalLinkClass =
  "transition opacity-95 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const textLinkClass = "font-medium text-primary underline-offset-4 hover:underline";

const organizerLogos = [
  {
    src: logoUniversity,
    alt: "University of Banja Luka",
    href: "https://unibl.org/en",
  },
  {
    src: logoFaculty,
    alt: "University of Banja Luka — Faculty of Agriculture",
    href: "https://agro.unibl.org/",
  },
  {
    src: logoInstitute,
    alt: "Institute of Horticulture",
    href: "https://inhortbl.org/",
  },
] as const;

/** Appears above the site footer on every page. */
export function OrganizersPatronsStrip() {
  return (
    <section
      className="border-t border-border/70 bg-muted/35 py-10 md:py-12"
      aria-label="Organizers, patrons, and ISHS"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-10 lg:divide-x lg:divide-border/70">
          {/* Organizers */}
          <div className="flex flex-col items-center gap-6 lg:pr-8">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.26em] text-muted-foreground">
              Organizers
            </h3>
            <div className="flex w-full flex-wrap items-center justify-center gap-8 md:gap-10">
              {organizerLogos.map((logo) => (
                <a
                  key={logo.alt}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLinkClass}
                  aria-label={logo.alt}
                >
                  <img
                    src={logo.src}
                    alt=""
                    className="h-14 w-auto max-w-[9rem] object-contain sm:h-16 sm:max-w-[10rem]"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
            <p className="max-w-md text-center font-display text-sm font-semibold uppercase leading-relaxed tracking-[0.06em] text-foreground md:text-base">
              <a
                href="https://unibl.org/en"
                target="_blank"
                rel="noopener noreferrer"
                className={textLinkClass}
              >
                University of Banja Luka
              </a>
              <span className="text-muted-foreground/80"> · </span>
              <a
                href="https://agro.unibl.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={textLinkClass}
              >
                Faculty of Agriculture
              </a>
              <span className="text-muted-foreground/80"> · </span>
              <a
                href="https://inhortbl.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={textLinkClass}
              >
                Institute of Horticulture
              </a>
            </p>
          </div>

          {/* Patrons */}
          <div className="flex flex-col items-center gap-6 lg:px-8">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.26em] text-muted-foreground">
              Patrons
            </h3>
            <a
              href={GOVERNMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={externalLinkClass}
              aria-label="Government of Republika Srpska"
            >
              <img
                src={rsSeal}
                alt=""
                className="h-16 w-16 shrink-0 object-contain sm:h-[4.75rem] sm:w-[4.75rem]"
                width={76}
                height={76}
                loading="lazy"
              />
            </a>
            <p className="max-w-md text-center text-base leading-relaxed text-foreground">
              <a
                href={GOVERNMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={textLinkClass}
              >
                Ministry of Agriculture, Forestry and Water Management of Republika Srpska
              </a>
            </p>
          </div>

          {/* Under the aegis of ISHS */}
          <div className="flex flex-col items-center gap-6 lg:pl-8">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.26em] text-muted-foreground">
              Under the aegis of
            </h3>
            <a
              href={ISHS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={externalLinkClass}
              aria-label="International Society for Horticultural Science (ISHS)"
            >
              <img
                src={ishsLogo}
                alt=""
                className="h-16 w-auto max-w-[11rem] object-contain sm:h-[4.75rem] sm:max-w-[13rem]"
                loading="lazy"
              />
            </a>
            <p className="max-w-md text-center text-base leading-relaxed text-foreground">
              <a
                href={ISHS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={textLinkClass}
              >
                International Society for Horticultural Science
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
