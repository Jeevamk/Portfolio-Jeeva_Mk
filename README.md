# Jeeva MK — Portfolio

Built with **React 19** (Vite 8) and **NestJS 12**.

```
jeeva-portfolio/
├── server/   NestJS API   → http://localhost:3000/api
└── client/   React app    → http://localhost:5173
```

## 1. Check your Node.js version first

This project needs **Node.js 22.12 or newer**. Check with:

```powershell
node -v
```

If it shows v20 or older, install the LTS version from https://nodejs.org
(or run `winget install OpenJS.NodeJS.LTS`), then close and reopen your terminal.

## 2. Install and run

Run these from the **jeeva-portfolio** folder (the one containing this README):

```powershell
npm run install:all
npm run dev
```

Open http://localhost:5173.

> If `npm install` shows an audit report, that's normal.
> Don't run `npm audit fix --force`; it can upgrade packages to incompatible versions.

## 3. Edit your content

Everything on the site comes from **one file**: `server/src/data/portfolio.data.ts`.

- Replace the LinkedIn and GitHub placeholder URLs (search for `TODO`).
- Remove or change `phone` if you don't want your number public.
- Your photo is `client/public/jeeva.jpg`; replace it with any image of the same name.

Colours and fonts are at the top of `client/src/styles.css`.

## API

| Method | Route             | Returns                                   |
| ------ | ----------------- | ----------------------------------------- |
| GET    | /api/profile      | Profile, highlights, awards, education    |
| GET    | /api/experience   | Jobs and their projects                   |
| GET    | /api/skills       | Grouped skills                            |
| POST   | /api/contact      | Saves `{ name, email, message }`          |

Contact messages are validated, then saved to `server/messages.json`.
To get them by email instead, replace the file write in
`server/src/contact/contact.service.ts` with Nodemailer or Resend.

## Notes on the latest versions

- **NestJS 12 uses ES modules**, so imports inside `server/src` end in `.js`
  (for example `import { AppModule } from './app.module.js'`). Keep that when adding files.
- The Nest CLI uses **TypeScript 6**; don't upgrade to TypeScript 7 yet.
- The contact form uses React 19's `useActionState` and form actions.

## Deploy

- **API** (Render, Railway): build `npm run build`, start `npm run start:prod`,
  set `CLIENT_URL` to your frontend URL.
- **Frontend** (Vercel, Netlify): root `client`, build `npm run build`, output `dist`,
  set `VITE_API_URL` to your API, e.g. `https://jeeva-api.onrender.com/api`.
