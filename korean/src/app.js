// ---------- yordamchilar ----------
const $ = (s, e) => (e || document).querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const dayNum = () => { const d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 864e5); };
const PASS = 0.8;
const GAPS = [1, 2, 4, 8, 16, 32, 64];
const SPK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg>';

// ---------- o'zbekcha transkripsiya ----------
const CH = ["g", "kk", "n", "d", "tt", "r", "m", "b", "pp", "s", "ss", "", "j", "jj", "ch", "kh", "th", "ph", "h"];
const JU = ["a", "e", "ya", "ye", "o", "e", "yo", "ye", "o'", "wa", "we", "we", "yo'", "u", "wo", "we", "wi", "yu", "ɨ", "ɨy", "i"];
const JE = ["", "k", "k", "k", "n", "n", "n", "t", "l", "k", "m", "l", "l", "l", "p", "l", "m", "p", "p", "t", "t", "ng", "t", "t", "k", "t", "p", "t"];
const LINK = ["", "g", "kk", "ks", "n", "nj", "n", "d", "r", "lg", "lm", "lb", "ls", "lth", "lph", "r", "m", "b", "ps", "s", "ss", "ng", "j", "ch", "kh", "th", "ph", ""];
const syl = c => { const i = c.charCodeAt(0) - 0xAC00; return i >= 0 && i < 11172 ? [i / 588 | 0, (i % 588) / 28 | 0, i % 28] : null; };
function tr(str) {
  let out = "", carry = "", prevFinal = 0;
  for (let n = 0; n < str.length; n++) {
    const s = syl(str[n]);
    if (!s) { out += str[n]; carry = ""; prevFinal = 0; continue; }
    const nx = n + 1 < str.length ? syl(str[n + 1]) : null;
    let on = CH[s[0]];
    if (s[0] === 9 && [2, 6, 12, 17, 20].includes(s[1])) on = "sh";
    if (s[0] === 5 && prevFinal === 8) on = "l";
    if (carry) { on = s[1] === 20 && carry === "th" ? "ch" : s[1] === 20 && carry === "d" ? "j" : carry; carry = ""; }
    let fin = JE[s[2]];
    if (s[2] && nx && nx[0] === 11 && s[2] !== 21) { carry = LINK[s[2]]; fin = ""; if (carry.length > 1 && carry[0] === "l") { fin = "l"; carry = carry.slice(1); } if (carry === "ks" || carry === "ps" || carry === "nj") { fin = carry[0]; carry = carry.slice(1); } }
    else if (nx && (nx[0] === 2 || nx[0] === 6)) fin = fin === "k" ? "ng" : fin === "t" ? "n" : fin === "p" ? "m" : fin;
    if (out && syl(str[n - 1])) out += "-";
    out += on + JU[s[1]] + fin;
    prevFinal = s[2];
  }
  return out;
}

// ---------- kurs indeksi ----------
const ALL = [];
STAGES.forEach(st => st.lessons.forEach((L, i) => { L.stage = st; L.code = st.line * 100 + i + 1; L.idx = ALL.length; ALL.push(L); }));
const vocabOf = L => L.type === "hangul" ? L.words.map(w => ({ k: w[0], uz: w[1] })) : (L.v || []).map(w => ({ k: w[0], uz: w[1], n: w[2] }));
const poolUpTo = idx => { const seen = {}, p = []; for (let i = 0; i <= idx; i++) vocabOf(ALL[i]).forEach(w => { if (!seen[w.k]) { seen[w.k] = 1; p.push(w); } }); return p; };
const TOTAL_WORDS = poolUpTo(ALL.length - 1).length;
const UZ = {}; poolUpTo(ALL.length - 1).forEach(w => UZ[w.k] = w.uz);

// ---------- holat va saqlash ----------
const KEY = "topik-yoli-v1";
const fresh = () => ({ v: 1, done: {}, srs: {}, streak: { n: 0, last: 0 }, best: 0, day: { d: 0, rev: 0, les: 0, boost: 0 }, set: { tr: true, snd: true }, updatedAt: 0 });
const norm = o => { const f = fresh(); o = o && typeof o === "object" ? o : {}; return Object.assign(f, o, { streak: Object.assign(f.streak, o.streak), day: Object.assign(f.day, o.day), set: Object.assign(f.set, o.set), done: o.done || {}, srs: o.srs || {} }); };
let S = fresh();
try { S = norm(JSON.parse(localStorage.getItem(KEY))); } catch (e) {}
let cloudDoc = null, cloudBusy = false, cloudDirty = false, syncState = "local";
function save() {
  S.updatedAt = Date.now();
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
  cloudPush();
}
async function cloudPush() {
  if (!cloudDoc) return;
  if (cloudBusy) { cloudDirty = true; return; }
  cloudBusy = true;
  try { await cloudDoc.set({ json: JSON.stringify(S), updatedAt: S.updatedAt }); syncState = "cloud"; } catch (e) { syncState = "local"; }
  cloudBusy = false;
  if (cloudDirty) { cloudDirty = false; cloudPush(); }
  const el = $("#sync"); if (el) el.textContent = syncLabel();
}
const syncLabel = () => syncState === "cloud" ? "Hisobingizga saqlanmoqda" : "Shu qurilmada saqlanmoqda";
let ttsCap = null;
(async () => {
  const c = window.claude;
  if (!c || !c.use) return;
  c.use("tts").then(t => { ttsCap = t; }).catch(() => {});
  try {
    const [db, user] = await Promise.all([c.use("db"), c.use("user")]);
    if (!db || !user) return;
    const id = await user.id();
    if (!id) return;
    const doc = db.collection("data/users/" + id).doc("progress");
    const snap = await doc.get();
    let remoteAt = 0;
    if (snap.exists) {
      const d = snap.data();
      remoteAt = d.updatedAt || 0;
      if (remoteAt > (S.updatedAt || 0)) {
        S = norm(JSON.parse(d.json));
        try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
      }
    }
    cloudDoc = doc; syncState = "cloud";
    if ((S.updatedAt || 0) > remoteAt) cloudPush();
    if (!cur) render();
  } catch (e) {}
})();

