"use client";

import { useState } from "react";

const email = "qizheli@link.cuhk.edu.cn";

export default function ContactCard() {
  const [status, setStatus] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("Email address copied!");
    } catch {
      setStatus("Please select and copy the email address above.");
    }
  }

  return (
    <section className="home-section contact-card" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">✉️ Get in touch</h2>
      <p>For research discussions and collaboration, email me at <a className="contact-email" href={`mailto:${email}`}>{email}</a>.</p>
      <div className="contact-actions">
        <button type="button" onClick={copyEmail}>Copy email address</button>
        <a href={`mailto:${email}`}>Open email app ↗</a>
      </div>
      <p className="contact-status" role="status">{status}</p>
    </section>
  );
}
