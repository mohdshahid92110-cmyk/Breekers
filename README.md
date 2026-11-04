# BREEKERS — Think Beyond. Create Anything.

A responsive Next.js AI-workspace prototype with a landing page and dedicated workspaces for chat, coding, image generation, automation, and learning.

## Current functionality

- Responsive landing page and navigation
- Animated visual system using Framer Motion
- Workspace navigation and interactive demo conversations
- Demo request routing from the central assistant
- Clear demo-mode labels where live AI services are not connected

## Important: what is and is not live

This project is a working **frontend prototype**. It does not yet connect to an AI model, generate real images, execute automations, process payments, or authenticate users. Those features need provider credentials and server-side integrations. Do not present demo responses as real AI output.

## Run locally

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy and get a public link

1. Create a GitHub repository and upload the contents of this project folder (`breekers/`).
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Keep the detected Next.js framework settings and deploy.
5. Vercel will provide a public `*.vercel.app` URL.

No API keys are required for this prototype deployment.

## Next development stages

1. Add authentication and user-specific data storage (for example, Supabase Auth + database + Row Level Security).
2. Add a server-side chat endpoint and connect an AI provider. Keep provider keys in server-only environment variables.
3. Add coding tools with isolated/sandboxed execution; never run user code directly on the web server.
4. Connect an image-generation provider through a server-side endpoint.
5. Build automation as an approval-based task runner with progress, logs, and explicit success/failure states.

## Project structure

- `app/` — Next.js routes and global styles
- `components/` — landing-page sections and shared UI
- `components/app/` — workspace shell and workspace view
- `lib/workspaces.ts` — workspace definitions
- `lib/router.ts` — demo-only request routing

## Scripts

```bash
npm run dev     # local development
npm run build   # production build
npm run start   # serve production build
npm run lint    # lint source files
```
