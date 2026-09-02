# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server on http://localhost:3000
npm run build    # production build (also the CI/type-check gate — no separate tsc script)
npm run start    # serve the production build
npm run lint     # next lint (eslint-config-next + next/typescript)
```

There is no test suite, no test runner, and no standalone typecheck script — `next build` is what surfaces type errors.

## Architecture

Marketing/content website for a church, built on **Next.js 14** with a hybrid router setup:

- **`app/`** — App Router. All UI. Almost every `page.tsx` is `"use client"` and fetches data in `useEffect` (no server components / server actions / RSC data loading in practice, despite `components.json` saying `rsc: true`).
- **`pages/api/`** — Pages Router, used *only* for API routes (the app has no non-API pages here). These are the backend.

### Content model — two independent sources

1. **Static content** lives in `constants/*.tsx` as exported arrays (`articles`, `devotionals`, gallery images, testimonies, CSF, about carousels). Detail pages like `app/articles/[id]/page.tsx` import the array and `.find()` by id from `useParams()` — no fetching. Editing content = editing these files.
2. **Sermons** are audio files in an **AWS S3** bucket (`calvaryhillglobalchurch`, region `eu-north-1`). Sermon title/date/preacher/series/desc/art are stored as **S3 object custom metadata**, not in any database. `next.config.mjs` whitelists the S3 host for `next/image`.

The S3 code uses **AWS SDK for JavaScript v3** (`@aws-sdk/client-s3` + `@aws-sdk/s3-request-presigner`): an `S3Client`, `*Command` objects sent via `s3.send(...)`, and `getSignedUrl(s3, new GetObjectCommand(...), { expiresIn })` for presigned URLs. `@prisma/client` is in `package.json` but **unused** — don't assume a database exists.

### Sermon flow

- `pages/api/getAudioData.js` — lists `sermons/` prefix, `HeadObjectCommand` per file for metadata, returns each with a **presigned URL (1h expiry)**, sorted by parsed date. `parseCustomDate` strips ordinal suffixes to handle strings like `"23th March, 2023"`.
- `pages/api/getAudioDataByKey.js?key=<s3 key>` — single sermon; the S3 key is the route param (`app/sermons/[sermonName]`), URL-encoded in links and decoded in the handler.
- `pages/api/getRandomAudio.js` — random sermon for the homepage widget.
- Because presigned URLs expire, sermon audio URLs are always fetched fresh client-side, never cached in constants.

### Global audio player

`context/PlayerContext.tsx` (`PlayerProvider` / `usePlayer`) holds the single `playingFile`. `components/GlobalAudioPlayer.tsx` is mounted once in `app/layout.tsx` via `next/dynamic({ ssr: false })` and renders a fixed bottom-right bar whenever a file is playing. Page-level `AudioPlayer` instances call `setPlayingFile` to hand off to it.

### Other integrations

- **Payments:** `components/Giving/Payment.tsx` uses `react-paystack` (`PaystackButton`, dynamically imported, `ssr: false`). Amount is multiplied by 100 (kobo). Key from `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`.
- **Live streaming:** `pages/api/mixlr.js` proxies `api.mixlr.com` (adds no-cache headers) for `components/live/MixlrPlayer.tsx`; `components/live/YoutubeLive.tsx` handles the YouTube side.
- **Deployment:** Vercel. `@vercel/analytics` and `@vercel/speed-insights` are wired into `app/layout.tsx`.

### Styling — Tailwind + SCSS together

- **Tailwind** is the primary tool. Custom theme in `tailwind.config.ts`: church colors (`maroon`, `orange`, `darkmaroon`, `smokeWhite`, …), extra breakpoints (`mid: 1190px`, `xs: 450px`, `xxs: 300px`), font families (`font-sofia-bold`, `font-kumbh-sans`, …). `cn()` helper in `lib/utils.ts`.
- **SCSS** in `app/styles/` (`global/`, `utils/`, `componentsStyles/`), entry `app/styles/globals.scss` which also pulls in the `@tailwind` directives and is imported by `app/layout.tsx`. Note: `globals.scss` sets `body { overflow: hidden }`. The SCSS layer uses its own `rem()` function and `breakpoint-down()` mixin with `em`-based breakpoints — separate from Tailwind's screens. `components.json` points at a non-existent `app/globals.css`; ignore it.
- `components/ui/` are shadcn/ui (Radix) primitives.

### Path alias

`@/*` → repo root (`tsconfig.json`). Import as `@/components/...`, `@/constants/...`, `@/context/...`, `@/lib/utils`.

## Environment

`.env` is gitignored. Required vars: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `AWS_BUCKET_NAME`, `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`, `YOUTUBE_CHANNEL_ID`, `BASE_URL`.
