const sections = [
  { href: "/interesting/not-quite-research/", label: "Not-Quite Research" },
  { href: "/interesting/research-posts/", label: "Research Posts" },
  { href: "/interesting/daily/", label: "Sharing Calendar" },
];

export default function InterestingNav() {
  return (
    <nav className="interesting-nav" aria-label="Something Interesting sections">
      {sections.map((section) => (
        <a href={section.href} key={section.href}>{section.label}</a>
      ))}
    </nav>
  );
}
