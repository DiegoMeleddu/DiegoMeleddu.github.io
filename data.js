/* =========================================================
   DATA.JS — Edit this file to update the whole website.
   ========================================================= */

const SITE = {
  name: "Diego Meleddu",
email: "meleddudiego@gmail.com",
cv: "asset/Diego_Meleddu_CV.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/diego-meleddu-a3a4851b8/",
    github: "https://github.com/DiegoMeleddu",
    itch: "https://alamorte.itch.io/"
  }
};

/* ---------------------------------------------------------
   PROJECTS
   type: "featured" (main grid) | "wip" (In Development)
   video: short MP4 loop (plays on hover). cover: image.
   Leave both empty to show a placeholder.
   --------------------------------------------------------- */
const PROJECTS = [
  {
    id: "rabbit-heist",
    type: "featured",
    title: "Rabbit Heist",
    status: "Jam build · Playable",
    event: "Mini Jam 181: Rabbits",
    engine: "Unreal Engine 5",
    language: "Blueprints",
    role: "Solo Developer — Gameplay & AI",
    team: "Solo",
    duration: "Game jam",
    platform: "Windows",
    summary: "Stealth-action game where farmers hunt a small, clever rabbit. NPC behaviour built with Behavior Trees, Blackboards and AI Perception.",
    cover: "https://img.itch.zone/aW1nLzIwNDk3MzY4LnBuZw==/original/542zhD.png",
    video: "",                                   // e.g. "assets/rabbit-heist-ai.mp4"
    links: { itch: "https://alamorte.itch.io/rabbit-heist" },
    tags: ["UE5", "Behavior Trees", "AI Perception", "Stealth"],
    overview: [
      "Rabbit Heist is a stealth-action game made for my first game jam. You play as a weak but clever rabbit that has to sneak into a farm each day, steal as many vegetables as possible and make it back to the burrow without getting caught.",
      "My main focus was the enemy AI: the farmers needed to feel threatening but readable, so the player can learn their patterns and outsmart them."
    ],
    built: [
      "NPC AI built with Behavior Trees and Blackboards, with distinct patrol, investigate, chase and return-to-patrol behaviours.",
      "AI Perception (sight and hearing) so farmers react to the rabbit entering their line of sight or making noise.",
      "NavMesh-based movement with custom Behavior Tree tasks, services and decorators driving the chase logic.",
      "Day-based core loop: collect vegetables, return to the burrow to bank them, survive to the next day.",
      "Packaged and shipped a Windows build within the jam deadline."
    ],
    breakdown: [
      { title: "AI state flow", text: "The Blackboard stores the target, last known location and alert state. Perception events update these keys, and the Behavior Tree switches between branches through decorators — so the AI logic stays modular and easy to tune." },
      { title: "Detection & fairness", text: "When the farmer loses sight of the rabbit, it moves to the last known location and searches before giving up. This gives the player a window to escape and makes stealth feel fair rather than random." }
    ],
    learned: "Structuring AI with Behavior Trees instead of hard-coded logic, debugging AI live with the Gameplay Debugger, and scoping a complete game to fit a jam deadline.",
    code: null
  },
  {
    id: "biscuits-defence",
    type: "featured",
    title: "Biscuits Defence",
    status: "Released",
    event: "Brackeys Game Jam 2025.2",
    engine: "Unreal Engine 5",
    language: "Blueprints",
    role: "Solo Developer — Gameplay & Enemy Systems",
    team: "Solo",
    duration: "Game jam",
    platform: "Windows",
    summary: "Wave-based defence game: protect the Mother Biscuit from endless jelly cubes. I built the wave spawner, enemy behaviour and spawn animations.",
    cover: "https://img.itch.zone/aW1nLzIyOTc2MTMxLnBuZw==/original/a0m%2Fha.png",
    video: "",
    links: { itch: "https://alamorte.itch.io/biscuits-fight-for-defence" },
    tags: ["UE5", "Wave Spawner", "Enemy AI", "Game Feel"],
    overview: [
      "A fast arcade defence game made for Brackeys Game Jam 2025.2. Waves of jelly cubes try to reach the Mother Biscuit, and the player has to stop them before she is overwhelmed.",
      "The project focused on systems that scale: a spawner that can generate increasingly difficult waves and enemies whose behaviour stays readable even when the screen gets crowded."
    ],
    built: [
      "Wave spawning system with configurable spawn points, spawn intervals and difficulty that escalates wave after wave.",
      "Enemy behaviour for the jelly cubes: target acquisition, movement towards the Mother Biscuit, attack on contact and death handling.",
      "Spawn and hit animations (squash-and-stretch driven by Timelines and curves) to improve feedback and readability.",
      "Health and damage flow, lose condition and HUD built with UMG."
    ],
    breakdown: [
      { title: "Data-driven waves", text: "Each wave is defined by a small set of parameters (enemy count, spawn rate, delay between waves), so balancing the difficulty curve meant tweaking values rather than rewriting logic." },
      { title: "Game feel", text: "Spawn animations telegraph where enemies will appear, giving the player a moment to react. Small details like this made the game feel much more responsive during playtests." }
    ],
    learned: "Designing reusable spawner logic, balancing difficulty through data, and how much animation and feedback contribute to gameplay clarity.",
    code: null
  },
  {
    id: "one-copper",
    type: "featured",
    title: "One Copper",
    status: "Jam build · Updated",
    event: "Brackeys Game Jam 2026.2",
    engine: "Godot",
    language: "GDScript",
    role: "Solo Developer",
    team: "Solo",
    duration: "Game jam + post-jam update",
    platform: "Web (HTML5)",
    summary: "Narrative card game: play cards to build an alibi and convince a suspicious dragon you didn't steal her copper coin.",
    cover: "https://img.itch.zone/aW1nLzI5NTQwNDEyLnBuZw==/original/1SiaH3.png",
    video: "",
    links: { itch: "https://alamorte.itch.io/one-chopper" },
    tags: ["Godot", "GDScript", "Card System", "UI", "Web"],
    overview: [
      "A dragon is missing one copper coin. She doesn't care about the coin — she cares that someone thought she wouldn't notice. The player has to play cards to build a believable alibi and escape her wrath.",
      "Built in Godot with GDScript to practise a different engine and a UI-heavy, systems-driven genre."
    ],
    built: [
      "Card system with deck, hand and play area, with card data defined as reusable resources.",
      "Alibi logic: each played card adds a claim that the dragon cross-checks against her Register.",
      "UI-driven gameplay: the dragon's Register (R) and a Glossary (H) panel with hotkeys, plus fullscreen toggle.",
      "HTML5 export, playable directly in the browser on itch.io.",
      "Added an onboarding tutorial after player feedback pointed out the rules were unclear."
    ],
    breakdown: [
      { title: "Iterating on feedback", text: "Early players liked the art but didn't understand the rules. I added a tutorial at the start of the game — a small but important lesson in onboarding and readability." }
    ],
    learned: "Working outside Unreal, structuring a UI-heavy game in Godot's node/scene system, and responding to player feedback after release.",
    code: null
  },
  {
    id: "maze-solitaire",
    type: "featured",
    title: "Maze Solitaire",
    status: "In polish",    
    event: "",
    engine: "Godot",
    language: "GDScript",
    role: "Solo Developer",
    team: "Solo",
    duration: "",
    platform: "PC",
    summary: "Puzzle game blending solitaire with a shifting-tile labyrinth: the cards you play decide how the maze moves and where you can go.",
    cover: "asset/maze-solitaire/cover.jpg",
    video: "",
    gallery: [
      { src: "asset/maze-solitaire/shot-1.jpg", caption: "Shifting a row of tiles" },
      { src: "asset/maze-solitaire/shot-2.jpg", caption: "Card-driven turn" },
      { src: "asset/maze-solitaire/shot-3.jpg", caption: "Valid paths highlighted after a shift" }
    ],
    links: {},
    tags: ["Godot", "GDScript", "Grid Systems", "Puzzle"],
    overview: [
      "A puzzle game that mixes the rules of solitaire with a shifting labyrinth inspired by Ravensburger's board game Labyrinth. Every move changes the board, so planning ahead is key.",
      "Currently unreleased and being polished before publishing on itch.io."
    ],
    built: [
      "Grid-based board where inserting a tile shifts an entire row or column.",
      "Card-driven turns: solitaire-style cards determine which moves are available each turn.",
      "Reachability check over connected tiles to highlight valid paths after each shift.",
      "Turn flow, win/lose conditions and UI feedback for valid and invalid moves."
    ],
    breakdown: [],
    learned: "",
    code: null
  },
  {
    id: "action-rpg",
    type: "wip",
    title: "Third-Person Action RPG",
    status: "In development",
    event: "",
    engine: "Unreal Engine 5",
    language: "C++ & Blueprints",
    role: "Solo Developer",
    team: "Solo",
    duration: "Ongoing",
    platform: "PC",
    summary: "Third-person melee action RPG built in C++, based on Stephen Ulibarri's Unreal Engine 5 C++ course and extended with my own systems.",
    cover: "asset/action-rpg/cover.jpg",
    video: "",
    links: {},
    note: "Built while following Stephen Ulibarri's Unreal Engine 5 C++ course on Udemy.",
    tags: ["UE5", "C++", "Combat", "Enemy AI", "Animation"],
    overview: [
      "A third-person action RPG with melee combat, enemies and an open environment. The core of the project is written in C++, with Blueprints used for content and tuning."
    ],
    built: [
      "C++ character with Enhanced Input, camera setup and locomotion driven by Animation Blueprints.",
      "Melee combat: weapon equip and attach, attack montages, trace-based hit detection, hit reactions and directional damage.",
      "Enemy AI in C++ with patrol, chase and attack states, using perception and NavMesh movement.",
      "Attribute component for health and stamina, with HUD and health bars in UMG.",
      "Interactables: pickups, treasure and breakable props using Chaos physics."
    ],
    breakdown: [],
    learned: "",
    code: null
  },
  {
    id: "ivy-growth",
    type: "wip",
    title: "Ivy Growth — Puzzle Mechanic",
    status: "Prototype",
    event: "",
    engine: "Unreal Engine 5",
    language: "C++ / Blueprints",
    role: "Solo Developer",
    team: "Solo",
    duration: "Ongoing",
    platform: "PC",
    summary: "Puzzle mechanic where the player steers a growing ivy across surfaces to reach goals and solve environmental puzzles.",
    cover: "asset/ivy-growth/cover.jpg.jpg",
    video: "",
    links: {},
    note: "Prototype in active development — this page is updated as the mechanic evolves.",
    tags: ["UE5", "Procedural", "Splines", "Puzzle Mechanic"],
    overview: [
      "Instead of controlling a character, the player controls the growth of an ivy plant. The ivy extends from its tip, climbs walls and wraps around objects, and the level becomes a puzzle about where and how to grow."
    ],
    built: [
      "Player-controlled growth: the ivy extends from its tip in the direction the player steers.",
      "Surface detection with traces so growth follows walls, floors and ceilings.",
      "Growth path stored as a spline and rendered procedurally with spline meshes.",
      "Growth rules and limits (length/energy) that create puzzle constraints."
    ],
    breakdown: [],
    learned: "",
    code: null
    /* Example code sample:
    code: {
      title: "IvyGrowthComponent.cpp — growth step",
      lang: "cpp",
      snippet: `void UIvyGrowthComponent::Grow(float DeltaTime) { ... }`
    }
    */
  }
];

