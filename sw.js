const C="discipline-v11",A=["./","index.html","manifest.json","icon.png","bg.jpg","rank-0.webp","rank-1.webp","rank-2.webp","rank-3.webp","rank-4.webp","rank-5.webp","rank-6.webp","rank-7.webp"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  e.respondWith(fetch(e.request).then(r=>{const x=r.clone();caches.open(C).then(c=>c.put(e.request,x));return r}).catch(()=>caches.match(e.request)));
});
