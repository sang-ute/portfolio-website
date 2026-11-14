"use client";

import React from "react";

interface TechLogoProps {
  name: string;
  className?: string;
}

export function TechLogo({ name, className = "h-3.5 w-3.5 shrink-0" }: TechLogoProps) {
  const normalized = name.toLowerCase().trim();

  // TypeScript
  if (normalized.includes("typescript")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M11.5 12.3h-2.1v6.7H7.7v-6.7H5.6v-1.5h5.9v1.5zm6.8 2.2c-.4-.5-1.1-.9-2-.9-.8 0-1.3.3-1.3.7 0 .4.3.6 1.3 1 1.6.6 2.5 1.2 2.5 2.5 0 1.5-1.2 2.5-3.1 2.5-1.3 0-2.3-.4-3-1.1l.9-1.2c.5.5 1.3.9 2.1.9.9 0 1.4-.3 1.4-.8 0-.4-.4-.7-1.3-1-1.6-.6-2.5-1.1-2.5-2.4 0-1.5 1.1-2.4 2.9-2.4 1.1 0 2 .3 2.7.8l-1.1 1.4z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // JavaScript
  if (normalized.includes("javascript")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M8.2 17.5c.4.6.8 1.1 1.6 1.1.8 0 1.2-.3 1.2-1.1v-5.2h1.8v5.3c0 1.7-1 2.5-2.7 2.5-1.5 0-2.4-.8-2.9-1.8l1-.8zm6.5-.2c.4.7 1 1.2 1.9 1.2.8 0 1.3-.4 1.3-.9 0-.6-.5-.8-1.5-1.2-1.4-.6-2.3-1.2-2.3-2.6 0-1.3 1-2.3 2.6-2.3 1.1 0 2 .4 2.6 1.4l-1.2.8c-.3-.5-.7-.8-1.4-.8-.6 0-1 .3-1 .7 0 .5.4.7 1.4 1.1 1.6.7 2.4 1.3 2.4 2.7 0 1.6-1.2 2.5-2.9 2.5-1.6 0-2.6-.8-3.1-2l1.2-.7z"
          fill="#000000"
        />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
          d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3zm0 3.7a4 4 0 110 8 4 4 0 010-8z"
          fill="#5FA04E"
        />
      </svg>
    );
  }

  // Python
  if (normalized.includes("python")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M11.87 2c-5.24 0-4.92 2.27-4.92 2.27l.01 2.35h4.99v.7H5.02S2 7.02 2 12.28c0 5.27 2.64 5.09 2.64 5.09h1.57v-2.2c0-2.52 2.14-2.48 2.14-2.48h4.94s2.05-.03 2.05-2.02V4.02S15.86 2 11.87 2zm-1.34 1.5a.84.84 0 110 1.68.84.84 0 010-1.68z"
          fill="#3776AB"
        />
        <path
          d="M12.13 22c5.24 0 4.92-2.27 4.92-2.27l-.01-2.35h-4.99v-.7h6.93s3.02.3 3.02-4.96c0-5.27-2.64-5.09-2.64-5.09h-1.57v2.2c0 2.52-2.14 2.48-2.14 2.48H10.7s-2.05.03-2.05 2.02v8.65S8.14 22 12.13 22zm1.34-1.5a.84.84 0 110-1.68.84.84 0 010 1.68z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  // Kotlin
  if (normalized.includes("kotlin")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22 22H2V2h20l-10 10 10 10z" fill="url(#kotlin-grad)" />
        <defs>
          <linearGradient id="kotlin-grad" x1="22" y1="2" x2="2" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E44857" />
            <stop offset="0.5" stopColor="#C711E1" />
            <stop offset="1" stopColor="#7F52FF" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // C# / .NET
  if (normalized.includes("c#") || normalized.includes(".net")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#512BD4" />
        <path
          d="M10.8 15.6c-.6.6-1.5 1-2.5 1-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6c1 0 1.9.4 2.5 1l1.1-1.1c-.9-.9-2.2-1.4-3.6-1.4-3 0-5.4 2.4-5.4 5.4 0 3 2.4 5.4 5.4 5.4 1.4 0 2.7-.5 3.6-1.4l-1.1-1.3zm3.7-5.4v1.8h-1.2v1.2h1.2v1.8h1.2v-1.8h1.2v-1.2h-1.2v-1.8h-1.2zm3.6 0v1.8h-1.2v1.2h1.2v1.8h1.2v-1.8h1.2v-1.2h-1.2v-1.8h-1.2z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // React
  if (normalized.includes("react")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB" stroke="none" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
      </svg>
    );
  }

  // Next.js
  if (normalized.includes("next")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="currentColor" className="text-[var(--fg)] opacity-90" />
        <path
          d="M15.8 17.5L8.5 7.8H7v9.4h1.5v-7.3l6.7 8.9c.2-.1.4-.2.6-.3zM15.5 7.8h1.5v5.8h-1.5V7.8z"
          fill="var(--bg)"
        />
      </svg>
    );
  }

  // NestJS
  if (normalized.includes("nest")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5.7 13.5c-.3.4-.8.7-1.3.9l-.7-.4c.3-.5.5-1.1.5-1.7 0-1.8-1.5-3.3-3.3-3.3h-.7v-1.3c0-.6.5-1.1 1.1-1.1h1.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-1.5c-1.2 0-2.1.9-2.1 2.1v1.3h-.7c-.3 0-.5.2-.5.5s.2.5.5.5h.7v3.5c0 1.2.9 2.1 2.1 2.1h1.7c1.1 0 2.1-.5 2.7-1.4l-.4-.3z"
          fill="#E0234E"
        />
      </svg>
    );
  }

  // Express
  if (normalized.includes("express")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.5 16.5l3.2-4.5-3-4.2h2.2l2 2.9 2-2.9h2.1l-3 4.2 3.2 4.5h-2.2l-2.1-3.2-2.1 3.2H4.5zm10.7-5.5h4.3v1.8h-4.3v-1.8zm0-3.2h4.3v1.8h-4.3V7.8zm0 6.4h4.3V16h-4.3v-1.8z" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#38BDF8" aria-hidden="true">
        <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.3 3.3-.9.7.2 1.2.7 1.8 1.3C13.5 11 14.8 12 17.5 12c2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.3-3.3.9-.7-.2-1.2-.7-1.8-1.3C15.9 7 14.6 6 12 6zm-6 6c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.3 3.3-.9.7.2 1.2.7 1.8 1.3C7.5 17 8.8 18 11.5 18c2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.3-3.3.9-.7-.2-1.2-.7-1.8-1.3C9.9 13 8.6 12 6 12z" />
      </svg>
    );
  }

  // FastAPI
  if (normalized.includes("fastapi")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#009688" />
        <path d="M12.5 5L7 13h5l-1 6 6.5-8.5H13l1-5.5h-1.5z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Django
  if (normalized.includes("django")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#092E20" />
        <path
          d="M13.2 6.5h2v7.6c0 1.9-.9 2.9-2.6 2.9-.6 0-1.2-.1-1.6-.3l.4-1.6c.3.1.6.2.9.2.9 0 1-.5 1-1.4V6.5zm-3.5 3.8v4.9c-.3.2-.8.3-1.3.3-1.4 0-2.2-.9-2.2-2.5 0-1.6.8-2.6 2.2-2.6.5 0 1 .1 1.3.3v-.4zm1.8-3.8h-1.8v2.7c-.5-.4-1.2-.6-2-.6-2.5 0-4 1.7-4 4.5 0 2.7 1.6 4.3 4 4.3.8 0 1.5-.2 2-.6v.5h1.8V6.5z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // AWS
  if (normalized.includes("aws") || normalized.includes("s3") || normalized.includes("ec2") || normalized.includes("lambda")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6.2 12.8c0-1.3.8-2 2.2-2 1 0 1.6.3 2.1.6v-1c0-.9-.6-1.4-1.8-1.4-.7 0-1.5.2-2 .5l-.4-.8c.7-.4 1.6-.6 2.6-.6 1.8 0 2.8.9 2.8 2.5v4.2h-1.1v-.8c-.5.6-1.3.9-2.2.9-1.4 0-2.2-.8-2.2-2.1zm4.3-.2v-.6c-.4-.3-1-.5-1.8-.5-.9 0-1.4.4-1.4 1.1 0 .7.5 1.1 1.3 1.1.9 0 1.9-.5 1.9-1.1zm4.7-4.4h1.2l1.6 5.2 1.6-5.2h1.2l-2.2 6.6h-1.2l-2.2-6.6zm-12.7 8.5c4.7 2.4 11.2 2.4 16.4-.3l.4.8c-5.6 2.9-12.5 2.9-17.6.2l.8-.7zm15.4-1c.5-.1 1.5-.2 2.1.2.2.2.3.6.1 1-.4.4-.9.6-1.5.7-.3.1-.6.1-.7-.1-.2-.2-.2-.6 0-.8.1-.1.2-.2.3-.3-.1-.3-.2-.5-.3-.7z"
          fill="#FF9900"
        />
      </svg>
    );
  }

  // Docker
  if (normalized.includes("docker")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#2496ED" aria-hidden="true">
        <path d="M13.9 8.2h2.2v2.2h-2.2V8.2zm-2.8 0h2.2v2.2h-2.2V8.2zm-2.8 0h2.2v2.2H8.3V8.2zm5.6-2.8h2.2v2.2h-2.2V5.4zm-2.8 0h2.2v2.2h-2.2V5.4zm-2.8 0h2.2v2.2H8.3V5.4zm-2.8 2.8h2.2v2.2H5.5V8.2zm17.2 4.1c-.2-.1-.8-.4-1.7-.3-.4-1.6-1.7-2.3-1.8-2.3l-.4.3c-.2.7-.4 1.6-.2 2.5-.5.3-1.5.5-2.6.5H1.4c-.3 1.3-.2 4 2.2 6.1 2.2 1.9 5.3 2 8.3 1.8 4.2-.3 7.8-2.2 9.2-5.7.9-.1 2.4-.6 2.7-2.3l-.1-.6c-.3-.2-.6-.2-.9-.2z" />
      </svg>
    );
  }

  // MySQL
  if (normalized.includes("mysql") || normalized.includes("sql")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12.5 3c-5 0-9 3.5-9 8 0 2.8 1.6 5.3 4 6.7v3.3l3.5-1.9c.5.1 1 .1 1.5.1 5 0 9-3.5 9-8s-4-8.2-9-8.2zm-1.5 12.2c-.3 0-.6-.1-.9-.2l-1.6.9v-1.8c-1.3-.9-2.1-2.2-2.1-3.6 0-2.6 2.4-4.7 5.3-4.7s5.3 2.1 5.3 4.7-2.4 4.7-6 4.7z"
          fill="#4479A1"
        />
        <circle cx="10" cy="10.5" r="1" fill="#F29111" />
      </svg>
    );
  }

  // Prisma
  if (normalized.includes("prisma")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.3 2.2l8.2 15.6c.3.5.1 1.1-.4 1.4-.2.1-.4.2-.6.2H4.5c-.6 0-1-.4-1-1 0-.2.1-.4.2-.6L11 2.2c.3-.5.9-.6 1.3-.3.1.1.2.2.3.3zm-.3 3.6L6.5 17.4h11L12 5.8z" />
      </svg>
    );
  }

  // Redis
  if (normalized.includes("redis")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#DC382D" aria-hidden="true">
        <path d="M2 9.5l10-4.5 10 4.5-10 4.5L2 9.5zm0 5l10 4.5 10-4.5v2L12 21l-10-4.5v-2z" />
      </svg>
    );
  }

  // MongoDB
  if (normalized.includes("mongo")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#47A248" aria-hidden="true">
        <path d="M12 2C11.6 3.4 8 8.8 8 13.5c0 3.3 1.8 5.9 4 6.5 2.2-.6 4-3.2 4-6.5C16 8.8 12.4 3.4 12 2zm-.2 17.5v-6.3h.4v6.3c-.1 0-.2 0-.4 0z" />
      </svg>
    );
  }

  // Git & GitHub
  if (normalized.includes("git")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#F05032" aria-hidden="true">
        <path d="M21.7 10.7L13.3 2.3c-.4-.4-1-.4-1.4 0l-2 2 2.5 2.5c.4-.1.9 0 1.2.3.4.4.5 1 .3 1.5l2.4 2.4c.5-.2 1.1-.1 1.5.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.5-1-.3-1.5L13 9.5v5.3c.2.1.4.3.5.5.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1.2-.2.4-.4.6-.5V9.4c-.2-.1-.4-.3-.6-.5-.4-.4-.5-1-.3-1.5L8.7 5 2.3 11.4c-.4.4-.4 1 0 1.4l8.4 8.4c.4.4 1 .4 1.4 0l9.6-9.6c.4-.3.4-1 0-1.4z" />
      </svg>
    );
  }

  // Postman
  if (normalized.includes("postman")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FF6C37" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path
          d="M17 11.5l-4-3-3 2v2.5l2-1.5 2 1.5v-1.5l-2-1.5 2-1.5 3 2.5z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // gRPC & API Gateway
  if (normalized.includes("grpc") || normalized.includes("gateway") || normalized.includes("api")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
        <path d="M12 22V12" />
        <path d="M21 7l-9 5" />
        <path d="M3 7l9 5" />
      </svg>
    );
  }

  // Default clean code dot
  return (
    <span
      className="h-1.5 w-1.5 rounded-full bg-[var(--mut)] group-hover:bg-[var(--fg)] transition-colors"
      aria-hidden="true"
    />
  );
}

