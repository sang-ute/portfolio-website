# Job-2026

This folder keeps job-search documents and personal files. The portfolio website
source and its build configuration live in [`mini/`](./mini/README.md).

## Portfolio website

From the repository root, run:

```powershell
npm --prefix mini install
npm --prefix mini run dev
```

The site is available at http://localhost:3000. To create the static deployment
build used by GitHub Pages:

```powershell
npm --prefix mini run build
```

The GitHub Actions workflow deploys the exported `mini/out` directory.
