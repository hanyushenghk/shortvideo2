# Shadow Video 2

A consumer web app prototype for turning long video links into three outputs:

- A concise text document
- A mind map of the source video
- A short video target under 15 minutes

## Stack

- Next.js 16 App Router
- TypeScript 5
- React 19
- Tailwind CSS 4
- Radix UI primitives
- Lucide React icons
- React Context API via `GameContext`
- pnpm package manager

## Product Scope

V1 focuses on proving repeat use. Users paste one YouTube, TikTok, or direct video URL, generate once, then can keep trying more long videos in the same visit. The current build includes a mocked generation pipeline with clear API boundaries for adding real video ingestion, transcription, summarization, mind-map generation, voice preservation, video rendering, Cloudflare storage, authentication, and billing.

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Planned integrations

- Video ingestion API for YouTube, TikTok, and direct video URLs
- Speech-to-text and content analysis
- Short video assembly or generated video rendering
- Cloudflare R2 for artifact storage
- Account history and deletion
- Subscription credits and free trial gating
