**# Design Specification — Xiwei Li Portfolio**



This document fully describes the visual design, layout, content structure, and interaction/motion system of this site, so that reading it alone (without seeing the live site) is enough to rebuild an identical result.



Stack it's built on (for context, not required to follow exactly): React 19 + Vite + TypeScript + Tailwind CSS 4 `@theme` tokens), `lucide-react` icons, no animation library (pure CSS keyframes + `IntersectionObserver` + `requestAnimationFrame`), hash-based client routing with no router library.



---



**## 1. Design Style & Language**



**Genre**: Light "neo-brutalist" portfolio / pitch-deck landing page. Flat, high-contrast, no gradients-as-decoration (gradients are used only as subtle background texture, never on text or as a glow effect), no drop shadows, no glassmorphism/blur panels. Color does the work of differentiating blocks — not elevation or shadow.



**Core principles**:

- **Flat solid fills only.** Every "card" is a single flat background color with a moderate border-radius. No shadows, no borders-as-primary-treatment (a hairline border is allowed on neutral cards, never on colored ones).

- **Color is used sparingly and with intent.** One accent color (lime-green) appears as a *solid fill* in at most one or two blocks per screen — never as body text color, never as a glow/blur tint. A near-black "block" fill is the secondary strong accent (icon badges, one differentiator tile per stat row, primary CTA buttons).

- **Big, confident typography.** Headlines are huge relative to viewport (hero name scales with `vw` units), bold weight, tight tracking, zero decorative treatment (no gradient-clipped text, no outline text).

- **Everything else is neutral.** Body copy sits in low-contrast grey-on-light-grey text tokens; only headings and primary actions get full-contrast near-black.

- **Restraint over decoration.** No background blur blobs, no glow effects, no drop shadows anywhere in the design. A very faint animated grid-paper texture is the only ambient decoration, and it's barely visible (8–20% opacity).



---



**## 2. Color System**



Defined as CSS custom properties (Tailwind 4 `@theme` tokens), referenced everywhere by *name* — never a raw hex value in component code. This is the single most important architectural decision: swapping a whole theme means changing ~10 token values in one file, touching zero component code.



```css

@theme {

 --color-bg: #f2f3ee;              /* page background — warm off-white/light-grey */

 --color-surface: #e8e9e3;         /* neutral card fill, one step darker than bg */

 --color-surface-2: #dcddd5;       /* neutral card fill, two steps darker (secondary buttons, nav pill) */

 --color-line: rgba(0, 0, 0, 0.08);        /* hairline borders, grid lines */

 --color-line-strong: rgba(0, 0, 0, 0.16); /* slightly stronger hairline (e.g. hero scroll indicator) */

 --color-ink: #111111;             /* primary text — near-black, not pure black */

 --color-ink-dim: rgba(17, 17, 17, 0.6);   /* secondary text */

 --color-ink-faint: rgba(17, 17, 17, 0.35);/* tertiary/label text, index numbers */

 --color-accent: #d7ff3f;          /* lime-green — the ONE loud accent, solid fill only */

 --color-accent-dim: #d7ff3f;      /* same value; kept as a separate token for semantic flexibility */

 --color-block: #111111;           /* solid near-black card/button fill (same value as --color-ink, but a distinct semantic token: this one is a FILL, --color-ink is TEXT) */

}

```



Rules for using these tokens:

- *****`bg-accent`****** (lime): always paired with `text-ink` on top (dark text on lime). Never use lime as a text/hover color on its own — lime text on a light background fails legibility. If you want a lime "hint," use it as a small solid-fill dot/badge, not as text.

- *****`bg-block`****** (near-black): always paired with `text-white` on top. Used for: primary CTA button, small circular icon badges (e.g. a play button), and exactly one "strong" tile per stat/card row for visual rhythm.

