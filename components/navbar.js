class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
        }
        .dark :host {
          background-color: rgba(17, 24, 39, 0.8);
        }
        nav {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        a {
          color: #4b5563;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.3s;
          position: relative;
        }
        .dark a {
          color: #d1d5db;
        }
        a:hover {
          color: #6366f1;
        }
        .dark a:hover {
          color: #818cf8;
        }
        a.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #6366f1;
          border-radius: 2px;
        }
        .dark a.active::after {
          background-color: #818cf8;
        }
        .logo {
          font-weight: 700;
          font-size: 1.25rem;
          color: #6366f1;
        }
        .dark .logo {
          color: #818cf8;
        }
        .menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">Avishek Biswas</a>
<div class="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
<button id="theme-toggle" aria-label="Toggle dark mode">
            <i data-feather="moon" class="w-5 h-5"></i>
          </button>
        </div>
        <button class="menu-btn">
          <i data-feather="menu" class="w-6 h-6"></i>
        </button>
      </nav>
    `;

    // Add theme toggle functionality
    this.shadowRoot.getElementById('theme-toggle').addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
      // Assuming feather.replace() is available globally or imported in the main script
      if (typeof feather !== 'undefined') {
        feather.replace();
      }
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
