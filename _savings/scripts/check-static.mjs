import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const base = 'http://127.0.0.1:' + (process.env.SAVINGS_PORT || 6208);
const noSlash = await fetch(base + '/lineage?utm_source=qa', { redirect:'manual' });
assert.equal(noSlash.status,301); assert.equal(noSlash.headers.get('location'), '/lineage/?utm_source=qa');
const html = await (await fetch(base+'/lineage/')).text();
const resources = [...html.matchAll(/(?:src|href)="(\/lineage\/[^"?]+)(?:\?[^" ]*)?"/g)].map(m => m[1]);
resources.push('/lineage/brand/mark.png','/lineage/brand/wordmark.svg','/lineage/images/rock-albedo.jpg','/lineage/images/reference-horizon.png');
for (const resource of resources) {
 const res=await fetch(base+resource); assert.equal(res.status,200,resource);
 assert.doesNotMatch(res.headers.get('content-type'),/text\/html/);
 assert.deepEqual(Buffer.from(await res.arrayBuffer()),await readFile(new URL('../..'+resource,import.meta.url)),resource);
}
for (const resource of ['/lineage/assets/missing.js','/lineage/images/missing.png','/lineage/unknown','/lineage/login/','/lineage/api/health']) {
 const res=await fetch(base+resource); assert.equal(res.status,404,resource); assert.equal(await res.text(),'Not found');
}
console.log(JSON.stringify({resourcesVerified:resources.length,missingPaths404:5,slashRedirect:'301, query retained',scope:'local static server; live GitHub/Cloudflare gates remain required'},null,2));
