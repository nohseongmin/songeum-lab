# Songeum Lab

A browser palm-reading prototype. Users trace three lines on a hand photo, and the app measures their lengths and curves to produce an interpretation based on traditional palmistry.

Photos are processed in the browser rather than uploaded. No AI model or API key is used. The layout includes a reserved advertising slot.

## Running

From the repository root:

```bash
python -m http.server 4173 --directory dist
```

Open `http://localhost:4173`.

## Files

- `dist/index.html`: interface, photo handling, and interpretation logic.
- `BLUEPRINT.md`: project scope and design notes.
- `.openai/hosting.json`: hosting configuration.
- `.github/workflows/site.yml`: validation and GitHub Pages deployment.

Pushes and pull requests check JavaScript syntax and required content. A successful main build deploys `dist/` to GitHub Pages.

## Intended use

Palmistry is not a scientifically validated personality test or prediction method. This project is for entertainment and reflection, rather than medical, financial, or legal decisions.
