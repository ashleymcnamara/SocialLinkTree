# Ashley Desktop Design System

## Intent

Ashley Desktop is a personal social hub styled as a fictional late-1990s
computer desktop. It should feel playful, candid, and hand-built while keeping
the six profile destinations obvious and equally important. The visual
reference is Classic Mac OS 8/9 interface language, not a replica: use original
AW iconography and no proprietary Apple assets.

## Principles

1. **Navigation first.** Every profile is a real link and works without
   JavaScript.
2. **Desktop, not decoration.** Windows, title bars, rows, status bars, and
   shortcuts should behave like recognizable interface objects.
3. **Equal aliases.** Twitter, Bluesky, Threads, GitHub, LinkedIn, and Instagram
   have equal row size and visual weight.
4. **Optional delight.** Easter eggs may reward exploration but never hide or
   block the core links.
5. **Accessible nostalgia.** Preserve WCAG 2.2 AA contrast, visible focus,
   semantic HTML, keyboard operation, and reduced-motion alternatives.

## Visual Scene

A compact personal computer sits awake in a bright home office. Its desktop is
organized but lived-in: a profile card, an open Finder-style list, a sticky
note, and a few clickable shortcuts. Platinum chrome and violet dither make the
surface unmistakably retro without sacrificing readability.

## Color Tokens

| Token | Value | Role |
| --- | --- | --- |
| `--desktop` | `#6766a4` | Default dithered wallpaper |
| `--desktop-dark` | `#56558e` | Desktop depth |
| `--chrome` | `#d6d6d6` | Window and control surface |
| `--chrome-light` | `#ffffff` | Raised highlights |
| `--chrome-mid` | `#a6a6a6` | Dividers and inactive detail |
| `--chrome-dark` | `#555555` | Recessed edges |
| `--chrome-ink` | `#111111` | Primary text and outlines |
| `--paper` | `#ffffff` | Document and Finder surfaces |
| `--selection` | `#000080` | Active selection and focus color |
| `--selection-soft` | `#d9d9f3` | Secondary selected surface |
| `--note` | `#fff3a6` | Read Me note |
| `--online` | `#087f23` | Available status |

Platform colors identify file badges only; they do not establish priority:
Twitter `#005a8d`, Bluesky `#075985`, Threads `#17132d`, GitHub `#24292f`,
LinkedIn `#0a66c2`, and Instagram `#9d174d`.

## Typography

Use the local system stack `"Charcoal", "Chicago", "Geneva", Verdana, Arial,
sans-serif`. Body text begins at 16px; window chrome and metadata use smaller
sizes only when contrast remains strong. Titles are bold, compact, and centered
within striped title bars. Prose uses `text-wrap: pretty`; headings use
`text-wrap: balance`.

## Geometry and Depth

- Base spacing increments are 0.25rem, 0.5rem, 0.75rem, 1rem, 1.5rem, and 2rem.
- Window borders are 2–3px black with white and gray inset edges.
- Window shadows are hard-edged, never blurred.
- Controls are square or subtly rounded; avoid modern pill shapes.
- Dither and stripe patterns use repeating CSS gradients, not bitmap assets.

## Components

### Menu bar

Sticky platinum bar with the AW system icon, compact navigation, and clock.
The AW icon is a button-like discovery target and receives a visible focus
outline.

### Windows

Every window has a striped title bar, centered label, raised frame, content
surface, and optional status bar. On small screens windows stack in document
flow; no content may depend on desktop overlap.

### Finder list

Six equal rows expose platform badge, service name, handle, file kind, and open
indicator. Hover and focus use the navy selection treatment. Each external link
announces that it opens a new tab.

### Desktop shortcuts

Shortcuts use original AW-themed glyphs and text labels. They support keyboard
focus and remain secondary to the open profile list.

### Read Me

A yellow note contains welcoming, positive copy about curiosity, community, and
finding Ashley online. Do not use grievance language or disparage any platform.

### Secret About dialog

Five activations of the AW logo open a native modal describing the fictional
Ashley Desktop system. Escape and the close box dismiss it and restore focus.

## Interaction and Motion

- Shift-clicking blank desktop space or pressing Shift+W cycles wallpapers.
- The Konami sequence toggles the After Dark starfield.
- Focus outlines are at least 2px and remain visible against all surfaces.
- Transition durations stay below 200ms and use the snap easing token.
- Under `prefers-reduced-motion: reduce`, animated starfields are disabled and
  After Dark is not activated.
- An `aria-live` region announces non-obvious wallpaper and mode changes.

## Responsive Rules

- Minimum supported viewport width is 320px.
- Windows stack vertically below the desktop breakpoint.
- Finder metadata may collapse before names or handles do.
- Touch targets remain at least 44px high where space permits.
- No horizontal document overflow is allowed.

## Content Rules

- Canonical domain: `ashleywillis.social`.
- Use Ashley's name directly and confidently.
- Keep all six social profiles equal in prominence.
- Keep Easter egg copy warm, curious, and platform-neutral.
- Core content and links must remain usable when JavaScript is unavailable.
