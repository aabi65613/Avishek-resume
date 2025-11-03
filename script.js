// Main script for QuantumFolio

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Feather icons (already done in HTML, but good to have here for dynamic content)
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // 2. Theme initialization (moved to the end of index.html/resume.html for immediate effect)
    // const currentTheme = localStorage.getItem('theme');
    // if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //     document.documentElement.classList.add('dark');
    // }

    // 3. Simple Mobile Menu Toggle (for custom-navbar)
    // Since custom-navbar is a Shadow DOM component, we need to handle the menu toggle inside it, 
    // but since the user provided the code for custom-navbar, I will assume the mobile menu logic 
    // is either handled by the component itself or not fully implemented yet.
    // For now, I will add a simple placeholder for any future global script logic.

    // 4. Parallax effect (moved to the end of index.html for immediate effect)
    // document.addEventListener('scroll', () => {
    //     const parallaxElements = document.querySelectorAll('[data-parallax]');
    //     parallaxElements.forEach(el => {
    //         const speed = parseFloat(el.getAttribute('data-parallax-speed') || 0.5);
    //         const yPos = window.scrollY * speed;
    //         el.style.transform = `translateY(${yPos}px)`;
    //     });
    // });

    // 5. Active link highlighting for custom-navbar (needs to be done outside the shadow DOM)
    const navbar = document.querySelector('custom-navbar');
    if (navbar) {
        const links = navbar.shadowRoot.querySelectorAll('.nav-links a');
        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    links.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${entry.target.id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, {
            rootMargin: '-50% 0px -50% 0px' // Highlight when section is in the middle of the viewport
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // 6. Form Submission Placeholder
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submission is not yet implemented. Please contact Avishek directly via email or LinkedIn.');
            // In a real application, you would send data to a backend service here.
        });
    }
});
