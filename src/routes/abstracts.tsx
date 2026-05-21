import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, FileText, UserPlus, AlertCircle, CheckCircle2, Award } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import heroBg from "@/assets/page-heroes/abstracts-bg.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/abstracts")({
  head: () => ({
    meta: [
      { title: "Abstract submission — Balkan FPS 2027" },
      {
        name: "description",
        content:
          "Submit your abstract via the ROSA system. Formatting rules, author guidelines, and deadlines for the VI Balkan Symposium on Fruit Production Systems.",
      },
      { property: "og:title", content: "Abstract submission — Balkan FPS 2027" },
      {
        property: "og:description",
        content: "Abstracts are submitted through the ROSA system until 20 November 2026.",
      },
    ],
  }),
  component: AbstractsPage,
});

function AbstractsPage() {
  return (
    <>
      <PageHero
        backgroundImage={heroBg}
        eyebrow=""
        title="Abstracts and full papers"
        description="All abstracts and manuscripts are submitted in English through the ROSA system."
      >
        <Tabs defaultValue="submission" className="mx-auto mt-2 w-full max-w-2xl">
          <TabsList className="grid h-auto w-full grid-cols-2 gap-1 rounded-xl bg-muted/80 p-1.5">
            <TabsTrigger
              value="submission"
              className="rounded-lg py-2.5 text-xs font-semibold uppercase tracking-[0.08em] data-[state=active]:shadow-sm sm:text-sm"
            >
              Submit abstract
            </TabsTrigger>
            <TabsTrigger
              value="young-minds"
              className="gap-1.5 rounded-lg py-2.5 text-xs font-semibold uppercase tracking-[0.06em] data-[state=active]:shadow-sm sm:text-sm sm:tracking-[0.08em]"
            >
              <Award className="hidden h-3.5 w-3.5 sm:inline" aria-hidden />
              ISHS Young Minds Award
            </TabsTrigger>
          </TabsList>

          <TabsContent value="submission" className="mt-8 outline-none">
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://www.actahort.org/members/symposiar?nr=840"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-abstract-cta px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-abstract-cta-hover"
              >
                <FileText className="h-4 w-4" /> Submit abstract (ROSA)
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.actahort.org/members/newmember?asc=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary"
              >
                <UserPlus className="h-4 w-4" /> Create ISHS account
              </a>
              <a
                href="https://www.ishs.org/authors"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary"
              >
                Author guidelines
              </a>
              <a
                href="https://ishs.org/rosa_manual_authors/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary"
              >
                <FileText className="h-4 w-4" /> ROSA user manual (authors)
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </TabsContent>

          <TabsContent value="young-minds" className="mt-8 outline-none">
            <div className="rounded-2xl border border-border bg-card p-6 text-left shadow-soft sm:p-8">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Award className="h-5 w-5" aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-lg text-foreground sm:text-xl">
                    ISHS Young Minds Award
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    During the symposium, two Young Minds Awards for junior scientists will be given
                    to:
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                    <li className="flex gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden
                      />
                      <span>
                        The best{" "}
                        <strong className="font-medium text-foreground">oral presentation</strong>{" "}
                        given by a junior scientist who is at the same time the presenter and first
                        author of the <em>Acta Horticulturae</em> manuscript.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden
                      />
                      <span>
                        The best <strong className="font-medium text-foreground">poster</strong>{" "}
                        presented by a junior scientist who is the first author of the work.
                      </span>
                    </li>
                  </ul>
                  <p className="mt-6 text-sm text-muted-foreground md:text-base">
                    More details:{" "}
                    <a
                      href="https://ishs.org/young-minds-award/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-primary underline-offset-4 hover:underline"
                    >
                      ishs.org/young-minds-award
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </PageHero>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-xl text-foreground md:text-2xl">
              Abstract formatting rules
            </h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              Abstracts prepared according to these rules go through a faster review process.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Maximum length is 300 words.",
                "Tables, figures, or graphs are not allowed.",
                "All abbreviations must be spelled out at first mention.",
                "Spelling and grammar must be carefully checked.",
                "Only abstracts submitted in English will be considered for review.",
              ].map((rule) => (
                <li
                  key={rule}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-leaf" />
                  <span className="text-sm leading-relaxed text-foreground/85">{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl text-foreground md:text-2xl">
              Important rules and notices
            </h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              Please read carefully before submitting to avoid withdrawal of your contribution.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Authors without an ISHS account must create one before submitting.",
                "A fee is charged when submitting an abstract (presenting author only). This fee is waived for individual ISHS members.",
                "The abstract must be submitted by the presenting author from their own account. Submission from another person’s account is not allowed.",
                "Authors must register for the symposium; otherwise the abstract and paper may be withdrawn from the programme and the Acta Horticulturae proceedings.",
                "Failure to present (orally or as poster) may result in withdrawal from the proceedings.",
                "All oral presenters must submit a manuscript for publication in the Acta Horticulturae proceedings; otherwise their presentation may be cancelled.",
                "Authors of posters are strongly encouraged to prepare and submit a manuscript for Acta Horticulturae.",
              ].map((rule) => (
                <li
                  key={rule}
                  className="flex items-start gap-3 rounded-xl border border-primary/15 bg-primary/5 p-4"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-foreground/85">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