// ---------- ovoz ----------
let koVoice = null;
const hasSynth = "speechSynthesis" in window;
function pickVoice() { try { koVoice = speechSynthesis.getVoices().find(v => /^ko/i.test(v.lang)) || null; } catch (e) {} }
if (hasSynth) { pickVoice(); try { speechSynthesis.addEventListener("voiceschanged", pickVoice); } catch (e) {} }
const audioOK = () => !!(koVoice || ttsCap);
function say(text, force) {
  if (!force && !S.set.snd) return;
  text = String(text).replace(/_+/g, " ").replace(/[〈〉()]/g, " ");
  try {
    if (koVoice || (!ttsCap && hasSynth)) {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "ko-KR"; if (koVoice) u.voice = koVoice; u.rate = 0.85;
      speechSynthesis.speak(u);
    } else if (ttsCap) ttsCap.speak(text, { language: "ko" }).catch(() => {});
  } catch (e) {}
}

// ---------- taraqqiyot ----------
const isDone = L => !!S.done[L.id];
const nextIdx = () => { const i = ALL.findIndex(L => !isDone(L)); return i; };
const unlocked = L => L.type === "test" || L.idx === 0 || isDone(ALL[L.idx - 1]);
const learned = () => Object.keys(S.srs).length;
const dueCards = () => { const t = dayNum(); return Object.keys(S.srs).filter(k => S.srs[k].d <= t && UZ[k]); };
function touchDay() {
  const t = dayNum();
  if (S.day.d !== t) S.day = { d: t, rev: 0, les: 0, boost: 0 };
  if (S.streak.last !== t) { S.streak.n = S.streak.last === t - 1 ? S.streak.n + 1 : 1; S.streak.last = t; }
}
const streakNow = () => S.streak.last >= dayNum() - 1 ? S.streak.n : 0;
function addWords(L) { const t = dayNum(); vocabOf(L).forEach(w => { if (!S.srs[w.k]) S.srs[w.k] = { b: 0, d: t + 1 }; }); }
function complete(L, score) {
  touchDay();
  const prev = S.done[L.id];
  S.done[L.id] = { s: Math.max(score, prev ? prev.s : 0), d: dayNum() };
  addWords(L);
  if (L.type === "test") for (let i = 0; i < L.idx; i++) if (!isDone(ALL[i])) { S.done[ALL[i].id] = { s: 0, d: dayNum(), skip: 1 }; addWords(ALL[i]); }
  S.day.les++;
  save();
}

// ---------- savol generatori ----------
function pickDistr(own, pool, item, key, n) {
  const out = [], seen = {}; seen[item[key]] = 1;
  shuffle(own).concat(shuffle(pool)).forEach(x => { if (out.length < n && !seen[x[key]] && x.k !== item.k && x.uz !== item.uz && (!item.s || x.s !== item.s)) { seen[x[key]] = 1; out.push(x[key]); } });
  return out;
}
const mk = (o, right, wrong) => { const opts = shuffle([right].concat(wrong)); return Object.assign(o, { type: "mc", opts, a: opts.indexOf(right) }); };
const qKoUz = (w, own, pool) => mk({ label: "Ma'nosini tanlang", big: w.k, say: w.k }, w.uz, pickDistr(own, pool, w, "uz", 3));
const qUzKo = (w, own, pool) => mk({ label: "Koreyschasini tanlang", prompt: esc(w.uz), kopts: 1, after: w.k }, w.k, pickDistr(own, pool, w, "k", 3));
const qListen = (w, own, pool) => mk({ label: "Tinglang va ma'nosini tanlang", audio: w.k, hideAudioText: 1, fbKo: w.k }, w.uz, pickDistr(own, pool, w, "uz", 3));
function buildQs(L) {
  const pool = poolUpTo(L.idx), own = vocabOf(L), V = shuffle(own), qs = [];
  if (L.type === "test") return shuffle(L.qs).map(q => { const right = q.opts[q.a]; return mk({ label: esc(q.q), text: q.text, audio: q.audio, exp: q.exp, kopts: /[가-힣]/.test(q.opts[0]) }, right, q.opts.filter((_, i) => i !== q.a)); });
  if (L.type === "hangul") {
    const lets = L.letters.map(l => ({ k: l[0], s: l[1] }));
    let lp = []; for (let i = 0; i <= L.idx; i++) if (ALL[i].type === "hangul") lp = lp.concat(ALL[i].letters.map(l => ({ k: l[0], s: l[1] })));
    const dist = (it, key) => { const o = [], seen = {}; seen[it[key]] = 1; shuffle(lets).concat(shuffle(lp)).forEach(x => { if (o.length < 3 && !seen[x[key]] && x.s !== it.s) { seen[x[key]] = 1; o.push(x[key]); } }); return o; };
    lets.forEach(l => qs.push(mk({ label: "Qanday o'qiladi?", big: l.k, say: l.k }, l.s, dist(l, "s"))));
    shuffle(lets).slice(0, 5).forEach(l => qs.push(mk({ label: "Harfni toping", prompt: "«" + esc(l.s) + "» deb o'qiladigan bo'g'in", kopts: 1, after: l.k }, l.k, dist(l, "k"))));
    if (audioOK()) shuffle(lets).slice(0, 4).forEach(l => qs.push(mk({ label: "Tinglang va bo'g'inni tanlang", audio: l.k, hideAudioText: 1, kopts: 1 }, l.k, dist(l, "k"))));
    V.slice(0, 4).forEach(w => { const d = shuffle(own.filter(x => x.k !== w.k && x.k.length === w.k.length)).concat(shuffle(own.filter(x => x.k !== w.k))).map(x => tr(x.k)).filter((x, i, a) => x !== tr(w.k) && a.indexOf(x) === i).slice(0, 3); if (d.length === 3) qs.push(mk({ label: "So'zni o'qing", big: w.k, say: w.k, sub: esc(w.uz) }, tr(w.k), d)); });
    V.slice(4, 8).forEach(w => qs.push(qKoUz(w, own, pool)));
    return shuffle(qs);
  }
  V.slice(0, 6).forEach(w => qs.push(qKoUz(w, own, pool)));
  V.slice(6).concat(V).slice(0, 5).forEach(w => qs.push(qUzKo(w, own, pool)));
  if (audioOK()) V.slice(-3).forEach(w => qs.push(qListen(w, own, pool)));
  (L.c || []).forEach(c => qs.push(mk({ label: "Bo'sh joyni to'ldiring", prompt: esc(c[0]).replace("___", '<span class="blank">?</span>'), pko: 1, sub: esc(c[3]), kopts: 1, after: /→|=|↔/.test(c[0]) ? c[1] : c[0].replace("___", c[1]) }, c[1], c[2])));
  const sents = []; (L.g || []).forEach(g => g.ex.forEach(e => { const n = e[0].split(" ").length; if (n >= 3 && n <= 6) sents.push(e); }));
  shuffle(sents).slice(0, 3).forEach(e => qs.push({ type: "build", label: "Gapni tuzing", prompt: esc(e[1]), answer: e[0], tokens: shuffle(e[0].split(" ")) }));
  return shuffle(qs);
}

