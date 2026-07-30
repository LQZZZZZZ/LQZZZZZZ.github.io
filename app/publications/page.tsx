import type { Metadata } from "next";
import ResearchTimeline from "../ResearchTimeline";
import SiteHeader from "../SiteHeader";
import { scholarUrl } from "../research-data";

export const metadata: Metadata = {
  title: "Publications · Qizhe Li",
  description:
    "Selected publications by Qizhe Li in AI for wireless networking and uncertainty quantification.",
};

export default function PublicationsPage() {
  return (
    <main>
      <SiteHeader innerPage />
      <section className="section timeline-section page-section">
        <div className="timeline-heading">
          <div className="section-heading">
            <p className="eyebrow">Publications</p>
            <h1>Selected publications</h1>
            <p>
              Research in AI for wireless networking and uncertainty
              quantification, arranged from newest to oldest.
            </p>
          </div>
          <a href={scholarUrl} target="_blank" rel="noreferrer">
            Full publication record <span aria-hidden="true">↗</span>
          </a>
        </div>
        <ResearchTimeline />
      </section>
      <footer>
        <div>
          <p>Qizhe Li</p>
          <span>Publications</span>
        </div>
        <div className="footer-links">
          <a href="/">About</a>
          <a href="/patents/">Patents</a>
          <a href="/everything/">Everything is Research</a>
        </div>
      </footer>
    </main>
  );
}
