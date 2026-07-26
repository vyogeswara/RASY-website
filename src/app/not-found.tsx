import { ActionLink, SiteFooter } from "@/components/rasy/site-shell";

export default function NotFound() {
  return (
    <>
      <section className="not-found">
        <div>
          <h1>404</h1>
          <h2>This page has moved on.</h2>
          <p>The route you requested does not exist. Return to the main site or explore RASY services.</p>
          <ActionLink href="/">Return home</ActionLink>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
