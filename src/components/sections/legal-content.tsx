import type { ReactNode } from "react";

export default function LegalContent({ children }: { children: ReactNode }) {
  return <section className="container legal-content">{children}</section>;
}
