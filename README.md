# ulubilgeulusoy.github.io

Personal portfolio website built with static HTML and CSS.

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