- *****`bg-surface` **/** `bg-surface-2`******: the default "neutral card" fill for anything that isn't the accent or block treatment.

- Hover/interaction states never introduce a new color — they use opacity changes `hover:opacity-85`), a translate/lift transform, or swap to `text-ink` (never to `text-accent`, for the legibility reason above).



A secondary, separate palette exists for a "paper/document" sub-page style (case-study detail pages), intentionally different because that content simulates a printed document, not the marketing homepage:

```css

--color-paper: #ffffff;

--color-paper-ink: #1a1a1a;

--color-paper-dim: #404040;

--color-paper-line: rgba(0, 0, 0, 0.08);

--color-dark-panel: #1d222a;   /* one dark section within the paper page, for "final UI" screenshots */

```



**### Card color rhythm pattern**



When a row of same-sized cards needs visual variety (e.g. a 4-stat grid), don't color them all the same. Use a repeating variant sequence, indexed by position:



```

Card 1: neutral (bg-surface)

Card 2: accent (bg-accent, text-ink)   ← the one lime highlight

Card 3: neutral (bg-surface)

Card 4: block (bg-block, text-white)   ← the one strong dark highlight

```



This produces a neutral / lime / neutral / black rhythm — sparse, deliberate use of color, never more than one accent and one block tile per row.



---



**## 3. Typography**



**Single font family for everything** — headings and body text both use the same typeface, no secondary display font. This is a deliberate simplification: one font, one voice, consistent throughout.



```css

--font-sans: 'Plus Jakarta Sans', Helvetica, Arial, sans-serif;

--font-doc: 'Plus Jakarta Sans', Helvetica, Arial, sans-serif;   /* used on case-study sub-pages */

--font-display: 'Plus Jakarta Sans', Helvetica, Arial, sans-serif; /* applied to h1–h4 */

```



Loaded via Google Fonts with the full weight/italic range: `Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800`.



**Type scale** (custom tokens, not Tailwind defaults):

```css

--text-h1: 36px;      /* stat card numbers */

--text-h2: 48px;

--text-h4: 32px;      /* case-study section headings */

--text-title2: 24px;  /* profile statement, case-study title */

--text-title3: 20px;

--text-body1: 16px;

--text-body2: 14px;   /* stat labels, project role text */

--text-body3: 12px;   /* fine print, timeline chips */

```



Section headings on the homepage `Experience`, `Selected Work`, `Core Competencies & Skills`, `Let's build something.`) do **not** use the token scale — they use large responsive Tailwind sizes instead `text-3xl sm:text-5xl` for section titles; up to `text-[10vw] sm:text-[6rem] lg:text-[7rem]` for the hero name and contact closing line), because those are meant to feel viewport-relative and huge, not fixed-scale.



**Weight & tracking conventions**:

- Section headings: default weight (not bold), `tracking-tight`, flat `text-ink` color — **never** a gradient-clip or outline effect.

- Hero name / big closing statement: `font-bold`, `tracking-tight`, extremely tight `leading-[0.95]`.

- Labels/eyebrow text (roles line, "Scroll", stat labels, section index numbers): `text-xs` or `text-sm`, `uppercase`, wide letter-spacing `tracking-[0.2em]` to `tracking-[0.25em]`), low-contrast color `text-ink-faint`).

- Body copy: default weight, `leading-relaxed`, `text-ink-dim` or `text-ink-faint` depending on hierarchy — never full `text-ink` contrast for paragraph copy, that's reserved for headings and key numbers.



---



**## 4. Spacing, Radius & Layout Grid**



- **Content max-width**: `1700px`, centered `mx-auto max-w-[1700px]`), with responsive horizontal padding `px-6` (mobile) → `sm:px-10` (desktop). This wide max-width plus generous padding gives the "spacious pitch-deck" feel rather than a narrow blog-column feel.

- **Section vertical rhythm**: every homepage section uses `py-28 sm:py-36` — large, consistent vertical breathing room between sections.

- **Section header pattern**: every section repeats the same header row structure — a big title on the left, a small `text-ink-faint` index/count label on the right, in a `flex items-end justify-between` row, with `mb-20` below it before content starts. Examples: `Experience` / `01`, `Selected Work` / `(07)`, `Core Competencies & Skills` / `(04)`.

