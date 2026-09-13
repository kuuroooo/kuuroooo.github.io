/* One script for both pages. Blocks guard on the elements they need.
   No scroll listeners: entrance motion is CSS scroll-driven (see styles.css). */

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));
const chips = xs => xs.map(x => `<span class="chip">${esc(x)}</span>`).join("");

/* ── Nav ─────────────────────────────────────────────────────────── */
(() => {
  const burger = $("#burger"), links = $("#navlinks");
  burger.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", !open);
    links.classList.toggle("open", !open);
  });
  links.addEventListener("click", e => {
    if (e.target.tagName === "A") { burger.setAttribute("aria-expanded", "false"); links.classList.remove("open"); }
  });
})();

/* ── Footer links (shared by both pages) ─────────────────────────── */
(() => {
  const f = $("#footlinks"); if (!f) return;
  f.innerHTML = [
    ["GitHub", PROFILE.github],
    ["LinkedIn", PROFILE.linkedin],
    ["Email", "mailto:" + PROFILE.email]
  ].map(([label, href]) => `<a href="${href}"${href.startsWith("mailto") ? "" : ' target="_blank" rel="noopener"'}>${label}</a>`).join("");
})();

/* A cover is shown only when a real image exists. No generated illustration
   and no big empty panel standing in for one: without an image the card is
   typographic. Set `cover` in data.js and the image takes over. */
const coverHTML = p => p.cover
  ? `<div class="card-cover"><img src="${esc(p.cover)}" alt="${esc(p.title)}" loading="lazy"></div>`
  : "";

/* ── Shared home content (index.html and alt.html) ───────────────── */
if ($("#abouttext")) {
  const introEl = $("#intro");
  introEl.textContent = PROFILE[introEl.dataset.copy || "intro"];
  $("#abouttext").innerHTML = PROFILE.about.map(p => `<p>${esc(p)}</p>`).join("");

  $("#langs").innerHTML = `<div><h3>Spoken languages</h3><div class="chips">${chips(PROFILE.languages)}</div></div>`;

  $("#portrait").innerHTML = `<img src="${PROFILE.photo}" alt="Portrait of ${esc(PROFILE.short)}"
       onerror="this.outerHTML='&lt;div class=\\'ph\\'&gt;portrait goes here<br>assets/photo.jpg&lt;/div&gt;'">`;

  $("#contactactions").innerHTML =
    `<a class="btn btn-solid" href="mailto:${PROFILE.email}">Email me</a>` +
    `<a class="btn" href="${PROFILE.linkedin}" target="_blank" rel="noopener">LinkedIn</a>`;

  $("#jobs").innerHTML = EXPERIENCE.map(j => `
    <article class="job reveal">
      <div class="job-when">${esc(j.period)}</div>
      <div>
        <h3>${esc(j.role)} <span class="at">at ${j.orgUrl ? `<a href="${j.orgUrl}" target="_blank" rel="noopener">${esc(j.org)}</a>` : esc(j.org)}</span></h3>
        <p class="place">${esc(j.place)}</p>
        <p class="blurb">${esc(j.blurb)}</p>
        <ul>${j.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>
      </div>
    </article>`).join("");

  /* Featured projects get a pinned panel each; the rest become a compact list. */
  if ($("#stack")) {
    $("#stack").innerHTML = PROJECTS.filter(p => p.featured).map(p => `
      <section class="stack-panel">
        <div class="wrap panel-grid">
          <div>
            <h3 class="panel-title">${esc(p.title)}</h3>
            <p class="panel-meta">${esc(p.context)}</p>
            <p class="panel-lede">${esc(p.overview[0])}</p>
            <div class="panel-actions">
              <a class="btn btn-solid" href="project.html?p=${encodeURIComponent(p.id)}">Read more</a>
              ${p.repo ? `<a class="btn" href="${p.repo}" target="_blank" rel="noopener">GitHub</a>` : ""}
            </div>
          </div>
          <div>
            <ul class="panel-points">${p.highlights.slice(0, 3).map(h => `<li>${esc(h)}</li>`).join("")}</ul>
            <div class="chips">${chips(p.stack)}</div>
          </div>
        </div>
      </section>`).join("");

    $("#minor").innerHTML = PROJECTS.filter(p => !p.featured).map(p => `
      <li><a href="project.html?p=${encodeURIComponent(p.id)}">
        <span class="t">${esc(p.title)}</span>
        <span class="c">${esc(p.context)}</span>
        <span class="k">${esc(p.tags[0])}</span>
      </a></li>`).join("");
  }

  $("#skillgrid").innerHTML = Object.entries(PROFILE.skills)
    .map(([k, v]) => `<div><h3>${esc(k)}</h3><div class="chips">${chips(v)}</div></div>`).join("");

  $("#edu").innerHTML = EDUCATION.map(e => `
    <div class="edu-row">
      <div>
        <h3>${esc(e.school)}</h3>
        <p class="deg">${esc(e.degree)}</p>
        <p class="note">${esc(e.note)}</p>
      </div>
      <p class="when">${esc(e.period)}</p>
    </div>`).join("");

  // Hero typing. Motivated: the name is the page's one moment of introduction.
  (() => {
    const el = $("#type"); if (!el) return;
    const full = PROFILE.short;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = full; return; }
    let i = 0;
    (function tick() {
      el.textContent = full.slice(0, ++i);
      if (i < full.length) setTimeout(tick, 95);
    })();
  })();
}

