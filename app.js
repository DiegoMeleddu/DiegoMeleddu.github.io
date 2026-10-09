/* =========================================================
   APP.JS — Shared helpers and UI. No need to edit.
   ========================================================= */

function esc(s = "") {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function placeholderHTML(label) {
  return `<div class="ph"><span class="mono">[ MEDIA COMING SOON ]</span><strong>${label}</strong></div>`;
}

function makePlaceholder(label) {
  const d = document.createElement("div");
  d.innerHTML = placeholderHTML(label);
  return d.firstElementChild;
}

function mediaHTML(item, { controls = false } = {}) {
  if (item.video) {
    return `<video src="${item.video}" ${item.cover ? `poster="${item.cover}"` : ""} muted loop playsinline preload="metadata" ${controls ? "controls autoplay" : ""} onerror="console.warn('Video not found:', this.src)"></video>`;
  }
  if (item.cover) {
    return `<img src="${item.cover}" alt="${item.title}" loading="lazy" onerror="console.warn('Image not found:', this.src); this.replaceWith(makePlaceholder(this.alt))">`;
  }
  return placeholderHTML(item.title);
}

function tagsHTML(tags = []) {
  return `<div class="tags">${tags.map(t => `<span>${t}</span>`).join("")}</div>`;
}

function applySiteLinks() {
  document.querySelectorAll("[data-link]").forEach(a => {
    a.href = SITE.links[a.dataset.link];
    a.target = "_blank";
    a.rel = "noopener";
  });
  document.querySelectorAll("[data-cv]").forEach(a => {
    a.href = SITE.cv;
    a.target = "_blank";
  });
  document.querySelectorAll("[data-email]").forEach(a => {
    a.href = "mailto:" + SITE.email;
    if (!a.textContent.trim()) a.textContent = SITE.email;
  });
  document.querySelectorAll("[data-year]").forEach(el => (el.textContent = new Date().getFullYear()));
}

function initNav() {
  const links = document.querySelector(".nav-links");
  const btn = document.querySelector(".menu-btn");
  if (!links || !btn) return;
  btn.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
}

function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
}

function initHoverVideos() {
  document.querySelectorAll(".card, .wip-item, .jam").forEach(card => {
    const v = card.querySelector("video");
    if (!v) return;
    card.addEventListener("mouseenter", () => v.play().catch(() => {}));
    card.addEventListener("mouseleave", () => v.pause());
  });
}

function initHeroCanvas(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mouse = { x: -9999, y: -9999 };
  let w, h, pts = [], running = true;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(110, Math.floor((w * h) / 14000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.6,
      c: Math.random() < 0.55 ? "168,85,247" : "236,72,153"
    }));
  }

  function frame() {
    ctx.clearRect(0, 0, w, h);
    for (const p of pts) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      const dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.hypot(dx, dy);
      if (d > 0 && d < 150) {
        p.x -= (dx / d) * 0.8;
        p.y -= (dy / d) * 0.8;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.c},.9)`;
      ctx.fill();
    }
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 120) {
          ctx.strokeStyle = `rgba(168,85,247,${(1 - d / 120) * 0.35})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    if (!reduce && running) requestAnimationFrame(frame);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  });
  new IntersectionObserver(([e]) => {
    const was = running;
    running = e.isIntersecting;
    if (running && !was && !reduce) requestAnimationFrame(frame);
  }).observe(canvas);

  resize();
  frame();
}