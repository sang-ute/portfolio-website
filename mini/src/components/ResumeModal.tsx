"use client";

import React, { useEffect } from "react";
import {
  Award,
  BriefcaseBusiness,
  Download,
  GraduationCap,
  MapPin,
  X,
} from "lucide-react";
import {
  CERTIFICATIONS,
  EDUCATIONS,
  EXPERIENCES,
  PERSONAL_INFO,
} from "@/data/portfolio";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
        onClick={(event) => event.stopPropagation()}
        className="glass-card flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[var(--glass-rim)] shadow-2xl"
      >
        <header className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4 sm:px-7">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--glass-rim)] text-[var(--fg)]">
              <BriefcaseBusiness className="h-5 w-5" />
            </span>
            <div>
              <h2 id="resume-title" className="text-sm font-semibold text-[var(--fg)]">
                Résumé
              </h2>
              <p className="text-xs text-[var(--mut)]">{PERSONAL_INFO.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumePdf}
              download="Nguyen_Quang_Sang_CV.pdf"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-[var(--fg)] px-4 text-xs font-semibold text-[var(--bg)] transition-opacity hover:opacity-75"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
            <button
              onClick={onClose}
              type="button"
              aria-label="Close résumé"
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--glass-rim)] text-[var(--fg)] transition-colors hover:bg-[var(--spot)]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </header>

        <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
          <div className="border-b border-[var(--line)] pb-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mut)]">
              {PERSONAL_INFO.role}
            </p>
            <h3 className="mt-2 text-3xl font-semibold tracking-[-0.06em] text-[var(--fg)] sm:text-5xl">
              {PERSONAL_INFO.name}
            </h3>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[var(--mut)]">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[var(--fg)]" />
                {PERSONAL_INFO.location}
              </span>
              <a className="hover:text-[var(--fg)]" href={`mailto:${PERSONAL_INFO.email}`}>
                {PERSONAL_INFO.email}
              </a>
              <a
                className="hover:text-[var(--fg)]"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="hover:text-[var(--fg)]"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <section className="py-6">
            <h4 className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--fg)]">
              <BriefcaseBusiness className="h-4 w-4" />
              Experience
            </h4>
            <div className="space-y-5">
              {EXPERIENCES.map((experience) => (
                <article key={`${experience.company}-${experience.role}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h5 className="font-semibold text-[var(--fg)]">{experience.role}</h5>
                    <span className="font-mono text-[10px] text-[var(--mut)]">
                      {experience.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--mut)]">
                    {experience.company} · {experience.location}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--mut)]">
                    {experience.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {experience.skills.slice(0, 6).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[var(--line)] px-2.5 py-1 font-mono text-[10px] text-[var(--mut)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 border-t border-[var(--line)] py-6 sm:grid-cols-2">
            <div>
              <h4 className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--fg)]">
                <GraduationCap className="h-4 w-4" />
                Education
              </h4>
              {EDUCATIONS.map((education) => (
                <article key={education.institution}>
                  <h5 className="font-semibold text-[var(--fg)]">{education.degree}</h5>
                  <p className="mt-1 text-sm text-[var(--mut)]">{education.institution}</p>
                  <p className="mt-2 font-mono text-[10px] text-[var(--mut)]">
                    {education.period} · GPA {education.gpa}
                  </p>
                </article>
              ))}
            </div>
            <div>
              <h4 className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--fg)]">
                <Award className="h-4 w-4" />
                Certifications
              </h4>
              <ul className="space-y-2">
                {CERTIFICATIONS.map((certification) => (
                  <li key={certification.name} className="text-sm text-[var(--mut)]">
                    <span className="font-medium text-[var(--fg)]">{certification.name}</span>
                    <span className="block text-xs">{certification.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
