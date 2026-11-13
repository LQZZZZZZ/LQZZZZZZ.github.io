import { scholarUrl } from "./research-data";

function ProfileIcon({ kind }: { kind: "pin" | "school" | "mail" | "github" | "scholar" }) {
  const paths = {
    pin: "M12 21s7-6.1 7-12A7 7 0 0 0 5 9c0 5.9 7 12 7 12Z M12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
    school: "M3 21h18 M5 21V9h14v12 M3 9l9-6 9 6Z M9 12v5 M15 12v5",
    mail: "M3 5h18v14H3Z M3 5l9 8 9-8",
    github: "M9 19c-4 1-4-2-6-2 M15 22v-4c0-1-.3-1.8-1-2 3-.4 6-1.5 6-6 0-1.3-.5-2.5-1.3-3.4.1-1 .1-2-.2-3-1 0-2.6.6-3.5 1.2a12 12 0 0 0-6 0C8 4.2 6.5 3.6 5.5 3.6c-.3 1-.3 2-.2 3A5 5 0 0 0 4 10c0 4.5 3 5.6 6 6-.7.3-1 1-1 2v4",
    scholar: "M2 8l10-5 10 5-10 5Z M6 10v7c4 3 8 3 12 0v-7 M22 8v8",
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[kind]} /></svg>;
}

export default function SiteSidebar() {
  return (
    <aside className="profile-sidebar" aria-label="Profile and contact">
      <a className="author-avatar" href="/" aria-label="Qizhe Li homepage">
        <img src="/profile.jpg" alt="Qizhe Li" width="175" height="175" />
      </a>
      <div className="author-details">
        <h2 className="author-name">Qizhe Li</h2>
        <p className="author-bio">Ph.D. Student</p>
        <p className="author-research">Intelligent Networks &amp; AI-RAN</p>
        <ul className="author-links">
          <li><ProfileIcon kind="pin" /><span>Shenzhen, China</span></li>
          <li><ProfileIcon kind="school" /><span>CUHK-Shenzhen</span></li>
          <li><ProfileIcon kind="school" /><span>Shenzhen Research Institute of Big Data · SICIAM</span></li>
          <li className="author-email"><ProfileIcon kind="mail" /><a href="mailto:qizheli@link.cuhk.edu.cn">qizheli@link.cuhk.edu.cn</a></li>
          <li><ProfileIcon kind="github" /><a href="https://github.com/LQZZZZZZ" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><ProfileIcon kind="scholar" /><a href={scholarUrl} target="_blank" rel="noreferrer">Google Scholar</a></li>
        </ul>
      </div>
    </aside>
  );
}
