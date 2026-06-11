"use client";

import { useState, type ReactNode } from "react";
import ContactModal from "./ContactModal";
import type { HomeContent } from "../home-content";

export default function InquiryButton({
  className,
  contact,
  children
}: {
  className: string;
  contact: HomeContent["contact"];
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      <ContactModal contact={contact} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