- **Card grid gaps**: `gap-6` to `gap-8` between cards, `grid-cols-1` on mobile expanding to `sm:grid-cols-2` or `sm:grid-cols-4` depending on section.

- **Border radius scale**: small/base elements (buttons, chips) use `rounded-lgrounded-base` (8px); most cards use `rounded-2xl` or `rounded-3xl` (16–24px, per the `--radius-m--radius-12x` tokens); nothing is ever a hard 0px square or a full pill except tag/label chips.



---



**## 5. Page Structure & Navigation**



**Routing**: hash-based, no router library — a single `getRoute()` reads `window.location.hash`, and the app switches between the homepage (all sections stacked on one scrollable page) and a project detail "case study" sub-page. Route changes scroll to top.



**Homepage section order** (single scrolling page, each section is a `<section id="...">` anchor target for nav links and smooth-scroll):

1. **Hero** `#top`) — full viewport height

2. **Experience** `#experience`)

3. **Work** `#work`)

4. **Strengths** `#strength`)

5. **Contact** `#contact`) — full viewport height, last section, doubles as footer



**Nav bar** (fixed, always present, above all sections):

- Fixed to top `fixed inset-x-0 top-0 z-50`), transparent initially.

- Turns into a translucent blurred bar `bg-bg/80 backdrop-blur-md`, hairline bottom border) once the user scrolls past ~24px — a scroll-driven `background transition`, tracked via a plain `window.scrollY` listener, not IntersectionObserver.

- Layout: logo/wordmark on the left (bold short name + a lighter "PORTFOLIO {year}" sub-label), center nav links (hidden on mobile, `sm:flex`) pointing to the three mid-page sections, and a small solid pill "Contact" button on the right that jumps to the contact section. The pill uses the neutral `bg-surface-2` fill (not the accent color) — it's a functional nav element, not a marketing CTA, so it stays low-key.



**Case-study sub-page** `#/project/:slug`): a completely separate visual treatment — simulates a printed "document" rather than the marketing homepage. White paper card `bg-paper`, drop shadow — the *only* place a shadow appears in the whole design, deliberately, to look like a floating physical document) containing a sequence of titled sections (Design Process, Challenges, Research, Competitor Analysis, etc.), each following a repeatable `DocSection` pattern: a bold `text-h4` title, then a `flex flex-col gap-5` stack of paragraphs/lists/image figures. One section near the end `Final UI`) inverts to a dark panel `bg-dark-panel`, white text) to showcase final screenshots against a neutral surface. A "← Back to Home" link sits above the document card.



---



**## 6. Content Model**



Content lives in one typed data file, imported by every section component — no hardcoded copy inside components. Shape (illustrative, not literal field requirements):



- **Profile**: name, short name, list of 2–4 role titles (shown as a slash-separated eyebrow line in the hero), one-line headline, one-sentence "statement" (bigger, used in the Experience intro card), a longer summary paragraph, location.

- **Contact**: email, phone, LinkedIn handle, personal site domain — reused in both the Experience card's contact row and the Contact section's link list.

- **Stats**: an array of `{ value, label }` pairs — value is a short string combining a number and a suffix `"11+"`, `"95%+"`), always rendered inside the count-up stat cards.

- **Experience/roles history**: role, company, period, location (defined in data even if not all fields are surfaced on every screen).

- **Work/projects**: an ordered list, each with an index string `"01"`), an optional slug (null = not clickable / no case study yet, present = links to the detail sub-page), title, one-line role/description, a short all-caps tag, and a year.

- **Strengths**: grouped skill categories, each with a title and a list of skill keywords joined with commas for display.



---



**## 7. Section-by-Section Design**



**### Hero** `#top`**)**

- Full `100dvh` height, content vertically centered.

- Background layer stack (back to front): a muted looping background video at very low opacity `opacity-10`) for subtle motion texture → the grid-paper texture `opacity-30`) → a vertical gradient fade from transparent to the page background color at the bottom (so the section blends into the next one, not a hard cut).

