import type { Metadata } from "next";
import InterestingNav from "../InterestingNav";
import SiteHeader from "../SiteHeader";

export const metadata: Metadata = {
  title: "Not-Quite Research · Qizhe Li",
  description:
    "Tools, prototypes, and side investigations by Qizhe Li beyond the formal publication record.",
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function LiteratureVisual() {
  return (
    <div className="project-visual literature-visual" aria-label="Daily Literature Agent workflow">
      <div className="source-stack">
        <span>arXiv</span>
        <span>OpenAlex</span>
        <span>Semantic Scholar</span>
      </div>
      <span className="visual-arrow" aria-hidden="true">→</span>
      <div className="ranking-stack">
        <span>De-duplicate</span>
        <span>Score relevance</span>
        <span>Track history</span>
      </div>
      <span className="visual-arrow" aria-hidden="true">→</span>
      <div className="report-sheet">
        <small>DAILY REPORT</small>
        <strong>Shortlist</strong>
        <i />
        <i />
        <i />
        <span>Analysis · Trends</span>
      </div>
    </div>
  );
}

function TennisVisual() {
  return (
    <div className="project-visual tennis-visual" aria-label="TennisTrace analysis preview">
      <div className="tennis-court" aria-hidden="true">
        <div className="court-line court-line-a" />
        <div className="court-line court-line-b" />
        <div className="pose-figure">
          <i className="pose-head" />
          <i className="pose-torso" />
          <i className="pose-arm-a" />
          <i className="pose-arm-b" />
          <i className="pose-leg-a" />
          <i className="pose-leg-b" />
          <span className="joint joint-a" />
          <span className="joint joint-b" />
          <span className="joint joint-c" />
          <span className="joint joint-d" />
        </div>
        <div className="ball-trajectory">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="tennis-readout">
        <span>Action mechanics <strong>7.6</strong></span>
        <span>Ball quality <strong>6.9</strong></span>
        <span>Stability <strong>7.2</strong></span>
        <span>Efficiency <strong>6.7</strong></span>
      </div>
    </div>
  );
}

export default function EverythingPage() {
  return (
    <main>
      <SiteHeader innerPage />
      <InterestingNav />

      <header className="notebook-hero">
        <p className="eyebrow">Something Interesting · 01</p>
        <h1>Not-Quite Research</h1>
        <p>
          Not every useful question begins as a paper. This page keeps the
          tools, prototypes, and everyday investigations that sit outside my
          formal publication record.
        </p>
      </header>

      <section className="project-notes" aria-label="Independent research projects">
        <div className="project-card-grid">
          <article className="project-card">
            <LiteratureVisual />
            <div className="project-card-content">
              <div className="project-card-meta">
                <span>01 · 2026</span>
                <small>Public system</small>
              </div>
              <p className="project-question">
                How can a literature routine become a dependable research instrument?
              </p>
              <h2>Daily Literature Agent</h2>
              <p>
                A configurable research assistant that retrieves recent papers
                from multiple academic sources, removes duplicates, ranks them
                against a research profile, and prepares a concise daily
                reading brief.
              </p>
              <ul className="project-capabilities">
                <li>Multi-source retrieval</li>
                <li>Deterministic relevance scoring</li>
                <li>LLM paper analysis</li>
                <li>Markdown, HTML, and email reports</li>
              </ul>
              <p className="project-detail">
                SQLite history prevents repeated recommendations, while the
                reporting layer keeps both individual paper notes and emerging
                topic trends.
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

          <article className="project-card">
            <TennisVisual />
            <div className="project-card-content">
              <div className="project-card-meta">
                <span>02 · 2026</span>
                <small>Private prototype</small>
              </div>
              <p className="project-question">
                Can an AI coach distinguish movement quality from shot outcome?
              </p>
              <h2>TennisTrace</h2>
              <p>
                A video-analysis system that combines player motion and ball
                trajectory instead of judging a stroke from pose alone.
                YOLO-based pose extraction, rally detection, and ball tracking
                are translated into coach-like action semantics.
              </p>
              <ul className="project-capabilities">
                <li>Pose and rally detection</li>
                <li>Ball trajectory analysis</li>
                <li>Stroke semantics</li>
                <li>Calibrated four-part scoring</li>
              </ul>
              <p className="project-detail">
                The scoring engine evaluates action mechanics, ball quality,
                stability, and efficiency. The language model explains those
                structured results and proposes focused practice drills rather
                than inventing the score itself.
              </p>
              <p className="project-private-note">
                Ongoing private work · source videos and code are not published.
              </p>
            </div>
          </article>
        </div>
      </section>

      <div className="notebook-return">
        <a href="/">← Return to the academic profile</a>
      </div>

      <footer>
        <div>
          <p>Qizhe Li</p>
          <span>Not-Quite Research</span>
        </div>
        <div className="footer-links">
          <a href="/interesting/">Something Interesting</a>
          <a href="https://github.com/LQZZZZZZ" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </footer>
    </main>
  );
}
