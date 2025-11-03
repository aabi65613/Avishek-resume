// half_clock_scroll_index.js - Robust and simplified logic

document.addEventListener('DOMContentLoaded', () => {
    // Ensure GSAP plugins are registered (loaded via CDN in HTML)
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined' || typeof Draggable === 'undefined' || typeof ScrollToPlugin === 'undefined') {
        console.error("GSAP or its required plugins are not loaded. Skipping custom scroll logic.");
        return;
    }
    
    // Register plugins only if not already registered (safer check)
    if (!gsap.isTweening(window)) {
        gsap.registerPlugin(ScrollTrigger, Draggable, ScrollToPlugin);
    }

    const pointer = document.getElementById('half-clock-pointer');

    if (!pointer) {
        return;
    }

    // 1. Map Scroll to Rotation
    // Start: 90deg (top of the half-circle, pointing up)
    // End: -90deg (bottom of the half-circle, pointing down, 180 degrees total)
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

    // 2. Implement Draggable Interaction
    Draggable.create(pointer, {
        type: "rotation",
        bounds: { minRotation: -90, maxRotation: 90 }, 
        onDrag: function() {
            const maxScroll = ScrollTrigger.maxScroll(window);
            const currentRotation = this.rotation; 
            
            // Normalize rotation (90 to -90) to a 0-1 range
            const normalizedRotation = (90 - currentRotation) / 180; 
            const targetScroll = normalizedRotation * maxScroll;
            
            // Scroll the window immediately without animation
            gsap.to(window, { 
                scrollTo: targetScroll, 
                duration: 0, 
                overwrite: 'auto'
            });
        },
        // Visual feedback
        onPress: function() {
            gsap.to(pointer, { scale: 1.1, duration: 0.1 });
        },
        onRelease: function() {
            gsap.to(pointer, { scale: 1, duration: 0.1 });
        }
    });
});
