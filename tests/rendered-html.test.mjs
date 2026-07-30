import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("homepage includes the core academic sections and verified links", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");

  assert.match(page, /Ph\.D\. Student in Computer and Information Engineering/);
  assert.doesNotMatch(page, /Building trustworthy intelligence for complex systems/);
  assert.match(page, /Uncertainty Quantification/);
  assert.match(page, /AI for Networks/);
  assert.match(page, /DK-Root/);
  assert.match(page, /QoEReasoner/);
  assert.match(page, /SemiRoot/);
  assert.match(page, /Google Scholar/);
  assert.match(page, /github\.com\/LQZZZZZZ\/DK_Root/);
});

test("visitor counter has a privacy-minimal fallback", async () => {
  const counter = await readFile(new URL("app/VisitorCounter.tsx", root), "utf8");

  assert.match(counter, /lqzzzzzz\.github\.io/);
  assert.match(counter, /page_path: "\/"/);
  assert.match(counter, /Welcome, visitor No\./);
  assert.match(counter, /Welcome/);
  assert.doesNotMatch(counter, /document\.referrer|search_query|email|timezone/);
});

test("design uses exactly two requested type families and responsive layouts", async () => {
  const [css, layout] = await Promise.all([
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
  ]);

  assert.match(css, /--pink:/);
  assert.match(css, /--lavender:/);
  assert.match(css, /@media \(max-width: 620px\)/);
  assert.match(css, /"Times New Roman"/);
  assert.match(css, /"Comic Sans MS"/);
  assert.doesNotMatch(layout, /next\/font|Geist_Mono|Georgia|Times New Roman/);
});
