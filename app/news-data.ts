export type NewsItem = {
  id: string;
  month: string;
  summary: string;
  title?: string;
  detail?: string;
  link?: { label: string; href: string };
};

// Newest month first; dates are month-level because no exact days were supplied.
export const newsItems: NewsItem[] = [
  {
    id: "gba-graduate-research-forum-first-prize",
    month: "2026-10",
    summary: "I received First Prize at the 2026 Greater Bay Area Graduate Research Forum.",
  },
  {
    id: "6g-intelligence-accepted",
    month: "2026-10",
    summary: "Our paper",
    title:
      "Current status, applications, and prospects of 6G wireless network intelligence driven by large models and agents",
    detail:
      "has been accepted for publication in Information and Communications Technology and Policy.",
    link: { label: "Read paper", href: "http://ictp.caict.ac.cn/CN/10.12267/j.issn.2096-5931.2026.10.009" },
  },
  {
    id: "infocom-phase-1",
    month: "2026-10",
    summary: "One of our papers passed Phase 1 of the IEEE INFOCOM review process.",
  },
  {
    id: "aaai-phase-1",
    month: "2026-10",
    summary: "Two of our papers passed Phase 1 of the AAAI review process.",
  },
  {
    id: "qoe-reasoner-jsac",
    month: "2026-10",
    summary: "Our paper",
    title:
      "QoEReasoner: An Agentic Reasoning Framework for Automated and Explainable QoE Diagnosis in RANs",
    detail:
      "has been submitted to IEEE Journal on Selected Areas in Communications (JSAC) for possible publication.",
    link: {
      label: "View demo",
      href: "https://github.com/LQZZZZZZ/QoEReasoner/releases/tag/demo-v1.0",
    },
  },
  {
    id: "comsoc-apb-competition",
    month: "2026-10",
    summary: "We submitted our entry to the",
    title:
      "2026 IEEE ComSoc Asia Pacific Board (APB) Communications Technology Competition",
    detail: ".",
  },
  {
    id: "network-anomaly-patent",
    month: "2026-09",
    summary: "Our patent",
    title:
      "Method, Apparatus, Device, and Storage Medium for Root-Cause Reasoning of Communication Network Data Anomalies",
    detail: "has been granted.",
  },
  {
    id: "6g-intelligence-submission",
    month: "2026-09",
    summary: "Our paper",
    title:
      "Current status, applications, and prospects of 6G wireless network intelligence driven by large models and agents",
    detail:
      "has been submitted to Information and Communications Technology and Policy for possible publication.",
  },
  {
    id: "gba-graduate-research-forum-poster",
    month: "2026-08",
    summary: "We submitted a poster to the",
    title: "2026 Greater Bay Area Graduate Research Forum",
    detail: ".",
  },
  {
    id: "dk-root-accepted",
    month: "2026-06",
    summary: "Our paper",
    title:
      "DK-Root: A Joint Data-and-Knowledge-Driven Framework for Root Cause Analysis of QoE Degradations in Mobile Networks",
    detail: "has been accepted by IEEE Transactions on Networking (ToN).",
    link: {
      label: "Read paper",
      href: "https://doi.org/10.1109/TON.2026.3705395",
    },
  },
  {
    id: "semiroot-icc-accepted",
    month: "2026-03",
    summary: "Our paper",
    title:
      "SemiRoot: A Semi-Supervised Deep Learning Framework for Root-Cause Analysis of QoE Degradations in Mobile Networks",
    detail: "has been accepted by IEEE ICC 2026.",
    link: {
      label: "Read paper",
      href: "https://doi.org/10.1109/ICCWorkshops63917.2026.11586658",
    },
  },
];
