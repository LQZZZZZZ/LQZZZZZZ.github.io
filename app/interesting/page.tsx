import type { Metadata } from "next";
import InterestingNav from "../InterestingNav";
import SiteHeader from "../SiteHeader";

export const metadata: Metadata = {
  title: "Something Interesting · Qizhe Li",
  description: "Side projects, research reflections, and daily reading shared by Qizhe Li.",
};

const sections = [
  {
    number: "01",
    title: "Not-Quite Research",
    description: "Tools, prototypes, and questions that live beyond my formal publication record.",
    href: "/interesting/not-quite-research/",
  },
  {
    number: "02",
    title: "Research Posts",
    description: "Timestamped thoughts, questions, and honest moments from everyday research.",
    href: "/interesting/research-posts/",
  },
  {
    number: "03",
    title: "Daily Sharing",
    description: "Paper notes, links, blog entries, and other things worth keeping on a calendar.",
    href: "/interesting/daily/",
  },
];

export default function InterestingPage() {
  return (
    <main>
      <SiteHeader innerPage />
      <section className="section page-section interesting-hub">
        <div className="section-heading">
          <p className="eyebrow">Something Interesting</p>
          <h1>A place for ideas in motion</h1>
          <p>Informal experiments, research reflections, and small discoveries gathered outside the publication list.</p>
        </div>
        <InterestingNav />
        <div className="interesting-grid">
          {sections.map((section) => (
            <a className="interesting-card" href={section.href} key={section.number}>
              <span>{section.number}</span>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
              <small>Open section →</small>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
