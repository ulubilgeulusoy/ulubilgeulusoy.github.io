# ulubilgeulusoy.github.io

Personal portfolio website built with static HTML and CSS.

Portfolio website: <a href="https://ulubilgeulusoy.github.io/" target="_blank" rel="noopener noreferrer">https://ulubilgeulusoy.github.io/</a>

## 3D Globe (About Page)

The **My Places** section on `about.html` uses a 3D interactive globe powered by **globe.gl**.

References:
- https://globe.gl/
- [vasturiano/globe.gl](https://github.com/vasturiano/globe.gl)

### How It Is Implemented

- `about.html` loads globe.gl from CDN:
  - `<script src="https://cdn.jsdelivr.net/npm/globe.gl"></script>`
- The globe is rendered inside:
  - `<div id="about-map" class="about-map">...</div>`
- Location data is defined as a local JavaScript array (`places`) with:
  - `name`, `lat`, `lng`, `detail`
- A points layer is created from `places` and passed to:
  - `.pointsData(...)`
  - `.pointAltitude(...)`
  - `.pointRadius(...)`
  - `.pointColor(...)`
- Current globe visual style:
  - Dark-blue/night Earth texture (`earth-night.jpg`)
  - Topology bump map (`earth-topology.png`)
  - Starfield background (`night-sky.png`)
  - Subtle atmosphere tint for depth
- Interaction behavior:
  - On pin click (`.onPointClick(...)`), the selected city title and text are shown in the left-side info panel (outside the globe).
  - Camera animates toward the clicked location with `pointOfView(...)`.
- Responsive layout and panel styling are handled in `style.css` with:
  - `.about-globe-layout`
  - `.about-places-panel`
  - `.about-map`

## License

- Code (`.html`, `.css`, `.js`): MIT License. See `LICENSE`.
- Content and media assets (text, images, videos, PDFs, branding): All Rights Reserved. See `LICENSE-CONTENT`.
- Third-party assets are documented separately in `THIRD_PARTY_ASSETS.md` and remain under their respective owners' terms.

## Optional Google Analytics 

Google Analytics is intentionally not committed to this repository.

- `index.html` loads `analytics-loader.js`.
- `analytics-loader.js` tries to load `ga-private.html` at runtime.
- `ga-private.html` is ignored by git via `.gitignore`.

If you want analytics on your own deployment, create a local `ga-private.html` file in the repo root with your own measurement ID.

Example:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Notes:
- Replace `G-XXXXXXXXXX` with your own Google Analytics measurement ID.
- Do not commit `ga-private.html`.
- If `ga-private.html` is missing, the site still works normally without analytics.
