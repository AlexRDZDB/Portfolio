/* =====================================================================
   COMPONENTS  —  small functions that turn data into HTML.

   Every component follows the same pattern:
       function ComponentName(data) {
         return `...HTML with ${data.something} filled in...`;
       }
   The text between backticks (`) is a "template string": ordinary HTML
   where anything inside ${ } is replaced with a value.

   Pages call these functions and put the result on screen with
   render("element-id", html).
   ===================================================================== */

/* ---------- Helpers ---------- */

// Put HTML inside the element with the given id.
function render(elementId, html) {
  const el = document.getElementById(elementId);
  if (el) el.innerHTML = html;
}

// Make text safe to insert into HTML (so a "<" in your text can't break the page).
function esc(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Turn text with blank lines between paragraphs into separate <p> tags.
function paragraphs(text) {
  return String(text ?? "")
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `<p>${esc(p)}</p>`)
    .join("");
}

// Name of the current page file, e.g. "index.html".
function currentPage() {
  return location.pathname.split("/").pop() || "index.html";
}

/* ---------- Site-wide components ---------- */

// The ribbon bar at the top of every page. Items come from SITE.nav.
function Navbar() {
  // A single project page counts as being "in" the Projects section.
  const here = currentPage() === "project.html" ? "projects.html" : currentPage();

  const links = SITE.nav
    .map((item) => {
      const isActive = item.page === here; // links with "#" are never highlighted
      const target = item.newTab ? ` target="_blank" rel="noopener"` : "";
      return `<li><a href="${item.page}"${target} class="${isActive ? "active" : ""}">${esc(item.label)}</a></li>`;
    })
    .join("");

  return `
    <nav class="navbar container">
      <a class="brand" href="index.html">
        <span class="brand-name">${esc(SITE.name)}</span>
        <span class="brand-title">${esc(SITE.title)}</span>
      </a>
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links">${links}</ul>
    </nav>`;
}

function Footer() {
  const links = SITE.links
    .map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${esc(l.label)}</a>`)
    .join("");
  return `
    <div class="container footer-inner">
      <span>© ${new Date().getFullYear()} ${esc(SITE.name)}</span>
      <span class="footer-links">${links}</span>
    </div>`;
}

// Draws the ribbon bar and footer, and wires up the mobile menu button.
// Every page calls this once.
function renderLayout() {
  render("navbar", Navbar());
  render("footer", Footer());

  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-links");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }
}

/* ---------- Small building blocks ---------- */

function Tags(tags) {
  return `<ul class="tags">${(tags || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
}

// An image, or a striped placeholder box if no image path is given yet.
function Media(src, alt) {
  if (!src) return `<div class="media placeholder"><span>Add image</span></div>`;
  return `<img class="media" src="${src}" alt="${esc(alt)}" loading="lazy">`;
}

function Button(label, url, style = "primary") {
  const external = url.startsWith("http");
  const target = external ? ` target="_blank" rel="noopener"` : "";
  return `<a class="btn btn-${style}" href="${url}"${target}>${esc(label)}</a>`;
}

/* ---------- Project components ---------- */

// The clickable card used in the project grids.
function ProjectCard(project) {
  return `
    <a class="card" href="project.html?id=${project.id}">
      ${Media(project.image, project.title)}
      <div class="card-body">
        <p class="eyebrow">${esc(project.date)}</p>
        <h3>${esc(project.title)}</h3>
        <p>${esc(project.summary)}</p>
        ${Tags(project.tags)}
      </div>
    </a>`;
}

function ProjectGrid(projects) {
  if (!projects.length) return `<p class="muted">No projects yet.</p>`;
  return `<div class="grid">${projects.map(ProjectCard).join("")}</div>`;
}

/* ---------- Publication components ---------- */

// Author list with your name (from MY_AUTHOR_NAMES) in bold.
function Authors(authors) {
  let html = esc(authors);
  (typeof MY_AUTHOR_NAMES !== "undefined" ? MY_AUTHOR_NAMES : []).forEach((name) => {
    html = html.split(esc(name)).join(`<strong>${esc(name)}</strong>`);
  });
  return html;
}

// One entry on the Publications page.
function Publication(pub) {
  const abstract = pub.abstract && pub.abstract.trim()
    ? `<details class="abstract"><summary>Show abstract</summary>${paragraphs(pub.abstract)}</details>`
    : "";
  const links = (pub.links || []).map((l) => Button(l.label, l.url, "secondary btn-small")).join("");

  return `
    <article class="publication">
      <div class="pub-meta">
        <span class="pub-year">${esc(pub.year)}</span>
        ${pub.type ? `<span class="pub-type">${esc(pub.type)}</span>` : ""}
      </div>
      <div class="pub-body">
        <h3>${esc(pub.title)}</h3>
        <p class="pub-authors">${Authors(pub.authors)}</p>
        <p class="pub-venue">${esc(pub.venue)}${pub.status ? ` <span class="pub-status">${esc(pub.status)}</span>` : ""}</p>
        ${abstract}
        ${links ? `<div class="pub-links">${links}</div>` : ""}
      </div>
    </article>`;
}

function PublicationList(publications) {
  if (!publications.length) return `<p class="muted">No publications yet.</p>`;
  return publications.map(Publication).join("");
}

function SkillGroup(skill) {
  return `
    <div class="skill-group">
      <h3>${esc(skill.group)}</h3>
      ${Tags(skill.items)}
    </div>`;
}

/* ---------- Project page content blocks ----------
   Each "type" used in a project's sections maps to one function here.
   To add a new block type, add a new entry to this object (see README). */

const BLOCKS = {
  text: (b) => `
    <section class="block">
      ${b.heading ? `<h2>${esc(b.heading)}</h2>` : ""}
      ${paragraphs(b.body)}
    </section>`,

  list: (b) => `
    <section class="block">
      ${b.heading ? `<h2>${esc(b.heading)}</h2>` : ""}
      <ul class="bullets">${b.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
    </section>`,

  image: (b) => `
    <figure class="block">
      ${Media(b.src, b.caption)}
      ${b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ""}
    </figure>`,

  gallery: (b) => `
    <section class="block">
      ${b.heading ? `<h2>${esc(b.heading)}</h2>` : ""}
      <div class="gallery">
        ${b.images
          .map((img) => `<figure>${Media(img.src, img.caption)}<figcaption>${esc(img.caption)}</figcaption></figure>`)
          .join("")}
      </div>
    </section>`,

  video: (b) => `
    <figure class="block">
      ${
        b.youtube
          ? `<div class="video"><iframe src="https://www.youtube.com/embed/${b.youtube}" title="${esc(b.caption)}" allowfullscreen></iframe></div>`
          : `<div class="media placeholder"><span>Add video</span></div>`
      }
      ${b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ""}
    </figure>`,

  specs: (b) => `
    <section class="block">
      ${b.heading ? `<h2>${esc(b.heading)}</h2>` : ""}
      <table class="specs">
        ${b.rows.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}
      </table>
    </section>`,

  code: (b) => `
    <section class="block">
      ${b.heading ? `<h2>${esc(b.heading)}</h2>` : ""}
      <pre class="code"><code>${esc(b.code)}</code></pre>
    </section>`,
};

// Look up the right function for a block and run it.
function Block(block) {
  const renderBlock = BLOCKS[block.type];
  if (!renderBlock) {
    console.warn(`Unknown block type "${block.type}". Add it to BLOCKS in js/components.js.`);
    return "";
  }
  return renderBlock(block);
}
