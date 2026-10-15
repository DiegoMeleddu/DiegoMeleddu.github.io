/* =========================================================
   APP.JS — Shared helpers. No need to edit.
   ========================================================= */

function esc(s = "") {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function placeholderHTML(label) {
  return `<div class="ph"><span>Media coming soon</span><strong>${label}</strong></div>`;
}

function makePlaceholder(label) {
  const d = document.createElement("div");
  d.innerHTML = placeholderHTML(label);
  return d.firstElementChild;
}

function mediaHTML(item, { controls = false } = {}) {
  if (item.video) {
    return `<video src="${item.video}" ${item.cover ? `poster="${item.cover}"` : ""} muted loop playsinline preload="metadata" ${controls ? "controls autoplay" : ""}></video>`;
  }
  if (item.cover) {
    return `<img src="${item.cover}" alt="${item.title}" loading="lazy" onerror="this.replaceWith(makePlaceholder(this.alt))">`;
  }
  return placeholderHTML(item.title);
}

function tagsHTML(tags = [], max = 99) {
  return `<div class="tags">${tags.slice(0, max).map(t => `<span>${t}</span>`).join("")}</div>`;
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
  const nav = document.querySelector(".nav");
  const links = document.querySelector(".nav-links");
  const btn = document.querySelector(".menu-btn");
  const onScroll = () => nav && nav.classList.toggle("scrolled", scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
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
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
}

function initHoverVideos() {
  document.querySelectorAll(".card, .wip, .jam").forEach(card => {
    const v = card.querySelector("video");
    if (!v) return;
    card.addEventListener("mouseenter", () => v.play().catch(() => {}));
    card.addEventListener("mouseleave", () => v.pause());
  });
}
