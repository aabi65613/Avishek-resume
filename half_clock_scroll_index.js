// half_clock_scroll_index.js - Logic is identical to resume.html

document.addEventListener('DOMContentLoaded', () => {
    const clockContainer = document.getElementById('half-clock-container');
    const clockDial = document.getElementById('half-clock-dial');
    const pointer = document.getElementById('half-clock-pointer');
    const mainContent = document.querySelector('main');

    if (!clockContainer || !pointer || !mainContent) {
        console.error("Half-Clock components not found. Skipping custom scroll logic.");
        return;
    }

    // 1. Map Scroll to Rotation
    // Use GSAP ScrollTrigger to map the entire scrollable height of the body to a 180-degree rotation.
    // Start: 90deg (top of the half-circle)
    // End: 270deg (bottom of the half-circle, 180 degrees total)
    gsap.to(pointer, {
        rotation: 270, // Target rotation in degrees (90 + 180 = 270)
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: true, // Link the animation to the scroll position
        },
    });

    // 2. Implement Draggable Interaction (for the "circular motion with my finger" request)
    // This allows the user to drag the pointer to control the scroll position.
    Draggable.create(pointer, {
        type: "rotation",
        liveSnap: true,
        bounds: { minRotation: 90, maxRotation: 270 }, // Limit to 180 degrees (90 to 270)
        onDrag: function() {
            // Map the current rotation (90 to -90) to the scroll position (0 to maxScroll)
            const maxScroll = ScrollTrigger.maxScroll(window);
            const currentRotation = this.rotation; // Ranges from 90 to 270
            
            // Normalize rotation to a 0-1 range
            // 90deg -> 0 (start of scroll)
            // 270deg -> 1 (end of scroll)
            const normalizedRotation = (currentRotation - 90) / 180; 
            
            const targetScroll = normalizedRotation * maxScroll;
            
            // Scroll the window to the target position
            gsap.to(window, { 
                scrollTo: targetScroll, 
                duration: 0.1, 
                ease: "power1.out" 
            });
        },
        // Optional: Add visual feedback on drag
        onPress: function() {
            gsap.to(pointer, { scale: 1.1, duration: 0.1 });
        },
        onRelease: function() {
            gsap.to(pointer, { scale: 1, duration: 0.1 });
        }
    });
});

// Register Draggable and ScrollTo plugins (must be done before use)
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && typeof Draggable !== 'undefined' && typeof ScrollToPlugin !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, Draggable, ScrollToPlugin);
} else {
    console.error("GSAP plugins not loaded correctly.");
}
