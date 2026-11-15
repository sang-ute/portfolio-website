"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Copy,
  ExternalLink,
  Send,
  ShieldCheck,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";
import { Reveal } from "./Reveal";

interface ContactProps {
  onNotify: (msg: string) => void;
}

export function Contact({ onNotify }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Software Engineering Opportunity");
  const [message, setMessage] = useState("");

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    onNotify(`Copied ${label}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Hi Quang Sang,\n\n${message}\n\nFrom: ${name} (${email})`;
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onNotify("Opening your email client…");
  };

  const inputCls =
    "w-full rounded-xl border border-[var(--line)] bg-[var(--card)] px-3.5 py-2.5 text-sm text-[var(--fg)] placeholder:text-[var(--mut)] focus:border-[var(--mut)] focus:outline-none transition-colors";

  const labelCls =
    "mb-1 block font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mut)]";

  return (
    <section id="contact" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        {/* Section header */}
        <div className="mb-12 flex items-center justify-between border-b border-[var(--line)] pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--mut)] sm:text-xs">
            06 / Contact
          </p>
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mut)] sm:block">
            Get in touch
          </p>
        </div>

        <div className="mb-10 max-w-2xl">
          <h2 className="text-4xl font-medium leading-[1.08] tracking-[-0.06em] text-[var(--fg)] sm:text-5xl lg:text-6xl">
            Let&apos;s{" "}
            <span className="text-[var(--mut)]">connect.</span>
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--mut)]">
            Reach out for software engineering opportunities, project
            collaborations, or cloud architecture discussions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
          {/* Direct contact cards */}
          <div className="space-y-3">
            {[
              {
                icon: Mail,
                label: "Email",
                value: PERSONAL_INFO.email,
                href: `mailto:${PERSONAL_INFO.email}`,
                action: () => handleCopy(PERSONAL_INFO.email, "email"),
                actionLabel: "Copy",
                ActionIcon: Copy,
              },
              {
                icon: Phone,
                label: "Phone & Zalo",
                value: PERSONAL_INFO.phone,
                href: `tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`,
                action: () => handleCopy(PERSONAL_INFO.phone, "phone"),
                actionLabel: "Copy",
                ActionIcon: Copy,
              },
              {
                icon: Github,
                label: "GitHub",
                value: "github.com/sang-ute",
                href: PERSONAL_INFO.github,
                action: null,
                ActionIcon: ExternalLink,
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "linkedin.com/in/sang-n-9946b6200",
                href: PERSONAL_INFO.linkedin,
                action: null,
                ActionIcon: ExternalLink,
              },
            ].map(({ icon: Icon, label, value, href, action, ActionIcon }, idx) => (
              <Reveal key={label} delay={idx * 0.08} distance={28} amount={0.2}>
                <div
                  className="editorial-card flex items-center justify-between gap-4 rounded-2xl px-5 py-4"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[var(--line)] bg-[var(--spot)] text-[var(--fg)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--mut)]">
                        {label}
                      </p>
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="truncate text-sm font-medium text-[var(--fg)] transition-opacity hover:opacity-70"
                      >
                        {value}
                      </a>
                    </div>
                  </div>
                  {action ? (
                    <button
                      type="button"
                      onClick={action}
                      title={`Copy ${label}`}
                      className="shrink-0 grid h-9 w-9 place-items-center rounded-lg border border-[var(--line)] text-[var(--mut)] transition hover:border-[var(--fg)] hover:text-[var(--fg)]"
                    >
                      <ActionIcon className="h-3.5 w-3.5" />
                    </button>
                  ) : (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 grid h-9 w-9 place-items-center rounded-lg border border-[var(--line)] text-[var(--mut)] transition hover:border-[var(--fg)] hover:text-[var(--fg)]"
                    >
                      <ActionIcon className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Message form */}
          <div className="editorial-card rounded-2xl p-6 sm:p-8">
            <h3 className="text-base font-semibold tracking-tight text-[var(--fg)]">
              Send a message
            </h3>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--mut)]">
              Opens a pre-formatted email to my inbox
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelCls}>Your name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Recruiter / Lead Eng"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>Your email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className={inputCls}
                  />
                </div>
              </div>

              <div>
                <label className={labelCls}>Subject</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={inputCls}
                >
                  <option value="Software Engineering Opportunity">
                    Software Engineering Opportunity
                  </option>
                  <option value="Project Collaboration">
                    Open Source / Project Collaboration
                  </option>
                  <option value="Cloud Architecture Discussion">
                    AWS / Cloud Architecture Discussion
                  </option>
                  <option value="General Inquiry">
                    General Inquiry / Say Hello
                  </option>
                </select>
              </div>

              <div>
                <label className={labelCls}>Message</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message, project idea, or job spec…"
                  className={`${inputCls} resize-none`}
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="inline-flex items-center gap-1.5 text-xs text-[var(--mut)]">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Direct to {PERSONAL_INFO.email}
                </span>
                <button
                  type="submit"
                  className="inline-flex h-10 items-center gap-2 rounded-full bg-[var(--fg)] px-5 text-xs font-semibold text-[var(--bg)] transition-opacity hover:opacity-80"
                >
                  <Send className="h-3.5 w-3.5" />
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
