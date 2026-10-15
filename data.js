/* =========================================================
   DATA.JS — Edit this file to update the whole website.
   PROJECTS  type: "featured" (Selected work) | "wip" (In development)
             cover: image · video: short MP4 loop · gallery / compare / styles: optional
   COURSES   status: "completed" | "progress" | "planned"
   ========================================================= */

const SITE = {
  "name": "Diego Meleddu",
  "email": "meleddudiego@gmail.com",
  "cv": "asset/Diego_Meleddu_CV.pdf",
  "links": {
    "linkedin": "https://www.linkedin.com/in/diego-meleddu-a3a4851b8/",
    "github": "https://github.com/DiegoMeleddu",
    "itch": "https://alamorte.itch.io/"
  }
};

const PROJECTS = [
  {
    "id": "painterly-post-process",
    "type": "featured",
    "title": "Painted Light — Painterly Post-Process",
    "status": "Tech study · Complete",
    "event": "",
    "engine": "Unreal Engine 5.5",
    "language": "Materials · HLSL",
    "role": "Solo Developer — Rendering / Tech Art",
    "team": "Solo",
    "duration": "Personal R&D",
    "platform": "PC",
    "summary": "Post-process that makes any 3D scene look hand-painted.",
    "cover": "asset/painterly-post-process/after.jpg",
    "video": "",
    "compare": {
      "before": "asset/painterly-post-process/before.jpg",
      "after": "asset/painterly-post-process/after.jpg",
      "beforeLabel": "Default UE5 render",
      "afterLabel": "Painted Light"
    },
    "gallery": [
      {
        "src": "asset/painterly-post-process/after.jpg",
        "caption": "Final look"
      },
      {
        "src": "asset/painterly-post-process/before.jpg",
        "caption": "Same scene, default render"
      },
      {
        "src": "asset/painterly-post-process/iteration.jpg",
        "caption": "Earlier iteration, brushwork only"
      }
    ],
    "links": {},
    "tags": [
      "UE5.5",
      "Post-Process",
      "HLSL",
      "Tech Art"
    ],
    "overview": [
      "A screen effect on top of the whole frame: shadows turn cool, lights turn warm and the image breaks into brushstrokes while edges stay sharp. Works on any level, controlled with a few sliders."
    ],
    "pipeline": [
      {
        "title": "3D scene",
        "text": "Rendered normally by Unreal"
      },
      {
        "title": "Light into bands",
        "text": "Shadows and lights become colored zones",
        "highlight": true
      },
      {
        "title": "Brushstrokes",
        "text": "A paint filter turns the image into strokes",
        "highlight": true
      }
    ],
    "built": [
      "Two post-process materials that work on any scene, with no changes to its objects.",
      "Colored light bands: cool shadows and warm lights instead of plain darkening.",
      "A paint filter (Kuwahara) written in HLSL that creates brushstrokes but keeps edges crisp.",
      "Simple sliders for art direction, packaged in one folder that drops into any project."
    ],
    "challenges": [
      {
        "problem": "The sky turned black",
        "solution": "Added a mask so the effect skips areas without a surface, like the sky."
      },
      {
        "problem": "Colors flickered while moving",
        "solution": "Locked the camera exposure so the bands stay stable."
      }
    ],
    "next": [
      "Brushstrokes that follow the shapes in the image",
      "Painted outlines around objects"
    ],
    "learned": "How Unreal builds a frame and where a screen effect can step in, writing shader code inside materials, and testing every step on its own so problems are caught early."
  },
  {
    "id": "style-library",
    "type": "featured",
    "title": "One Scene, Four Styles — Post-Process Look Library",
    "status": "Tech study · Complete",
    "event": "",
    "engine": "Unreal Engine 5.5",
    "language": "Materials · HLSL · Blueprints",
    "role": "Solo Developer — Rendering / Tech Art",
    "team": "Solo",
    "duration": "Personal R&D",
    "platform": "PC",
    "summary": "One scene, four 2D styles — pixel art, halftone, ink and watercolor — switched live.",
    "cover": "asset/style-library/ink.jpg",
    "video": "",
    "styles": [
      {
        "key": "0",
        "label": "Original",
        "src": "asset/style-library/original.jpg",
        "text": "The untouched Unreal scene."
      },
      {
        "key": "1",
        "label": "Pixel art",
        "src": "asset/style-library/pixel-art.jpg",
        "text": "The screen is split into big square pixels and the colors are limited, like an early console game."
      },
      {
        "key": "2",
        "label": "Halftone",
        "src": "asset/style-library/halftone.jpg",
        "text": "A comic-print look: ink dots that grow bigger where the image is darker."
      },
      {
        "key": "3",
        "label": "Ink",
        "src": "asset/style-library/ink.jpg",
        "text": "A pen drawing on paper: hatching lines for shading and inked outlines around objects."
      },
      {
        "key": "4",
        "label": "Watercolor",
        "src": "asset/style-library/watercolor.jpg",
        "text": "Soft color patches, a lighter wash, darker pigment at the edges and paper grain. Built almost entirely from parts of Painted Light."
      }
    ],
    "links": {},
    "tags": [
      "UE5.5",
      "Post-Process",
      "HLSL",
      "Blueprints",
      "Tech Art"
    ],
    "overview": [
      "Four looks built as post-process materials on one shared base. A single global value picks the active style, so they swap live with the number keys."
    ],
    "pipeline": [
      {
        "title": "Four looks",
        "text": "All loaded at the same time"
      },
      {
        "title": "One switch",
        "text": "A single global value picks the style",
        "highlight": true
      },
      {
        "title": "Live swap",
        "text": "Number keys 0–4 change it while playing",
        "highlight": true
      }
    ],
    "built": [
      "Four post-process looks: pixel art, halftone, ink hatching and watercolor.",
      "One shared base graph reused by every style, so new looks are fast to add.",
      "Live style switching from a Blueprint, driven by a single global parameter.",
      "Reusable shader pieces in HLSL: outline detection from depth and the paint filter from Painted Light."
    ],
    "challenges": [
      {
        "problem": "Old effects stacked on the new ones",
        "solution": "Gave the library its own level and post-process setup."
      },
      {
        "problem": "Hatching came out completely white",
        "solution": "Fixed a wrong input by checking each node on screen, one at a time."
      }
    ],
    "next": [
      "Only run the active style, to save performance",
      "Sharper outlines inside objects, not just around them"
    ],
    "learned": "Designing effects as reusable building blocks, connecting materials to gameplay through Blueprints, and how much faster new looks come together once the base is shared."
  },
  {
    "id": "env-material",
    "type": "featured",
    "title": "Paintable Walls — Layered Environment Material",
    "status": "Tech study · Complete",
    "event": "",
    "engine": "Unreal Engine 5.5",
    "language": "Materials",
    "role": "Solo Developer — Tech Art",
    "team": "Solo",
    "duration": "Personal R&D",
    "platform": "PC",
    "summary": "Layered material: paint stone, brick and wood directly in the level.",
    "cover": "asset/env-material/painted-scene.jpg",
    "video": "",
    "gallery": [
      {
        "src": "asset/env-material/painted-scene.jpg",
        "caption": "Brick, wood and stone painted in the level, shown with the Painted Light post-process"
      }
    ],
    "links": {},
    "tags": [
      "UE5.5",
      "Materials",
      "Vertex Paint",
      "Material Functions",
      "Tech Art"
    ],
    "overview": [
      "One material for walls and props. Stone is the base; brick and wood are painted on with vertex colors, and the transitions follow the stone shapes instead of a flat fade."
    ],
    "pipeline": [
      {
        "title": "Three layers",
        "text": "Stone, brick and wood from one reusable building block"
      },
      {
        "title": "Paint in the level",
        "text": "Red paints brick, green paints wood",
        "highlight": true
      },
      {
        "title": "Natural edges",
        "text": "Layers blend along the stone shapes",
        "highlight": true
      }
    ],
    "built": [
      "One reusable layer function used three times, so a fourth layer is just one more node.",
      "Vertex-paint blending: artists paint brick and wood straight onto the mesh in the level.",
      "Height-based transitions that follow the stones and the grout instead of a linear cross-fade.",
      "Optional triplanar mode for meshes without clean UVs, switched off at no runtime cost when unused."
    ],
    "challenges": [
      {
        "problem": "Fixes never reached the master",
        "solution": "Two copies of the function were open; edited the one the master actually uses."
      },
      {
        "problem": "Meshes came out fully covered in brick",
        "solution": "Imported vertices were white; cleared them to black before painting."
      }
    ],
    "next": [
      "Real height maps for even more accurate blends",
      "Automatic moss or dust on top-facing surfaces"
    ],
    "learned": "Building materials as tools for other people: reusable functions, clear parameters, and always checking the result where it is actually used, not in the preview."
  },
  {
    "id": "rabbit-heist",
    "type": "featured",
    "title": "Rabbit Heist",
    "status": "Jam build · Playable",
    "event": "Mini Jam 181: Rabbits",
    "engine": "Unreal Engine 5",
    "language": "Blueprints",
    "role": "Solo Developer — Gameplay & AI",
    "team": "Solo",
    "duration": "Game jam",
    "platform": "Windows",
    "summary": "Stealth game with farmer AI built on Behavior Trees and AI Perception.",
    "cover": "https://img.itch.zone/aW1nLzIwNDk3MzY4LnBuZw==/original/542zhD.png",
    "video": "",
    "links": {
      "itch": "https://alamorte.itch.io/rabbit-heist"
    },
    "tags": [
      "UE5",
      "Behavior Trees",
      "AI Perception",
      "Stealth"
    ],
    "overview": [
      "My first game jam. Sneak into a farm to steal vegetables while farmers patrol, investigate noises and chase you when they spot you."
    ],
    "built": [
      "NPC AI built with Behavior Trees and Blackboards, with distinct patrol, investigate, chase and return-to-patrol behaviours.",
      "AI Perception (sight and hearing) so farmers react to the rabbit entering their line of sight or making noise.",
      "NavMesh-based movement with custom Behavior Tree tasks, services and decorators driving the chase logic.",
      "Day-based core loop: collect vegetables, return to the burrow to bank them, survive to the next day."
    ],
    "breakdown": [
      {
        "title": "AI state flow",
        "text": "The Blackboard stores the target, last known location and alert state. Perception events update these keys, and the Behavior Tree switches between branches through decorators — so the AI logic stays modular and easy to tune."
      },
      {
        "title": "Detection & fairness",
        "text": "When the farmer loses sight of the rabbit, it moves to the last known location and searches before giving up. This gives the player a window to escape and makes stealth feel fair rather than random."
      }
    ],
    "learned": "Structuring AI with Behavior Trees instead of hard-coded logic, debugging AI live with the Gameplay Debugger, and scoping a complete game to fit a jam deadline.",
    "code": null
  },
  {
    "id": "biscuits-defence",
    "type": "featured",
    "title": "Biscuits Defence",
    "status": "Released",
    "event": "Brackeys Game Jam 2025.2",
    "engine": "Unreal Engine 5",
    "language": "Blueprints",
    "role": "Solo Developer — Gameplay & Enemy Systems",
    "team": "Solo",
    "duration": "Game jam",
    "platform": "Windows",
    "summary": "Wave defence: spawner, enemy behaviour and spawn animations.",
    "cover": "https://img.itch.zone/aW1nLzIyOTc2MTMxLnBuZw==/original/a0m%2Fha.png",
    "video": "",
    "links": {
      "itch": "https://alamorte.itch.io/biscuits-fight-for-defence"
    },
    "tags": [
      "UE5",
      "Wave Spawner",
      "Enemy AI",
      "Game Feel"
    ],
    "overview": [
      "Waves of jelly cubes attack the Mother Biscuit. The focus was a scalable wave spawner and enemy behaviour that stays readable on a crowded screen."
    ],
    "built": [
      "Wave spawning system with configurable spawn points, spawn intervals and difficulty that escalates wave after wave.",
      "Enemy behaviour for the jelly cubes: target acquisition, movement towards the Mother Biscuit, attack on contact and death handling.",
      "Spawn and hit animations (squash-and-stretch driven by Timelines and curves) to improve feedback and readability.",
      "Health and damage flow, lose condition and HUD built with UMG."
    ],
    "breakdown": [
      {
        "title": "Data-driven waves",
        "text": "Each wave is defined by a small set of parameters (enemy count, spawn rate, delay between waves), so balancing the difficulty curve meant tweaking values rather than rewriting logic."
      },
      {
        "title": "Game feel",
        "text": "Spawn animations telegraph where enemies will appear, giving the player a moment to react. Small details like this made the game feel much more responsive during playtests."
      }
    ],
    "learned": "Designing reusable spawner logic, balancing difficulty through data, and how much animation and feedback contribute to gameplay clarity.",
    "code": null
  },
  {
    "id": "one-copper",
    "type": "featured",
    "title": "One Copper",
    "status": "Jam build · Updated",
    "event": "Brackeys Game Jam 2026.2",
    "engine": "Godot",
    "language": "GDScript",
    "role": "Solo Developer",
    "team": "Solo",
    "duration": "Game jam + post-jam update",
    "platform": "Web (HTML5)",
    "summary": "Narrative card game: build an alibi to fool a suspicious dragon.",
    "cover": "https://img.itch.zone/aW1nLzI5NTQwNDEyLnBuZw==/original/1SiaH3.png",
    "video": "",
    "links": {
      "itch": "https://alamorte.itch.io/one-chopper"
    },
    "tags": [
      "Godot",
      "GDScript",
      "Card System",
      "UI",
      "Web"
    ],
    "overview": [
      "Made in Godot for a game jam. Play cards to build an alibi that the dragon checks against her Register. I added a tutorial after player feedback."
    ],
    "built": [
      "Card system with deck, hand and play area, with card data defined as reusable resources.",
      "Alibi logic: each played card adds a claim that the dragon cross-checks against her Register.",
      "UI-driven gameplay: the dragon's Register (R) and a Glossary (H) panel with hotkeys, plus fullscreen toggle.",
      "HTML5 export, playable directly in the browser on itch.io."
    ],
    "breakdown": [
      {
        "title": "Iterating on feedback",
        "text": "Early players liked the art but didn't understand the rules. I added a tutorial at the start of the game — a small but important lesson in onboarding and readability."
      }
    ],
    "learned": "Working outside Unreal, structuring a UI-heavy game in Godot's node/scene system, and responding to player feedback after release.",
    "code": null
  },
  {
    "id": "maze-solitaire",
    "type": "featured",
    "title": "Maze Solitaire",
    "status": "In polish",
    "event": "",
    "engine": "Godot",
    "language": "GDScript",
    "role": "Solo Developer",
    "team": "Solo",
    "duration": "",
    "platform": "PC",
    "summary": "Puzzle game mixing solitaire with a shifting-tile labyrinth.",
    "cover": "asset/maze-solitaire/cover.jpg",
    "video": "",
    "gallery": [
      {
        "src": "asset/maze-solitaire/shot-1.jpg",
        "caption": "Shifting a row of tiles"
      },
      {
        "src": "asset/maze-solitaire/shot-2.jpg",
        "caption": "Card-driven turn"
      },
      {
        "src": "asset/maze-solitaire/shot-3.jpg",
        "caption": "Valid paths highlighted after a shift"
      }
    ],
    "links": {},
    "tags": [
      "Godot",
      "GDScript",
      "Grid Systems",
      "Puzzle"
    ],
    "overview": [
      "Solitaire rules on a shifting labyrinth board: every card you play moves the maze. Unreleased, currently in polish."
    ],
    "built": [
      "Grid-based board where inserting a tile shifts an entire row or column.",
      "Card-driven turns: solitaire-style cards determine which moves are available each turn.",
      "Reachability check over connected tiles to highlight valid paths after each shift.",
      "Turn flow, win/lose conditions and UI feedback for valid and invalid moves."
    ],
    "breakdown": [],
    "learned": "",
    "code": null
  },
  {
    "id": "ivy-growth",
    "type": "wip",
    "title": "Ivy — Growth Puzzle Game",
    "status": "In development",
    "event": "",
    "engine": "Unreal Engine 5.6",
    "language": "C++ · Blueprints",
    "role": "Solo Developer — Gameplay Programmer",
    "team": "Solo",
    "duration": "Ongoing",
    "platform": "PC",
    "summary": "A fixed-camera puzzle game where you guide a climbing ivy to push objects, cast shade and build paths for a ladybug.",
    "cover": "asset/ivy-growth/poster.jpg",
    "video": "asset/ivy-growth/growth.mp4",
    "links": {},
    "tags": [
      "UE5",
      "C++",
      "Procedural Mesh",
      "A*",
      "Puzzle"
    ],
    "overview": [
      "Hold the mouse and the ivy grows toward the cursor, wrapping around corners and edges. The ivy is a data model of nodes: the mesh, leaves, puzzles, undo and the creature are all views on that data, so new features plug in without touching the growth code."
    ],
    "pipeline": [
      {
        "title": "Ivy data",
        "text": "A flat array of nodes, grown step by step"
      },
      {
        "title": "GPU animation",
        "text": "One parameter per frame animates the growth",
        "highlight": true
      },
      {
        "title": "World reacts",
        "text": "Puzzles, light and the ladybug listen to events",
        "highlight": true
      }
    ],
    "built": [
      "Surface-crawling growth with at most three line traces per step, timer-driven and deterministic for reproducible puzzles.",
      "Procedural stem and instanced leaves animated in the shader, so the CPU updates one value per frame.",
      "A ladybug that walks the ivy using a custom A* on the ivy graph, including walls and ceilings where NavMesh can't go.",
      "Light as a resource, multiple plants with shared sap, global undo and level progression saved to disk."
    ],
    "breakdown": [
      {
        "title": "Why A* only came later",
        "text": "The ivy is a tree, so there is only one path between two nodes. Once junctions connect nearby branches the graph gets loops and shortcuts, and A* becomes worth it."
      },
      {
        "title": "A precision bug avoided",
        "text": "Storing birth time in the mesh UVs would break after a few minutes, because procedural UVs are half precision. Storing the distance along the branch stays small and exact."
      }
    ],
    "challenges": [
      {
        "problem": "Undo broke shared objects",
        "solution": "One global undo stack for every plant and puzzle object, instead of one per plant."
      },
      {
        "problem": "Lit areas were hard to read",
        "solution": "Light is detected with traces toward tagged lights, and exposure is fixed so lit zones stay readable."
      }
    ],
    "next": [
      "1–3 golden leaves rating based on leftover sap",
      "Continuous time rewind using the node data"
    ],
    "learned": "Designing gameplay around a single data model, event-driven systems instead of Tick, and taking each technical decision against a concrete alternative.",
    "note": "Architecture reviewed with an AI assistant acting as a mentor. Implementation, debugging, tuning and level design are my own."
  },
  {
    "id": "action-rpg",
    "type": "wip",
    "title": "Third-Person Action RPG",
    "status": "In development",
    "event": "",
    "engine": "Unreal Engine 5",
    "language": "C++ & Blueprints",
    "role": "Solo Developer",
    "team": "Solo",
    "duration": "Ongoing",
    "platform": "PC",
    "summary": "Melee action RPG in C++: combat, enemy AI and attributes.",
    "cover": "asset/action-rpg/cover.jpg",
    "video": "",
    "links": {},
    "note": "Built while following Stephen Ulibarri's Unreal Engine 5 C++ course on Udemy.",
    "tags": [
      "UE5",
      "C++",
      "Combat",
      "Enemy AI",
      "Animation"
    ],
    "overview": [
      "Third-person melee RPG with the core written in C++ and Blueprints used for content and tuning."
    ],
    "built": [
      "C++ character with Enhanced Input, camera setup and locomotion driven by Animation Blueprints.",
      "Melee combat: weapon equip and attach, attack montages, trace-based hit detection, hit reactions and directional damage.",
      "Enemy AI in C++ with patrol, chase and attack states, using perception and NavMesh movement.",
      "Attribute component for health and stamina, with HUD and health bars in UMG."
    ],
    "breakdown": [],
    "learned": "",
    "code": null
  }
];

