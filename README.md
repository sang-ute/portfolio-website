# Nguyen Quang Sang — Developer Portfolio (Next.js 14 App Router) 🚀

A modern, production-grade personal portfolio and interactive resume built with **Next.js 14 (App Router)**, **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** for **Nguyen Quang Sang** (Nguyễn Quang Sáng) — Software Engineer Intern at Money Forward Vietnam (MFi) & Cloud Engineering Trainee.

---

## 🌟 Tech Stack & Highlights

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components & Client Components)
- **UI Library**: React 18 & TypeScript
- **Styling**: Tailwind CSS with custom glassmorphism, glowing gradients, and Dark/Light mode theme system
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for fluid page animations and interactive filter transitions
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (`Inter` and `JetBrains Mono` via `next/font`)
- **Responsive**: Pixel-perfect design across mobile, tablet, and ultra-wide screens

---

## 📂 Project Architecture

```
Job-2026/
├── public/
│   └── assets/
│       ├── profile.jpg         # Profile portrait photo
│       └── cv.pdf              # PDF Resume for preview & download
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind & custom CSS variables
│   │   ├── layout.tsx          # Root layout with fonts, metadata & ThemeProvider
│   │   └── page.tsx            # Main page composition with interactive modals & toasts
│   ├── components/
│   │   ├── ThemeProvider.tsx   # React Theme context (dark/light, localStorage)
│   │   ├── Navbar.tsx          # Glassmorphic header with active links & drawer
│   │   ├── Hero.tsx            # Animated hero section with floating badges & CTAs
│   │   ├── Metrics.tsx         # Quick statistics ribbon (HCMUTE, GPA 3.2, 14+ repos, IELTS 7.5)
│   │   ├── About.tsx           # Engineering story, pillars & profile attributes
│   │   ├── Experience.tsx      # Money Forward Vietnam & AWS Study Group timeline
│   │   ├── Projects.tsx        # Framer Motion animated filterable project gallery
│   │   ├── Skills.tsx          # Interactive categorized technical matrix
│   │   ├── Education.tsx       # HCMUTE degree & credentials (AWS, Scrum, IELTS)
│   │   ├── Contact.tsx         # Direct contact channels & interactive email drafter
│   │   ├── ResumeModal.tsx     # In-browser CV PDF viewer modal
│   │   └── Footer.tsx          # Footer with credits & social shortcuts
│   ├── data/
│   │   └── portfolio.ts        # Strongly-typed data store for projects, skills & bios
│   └── lib/
│       └── utils.ts            # Tailwind clsx + twMerge utility
├── next.config.mjs             # Next.js configuration
├── tailwind.config.ts          # Tailwind theme configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies and scripts
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🌿 Git Branch & Deployment to `@sang-ute`

The codebase is checked out on the **`website`** branch.

### Pushing to GitHub:
```bash
# Add your GitHub repository as remote:
git remote add origin https://github.com/sang-ute/Job-2026.git

# Stage changes and commit:
git add .
git commit -m "feat: build Next.js 14 developer portfolio with TypeScript and Tailwind CSS"

# Push to your GitHub repository:
git push -u origin website
```

### Deploying:
- **Vercel** (Recommended for Next.js): Import repository from GitHub at [vercel.com](https://vercel.com) for 1-click zero-config deployment.
- **GitHub Pages**: You can also use `next export` or static output (`output: 'export'` in `next.config.mjs`) to deploy to GitHub Pages.

---

## 🛡️ Security Note
Sensitive personal documents (such as offer letters and ID photos in `MFV-2026/`) are ignored by `.gitignore` to prevent leaking private information to public repositories.
