# Ashley Desktop

The source for [ashleywillis.social](https://ashleywillis.social): Ashley
Willis's official social-profile hub, presented as a responsive Classic Mac
OS-inspired desktop.

## Features

- Semantic HTML with a small, dependency-free JavaScript enhancement layer
- Responsive platinum-window layout from 320px phones to wide desktops
- WCAG 2.2 AA color contrast, visible keyboard focus, and reduced motion
- Locally hosted, size-constrained profile artwork
- Equal-weight links for Twitter, Bluesky, Threads, GitHub, LinkedIn, and Instagram
- Hidden desktop delights: wallpaper cycling, an About box, and After Dark

## Development

```bash
npm install
npm run serve
```

The local server rebuilds when files under `src/` change.

## Production build

```bash
npm run build
```

Compiled files are written to `dist/`.

## Project structure

- `src/index.template.html`: document metadata and build shell
- `src/index.partial.html`: semantic page content
- `src/style.css`: design tokens, layout, states, and responsive behavior
- `src/script.js`: progressive-enhancement Easter eggs
- `src/assets/`: local profile artwork, favicon, and social card
- `dist/`: generated production output
