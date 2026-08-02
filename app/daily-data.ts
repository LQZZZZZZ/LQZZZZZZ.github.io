export type DailyEntry = {
  date: string;
  title: string;
  titleZh: string;
  href: string;
  type: "Blog" | "Paper Note" | "Link";
};

export const dailyEntries: DailyEntry[] = [
  {
    date: "2026-08-02",
    title: "Learning to Ask Why a Paper Should Exist",
    titleZh: "学着追问：一篇论文为什么应该存在",
    href: "/interesting/daily/learning-to-ask-why/",
    type: "Blog",
  },
];
