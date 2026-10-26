/* =====================================================================
   EDUCATION  —  degrees shown at the top of the Experience page.

   To add one: copy a { ... } block, paste it into the list, and change
   the text. The list is shown in the order you write it (newest first
   is the usual convention).

   FIELDS
     degree      Degree and major, e.g. "M.S. in Mechanical Engineering".
     school      University name.
     place       Optional. City or campus.
     dates       Any text, e.g. "Aug 2026 – Present" or "Expected May 2028".
     highlights  Optional. Bullet points: thesis, capstone, honors, GPA...
     links       Optional. Buttons under the entry (related project...).
   ===================================================================== */

const EDUCATION = [
  {
    degree: "Master's in Robotics Technology",
    school: "Purdue University",
    place: "West Lafayette, IN",
    dates: "Aug 2026 – May 2028 (expected)",
    highlights: [
      "Research: learning-integrated control architectures in embodied autonomous systems, with an emphasis on autonomous decision-making.",
      "Relevant coursework: Artificial Intelligence, Introduction to Robotic Systems.",
      "Graduate Teaching Assistant for hands-on CAD and product data management labs.",
    ],
    links: [],
  },

  {
    degree: "B.S. in Robotics and Digital Systems Engineering",
    school: "Tecnológico de Monterrey",
    place: "Campus Monterrey, Mexico",
    dates: "Graduated June 2026",
    highlights: [
      "GPA: 3.7",
      "Relevant coursework: Control Systems, System & Signal Analysis, Advanced Embedded Systems, Data Structures & Algorithms, Intelligent Robotics Implementation.",
      "Capstone (Implementation of Intelligent Systems): autonomous forklift robot for warehouse operations (ROS 2, FPGA, computer vision).",
      "Co-founded RASTec, the university's IEEE Robotics and Automation Society student branch.",
      "Undergraduate research internship at UT Austin's Human Centered Robotics Laboratory (Fall 2025).",
    ],
    links: [{ label: "Capstone project", url: "project.html?id=puzzlebot-software" }],
  },
];
