/* ============================================================
   Richelle Parra — Portfolio interactions (vanilla JS, ~5 KB)
   Every feature checks for its element, so this file is safely
   shared by the homepage and the case-study pages.
   ============================================================ */
(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Theme toggle ---------- */
  var toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      if (typeof window.__meshRefresh === "function") window.__meshRefresh();
    });
  }

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.getElementById("menuBtn");
  var navLinks = document.getElementById("navLinks");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Header shadow + scroll progress ---------- */
  var header = document.querySelector(".site-header");
  var progressFill = document.getElementById("progressFill");
  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (header) header.classList.toggle("scrolled", y > 10);
    if (progressFill) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      progressFill.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Rotating specialty word (hero) ---------- */
  var rotator = document.getElementById("rotator");
  if (rotator && !reducedMotion) {
    var words = [
      "AI governance",
      "privacy & compliance",
      "ISO 8000 data quality",
      "EU AI Act readiness",
      "master data management"
    ];
    var wi = 0;
    setInterval(function () {
      rotator.classList.add("fade");
      setTimeout(function () {
        wi = (wi + 1) % words.length;
        rotator.textContent = words[wi];
        rotator.classList.remove("fade");
      }, 350);
    }, 2800);
  }

  /* ---------- Scroll-reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window && !reducedMotion) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          ro.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { ro.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- Animated counters ---------- */
  var counters = document.querySelectorAll(".stat-num[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        co.unobserve(en.target);
        var el = en.target;
        var target = parseInt(el.getAttribute("data-count"), 10);
        var suffix = el.getAttribute("data-suffix") || "";
        if (reducedMotion) { el.textContent = target + suffix; return; }
        var start = null;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / 1200, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* ---------- Certification filters ---------- */
  var chips = document.querySelectorAll(".chip[data-filter]");
  var certCards = document.querySelectorAll(".cert-card");
  if (chips.length && certCards.length) {
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        var f = chip.getAttribute("data-filter");
        certCards.forEach(function (card) {
          card.classList.toggle("hide", f !== "all" && card.getAttribute("data-cat") !== f);
        });
      });
    });
  }

  /* ---------- Copy email ---------- */
  var copyBtn = document.getElementById("copyEmail");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var email = copyBtn.getAttribute("data-email");
      function done() {
        var label = copyBtn.querySelector(".cc-sub");
        if (label) {
          var old = label.textContent;
          label.textContent = "Copied to clipboard!";
          setTimeout(function () { label.textContent = old; }, 1800);
        }
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done, function () {
          window.location.href = "mailto:" + email;
        });
      } else {
        window.location.href = "mailto:" + email;
      }
    });
  }

  /* ---------- Active nav link while scrolling ---------- */
  var sectionLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if (sectionLinks.length && "IntersectionObserver" in window) {
    var map = {};
    var sections = [];
    sectionLinks.forEach(function (a) {
      var id = a.getAttribute("href").slice(1);
      var sec = document.getElementById(id);
      if (sec) { map[id] = a; sections.push(sec); }
    });
    if (sections.length) {
      var so = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            sectionLinks.forEach(function (a) { a.classList.remove("active"); });
            var link = map[en.target.id];
            if (link) link.classList.add("active");
          }
        });
      }, { rootMargin: "-40% 0px -55% 0px" });
      sections.forEach(function (s) { so.observe(s); });
    }
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Hero data-mesh canvas ---------- */
  var canvas = document.getElementById("mesh");
  if (canvas && !reducedMotion) {
    var ctx = canvas.getContext("2d");
    var nodes = [];
    var raf = null;
    var dotColor, lineColor;

    function readColors() {
      var cs = getComputedStyle(document.documentElement);
      dotColor = cs.getPropertyValue("--mesh-dot").trim() || "rgba(100,100,255,0.5)";
      lineColor = cs.getPropertyValue("--mesh-line").trim() || "rgba(100,200,200,0.25)";
    }
    window.__meshRefresh = readColors;

    function resize() {
      var rect = canvas.parentElement.getBoundingClientRect();
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed(rect.width, rect.height);
    }

    function seed(w, h) {
      var count = Math.max(24, Math.min(52, Math.floor((w * h) / 26000)));
      nodes = [];
      for (var i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: 1.4 + Math.random() * 1.8
        });
      }
    }

    function tick() {
      var w = canvas.parentElement.clientWidth;
      var h = canvas.parentElement.clientHeight;
      ctx.clearRect(0, 0, w, h);

      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      ctx.lineWidth = 1;
      for (var a = 0; a < nodes.length; a++) {
        for (var b = a + 1; b < nodes.length; b++) {
          var dx = nodes[a].x - nodes[b].x;
          var dy = nodes[a].y - nodes[b].y;
          var d2 = dx * dx + dy * dy;
          if (d2 < 15000) {
            ctx.globalAlpha = 1 - d2 / 15000;
            ctx.strokeStyle = lineColor;
            ctx.beginPath();
            ctx.moveTo(nodes[a].x, nodes[a].y);
            ctx.lineTo(nodes[b].x, nodes[b].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      ctx.fillStyle = dotColor;
      for (var j = 0; j < nodes.length; j++) {
        ctx.beginPath();
        ctx.arc(nodes[j].x, nodes[j].y, nodes[j].r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        if (raf) cancelAnimationFrame(raf);
        raf = null;
      } else if (!raf) {
        raf = requestAnimationFrame(tick);
      }
    });

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    });

    readColors();
    resize();
    raf = requestAnimationFrame(tick);
  }
})();
