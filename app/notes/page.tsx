import type { Metadata } from "next";
import InterestingNav from "../InterestingNav";
import SiteHeader from "../SiteHeader";
import { researchNotes } from "../notes-data";

export const metadata: Metadata = {
  title: "Research Posts · Qizhe Li",
  description:
    "Dated thoughts, questions, and small reflections from Qizhe Li's research life.",
};

export default function ResearchNotesPage() {
  return (
    <main>
      <SiteHeader innerPage />
      <InterestingNav />
      <section className="section page-section notes-section">
        <div className="section-heading">
          <p className="eyebrow">Something Interesting · 02</p>
          <h1>Thoughts along the way</h1>
          <p>
            Questions, observations, and honest moments from everyday research,
            with the newest note first.
          </p>
        </div>

        <ol className="notes-timeline" aria-label="Research notes in reverse chronological order">
          {researchNotes.map((note, index) => (
            <li key={`${note.dateTime}-${index}`}>
              <article className="note-card">
                <div className="note-meta">
                  <span>{note.label}</span>
                  <time dateTime={note.dateTime}>{note.displayTime}</time>
                </div>
                <p>{note.text}</p>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <footer>
        <div>
          <p>Qizhe Li</p>
          <span>Research Posts</span>
        </div>
        <div className="footer-links">
          <a href="/interesting/">Something Interesting</a>
          <a href="/interesting/daily/">Daily Sharing</a>
        </div>
      </footer>
    </main>
  );
}
