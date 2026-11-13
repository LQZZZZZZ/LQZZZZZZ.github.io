"use client";

import {
  useMemo,
  useState,
} from "react";
import { researchWorks, type ResearchArea } from "./research-data";

const filters: Array<"All" | ResearchArea> = [
  "All",
  "AI for Networks",
  "Uncertainty Quantification",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function ResearchTimeline() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const works = useMemo(
    () => filter === "All"
        ? researchWorks
        : researchWorks.filter((work) => work.area === filter),
    [filter],
  );

  return (
    <div className="timeline-explorer">
      <div className="timeline-toolbar">
        <div className="timeline-filters" aria-label="Filter publications">
          {filters.map((option) => (
            <button
              className={filter === option ? "active" : ""}
              aria-pressed={filter === option}
              key={option}
              onClick={() => setFilter(option)}
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div
        className="timeline-track"
        role="list"
        aria-label="Research works in reverse chronological order"
      >
        {works.map((work, index) => (
          <article
            className={`timeline-card ${work.image ? "with-figure" : ""}`}
            key={work.id}
            role="listitem"
          >
            <div className="timeline-date">
              <span>{work.year}</span>
              <i aria-hidden="true" />
              <small>{String(index + 1).padStart(2, "0")}</small>
            </div>
            {work.image && (
              <figure>
                <a href={work.paper} target="_blank" rel="noreferrer"><img src={work.image} alt={work.imageAlt} draggable="false" loading="lazy" /></a>
                <figcaption>{work.imageCaption}</figcaption>
              </figure>
            )}
            <div className="timeline-card-body">
              <div className="work-classification">
                {work.authors.startsWith("Q. Li,") && <span className="publication-badge first-author-badge">First author</span>}
                {work.ccfRank && (
                  <a className="publication-badge ccf-badge" href="https://www.ccf.org.cn/Academic_Evaluation/CN/" target="_blank" rel="noreferrer">
                    {work.submitted ? "Submitted · " : ""}CCF {work.ccfRank}
                  </a>
                )}
                <span>{work.area}</span>
                <span>{work.tag}</span>
              </div>
              <h3><a href={work.paper} target="_blank" rel="noreferrer">{work.title}</a></h3>
              <p className="work-authors">{work.authors.split(/(Q\. Li)/).map((part, i) => part === "Q. Li" ? <strong key={i}>{part}</strong> : part)}</p>
              <p className="work-venue">{work.ccfRank && !work.submitted ? <strong>{work.venue}</strong> : work.venue}</p>
              <p className="work-abstract">{work.abstract}</p>
              <div className="timeline-links">
                <a href={work.scholar} target="_blank" rel="noreferrer">
                  Scholar <Arrow />
                </a>
                <a href={work.paper} target="_blank" rel="noreferrer">
                  Paper <Arrow />
                </a>
                {work.demo && (
                  <a href={work.demo} target="_blank" rel="noreferrer">
                    Demo <Arrow />
                  </a>
                )}
                {work.code && (
                  <a href={work.code} target="_blank" rel="noreferrer">
                    Code <Arrow />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
