/* Single project page. project.html is one shared template: the "?id=..."
   part of the URL decides which project from js/data/projects.js is shown. */

renderLayout();

const id = new URLSearchParams(location.search).get("id");
const index = PROJECTS.findIndex((p) => p.id === id);
const project = PROJECTS[index];

if (!project) {
  render("project", `
    <h1>Project not found</h1>
    <p class="muted">No project has the id "${esc(id)}".</p>
    ${Button("Back to projects", "projects.html")}
  `);
} else {
  document.title = `${project.title} | ${SITE.name}`;

  const prev = PROJECTS[index - 1];
  const next = PROJECTS[index + 1];

  render("project", `
    <a class="back-link" href="projects.html">← All projects</a>

    <header class="project-header">
      <p class="eyebrow">${esc(project.date)}${project.role ? " · " + esc(project.role) : ""}</p>
      <h1>${esc(project.title)}</h1>
      <p class="lead">${esc(project.summary)}</p>
      ${Tags(project.tags)}
      <div class="actions">${(project.links || []).map((l) => Button(l.label, l.url, "secondary")).join("")}</div>
    </header>

    ${Media(project.image, project.title)}

    ${(project.sections || []).map(Block).join("")}

    <nav class="pager">
      ${prev ? `<a href="project.html?id=${prev.id}">← ${esc(prev.title)}</a>` : "<span></span>"}
      ${next ? `<a href="project.html?id=${next.id}">${esc(next.title)} →</a>` : ""}
    </nav>
  `);
}