// ---------- dars slaydlari ----------
const wordCard = w => `<button class="word" data-act="say" data-t="${esc(w.k)}"><span class="l"><span class="ko">${esc(w.k)}</span>${S.set.tr ? `<span class="tr">${esc(tr(w.k))}</span>` : ""}<span class="uz">${esc(w.uz)}</span>${w.n ? `<span class="note">${esc(w.n)}</span>` : ""}</span><span class="spk">${SPK}</span></button>`;
function buildSlides(L) {
  const sl = [], own = vocabOf(L);
  let head = `<div class="eyebrow">${L.stage.line}-liniya · ${L.code}-bekat</div><h1 class="slide-k ko">${esc(L.k)}</h1><h2 class="slide-h">${esc(L.t)}</h2><p>${esc(L.goal)}</p>`;
  if (L.tip) head += `<div class="tip"><b>Sizga mos yo'l</b>${esc(L.tip)}</div>`;
  if (L.type === "test") { sl.push(head + `<div class="tip"><b>Qoidalar</b>${L.qs.length} ta savol. Xato javoblar qayta so'ralmaydi — xuddi imtihondagidek. O'tish bali: ${PASS * 100}%.${audioOK() ? "" : " Bu qurilmada koreyscha ovoz topilmadi, shuning uchun tinglash savollari matn ko'rinishida beriladi."}</div>`); return sl; }
  head += `<p class="muted small">${L.type === "hangul" ? L.letters.length + " ta belgi · " : ""}${own.length} ta so'z${L.g ? " · " + L.g.length + " ta grammatik qolip" : ""} · taxminan ${L.type === "hangul" ? 15 : 22} daqiqa</p>`;
  sl.push(head);
  if (L.intro) sl.push(`<div class="eyebrow">Qoida</div><div class="prose">${L.intro}</div>`);
  if (L.type === "hangul") {
    for (let i = 0; i < L.letters.length; i += 3) sl.push(`<div class="eyebrow">Belgilar · bosib tinglang</div><div class="letters">${L.letters.slice(i, i + 3).map(l => `<button class="letter" data-act="say" data-t="${esc(l[0])}"><span class="ko">${esc(l[0])}</span><span class="snd">${esc(l[1])}</span><span class="note">${esc(l[2])}</span></button>`).join("")}</div>`);
  }
  for (let i = 0; i < own.length; i += 4) sl.push(`<div class="eyebrow">${L.type === "hangul" ? "O'qib ko'ring" : "So'zlar"} · ${Math.min(i + 4, own.length)} / ${own.length}</div><div class="words">${own.slice(i, i + 4).map(wordCard).join("")}</div>`);
  (L.g || []).forEach(g => sl.push(`<div class="eyebrow">Grammatika</div><div class="pat">${esc(g.p)}</div><div class="eq">≈ ${esc(g.uz)}</div><p>${esc(g.d)}</p><ul class="ex">${g.ex.map(e => `<li><button data-act="say" data-t="${esc(e[0])}"><span><span class="ko">${esc(e[0])}</span><br>${S.set.tr ? `<span class="tr">${esc(tr(e[0]))}</span><br>` : ""}<span class="uz">${esc(e[1])}</span></span><span class="spk">${SPK}</span></button></li>`).join("")}</ul>`));
  return sl;
}

// ---------- ko'rinishlar ----------
let tab = "home", cur = null;
const main = $("#main"), player = $("#player"), nav = $("#nav");
function render() {
  const inP = !!cur;
  main.hidden = inP; nav.hidden = inP; player.hidden = !inP;
  if (inP) return renderPlayer();
  nav.querySelectorAll("button").forEach(b => b.dataset.tab === tab ? b.setAttribute("aria-current", "page") : b.removeAttribute("aria-current"));
  const due = dueCards().length, pip = $("#pip"); pip.hidden = !due; pip.textContent = due;
  main.innerHTML = ({ home: viewHome, review: viewReview, boost: viewBoost, topik: viewTopik })[tab]();
}
const header = () => `<header class="top"><div class="brand"><span class="sign">길</span><b>TOPIK Yo'li</b></div><div class="sync" id="sync">${syncLabel()}</div></header>`;

