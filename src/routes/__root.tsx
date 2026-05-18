import { Outlet, Link, createRootRoute, HeadContent } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { OrganizersPatronsStrip } from "@/components/layout/OrganizersPatronsStrip";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center bg-gradient-warm px-4 py-24">
        <div className="max-w-md text-center">
          <p className="font-display text-7xl text-primary">404</p>
          <h1 className="mt-4 font-display text-2xl text-foreground">Page not found</h1>
          <p className="mt-3 text-muted-foreground">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-abstract-cta px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-abstract-cta-hover"
          >
            Back to home
          </Link>
        </div>
      </main>
      <OrganizersPatronsStrip />
      <SiteFooter />
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "VI Balkan Symposium on Fruit Production Systems — Banja Luka 2027" },
      {
        name: "description",
        content:
          "VI Balkan Symposium on Fruit Production Systems, 31 August – 3 September 2027, Banja Luka. Under the auspices of ISHS – Division Temperate Tree Fruits.",
      },
      { name: "author", content: "University of Banja Luka, Faculty of Agriculture" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "VI Balkan Symposium on Fruit Production Systems" },
      {
        property: "og:description",
        content: "Banja Luka, 31 Aug–3 Sep 2027. #BalkanFPS2027",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeadContent />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <OrganizersPatronsStrip />
      <SiteFooter />
    </div>
  );
}
