import type { Metadata } from "next";
import { dailyEntries } from "../../daily-data";
import InterestingNav from "../../InterestingNav";
import DailyCalendar from "./DailyCalendar";

export const metadata: Metadata = {
  title: "Sharing Calendar · Qizhe Li",
  description: "Paper notes, links, and blog entries arranged by date.",
};

export default function SharingCalendarPage() {
  return (
    <main>
      <InterestingNav />
      <section className="section page-section daily-section">
        <div className="section-heading">
          <h1>Sharing Calendar</h1>
        </div>
        <DailyCalendar entries={dailyEntries} />
      </section>
    </main>
  );
}
