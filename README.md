# Mohammad Shahidzadeh Asadi — personal website

A dependency-free static portfolio prepared for GitHub Pages. It includes a responsive home page, six project case studies, an updated CV, publication links, a thesis download, light/dark themes, and basic SEO/social metadata.

## Preview locally

From this folder, run either:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish at `mohammadshahidzade.github.io`

1. On GitHub, create a public repository named exactly `mohammadshahidzade.github.io`.
2. Copy this folder's contents to the repository root.
3. Commit and push to the `main` branch.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, then `main` and `/ (root)`.
6. GitHub will publish the site at `https://mohammadshahidzade.github.io/`.

No package installation or build command is required.

## Before publishing

- If you want a custom domain, add it in GitHub Pages settings and create a `CNAME` file containing that domain.
- Replace the CV PDF in `assets/` whenever your CV changes, keeping the same filename so every link continues to work.
- Update the HPCA entry after the review decision. It is intentionally marked **under review**, not published.

## Content sources

The portfolio was prepared from the supplied current/older CVs, M.A.Sc. thesis, Google Scholar profile, DBLP, official paper records, the public CVA5 repository/FCCM deck, VTR pull request #2384, and the official ICCAD 2020 contest results.
