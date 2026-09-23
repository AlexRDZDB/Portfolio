/* Home page: fills the empty containers in index.html with content. */

renderLayout();

render("hero", `
  <p class="eyebrow">${esc(SITE.title)}</p>
  <h1>Hi, I'm ${esc(SITE.name)}.</h1>
  <p class="lead">${esc(SITE.tagline)}</p>
  <div class="actions">
    ${Button("View projects", "projects.html")}
    ${Button("Download resume", SITE.resume, "secondary")}
  </div>
`);

render("featured-projects", ProjectGrid(PROJECTS.filter((p) => p.featured)));

render("about-text", SITE.about.map((p) => `<p>${esc(p)}</p>`).join(""));

render("skills", SITE.skills.map(SkillGroup).join(""));

render("contact-links", `
  ${Button(SITE.email, "mailto:" + SITE.email)}
  ${SITE.links.map((l) => Button(l.label, l.url, "secondary")).join("")}
`);
