# Accredian Enterprise Landing Page

A responsive, production-ready clone of the [Accredian Enterprise](https://enterprise.accredian.com) landing page, reimagined with a **bioluminescent underwater butterfly theme**. Built with modern web technologies for the full-stack development assignment.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)

## 🌊 Live Demo

> **[View Live Demo →](https://accredian-enterprise-chi.vercel.app)**

---

## 📋 Project Overview

This project recreates the Accredian Enterprise corporate training landing page with a unique **bioluminescent underwater daylight** visual theme. Key features include:

- **Bioluminescent Butterfly Animation** — An HTML5 Canvas butterfly that follows the user's scroll position, flapping wings with particle trail effects
- **Caustic Light Effects** — Animated dappled underwater light patterns across the page background
- **Depth-Based Color Transitions** — Background color deepens from bright turquoise to deep aqua as users scroll
- **Frosted Glass UI** — All cards and UI elements use glassmorphism with backdrop blur
- **Lead Capture System** — Modal form with validation, connected to a Next.js API route
- **11 Fully Responsive Sections** — Navbar, Hero, Stats, Clients, Accredian Edge, Domain Expertise, Course Segmentation, How It Works, FAQs, Testimonials, Footer
- **Smooth Scroll Animations** — Framer Motion-powered section reveals and interactive elements

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** (App Router) | React framework, routing, API routes |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Scroll animations, section reveals, accordion |
| **HTML5 Canvas** | Butterfly + particle system (60fps) |
| **Lucide React** | Icon library |
| **Vercel** | Deployment platform |

## 🚀 Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm 9+

### Steps

```bash
# Clone the repository
git clone <repository-url>
cd accredian-enterprise

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 🎨 Design Decisions

### Why Underwater Bioluminescent Theme?
The brief called for a unique visual identity. The underwater daylight caustic theme was chosen because:
- It provides a **premium, immersive feel** that differentiates from standard corporate sites
- Bioluminescence naturally maps to the "illumination through learning" brand narrative
- The gradual depth progression creates a sense of **journey and discovery** as users scroll
- Light effects like caustics add visual richness without compromising readability

### Why HTML5 Canvas over Three.js/R3F?
- The butterfly animation is fundamentally 2D (wing flapping with particles)
- Canvas adds **~0KB bundle** vs React Three Fiber's **~200KB+**
- Simpler SSR handling with dynamic import
- Achieves smooth 60fps with lower overhead
- Mobile-optimized: automatically reduces particle count and butterfly size

### Glassmorphism Design Language
All interactive elements use frosted glass (white 60% opacity + backdrop blur). This:
- Maintains readability over the dynamic underwater background
- Creates visual hierarchy and depth
- Aligns with modern design trends

## 🤖 AI Tools Usage

This project was developed with AI assistance:

| Tool | Role |
|---|---|
| **Claude** | Architecture planning, component design, content structure |
| **Antigravity** (Google DeepMind) | Code generation, implementation, debugging, file management |

### How AI Was Used
1. **Planning Phase**: Claude helped define the project architecture, component hierarchy, and design system
2. **Implementation Phase**: Antigravity generated all component code, CSS design system, API routes, and deployment configuration
3. **Debugging**: Antigravity identified and fixed build errors, TypeScript issues, and animation performance problems
4. **Documentation**: This README and code comments were AI-assisted

All AI-generated code was reviewed for correctness, accessibility, and performance.

## 📱 Responsive Design

| Breakpoint | Behavior |
|---|---|
| **Desktop** (1024px+) | Full layout, horizontal timeline, 3-column grids |
| **Tablet** (768-1023px) | 2-column grids, adjusted spacing |
| **Mobile** (<768px) | Single column, hamburger menu, vertical timeline, carousel testimonials, smaller butterfly |

## 🔮 Improvements With More Time

- **Database Integration**: Replace local JSON storage with PostgreSQL/MongoDB for lead data
- **Email Notifications**: Send confirmation emails to leads via SendGrid/Resend
- **CMS Integration**: Connect to headless CMS (Contentful/Sanity) for content management
- **Analytics**: Add PostHog/Google Analytics for user behavior tracking
- **A/B Testing**: Test different CTA copy and button placements
- **Accessibility Audit**: Full WCAG 2.1 AA compliance review
- **Performance**: Image optimization with Next.js Image, lazy loading sections
- **i18n**: Multi-language support for global enterprise clients
- **WebGL Butterfly**: Upgrade to 3D butterfly with realistic wing membrane shaders
- **Admin Dashboard**: Build a protected route to view and manage captured leads

## 📂 Project Structure

```
accredian-enterprise/
├── src/
│   ├── app/
│   │   ├── api/leads/route.ts    # Lead capture API
│   │   ├── globals.css           # Design system & animations
│   │   ├── layout.tsx            # Root layout with SEO
│   │   └── page.tsx              # Main landing page
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky frosted nav
│   │   ├── Hero.tsx              # Hero with SVG illustration
│   │   ├── Butterfly.tsx         # Canvas butterfly animation
│   │   ├── CausticBackground.tsx # Animated light overlay
│   │   ├── Stats.tsx             # Animated counters
│   │   ├── Clients.tsx           # Marquee logos
│   │   ├── AccredianEdge.tsx     # Timeline component
│   │   ├── DomainExpertise.tsx   # Domain cards grid
│   │   ├── CourseSegmentation.tsx# Course category cards
│   │   ├── HowItWorks.tsx        # Step process cards
│   │   ├── FAQs.tsx              # Accordion component
│   │   ├── Testimonials.tsx      # Testimonial carousel
│   │   ├── Footer.tsx            # Site footer
│   │   └── LeadModal.tsx         # Lead capture form modal
│   └── lib/
│       └── constants.ts          # All content data
├── vercel.json                   # Deployment config
├── .env.example                  # Environment docs
└── README.md
```

## 📄 License

This project was created as an assignment submission. All rights reserved.
