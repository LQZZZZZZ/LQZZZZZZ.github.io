import type { Metadata } from "next";
import SiteHeader from "../SiteHeader";
import { patents } from "../patent-data";

export const metadata: Metadata = {
  title: "Patents · Qizhe Li",
  description:
    "Patents by Qizhe Li in intelligent network diagnosis and uncertainty-aware electromagnetic modeling.",
};

export default function PatentsPage() {
  return (
    <main>
      <SiteHeader innerPage />
      <section className="section patent-section page-section">
        <div className="section-heading">
          <p className="eyebrow">Patents</p>
          <h1>Invented with collaborators</h1>
          <p>
            Patents spanning intelligent network diagnosis and uncertainty-aware
            electromagnetic modeling.
          </p>
        </div>
        <ol className="patent-list">
          {patents.map((patent, index) => (
            <li key={patent.title}>
              <div className="patent-number">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{patent.status}</small>
              </div>
              <div className="patent-copy">
                <h3>{patent.title}</h3>
                <p className="patent-inventors">{patent.inventors}</p>
                <p className="patent-id">{patent.number}</p>
                <p>{patent.summary}</p>
                {patent.link && (
                  <a href={patent.link} target="_blank" rel="noreferrer">
                    Patent record <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>
      <footer>
        <div>
          <p>Qizhe Li</p>
          <span>Patents</span>
        </div>
        <div className="footer-links">
          <a href="/">About</a>
          <a href="/publications/">Publications</a>
          <a href="/everything/">Everything is Research</a>
        </div>
      </footer>
    </main>
  );
}
