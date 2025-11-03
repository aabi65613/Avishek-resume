// half_clock_scroll_index.js — Final version (by ChatGPT for Avishek)

document.addEventListener("DOMContentLoaded", () => {
  // Ensure GSAP and required plugins are loaded
  if (
    typeof gsap === "undefined" ||
    typeof ScrollTrigger === "undefined" ||
    typeof Draggable === "undefined" ||
    typeof ScrollToPlugin === "undefined"
  ) {
    console.error(
      "GSAP or one of its plugins is not loaded. Skipping custom scroll logic."
    );
    return;
  }

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger, Draggable, ScrollToPlugin);

  const pointer = document.getElementById("half-clock-pointer");
  const protector = document.getElementById("half-clock-protector");

  if (!pointer || !protector) {
    console.warn("Half-clock elements not found in HTML.");
    return;
  }

  // ✅ Position the half-circle protector on left side, facing outward
  protector.style.position = "fixed";
  protector.style.left = "0";
  protector.style.top = "50%";
  protector.style.transform = "translateY(-50%) rotate(90deg)";
  protector.style.transformOrigin = "center";
  protector.style.borderRadius = "0 100% 100% 0";
  protector.style.background = "rgba(255, 255, 255, 0.08)";
  protector.style.border = "2px solid rgba(255,255,255,0.2)";
  protector.style.width = "100px";
  protector.style.height = "200px";
  protector.style.backdropFilter = "blur(6px)";
  protector.style.pointerEvents = "none";

  // ✅ Create pointer stick style
  pointer.style.position = "absolute";
  pointer.style.left = "50%";
  pointer.style.bottom = "50%";
  pointer.style.width = "4px";
  pointer.style.height = "60px"; // shorter stick
  pointer.style.background = "white";
  pointer.style.borderRadius = "4px";
  pointer.style.transformOrigin = "bottom center";
  pointer.style.transform = "rotate(90deg)";
  pointer.style.pointerEvents = "auto";

  // ✅ Scroll-linked rotation (up → down)
  gsap.to(pointer, {
    rotation: -90,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });

  // ✅ Drag control (180° = full page scroll)
  Draggable.create(pointer, {
    type: "rotation",
    bounds: { minRotation: -90, maxRotation: 90 },
    onDrag: function () {
      const maxScroll = ScrollTrigger.maxScroll(window);
      const normalized = (90 - this.rotation) / 180; // 0 (top) → 1 (bottom)
      const scrollTarget = normalized * maxScroll;
      gsap.to(window, { scrollTo: scrollTarget, duration: 0 });
    },
    onPress: () => gsap.to(pointer, { scale: 1.1, duration: 0.1 }),
    onRelease: () => gsap.to(pointer, { scale: 1, duration: 0.1 }),
  });
});
