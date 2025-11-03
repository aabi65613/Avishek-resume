// half_clock_scroll.js

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
    // End: -90deg (bottom of the half-circle)
    gsap.to(pointer, {
        rotation: -90, // Target rotation in degrees
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
        bounds: { minRotation: -90, maxRotation: 90 }, // Limit to 180 degrees
        onDrag: function() {
            // Map the current rotation (90 to -90) to the scroll position (0 to maxScroll)
            const maxScroll = ScrollTrigger.maxScroll(window);
            const currentRotation = this.rotation; // Ranges from 90 to -90
            
            // Normalize rotation to a 0-1 range
            // 90deg -> 0 (start of scroll)
            // -90deg -> 1 (end of scroll)
            const normalizedRotation = (90 - currentRotation) / 180; 
            
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

// Register Draggable and ScrollTo plugins (assuming they are loaded via CDN in HTML)
gsap.registerPlugin(ScrollTrigger, Draggable, ScrollToPlugin);
