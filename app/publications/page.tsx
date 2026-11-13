import type { Metadata } from "next";
import Link from "next/link";
import ResearchTimeline from "../ResearchTimeline";
import { scholarUrl } from "../research-data";

export const metadata: Metadata = {
  title: "Publications · Qizhe Li",
  description: "Publications by Qizhe Li.",
};

export default function PublicationsPage() {
  return (
    <main>
      <section className="section timeline-section page-section">
        <div className="timeline-heading">
          <div className="section-heading">
            <h1>Publications</h1>
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
          <span>Publications · © 2026</span>
        </div>
        <div className="footer-links">
          <Link href="/">About</Link>
          <a href="/patents/">Patents</a>
          <a href="/interesting/">Something Interesting</a>
        </div>
      </footer>
    </main>
  );
}
