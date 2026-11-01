# SUPREME HEADQUARTERS

> "We don't need enemies. We have each other."

A private-squad esports website for seven friends, their games and their legendary inside jokes.
Built with React, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Make it yours
| What | Where |
| --- | --- |
| Discord / Instagram / contact links, logo | `src/config.ts` |
| Member photos, roles, taglines, joke stats | `src/data/members.ts` |
| Game art, awards, gallery images and videos, stats | `src/data/content.ts` |

Put image and video files in `public/` and reference them as `/members/asad.jpg`.

## Structure
```
src/
  components/   Navbar, Hero, MemberCard, Squad, Games, Achievements, Stats, Moments, Join, ...
  data/         members.ts, content.ts (no UI code)
  hooks/        useCounter.ts
  config.ts     links and navigation
standalone/     single-file HTML version (open index.html directly)
```

## Deploy
Push to `main`. In the repo go to Settings > Pages > Source: **GitHub Actions**. The included workflow builds and publishes the site.

All statistics are entertainment only. Not real competitive records.
