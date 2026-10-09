/* =========================================================
   EXTRAS.JS — Background doodles, workbench ruler,
   chalk drawing, Konami easter egg.
   To replace a doodle, paste your Figma SVG in DOODLE_SVGS.
   ========================================================= */

const DOODLE_SVGS = {
  mannequin: `<svg viewBox="0 0 170 310" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <line class="dash" x1="4" y1="17" x2="40" y2="17"/>
    <line class="dash" x1="4" y1="53" x2="40" y2="53"/>
    <line class="dash" x1="4" y1="150" x2="40" y2="150"/>
    <line class="dash" x1="4" y1="218" x2="40" y2="218"/>
    <line class="dash" x1="4" y1="284" x2="40" y2="284"/>
    <circle cx="95" cy="35" r="18"/>
    <path d="M95 17 Q104 35 95 53"/>
    <line x1="95" y1="53" x2="95" y2="64"/>
    <ellipse cx="95" cy="92" rx="23" ry="27"/>
    <line x1="65" y1="70" x2="125" y2="70"/>
    <path d="M95 64 Q100 108 95 140"/>
    <path d="M78 140 L112 140 L104 158 L86 158 Z"/>
    <polyline points="65,70 54,112 48,156"/>
    <circle cx="54" cy="112" r="3"/>
    <circle cx="47" cy="163" r="5"/>
    <polyline points="125,70 137,110 144,152"/>
    <circle cx="137" cy="110" r="3"/>
    <circle cx="145" cy="159" r="5"/>
    <polyline points="86,158 79,218 76,280 62,285"/>
    <circle cx="79" cy="218" r="3.5"/>
    <polyline points="104,158 111,218 114,280 128,285"/>
    <circle cx="111" cy="218" r="3.5"/>
    <text x="2" y="11">1 head</text>
    <text x="44" y="304">rig ref — 7.5 heads</text>
  </svg>`,

  rabbit: `<svg viewBox="0 0 280 175" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="14" cy="85" r="4"/>
    <line x1="14" y1="85" x2="160" y2="30"/>
    <line x1="14" y1="85" x2="160" y2="140"/>
    <path d="M160 30 Q192 85 160 140"/>
    <line class="dash" x1="20" y1="87" x2="196" y2="112"/>
    <ellipse cx="218" cy="120" rx="30" ry="19"/>
    <circle cx="246" cy="98" r="13"/>
    <path d="M240 87 Q231 52 239 45 Q248 52 246 86"/>
    <path d="M251 88 Q256 55 266 51 Q270 60 256 90"/>
    <circle cx="187" cy="114" r="6"/>
    <path d="M200 137 Q212 143 226 138"/>
    <circle cx="251" cy="96" r="1.5"/>
    <line x1="272" y1="18" x2="270" y2="38"/>
    <circle cx="269.5" cy="45" r="1"/>
    <text x="40" y="165">sight cone · 60°</text>
    <text x="70" y="78">raycast?</text>
  </svg>`,

  ivy: `<svg viewBox="0 0 190 295" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 275 C70 220 15 165 75 120 S135 55 172 18"/>
    <line class="dash" x1="20" y1="275" x2="70" y2="220"/>
    <line class="dash" x1="15" y1="165" x2="135" y2="75"/>
    <line class="dash" x1="135" y1="55" x2="172" y2="18"/>
    <rect x="16" y="271" width="8" height="8"/>
    <rect x="71" y="116" width="8" height="8"/>
    <rect x="168" y="14" width="8" height="8"/>
    <circle cx="70" cy="220" r="3"/>
    <circle cx="15" cy="165" r="3"/>
    <circle cx="135" cy="75" r="3"/>
    <circle cx="135" cy="55" r="3"/>
    <path d="M45 238 q10 -12 22 -3 q-11 10 -22 3"/>
    <path d="M40 186 q-10 -12 -22 -4 q11 10 22 4"/>
    <path d="M58 142 q10 -13 23 -5 q-11 11 -23 5"/>
    <path d="M100 96 q-9 -13 -22 -6 q10 11 22 6"/>
    <path d="M126 64 q10 -12 22 -4 q-11 10 -22 4"/>
    <path d="M150 38 q-8 -12 -20 -6 q9 10 20 6"/>
    <text x="84" y="210">spline_grow(dt)</text>
    <text x="120" y="12">tip</text>
  </svg>`,

  cards: `<svg viewBox="0 0 240 195" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <rect x="40" y="44" width="70" height="100" rx="6" transform="rotate(-14 75 94)"/>
    <rect x="82" y="34" width="70" height="100" rx="6" transform="rotate(-2 117 84)"/>
    <rect x="124" y="42" width="70" height="100" rx="6" transform="rotate(11 159 92)"/>
    <path d="M144 89 Q159 76 174 95 Q159 106 144 89"/>
    <line x1="159" y1="84" x2="159" y2="99"/>
    <circle cx="205" cy="168" r="16"/>
    <circle cx="205" cy="168" r="11"/>
    <text x="10" y="24">alibi deck v0.3</text>
    <text x="201" y="173">1</text>
    <text x="128" y="188">missing!</text>
  </svg>`,

  sword: `<svg viewBox="0 0 235 215" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="52,158 156,54 170,40 162,60 58,164"/>
    <line x1="41" y1="151" x2="67" y2="177"/>
    <line x1="54" y1="164" x2="33" y2="185"/>
    <circle cx="30" cy="188" r="4"/>
    <polygon class="dash" points="46,152 164,34 178,48 60,166"/>
    <path d="M112 18 Q205 34 210 140"/>
    <path d="M202 130 L210 142 L217 131"/>
    <text x="110" y="200">box trace · 6 steps</text>
  </svg>`,

  farmer: `<svg viewBox="0 0 180 230" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="90" cy="60" rx="55" ry="10"/>
    <path d="M60 58 Q62 25 90 24 Q118 25 120 58"/>
    <circle cx="90" cy="88" r="24"/>
    <circle cx="81" cy="85" r="1.5"/>
    <circle cx="99" cy="85" r="1.5"/>
    <path d="M82 101 Q90 96 98 101"/>
    <path d="M66 114 Q90 106 114 114 L120 172 L60 172 Z"/>
    <line x1="78" y1="112" x2="78" y2="135"/>
    <line x1="102" y1="112" x2="102" y2="135"/>
    <rect x="76" y="135" width="28" height="18"/>
    <path d="M114 122 Q128 132 140 128"/>
    <line x1="140" y1="42" x2="140" y2="205"/>
    <path d="M128 42 L128 20 M140 42 L140 14 M152 42 L152 20 M128 42 L152 42"/>
    <line x1="34" y1="22" x2="34" y2="40"/>
    <circle cx="34" cy="47" r="1"/>
    <text x="18" y="224">state: CHASE</text>
  </svg>`,

  btree: `<svg viewBox="0 0 260 175" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <rect x="105" y="8" width="50" height="24" rx="3"/>
    <text x="125" y="25">?</text>
    <text x="162" y="24">selector</text>
    <line x1="130" y1="32" x2="45" y2="62"/>
    <line x1="130" y1="32" x2="130" y2="62"/>
    <line x1="130" y1="32" x2="215" y2="62"/>
    <rect x="10" y="62" width="70" height="26" rx="3"/>
    <rect x="95" y="62" width="70" height="26" rx="3"/>
    <rect x="180" y="62" width="70" height="26" rx="3"/>
    <text x="24" y="80">Chase</text>
    <text x="106" y="80">Search</text>
    <text x="194" y="80">Patrol</text>
    <line class="dash" x1="45" y1="88" x2="45" y2="112"/>
    <rect x="12" y="112" width="66" height="24" rx="12"/>
    <text x="24" y="129">seen?</text>
    <line x1="215" y1="88" x2="192" y2="116"/>
    <line x1="215" y1="88" x2="238" y2="116"/>
    <circle cx="192" cy="122" r="6"/>
    <circle cx="238" cy="122" r="6"/>
    <text x="150" y="165">BT_Farmer</text>
  </svg>`,

  biscuit: `<svg viewBox="0 0 230 175" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M45 62 L50 48 L60 57 L70 46 L75 62 Z"/>
    <circle cx="60" cy="102" r="40"/>
    <circle class="dash" cx="60" cy="102" r="32"/>
    <circle cx="48" cy="90" r="2"/>
    <circle cx="72" cy="94" r="2"/>
    <circle cx="55" cy="114" r="2"/>
    <circle cx="76" cy="116" r="2"/>
    <circle cx="62" cy="102" r="2"/>
    <path d="M150 120 L150 90 Q150 82 158 82 L188 82 Q196 82 196 90 L196 120 Q196 128 188 128 L158 128 Q150 128 150 120 Z"/>
    <path d="M150 90 L162 72 L206 72 L196 82"/>
    <path d="M196 120 L206 110 L206 72"/>
    <circle cx="165" cy="102" r="2"/>
    <circle cx="181" cy="102" r="2"/>
    <path d="M141 94 q-5 5 0 10"/>
    <path d="M141 110 q-5 5 0 10"/>
    <line class="dash" x1="135" y1="104" x2="108" y2="103"/>
    <path d="M114 97 L105 103 L114 109"/>
    <text x="22" y="166">protect!</text>
    <text x="122" y="160">wave 03 · x12</text>
  </svg>`,

  ship: `<svg viewBox="0 0 220 205" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="160" cy="50" rx="40" ry="12"/>
    <path d="M140 46 Q160 18 180 46"/>
    <circle cx="140" cy="53" r="2"/>
    <circle cx="160" cy="57" r="2"/>
    <circle cx="180" cy="53" r="2"/>
    <line class="dash" x1="145" y1="62" x2="130" y2="95"/>
    <line class="dash" x1="175" y1="62" x2="190" y2="95"/>
    <polygon points="50,170 70,118 90,170 70,160"/>
    <line x1="58" y1="150" x2="40" y2="166"/>
    <line x1="82" y1="150" x2="100" y2="166"/>
    <path d="M62 168 L70 186 L78 168"/>
    <line x1="76" y1="106" x2="82" y2="96"/>
    <line x1="92" y1="82" x2="98" y2="72"/>
    <line x1="108" y1="58" x2="114" y2="48"/>
    <path d="M118 30 l-6 -8 M126 26 l0 -10 M134 30 l6 -8"/>
    <text x="98" y="112">pew</text>
    <text x="96" y="196">hitbox: 12px</text>
  </svg>`,

  memory: `<svg viewBox="0 0 230 180" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <rect x="20" y="30" width="70" height="100" rx="6" transform="rotate(-8 55 80)"/>
    <circle cx="55" cy="80" r="15"/>
    <ellipse cx="55" cy="80" rx="28" ry="7" transform="rotate(-20 55 80)"/>
    <rect x="120" y="40" width="70" height="100" rx="6" transform="rotate(7 155 90)"/>
    <polygon points="155,70 160,84 175,84 163,93 168,107 155,98 142,107 147,93 135,84 150,84"/>
    <path d="M95 60 Q107 46 118 58"/>
    <path d="M112 52 L118 58 L110 61"/>
    <text x="96" y="22">flip()</text>
    <text x="64" y="168">match? 2/12</text>
  </svg>`,

  catbox: `<svg viewBox="0 0 210 190" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <rect x="40" y="80" width="100" height="75"/>
    <polygon points="40,80 60,62 160,62 140,80"/>
    <polygon points="140,80 160,62 160,137 140,155"/>
    <path d="M80 72 L86 52 L95 69"/>
    <path d="M102 69 L110 52 L116 72"/>
    <circle cx="92" cy="74" r="1.5"/>
    <circle cx="106" cy="74" r="1.5"/>
    <path d="M176 98 L176 120 L162 150 L198 150 L184 120 L184 98"/>
    <line x1="172" y1="98" x2="188" y2="98"/>
    <circle cx="180" cy="88" r="3"/>
    <circle cx="185" cy="76" r="2"/>
    <line class="dash" x1="165" y1="138" x2="195" y2="138"/>
    <text x="72" y="125">50 / 50</text>
    <text x="18" y="182">spam A / D !!!</text>
  </svg>`,

  maze: `<svg viewBox="0 0 260 215" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <rect x="40" y="40" width="50" height="50"/>
    <rect x="90" y="40" width="50" height="50"/>
    <rect x="140" y="40" width="50" height="50"/>
    <rect x="40" y="90" width="50" height="50"/>
    <rect x="90" y="90" width="50" height="50"/>
    <rect x="140" y="90" width="50" height="50"/>
    <rect x="40" y="140" width="50" height="50"/>
    <rect x="90" y="140" width="50" height="50"/>
    <rect x="140" y="140" width="50" height="50"/>
    <path d="M65 90 L65 65 L90 65"/>
    <line x1="90" y1="65" x2="140" y2="65"/>
    <path d="M140 65 L190 65 M165 65 L165 90"/>
    <line x1="65" y1="90" x2="65" y2="140"/>
    <line x1="90" y1="115" x2="140" y2="115"/>
    <line x1="165" y1="90" x2="165" y2="115"/>
    <line x1="65" y1="140" x2="65" y2="190"/>
    <path d="M165 140 L165 165 L190 165"/>
    <line x1="8" y1="115" x2="34" y2="115"/>
    <path d="M26 108 L35 115 L26 122"/>
    <rect x="202" y="12" width="45" height="62" rx="4" transform="rotate(10 224 43)"/>
    <text x="212" y="34">7</text>
    <text x="40" y="208">shift row 2 →</text>
  </svg>`,

  dragon: `<svg viewBox="0 0 240 155" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 75 Q120 0 220 75 Q120 150 20 75 Z"/>
    <circle cx="120" cy="75" r="32"/>
    <path d="M120 46 Q132 75 120 104 Q108 75 120 46 Z"/>
    <path d="M42 58 l-12 -10 M72 40 l-6 -14 M120 30 l0 -16 M168 40 l6 -14 M198 58 l12 -10"/>
    <circle cx="208" cy="128" r="14"/>
    <circle class="dash" cx="208" cy="128" r="9"/>
    <text x="22" y="146">she noticed.</text>
  </svg>`
};

