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

   LONG TEXT
     Any text can go between backticks ` ` instead of quotes " ". Inside
     backticks you can press Enter freely:
       - a single line break just continues the same paragraph
       - a blank line starts a new paragraph (in "text" blocks)
     Just don't type a backtick (`) or "${" inside the text itself.

   BLOCK TYPES you can use inside "sections"
     { type: "text",    heading: "...", body: `...` }            paragraph(s); blank line = new paragraph
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
    id: "puzzlebot-software",
    title: "Autonomous Forklift Warehouse Operations",
    summary: `
      A differential-drive robot that navigates a warehouse, detects and
      picks up boxes, and delivers them to a target location.
    `,
    date: "Spring 2025",
    role: "Team Member — autonomy, integration, mechanical design",
    tags: ["ROS 2", "SLAM", "LiDAR", "Python", "Fusion360"],
    image: "",
    featured: true,
    links: [
      { label: "GitHub", url: "https://github.com/Slamurais/puzzlebot_software" },
      { label: "Drone POV Demo video", url: "https://youtube.com" },
    ],
    sections: [
      {
        type: "text",
        heading: "Overview",
        body: `
          Autonomous warehouse robots can provide great value in terms of
          efficiency and safety. By delegating warehouse operations to autonomous
          robots, human workers can focus on higher-level tasks, while the robots
          handle the repetitive and physically demanding work. This project
          involved designing and implementing a complete autonomous system for a
          differential-drive robot, including navigation, perception, and control.
        `,
      },
      {
        type: "specs",
        heading: "At a glance",
        rows: [
          ["Platform", "Manchester Robotics PuzzleBot NVIDIA Jetson Edition"],
          ["Compute", "NVIDIA Jetson Nano + Tang Nano 2GB FPGA + ESP-32"],
          ["Actuators", "2x brushed DC motors"],
          ["Sensors", "2D LiDAR, IMU, wheel encoders"],
          ["Software", "ROS 2 Humble, slam_toolbox, Nav2"],
        ],
      },
      {
        type: "list",
        heading: "What I did",
        items: [
          "Designed the ROS 2 node architecture",
          "Developed obstacle avoidance and navigation algorithms using slam_toolbox and Nav2.",
          "Wrote the ROS2 control logic for closed-loop wheel velocity control.",
          "Designed and manufactured multiple iterations of the forklift attachment in Fusion360.",
          "Architected the control pipeline for controlling the forklift attachment using an FPGA."
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
    id: "uav-6to",
    title: "UAV Vision-Based Target Tracking Demo",
    summary:
      "ROS 2 package that autonomously holds a DJI Tello centered above a moving ArUco target using downward-camera vision and proportional control.",
    date: "Spring 2025",
    role: "Solo project",
  tags: ["UAV", "ROS2", "OpenCV", "ArUco", "Control Systems", "Computer Vision"],
    image: "",
    featured: false,
    links: [{ label: "GitHub", url: "https://github.com/AlexRDZDB/DJITello_Surveillance.git" },
            { label: "Drone POV Demo video", url: "https://drive.google.com/file/d/1wkxGqrdo_Bz1pJ7UXaKFAKteh245SyYB/view?usp=drive_link" },
            { label: "Outsider POV Demo video", url: "https://drive.google.com/file/d/1UTa6qH5PsfZpUCCcUiXmUgZwu6r9yftn/view?usp=drive_link" }
    ],
    sections: [
      {
        type: "text",
        heading: "Overview",
        body: `
          Unmanned Aerial Vehicles (UAVs) have a wide range of useful applications. Inspired by avoiding poaching
          of endangered species that happen in the African Savannah, I developed a ROS2 package that can command
          a DJI Tello drone and use Computer Vision to hover over an object, using Proportional controllers to maintain
          the object in the center of a camera frame, as well as to respect a vertical distance from the object. 
        `,
      },
      {
        type: "text",
        heading: "Computer Vision Pipeline",
        body: `
          The target is detected via ArUco markers on a flat, movable surface. This was chosen as a first approach
          due to hardware limitations of the DJI Tello drone, where the bottom camera feed could only transmit video in
          a grayscale format. Additionally, this provides a robust output that can be used for the control logic before
          fine-tuning for further operations.

          For frame processing, the DJI Tello drone sends raw frame data to an operating laptop via a WiFi signal. This was
          done as a hardware limitation, as the DJI Tello drone used did not have capabilities for onboard processing. I utilized the
          ArUco marker library to identify the ArUco and draw detected borders in pixel coordinates. The centroid is computed by 
          obtaining the edges and averaging their X and Y coordinates, adjusting for the position of the center of the image using its
          frame size. The drone's height above the target is estimated monocularly with the pinhole camera model: since the ArUco marker's 
          physical side length is known, the distance is computed from its apparent side length in pixels and an empirically 
          calibrated focal length.

          Once calculated, the controller node receives the offset values via ROS2 topics, and uses them to compute the necessary velocity commands to send to the drone. 
          The controller uses a simple Proportional control law to adjust the drone's position in real-time, ensuring that the target remains centered in the camera frame 
          and at a desired height.
        `,
      },
      {
        type: "code",
        heading: "Proportional Control Logic",
        language: "python",
        code: `def control_drone(self):
        # Controller Parameters
        KpHeight = 10
        KpSide = 0.2

        height_tolerance = 0.05
        Side_Tolerance = 20 # pixels
        up, forward, right, yaw = 0,0,0,0
        
        # Control Height
        if abs(self.target_z - self.z) > height_tolerance:
                error_z = self.target_z - self.z
                up = int(np.clip(KpHeight * error_z, -30, 30))
        
        # Control x displacement
        if abs(self.pxl_dist_x) > Side_Tolerance:
            errorX = -self.pxl_dist_x
            right = -int(np.clip(KpSide * errorX, -30, 30))

        if abs(self.pxl_dist_y) > Side_Tolerance:
            errorY = -self.pxl_dist_y
            forward = int(np.clip(KpSide * errorY, -30, 30))

        # Hard Altitude Ceiling
        if self.z > 0.95:
            up = -30
        
        self.drone.send_rc_control(right, forward, up, yaw)`,
      },
      {
        type: "text",
        heading: "Limitations and Future Work",
        body: `
          The system is designed to be robust to moderate changes in the target's position and orientation, allowing for smooth tracking of the target as it moves within the drone's field of view.
          The communication over WiFi faces some limitations, as the receiving and sending commands to the drone incurs significant latency. The testing scenario also faced uniform lighting,
          testing in different lighting conditions was not done and would be a good next step to improve the robustness of the system. Currently, the system is limited to tracking a single target at a time,
          if sight is lost, the drone will hover in place until the target is reacquired. Future improvements could include implementing a search pattern to reacquire lost targets, as well as integrating 
          more advanced computer vision techniques for multi-target tracking and occlusion handling.
        `,
      },
      {
        type: "gallery",
        images: [
          { src: "", caption: "DJI Tello Drone" },
          { src: "", caption: "Drone POV" },
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
