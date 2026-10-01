/* Experience page: shows every entry in js/data/experience.js. */

renderLayout();

render("experience-list", EXPERIENCE.map(ExperienceItem).join(""));
