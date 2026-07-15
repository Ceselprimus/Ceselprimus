"use client";

import type { MouseEvent, ReactNode } from "react";

/**
 * Toggles the <details targetId> section open/closed and scrolls to it.
 * Degrades to a plain anchor link without JS (browsers natively open a
 * closed <details> when navigating to its id).
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
    details.open = !details.open;
    if (details.open) {
      requestAnimationFrame(() => details.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
