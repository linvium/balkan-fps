import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import headerBanner from "@/assets/balkan-header.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/cherry-plus", label: "Cherry+" },
  { to: "/dates", label: "Important dates" },
  { to: "/registration", label: "Registration" },
  { to: "/program", label: "Programme" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/organization", label: "Organization" },
] as const;

const abstractBtnClass =
  "inline-flex items-center justify-center rounded-full bg-abstract-cta px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white shadow-soft transition hover:bg-abstract-cta-hover";

const abstractBtnClassMobile =
  "inline-flex items-center justify-center rounded-full bg-abstract-cta px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.08em] text-white shadow-soft transition hover:bg-abstract-cta-hover";

const headerAriaLabel =
  "Home — VI Balkan Symposium on Fruit Production Systems, 31 August – 3 September 2027, Banja Luka";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Not wrapped in <header>: sticky nav breaks inside a flex-item wrapper in column layouts */}
      <div role="banner" className="bg-white">
        <div className="relative mx-auto max-w-7xl bg-white">
          <img
            src={headerBanner}
            alt="VI Balkan Symposium on Fruit Production Systems — 31 Aug – 3 Sep 2027 — Banja Luka, Bosnia and Herzegovina — ISHS"
            className="h-auto w-full bg-white object-contain object-center"
            width={1600}
            height={200}
            sizes="100vw"
            decoding="async"
            fetchPriority="high"
          />
          <Link
            to="/"
            className="absolute inset-y-0 left-0 right-[22%] z-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
            aria-label={headerAriaLabel}
            onClick={() => setOpen(false)}
          />
          <a
            href="https://ishs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-y-0 right-0 z-10 w-[22%] min-w-[4.5rem] max-w-[12rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
            aria-label="International Society for Horticultural Science (ISHS)"
          />
        </div>
      </div>

      <div className="sticky top-0 z-50 shrink-0 border-t border-neutral-200/80 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl bg-white">
          <div className="flex items-center justify-between gap-3 px-5 py-2.5 lg:px-8 lg:py-3">
            <nav className="hidden flex-wrap items-center gap-0.5 lg:flex">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-800 dark:hover:bg-neutral-100 dark:hover:text-neutral-900"
                  activeProps={{
                    className:
                      "rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] bg-neutral-200/90 text-neutral-900 dark:bg-neutral-200/90 dark:text-neutral-900",
                  }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block lg:flex-1 lg:shrink-0 lg:text-right">
              <Link to="/abstracts" className={abstractBtnClass}>
                Submit abstract
              </Link>
            </div>

            <button
              className="ml-auto inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-200/80 text-neutral-800 hover:bg-neutral-200 lg:ml-0 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-site-nav"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div id="mobile-site-nav" className="border-t border-neutral-200/80 bg-white lg:hidden">
              <nav className="mx-auto flex max-w-7xl flex-col gap-0.5 px-5 py-4">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-neutral-700 hover:bg-neutral-100 dark:text-neutral-800 dark:hover:bg-neutral-100"
                    activeProps={{
                      className:
                        "rounded-lg px-3 py-3 text-xs font-semibold uppercase tracking-[0.1em] bg-neutral-200/90 text-neutral-900 dark:bg-neutral-200/90 dark:text-neutral-900",
                    }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/abstracts"
                  onClick={() => setOpen(false)}
                  className={`mt-3 w-full ${abstractBtnClassMobile}`}
                >
                  Submit abstract
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