function viewHome() {
  const ni = nextIdx(), N = ni < 0 ? null : ALL[ni], due = dueCards().length, t = dayNum(), today = S.day.d === t ? S.day : { rev: 0, les: 0, boost: 0 };
  const doneN = ALL.filter(isDone).length, lw = learned();
  let h = header();
  h += `<div class="stats"><div class="stat"><b>${streakNow()}</b><span>kun ketma-ket</span></div><div class="stat"><b>${lw}</b><span>so'z o'rganildi</span></div><div class="stat"><b>${doneN}<small class="muted" style="font-size:14px"> / ${ALL.length}</small></b><span>bekat o'tildi</span></div></div>`;
  h += `<section class="plan"><div><div class="eyebrow">Bugungi reja · 20–30 daqiqa</div><h2>${N ? esc(N.t) : "Birinchi bosqich tugadi"}</h2></div><div class="steps">`;
  h += `<button class="step ${today.rev || (!due && lw) ? "done" : ""}" data-act="tab" data-tab="review" ${lw ? "" : "disabled"}><span class="n">1</span><span class="tx"><b>Takrorlash</b><span>${lw ? (due ? due + " ta so'z kutmoqda · ~5 daqiqa" : "Bugunga so'z qolmadi") : "Birinchi darsdan keyin ochiladi"}</span></span>${due ? '<span class="go">Boshlash</span>' : ""}</button>`;
  h += `<button class="step ${today.les ? "done" : ""}" data-act="open" data-i="${ni}" ${N ? "" : "disabled"}><span class="n">2</span><span class="tx"><b>${today.les ? "Yana bir bekat" : "Yangi bekat"}</b><span>${N ? N.code + " · " + esc(N.t) + " · ~" + (N.type === "test" ? 10 : N.type === "hangul" ? 15 : 22) + " daqiqa" : "Barcha bekatlar o'tildi"}</span></span>${N ? '<span class="go">Boshlash</span>' : ""}</button>`;
  h += `<button class="step ${today.boost ? "done" : ""}" data-act="tab" data-tab="boost" ${lw >= 4 ? "" : "disabled"}><span class="n">3</span><span class="tx"><b>Boost — 60 soniya</b><span>${lw >= 4 ? "Tezlik uchun · rekord " + S.best : "Kamida 4 ta so'zdan keyin ochiladi"}</span></span></button>`;
  h += `</div></section>`;
  STAGES.forEach(st => {
    const d = st.lessons.filter(isDone).length;
    h += `<section class="stage" style="--c:${st.color}"><div class="stage-h"><span class="badge">${st.line}</span><div><h3>${esc(st.name)}</h3><span class="ko muted small">${esc(st.ko)} · ${st.line}호선</span></div><span class="cnt">${d} / ${st.lessons.length}</span></div><ol class="stations">`;
    st.lessons.forEach(L => {
      const dn = isDone(L), open = unlocked(L), now = L.idx === ni, x = L.type === "test";
      const tag = dn ? (S.done[L.id].skip ? "o'tkazildi" : Math.round(S.done[L.id].s * 100) + "%") : x ? "test" : open ? "ochiq" : "yopiq";
      h += `<li><button class="st ${dn ? "done" : ""} ${now ? "now" : ""} ${x ? "xfer" : ""} ${open ? "" : "locked"}" data-act="open" data-i="${L.idx}" ${open ? "" : "disabled"}><span class="dot"><i></i></span><span class="nm"><span class="code">${L.code}</span><b>${esc(L.t)}</b><span class="k">${esc(L.k)}${x && !dn && !now ? " · bilsangiz, shu testdan o'tib oldinga sakrang" : ""}</span></span><span class="tag">${tag}</span></button></li>`;
    });
    h += `</ol></section>`;
  });
  return h;
}

// ---- takrorlash ----
let R = null;
function viewReview() {
  const due = dueCards();
  if (!R) {
    return header() + `<section class="plan"><div><div class="eyebrow">Interval takrorlash</div><h2>${due.length ? due.length + " ta so'z bugun kutmoqda" : "Bugunga so'z qolmadi"}</h2></div><p class="muted">Har bir so'z unutilish arafasida qaytadi: 1 → 2 → 4 → 8 → 16 → 32 → 64 kun. Bilgan so'zingiz uzoqroqqa ketadi, bilmaganingiz ertaga qaytadi.</p><button class="btn primary block" data-act="rev-start" ${due.length ? "" : "disabled"}>Takrorlashni boshlash</button><p class="small muted">Jami o'rganilgan: ${learned()} ta so'z. ${learned() ? "" : "Birinchi bekatdan o'ting — so'zlar shu yerga tushadi."}</p></section>`;
  }
  if (!R.q.length) {
    return header() + `<section class="plan res"><div class="hero-k">잘했어요!</div><h2>${R.n} ta so'z takrorlandi</h2><p class="muted">Shundan ${R.ok} tasini bildingiz.</p><button class="btn primary block" data-act="rev-end">Yo'lga qaytish</button></section>`;
  }
  const k = R.q[0];
  return header() + `<div class="row"><span class="eyebrow">Takrorlash</span><span class="muted small">${R.q.length} ta qoldi</span></div><div class="card"><div class="ko">${esc(k)}</div>${S.set.tr && R.open ? `<div class="tr" style="color:var(--accent)">${esc(tr(k))}</div>` : ""}${R.open ? `<div class="uz">${esc(UZ[k])}</div>` : `<p class="muted">Ma'nosini eslang, keyin tekshiring</p>`}<button class="spk" data-act="say" data-t="${esc(k)}" aria-label="Tinglash">${SPK}</button></div>` +
    (R.open ? `<div class="opts two"><button class="btn danger" data-act="rev-no">Bilmadim</button><button class="btn primary" data-act="rev-yes">Bildim</button></div>` : `<button class="btn primary block" data-act="rev-show">Javobni ko'rsatish</button>`);
}

