import type { Metadata } from "next";
import InterestingNav from "../InterestingNav";

export const metadata: Metadata = {
  title: "Something Interesting · Qizhe Li",
  description: "Projects, research posts, and shared reading by Qizhe Li.",
};

const sections = [
  {
    number: "01",
    title: "Not-Quite Research",
    description: "Tools and prototypes outside the formal publication record.",
    href: "/interesting/not-quite-research/",
  },
  {
    number: "02",
    title: "Research Posts",
    description: "Timestamped thoughts and observations from research.",
    href: "/interesting/research-posts/",
  },
  {
    number: "03",
    title: "Sharing Calendar",
    description: "Paper notes, links, and blog entries arranged by date.",
    href: "/interesting/daily/",
  },
];

export default function InterestingPage() {
  return (
    <main>
      <section className="section page-section interesting-hub">
        <div className="section-heading">
          <h1>Something Interesting</h1>
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
