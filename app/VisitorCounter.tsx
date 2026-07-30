"use client";

import { useEffect, useState } from "react";

const endpoint = "https://visitor.6developer.com/visit";
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
        const response = await fetch(
          shouldCount ? endpoint : `${endpoint}?domain=${encodeURIComponent(domain)}`,
          {
            method: shouldCount ? "POST" : "GET",
            headers: shouldCount ? { "Content-Type": "application/json" } : undefined,
            body: shouldCount
              ? JSON.stringify({ domain, page_path: "/" })
              : undefined,
            signal: controller.signal,
          },
        );

        if (!response.ok) throw new Error("Visitor counter unavailable");

        const data = (await response.json()) as { totalCount?: number };
        if (typeof data.totalCount !== "number") {
          throw new Error("Visitor count missing");
        }

        setCount(data.totalCount);
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