const JAMS = [
  {
    "title": "SpaceMemory",
    "event": "Jame Gam #50",
    "engine": "Unreal Engine",
    "summary": "Space-themed memory game. My second jam, practising Unreal fundamentals.",
    "cover": "https://img.itch.zone/aW1nLzIxODAxMDYxLnBuZw==/original/NZMTgT.png",
    "link": "https://alamorte.itch.io/spacememory"
  },
  {
    "title": "Flight Invaders",
    "event": "One Game a Month #49",
    "engine": "Unreal Engine",
    "summary": "Compact space shooter: movement, projectiles, enemy waves and scoring.",
    "cover": "https://img.itch.zone/aW1nLzIyMzcxNDU5LnBuZw==/original/ZtyuNI.png",
    "link": "https://alamorte.itch.io/flight-invaders"
  },
  {
    "title": "SpamSchrödinger",
    "event": "Jame Gam #54",
    "engine": "Unreal Engine",
    "summary": "Button-mashing arcade game: spam the keys to keep the poison away.",
    "cover": "https://img.itch.zone/aW1nLzIzNDY0MzcwLnBuZw==/original/90r%2FHQ.png",
    "link": "https://alamorte.itch.io/spams"
  }
];

const SKILLS = [
  {
    "group": "Gameplay Programming",
    "text": "Core focus. Gameplay systems in C++, exposed to Blueprints for fast iteration.",
    "items": [
      "C++",
      "Unreal Engine 5",
      "Blueprints",
      "Gameplay Framework",
      "Enhanced Input",
      "Animation Blueprints",
      "UMG"
    ]
  },
  {
    "group": "Game AI",
    "text": "Enemy and NPC behaviour that is readable, tunable and fun to play against.",
    "items": [
      "Behavior Trees",
      "Blackboards",
      "AI Perception",
      "NavMesh",
      "State-driven AI in C++"
    ]
  },
  {
    "group": "Other Engines",
    "text": "Comfortable switching engines and languages when a project needs it.",
    "items": [
      "Godot",
      "GDScript",
      "Unity",
      "C#"
    ]
  },
  {
    "group": "Tools & Workflow",
    "text": "Version control, prototyping tools and a data-driven, QA-minded approach.",
    "items": [
      "Git",
      "Fork",
      "Blender",
      "Figma",
      "Data Analysis",
      "QA & Auditing"
    ]
  }
];

