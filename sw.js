/* ATPL 過去問ドリル: オフライン用 Service Worker
   アプリの内容を更新したら VERSION を変えると、古いキャッシュが破棄されます。 */
const VERSION = 'v1';
const CACHE = 'atpl-drill-' + VERSION;
const FILES = ['./', 'index.html', 'data.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES.map((f) => new Request(f, {cache: 'reload'})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('atpl-drill-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// キャッシュを先に返し、通信できるときは裏で最新版に更新する（次回起動から反映）
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async (cache) => {
    const hit = await cache.match(req, {ignoreSearch: true});
    const net = fetch(req).then((res) => { if (res && res.ok) cache.put(req, res.clone()); return res; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    const res = await net;
    return res || (req.mode === 'navigate' ? cache.match('index.html') : Response.error());
  }));
});
