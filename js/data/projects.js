/* =====================================================================
   PROJECTS  —  every project on the site lives in this list.

   To add a project: copy one { ... } block, paste it into the list,
   and change the text. A page is created for it automatically at
       project.html?id=<the id you choose>

   FIELDS
     id        Unique, lowercase, no spaces (used in the page URL).
     title     Project name.
     summary   One or two sentences, shown on the project card.
     date      Any text, e.g. "Spring 2025".
     role      Your role, e.g. "Team lead — controls & firmware".
     tags      Short keywords shown as chips.
     image     Cover image path (leave "" to use the placeholder).
     featured  true = also show on the home page.
     links     Buttons at the top of the project page (GitHub, video, paper...).
     sections  The body of the project page, built from "blocks".

   BLOCK TYPES you can use inside "sections"
     { type: "text",    heading: "...", body: "..." }            paragraph(s); use \n\n for a new paragraph
     { type: "list",    heading: "...", items: ["...", "..."] }  bullet list
     { type: "image",   src: "...", caption: "..." }             single image
     { type: "gallery", images: [{ src: "...", caption: "..." }] } grid of images
     { type: "video",   youtube: "VIDEO_ID", caption: "..." }    YouTube embed (the part after v=)
     { type: "specs",   heading: "...", rows: [["Label", "Value"], ...] }  two-column table
     { type: "code",    heading: "...", language: "cpp", code: `...` }     code snippet
   New block types can be added in js/components.js (see README.md).
   ===================================================================== */

const PROJECTS = [
  {
    id: "autonomous-rover",
    title: "Autonomous Mobile Rover",
    summary:
      "A differential-drive rover that maps its environment with LiDAR and navigates to goals using ROS 2 Nav2.",
    date: "Spring 2025",
    role: "Team lead — autonomy & integration",
    tags: ["ROS 2", "SLAM", "LiDAR", "C++"],
    image: "",
    featured: true,
    links: [
      { label: "GitHub", url: "https://github.com/your-username/rover" },
      { label: "Demo video", url: "https://youtube.com" },
    ],
    sections: [
      {
        type: "text",
        heading: "Overview",
        body:
          "Describe the problem, the goal, and why it mattered.\n\nA second paragraph can describe the final result at a high level.",
      },
      {
        type: "specs",
        heading: "At a glance",
        rows: [
          ["Platform", "Custom aluminum chassis, 2× brushed DC motors"],
          ["Compute", "Raspberry Pi 5 + STM32 motor controller"],
          ["Sensors", "2D LiDAR, IMU, wheel encoders"],
          ["Software", "ROS 2 Humble, slam_toolbox, Nav2"],
        ],
      },
      {
        type: "list",
        heading: "What I did",
        items: [
          "Designed the ROS 2 node architecture and launch system.",
          "Tuned the EKF fusing wheel odometry and IMU data.",
          "Wrote the STM32 firmware for closed-loop wheel velocity control.",
        ],
      },
      {
        type: "image",
        src: "",
        caption: "System architecture diagram (replace with your own image).",
      },
      {
        type: "text",
        heading: "Results & lessons learned",
        body: "Quantify outcomes where you can: accuracy, speed, reliability, cost.",
      },
    ],
  },

  {
    id: "robotic-arm",
    title: "6-DOF Robotic Arm",
    summary:
      "A 3D-printed six-axis arm with custom inverse kinematics and a trajectory planner for pick-and-place tasks.",
    date: "Fall 2024",
    role: "Solo project",
    tags: ["Kinematics", "Python", "Mechanical design"],
    image: "",
    featured: true,
    links: [{ label: "GitHub", url: "https://github.com/your-username/arm" }],
    sections: [
      {
        type: "text",
        heading: "Overview",
        body: "Describe the arm, its purpose, and your design goals.",
      },
      {
        type: "code",
        heading: "Inverse kinematics snippet",
        language: "python",
        code: `def solve_ik(target):
    # Replace with a short, interesting excerpt of your own code
    return joint_angles`,
      },
      {
        type: "gallery",
        images: [
          { src: "", caption: "CAD model" },
          { src: "", caption: "Assembled arm" },
          { src: "", caption: "Test rig" },
        ],
      },
    ],
  },

  {
    id: "balancing-robot",
    title: "Self-Balancing Robot",
    summary:
      "A two-wheeled inverted pendulum stabilized with a cascaded PID controller and a complementary filter.",
    date: "Summer 2024",
    role: "Controls & firmware",
    tags: ["Controls", "Embedded C", "IMU"],
    image: "",
    featured: true,
    links: [],
    sections: [
      {
        type: "text",
        heading: "Overview",
        body: "Describe the controller design, tuning process, and results.",
      },
      {
        type: "video",
        youtube: "",
        caption: "Paste a YouTube video ID above to embed a demo.",
      },
    ],
  },
];
