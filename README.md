# Fabian Paul Portfolio

A modern, high-performance portfolio website showcasing digital experiences and creative branding work. Built with cutting-edge web technologies to deliver exceptional user experiences.

🌐 **Live Site**: [fabian-paul.design](https://fabian-paul.design)

## ✨ Features

- **Modern Portfolio Showcase** - Interactive project gallery with smooth horizontal scrolling
- **Dynamic Blog System** - MDX-powered blog with image galleries and reading time estimation
- **Advanced Animations** - GSAP-powered animations with scroll triggers and smooth transitions
- **Responsive Design** - Mobile-first approach with fluid typography and adaptive layouts
- **Performance Optimized** - Static site generation with optimized images and lazy loading
- **SEO Ready** - Automatic sitemap generation and structured metadata
- **Contact Integration** - Working contact forms with email functionality
- **Cookie Consent** - GDPR-compliant cookie management
- **Analytics Ready** - Google Analytics integration for production

## 🚀 Tech Stack

### Core Framework
- **[Astro 5.5.4](https://astro.build/)** - Static site generator for optimal performance
- **[Vue.js 3.4.21](https://vuejs.org/)** - Reactive components for interactive elements
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development

### Styling & Animation
- **[Tailwind CSS 3.4.1](https://tailwindcss.com/)** - Utility-first CSS framework
- **[GSAP 3.12.5](https://greensock.com/gsap/)** - Professional-grade animations
- **[Lenis](https://github.com/studio-freight/lenis)** - Smooth scrolling library
- **Custom Typography** - TT Firs Neue font family with optimized loading

### Content Management
- **[MDX](https://mdxjs.com/)** - Enhanced markdown with React components
- **Astro Content Collections** - Type-safe content management
- **Sharp** - High-performance image processing

### Development & Deployment
- **[Vite](https://vitejs.dev/)** - Fast build tooling
- **GitHub Actions** - Automated CI/CD pipeline
- **GitHub Pages** - Static hosting platform

## 📁 Project Structure

```
portfoliofabianpaul/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── sections/        # Page sections (Hero, WowSection, etc.)
│   │   └── ui/              # Basic UI components
│   ├── content/             # Content collections
│   │   ├── blog/           # Blog posts (MDX)
│   │   └── projects/       # Project pages (Markdown)
│   ├── data/               # JSON data files
│   ├── layouts/            # Page layout templates
│   ├── pages/              # File-based routing
│   ├── styles/             # Global CSS and typography
│   ├── utils/              # Helper functions and utilities
│   └── assets/             # Static assets (images, fonts, icons)
├── public/                 # Public static files
└── scripts/                # Build and utility scripts
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/username/portfoliofabianpaul.git
   cd portfoliofabianpaul
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:4321`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with tunnel support |
| `npm run start` | Start development server (local only) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## 🎨 Key Features Explained

### Interactive Hero Section
- Dynamic image carousel with GSAP animations
- Responsive typography with fluid scaling
- Mobile-optimized layout with strategic image positioning

### Project Showcase
- Horizontal scrolling gallery with custom drag controls
- Responsive grid with featured/standard project layouts
- Optimized image loading with WebP format

### Process Timeline
- Interactive toggle between "Branding" and "Website" processes
- Animated step-by-step workflow visualization
- Mobile-responsive timeline layout

### Blog System
- MDX support for rich content with embedded components
- Automatic reading time calculation
- Tag-based categorization and filtering
- Image gallery support for blog posts

### Advanced Animations
- Scroll-triggered animations using GSAP and ScrollTrigger
- Smooth page transitions with Astro View Transitions
- Custom cursor effects for desktop users
- Performance-optimized animation loading

## 📝 Content Management

### Adding Blog Posts
Create new `.mdx` files in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
excerpt: "Brief description of the post"
date: 2024-01-01
image: "/path/to/featured-image.jpg"
readingTime: 5
tags: ["design", "development"]
author: "Fabian Paul"
---

Your content here...
```

### Adding Projects
Create new `.md` files in `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "Project description"
image: "path/to/header-image.png"
tags: ["branding", "web-design"]
featured: true
categories: ["branding"]
order: 1
---

Project details...
```

## 🔧 Configuration

### Astro Configuration
Key configurations in `astro.config.mjs`:
- Vue.js integration for interactive components
- Tailwind CSS with typography plugin
- MDX support for enhanced content
- Sitemap generation for SEO
- Partytown for third-party script optimization

### Environment Variables
Create `.env` file for local development:
```env
# Email configuration (optional)
SMTP_HOST=your-smtp-host
SMTP_USER=your-email
SMTP_PASS=your-password
```

## 🚀 Deployment

The site is configured for automatic deployment to GitHub Pages:

1. **Automatic Deployment**: Pushes to `main` branch trigger automatic builds
2. **GitHub Actions**: Handles build process and deployment
3. **Custom Domain**: Configured for `fabian-paul.design`

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🎯 Performance Features

- **Static Site Generation**: Pre-rendered pages for optimal loading speed
- **Image Optimization**: Automatic WebP conversion and responsive sizing
- **Font Loading**: Optimized web font loading with fallbacks
- **Code Splitting**: Automatic JavaScript bundling and splitting
- **Lazy Loading**: Images and components load on demand
- **Smooth Scrolling**: Hardware-accelerated scrolling with Lenis

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is private and proprietary. All rights reserved.

## 📞 Contact

For questions about this project or collaboration opportunities:

- **Website**: [fabian-paul.design](https://fabian-paul.design)
- **Email**: Available through the contact form on the website

---

Built with ❤️ by Fabian Paul using modern web technologies.