// ---- boost ----
let B = null;
function boostQ() {
  const ks = Object.keys(S.srs).filter(k => UZ[k]), k = ks[Math.random() * ks.length | 0], w = { k, uz: UZ[k] }, pool = ks.map(x => ({ k: x, uz: UZ[x] }));
  return Math.random() < 0.6 ? qKoUz(w, [], pool) : qUzKo(w, [], pool);
}
function viewBoost() {
  const lw = learned();
  if (!B) return header() + `<section class="plan"><div><div class="eyebrow">Boost rejimi</div><h2>60 soniya. Nechta so'z?</h2></div><p class="muted">TOPIK — vaqtga qarshi imtihon: o'qish bo'limida bir savolga o'rtacha 90 soniya. Bu yerda so'zni o'ylamasdan tanishni mashq qilasiz. Ketma-ket to'g'ri javoblar ballni ko'paytiradi.</p><div class="hud"><div><b>${S.best}</b><span>rekord</span></div><div><b>${lw}</b><span>so'z bazada</span></div><div><b>60</b><span>soniya</span></div></div><button class="btn primary block" data-act="boost-start" ${lw >= 4 ? "" : "disabled"}>${lw >= 4 ? "Boshlash" : "Avval birinchi bekatdan o'ting"}</button></section>`;
  if (B.over) return header() + `<section class="plan res"><div class="ring pass">${B.score}</div><h2>${B.score >= S.best && B.score ? "Yangi rekord!" : "Vaqt tugadi"}</h2><p class="muted">${B.ok} / ${B.n} to'g'ri · eng uzun seriya ${B.maxc}</p>${B.miss.length ? `<ul class="miss">${B.miss.map(k => `<li><b class="ko">${esc(k)}</b> — ${esc(UZ[k])}</li>`).join("")}</ul><p class="small muted">Xato qilingan so'zlar bugungi takrorlashga qaytarildi.</p>` : ""}<button class="btn primary block" data-act="boost-start">Yana bir marta</button><button class="btn ghost block" data-act="boost-end">Yo'lga qaytish</button></section>`;
  const q = B.q;
  return `<div class="hud"><div><b id="bt">${B.t}</b><span>soniya</span></div><div><b>${B.score}</b><span>ball</span></div><div><b>×${Math.min(5, 1 + (B.combo / 3 | 0))}</b><span>seriya ${B.combo}</span></div></div>` + qBody(q, B.picked) + `<button class="btn ghost block" data-act="boost-stop">To'xtatish</button>`;
}

