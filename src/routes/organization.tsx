import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Car,
  Globe,
  Info,
  MapPin,
  MapPinned,
  Microscope,
  Plane,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import heroBg from "@/assets/page-heroes/organization-bg.png";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import photoJelena from "@/assets/committees/jelena-davidovic-gidas.png";
import photoMiljan from "@/assets/committees/miljan-cvetkovic.png";
import photoAleksandar from "@/assets/committees/aleksandar-ostojic.png";
import photoNemanja from "@/assets/committees/nemanja-jalic.png";
import photoMilan from "@/assets/committees/milan-sipka.png";
import photoRada from "@/assets/committees/rada-grbic.png";
import photoMilana from "@/assets/committees/milana-kocic.png";
import photoPetar from "@/assets/committees/petar-ninic.png";
import photoMihajlo from "@/assets/committees/mihajlo-svitlica.png";
import photoJelisaveta from "@/assets/committees/jelisaveta-seka-cvijanovic.jpg";

export const Route = createFileRoute("/organization")({
  head: () => ({
    meta: [
      { title: "Organization — VI Balkan Symposium on Fruit Production Systems" },
      {
        name: "description",
        content:
          "Travel information, venues in Banja Luka, organising and scientific committees — VI Balkan Symposium on Fruit Production Systems 2027.",
      },
      { property: "og:title", content: "Organization — VI Balkan Symposium on Fruit Production Systems" },
      {
        property: "og:description",
        content:
          "Organising and scientific committees, travel to Banja Luka, and symposium venues across the University of Banja Luka campus and excursion sites.",
      },
    ],
  }),
  component: OrganizationPage,
});

const sectionNav: {
  id: string;
  label: string;
  Icon: LucideIcon;
  pillClass: string;
}[] = [
  {
    id: "organizing-committee",
    label: "Organizing committee",
    Icon: Users,
    pillClass:
      "border-primary/45 bg-primary/10 text-primary hover:bg-primary/[0.16] hover:border-primary/55",
  },
  {
    id: "scientific-committee",
    label: "Scientific committee",
    Icon: Microscope,
    pillClass:
      "border-emerald-600/35 bg-emerald-500/[0.1] text-emerald-900 hover:bg-emerald-500/[0.16] dark:text-emerald-100 dark:border-emerald-500/40",
  },
  {
    id: "travel-information",
    label: "Travel information",
    Icon: Globe,
    pillClass:
      "border-sky-500/40 bg-sky-500/[0.1] text-sky-900 hover:bg-sky-500/[0.16] dark:text-sky-100",
  },
  {
    id: "venue",
    label: "Venue",
    Icon: MapPinned,
    pillClass:
      "border-amber-600/40 bg-amber-500/[0.12] text-amber-950 hover:bg-amber-500/[0.18] dark:text-amber-100",
  },
];

type OrganizingMember = {
  name: string;
  role: string;
  photo?: string;
};

const organizing: OrganizingMember[] = [
  { name: "Prof. Dr. Miljan Cvetković", role: "Chair", photo: photoMiljan },
  { name: "Prof. Dr. Aleksandar Ostojić", role: "Member", photo: photoAleksandar },
  { name: "Dr Jelena Davidović-Gidas", role: "Secretary", photo: photoJelena },
  { name: "Dr Nemanja Jalić", role: "Member", photo: photoNemanja },
  { name: "Milan Šipka, MSc", role: "Member", photo: photoMilan },
  { name: "Rada Grbić, MSc", role: "Technical secretary", photo: photoRada },
  {
    name: "Milana Kočić, MSc",
    role: "Ministry of Agriculture, Forestry and Water Management of Republika Srpska",
    photo: photoMilana,
  },
  { name: "Jelisaveta Seka Cvijanović, MSc", role: "Member", photo: photoJelisaveta },
  { name: "Petar Ninić", role: "Agromenadžer d.o.o.", photo: photoPetar },
  { name: "Mihajlo Svitlica", role: "Agrodestil d.o.o.", photo: photoMihajlo },
];

type ScientificMember = { name: string; affiliation: string };

