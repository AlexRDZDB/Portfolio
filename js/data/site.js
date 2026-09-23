/* =====================================================================
   SITE SETTINGS  —  edit this file to change your name, links, and the
   items that appear in the ribbon bar. No other file needs to change.
   ===================================================================== */

const SITE = {
  name: "Alejandro Rodriguez del Bosque",
  title: "Robotics Engineer",
  tagline:
    "I design, build, and program robots — from embedded control and sensor fusion to autonomy and perception.",
  email: "alejandrordzdb@gmail.com",
  location: "West Lafayette, IN",

  // Put your resume PDF in assets/docs/ and update the filename here.
  resume: "assets/docs/resume.pdf",

  // Social / contact links. Remove any you don't use; add more the same way.
  links: [
    { label: "GitHub",   url: "https://github.com/AlexRDZDB" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/alejandro-rodríguez-del-bosque-1810a331b" },
  ],

  // Ribbon bar items (left to right).
  // "page" is the file to link to. Links that start with "#" jump to a
  // section on the home page (e.g. the element with id="about").
  nav: [
    { label: "Home",     page: "index.html" },
    { label: "Projects", page: "projects.html" },
    { label: "Publications", page: "publications.html" },
    { label: "About",   page: "index.html#about" },
    { label: "Contact",  page: "index.html#contact" },
    { label: "Resume",   page: "assets/docs/resume.pdf", newTab: true },
  ],

  // Short "About" text shown on the home page. Each string is a paragraph.
  about: [
    "Replace this with a short introduction: your background, what kind of robotics work excites you, and what roles you're looking for.",
    "A second paragraph could cover your core strengths, e.g. controls, ROS 2, embedded systems, mechanical design, or computer vision.",
  ],

  // Skill groups shown on the home page.
  skills: [
    { group: "Software",  items: ["C++", "Python", "ROS 2", "Linux", "Git"] },
    { group: "Hardware",  items: ["STM32 / Arduino", "Sensors & IMUs", "Motor control", "PCB design"] },
    { group: "Design",    items: ["SolidWorks", "Fusion 360", "3D printing", "Machining"] },
    { group: "Autonomy",  items: ["SLAM", "Path planning", "Kalman filters", "OpenCV"] },
  ],
};
