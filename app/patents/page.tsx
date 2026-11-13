import type { Metadata } from "next";
import Link from "next/link";
import { patents } from "../patent-data";

export const metadata: Metadata = {
  title: "Patents · Qizhe Li",
  description:
    "Patents by Qizhe Li in intelligent network diagnosis and uncertainty-aware electromagnetic modeling.",
};

export default function PatentsPage() {
  return (
    <main>
      <section className="section patent-section page-section">
        <div className="section-heading">
          <h1>Patents</h1>
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
                <a href={patent.cnkiLink} target="_blank" rel="noreferrer">
                  View on CNKI <span aria-hidden="true">↗</span>
                </a>
                {patent.link && (
                  <>
                    {" · "}
                    <a href={patent.link} target="_blank" rel="noreferrer">
                      Patent record <span aria-hidden="true">↗</span>
                    </a>
                  </>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>
      <footer>
        <div>
          <p>Qizhe Li</p>
          <span>Patents · © 2026</span>
        </div>
        <div className="footer-links">
          <Link href="/">About</Link>
          <a href="/publications/">Publications</a>
          <a href="/interesting/">Something Interesting</a>
        </div>
      </footer>
    </main>
  );
}
