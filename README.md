# Xiwei Li — Portfolio

Personal portfolio site for a Visual / AI / Brand designer. Dark, restrained, editorial-grid layout built for desktop viewing.

## Stack

- React 19
- Vite 6
- Plain CSS (one stylesheet per component, tokens in `src/index.css`)

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  components/    Nav, Hero, Profile, Work, Craft, Contact, Reveal
  data/content.js   All copy and project data lives here
  hooks/useReveal.js  IntersectionObserver scroll reveal
  index.css      Design tokens, layout shell, shared type
public/media/    Portrait and project placeholder artwork
```

## Design system

| Token | Value | Notes |
| --- | --- | --- |
| `--shell` | `1700px` | Content width |
| `--gutter` | `64px` | Side padding |
| `--bg` | `#09090A` | Near-black base |
| `--ink` | `#EFEDE9` | Warm off-white |
| `--display` | Inter Tight | Headlines and body |
| `--mono` | JetBrains Mono | Labels, metadata, indices |

Sections are numbered `(01)`–`(04)` and separated by hairline rules. Faint vertical column rails run behind the whole page to keep the grid visible.

## Replacing the placeholders

1. **Hero video** — drop an MP4 at `public/media/hero.mp4`. It is greyscaled and dimmed automatically. Without it, an animated gradient fallback shows instead.
2. **Portrait** — replace `public/media/portrait.svg` with a real photo and update the `src` in `src/components/Profile.jsx`.
3. **Project images** — replace `public/media/work-0*.svg` and update the `image` fields in `src/data/content.js`.
4. **Copy and contact details** — everything is in `src/data/content.js`.
