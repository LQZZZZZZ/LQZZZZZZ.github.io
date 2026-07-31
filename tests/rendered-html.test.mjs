import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("homepage is dedicated to profile and background", async () => {
  const [page, data] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/research-data.ts", root), "utf8"),
  ]);

  assert.match(page, /Ph\.D\. Student in Computer and Information Engineering/);
  assert.match(page, /Visiting Student/);
  assert.match(page, /Shenzhen Research Institute of Big Data/);
  assert.match(page, /CIE Ph\.D\. student at CUHK-Shenzhen/);
  assert.match(page, /asking why things work\s+the way they do/);
  assert.match(page, /playing tennis and photography/);
  assert.match(page, /connect, exchange ideas, and collaborate/);
  assert.match(page, /profile-intro/);
  assert.doesNotMatch(page, /dreams of\s+doing absolutely nothing/);
  assert.match(page, /qizheli@link\.cuhk\.edu\.cn/);
  assert.match(page, /AI for Wireless Networking/);
  assert.equal(
    (page.match(/className="institution-logo/g) ?? []).length,
    5,
    "every institution must have a logo",
  );
  assert.doesNotMatch(page, /I study how reliable learning and reasoning/);
  assert.match(page, /profile-history/);
  assert.doesNotMatch(page, /research-threads/);
  assert.doesNotMatch(page, /Selected publications|patent-list|everything-teaser/);
  assert.match(data, /Uncertainty Quantification/);
  assert.match(data, /AI for Networks/);
  assert.match(page, /Google Scholar/);
  assert.doesNotMatch(page, /DK-Root is available on GitHub/);
  assert.match(data, /github\.com\/LQZZZZZZ\/DK_Root/);
});

test("top-level tabs lead to separate pages", async () => {
  const [home, publications, patentPage, patentData, header] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/publications/page.tsx", root), "utf8"),
    readFile(new URL("app/patents/page.tsx", root), "utf8"),
    readFile(new URL("app/patent-data.ts", root), "utf8"),
    readFile(new URL("app/SiteHeader.tsx", root), "utf8"),
  ]);

  assert.match(header, /href="\/publications\/">Publications</);
  assert.match(header, /href="\/patents\/">Patents</);
  assert.match(header, /href="\/everything\/">Everything is Research</);
  assert.doesNotMatch(header, />Timeline</);
  assert.doesNotMatch(home, /ResearchTimeline|patent-list/);
  assert.match(publications, /ResearchTimeline/);
  assert.match(publications, /Selected publications/);
  assert.match(patentPage, /patent-list/);
  assert.equal((patentData.match(/status: "(?:Filed|Granted)"/g) ?? []).length, 4);
  assert.match(patentData, /ZL202511903863\.4/);
  assert.match(patentData, /CN121357036B/);
  assert.match(patentData, /CN116451570B/);
  assert.match(patentData, /CN116562124B/);
  assert.doesNotMatch(patentData, /CN111046606A|CN106372278A/);
});

test("research timeline is vertical, filterable, illustrated, and reverse chronological", async () => {
  const [timeline, data] = await Promise.all([
    readFile(new URL("app/ResearchTimeline.tsx", root), "utf8"),
    readFile(new URL("app/research-data.ts", root), "utf8"),
  ]);

  assert.doesNotMatch(timeline, /onPointerDown|onPointerMove|ArrowRight/);
  assert.match(timeline, /role="list"/);
  assert.match(timeline, /AI for Networks/);
  assert.match(timeline, /Uncertainty Quantification/);
  assert.match(data, /\/research\/dk-root-overview\.png/);
  assert.match(data, /\/research\/qoe-reasoner-overview\.png/);
  assert.equal(
    (data.match(/image: "\/research\//g) ?? []).length,
    8,
    "every research work must include a figure",
  );
  assert.equal(
    (data.match(/imageAlt: "/g) ?? []).length,
    8,
    "every research figure must have alternative text",
  );

  const qoe = data.indexOf('id: "qoe-reasoner"');
  const dk = data.indexOf('id: "dk-root"');
  const semi = data.indexOf('id: "semi-root"');
  const sppr = data.indexOf('id: "s-ppr"');
  const rego = data.indexOf('id: "rego"');
  const apce = data.indexOf('id: "apce"');
  assert.ok(qoe < dk && dk < semi && semi < sppr && sppr < rego && rego < apce);
});

test("Everything is Research separates tools and private prototypes", async () => {
  const [page, config] = await Promise.all([
    readFile(new URL("app/everything/page.tsx", root), "utf8"),
    readFile(new URL("next.config.ts", root), "utf8"),
  ]);

  assert.match(page, /Daily Literature Agent/);
  assert.match(page, /AutoPaperReporter/);
  assert.match(page, /TennisTrace/);
  assert.match(page, /project-card-grid/);
  assert.match(page, /Action mechanics/);
  assert.match(page, /Ball quality/);
  assert.match(page, /Private prototype/);
  assert.doesNotMatch(page, /github\.com\/LQZZZZZZ\/Tennis/);
  assert.match(config, /trailingSlash: process\.env\.GITHUB_PAGES === "1"/);
});

test("visitor counter has a privacy-minimal fallback", async () => {
  const counter = await readFile(new URL("app/VisitorCounter.tsx", root), "utf8");

  assert.match(counter, /lqzzzzzz\.github\.io/);
  assert.match(counter, /counterapi\.dev\/v1\/lqzzzzzz-github-io\/visitors/);
  assert.match(counter, /endpoint\}\/up/);
  assert.match(counter, /data\.count/);
  assert.match(counter, /Welcome, visitor No\./);
  assert.match(counter, /Welcome/);
  assert.doesNotMatch(counter, /document\.referrer|search_query|email|timezone/);
});

test("design uses Arial throughout and responsive layouts", async () => {
  const [css, layout, notFound] = await Promise.all([
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("app/not-found.tsx", root), "utf8"),
  ]);

  assert.match(css, /--pink:/);
  assert.match(css, /--lavender:/);
  assert.match(css, /@media \(max-width: 620px\)/);
  assert.match(css, /font-family: Arial, Helvetica, sans-serif/);
  assert.match(css, /\.timeline-track::before/);
  assert.doesNotMatch(css, /scroll-snap-type: x mandatory/);
  assert.doesNotMatch(css, /Comic Sans|Times New Roman|Georgia/);
  assert.doesNotMatch(layout, /next\/font|Geist_Mono|Georgia|Times New Roman/);
  assert.match(notFound, /not-found-page/);
});
