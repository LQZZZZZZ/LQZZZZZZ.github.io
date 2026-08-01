import type { Metadata } from "next";
import SiteHeader from "../SiteHeader";
import { researchNotes } from "../notes-data";

export const metadata: Metadata = {
  title: "Research Notes · Qizhe Li",
  description:
    "Dated thoughts, questions, and small reflections from Qizhe Li's research life.",
};

export default function ResearchNotesPage() {
  return (
    <main>
      <SiteHeader innerPage />
      <section className="section page-section notes-section">
        <div className="section-heading">
          <p className="eyebrow">Research Notes</p>
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
          <span>Research Notes</span>
        </div>
        <div className="footer-links">
          <a href="/">About</a>
          <a href="/publications/">Publications</a>
          <a href="/patents/">Patents</a>
        </div>
      </footer>
    </main>
  );
}
