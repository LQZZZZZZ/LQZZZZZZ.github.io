"use client";

import {
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
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
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const dragging = useRef(false);
  const moved = useRef(false);

  const works = useMemo(
    () =>
      filter === "All"
        ? researchWorks
        : researchWorks.filter((work) => work.area === filter),
    [filter],
  );

  function scroll(direction: -1 | 1) {
    trackRef.current?.scrollBy({
      left: direction * Math.min(window.innerWidth * 0.72, 620),
      behavior: "smooth",
    });
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragging.current = true;
    moved.current = false;
    startX.current = event.clientX;
    startScroll.current = event.currentTarget.scrollLeft;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return;
    const delta = event.clientX - startX.current;
    if (Math.abs(delta) > 4) moved.current = true;
    event.currentTarget.scrollLeft = startScroll.current - delta;
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    dragging.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") scroll(1);
    if (event.key === "ArrowLeft") scroll(-1);
  }

  return (
    <div className="timeline-explorer">
      <div className="timeline-toolbar">
        <div className="timeline-filters" aria-label="Filter research timeline">
          {filters.map((option) => (
            <button
              className={filter === option ? "active" : ""}
              key={option}
              onClick={() => {
                setFilter(option);
                trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
              }}
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
        <div className="timeline-controls">
          <span>Drag or use arrow keys</span>
          <button type="button" onClick={() => scroll(-1)} aria-label="Previous research work">
            ←
          </button>
          <button type="button" onClick={() => scroll(1)} aria-label="Next research work">
            →
          </button>
        </div>
      </div>

      <div
        className="timeline-track"
        ref={trackRef}
        role="region"
        aria-label="Research works in reverse chronological order"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClickCapture={(event) => {
          if (moved.current) {
            event.preventDefault();
            moved.current = false;
          }
        }}
      >
        {works.map((work, index) => (
          <article className={`timeline-card ${work.image ? "with-figure" : ""}`} key={work.id}>
            <div className="timeline-date">
              <span>{work.year}</span>
              <i aria-hidden="true" />
              <small>{String(index + 1).padStart(2, "0")}</small>
            </div>
            {work.image && (
              <figure>
                <img src={work.image} alt={work.imageAlt} draggable="false" />
                <figcaption>{work.imageCaption}</figcaption>
              </figure>
            )}
            <div className="timeline-card-body">
              <div className="work-classification">
                <span>{work.area}</span>
                <span>{work.tag}</span>
              </div>
              <h3>{work.title}</h3>
              <p className="work-authors">{work.authors}</p>
              <p className="work-venue">{work.venue}</p>
              <p className="work-abstract">{work.abstract}</p>
              <div className="timeline-links">
                <a href={work.scholar} target="_blank" rel="noreferrer">
                  Scholar <Arrow />
                </a>
                <a href={work.paper} target="_blank" rel="noreferrer">
                  Paper <Arrow />
                </a>
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
