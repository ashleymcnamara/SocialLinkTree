---
target: current link page
total_score: 26
p0_count: 0
p1_count: 3
timestamp: 2026-07-19T18-34-15Z
slug: src-index-template-html
---
# Social Link Tree Critique

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Links have hover feedback but no authored focus, active, or visited states. |
| 2 | Match System / Real World | 3 | Platform names and handles are clear, but the disabled-looking X row is still clickable. |
| 3 | User Control and Freedom | 3 | Native links are predictable and create no traps; browser Back is the only return path. |
| 4 | Consistency and Standards | 2 | Domain copy, page title, source, and generated output disagree; X uses a conflicting affordance. |
| 5 | Error Prevention | 3 | The task is low-risk, but remote assets and external destinations have no fallback treatment. |
| 6 | Recognition Rather Than Recall | 4 | Every destination is explicitly named and paired with its handle. |
| 7 | Flexibility and Efficiency | 2 | Links are keyboard reachable, but invisible focus treatment undermines keyboard use. |
| 8 | Aesthetic and Minimalist Design | 2 | The task is focused, but the generic gradient, frosted card, and rainbow stack compete with Ashley's identity. |
| 9 | Error Recovery | 2 | Broken image or link states have no local fallback or recovery guidance. |
| 10 | Help and Documentation | 3 | The task is self-evident, though the generic introduction gives visitors little context. |
| **Total** | | **26/40** | **Acceptable - significant improvements needed** |

## Anti-Patterns Verdict

**LLM assessment:** The shell reads as a generic link-in-bio template: a
purple-pink-blue gradient, centered translucent card, circular portrait, and a
stack of same-sized rounded platform buttons. Ashley's portrait and candid copy
add personality, but the composition itself does not yet feel authored for her.
The page also approaches PRODUCT.md's "loud neon creator page" anti-reference
because the saturated background and six unrelated row colors compete at once.

**Deterministic scan:** The CLI detector found one advisory in
`src/style.css:74`: footer color `#6b7280` sits outside DESIGN.md's documented
palette. The browser detector found four rendered contrast failures: the
Bluesky label and handle are 2.8:1 against `#0ea5e9`, while the Instagram label
and handle are 3.5:1 against `#ec4899`; all require 4.5:1.

**Visual overlays:** Injection succeeded in an isolated headless tab titled
`[Human] Social Link Tree Critique`, and overlay evidence was captured. The tab
was closed after collection, so no persistent user-visible overlay remains.

## Overall Impression

The page completes its basic job quickly, but it feels like a colorful template
with Ashley's copy inserted rather than a personal-brand destination. The
single biggest opportunity is to establish one clear "start here" destination
inside a more distinctive, brand-led composition.

## What's Working

- The core task is obvious: visitors can identify and open a social destination
  without learning a custom interaction.
- Full-width rows provide comfortable touch targets, and visible handles remove
  ambiguity about which account is official.
- The portrait and candid language make the page feel human; the voice is more
  distinctive than the visual shell.

## Cognitive Load

Two checklist items fail: chunking and minimal choices. Six equally prominent
destinations exceed the four-item decision threshold, and there is no featured
or recommended starting point. The resulting load is moderate rather than
severe because every option is familiar and plainly labeled.

## Emotional Journey

The portrait creates a warm opening, but the first and tallest destination is a
tombstone joke about X. That creates an immediate negative valley and gives the
least-valued destination the most attention. The footer repeats the grievance,
so the page ends on disdain rather than a welcoming or memorable invitation.

## Priority Issues

### P1 - The shipped mobile page is not reliably responsive

**Why it matters:** At a 390px viewport, the current checked-in output is wider
than the screen and clips the content. The document also lacks a viewport meta
tag, so mobile browsers may render a desktop-width layout and bypass the
intended breakpoint. Source and `dist` are visibly out of sync.

**Fix:** Add
`<meta name="viewport" content="width=device-width, initial-scale=1">`, constrain
the panel with `width: min(100%, 32rem)`, preserve border-box sizing, verify
320px through desktop widths, and regenerate or stop committing stale `dist`
files.

**Suggested command:** `/impeccable adapt src/`

### P1 - Contrast and keyboard states fail the agreed accessibility baseline

**Why it matters:** White text on Bluesky Blue is 2.8:1 and white on Social Pink
is 3.5:1, below WCAG 2.2 AA. Links have no visible `:focus-visible` treatment,
and motion has no reduced-motion alternative.

**Fix:** Darken those fills or switch to sufficiently dark text, add a
high-contrast focus ring with offset, define active states, and disable the lift
transition under `prefers-reduced-motion: reduce`.

**Suggested command:** `/impeccable audit src/`

### P1 - The visual shell is generic and conflicts with the brand intent

**Why it matters:** The default gradient, frosted centered card, and rainbow
button stack are recognizable template conventions. On desktop, the page feels
like a mobile card floating in unused space rather than a confident personal
homepage.

**Fix:** Build a deliberate desktop composition, feature one primary
destination, reduce platform colors to identifiers rather than entire
backgrounds, and introduce one visual motif tied to Ashley's point of view.
Keep the mobile flow simple, but stop using the exact same narrow composition
at every width.

**Suggested command:** `/impeccable shape the personal link homepage`

### P2 - The X joke has the strongest hierarchy and a misleading affordance

**Why it matters:** A pale dashed row looks disabled but remains clickable, and
placing it first makes the least-valued destination the page's emotional and
visual lead.

**Fix:** Remove it, move it to a quiet text link at the end, or make it an
honestly noninteractive memorial. Keep the joke once, not in both the intro and
footer.

**Suggested command:** `/impeccable distill src/`

### P2 - A static link page ships a development React runtime from third parties

**Why it matters:** React 17 development builds and a remote profile image add
network dependencies, console noise, and failure modes without enabling any
meaningful interaction.

**Fix:** Render semantic static HTML, host an optimized portrait locally, use a
descriptive or intentionally empty alt value, and eliminate the runtime
dependency. If React remains, use a local production build.

**Suggested command:** `/impeccable optimize src/`

## Persona Red Flags

**Jordan (First-Timer):** "Find me on the internet" does not explain who Ashley
is or which destination is the best place to start. The X row looks disabled
but navigates, so its visual language breaks expectation.

**Sam (Accessibility-Dependent):** Keyboard focus is not visibly authored,
Bluesky and Instagram fail contrast, the portrait alt text is only "Profile,"
and the hover motion lacks a reduced-motion path.

**Casey (Distracted Mobile User):** The checked-in 390px experience clips
horizontally, six equal choices require extra scanning, and the remote runtime
and portrait make first paint depend on multiple third parties. The touch
targets themselves are comfortably sized.

## Minor Observations

- `ashley.social`, `ashleywillis.social`, and the page titles are inconsistent.
- Footer text is very small and uses the undocumented `#6b7280` token.
- Most presentation is split between CSS and inline React styles, which makes
  system-level changes harder.
- The page lacks a meta description, favicon, and social-sharing metadata.

## Questions to Consider

- What should a first-time visitor click if they only choose one destination?
- Is X a real destination or a memorial? The interface must communicate one
  answer.
- Should desktop feel like a miniature phone card, or like Ashley's actual
  homepage?
