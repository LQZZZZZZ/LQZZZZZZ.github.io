import VisitorCounter from "./VisitorCounter";

export default function SiteHeader({ innerPage = false }: { innerPage?: boolean }) {
  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="Qizhe Li homepage">
        Qizhe Li
      </a>
      <nav className="tabs" aria-label="Page navigation">
        <a href="/">About</a>
        <a href="/publications/">Publication</a>
        <a href="/patents/">Patents</a>
        <a href="/interesting/">Something Interesting</a>
      </nav>
      <VisitorCounter />
    </header>
  );
}