/* ── Project detail page ─────────────────────────────────────────── */
if ($("#proj")) {
  const id = new URLSearchParams(location.search).get("p");
  const i = PROJECTS.findIndex(p => p.id === id);

  if (i === -1) {
    $("#proj").innerHTML = `<div class="p-hero">
      <a class="back" href="index.html#projects"><span class="arr">&larr;</span> All projects</a>
      <h1 class="p-title">Not found</h1>
      <p style="color:var(--muted)">That project does not exist.
        <a href="index.html#projects" style="color:var(--accent)">Back to the grid &rarr;</a></p>
    </div>`;
  } else {
    const p = PROJECTS[i];
    document.title = `${p.title} | Kelly Wang`;

    $("#p-title").textContent = p.title;
    $("#p-meta").innerHTML = `<span>${esc(p.context)}</span>`;
    if (p.cover) $("#p-cover").innerHTML = `<img src="${esc(p.cover)}" alt="${esc(p.title)}">`;
    else $("#p-cover").remove();
    $("#p-overview").innerHTML = p.overview.map(x => `<p>${esc(x)}</p>`).join("");
    $("#p-highlights").innerHTML = p.highlights.map(x => `<li>${esc(x)}</li>`).join("");
    $("#p-stack").innerHTML = chips(p.stack);
    $("#p-role").textContent = p.role;

    if (p.takeaway) { const t = $("#p-takeaway"); t.textContent = p.takeaway; t.hidden = false; }

    $("#p-repo").innerHTML = p.repo
      ? `<a href="${p.repo}" target="_blank" rel="noopener">View on GitHub &rarr;</a>`
      : "Repository kept private under university coursework policy. Happy to walk through the code on request.";

    const links = [];
    if (p.repo) links.push(`<a class="btn btn-solid" href="${p.repo}" target="_blank" rel="noopener">GitHub</a>`);
    if (p.demo) links.push(`<a class="btn" href="${p.demo}" target="_blank" rel="noopener">Live demo</a>`);
    $("#p-links").innerHTML = links.join("");

    const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(i + 1) % PROJECTS.length];
    $("#p-next").innerHTML =
      `<a href="project.html?p=${prev.id}">&larr; ${esc(prev.title)}</a><a href="project.html?p=${next.id}">${esc(next.title)} &rarr;</a>`;
  }
}
