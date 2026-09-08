// Local-only static Pages approximation: no SPA fallback, no auth or proxy.
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../../', import.meta.url));
const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript', '.css':'text/css', '.svg':'image/svg+xml', '.jpg':'image/jpeg', '.png':'image/png', '.woff2':'font/woff2', '.woff':'font/woff' };
const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const pathname = decodeURIComponent(url.pathname);
    if (pathname.split('/').some(p => p.startsWith('.') || p.startsWith('_'))) throw new Error('private');
    let file = path.resolve(root, '.' + pathname);
    if (!file.startsWith(root)) throw new Error('path');
    if ((await stat(file)).isDirectory()) {
      if (!pathname.endsWith('/')) { res.writeHead(301, { Location: pathname + '/' + url.search }); res.end(); return; }
      file = path.join(file, 'index.html');
    }
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream', 'Cache-Control':'no-store' });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch {
    res.writeHead(404, { 'Content-Type':'text/plain; charset=utf-8' }); res.end('Not found');
  }
});
server.listen(Number(process.env.SAVINGS_PORT || 6208), '127.0.0.1', () => console.log('Static candidate: http://127.0.0.1:6208/lineage/'));