/* Where each doodle goes: target section, position, width, rotation, parallax speed.
   wide: true = shown only on large screens, where the side margins are empty */
const DOODLES = [
  { svg: "mannequin", target: "#top",      pos: { right: "4%", bottom: "4%" },  w: 140, rot: 5,  speed: 0.05 },
  { svg: "mannequin", target: "#about",    pos: { right: "5%", top: "40px" },   w: 115, rot: -6, speed: -0.04 },
  { svg: "ivy",       target: "#wip",      pos: { right: "4%", top: "30px" },   w: 160, rot: 4,  speed: 0.07 },
  { svg: "maze",      target: "#wip",      pos: { left: "1%", bottom: "20px" }, w: 170, rot: 3,  speed: -0.05, wide: true },
  { svg: "rabbit",    target: "#projects", pos: { right: "3%", top: "40px" },   w: 250, rot: -3, speed: -0.06 },
  { svg: "farmer",    target: "#projects", pos: { left: "1%", top: "38%" },     w: 125, rot: -4, speed: 0.05, wide: true },
  { svg: "btree",     target: "#projects", pos: { right: "2%", bottom: "10px" }, w: 220, rot: 2, speed: -0.04, wide: true },
  { svg: "cards",     target: "#jams",     pos: { right: "4%", top: "50px" },   w: 210, rot: 6,  speed: -0.05 },
  { svg: "biscuit",   target: "#jams",     pos: { left: "1%", top: "35%" },     w: 165, rot: -5, speed: 0.06, wide: true },
  { svg: "ship",      target: "#jams",     pos: { right: "2%", bottom: "10px" }, w: 165, rot: 6, speed: 0.04, wide: true },
  { svg: "sword",     target: "#skills",   pos: { right: "3%", top: "30px" },   w: 190, rot: -8, speed: 0.06 },
  { svg: "memory",    target: "#skills",   pos: { left: "1%", bottom: "20px" }, w: 160, rot: 4,  speed: -0.05, wide: true },
  { svg: "catbox",    target: "#contact",  pos: { left: "4%", top: "18%" },     w: 160, rot: -6, speed: 0.05 },
  { svg: "dragon",    target: "#contact",  pos: { right: "4%", bottom: "16%" }, w: 200, rot: 5,  speed: -0.05 },

  /* extra layer: more doodles in the side margins */
  { svg: "ship",      target: "#top",      pos: { left: "2%", bottom: "6%" },   w: 130, rot: -6, speed: -0.04, wide: true },
  { svg: "ivy",       target: "#top",      pos: { right: "1%", top: "16%" },    w: 105, rot: 8,  speed: 0.05,  wide: true },
  { svg: "catbox",    target: "#about",    pos: { left: "1%", bottom: "40px" }, w: 140, rot: 5,  speed: 0.05,  wide: true },
  { svg: "dragon",    target: "#about",    pos: { left: "1%", top: "30%" },     w: 150, rot: -7, speed: -0.04, wide: true },
  { svg: "btree",     target: "#wip",      pos: { right: "2%", bottom: "20px" }, w: 200, rot: -3, speed: 0.04, wide: true },
  { svg: "rabbit",    target: "#wip",      pos: { left: "1%", top: "30%" },     w: 170, rot: 6,  speed: 0.06,  wide: true },
  { svg: "memory",    target: "#projects", pos: { left: "1%", bottom: "20px" }, w: 140, rot: -5, speed: -0.05, wide: true },
  { svg: "maze",      target: "#jams",     pos: { left: "1%", bottom: "10px" }, w: 150, rot: 7,  speed: -0.04, wide: true },
  { svg: "farmer",    target: "#skills",   pos: { left: "1%", top: "60px" },    w: 110, rot: 5,  speed: 0.05,  wide: true },
  { svg: "biscuit",   target: "#skills",   pos: { right: "2%", bottom: "20px" }, w: 150, rot: -4, speed: -0.05, wide: true },
  { svg: "sword",     target: "#contact",  pos: { right: "3%", top: "40px" },   w: 150, rot: 10, speed: 0.04,  wide: true },
  { svg: "ivy",       target: "#contact",  pos: { left: "2%", bottom: "30px" }, w: 110, rot: -4, speed: -0.05, wide: true }
];

