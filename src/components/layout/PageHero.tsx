import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  backgroundImage,
  photoFillSection,
  readingPanel,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  /** Optional photographic backdrop (muted by overlays for readable text). */
  backgroundImage?: string;
  /**
   * Use only on short heroes (e.g. Sessions, Cherry+): the photo is painted as the section’s own
   * `background-image` (cover) so transparent overlay fades reveal the photo — not the page
   * background. Other pages keep the animated `<img>` path.
   */
  photoFillSection?: boolean;
  /** Frosted panel + stronger scrim + justified intro copy (busy photo heroes). */
  readingPanel?: boolean;
}) {
  const hasPhoto = Boolean(backgroundImage);
  const fillShortHero = Boolean(backgroundImage && photoFillSection);
  const useReadingPanel = Boolean(readingPanel && hasPhoto);

  /** Photo heroes (dates, registration, programme, sponsors, organization, …): fit text, max 450px. */
  const descriptionFit =
    "inline-block w-fit max-w-[min(100%,450px)] text-sm text-balance md:text-base md:leading-relaxed";
  const descriptionPhotoPanel =
    "rounded-2xl border border-white/35 bg-white/40 px-4 py-3 text-foreground backdrop-blur-[2px] md:px-5 md:py-3.5 dark:border-white/10 dark:bg-background/45";

  /** Paint photo on the section so overlay gradients that fade to transparent still reveal the image, not the page background. */
  const sectionPhotoStyle =
    fillShortHero && backgroundImage
      ? ({
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        } satisfies CSSProperties)
      : undefined;

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        hasPhoto && !fillShortHero && "bg-muted",
        hasPhoto && fillShortHero && "bg-muted",
        !hasPhoto && "bg-gradient-warm",
        /* Uniform hero band height across inner pages (photo heroes). */
        hasPhoto &&
          !fillShortHero &&
          "min-h-[max(28rem,42svh)] md:min-h-[max(30rem,46svh)]",
        fillShortHero && "min-h-[max(28rem,42svh)] md:min-h-[max(30rem,46svh)]",
      )}
      style={sectionPhotoStyle}
    >
      {hasPhoto ? (
        <>
          {!fillShortHero ? (
            <motion.div
              className="absolute inset-0 z-0 min-h-full w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <img
                src={backgroundImage}
                alt=""
                width={1920}
                height={640}
                className="absolute inset-0 h-full min-h-full w-full object-cover object-center brightness-[1.04] contrast-[1.03] saturate-[1.12]"
                loading="eager"
                decoding="async"
                sizes="100vw"
              />
            </motion.div>
          ) : null}
          <div
            className={cn(
              "pointer-events-none absolute inset-0 z-[1] min-h-full bg-gradient-to-b",
              fillShortHero
                ? useReadingPanel
                  ? "from-background/58 via-background/22 to-transparent"
                  : "from-background/38 via-background/12 to-transparent"
                : "from-background/45 via-background/28 to-background/55",
            )}
            aria-hidden
          />
          <div
            className={cn(
              "pointer-events-none absolute inset-0 z-[1] min-h-full bg-gradient-to-t via-transparent to-transparent",
              fillShortHero ? (useReadingPanel ? "from-background/20" : "from-background/8") : "from-background/35",
            )}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1] min-h-full bg-gradient-to-tr from-primary/[0.05] via-transparent to-accent/[0.06]"
            aria-hidden
          />
        </>
      ) : (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-warm" aria-hidden />
          <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        </>
      )}
      <div
        className={cn(
          "relative z-10 mx-auto max-w-5xl px-5 py-20 lg:px-8 lg:py-28",
          !useReadingPanel && "flex flex-col items-center text-center",
        )}
      >
        {useReadingPanel ? (
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/40 bg-background/85 px-6 py-8 shadow-elevated backdrop-blur-md md:px-10 md:py-11 dark:border-white/12 dark:bg-background/80">
            {eyebrow && (
              <p className="mb-4 text-left text-xs font-medium uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
            )}
            <h1
              id="page-hero-title"
              className="text-left font-display text-2xl leading-[1.12] text-foreground text-balance md:text-3xl lg:text-4xl"
            >
              {title}
            </h1>
            {description && (
              <p className="mt-6 text-justify text-sm leading-relaxed text-foreground/90 md:text-base md:leading-relaxed">
                {description}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
        ) : (
          <>
            {eyebrow && (
              <p
                className={cn(
                  "mb-4 text-xs font-medium uppercase tracking-[0.22em] text-primary",
                  hasPhoto &&
                    "[text-shadow:0_0_18px_rgb(255_255_255/_0.92),0_1px_2px_rgb(255_255_255/_0.95)]",
                )}
              >
                {eyebrow}
              </p>
            )}
            <h1
              id="page-hero-title"
              className={cn(
                "font-display text-2xl leading-[1.1] text-foreground text-balance md:text-3xl lg:text-4xl",
                hasPhoto &&
                  "[text-shadow:0_0_28px_rgb(255_255_255/_0.88),0_1px_3px_rgb(255_255_255/_0.95)]",
              )}
            >
              {title}
            </h1>
            {description && (
              <p
                className={cn(
                  "mt-6",
                  descriptionFit,
                  hasPhoto ? descriptionPhotoPanel : "text-muted-foreground",
                )}
              >
                {description}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </>
        )}
      </div>
    </section>
  );
}
