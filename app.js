(() => {
const S = window.SITE, L = S[document.documentElement.lang] || S.en, U = L.ui, C = S.contact;
const $ = (s, r=document) => r.querySelector(s), $$ = (s, r=document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? "").replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
$$("[data-c]").forEach(e => { if (!e.textContent) e.textContent = L[e.dataset.c]; });
$$("[data-cc]").forEach(e => { if (!e.textContent) e.textContent = C[e.dataset.cc]; });
$("#phLink").href = C.phoneHref; $("#emLink").href = "mailto:" + C.email;
const wa = "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(U.waText);
$("#fab").href = wa; $("#yr").textContent = new Date().getFullYear();
const B = Render.blocks(S, L);
["exp","hl","stats","quals","svc","steps","tst","faqs","hours","topic","svcPick","vids"].forEach(id => { const el = document.getElementById(id); if (el && !el.children.length) el.innerHTML = B[id]; });

// videos: lazy check + poster, "coming soon" if file missing
const vio = new IntersectionObserver(es => es.forEach(async e => { if (!e.isIntersecting) return; vio.unobserve(e.target); const box = e.target;
  let ok = false; try { const r = await fetch(box.dataset.src, {method:"HEAD"}); ok = r.ok && !(r.headers.get("content-type")||"").includes("html"); } catch(_) {}
  const img = new Image(); img.onload = () => box.style.backgroundImage = `url("${box.dataset.poster}")`; img.src = box.dataset.poster;
  if (!ok) { box.classList.add("soon"); box.innerHTML = `<span class="badge">${U.comingSoon}</span>`; return; }
  box.querySelector(".vplay").onclick = () => { box.innerHTML = `<video controls autoplay playsinline preload="metadata" poster="${box.dataset.poster}" src="${box.dataset.src}"></video>`; };
}), {rootMargin:"200px"});
$$(".vbox").forEach(v => vio.observe(v));
// nav
const nav = $("#nav"); addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 20), {passive:true});
$("#burger").onclick = e => { const o = nav.classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", o); };
$$("#menu a").forEach(a => a.onclick = () => nav.classList.remove("open"));
// reveal
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), {threshold:.12});
$$(".reveal").forEach(e => io.observe(e));

// booking via Cal.com (lazy: loads on click or when the section nears the viewport)
$$(".wa2").forEach(a => a.href = wa); $$(".call2").forEach(a => a.href = C.phoneHref);
const K = S.cal; let svc = "";
const pickSvc = v => { svc = v; $$("#svcPick .chip").forEach(c => c.setAttribute("aria-pressed", c.dataset.v === v)); };
const loadCal = () => { if (window.Cal) return;
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, K.origin + "/embed/embed.js", "init");
};
let n = 0;
const mount = box => { loadCal(); const ns = "c" + (++n), ev = box.dataset.ev;
  box.innerHTML = `<div class="calwrap" id="${ns}"><p class="muted calload">${U.calLoading}</p></div>`;
  Cal("init", ns, { origin: K.origin });
  const config = { layout: "month_view", theme: "light" };
  if (svc) config.notes = U.service + ": " + svc;
  Cal.ns[ns]("inline", { elementOrSelector: "#" + ns, calLink: K.events[ev] ? K.username + "/" + K.events[ev] : K.username, config });
  Cal.ns[ns]("ui", { theme: "light", cssVarsPerTheme: { light: { "cal-brand": K.brand }, dark: { "cal-brand": K.brand } }, hideEventTypeDetails: false, layout: "month_view" });
  box.dataset.on = 1;
};
$$("#svcPick .chip").forEach(c => c.onclick = () => { pickSvc(c.dataset.v); mount($("#calBook")); });
$$("[data-svc]").forEach(a => a.addEventListener("click", () => { pickSvc(a.dataset.svc); mount($("#calBook")); }));
{ const q = +new URLSearchParams(location.search).get("svc"); if (q && L.services[q-1]) pickSvc(L.services[q-1].t); }
$$(".calbox").forEach(b => { b.querySelector(".calbtn").onclick = () => mount(b); });
$$(".seg button").forEach(b => b.onclick = () => { const box = $("#calBook"); $$(".seg button").forEach(x => x.setAttribute("aria-pressed", x === b)); if (box.dataset.ev === b.dataset.ev && box.dataset.on) return; box.dataset.ev = b.dataset.ev; if (box.dataset.on) mount(box); });
const cio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && !e.target.dataset.on) { cio.unobserve(e.target); mount(e.target); } }), { rootMargin: "300px" });
$$(".calbox").forEach(b => cio.observe(b));
})();