const scientific: { country: string; members: ScientificMember[] }[] = [
  {
    country: "Australia",
    members: [
      {
        name: "Alessio Scalisi",
        affiliation:
          "Tatura SmartFarm, Agriculture Science and Technology, Agriculture Victoria",
      },
    ],
  },
  {
    country: "Bosnia and Herzegovina",
    members: [
      {
        name: "Miljan Cvetković",
        affiliation: "University of Banja Luka Faculty of Agriculture — convener",
      },
      {
        name: "Boris Pašalić",
        affiliation: "University of Banja Luka Faculty of Agriculture — convener",
      },
      { name: "Gordana Djurić", affiliation: "University of Banja Luka Faculty of Agriculture" },
      {
        name: "Pakeza Drkenda",
        affiliation: "University of Sarajevo, Faculty of Agriculture and Food Sciences",
      },
      { name: "Duška Delić", affiliation: "University of Banja Luka Faculty of Agriculture" },
      { name: "Mihajlo Marković", affiliation: "University of Banja Luka Faculty of Agriculture" },
      { name: "Željko Vaško", affiliation: "University of Banja Luka Faculty of Agriculture" },
      {
        name: "Ivan Ostojić",
        affiliation: "University of Mostar, Faculty of Agriculture and Food Technology",
      },
    ],
  },
  {
    country: "Bulgaria",
    members: [
      {
        name: "Svetoslav Malchev",
        affiliation: "Fruit Growing Institute, Plovdiv, Agricultural Academy",
      },
      {
        name: "Marieta Nesheva",
        affiliation: "Fruit Growing Institute, Plovdiv, Agricultural Academy",
      },
    ],
  },
  {
    country: "Chile",
    members: [
      {
        name: "Juan Pablo Zoffoli",
        affiliation:
          "Pontificia Universidad Católica de Chile, Faculty of Agronomy and Natural Systems",
      },
    ],
  },
  {
    country: "China",
    members: [
      {
        name: "Su Wang",
        affiliation:
          "Institute of Plant Protection, Beijing Academy of Agriculture and Forestry Sciences",
      },
    ],
  },
  {
    country: "Croatia",
    members: [
      { name: "Boris Duralija", affiliation: "University of Zagreb Faculty of Agriculture" },
      {
        name: "Martina Skendrović Babojelić",
        affiliation: "University of Zagreb Faculty of Agriculture",
      },
      { name: "Iva Prgomet Rodrigues", affiliation: "Skink d.o.o., Rovinj" },
    ],
  },
  {
    country: "Czech Republic",
    members: [
      {
        name: "Boris Krška",
        affiliation: "Research and Breeding Institute of Pomology Holovousy Ltd.",
      },
    ],
  },
  {
    country: "Cyprus",
    members: [
      {
        name: "George Manganaris",
        affiliation:
          "Department of Agricultural Sciences, Biotechnology & Food Science, Cyprus University of Technology",
      },
    ],
  },
  {
    country: "France",
    members: [
      {
        name: "Jose Quero Garcia",
        affiliation:
          "French National Research Institute for Agriculture, Food and Environment",
      },
    ],
  },
  {
    country: "Germany",
    members: [
      {
        name: "Martin Penzel",
        affiliation: "Thuringia State Institute for Agriculture and Rural Areas, Erfurt",
      },
      {
        name: "Manuela Zude-Sasse",
        affiliation: "Leibniz Institute for Agricultural Engineering and Bioeconomy",
      },
    ],
  },
  {
    country: "Greece",
    members: [
      {
        name: "Pavlina Drogouti",
        affiliation:
          "ELGO-DIMITRA, Institute of Plant Breeding and Genetic Resources, Department of Deciduous Fruit Trees",
      },
    ],
  },
  {
    country: "Hungary",
    members: [
      {
        name: "Geza Bujdoso",
        affiliation: "Hungarian University of Agriculture and Life Science Research",
      },
    ],
  },
  {
    country: "Italy",
    members: [
      { name: "Walter Guerra", affiliation: "Laimburg Research Centre" },
      {
        name: "Lorenzo Bergonzoni",
        affiliation: "University of Bologna Department of Agricultural and Food Sciences",
      },
      { name: "Bruno Mezzetti", affiliation: "Polytechnic University of Marche" },
    ],
  },
  {
    country: "Latvia",
    members: [{ name: "Lacis Gunars", affiliation: "Institute of Horticulture" }],
  },
  {
    country: "Montenegro",
    members: [
      {
        name: "Biljana Lazović",
        affiliation: "University of Montenegro, Biotechnical Faculty Podgorica",
      },
    ],
  },
  {
    country: "New Zealand",
    members: [
      {
        name: "Stuart Tustin",
        affiliation: "New Zealand Institute for Plant & Food Research",
      },
    ],
  },
  {
    country: "North Macedonia",
    members: [
      {
        name: "Tosho Arsov",
        affiliation:
          "Ss. Cyril and Methodius University in Skopje, Faculty of Agricultural Sciences and Food",
      },
      {
        name: "Viktor Gjamovski",
        affiliation: "Ss. Cyril and Methodius University in Skopje, Institute of Agriculture",
      },
    ],
  },
  {
    country: "Norway",
    members: [{ name: "Mekjel Melland", affiliation: "Fruitresearch AS" }],
  },
  {
    country: "Poland",
    members: [
      {
        name: "Krzysztof Rutkowski",
        affiliation: "The National Institute of Horticultural Research, Skierniewice",
      },
    ],
  },
  {
    country: "Romania",
    members: [
      {
        name: "Florin Stanica",
        affiliation: "University of Agronomic Sciences and Veterinary Medicine of Bucharest",
      },
      {
        name: "Madalina Maria Butac",
        affiliation: "Research Institute for Fruit Growing Pitesti",
      },
      {
        name: "Adrian Asanica",
        affiliation: "University of Agronomic Sciences and Veterinary Medicine of Bucharest",
      },
      { name: "Mihai Botu", affiliation: "University of Craiova Faculty of Horticulture" },
      {
        name: "Ana Butcaru",
        affiliation: "University of Agronomic Sciences and Veterinary Medicine of Bucharest",
      },
    ],
  },
  {
    country: "Serbia",
    members: [
      { name: "Milica Fotirić Akšić", affiliation: "University of Belgrade Faculty of Agriculture" },
      {
        name: "Jasminka Milivojević",
        affiliation: "University of Belgrade Faculty of Agriculture",
      },
      {
        name: "Dragan Radivojević",
        affiliation: "University of Belgrade Faculty of Agriculture",
      },
      { name: "Boban Djordjević", affiliation: "University of Belgrade Faculty of Agriculture" },
      { name: "Dragan Nikolić", affiliation: "University of Belgrade Faculty of Agriculture" },
      {
        name: "Jelena Popović-Đorđević",
        affiliation: "University of Belgrade Faculty of Agriculture",
      },
      { name: "Nebojša Milošević", affiliation: "Fruit Research Institute, Čačak" },
      { name: "Ivana Glišić", affiliation: "Fruit Research Institute, Čačak" },
      { name: "Sanja Radičević", affiliation: "Fruit Research Institute, Čačak" },
      { name: "Jelena Tomić", affiliation: "Fruit Research Institute, Čačak" },
      { name: "Darko Jevremović", affiliation: "Fruit Research Institute, Čačak" },
      { name: "Marijana Pešaković", affiliation: "Fruit Research Institute, Čačak" },
      {
        name: "Ivan Glišić",
        affiliation: "University of Kragujevac, Faculty of Agriculture in Čačak",
      },
      { name: "Nenad Magazin", affiliation: "University of Novi Sad, Faculty of Agriculture" },
      { name: "Biserka Milić", affiliation: "University of Novi Sad, Faculty of Agriculture" },
    ],
  },
  {
    country: "Slovenia",
    members: [
      {
        name: "Metka Hudina",
        affiliation:
          "University of Ljubljana, Biotechnical Faculty, Department of Agronomy",
      },
      {
        name: "Veberič Robert",
        affiliation:
          "University of Ljubljana, Biotechnical Faculty, Department of Agronomy",
      },
    ],
  },
  {
    country: "Turkey",
    members: [
      { name: "Sezai Ercisli", affiliation: "Ataturk University Agricultural Faculty" },
      { name: "Turan Karadeniz", affiliation: "Pamukkale University, Denizli" },
    ],
  },
  {
    country: "USA",
    members: [
      {
        name: "Kon Tomas",
        affiliation: "NC State University Department of Horticultural Science",
      },
      { name: "Gregory Lang", affiliation: "Michigan State University" },
      { name: "Todd Einhorn", affiliation: "Michigan State University" },
      { name: "Matthew Whiting", affiliation: "Washington State University" },
      { name: "Stefano Musacchi", affiliation: "Washington State University" },
    ],
  },
];

