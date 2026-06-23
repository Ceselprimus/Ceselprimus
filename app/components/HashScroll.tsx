"use client";

import { useEffect } from "react";

/**
 * Scrolls to the URL hash target on initial page load.
 *
 * When arriving at "/#cases" via a full-page navigation from another route
 * (e.g. clicking a header link on /insights), Next.js App Router hydration
 * resets the scroll position to the top, so the browser's native anchor
 * scroll never sticks. This handler re-applies the scroll a few times to
 * settle past lazy-loaded image layout shifts, and stops as soon as the
 * user scrolls on their own.
 */
export default function HashScroll() {
  useEffect(() => {
    const { hash } = window.location;
    if (!hash || hash.length < 2) return;

    const id = decodeURIComponent(hash.slice(1));
    let cancelled = false;

    const stop = () => {
      cancelled = true;
    };
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchmove", stop, { passive: true });
    window.addEventListener("keydown", stop);

    const jump = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
    };

    const timers = [0, 120, 300, 600, 1000, 1500].map((t) => window.setTimeout(jump, t));

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchmove", stop);
      window.removeEventListener("keydown", stop);
    };
  }, []);

  return null;
}