- Foreground content, left-aligned, in this order: an all-caps role list (e.g. "VISUAL DESIGNER / AI DESIGNER / BRAND DESIGNER") → a huge bold name `text-[13vw]` scaling up to `text-[9rem]` on large screens) → a one-line headline/subtitle → a single primary CTA button ("View Projects") that smooth-scrolls to the Work section.

- CTA button style: solid near-black fill `bg-block`), white bold text, small trailing arrow icon that nudges right on hover `group-hover:translate-x-1`).

- A small "Scroll" hint pinned to the bottom corners of the viewport, paired with a thin horizontal line that grows in from the left on load.



**### Experience** `#experience`**)**

- Section header row: "Experience" title + "01" index.

- A two-column layout `1fr 2fr` on desktop, stacked on mobile): left is a square-ish media placeholder panel (subtle gradient + grid texture background, a circular black play-button badge centered, name label bottom-left) — represents an intro video; right is a text card with the profile "statement" (bold, larger), the summary paragraph, and a contact row (phone + email, each with a small icon, hover changes text color to full-ink, no underline).

- Below that: a 4-card stat grid (2 columns mobile, 4 desktop) using the neutral/lime/neutral/black color rhythm described in §2. Each card shows a big number (using the `--text-h1` scale) and a small label beneath.

- **Micro-interaction**: each stat number animates from 0 up to its final value once the card scrolls into view (count-up, ease-out, ~1.2s, only plays once). Each stat card also lifts slightly `-translate-y-1`) on hover.



**### Work / Selected Work** `#work`**)**

- Section header row: "Selected Work" title + a parenthesized zero-padded count, e.g. "(07)".

- A responsive 2-column grid of project cards. Each card: an image/placeholder area (16:10 aspect ratio, subtle gradient + grid texture, a small all-caps category tag centered) that zooms slightly on hover `group-hover:scale-105`), followed by a text block with a small index+year line, the project title, a one-line role description, and a top-right arrow icon that nudges diagonally and darkens on hover.

- Cards with an associated case study are links to the detail sub-page `#/project/:slug`); cards without one are visually identical but non-navigating.

- **Micro-interaction**: whole card lifts slightly on hover `-translate-y-1`), in addition to the internal image zoom and arrow nudge — layered hover feedback rather than one single effect.



**### Strengths / Core Competencies & Skills** `#strength`**)**

- Section header row: title + a parenthesized count, e.g. "(04)".

- No cards here — a simple vertical stack of skill-category rows, each with a bold sub-heading and a comma-joined list of skill keywords as plain low-contrast body text. Deliberately the most minimal/text-only section, a breathing point between two card-heavy sections.



**### Contact / "Let's build something."** `#contact`**)**

- Full `100dvh` section, content vertically centered, acts as the page footer too.

- A small pulsing lime dot + "Open to new opportunities" status line at the top.

- A very large, bold, tight-leading closing headline ("Let's build something.") — the biggest text on the page after the hero name.

- A vertical list of contact links (Email, LinkedIn, Portfolio) laid out as label-left / value-right rows; the value fades slightly `opacity-70`) on hover with its trailing arrow nudging up-right — no color change (avoids the lime-text-legibility problem).

- A footer row at the very bottom: copyright line (auto-updating year) on the left, location on the right.



---



**## 8. Motion & Interaction System**



All motion is implemented with plain CSS keyframes + one `IntersectionObserver`-based scroll-reveal hook + one small count-up hook using `requestAnimationFrame` — no animation library. Every animation respects `prefers-reduced-motion: reduce` by collapsing durations to near-zero and skipping count-up entirely (snapping straight to end values).



**### 8.1 Scroll-reveal (entrance animation)**

- Pattern: any element marked with a `data-reveal` attribute starts at `opacity: 0; transform: translateY(24px)`, transitioning to full opacity / no offset over `0.8s` with an ease-out cubic-bezier, the moment it's ~15% visible in the viewport (with a small negative bottom margin so it fires slightly before hitting the very bottom edge).

