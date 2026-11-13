import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("homepage presents profile, research focus, news, and background", async () => {
  const [home, sidebar, data] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/SiteSidebar.tsx", root), "utf8"),
    readFile(new URL("app/research-data.ts", root), "utf8"),
  ]);

  const page = home + sidebar;
  assert.match(page, /Ph\.D\. student in Computer and Information Engineering/);
  assert.match(page, /Joint Ph.D. Training/);
  assert.match(page, /Shenzhen Research Institute of Big Data/);
  assert.match(page, /Shenzhen, advised by/);
  assert.match(page, /sites\.google\.com\/view\/guangxuzhu\/home/);
  assert.match(page, /playing tennis and photography/);
  assert.match(page, /connect, exchange ideas, and collaborate/);
  assert.match(page, /home-intro/);
  assert.doesNotMatch(page, /dreams of\s+doing absolutely nothing/);
  assert.match(page, /qizheli@link\.cuhk\.edu\.cn/);
  assert.match(page, /intelligent networks and AI-RAN/);
  assert.equal(
    (page.match(/logo: "/g) ?? []).length,
    6,
    "every institution must have a logo",
  );
  assert.doesNotMatch(page, /I study how reliable learning and reasoning/);
  assert.match(page, /experience-list/);
  assert.doesNotMatch(page, /Recent updates|exploring unfamiliar ideas/);
  assert.doesNotMatch(home, /Research Interests/);
  assert.doesNotMatch(sidebar, /李启喆/);
  assert.match(sidebar, />qizheli@link\.cuhk\.edu\.cn<\/a>/);
  assert.doesNotMatch(home, /id="skills"|Research &amp; Engineering/);
  assert.match(home, /id="awards"/);
  assert.match(page, /<NewsList/);
  assert.doesNotMatch(page, /patent-list|everything-teaser/);
  assert.match(data, /Uncertainty Quantification/);
  assert.match(data, /AI for Networks/);
  assert.match(page, /Google Scholar/);
  assert.doesNotMatch(page, /DK-Root is available on GitHub/);
  assert.match(data, /github\.com\/LQZZZZZZ\/DK_Root/);
});

test("navigation reaches homepage sections and separate pages", async () => {
  const [home, publications, patentPage, patentData, notesPage, notesData, header] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/publications/page.tsx", root), "utf8"),
    readFile(new URL("app/patents/page.tsx", root), "utf8"),
    readFile(new URL("app/patent-data.ts", root), "utf8"),
    readFile(new URL("app/notes/page.tsx", root), "utf8"),
    readFile(new URL("app/notes-data.ts", root), "utf8"),
    readFile(new URL("app/SiteHeader.tsx", root), "utf8"),
  ]);

  assert.match(header, /href: "\/#publications", label: "Publications"/);
  assert.match(header, /href: "\/patents\/", label: "Patents"/);
  assert.match(header, /href: "\/interesting\/", label: "Something Interesting"/);
  assert.doesNotMatch(header, />Timeline</);
  assert.match(home, /ResearchTimeline/);
  assert.doesNotMatch(home, /patent-list/);
  assert.match(publications, /ResearchTimeline/);
  assert.match(publications, /<h1>Publications<\/h1>/);
  assert.match(patentPage, /patent-list/);
  assert.match(notesPage, /notes-timeline/);
  assert.match(notesData, /2026-08-01T21:26:00\+08:00/);
  assert.match(notesData, /refinement of everyday thinking/);
  assert.match(notesData, /keep asking why/);
  assert.match(notesData, /bloodshot this morning\. 😭/);
  assert.equal((patentData.match(/status: "(?:Filed|Granted)"/g) ?? []).length, 4);
  assert.match(patentData, /ZL202511903863\.4/);
  assert.match(patentData, /CN121357036B/);
  assert.match(patentData, /CN116451570B/);
  assert.match(patentData, /CN116562124B/);
  assert.doesNotMatch(patentData, /CN111046606A|CN106372278A/);
});

test("Something Interesting restores the sharing calendar and bilingual post", async () => {
  const [hub, nav, calendarPage, calendar, entries, post] = await Promise.all([
    readFile(new URL("app/interesting/page.tsx", root), "utf8"),
    readFile(new URL("app/InterestingNav.tsx", root), "utf8"),
    readFile(new URL("app/interesting/daily/page.tsx", root), "utf8"),
    readFile(new URL("app/interesting/daily/DailyCalendar.tsx", root), "utf8"),
    readFile(new URL("app/daily-data.ts", root), "utf8"),
    readFile(new URL("app/interesting/daily/learning-to-ask-why/page.tsx", root), "utf8"),
  ]);

  assert.match(hub, /Not-Quite Research/);
  assert.match(hub, /Research Posts/);
  assert.match(hub, /Sharing Calendar/);
  assert.match(nav, /\/interesting\/daily\//);
  assert.match(calendarPage, /<DailyCalendar entries={dailyEntries} \/>/);
  assert.match(calendar, /Previous month|Next month|calendar-grid/);
  assert.match(entries, /2026-08-02/);
  assert.match(post, /English/);
  assert.match(post, /中文/);
  assert.doesNotMatch(hub + calendarPage + nav, /Daily Sharing/);
});

test("publications are filterable, illustrated, and reverse chronological", async () => {
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
    9,
    "every research work must include a figure",
  );
  assert.equal(
    (data.match(/imageAlt: "/g) ?? []).length,
    9,
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
  assert.match(counter, /window\.location\.pathname === "\/"/);
  assert.doesNotMatch(counter, /localStorage/);
  assert.match(counter, /cache: "no-store"/);
  assert.match(counter, /data\.count/);
  assert.match(counter, /Visitor No\./);
  assert.match(counter, /Welcome/);
  assert.doesNotMatch(counter, /document\.referrer|search_query|email|timezone/);
});

test("site keeps consistent sans-serif typography and responsive layouts", async () => {
  const [css, layout, notFound] = await Promise.all([
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("app/not-found.tsx", root), "utf8"),
  ]);

  assert.match(css, /--pink:/);
  assert.match(css, /--lavender:/);
  assert.match(css, /@media \(max-width: 620px\)/);
  assert.match(css, /grid-column: 1 \/ -1/);
  assert.match(css, /\.nav-toggle/);
  assert.match(css, /font-family: "Trebuchet MS", Arial, Helvetica, sans-serif/);
  assert.match(css, /\.profile-sidebar/);
  assert.match(layout, /<SiteSidebar \/>/);
  assert.doesNotMatch(css, /scroll-snap-type: x mandatory/);
  assert.doesNotMatch(css, /Comic Sans|Times New Roman|Georgia/);
  assert.doesNotMatch(layout, /next\/font|Geist_Mono|Georgia|Times New Roman/);
  assert.match(notFound, /not-found-page/);
});
