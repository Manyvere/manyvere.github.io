# Staged publication plan — 8 September 2026

This is a local candidate, not a completed deployment. No push, PR, merge, DNS, Worker, host or Pages-setting mutation was performed.

## Verified starting point and target

GitHub API read: Pages `legacy`, source `main:/`, status `built`, CNAME `manyvere.com`, HTTPS enforced. Fresh fetched base: `c2a8111cf0154140722e8070c5a53859a6d8d076`. Root/operator separately own live application health and Cloudflare configuration.

| Request | Intended handling |
| --- | --- |
| `www.manyvere.com/` | Exact-path Cloudflare redirect to `https://www.manyvere.com/lineage/`, plus fixed HTML fallback |
| `www.manyvere.com/lineage` | Directory slash redirect to `/lineage/`; retain query |
| `www.manyvere.com/lineage/` | GitHub Pages committed calculator |
| `www.manyvere.com/lineage/{assets,brand,images}/…` | Static asset bytes on www |
| `manyvere.com/lineage*` | Existing secure application Worker, guarded tunnel and application/API; unchanged |
| `www.manyvere.com/login/` | Historical bookmark HTML redirect to the real apex application login |
| Unknown www assets/routes | Real HTTP 404; never a calculator catch-all |

The candidate CNAME is `www.manyvere.com`. GitHub documents automatic apex-to-www redirects when www is canonical and both DNS configurations point to Pages. The existing apex Worker must continue intercepting application paths before they reach Pages. This is a concrete reason to check the apex application prefix again after changing canonical domain. [GitHub custom-domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

## Operator sequence after independent review and healthy app

1. Record live Worker version/routes, apex DNS and www DNS, Pages config and deployed SHA. Confirm the exact app health/auth/API/asset gate is green. Keep app-source and Worker changes out of the website publication.
2. Recheck main for concurrent changes. Merge/publish the independently reviewed website SHA using the existing Pages main-root workflow. Coordinate CNAME and Pages custom-domain setting to `www.manyvere.com`; wait for the Pages deployment and valid www HTTPS before declaring it ready. Preserve current apex A records/proxy and Worker route.
3. Keep www CNAME target `manyvere.github.io`. A Cloudflare Single Redirect requires proxied incoming www traffic; review and, when ready, enable www proxy if still DNS-only. Keep TLS fully validated. Create only this rule: `(http.host eq "www.manyvere.com" and http.request.uri.path eq "/")`, static target `https://www.manyvere.com/lineage/`, preserve query enabled. Start with 302 during validation; set 301 only after the route matrix passes. Do not add a zone-wide hostname/path catch-all or an apex Custom Domain. [Cloudflare prerequisite](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/create-dashboard/), [redirect settings](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/settings/)
4. Verify www root, query, `/lineage` and slash endpoint; compare downloaded HTML/JS/CSS/font/image/brand SHA-256 against the reviewed artifact. Check a missing JS and image return 404 rather than successful HTML. Verify actual browser-entered inputs, TXT export and desktop/mobile layout on www.
5. Re-run exact apex app/login/API/auth/missing-route gates. Root redirect must not match apex login/API or www asset routes. Confirm no apex response redirects into the marketing calculator. Keep the current operator's app-health evidence attached to the final published SHA.

The HTML fallback uses a fixed absolute www target, retaining search/hash, with a noscript meta fallback. Query values cannot select another host. No auth cookies or sessions are touched by the static calculator.

Rollback: disable only the newly created root redirect, restore recorded www proxy/CNAME configuration and Pages custom domain, and revert the website candidate with a normal commit. Preserve history. Never remove or broaden the application Worker route as a website rollback shortcut. Recheck both hosts after rollback.
