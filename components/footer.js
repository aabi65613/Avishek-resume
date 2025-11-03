class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 2rem 0;
          margin-top: 4rem;
          border-top: 1px solid #e5e7eb;
          text-align: center;
          color: #6b7280;
          font-size: 0.875rem;
        }
        .dark :host {
          border-top-color: #374151;
          color: #9ca3af;
        }
        .footer-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .social-links {
          margin-top: 1rem;
        }
        .social-links a {
          margin: 0 0.5rem;
          color: #6b7280;
          transition: color 0.3s;
        }
        .dark .social-links a {
          color: #9ca3af;
        }
        .social-links a:hover {
          color: #6366f1;
        }
        .dark .social-links a:hover {
          color: #818cf8;
        }
      </style>
      <div class="footer-content">
        <p>&copy; ${new Date().getFullYear()} QuantumFolio. All rights reserved.</p>
        <div class="social-links">
          <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
            <i data-feather="github" class="w-5 h-5"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn">
            <i data-feather="linkedin" class="w-5 h-5"></i>
          </a>
          <a href="mailto:youremail@example.com" aria-label="Email">
            <i data-feather="mail" class="w-5 h-5"></i>
          </a>
        </div>
        <p>Built with <span style="color: #ef4444;">&hearts;</span> and Web Components.</p>
      </div>
    `;
    // Assuming feather.replace() is available globally or imported in the main script
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }
}

customElements.define('custom-footer', CustomFooter);
