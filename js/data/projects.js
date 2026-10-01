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
     cardImage Optional. A different image for the project card (projects
               list and home page). If left out, the card uses "image".
     imageFit  Optional. "contain" shows the whole cover image on the project
               page instead of cropping it (good for tall photos).
     featured  true = also show on the home page.
     hidden    Optional. true = leave it off the site (projects page, home
               page, prev/next links). Its page still opens from a direct
               link, so you can preview it. Set back to false to show it.
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
     { type: "carousel", heading: "...", body: "...", images: [{ src: "...", caption: "..." }] } sideways-scrolling strip
     { type: "video",   youtube: "VIDEO_ID", caption: "..." }    YouTube embed (the part after v=)
     { type: "specs",   heading: "...", rows: [["Label", "Value"], ...] }  two-column table
     { type: "code",    heading: "...", language: "cpp", code: `...` }     code snippet
   New block types can be added in js/components.js (see README.md).
   ===================================================================== */

const PROJECTS = [
  {
    id: "bumpybot-wrench-estimation",
    title: "BumpyBot: Sensing Contact Forces Through the Drivetrain",
    summary: `
      An in situ calibration that lets BumpyBot, a soft-bodied robotic
      wheelchair for children's hospitals, estimate where it is touched and
      how hard from its drivetrain torques alone, with no added force sensors.
    `,
    date: "Fall 2025",
    role: "Undergraduate Research Intern, Human Centered Robotics Laboratory (UT Austin)",
    tags: ["Calibration", "Contact Estimation", "Robust Regression", "Omnidirectional Robots", "Data Analysis"],
    image: "assets/images/projects/bumpybot/bumpybot.png",
    featured: true,
    links: [],
    sections: [
      {
        type: "text",
        heading: "Overview",
        body: `
          BumpyBot is a robotic wheelchair developed at UT Austin's Human
          Centered Robotics Laboratory for children's hospitals. Robots that
          move around people in cluttered spaces will inevitably bump into
          things, so BumpyBot has a soft body exterior. To react safely, it
          also needs to know where it was touched, how hard, and in which
          direction.

          The robot can estimate this from its drivetrain torques, with no
          extra sensors. But existing methods for omnidirectional bases assume
          the torque readings are ideal, which they never are on real
          hardware. We introduced an in situ calibration procedure: push the
          robot at known points with quasi-static test contacts, then use
          robust regression to fit a structured correction map for the torque
          readings. This calibrates the whole robot as it is, without
          calibrating each sensor individually or taking the robot apart.
        `,
      },
      {
        type: "specs",
        heading: "At a glance",
        rows: [
          ["Robot", "BumpyBot — soft-bodied robotic wheelchair on a three-wheeled omni base"],
          ["Lab", "Human Centered Robotics Laboratory, UT Austin"],
          ["Duration", "August 2025 – December 2025"],
          ["Estimates", "Contact location, force magnitude, and force direction"],
          ["Method", "In situ torque correction map fit with robust regression"],
          ["Outcome", "Co-authored research paper (in preparation)"],
        ],
      },
      {
        type: "list",
        heading: "What I did",
        items: [
          "Designed the calibration setup used to apply quasi-static test contacts to the robot's soft exterior.",
          "Designed the test protocol: 12 contact locations around the robot's perimeter at varying force levels.",
          "Ran the analysis and inference on the collected data to evaluate how accurately the calibrated robot estimates contact location, force magnitude, and direction.",
          "Co-authored the resulting paper, \"In Situ Calibration and Uncertainty Quantification for Proprioceptive Wrench Estimation on Mobile Robots.\"",
        ],
      },
      {
        type: "specs",
        heading: "Results",
        rows: [
          ["Contact localization error", "16 cm on average"],
          ["Force magnitude error", "20% on average (16% at high signal-to-noise ratio)"],
          ["Force direction error", "10° on average"],
          ["Test coverage", "12 perimeter locations, varying force levels"],
        ],
      },
    ],
  },

  {
    id: "hcrl-quadruped-rl",
    title: "Learning-Based Quadruped Locomotion",
    summary: `
      Research at UT Austin's Human Centered Robotics Laboratory: training
      reinforcement learning walking policies for quadrupeds in Isaac Lab
      that stay stable under external disturbances.
    `,
    date: "Fall 2025",
    role: "Undergraduate Research Intern, Human Centered Robotics Laboratory (UT Austin)",
    tags: ["Reinforcement Learning", "Isaac Lab", "Isaac Sim", "PyTorch", "Legged Locomotion"],
    image: "",
    featured: false,
    hidden: true,
    links: [],
    sections: [
      {
        type: "text",
        heading: "Overview",
        body: `
          Legged robots can go where wheeled robots can't, but keeping them
          stable on uneven ground or when they get pushed is hard to solve
          with hand-tuned controllers. Learning-based control trains a policy
          in simulation instead, letting the robot discover walking behavior
          that adapts to disturbances.

          As an undergraduate research intern at the Human Centered Robotics
          Laboratory at The University of Texas at Austin, I worked on
          learning-based control for embodied robotic systems, focusing on
          stability and adaptive behavior in dynamic environments.
        `,
      },
      {
        type: "specs",
        heading: "At a glance",
        rows: [
          ["Lab", "Human Centered Robotics Laboratory, UT Austin"],
          ["Duration", "August 2025 – December 2025"],
          ["Simulation", "NVIDIA Isaac Sim, Isaac Lab"],
          ["Learning", "Reinforcement learning with PyTorch"],
        ],
      },
      {
        type: "list",
        heading: "What I did",
        items: [
          "Designed and implemented reinforcement learning policies in Isaac Lab and PyTorch, achieving quadruped walking gaits that stay stable under external disturbances.",
          "Built and validated high-fidelity Isaac Sim environments for locomotion and navigation benchmarking.",
        ],
      },
    ],
  },

  {
    id: "puzzlebot-software",
    title: "Autonomous Forklift Warehouse Operations",
    summary: `
      A differential-drive robot with a custom forklift that navigates a
      warehouse, picks up pallets, and delivers them to the correct trailer bay.
    `,
    date: "Spring 2026",
    role: "Team Member — autonomy, integration, mechanical design",
    tags: ["ROS 2", "Python", "FPGA", "Computer Vision", "LiDAR", "Fusion360"],
    image: "assets/images/projects/puzzlebot/puzzlebot.jpeg",
    featured: true,
    links: [
      { label: "Project Report", url: "assets/docs/forklift-report.pdf" },
      { label: "GitHub", url: "https://github.com/Slamurais/puzzlebot_software" },
      { label: "Project Presentation", url: "https://canva.link/kqebrmwudzr1xro" },
    ],
    sections: [
      {
        type: "text",
        heading: "Overview",
        body: `
          Autonomous warehouse robots take over repetitive, physically demanding
          work so people can focus on higher-level tasks. For our capstone at
          Tecnológico de Monterrey, a team of five turned a Manchester Robotics
          PuzzleBot into a small-scale autonomous forklift: it plans a route
          through a warehouse, finds and aligns with a pallet using QR codes,
          lifts it, identifies the correct trailer bay with a YOLO logo detector,
          and drops the pallet off — all coordinated by a 16-state mission
          state machine.

          The forklift is driven by a geared DC motor controlled from an FPGA
          (PWM, quadrature encoder counting), which talks to the Jetson over SPI
          so ROS 2 can command lift heights directly.
        `,
      },
      {
        type: "specs",
        heading: "At a glance",
        rows: [
          ["Platform", "Manchester Robotics PuzzleBot NVIDIA Jetson Edition"],
          ["Compute", "NVIDIA Jetson Nano + Tang Nano 20K FPGA + ESP-32"],
          ["Actuators", "2x brushed DC drive motors, geared DC motor for the forklift"],
          ["Sensors", "Camera, 2D LiDAR, IMU, wheel encoders, forklift encoder"],
          ["Software", "ROS 2 Humble, OpenCV, YOLO, Gazebo, Docker"],
          ["Navigation", "Custom A* planner, Pure Pursuit, Bug 2 obstacle avoidance"],
        ],
      },
      {
        type: "list",
        heading: "What I did",
        items: [
          "Contributed to the ROS 2 node architecture.",
          "Implemented Bug 2 obstacle avoidance, switching between goal-seeking and wall-following when the LiDAR detects an obstacle.",
          "Wrote the ROS2 control logic for closed-loop wheel velocity control.",
          "Aided in implementation of state machine for autonomous warehouse operations.",
          "Designed and manufactured multiple iterations of the forklift attachment in Fusion360.",
          "Architected the control pipeline for controlling the forklift attachment using an FPGA."
        ],
      },
      {
        type: "text",
        heading: "From simulation to the real robot",
        body: `
          Physical test time was limited, so we built a Gazebo digital twin of
          the PuzzleBot and the warehouse: the robot with its forklift, camera,
          LiDAR, and IMU, plus racks, pallets with QR codes, ArUco markers, and
          trailer bays. The same ROS 2 launch files ran in simulation and on the
          robot, so navigation, perception, the forklift controller, and the
          mission state machine could be developed and tested in Gazebo before
          moving them to hardware.

          On the real robot, we got every part of the system working on its
          own: localization and navigation, Bug 2 obstacle avoidance, QR pallet
          alignment, YOLO bay identification, and FPGA forklift control over SPI.
          However, late-stage interfacing issues between these subsystems kept
          us from running a complete end-to-end mission on the physical robot.
          The full mission ran in simulation, as shown below.
        `,
      },
      {
        type: "carousel",
        heading: "State machine in action",
        body: "Each clip shows one state of the robot's task, in order. Scroll sideways to step through them.",
        images: [
          { src: "assets/images/projects/puzzlebot/puzzlebot-functionality/1calcroute.gif", caption: "1. Calculate route" },
          { src: "assets/images/projects/puzzlebot/puzzlebot-functionality/2goto.gif", caption: "2. Go to Pallet Rack" },
          { src: "assets/images/projects/puzzlebot/puzzlebot-functionality/3align.gif", caption: "3. Align with Pallet" },
          { src: "assets/images/projects/puzzlebot/puzzlebot-functionality/4secure.gif", caption: "4. Secure Pallet" },
          { src: "assets/images/projects/puzzlebot/puzzlebot-functionality/5navtozone.gif", caption: "5. Navigate to drop-off zone" },
          { src: "assets/images/projects/puzzlebot/puzzlebot-functionality/6identifyarea.gif", caption: "6. Identify correct drop-off area" },
          { src: "assets/images/projects/puzzlebot/puzzlebot-functionality/7deposit.gif", caption: "7. Deposit Pallet" },
        ],
      },
      {
        type: "text",
        heading: "Results & lessons learned",
        body: `
          The clips above show each stage of the pick-up-and-deliver mission:
          route planning, QR alignment, lifting, YOLO bay identification, and
          drop-off. The FPGA forklift controller held a stable 1 kHz control loop
          regardless of load on the Jetson, with stall detection and calibrated
          top/bottom limits.

          The hardest problems were physical, not algorithmic. Brownouts reset
          the robot until we split the Jetson, the Hackerboard, and the lift
          motor onto separate power supplies. A DC motor with a relative encoder
          caused many edge cases that a continuous-rotation servo would have
          avoided. And with eleven teams sharing one test arena, we learned to
          make the most of short hardware sessions by testing everything we
          could in simulation first.
        `,
      },
    ],
  },

  {
    id: "anymal-d",
    title: "ANYmal D Quadruped for Inspection & Digital Twins",
    summary: `
      Research with an ANYbotics ANYmal D legged robot toward inspecting
      natural areas and turning them into Gaussian Splatting digital twins.
    `,
    date: "Fall 2025 - Spring 2026",
    role: "RASTec Founding Member & Vice-President — documentation, operation, simulation testing",
    tags: ["ANYmal D", "Legged Robots", "Gaussian Splatting", "Digital Twins", "Gazebo"],
    image: "assets/images/projects/anymal/ANYmal-D.jpeg",
    imageFit: "contain",
    cardImage: "assets/images/projects/anymal/ANYmal-Cover.jpeg",
    featured: true,
    links: [
      { label: "Paper (LARS 2025)", url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11272964" },
    ],
    sections: [
      {
        type: "text",
        heading: "Overview",
        body: `
          The ANYmal D is an industrial quadruped robot built to inspect sites
          that are hard or dangerous for people to reach, such as plants,
          offshore platforms, and tunnels. Through RASTec, our local IEEE
          Robotics and Automation Society student branch, which I helped found,
          I worked with the robot as part of a research effort on autonomous
          inspection.

          The long-term goal is for the ANYmal to walk through natural areas,
          where terrain is too rough for wheeled robots, and capture the data
          needed to build photorealistic digital twins of them using 3D Gaussian
          Splatting. These digital twins can then be used to monitor an area
          over time or to test robots in simulation before sending them into
          the field.

          My work focused on making the platform usable for the team: learning
          how the system works, writing documentation for future members,
          getting certified to operate it, and testing inspection procedures in
          simulation before running them on the real robot.
        `,
      },
      {
        type: "specs",
        heading: "At a glance",
        rows: [
          ["Platform", "ANYbotics ANYmal D quadruped"],
          ["Organization", "RASTec (IEEE Robotics and Automation Society student branch)"],
          ["Certifications", "ANYmal Operator Certification, ANYmal Safety Certification"],
          ["Simulation", "Gazebo, integrated into the ANYmal software package"],
        ],
      },
      {
        type: "list",
        heading: "What I did",
        items: [
          "As founding member and vice-president of RASTec, documented the ANYmal D system to give future members a starting point for development.",
          "Earned the ANYmal Operator Certification and the ANYmal Safety Certification.",
          "Tested industrial inspection procedures in the Gazebo simulation integrated into the ANYmal software package.",
          "Co-authored a LARS 2025 paper on aligning 3D Gaussian Splatting scenes with 3D meshes for robotics simulation.",
        ],
      },
      {
        type: "text",
        heading: "Research: Gaussian Splatting for robotics simulation",
        body: `
          3D Gaussian Splatting (3DGS) produces photorealistic reconstructions of
          real environments, but those reconstructions are noisy and are not
          aligned with the meshes a physics simulator needs. Our paper presents
          a six-stage pipeline that automatically aligns and prunes a 3DGS scene
          against a reference 3D mesh. This combines photorealistic rendering
          with accurate geometry. It is a building block for the project's
          goal: digital twins of real natural areas, captured by the ANYmal,
          that are realistic enough to test robots in simulation.

          We validated the pipeline on three reconstructions, measuring
          structural quality, segmentation accuracy, surface reconstruction
          fidelity, and alignment precision.
        `,
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
    image: "assets/images/projects/drone_project/dji-robomaster-tt-tello-talent.jpg",
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