const EXPERIENCE = [
  {
    "when": "Aug 2024 — Present",
    "title": "Independent Game Developer",
    "org": "Self-employed · Freelance",
    "text": "Developing gameplay systems in Unreal Engine 5 (C++ & Blueprints), shipping game jam titles and building personal projects focused on AI, combat and procedural mechanics."
  },
  {
    "when": "",
    "title": "Game Development — Programming Track",
    "org": "Event Horizon School of Game Development",
    "text": "Game programming fundamentals, C++ and engine workflows, team-based game projects."
  },
  {
    "when": "Jul 2019 — Jul 2023",
    "title": "Process Specialist & Data Analyst",
    "org": "Amazon Logistics · Torrazza Piemonte, Italy",
    "text": "Quality control and audits using proprietary software, data analysis and process optimisation in a high-pressure, high-volume environment."
  },
  {
    "when": "",
    "title": "Computer Science",
    "org": "",
    "text": "Background in programming, algorithms and software development."
  }
];

const COURSES = [
  {
    "title": "Unreal Engine 5 C++ Game Development",
    "provider": "Udemy · Stephen Ulibarri",
    "status": "completed",
    "focus": "C++ gameplay, combat, enemy AI, animation and UI in UE5."
  },
  {
    "title": "Gameplay Ability System (GAS) in UE5",
    "provider": "Udemy · Stephen Ulibarri",
    "status": "progress",
    "focus": "Abilities, attributes, gameplay effects and tags."
  },
  {
    "title": "Multiplayer in Unreal Engine 5 C++",
    "provider": "Udemy · Stephen Ulibarri",
    "status": "planned",
    "focus": "Replication, RPCs, sessions and networked gameplay."
  },
  {
    "title": "C++ & Software Development",
    "provider": "Udemy · Multiple certifications",
    "status": "completed",
    "focus": "Modern C++, OOP and software engineering practices."
  }
];
