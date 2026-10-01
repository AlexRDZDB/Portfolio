/* =====================================================================
   PUBLICATIONS  —  every paper, thesis, or poster on the Publications page.

   To add one: copy a { ... } block, paste it into the list, and change
   the text. The list is shown in the order you write it (newest first
   is the usual convention).

   FIELDS
     title     Paper title.
     authors   Author list exactly as it appears on the paper.
     venue     Journal, conference, or institution, e.g. "IEEE ICRA 2026".
     year      Publication year (shown on the left).
     type      Short label, e.g. "Conference", "Journal", "Thesis", "Poster", "Preprint".
     status    Optional, e.g. "Under review" or "Accepted". Leave "" if published.
     abstract  Optional. Shown in a "Show abstract" drop-down. Use backticks
               ` ` so you can press Enter freely (blank line = new paragraph).
     links     Buttons under the entry: PDF, DOI, arXiv, code, video, slides...
               A PDF can live in assets/docs/, e.g. "assets/docs/my-paper.pdf".
   ===================================================================== */

// How your name is written in author lists. It is shown in bold wherever
// it appears. Add every spelling you've published under.
const MY_AUTHOR_NAMES = ["A. Rodriguez del Bosque", "Alejandro Rodriguez del Bosque", "Alejandro Rodriguez-del-Bosque", "Alejandro Rodriguez"];

const PUBLICATIONS = [
  {
    title: "In Situ Calibration and Uncertainty Quantification for Proprioceptive Wrench Estimation on Mobile Robots",
    authors: "Jacob Tomczeszyn, Francisco Montano, Dylan Zu, Kerwin Zhang, Alejandro Rodriguez, Junfeng Jiao, Luis Sentis",
    venue: "Human Centered Robotics Laboratory, The University of Texas at Austin",
    year: "2026",
    type: "Manuscript",
    status: "In preparation",
    abstract: "",
    links: [{ label: "Project", url: "project.html?id=bumpybot-wrench-estimation" }],
  },

  {
    title: "A Pipeline for Aligning 3D Gaussian Splatting Scenes with 3D Meshes in Robotics Simulations",
    authors: "Alfonso Solis-Diaz, Alejandro Rodriguez-del-Bosque, Arturo E. Ceron-Lopez",
    venue: "2025 Latin American Robotics Symposium (LARS)",
    year: "2025",
    type: "Conference",
    status: "Published",
    abstract: `
      This paper presents an automated pipeline that
      aligns and prunes 3DGS scenes against a reference 3D mesh
      through a systematic six-stage process, inside a 3D reconstruction workflow. Our methodology addresses key challenges
      in automated 3D reconstruction including adaptive parameter
      selection, noise handling, geometric preservation, and quality
      assessment. Experimental validation on three model reconstructions demonstrates the system’s effectiveness, including
      validation metrics from structural analysis, segmentation accuracy, surface reconstruction fidelity, and alignment precision.
      This integrated pipeline provides a computational foundation
      for automated 3D reconstruction of complex structures with
      photorealistic rendering and topological modeling, supporting
      applications in robotics, simulation & infrastructure inspection
    `,
    links: [
      { label: "PDF", url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11272964" },
    ],
  },
];