/* ---------------------------------------------------------
   SMALL JAM GAMES (compact grid, link to itch)
   --------------------------------------------------------- */
const JAMS = [
  {
    title: "SpaceMemory",
    event: "Jame Gam #50",
    engine: "Unreal Engine",
    summary: "Space-themed memory card game. My second game jam, focused on practising Unreal Engine fundamentals.",
    cover: "https://img.itch.zone/aW1nLzIxODAxMDYxLnBuZw==/original/NZMTgT.png",
    link: "https://alamorte.itch.io/spacememory"
  },
  {
    title: "Flight Invaders",
    event: "One Game a Month #49",
    engine: "Unreal Engine",
    summary: "Compact space shooter: player movement, projectiles, enemy waves and scoring.",
    cover: "https://img.itch.zone/aW1nLzIyMzcxNDU5LnBuZw==/original/ZtyuNI.png",
    link: "https://alamorte.itch.io/flight-invaders"
  },
  {
    title: "SpamSchrödinger",
    event: "Jame Gam #54",
    engine: "Unreal Engine",
    summary: "Button-mashing arcade game: spam the keys to keep the poison away from the box.",
    cover: "https://img.itch.zone/aW1nLzIzNDY0MzcwLnBuZw==/original/90r%2FHQ.png",
    link: "https://alamorte.itch.io/spams"
  }
];

