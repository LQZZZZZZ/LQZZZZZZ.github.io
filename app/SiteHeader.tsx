"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/#about", label: "About Me" },
  { href: "/#news", label: "News" },
  { href: "/#publications", label: "Publications" },
  { href: "/patents/", label: "Patents" },
  { href: "/#education", label: "Education" },
  { href: "/#awards", label: "Awards" },
  { href: "/interesting/", label: "Something Interesting" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="masthead">
      <div className="topbar">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>Homepage</Link>
        <button className="nav-toggle" type="button" aria-controls="site-navigation"
          aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}><span /><span /><span /></button>
        <nav className={`tabs ${open ? "is-open" : ""}`} id="site-navigation" aria-label="Page navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href} onClick={() => setOpen(false)}
              aria-current={!link.href.includes("#") && pathname.startsWith(link.href.replace(/\/$/, "")) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
