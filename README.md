# Nguyen Quang Sang — Personal Portfolio & CV Website 🚀

A modern, responsive, high-performance personal portfolio and interactive resume website for **Nguyen Quang Sang** (Nguyễn Quang Sáng) — Software Engineer Intern at Money Forward Vietnam (MFi) & Cloud Engineering Trainee.

---

## 🌟 Highlights & Features

- **Professional Profile**: Tailored showcase reflecting role at Money Forward Vietnam (Data Aggregation & Web teams) and Cloud infrastructure training on AWS.
- **Interactive Project Filtering**: Instant filtering across *Full-Stack & Microservices*, *Cloud & AWS*, *Kotlin & Android*, and *Systems & AI*.
- **Deep GitHub Integration**: Featured repositories and contributions linked directly to [@sang-ute](https://github.com/sang-ute) and collaborative projects.
- **Dark & Light Mode**: Seamless theme switching with automatic system preference detection and localStorage persistence.
- **Interactive Resume Modal & Direct Download**: In-browser preview of `assets/cv.pdf` with direct PDF download button.
- **Contact & Clipboard Actions**: One-click copy for email (`nqs28012004@gmail.com`) and phone (`0938963667`) with toast notification alerts and pre-filled email drafter.
- **Zero Build Dependencies**: Pure HTML5, Tailwind CSS, Lucide icons, and modern JavaScript. Works out of the box by opening `index.html`.

---

## 📂 Project Structure

```
Job-2026/
├── index.html            # Main portfolio landing page
├── cv.html               # Printable A4 CV template
├── css/
│   └── style.css         # Glassmorphism, glow accents, animations & styles
├── js/
│   └── main.js           # Filtering, theme toggle, toast alerts, modals & scrollspy
├── assets/
│   ├── profile.jpg       # Profile portrait photo
│   └── cv.pdf            # Curated PDF resume
├── .gitignore            # Protects private transcripts, offers & IDs
└── README.md             # Project documentation
```

---

## 🚀 How to Run Locally

### Option 1: Direct File Open
Simply double-click `index.html` in your file explorer or open it with your favorite browser (Chrome, Edge, Firefox, Brave, Safari).

### Option 2: Live Local Server
If you prefer running via a local server:

```powershell
# Using Python
python -m http.server 8000

# OR using Node.js / npx
npx serve .
```
Then visit `http://localhost:8000` in your browser.

---

## 🌿 Git Branch & GitHub Deployment

The git repository has been initialized with the branch:
```bash
branch: website
```

### To commit and push to your GitHub account (`@sang-ute`):

1. **Stage and commit the website files**:
```bash
git add .
git commit -m "feat: generate modern portfolio website from CV and GitHub profile"
```

2. **Connect to your remote repository at `@sang-ute`**:
Create a repository on GitHub (e.g. `Job-2026` or `sang-ute.github.io`), then run:
```bash
# Example if using a repo named Job-2026:
git remote add origin https://github.com/sang-ute/Job-2026.git
git push -u origin website

# Or to publish directly to GitHub Pages on main:
git branch -M main
git push -u origin main
```

---

## 🛡️ Security Note
The `.gitignore` has been pre-configured to ensure sensitive personal files (such as transcripts, ID card scans, and offer letters in `MFV-2026`) are never tracked or exposed to public repositories.
