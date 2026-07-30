import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("homepage joins profile and background while keeping research threads vertical", async () => {
  const [page, data] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/research-data.ts", root), "utf8"),
  ]);

  assert.match(page, /Ph\.D\. Student in Computer and Information Engineering/);
  assert.match(page, /profile-history/);
  assert.match(page, /research-threads/);
  assert.match(page, /Uncertainty Quantification/);
  assert.match(page, /AI for Networks/);
  assert.match(page, /Google Scholar/);
  assert.doesNotMatch(page, /DK-Root is available on GitHub/);
  assert.match(data, /github\.com\/LQZZZZZZ\/DK_Root/);
});

test("research timeline is interactive, illustrated, and reverse chronological", async () => {
  const [timeline, data] = await Promise.all([
    readFile(new URL("app/ResearchTimeline.tsx", root), "utf8"),
    readFile(new URL("app/research-data.ts", root), "utf8"),
  ]);

  assert.match(timeline, /onPointerDown/);
  assert.match(timeline, /onPointerMove/);
  assert.match(timeline, /ArrowRight/);
  assert.match(timeline, /AI for Networks/);
  assert.match(timeline, /Uncertainty Quantification/);
  assert.match(data, /\/research\/dk-root-overview\.png/);
  assert.match(data, /\/research\/qoe-reasoner-overview\.png/);

  const qoe = data.indexOf('id: "qoe-reasoner"');
  const dk = data.indexOf('id: "dk-root"');
  const semi = data.indexOf('id: "semi-root"');
  const sppr = data.indexOf('id: "s-ppr"');
  const rego = data.indexOf('id: "rego"');
  const apce = data.indexOf('id: "apce"');
  assert.ok(qoe < dk && dk < semi && semi < sppr && sppr < rego && rego < apce);
});

test("Everything is Research separates tools and private prototypes", async () => {
  const page = await readFile(new URL("app/everything/page.tsx", root), "utf8");

  assert.match(page, /Daily Literature Agent/);
  assert.match(page, /AutoPaperReporter/);
  assert.match(page, /Tennis Motion Recognition/);
  assert.match(page, /Private prototype/);
  assert.doesNotMatch(page, /github\.com\/LQZZZZZZ\/TennisCoach/);
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
  assert.match(css, /scroll-snap-type: x mandatory/);
  assert.doesNotMatch(layout, /next\/font|Geist_Mono|Georgia|Times New Roman/);
});