function initialsFromName(name: string) {
  const skip = new Set(["prof", "dr", "mr", "mrs", "ms", "msc", "bsc", "phd"]);
  const words = name
    .split(/[\s,]+/)
    .map((w) => w.replace(/\.$/, "").trim())
    .filter(Boolean)
    .filter((w) => !skip.has(w.toLowerCase()));
  const caps = words.filter((w) => /^[A-ZČĆĐŠŽ]/.test(w));
  const picked = caps.length >= 2 ? caps.slice(-2) : caps;
  return picked.map((w) => w[0].toUpperCase()).join("") || "?";
}

function OrganizationSubnav() {
  return (
    <nav
      aria-label="On this page"
      className="scroll-mt-24 border-b border-border bg-background/95 py-4 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2 px-5 lg:px-8">
        {sectionNav.map((item) => {
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

function TravelInformationSection() {
  return (
    <section
      id="travel-information"
      className="scroll-mt-28 border-t border-border/60 bg-background py-16 md:py-20"
    >
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="flex items-center gap-3">
          <Globe className="h-5 w-5 text-primary" aria-hidden />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Travel information
          </p>
        </div>
        <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">Getting to Banja Luka</h2>

        <div className="mt-10 space-y-12 text-sm leading-relaxed text-foreground/90">
          <div>
            <h3 className="flex items-center gap-2 font-display text-xl text-foreground">
              <Info className="h-5 w-5 shrink-0 text-primary" aria-hidden />
              Visa &amp; entry information
            </h3>
            <p className="mt-4 text-muted-foreground">
              Bosnia and Herzegovina has a relatively open visa regime. Citizens of many countries can
              enter visa-free for short stays (up to 90 days within a 180-day period), including most
              EU countries, the United Kingdom, the United States, Canada, Australia, and others.
            </p>
            <p className="mt-3 text-muted-foreground">
              Participants who require a visa are advised to apply well in advance through the
              nearest diplomatic or consular mission of Bosnia and Herzegovina.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Official information
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="https://www.mvp.gov.ba"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ministry of Foreign Affairs of Bosnia and Herzegovina
                </a>
              </li>
              <li>
                <a
                  href="https://www.granpol.gov.ba"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Border Police of Bosnia and Herzegovina
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-2 font-display text-xl text-foreground">
              <Plane className="h-5 w-5 shrink-0 text-primary" aria-hidden />
              How to reach Banja Luka
            </h3>
            <p className="mt-4 text-muted-foreground">
              Banja Luka is well connected to several regional airports and can be reached by air or
              land.
            </p>

            <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
              By air
            </h4>
            <p className="mt-2 text-muted-foreground">
              The nearest airport is <span className="text-foreground">Banja Luka International Airport</span>{" "}
              (approx. 25 km from the city centre).
            </p>
            <p className="mt-3 text-muted-foreground">Alternative airports within a few hours&apos; drive:</p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
              <li>Zagreb Airport (Croatia, ~2 hours)</li>
              <li>Sarajevo International Airport (~3–3.5 hours)</li>
              <li>Belgrade Nikola Tesla Airport (~3–4 hours)</li>
            </ul>
            <p className="mt-3 text-muted-foreground">
              From these airports, transfer options include shuttle services, rental cars, or
              organized transport.
            </p>

            <h4 className="mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
              <Car className="h-4 w-4 text-primary" aria-hidden />
              By road
            </h4>
            <p className="mt-2 text-muted-foreground">
              Banja Luka is easily accessible by car or bus from major regional cities:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
              <li>Zagreb → ~2 hours</li>
              <li>Belgrade → ~3–4 hours</li>
              <li>Sarajevo → ~3 hours</li>
            </ul>
            <p className="mt-3 text-muted-foreground">
              Road infrastructure is good, and border crossings are generally straightforward, though
              waiting times may vary.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-foreground">Practical tips</h3>
            <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>
                A valid passport is required for entry (ID card is sufficient for some EU and regional
                countries).
              </li>
              <li>
                Local currency: <span className="text-foreground">Convertible Mark (BAM)</span>.
              </li>
              <li>Power supply: 230 V, European standard plugs (Type C/F).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const FACULTY_ADDRESS = "Bulevar vojvode Petra Bojovića 1A, 78000 Banja Luka";
const FACULTY_MAP_QUERY =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Faculty of Agriculture University of Banja Luka, " + FACULTY_ADDRESS);

function VenueSection() {
  return (
    <section
      id="venue"
      className="scroll-mt-28 border-t border-border/60 bg-secondary/40 py-16 md:py-20"
    >
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-primary" aria-hidden />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Venue</p>
        </div>
        <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">Symposium venue</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          The symposium is hosted by the{" "}
          <span className="text-foreground">University of Banja Luka, Faculty of Agriculture</span>.
          Opening sessions, plenary lectures, and scientific sessions (Days 1–3) take place at
          University of Banja Luka campus facilities. Field activities use the Experimental and
          Educational Centre (EEC) and off-campus sites as listed below. See the{" "}
          <Link to="/program" className="font-medium text-primary underline-offset-4 hover:underline">
            full programme
          </Link>{" "}
          for daily timings.
        </p>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
            <h3 className="font-display text-lg text-foreground">Host &amp; correspondence</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Faculty of Agriculture, University of Banja Luka
              <br />
              <span className="text-foreground">{FACULTY_ADDRESS}</span>
            </p>
            <a
              href={FACULTY_MAP_QUERY}
              className="mt-4 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
            <h3 className="font-display text-lg text-foreground">Main programme locations</h3>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">
                  Opening ceremony, plenary lectures &amp; scientific sessions (Days 1–3)
                </span>
                <br />
                University of Banja Luka campus facilities
              </li>
              <li>
                <span className="font-medium text-foreground">Pre-symposium Cherry+ (30 Aug)</span>
                <br />
                Talks on the University of Banja Luka campus; demonstrations at the Experimental and
                Educational Centre, Faculty of Agriculture.{" "}
                <Link
                  to="/cherry-plus"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Cherry+ details
                </Link>
              </li>
              <li>
                <span className="font-medium text-foreground">Technical tour (Day 4)</span>
                <br />
                Full-day excursion to fruit-growing operations and the EEC Aleksandrovac (see
                programme for route and timings).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function OrganizationPage() {
  return (
    <>
      <PageHero
        backgroundImage={heroBg}
        eyebrow="VI Organization"
        title="Symposium organization"
        description="Travel and venue information for Banja Luka, together with the organising committee and the international scientific committee."
      />

      <OrganizationSubnav />

      <section
        id="organizing-committee"
        className="scroll-mt-28 border-t border-border/60 bg-background py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-primary" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Organizing committee
            </p>
          </div>
          <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">Hosts from Banja Luka</h2>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {organizing.map((p) => (
              <li
                key={p.name}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                {p.photo ? (
                  <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-xl bg-black ring-1 ring-border/60">
                    <img
                      src={p.photo}
                      alt={p.name}
                      className="h-full w-full object-cover object-[center_20%]"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-xl bg-primary/10 font-display text-sm font-semibold text-primary">
                    {initialsFromName(p.name)}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="font-medium text-foreground">{p.name}</p>
                  <p className="text-sm text-muted-foreground">{p.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="scientific-committee"
        className="scroll-mt-28 border-t border-border/60 bg-secondary/40 py-16 md:py-20"
      >
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="flex items-center gap-3">
            <Microscope className="h-5 w-5 text-primary" aria-hidden />
          </div>
          <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
            A global scientific network
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Browse by country for scientific committee members and their affiliations.
          </p>

          <Accordion type="multiple" className="mt-10 space-y-3">
            {scientific.map((c) => (
              <AccordionItem
                key={c.country}
                value={c.country}
                className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-soft"
              >
                <AccordionTrigger className="py-4 text-left hover:no-underline">
                  <span className="font-display text-lg text-foreground">{c.country}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pb-2 text-sm leading-relaxed text-foreground/90">
                    {c.members.map((m, idx) => (
                      <li
                        key={`${c.country}-${idx}-${m.name}`}
                        className="rounded-lg bg-secondary/60 px-3 py-2 text-sm leading-relaxed"
                      >
                        <span className="font-medium text-foreground">{m.name}</span>
                        <span className="text-muted-foreground"> — {m.affiliation}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <TravelInformationSection />
      <VenueSection />
    </>
  );
}
