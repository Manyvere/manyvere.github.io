# Manyvere website — Lineage savings page

The approved Lineage calculator is built into `lineage/` for GitHub Pages. Its editable source is in `_savings/`. Production landing URL: `https://www.manyvere.com/lineage/`; account links use the separate application at `https://manyvere.com/lineage/login/`.

```sh
cd _savings
npm ci
npm run build
npm test
npm run serve:static
# In another terminal, from _savings:
npm run check:static
```

Node 25.6.1 and npm 11.9.0 were used for local preparation. The lockfile pins the existing prototype dependencies. Build output is committed because Pages currently publishes the root of main without a custom build workflow. Building empties only `lineage/`; do not put hand-edited content there. The large Three.js-containing bundle warning is inherited from the approved prototype.

The model retains source precision and defaults of 30 companies, 3 walkthroughs and 8 hours. Results are capacity value after indicative Lineage fees, not guaranteed cash savings. Save estimate preserves the approved text download.

The original prototype and its Sites packaging are not changed. This repository is a GitHub Pages integration and contains no copied catch-all Worker. Existing historical assets remain available. See [the staged publication plan](docs/savings-publication-plan.md), [source hashes](docs/savings-source-manifest.json) and [local QA](docs/savings-local-qa.md). Publication requires the separate app health gate and independent review; preparation does not change DNS, Pages settings or the live application.
