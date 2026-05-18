import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-xl leading-tight">
              VI Balkan Symposium on Fruit Production Systems
            </p>
            <p className="mt-3 text-sm text-primary-foreground/75">
              31 August – 3 September 2027 · Banja Luka, Bosnia and Herzegovina
            </p>
            <p className="mt-6 text-sm text-primary-foreground/70">
              Supported by <span className="font-medium text-accent">ISHS</span> – Division
              Temperate Tree Fruits.
            </p>
            <p className="mt-2 inline-block rounded-full bg-accent/15 px-3 py-1.5 text-sm font-medium text-accent">
              #BalkanFPS2027
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/60">
              Navigation
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/cherry-plus" className="hover:text-accent">
                  Cherry+
                </Link>
              </li>
              <li>
                <Link to="/dates" className="hover:text-accent">
                  Important dates
                </Link>
              </li>
              <li>
                <Link to="/abstracts" className="hover:text-accent">
                  Abstract submission
                </Link>
              </li>
              <li>
                <Link to="/registration" className="hover:text-accent">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/program" className="hover:text-accent">
                  Programme
                </Link>
              </li>
              <li>
                <Link to="/sponsors" className="hover:text-accent">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link to="/organization" className="hover:text-accent">
                  Organization
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/60">Contact</p>
            <a
              href="mailto:balkanfps2027@agro.unibl.org"
              className="mt-4 inline-block text-sm font-medium text-primary-foreground/90 underline-offset-4 hover:text-accent hover:underline"
            >
              balkanfps2027@agro.unibl.org
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/60">
          <p>© 2027 University of Banja Luka, Faculty of Agriculture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
