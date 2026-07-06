/* Clwydian Academy — progressive enhancement (no dependencies) */
(function () {
  "use strict";

  // Sticky header state
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile navigation
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Scroll reveals
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  }

  // Register-interest form → opens the visitor's email client pre-filled.
  // (Swap for a hosted form service any time — see README.md.)
  var form = document.getElementById("interest-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = function (n) {
        var el = form.querySelector('[name="' + n + '"]');
        return el ? el.value.trim() : "";
      };
      var cy = (document.documentElement.lang || "").indexOf("cy") === 0;
      var subject = (cy ? "Cofrestru diddordeb — " : "Register interest — ") + (v("course") || "Clwydian Academy");
      var body = [
        (cy ? "Enw: " : "Name: ") + v("name"),
        (cy ? "E-bost: " : "Email: ") + v("email"),
        (cy ? "Ffôn: " : "Phone: ") + v("phone"),
        (cy ? "Cwrs o ddiddordeb: " : "Course of interest: ") + v("course"),
        (cy ? "Byw yng Nghymru: " : "Live in Wales: ") + v("wales"),
        "",
        (cy ? "Neges:" : "Message:"),
        v("message"),
      ].join("\n");
      window.location.href =
        "mailto:markp@charlotteeleanorgroup.uk?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
      var ok = document.getElementById("form-ok");
      if (ok) ok.hidden = false;
    });
  }
})();
