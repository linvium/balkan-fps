import { useEffect, useState } from "react";

/** Eased count from 0 to target while `enabled` is true (e.g. when section scrolls into view). */
export function useCountUp(target: number, durationMs: number, enabled: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setValue(0);
      return;
    }
    if (target <= 0) {
      setValue(0);
      return;
    }

    let start: number | null = null;
    let raf = 0;

    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start!) / durationMs, 1);
      const eased = 1 - (1 - p) ** 2;
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, enabled]);

  return value;
}
