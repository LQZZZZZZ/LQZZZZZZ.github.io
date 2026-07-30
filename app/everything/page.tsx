import type { Metadata } from "next";
import SiteHeader from "../SiteHeader";

export const metadata: Metadata = {
  title: "Everything is Research · Qizhe Li",
  description:
    "Tools, prototypes, and side investigations by Qizhe Li beyond the formal publication record.",
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function EverythingPage() {
  return (
    <main>
      <SiteHeader innerPage />

      <header className="notebook-hero">
        <p className="eyebrow">Project notebook</p>
        <h1>Everything is Research</h1>
        <p>
          Not every useful question begins as a paper. This page keeps the
          tools, prototypes, and everyday investigations that sit outside my
          formal publication record.
        </p>
      </header>

      <section className="project-notes" aria-label="Independent research projects">
        <article>
          <div className="project-margin">
            <span>01</span>
            <time>2026</time>
            <small>Public system</small>
          </div>
          <div className="project-note">
            <p className="project-question">
              How can a literature routine become a dependable research instrument?
            </p>
            <h2>Daily Literature Agent</h2>
            <p>
              A configurable system that retrieves recent papers from public
              academic sources, de-duplicates them, scores them against a
              research profile, and uses an OpenAI-compatible model to prepare
              shortlists, paper analyses, and trend summaries.
            </p>
            <ol className="process-line" aria-label="Daily Literature Agent workflow">
              <li>Retrieve</li>
              <li>De-duplicate</li>
              <li>Score</li>
              <li>Analyse</li>
              <li>Report</li>
            </ol>
            <p className="project-detail">
              Reports are produced in Markdown and HTML, can be delivered by
              email, and use SQLite history to avoid repeated recommendations.
            </p>
            <a
              className="project-link"
              href="https://github.com/LQZZZZZZ/AutoPaperReporter"
              target="_blank"
              rel="noreferrer"
            >
              View the public repository <Arrow />
            </a>
          </div>
        </article>

        <article>
          <div className="project-margin">
            <span>02</span>
            <time>2026</time>
            <small>Private prototype</small>
          </div>
          <div className="project-note">
            <p className="project-question">
              Can computer vision become a useful practice partner?
            </p>
            <h2>Tennis Motion Recognition</h2>
            <p>
              An experimental AI coach for evaluating tennis movements from
              video. The current investigation focuses on video-based action
              recognition and how movement assessment can be translated into
              feedback that is useful during practice.
            </p>
            <p className="project-detail">
              This is an ongoing private prototype. The page records the
              research question without exposing private code or data.
            </p>
          </div>
        </article>
      </section>

      <div className="notebook-return">
        <a href="/">← Return to the academic profile</a>
      </div>

      <footer>
        <div>
          <p>Qizhe Li</p>
          <span>Everything is Research</span>
        </div>
        <div className="footer-links">
          <a href="/">Academic profile</a>
          <a href="https://github.com/LQZZZZZZ" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </footer>
    </main>
  );
}
