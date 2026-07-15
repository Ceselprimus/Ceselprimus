"use client";

import type { MouseEvent, ReactNode } from "react";

/**
 * Toggles the <details targetId> section open/closed and scrolls into place.
 * Opening scrolls to the section; closing scrolls back to the lineup cards so
 * the user always has a way "back" without leaving the page. Degrades to a
 * plain anchor link without JS (browsers natively open a closed <details>
 * when navigating to its id).
 */
export default function DetailToggle({
  targetId,
  className,
  children
}: {
  targetId: string;
  className?: string;
  children: ReactNode;
}) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const details = document.getElementById(targetId);
    if (!(details instanceof HTMLDetailsElement)) return;
    event.preventDefault();
    const willOpen = !details.open;
    details.open = willOpen;
    const scrollId = willOpen ? targetId : "lineup";
    requestAnimationFrame(() => {
      document.getElementById(scrollId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