// ---- TOPIK sahifasi ----
function viewTopik() {
  const lw = learned();
  let h = header();
  h += `<section class="panel"><div class="eyebrow">Maqsad</div><h2>TOPIK darajalari va o'tish ballari</h2><div class="tblwrap"><table><thead><tr><th>Imtihon</th><th>Bo'limlar</th><th>Vaqt</th><th>Daraja → ball</th></tr></thead><tbody><tr><td><b>TOPIK I</b><br>200 ball</td><td>듣기 30 savol<br>읽기 40 savol</td><td>40 daq<br>60 daq</td><td>1급 → 80<br>2급 → 140</td></tr><tr><td><b>TOPIK II</b><br>300 ball</td><td>듣기 50 savol<br>쓰기 4 topshiriq<br>읽기 50 savol</td><td>60 daq<br>50 daq<br>70 daq</td><td>3급 → 120 · 4급 → 150<br>5급 → 190 · 6급 → 230</td></tr></tbody></table></div><p class="small muted">Koreyada o'qish va ishlash uchun odatda 3–4-daraja, ko'p universitet va kompaniyalarda 4–5-daraja so'raladi. Imtihon sanalari va aniq talablarni topik.go.kr hamda viza yoki universitet shartlaridan tekshiring.</p></section>`;
  h += `<section class="panel"><div class="eyebrow">So'z boyligi</div><h2>${lw} / 800 so'z — TOPIK 1급 uchun taxminiy me'yor</h2><div class="meter"><i style="width:${Math.min(100, lw / 8)}%"></i></div><p class="small muted">2급 uchun taxminan 1 500–2 000, 3–4급 uchun 3 000–5 000 so'z kerak. Bu platformadagi birinchi bosqich ${TOTAL_WORDS} ta eng ko'p uchraydigan so'z va 40 ga yaqin grammatik qolipni beradi.</p></section>`;
  h += `<section class="panel"><div class="eyebrow">Yo'l xaritasi</div><h2>Noldan TOPIKgacha</h2><ol class="road">`;
  STAGES.forEach(st => h += `<li><span class="badge" style="--c:${st.color}">${st.line}</span><div><b>${esc(st.name)} <span class="chip on">tayyor</span></b><span class="small muted">${st.lessons.length - 1} dars + nazorat · ${st.id === "h" ? "1 hafta" : "1–1,5 hafta"}</span></div></li>`);
  h += `<li><span class="badge" style="--c:var(--muted)">6</span><div><b>TOPIK I to'liq (2급) <span class="chip">hali qo'shilmagan</span></b><span class="small muted">Yana ~1 200 so'z, 60 qolip, to'liq sinov testlari · 3–4 oy</span></div></li><li><span class="badge" style="--c:var(--muted)">7</span><div><b>TOPIK II (3–4급) <span class="chip">hali qo'shilmagan</span></b><span class="small muted">쓰기 (yozish) bo'limi, o'rta daraja grammatikasi · 6–9 oy</span></div></li></ol><p class="small muted">Kuniga bitta bekat bilan tayyor qismi taxminan 5–6 haftaga yetadi. Keyingi bosqichlar shu formatda davom ettiriladi.</p></section>`;
  h += `<section class="panel"><div class="eyebrow">Metodika</div><h2>Nega aynan shunday tuzilgan</h2><div class="prose"><ul><li><b>O'zbek tili — ustunligingiz.</b> Gap tartibi va qo'shimchalar deyarli bir xil: 는 ≈ esa, 를 ≈ -ni, 에 ≈ -ga/-da, 의 ≈ -ning, -고 싶다 ≈ -moqchi. Shuning uchun har bir qolip inglizcha emas, o'zbekcha muqobili bilan beriladi.</li><li><b>Koreyadagi xotirangiz.</b> So'zlar siz ko'rgan muhitdan boshlanadi: 편의점, 지하철, 화장실, kafe buyurtmasi. Tanish narsa tezroq yodda qoladi.</li><li><b>80% — keyingi bekat.</b> Har dars oxirida mashq; xato savol to'g'ri javob berilguncha qaytadi. O'zlashtirilmagan mavzu ustiga yangisi qurilmaydi.</li><li><b>Interval takrorlash.</b> So'z 1, 2, 4, 8… kundan keyin qaytadi — eng kam vaqt bilan uzoq muddatli xotira.</li><li><b>TOPIK formati birinchi haftadan.</b> Har liniya oxiridagi nazorat haqiqiy savol turlarida: mavzuni topish (31–33), bo'sh joy (34–39), e'lon (40–42), mazmunga moslik (43–45), tinglashda javob tanlash (1–6) va joyni aniqlash (7–10).</li><li><b>Tanish → eslash → tuzish.</b> Avval tinglab tanlaysiz, keyin o'zbekchadan koreyschaga o'tasiz, oxirida gapni o'zingiz yig'asiz.</li></ul></div><p class="small muted">Savollar TOPIK formatida maxsus tuzilgan, rasmiy imtihon materiallaridan ko'chirilmagan. Imtihon oldidan topik.go.kr dagi ochiq o'tgan yillar variantlarini ham ishlang.</p></section>`;
  h += `<section class="panel"><div class="eyebrow">Sozlamalar</div><div class="row"><div><b>Lotincha o'qilishi</b><div class="small muted">Hangulni ravon o'qiy boshlagach o'chiring</div></div><button class="switch" role="switch" aria-checked="${S.set.tr}" aria-label="Lotincha o'qilishi" data-act="set" data-k="tr"></button></div><div class="row"><div><b>Avtomatik ovoz</b><div class="small muted">${audioOK() ? "So'zlar ko'rsatilganda o'qib beriladi" : "Bu qurilmada koreyscha ovoz topilmadi — boshqa brauzerda sinab ko'ring"}</div></div><button class="switch" role="switch" aria-checked="${S.set.snd}" aria-label="Avtomatik ovoz" data-act="set" data-k="snd"></button></div><div class="row"><div><b>Natijalarni o'chirish</b><div class="small muted">Barcha taraqqiyot noldan boshlanadi</div></div><button class="btn danger" data-act="reset">${resetArm ? "Ha, o'chirilsin" : "O'chirish"}</button></div></section>`;
  return h;
}
let resetArm = false;

// ---------- savol ko'rinishi ----------
function qBody(q, picked) {
  let h = `<div class="qlabel">${q.label}</div>`;
  if (q.text) h += `<div class="passage ko">${esc(q.text)}</div>`;
  if (q.audio) h += audioOK() ? `<button class="listen" data-act="say" data-t="${esc(q.audio)}" aria-label="Tinglash">${SPK}</button>` : `<div class="passage ko">${esc(q.audio)}</div>`;
  if (q.big) h += `<div class="qbig ko">${esc(q.big)}</div>`;
  if (q.prompt) h += `<div class="qprompt ${q.pko ? "ko" : ""}">${q.prompt}</div>`;
  if (q.sub) h += `<div class="qsub">${q.sub}</div>`;
  if (q.type === "build") {
    h += `<div class="line-a">${q.sel.map((ti, j) => `<button class="tile" data-act="untile" data-j="${j}" ${picked != null ? "disabled" : ""}>${esc(q.tokens[ti])}</button>`).join("")}</div><div class="tiles">${q.tokens.map((t, i) => `<button class="tile ${q.sel.includes(i) ? "used" : ""}" data-act="tile" data-i="${i}" ${picked != null ? "disabled" : ""}>${esc(t)}</button>`).join("")}</div>`;
    return h;
  }
  const two = q.opts.every(o => o.length <= 9);
  h += `<div class="opts ${two ? "two" : ""} ${q.kopts ? "kopts" : ""}">${q.opts.map((o, i) => `<button class="opt ${picked != null ? (i === q.a ? "ok" : i === picked ? "no" : "") : ""}" data-act="opt" data-i="${i}" ${picked != null ? "disabled" : ""}><kbd>${i + 1}</kbd><span>${esc(o)}</span></button>`).join("")}</div>`;
  return h;
}