- Implemented once as a reusable hook: attach a ref to a section, the hook finds all `[data-reveal]` descendants, observes them all, and adds an `is-visible` class (which the CSS above keys off of) the first time each one intersects — then stops observing that element (fires once, never re-triggers on scroll-back).

- Applied to: section header rows, and each major content block within a section (the Experience 2-column row + stat grid, the Contact headline/link list) — not to every individual element, just the meaningful groups, so sections feel like they arrive in 2–3 staged chunks rather than one flat fade.



**### 8.2 Hero entrance choreography**

- On load (not scroll-triggered, since it's the first thing visible), the hero's pieces fade+rise in with staggered delays via inline `animationDelay` on a shared `.anim-fade-up` class: eyebrow role line at 150ms, name at 300ms, subheadline at 480ms, CTA button at 620ms, scroll hint at 900ms, and the scroll-hint's underline separately grows in `scaleX 0→1`) at 1200ms. This creates a cascading top-to-bottom reveal on first paint rather than everything appearing at once.



**### 8.3 Count-up numbers**

- Trigger: a lightweight single-element visibility hook (same `IntersectionObserver` primitive, ~40% threshold, fires once) flips a boolean the first time a stat card scrolls into view.

- Animation: parse the leading numeric portion out of the display string (so it works for plain integers, decimals, and percentages alike), animate a floating-point value from 0 to that target over ~1.2 seconds using `requestAnimationFrame` and an ease-out-cubic curve `1 - (1-t)^3`), re-stitching the original prefix/suffix characters (like the trailing `+` or `%+`) around the animated number every frame, and preserving the original decimal precision so it settles on exactly the source string.

- Never restarts once played (the visibility hook disconnects after first trigger, matching the one-shot reveal behavior elsewhere).

- If `prefers-reduced-motion: reduce` is set, skip straight to the final value with no animation frames at all.



**### 8.4 Ambient background texture**

- A very faint grid-paper pattern (two overlaid 1px line gradients, 64px cell size) drifts diagonally on a slow 40-second linear loop — used at low opacity (8–30% depending on section) behind hero, project card thumbnails, and the experience media panel. Purely ambient, never a focal effect.

- A slow pulsing opacity animation (0.4 ↔ 1, ~2.4s ease-in-out loop) on the small "status dot" in the Contact section, to suggest liveliness without being distracting.



**### 8.5 Hover feedback (no new colors, ever)**

- **Buttons/badges**: opacity dip `hover:opacity-85`) rather than a color or shadow change.

- **Cards** (stat cards, project cards): a small upward translate `hover:-translate-y-1`, `duration-300`) — a tactile "lift," no shadow accompanies it (shadows are reserved exclusively for the case-study document page).

- **Icons paired with text** (arrows next to links): translate diagonally toward the direction of travel `group-hover:-translate-y-0.5 group-hover:translate-x-0.5` for up-right arrows, or a simple horizontal nudge for CTA arrows) combined with a color shift from faint to full ink — never lime.

- **Text links on light background**: never use the accent lime color as a hover text color (fails legibility on a light background). Use a shift to full `text-ink` contrast, or an opacity dip, instead.

- **Nav bar**: background/blur fades in as a function of scroll position, not a discrete hover — this is the site's other "scroll effect" alongside the reveal-on-scroll pattern, and it's deliberately the only scroll-position-driven (rather than visibility-driven) animation in the whole design.



---



**## 9. What NOT to do (explicit anti-patterns for this design)**



- Do not use gradient-clipped ("bg-clip-text") text anywhere — all headings are flat solid color.

- Do not add drop shadows to any homepage card — flat color fill differentiates blocks, not elevation. (The one exception, the case-study document page, is intentionally a different visual language.)

- Do not use blurred glow/blob background decorations — removed by design; the only background texture allowed is the faint grid-paper drift.

- Do not use the accent lime color as text/hover-text color on a light background — solid fill only, always with dark text on top.

- Do not use more than one lime accent block and one black block per card row — color rhythm depends on scarcity.

- Do not introduce a second font family for headings — one typeface, used everywhere, is a deliberate simplification.



  


