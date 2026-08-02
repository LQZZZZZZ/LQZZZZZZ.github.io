"use client";

import { useMemo, useState } from "react";
import type { DailyEntry } from "../../daily-data";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const initialYear = 2026;
const initialMonth = 7;

export default function DailyCalendar({ entries }: { entries: DailyEntry[] }) {
  const [cursor, setCursor] = useState({ year: initialYear, month: initialMonth });
  const cells = useMemo(() => {
    const first = new Date(cursor.year, cursor.month, 1);
    const mondayOffset = (first.getDay() + 6) % 7;
    const start = new Date(cursor.year, cursor.month, 1 - mondayOffset);
    return Array.from({ length: 42 }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);
      const key = [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
      return { date, key, currentMonth: date.getMonth() === cursor.month };
    });
  }, [cursor]);

  const changeMonth = (delta: number) => setCursor((current) => {
    const date = new Date(current.year, current.month + delta, 1);
    return { year: date.getFullYear(), month: date.getMonth() };
  });

  const monthLabel = new Intl.DateTimeFormat("en", { month: "long", year: "numeric" }).format(new Date(cursor.year, cursor.month, 1));

  return (
    <div className="daily-calendar">
      <div className="calendar-toolbar">
        <button type="button" onClick={() => changeMonth(-1)} aria-label="Previous month">←</button>
        <h2 aria-live="polite">{monthLabel}</h2>
        <div>
          <button type="button" onClick={() => setCursor({ year: initialYear, month: initialMonth })}>Today</button>
          <button type="button" onClick={() => changeMonth(1)} aria-label="Next month">→</button>
        </div>
      </div>
      <div className="calendar-grid" role="grid" aria-label={`${monthLabel} daily sharing calendar`}>
        {weekDays.map((day) => <div className="calendar-weekday" role="columnheader" key={day}>{day}</div>)}
        {cells.map((cell) => {
          const dayEntries = entries.filter((entry) => entry.date === cell.key);
          return (
            <div className={`calendar-day${cell.currentMonth ? "" : " muted-day"}`} role="gridcell" key={cell.key}>
              <time dateTime={cell.key}>{cell.date.getDate()}</time>
              <div className="calendar-entries">
                {dayEntries.map((entry) => (
                  <a href={entry.href} key={entry.href} title={`${entry.type}: ${entry.title}`}>
                    <small>{entry.type}</small>
                    <span>{entry.title}</span>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
