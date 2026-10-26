/* =====================================================================
   SITE SETTINGS  —  edit this file to change your name, links, and the
   items that appear in the ribbon bar. No other file needs to change.
   ===================================================================== */

const SITE = {
  name: "Alejandro Rodríguez del Bosque",
  title: "Robotics Engineer",
  tagline: "I develop control and learning-based autonomy for legged and mobile robots.",
  email: "alejandrordzdb@gmail.com",
  location: "West Lafayette, IN",

  // Put your resume PDF in assets/docs/ and update the filename here.
  resume: "assets/docs/Alejandro-Rodriguez-del-Bosque-Resume.pdf",

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
    { label: "Experience", page: "experience.html" },
    { label: "Publications", page: "publications.html" },
    { label: "About",   page: "index.html#about" },
    { label: "Contact",  page: "index.html#contact" },
    { label: "Resume",   page: "assets/docs/Alejandro-Rodriguez-del-Bosque-Resume.pdf", newTab: true },
  ],

  // Short "About" text shown on the home page. Write it between backticks:
  // a single line break continues the paragraph, a blank line starts a new one.
  about: `
    I'm a robotics engineer with experience in embedded systems, controls,
    and learning-based methods. I graduated from Tecnológico de Monterrey
    with a degree in Robotics and Digital Systems Engineering, and I'm now
    pursuing a Master's in Robotics Technology at Purdue University. My
    research focuses on legged locomotion and on closing the gap between
    simulation and real hardware.

    I develop software for autonomous robots with ROS 2, C++, Python, and
    Linux, from reinforcement learning locomotion policies in Isaac Lab to
    navigation and perception on mobile robots. I've also designed and
    implemented control algorithms on embedded platforms, including STM32
    microcontrollers and Arduino.
  `,

  // Skill groups shown on the home page.
  skills: [
    { group: "Programming", items: ["Python", "C++", "C", "C#", "Java", "Assembly", "Linux / Ubuntu", "Git", "Docker"] },
    { group: "Robotics software", items: ["ROS 2", "Gazebo", "NVIDIA Isaac Sim", "Isaac Lab"] },
    { group: "Machine learning", items: ["Reinforcement learning", "PyTorch", "scikit-learn", "YOLOv8", "Robust regression", "Uncertainty quantification"] },
    { group: "Perception", items: ["Computer vision", "OpenCV", "Open3D", "ArUco / QR markers", "LiDAR", "Monocular depth estimation", "3D Gaussian Splatting"] },
    { group: "Controls & autonomy", items: ["PID control", "State feedback", "Nonlinear control", "Kinematic modeling", "State estimation", "Motion planning", "SLAM", "Pure Pursuit", "A* path planning", "Bug 2 obstacle avoidance", "State machines", "Sensor calibration"] },
    { group: "Hardware & embedded", items: ["NVIDIA Jetson", "FPGA", "ESP32", "STM32 / Arduino", "SPI", "PWM", "Encoders & IMUs", "Motor control", "Sensor integration", "Multi-sensor data analysis"] },
    { group: "Design", items: ["Fusion 360", "Teamcenter / PLM"] },
    { group: "Robot platforms", items: ["ANYmal D", "PuzzleBot", "DJI Tello"] },
    { group: "Languages", items: ["Spanish (native)", "English (native-level)", "German (basic)"] },
  ],
};