// ---------- pleyer ----------
function openLesson(i) {
  const L = ALL[i]; if (!L || !unlocked(L)) return;
  cur = { L, phase: "intro", slides: buildSlides(L), si: 0, qs: [], qi: 0, total: 0, ok: 0, picked: null, miss: [] };
  render(); window.scrollTo(0, 0);
}
function startQuiz() {
  const P = cur; P.phase = "quiz"; P.qs = buildQs(P.L); P.total = P.qs.length; P.qi = 0; P.ok = 0; P.miss = []; P.picked = null;
  P.qs.forEach(q => { if (q.type === "build") q.sel = []; });
  render(); announce();
}
function announce() { const q = cur && cur.qs[cur.qi]; if (!q) return; if (q.audio && audioOK()) say(q.audio, true); else if (q.say) say(q.say); }
function renderPlayer() {
  const P = cur, L = P.L;
  let body = "", foot = "", frac = 0, ct = "";
  if (P.phase === "intro") {
    body = P.slides[P.si]; frac = (P.si + 1) / (P.slides.length + 1) * 0.4; ct = (P.si + 1) + " / " + P.slides.length;
    const last = P.si === P.slides.length - 1;
    foot = `<button class="btn ghost" data-act="prev" ${P.si ? "" : "disabled"}>Orqaga</button><button class="btn primary" data-act="fwd">${last ? (L.type === "test" ? "Testni boshlash" : "Mashqni boshlash") : "Davom etish"}</button>`;
    if (P.si === 0 && !last && isDone(L)) foot = `<button class="btn ghost" data-act="skip-intro">Mashqqa o'tish</button>` + foot.replace(/^<button class="btn ghost".*?<\/button>/, "");
  } else if (P.phase === "quiz") {
    const q = P.qs[P.qi]; frac = 0.4 + 0.6 * Math.min(1, P.qi / P.qs.length); ct = Math.min(P.qi + 1, P.qs.length) + " / " + P.qs.length;
    body = qBody(q, P.picked);
    if (P.picked != null) {
      const good = P.wasRight, right = q.type === "build" ? q.answer : q.opts[q.a];
      body += `<div class="fb ${good ? "ok" : "no"}" role="status">${good ? "To'g'ri!" : "To'g'ri javob: <b class='ko'>" + esc(right) + "</b>"}${q.fbKo ? `<span class="ko">${esc(q.fbKo)}${S.set.tr ? " · " + esc(tr(q.fbKo)) : ""}</span>` : ""}${q.exp ? `<span>${esc(q.exp)}</span>` : ""}${!good && L.type !== "test" ? "<span>Bu savol oxirida yana qaytadi.</span>" : ""}</div>`;
      foot = `<button class="btn primary" data-act="next">Davom etish</button>`;
    } else if (q.type === "build") foot = `<button class="btn primary" data-act="check" ${q.sel.length === q.tokens.length ? "" : "disabled"}>Tekshirish</button>`;
  } else {
    const sc = P.total ? P.ok / P.total : 0, pass = sc >= PASS, nx = ALL[L.idx + 1];
    frac = 1;
    body = `<div class="res"><div class="ring ${pass ? "pass" : "fail"}">${Math.round(sc * 100)}%</div><h2 class="slide-h">${pass ? (nx ? "Keyingi bekat ochildi" : "Birinchi bosqich tugadi!") : "Yana bir urinish kerak"}</h2><p class="muted">${P.ok} / ${P.total} birinchi urinishda to'g'ri. O'tish bali: ${PASS * 100}%.</p>${pass ? `<p>${vocabOf(L).length ? vocabOf(L).length + " ta so'z takrorlash jadvaliga qo'shildi — ertaga birinchi marta qaytadi." : ""}${L.type === "test" ? " Oldingi barcha bekatlar o'tilgan deb belgilandi." : ""}</p>` : `<p>Xato qilgan joylaringizni ko'rib chiqing va mashqni qayta ishlang. Shoshilmang — poydevor mustahkam bo'lsa, keyingi bekatlar tez o'tadi.</p>`}${P.miss.length ? `<ul class="miss">${P.miss.map(m => `<li><b class="ko">${esc(m.a)}</b>${m.p ? `<div class="small muted">${m.p}</div>` : ""}${m.exp ? `<div class="small">${esc(m.exp)}</div>` : ""}</li>`).join("")}</ul>` : ""}</div>`;
    foot = pass ? (nx ? `<button class="btn ghost" data-act="close">Xarita</button><button class="btn primary" data-act="open" data-i="${nx.idx}">Keyingi: ${esc(nx.t)}</button>` : `<button class="btn primary" data-act="close">Yo'lga qaytish</button>`) : `<button class="btn ghost" data-act="again-intro">Darsni qayta ko'rish</button><button class="btn primary" data-act="again">Qayta urinish</button>`;
  }
  player.style.setProperty("--c", L.stage.color);
  player.innerHTML = `<div class="pbar"><button class="x" data-act="close" aria-label="Yopish">✕</button><div class="track"><i style="width:${Math.round(frac * 100)}%"></i></div><span class="ct">${ct}</span></div><div class="pbody">${body}</div><div class="pfoot">${foot}</div>`;
}
function answer(right) {
  const P = cur, q = P.qs[P.qi];
  P.wasRight = right;
  if (right && !q.retry) P.ok++;
  if (!right) {
    if (!q.retry) P.miss.push({ a: q.type === "build" ? q.answer : q.opts[q.a], p: q.big ? esc(q.big) : q.text ? esc(q.text) : q.audio ? esc(q.audio) : q.prompt || "", exp: q.exp });
    if (P.L.type !== "test") { const c = Object.assign({}, q, { retry: 1 }); if (c.type === "build") { c.sel = []; c.tokens = shuffle(c.tokens); } else { const r = c.opts[c.a]; c.opts = shuffle(c.opts); c.a = c.opts.indexOf(r); } P.qs.push(c); }
  }
  if (q.type === "build") say(q.answer); else if (q.after) say(q.after); else if (q.fbKo && !right) say(q.fbKo);
  render();
}
function nextQ() {
  const P = cur; P.picked = null; P.qi++;
  if (P.qi >= P.qs.length) { P.phase = "done"; if (P.ok / P.total >= PASS) complete(P.L, P.ok / P.total); render(); window.scrollTo(0, 0); return; }
  render(); announce(); window.scrollTo(0, 0);
}

