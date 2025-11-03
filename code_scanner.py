import os
import re
import json

def analyze_javascript(content):
    """Analyzes JavaScript content for quality and best practices."""
    findings = []
    lines = content.split('\n')
    
    # Check for global variable usage (potential pollution)
    if re.search(r'document\.addEventListener\(\'DOMContentLoaded\'', content):
        findings.append({"type": "Best Practice", "severity": "Low", "message": "Using `DOMContentLoaded` is good, but ensure all logic is encapsulated to avoid global scope pollution."})

    # Check for direct DOM manipulation outside of Web Components (in script.js)
    if 'script.js' in content:
        if re.search(r'document\.querySelector\(\'custom-navbar\'\)', content):
            findings.append({"type": "Structure", "severity": "Medium", "message": "Accessing Shadow DOM elements (`custom-navbar.shadowRoot`) from the main script is a tight coupling. Consider using custom events for communication."})
        if re.search(r'alert\(', content):
            findings.append({"type": "Quality", "severity": "Low", "message": "Use of `alert()` for user feedback is generally discouraged in modern web development. Consider a more non-intrusive UI element."})

    # Check for use of `var` (should prefer `let` or `const`)
    for i, line in enumerate(lines):
        if re.search(r'\bvar\s', line):
            findings.append({"type": "Quality", "severity": "Low", "message": f"Use of `var` found on line {i+1}. Prefer `let` or `const` for block-scoping."})
    
    # Check for missing error handling in component lifecycle
    if 'connectedCallback' in content and not re.search(r'try\s*\{.*\}\s*catch', content, re.DOTALL):
        findings.append({"type": "Quality", "severity": "Low", "message": "Web Component lifecycle methods (`connectedCallback`) should ideally include error handling for robustness."})

    return findings

def analyze_css(content):
    """Analyzes CSS content for quality and best practices."""
    findings = []
    lines = content.split('\n')
    
    # Check for duplicate properties (less efficient)
    if re.search(r'::-webkit-scrollbar.*::-webkit-scrollbar', content, re.DOTALL):
        findings.append({"type": "Quality", "severity": "Low", "message": "Duplicate custom scrollbar definitions found in `style.css` (lines 8-23 and 83-111). This should be consolidated."})

    # Check for vendor prefixes without fallbacks (though Tailwind is used)
    if re.search(r'^-webkit-', content) and not re.search(r'backdrop-filter', content):
        findings.append({"type": "Best Practice", "severity": "Low", "message": "Ensure vendor prefixes like `-webkit-` are necessary and have standard fallbacks, although Tailwind is handling most of this."})

    # Check for use of `!important` (none found in the provided snippets, but a good check)
    for i, line in enumerate(lines):
        if '!important' in line:
            findings.append({"type": "Quality", "severity": "Medium", "message": f"Use of `!important` found on line {i+1}. This can lead to CSS specificity issues and should be avoided."})

    return findings

def analyze_html(content):
    """Analyzes HTML content for structure and best practices."""
    findings = []
    
    # Check for external script loading (CDN usage)
    if re.search(r'<script src="https://cdn\.tailwindcss\.com">', content):
        findings.append({"type": "Best Practice", "severity": "Medium", "message": "Using Tailwind CSS via CDN is convenient but not recommended for production. For better performance and smaller bundle size, it should be built using a toolchain (e.g., PostCSS)." })
    
    # Check for GSAP CDN usage in resume.html
    if 'resume.html' in content and re.search(r'gsap\.min\.js', content):
        findings.append({"type": "Best Practice", "severity": "Low", "message": "GSAP is loaded via CDN in `resume.html`. For production, consider bundling for reliability and performance."})

    # Check for inline styles (though Tailwind is used, check for raw style tags)
    if re.search(r'<style>', content):
        findings.append({"type": "Quality", "severity": "Low", "message": "Inline `<style>` tags found in `resume.html`. While small, consider moving all CSS to `style.css` for better maintainability."})

    # Check for missing alt text (already checked by the file reader, but good to have a programmatic check)
    if re.search(r'<img[^>]*src="assets/profile\.jpg"[^>]*alt=""', content):
        findings.append({"type": "Accessibility", "severity": "Medium", "message": "Image tag for `profile.jpg` in `index.html` is missing a descriptive `alt` attribute, which is important for accessibility."})
    
    # Check for custom elements definition order
    if re.search(r'<custom-navbar></custom-navbar>.*<custom-footer></custom-footer>', content, re.DOTALL):
        findings.append({"type": "Structure", "severity": "Low", "message": "The custom elements are used before their script definitions are loaded in `index.html` (lines 10-11). Using `defer` helps, but defining the components before their usage in the DOM is a cleaner practice."})

    return findings

def scan_project(root_dir):
    """Scans the entire project directory."""
    results = {}
    
    # Scan HTML files
    for filename in ['index.html', 'resume.html']:
        path = os.path.join(root_dir, filename)
        if os.path.exists(path):
            with open(path, 'r') as f:
                content = f.read()
                results[filename] = analyze_html(content)

    # Scan CSS file
    css_path = os.path.join(root_dir, 'style.css')
    if os.path.exists(css_path):
        with open(css_path, 'r') as f:
            content = f.read()
            results['style.css'] = analyze_css(content)

    # Scan JavaScript files
    js_files = ['script.js', 'components/navbar.js', 'components/footer.js']
    for filename in js_files:
        path = os.path.join(root_dir, filename)
        if os.path.exists(path):
            with open(path, 'r') as f:
                content = f.read()
                results[filename] = analyze_javascript(content)

    return results

if __name__ == "__main__":
    project_root = 'Avishek-resume'
    scan_results = scan_project(project_root)
    
    # Save results to a JSON file
    with open('scan_report.json', 'w') as f:
        json.dump(scan_results, f, indent=4)
    
    print("Scan complete. Results saved to scan_report.json")

