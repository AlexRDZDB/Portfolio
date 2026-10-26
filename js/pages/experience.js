/* Experience page: shows every entry in js/data/education.js and
   js/data/experience.js. */

renderLayout();

render("education-list", EDUCATION.map(EducationItem).join(""));

render("experience-list", EXPERIENCE.map(ExperienceItem).join(""));