// ---------- boost mantiqi ----------
function boostStart() {
  if (learned() < 4) return;
  if (B && B.timer) clearInterval(B.timer);
  B = { t: 60, score: 0, combo: 0, maxc: 0, n: 0, ok: 0, miss: [], q: boostQ(), picked: null, over: false };
  B.timer = setInterval(() => {
    if (!B || B.over) return;
    B.t--; const el = $("#bt"); if (el) el.textContent = B.t;
    if (B.t <= 0) boostOver();
  }, 1000);
  nav.hidden = true; render(); nav.hidden = true;
}
function boostOver() {
  clearInterval(B.timer); B.over = true;
  touchDay(); S.day.boost = 1; if (B.score > S.best) S.best = B.score;
  const t = dayNum(); B.miss.forEach(k => { if (S.srs[k]) S.srs[k] = { b: 0, d: t }; });
  save(); render();
}
function boostPick(i) {
  const q = B.q; if (B.picked != null || B.over) return;
  B.picked = i; B.n++;
  const key = q.big || q.after;
  if (i === q.a) { B.ok++; B.combo++; B.maxc = Math.max(B.maxc, B.combo); B.score += 10 * Math.min(5, 1 + ((B.combo - 1) / 3 | 0)); }
  else { B.combo = 0; if (!B.miss.includes(key)) B.miss.push(key); }
  render(); nav.hidden = true;
  setTimeout(() => { if (!B || B.over) return; B.q = boostQ(); B.picked = null; render(); nav.hidden = true; }, i === q.a ? 250 : 900);
}

// ---------- hodisalar ----------
const ACT = {
  tab(el) { if (B && !B.over) return; tab = el.dataset.tab; R = null; if (B) B = null; resetArm = false; render(); window.scrollTo(0, 0); },
  open(el) { openLesson(+el.dataset.i); },
  say(el) { say(el.dataset.t, true); },
  close() { cur = null; tab = "home"; render(); },
  prev() { if (cur.si) { cur.si--; render(); window.scrollTo(0, 0); } },
  fwd() { if (cur.si < cur.slides.length - 1) { cur.si++; render(); window.scrollTo(0, 0); } else startQuiz(); },
  "skip-intro"() { startQuiz(); },
  opt(el) {
    const i = +el.dataset.i;
    if (!cur) { if (B) boostPick(i); return; }
    if (cur.picked != null) return;
    cur.picked = i; answer(i === cur.qs[cur.qi].a);
  },
  tile(el) { const q = cur.qs[cur.qi]; q.sel.push(+el.dataset.i); say(q.tokens[+el.dataset.i]); render(); },
  untile(el) { cur.qs[cur.qi].sel.splice(+el.dataset.j, 1); render(); },
  check() { const q = cur.qs[cur.qi]; cur.picked = -1; answer(q.sel.map(i => q.tokens[i]).join(" ") === q.answer); },
  next() { nextQ(); },
  again() { startQuiz(); window.scrollTo(0, 0); },
  "again-intro"() { openLesson(cur.L.idx); },
  "rev-start"() { R = { q: shuffle(dueCards()).slice(0, 30), n: 0, ok: 0, open: false }; render(); if (R.q[0]) say(R.q[0]); },
  "rev-show"() { R.open = true; render(); },
  "rev-yes"() { revMark(true); },
  "rev-no"() { revMark(false); },
  "rev-end"() { R = null; tab = "home"; render(); },
  "boost-start"() { boostStart(); },
  "boost-stop"() { boostOver(); },
  "boost-end"() { B = null; tab = "home"; render(); },
  set(el) { const k = el.dataset.k; S.set[k] = !S.set[k]; save(); render(); },
  reset() { if (!resetArm) { resetArm = true; render(); return; } resetArm = false; const set = S.set; S = fresh(); S.set = set; save(); tab = "home"; render(); }
};
function revMark(ok) {
  const k = R.q.shift(), c = S.srs[k], t = dayNum();
  if (!R.seen) R.seen = {};
  if (!R.seen[k]) { R.seen[k] = 1; R.n++; if (ok) R.ok++; }
  if (ok) { if (c.d <= t) { c.b = Math.min(c.b + 1, GAPS.length - 1); c.d = t + GAPS[c.b]; } }
  else { c.b = 0; c.d = t + 1; R.q.push(k); }
  R.open = false;
  if (!R.q.length) { touchDay(); S.day.rev = 1; }
  save(); render();
  if (R.q[0]) say(R.q[0]);
}
document.addEventListener("click", e => { const el = e.target.closest("[data-act]"); if (!el || el.disabled) return; const f = ACT[el.dataset.act]; if (f) f(el); });
document.addEventListener("keydown", e => {
  if (e.target.closest("input,textarea")) return;
  if (e.key >= "1" && e.key <= "4") { const b = document.querySelectorAll(".opt")[+e.key - 1]; if (b && !b.disabled) b.click(); }
  else if (e.key === "Enter" && cur) { const b = $(".pfoot .btn.primary"); if (b && !b.disabled && document.activeElement.tagName !== "BUTTON") b.click(); }
});
render();
