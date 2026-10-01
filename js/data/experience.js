/* =====================================================================
   EXPERIENCE  —  research positions, jobs, and leadership roles shown in
   the "Experience" section of the home page.

   To add one: copy a { ... } block, paste it into the list, and change
   the text. The list is shown in the order you write it (newest first
   is the usual convention).

   FIELDS
     role        Your title, e.g. "Undergraduate Research Intern".
     org         Lab, company, or organization.
     place       Optional. University or city.
     dates       Any text, e.g. "Aug 2025 – Dec 2025".
     highlights  Bullet points: what you did and what came of it.
     tags        Optional. Tools and topics, shown as chips.
     links       Optional. Buttons under the entry (lab website, related project...).
   ===================================================================== */

const EXPERIENCE = [
  {
    role: "Graduate Teaching Assistant",
    org: "Purdue University",
    place: "West Lafayette, IN",
    dates: "Aug 2026 – Present",
    highlights: [
      "Lead hands-on lab sessions, mentoring students through CAD, product data management, and engineering change workflows.",
      "Evaluate student projects and support Teamcenter-based design release processes, reinforcing industry-standard documentation and version control practices.",
    ],
    tags: ["CAD", "Teamcenter", "PLM"],
    links: [],
  },

  {
    role: "Undergraduate Research Intern",
    org: "Human Centered Robotics Laboratory",
    place: "The University of Texas at Austin",
    dates: "Aug 2025 – Dec 2025",
    highlights: [
      "Researched learning-based control strategies for embodied robotic systems, focusing on stability and adaptive behavior in dynamic environments.",
      "Designed and implemented reinforcement learning policies in Isaac Lab and PyTorch, achieving quadruped walking gaits that stay stable under external disturbances.",
      "Built and validated high-fidelity Isaac Sim environments for locomotion and navigation benchmarking.",
      "Designed the calibration setup, tests, and data analysis for estimating contact forces on BumpyBot, a soft-bodied robotic wheelchair, from its drivetrain torques, reaching 10° force-direction error and 16 cm contact localization error. This work produced a co-authored research paper.",
    ],
    tags: ["Reinforcement Learning", "Isaac Lab", "Isaac Sim", "PyTorch", "Calibration", "Uncertainty Quantification"],
    links: [{ label: "BumpyBot project", url: "project.html?id=bumpybot-wrench-estimation" }],
  },

  {
    role: "Co-Founder & Vice President",
    org: "RASTec — IEEE Robotics and Automation Society Student Branch",
    place: "Tecnológico de Monterrey",
    dates: "Aug 2025 – Jun 2026",
    highlights: [
      "Co-founded the branch and led its ANYmal D research initiative, directing work on learning-based control, robust perception, and dynamic-terrain navigation.",
      "Coordinated multidisciplinary robotics projects using ROS 2, Gazebo, and Isaac Sim, building simulation-to-real validation workflows.",
      "Designed and delivered reinforcement learning and research-training workshops for the 2025 Latin American Robotics Symposium (LARS).",
    ],
    tags: ["Leadership", "ANYmal D", "ROS 2", "Isaac Sim"],
    links: [{ label: "ANYmal D project", url: "project.html?id=anymal-d" }],
  },
];
