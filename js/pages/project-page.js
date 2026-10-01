/* Single project page. project.html is one shared template: the "?id=..."
   part of the URL decides which project from js/data/projects.js is shown. */

renderLayout();

const id = new URLSearchParams(location.search).get("id");
// Hidden projects still open from a direct link, but are left out of prev/next.
const project = PROJECTS.find((p) => p.id === id);
const shown = VisibleProjects();
const index = shown.indexOf(project);

if (!project) {
  render("project", `
    <h1>Project not found</h1>
    <p class="muted">No project has the id "${esc(id)}".</p>
    ${Button("Back to projects", "projects.html")}
  `);
} else {
  document.title = `${project.title} | ${SITE.name}`;

  const prev = index > 0 ? shown[index - 1] : null;
  const next = index >= 0 ? shown[index + 1] : null;

  render("project", `
    <a class="back-link" href="projects.html">← All projects</a>

    <header class="project-header">
      <p class="eyebrow">${esc(project.date)}${project.role ? " · " + esc(project.role) : ""}</p>
      <h1>${esc(project.title)}</h1>
      <p class="lead">${esc(project.summary)}</p>
      ${Tags(project.tags)}
      <div class="actions">${(project.links || []).map((l) => Button(l.label, l.url, "secondary")).join("")}</div>
    </header>

    ${Media(project.image, project.title, project.imageFit === "contain" ? "contain" : "")}

    ${(project.sections || []).map(Block).join("")}

    <nav class="pager">
      ${prev ? `<a href="project.html?id=${prev.id}">← ${esc(prev.title)}</a>` : "<span></span>"}
      ${next ? `<a href="project.html?id=${next.id}">${esc(next.title)} →</a>` : ""}
    </nav>
  `);
}
