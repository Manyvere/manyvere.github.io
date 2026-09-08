import vm from 'node:vm';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
const read = path => readFileSync(new URL(path, import.meta.url), 'utf8');
test('all production navigation and scene resources stay in their intended host/path', () => {
  const app = read('../src/App.jsx');
  assert.equal((app.match(/https:\/\/manyvere.com\/lineage\/login\//g) || []).length, 2);
  assert.ok(app.includes('href="/lineage/"'));
  for (const f of ['../src/App.jsx','../src/SpaceScene.jsx','../index.html']) assert.doesNotMatch(read(f), /["']\/(?:brand|images|assets)\//);
  assert.ok(read('../vite.config.mjs').includes("base: '/lineage/'"));
});
test('fixed destination root fallback retains query/hash without accepting a redirect destination', () => {
  const html = read('../../index.html');
  assert.ok(html.includes("window.location.replace('https://www.manyvere.com/lineage/' + window.location.search + window.location.hash)"));
  assert.doesNotMatch(html, /URLSearchParams|decodeURIComponent|document.write/);
  let target;
  vm.runInNewContext(html.match(/<script>(.*?)<\/script>/s)[1], {window:{location:{search:'?next=https://example.org&x=1', hash:'#calculator',replace:value=>target=value}}});
  assert.equal(target,'https://www.manyvere.com/lineage/?next=https://example.org&x=1#calculator');
  assert.equal(read('../../CNAME').trim(), 'www.manyvere.com');
});
test('model, calculation, slider, styling and source assets preserve approved bytes', () => {
  const manifest = JSON.parse(read('../../docs/savings-source-manifest.json'));
  const unchanged = manifest.files.filter(f => /^(public\/|src\/(model.js|slider.js|Calculation.jsx|styles.css|calculation.css|main.jsx)$)/.test(f.path));
  for (const f of unchanged) {
    const bytes = readFileSync(new URL('../' + f.path, import.meta.url));
    assert.equal(createHash('sha256').update(bytes).digest('hex'), f.sha256, f.path);
  }
  assert.ok(unchanged.length >= 14);
});
test('committed static artifact references existing generated assets under /lineage/', () => {
  const html = read('../../lineage/index.html');
  const links = [...html.matchAll(/(?:src|href)="(\/[^"?]+)(?:\?[^" ]*)?"/g)].map(m => m[1]);
  assert.ok(links.some(x => /^\/lineage\/assets\/.*\.js$/.test(x)));
  for (const link of links) { assert.ok(link.startsWith('/lineage/')); assert.ok(readFileSync(new URL('../..' + link, import.meta.url)).length > 0); }
  const files = readdirSync(new URL('../../lineage/assets/', import.meta.url));
  const js = files.filter(f => f.endsWith('.js')).map(f => read('../../lineage/assets/'+f)).join('\n');
  for (const resource of ['/lineage/brand/mark.svg','/lineage/brand/wordmark.svg','/lineage/images/rock-albedo.jpg','/lineage/images/reference-horizon.png']) assert.ok(js.includes(resource));
});
