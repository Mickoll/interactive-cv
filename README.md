# Mickoll Interactive CV

Standalone interactive CV and portfolio site for SaaS implementation, operations automation, RevOps/pricing, product operations, and BI/data roles.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- lucide-react
- No backend, auth, database, Prisma, or environment secrets

## Local Development

```powershell
npm install
npm run dev
```

## Build

```powershell
npm run lint
npm run build
npm run test:e2e
```

## CV PDF

The default public CV file lives at `public/Mickoll_Marin_CV_ATS.pdf`. The source ATS PDF is `public/Mickoll_Marin_CV.pdf`; running `npm run pdf:cv` copies it to the ATS endpoint and normalizes PDF metadata. The legacy `/Mickoll_Marin_CV.pdf` route remains available so older links keep working.

```powershell
npm run build
npm run start
```

In a second terminal:

```powershell
npm run pdf:cv
npm run pdf:verify
```

`pdf:verify` checks extracted PDF text and metadata with `pdftotext` when available, then falls back to local Python with PyMuPDF if present.

## Localization

The app stays static-first. Spanish uses `?lang=es` plus client-side persistence so Vercel can keep serving prerendered pages. Full server-rendered query-param localization would require request-time rendering or locale-specific route paths, which is intentionally out of scope for this version.

## Deployment

Target Vercel project: `mickoll-interactive-cv`

Recommended GitHub repo: `Mickoll/interactive-cv`

## Work Samples

Public work-sample previews live in `public/work-samples/`.
They are sanitized representative previews based on local project structures and outputs.
Do not add client names, personal names, locations, emails, phone numbers, coordinates, private file names, or customer/project identifiers.
