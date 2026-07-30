import VisitorCounter from "./VisitorCounter";

export default function SiteHeader({ innerPage = false }: { innerPage?: boolean }) {
  const prefix = innerPage ? "/" : "";

  return (
    <header className="topbar">
      <a className="brand" href={innerPage ? "/" : "#about"} aria-label="Qizhe Li homepage">
        Qizhe Li
      </a>
      <nav className="tabs" aria-label="Page navigation">
        <a href={`${prefix}#about`}>About</a>
        <a href={`${prefix}#publications`}>Publications</a>
        <a href={`${prefix}#patents`}>Patents</a>
        <a href="/everything/">Everything is Research</a>
      </nav>
      <VisitorCounter />
    </header>
  );
}
