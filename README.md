# Portfolio

GitHub page for hosting my robotics engineering portfolio. Plain HTML, CSS and JavaScript, with no build tools or installs needed.

## Viewing the site

Double-click `index.html` to open it in a browser. After you save a change, refresh the page.

(Optional) If you use VS Code, the **Live Server** extension refreshes the page automatically every time you save.

## Folder structure

```
Portfolio/
├── index.html            Home page (hero, featured projects, about, contact)
├── projects.html         Grid of every project
├── project.html          ONE template used for every project page
├── publications.html     List of papers, theses, posters
├── css/
│   └── styles.css        All styling. Colors/fonts are variables at the top.
├── js/
│   ├── data/
│   │   ├── site.js       ← Your name, links, ribbon-bar items, about text, skills
│   │   ├── projects.js   ← Your projects (this is the file you'll edit most)
│   │   └── publications.js ← Your papers
│   ├── components.js     Reusable pieces: Navbar, ProjectCard, content blocks...
│   └── pages/
│       ├── home.js           Fills in index.html
│       ├── project-list.js   Fills in projects.html
│       ├── project-page.js   Fills in project.html
│       └── publications.js   Fills in publications.html
└── assets/
    ├── images/projects/  Project photos (e.g. images/projects/rover/cover.jpg)
    └── docs/             resume.pdf goes here
```

**How it fits together:** the `data` files hold your content, `components.js` turns content into HTML, and each page script decides which components go where on its page. Most of the time you only edit the `data` files.

## Everyday tasks

### Change your name, links or ribbon bar
Edit `js/data/site.js`. The `nav` list controls the ribbon bar items, in order.

### Add a project
1. Open `js/data/projects.js`.
2. Copy an existing `{ ... },` block and paste it into the list.
3. Change the `id` (lowercase with dashes, e.g. `"drone-swarm"`) and the text.
4. Put images in `assets/images/projects/drone-swarm/` and reference them like
   `image: "assets/images/projects/drone-swarm/cover.jpg"`.

Your project now appears on the Projects page and has its own page at
`project.html?id=drone-swarm`. Set `featured: true` to also show it on the home page.

The order of the list is the order projects are shown in.

### Add a publication
Open `js/data/publications.js`, copy a `{ ... },` block and change the text. Each entry has a title, authors, venue, year, type (Conference, Journal, Thesis...), an optional status like "Under review", an optional abstract (shown in a "Show abstract" drop-down), and link buttons (PDF, DOI, arXiv, code...).

Your name is shown in bold in author lists. List every spelling you've published under in `MY_AUTHOR_NAMES` at the top of the file. PDFs can go in `assets/docs/`.

### Writing long text
Put long text between backticks (`` ` ``) instead of quotes. Then you can press Enter as often as you like:
```js
body: `
  First paragraph. This line break is ignored,
  so the paragraph keeps going here.

  A blank line starts a second paragraph.
`,
```
This works for any text field (`summary`, `caption`, list items...). The only thing you can't type inside is a backtick itself.

### Build a project page from blocks
A project's `sections` is a list of blocks, shown top to bottom:

| type      | what it shows      | fields                                   |
|-----------|--------------------|------------------------------------------|
| `text`    | Heading + paragraphs | `heading`, `body` (blank line between paragraphs) |
| `list`    | Bullet list        | `heading`, `items: [...]`                |
| `image`   | One image          | `src`, `caption`                         |
| `gallery` | Grid of images     | `heading`, `images: [{ src, caption }]`  |
| `video`   | YouTube embed      | `youtube` (the ID after `v=` in the URL), `caption` |
| `specs`   | Two-column table   | `heading`, `rows: [["Label", "Value"]]`  |
| `code`    | Code snippet       | `heading`, `code` (between backticks)    |

### Change colors or fonts
Edit the variables at the top of `css/styles.css` (`--accent`, `--bg`, etc.).

### Add your resume
Save it as `assets/docs/resume.pdf`, or change the `resume` path in `site.js` and the Resume item in `nav`.

## Adding your own component

A component is a function that takes some data and returns HTML as text.
Example: an "Awards" section on the home page.

**1. Add the data** to `js/data/site.js`, inside `SITE`:
```js
awards: [
  { title: "Best Paper Award", from: "Purdue Robotics Symposium", year: "2025" },
],
```

**2. Write the component** in `js/components.js`:
```js
function Award(award) {
  return `
    <li>
      <strong>${esc(award.title)}</strong>
      <span class="muted"> — ${esc(award.from)}, ${esc(award.year)}</span>
    </li>`;
}
```
Everything inside the backticks is ordinary HTML. `${ ... }` inserts a value.
Wrap text in `esc(...)` so characters like `<` show up correctly.

**3. Add an empty container** where it should appear in `index.html`:
```html
<section id="awards" class="section container">
  <h2>Awards</h2>
  <ul id="award-list"></ul>
</section>
```

**4. Fill the container** in `js/pages/home.js`:
```js
render("award-list", SITE.awards.map(Award).join(""));
```
`.map(Award)` runs the component once per item, and `.join("")` glues the results together.

**5. (Optional) Style it** in `css/styles.css`, using the `id` or a class you added.

To add it to the ribbon bar, add `{ label: "Awards", page: "index.html#awards" }` to `nav` in `site.js`.

### Adding a new project block type
Add an entry to the `BLOCKS` object in `js/components.js`. The name you give it becomes the `type`:
```js
quote: (b) => `
  <blockquote class="block">${esc(b.text)}</blockquote>`,
```
Then use `{ type: "quote", text: "..." }` in any project's `sections`.

### Adding a whole new page
Copy `projects.html` and rename it. Change the text inside `<main>`, and point its last `<script>` at a new file in `js/pages/`. Keep the `navbar` and `footer` elements and the first three scripts so the ribbon bar still appears. Then add the page to `nav` in `site.js`.

## Publishing on GitHub Pages
Push to GitHub → repository **Settings → Pages** → Source: *Deploy from a branch*, branch `main`, folder `/ (root)`. The site will be live at `https://<username>.github.io/<repo-name>/`.
