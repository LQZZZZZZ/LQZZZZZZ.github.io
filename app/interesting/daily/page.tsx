import type { Metadata } from "next";
import { dailyEntries } from "../../daily-data";
import InterestingNav from "../../InterestingNav";
import SiteHeader from "../../SiteHeader";
import DailyCalendar from "./DailyCalendar";

export const metadata: Metadata = {
  title: "Daily Sharing · Qizhe Li",
  description: "A calendar of paper notes, links, blog entries, and daily discoveries shared by Qizhe Li.",
};

export default function DailySharingPage() {
  return (
    <main>
      <SiteHeader innerPage />
      <InterestingNav />
      <section className="section page-section daily-section">
        <div className="section-heading">
          <p className="eyebrow">Something Interesting · 03</p>
          <h1>Daily Sharing</h1>
          <p>Paper notes, useful links, blog entries, and small discoveries—placed on the day I shared them.</p>
        </div>
        <DailyCalendar entries={dailyEntries} />
      </section>
    </main>
  );
}
