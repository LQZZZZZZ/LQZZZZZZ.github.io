"use client";

import { useEffect, useState } from "react";

const endpoint =
  "https://api.counterapi.dev/v1/lqzzzzzz-github-io/visitors";
const domain = "lqzzzzzz.github.io";
const storageKey = "qizhe-li-visitor-counted-v1";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const production = window.location.hostname === domain;
    const hasVisited = window.localStorage.getItem(storageKey) === "yes";
    const shouldCount = production && !hasVisited;

    async function loadCount() {
      try {
        const response = await fetch(shouldCount ? `${endpoint}/up` : endpoint, {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Visitor counter unavailable");

        const data = (await response.json()) as { count?: number };
        if (typeof data.count !== "number") {
          throw new Error("Visitor count missing");
        }

        setCount(data.count);
        if (shouldCount) window.localStorage.setItem(storageKey, "yes");
      } catch (error) {
        if ((error as Error).name !== "AbortError") setAvailable(false);
      }
    }

    loadCount();
    return () => controller.abort();
  }, []);

  return (
    <div className="visitor-card" aria-live="polite">
      <span className="visitor-dot" aria-hidden="true" />
      {available ? (
        count === null ? (
          <span>Welcome</span>
        ) : (
          <span>
            Welcome, visitor No.{" "}
            <strong>{count.toLocaleString("en-US")}</strong>
          </span>
        )
      ) : (
        <span>Welcome</span>
      )}
    </div>
  );
}
