# Nguyen Quang Sang — Portfolio

The Next.js 14 portfolio is maintained in this folder. Job-search documents
remain in the repository root; the website's static assets are in `public/assets`.

## Run locally

From the repository root:

```powershell
npm --prefix mini install
npm --prefix mini run dev
```

To build the static site for GitHub Pages:

```powershell
npm --prefix mini run build
```

The site uses `basePath: /portfolio-website` for production exports. The
repository workflow installs and builds this folder and deploys `mini/out`.

## Structure

- `src/app` — App Router page, layout, and global styles
- `src/components` — portfolio sections and interactions
- `src/data/portfolio.ts` — profile, project, experience, and education content
- `public/assets` — profile image and downloadable CV
- `legacy` — archived standalone HTML/CSS/JS portfolio
