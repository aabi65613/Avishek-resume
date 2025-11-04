# Avishek Biswas - Modern Portfolio

A premium, modern portfolio website built with **Next.js 15**, **React 18**, **Framer Motion**, and **Tailwind CSS**. Features fluid animations, 3D transforms, scroll-triggered effects, and a responsive design.

## 🎨 Features

- ✨ **Fluid Physics-Based Animations** - Spring animations with Framer Motion
- 🎭 **Staggered Component Animations** - Professional timing and choreography
- 🌀 **3D Perspective Transforms** - Depth effects on project cards
- 📜 **Scroll-Triggered Animations** - Elements animate as you scroll
- ⚡ **GPU-Accelerated Transforms** - Smooth 60fps performance
- 🎯 **Micro-Interactions** - Hover effects on buttons and cards
- 🌙 **Dark/Light Theme Support** - Built-in theme switching
- 📱 **Fully Responsive** - Mobile-first design
- ♿ **Accessible** - WCAG compliant

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org))
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aabi65613/Avishek-resume.git
   cd Avishek-resume
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📦 Build & Deploy

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

### Deploy to Vercel
This project is optimized for [Vercel](https://vercel.com). Simply connect your GitHub repository to Vercel for automatic deployments.

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Language**: TypeScript
- **Linting**: ESLint

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation with animations
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects showcase
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🎬 Animation Features

### Hero Section
- Staggered text animations
- Floating profile image with spring physics
- Animated scroll indicator
- Background gradient animations

### Scroll Sections
- Fade-in animations on scroll
- Staggered card animations
- 3D perspective transforms on hover
- Icon rotation effects

### Interactions
- Smooth button hover states
- Card elevation on hover
- Icon animations on interaction
- Form input focus effects

## 🌐 Sections

1. **Navbar** - Fixed navigation with mobile menu
2. **Hero** - Introduction with CTA buttons
3. **About** - Career objectives and background
4. **Skills** - Technical skills with icons
5. **Projects** - Featured project showcase
6. **Contact** - Contact form
7. **Footer** - Social links and quick navigation

## 📝 Customization

### Update Your Information

Edit the component files to add your own content:

- **Hero**: Update in `components/Hero.tsx`
- **About**: Update in `components/About.tsx`
- **Skills**: Update in `components/Skills.tsx`
- **Projects**: Update in `components/Projects.tsx`
- **Contact**: Update in `components/Contact.tsx`

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#6366f1',    // Change primary color
      secondary: '#a855f7',  // Change secondary color
    },
  },
}
```

### Add Your Profile Image

Place your profile image in `public/` folder and update the Hero component.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically deploy on every push to main

### Deploy to Other Platforms

- **Netlify**: Connect your GitHub repo to Netlify
- **GitHub Pages**: Use `next export` for static export
- **Self-hosted**: Build and run on your own server

## 📊 Performance

- Optimized for Core Web Vitals
- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- Framer Motion optimized for 60fps animations

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📧 Contact

- **Email**: avishek@example.com
- **GitHub**: [@aabi65613](https://github.com/aabi65613)
- **LinkedIn**: [Avishek Biswas](https://linkedin.com)

---

**Built with ❤️ using Next.js and Framer Motion**