/* ---------------------------------------------------------
   SKILLS
   --------------------------------------------------------- */
const SKILLS = [
  {
    group: "Gameplay Programming",
    text: "Core focus. Gameplay systems in C++, exposed to Blueprints for fast iteration.",
    items: ["C++", "Unreal Engine 5", "Blueprints", "Gameplay Framework", "Enhanced Input", "Animation Blueprints", "UMG"]
  },
  {
    group: "Game AI",
    text: "Enemy and NPC behaviour that is readable, tunable and fun to play against.",
    items: ["Behavior Trees", "Blackboards", "AI Perception", "NavMesh", "State-driven AI in C++"]
  },
  {
    group: "Other Engines",
    text: "Comfortable switching engines and languages when a project needs it.",
    items: ["Godot", "GDScript", "Unity", "C#"]
  },
  {
    group: "Tools & Workflow",
    text: "Version control, prototyping tools and a data-driven, QA-minded approach.",
    items: ["Git", "Fork", "Blender", "Figma", "Data Analysis", "QA & Auditing"]
  }
];

/* ---------------------------------------------------------
   CAREER & EDUCATION
   --------------------------------------------------------- */
const EXPERIENCE = [
  {
    when: "Aug 2024 — Present",
    title: "Independent Game Developer",
    org: "Self-employed · Freelance",
    text: "Developing gameplay systems in Unreal Engine 5 (C++ & Blueprints), shipping game jam titles and building personal projects focused on AI, combat and procedural mechanics."
  },
  {
    when: "",
    title: "Game Development — Programming Track",
    org: "Event Horizon School of Game Development",
    text: "Game programming fundamentals, C++ and engine workflows, team-based game projects."
  },
  {
    when: "Jul 2019 — Jul 2023",
    title: "Process Specialist & Data Analyst",
    org: "Amazon Logistics · Torrazza Piemonte, Italy",
    text: "Quality control and audits using proprietary software, data analysis and process optimisation in a high-pressure, high-volume environment."
  },
  {
    when: "",
    title: "Computer Science",
    org: "",
    text: "Background in programming, algorithms and software development."
  }
];

/* status: "completed" | "progress" | "planned" */
const COURSES = [
  { title: "Unreal Engine 5 C++ Game Development", provider: "Udemy · Stephen Ulibarri", status: "completed", focus: "C++ gameplay, combat, enemy AI, animation and UI in UE5." },
  { title: "Gameplay Ability System (GAS) in UE5", provider: "Udemy · Stephen Ulibarri", status: "progress", focus: "Abilities, attributes, gameplay effects and tags." },
  { title: "Multiplayer in Unreal Engine 5 C++", provider: "Udemy · Stephen Ulibarri", status: "planned", focus: "Replication, RPCs, sessions and networked gameplay." },
  { title: "C++ & Software Development", provider: "Udemy · Multiple certifications", status: "completed", focus: "Modern C++, OOP and software engineering practices." }
];