(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------- 1. Doodles ---------- */
  const placed = [];
  DOODLES.forEach(d => {
    const host = document.querySelector(d.target);
    const svg = DOODLE_SVGS[d.svg];
    if (!host || !svg) return;
    const el = document.createElement("div");
    el.className = "doodle" + (d.wide ? " doodle-wide" : "");
    el.setAttribute("aria-hidden", "true");
    Object.assign(el.style, d.pos, { width: d.w + "px", rotate: d.rot + "deg" });
    el.innerHTML = svg;
    el.querySelectorAll("path, line, polyline, polygon, circle, ellipse, rect").forEach((shape, i) => {
      if (!shape.classList.contains("dash")) shape.setAttribute("pathLength", "1");
      shape.style.transitionDelay = (i * 0.09) + "s";
    });
    el.querySelectorAll("text").forEach(t => (t.style.transitionDelay = "1.2s"));
    host.prepend(el);
    placed.push({ el, host, speed: d.speed });
  });

  const drawObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("drawn");
        drawObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  placed.forEach(p => (reduce ? p.el.classList.add("drawn") : drawObserver.observe(p.el)));

  if (!reduce && placed.length) {
    let ticking = false;
    const update = () => {
      placed.forEach(p => {
        const r = p.host.getBoundingClientRect();
        const offset = (r.top + r.height / 2 - innerHeight / 2) * p.speed;
        p.el.style.translate = `0 ${offset.toFixed(1)}px`;
      });
      ticking = false;
    };
    addEventListener("scroll", () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  /* ---------- 2. Workbench ruler ---------- */
  if (finePointer) {
    let ruler = document.querySelector(".ruler");
    if (!ruler) {
      ruler = document.createElement("div");
      ruler.className = "ruler";
      ruler.setAttribute("aria-hidden", "true");
      document.body.appendChild(ruler);
    }
    const mark = document.createElement("span");
    mark.className = "ruler-mark";
    mark.innerHTML = '<span class="ruler-read mono"></span>';
    ruler.appendChild(mark);
    const read = mark.firstElementChild;
    addEventListener("mousemove", e => {
      mark.classList.add("on");
      mark.classList.toggle("flip", e.clientX > innerWidth - 170);
      mark.style.translate = `${e.clientX}px 0`;
      read.textContent = `x ${e.clientX} · y ${Math.round(e.pageY)}`;
    });
  }

  /* ---------- 4. Konami code easter egg ---------- */
  const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  let step = 0;
  addEventListener("keydown", e => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    step = key === code[step] ? step + 1 : (key === code[0] ? 1 : 0);
    if (step === code.length) { step = 0; showPlayerTwo(); }
  });

  function showPlayerTwo() {
    if (document.querySelector(".p2-note")) return;
    const note = document.createElement("div");
    note.className = "p2-note";
    note.setAttribute("role", "status");
    note.innerHTML = `
      <button aria-label="Close">×</button>
      <span class="stamp">Player 2 joined</span>
      <p>Nice reflexes. Want to make a game together? <a href="mailto:${SITE.email}">Send me a message</a>.</p>`;
    note.querySelector("button").addEventListener("click", () => note.remove());
    document.body.appendChild(note);
  }

  const footer = document.querySelector("footer .container");
  if (footer && finePointer) {
    footer.insertAdjacentHTML("beforeend", '<span class="konami-hint">↑ ↑ ↓ ↓ ← → ← → B A</span>');
  }

  /* ---------- 5. Chalk: draw on the mat (fades out) ---------- */
  if (finePointer) {
    const FADE_MS = 1000; /* how long a finished stroke takes to disappear */
    const NO_DRAW = "a, button, input, textarea, select, label, video, img, iframe, pre, code, " +
      ".paper, .nav, .ruler, .skill-group, .course, .chalk-tools, .p2-note, " +
      "p, h1, h2, h3, h4, li, dt, dd, .label, .tags, .btn, .hand-note, .stamp, .tl-item";

    const canvas = document.createElement("canvas");
    canvas.className = "chalk-layer";
    canvas.setAttribute("aria-hidden", "true");
    document.body.prepend(canvas);
    const ctx = canvas.getContext("2d");

    const tools = document.createElement("div");
    tools.className = "chalk-tools";
    tools.innerHTML = `<span class="hand-note">grab the chalk: draw on the mat ✎</span>`;
    document.body.appendChild(tools);

    let strokes = [];
    let current = null;
    let queued = false;

    const canDraw = t => t instanceof Element && !t.closest(NO_DRAW);
    /* x is stored relative to the page centre, so drawings stay aligned with the centred layout */
    const toPage = e => [Math.round(e.clientX - innerWidth / 2), Math.round(e.clientY + scrollY), performance.now()];

    /* every point fades on its own: the tail of a stroke disappears while you are still drawing */
    function render() {
      queued = false;
      const now = performance.now();
      const w = innerWidth, h = innerHeight, ox = w / 2, oy = -scrollY;
      for (const s of strokes) while (s.p.length && now - s.p[0][2] >= FADE_MS) s.p.shift();
      strokes = strokes.filter(s => s.p.length || s === current);
      ctx.clearRect(0, 0, w, h);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      const X = pt => pt[0] + ox, Y = pt => pt[1] + oy;
      const seg = (a, b, c, d, alpha) => {
        /* chalk halo + pastel core for one smoothed segment */
        ctx.beginPath();
        ctx.moveTo(a[0], a[1]);
        ctx.quadraticCurveTo(b[0], b[1], c[0], c[1]);
        ctx.strokeStyle = `rgba(244, 238, 222, ${0.18 * alpha})`;
        ctx.lineWidth = 7;
        ctx.stroke();
        ctx.strokeStyle = `rgba(244, 238, 222, ${0.85 * alpha})`;
        ctx.lineWidth = 3;
        ctx.stroke();
      };
      for (const s of strokes) {
        const p = s.p;
        if (!p.length) continue;
        const life = pt => Math.max(0, 1 - (now - pt[2]) / FADE_MS);
        if (p.length === 1) {
          const q = [X(p[0]), Y(p[0])];
          seg(q, q, [q[0] + 0.1, q[1]], null, life(p[0]));
          continue;
        }
        const P = i => [X(p[i]), Y(p[i])];
        let prev = P(0);
        for (let i = 1; i < p.length - 1; i++) {
          const mid = [(X(p[i]) + X(p[i + 1])) / 2, (Y(p[i]) + Y(p[i + 1])) / 2];
          seg(prev, P(i), mid, null, life(p[i]));
          prev = mid;
        }
        seg(prev, prev, P(p.length - 1), null, life(p[p.length - 1]));
      }
      /* keep animating while anything is still visible */
      if (strokes.length) schedule();
    }
    function schedule() { if (!queued) { queued = true; requestAnimationFrame(render); } }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      render();
    }

    function finish() {
      if (!current) return;
      current = null;
      document.body.classList.remove("is-drawing");
      schedule();
    }

    document.addEventListener("pointerdown", e => {
      if (e.button !== 0 || e.pointerType === "touch" || !canDraw(e.target)) return;
      e.preventDefault();
      current = { p: [toPage(e)] };
      strokes.push(current);
      document.body.classList.add("is-drawing");
      schedule();
    });
    document.addEventListener("pointermove", e => {
      if (!current) {
        document.body.classList.toggle("can-draw", canDraw(e.target));
        return;
      }
      const pt = toPage(e), last = current.p[current.p.length - 1];
      if (Math.hypot(pt[0] - last[0], pt[1] - last[1]) < 2) return;
      current.p.push(pt);
      schedule();
    });
    addEventListener("pointerup", finish);
    addEventListener("pointercancel", finish);
    addEventListener("blur", finish);
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", resize);

    try { localStorage.removeItem("dm-chalk-v1"); } catch (_) {}
    resize();
  }
})();
