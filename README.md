# iamkallolpratim.github.io

Personal portfolio of Kallol Pratim Saikia, built with Next.js (static export) and served at
https://iamkallolpratim.github.io/.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

All content (profile, experience, open-source projects, skills, socials) lives in `lib/data.ts`.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes `out/`
to GitHub Pages. In the repository settings, **Pages → Build and deployment → Source** must be set
to **GitHub Actions**.
