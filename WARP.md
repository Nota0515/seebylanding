# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Seebysound is a landing page for AI smart glasses that guide the visually impaired by voice. The project is a modern React application built with Vite, featuring extensive 3D graphics (Three.js/React Three Fiber), advanced UI animations (GSAP, Framer Motion), and custom visual effects.

## Development Commands

### Essential Commands
```bash
npm run dev          # Start development server at localhost:5173
npm run host         # Start dev server with network access (--host flag)
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint on all files
```

### Windows-Specific Notes
- Use PowerShell or Command Prompt
- Node.js and npm must be installed
- No additional build tools required beyond npm dependencies

## Architecture Overview

### Application Structure

**Entry Point Flow:**
1. `index.html` → loads `/src/main.jsx`
2. `main.jsx` → wraps app with `BrowserRouter`, `StrictMode`, and `LenisProvider`
3. `App.jsx` → renders routes with gradient background wrapper
4. Currently single-route app: `/` → `Home` page

**Key Architectural Patterns:**

1. **Smooth Scrolling System**: Global `LenisProvider` wraps entire app, enabling smooth scroll behavior throughout. Lenis instance auto-manages RAF (requestAnimationFrame).

2. **3D Graphics Pipeline**: Three.js content rendered via React Three Fiber with `@react-three/drei` helpers. GLB models loaded from `/src/assets/`. Environment maps and PBR materials create realistic metallic effects.

3. **Animation Strategy**: 
   - GSAP with ScrollTrigger for scroll-driven animations
   - Framer Motion for component-level animations
   - Custom canvas-based effects (PixelBlast, LightRays)
   - React Three Fiber's `useFrame` hook for 60fps render loop animations

4. **Path Aliases**: `@/` maps to `./src` (configured in `vite.config.js`)

### Component Categories

**UI Components** (`src/components/ui/`):
- Self-contained visual effects: Button, GlowText, ShinyText, LightRays, PixelBlast, etc.
- Most accept className props and can be styled via Tailwind
- Canvas-based effects render to their own canvas elements

**Layout Components** (`src/components/`):
- `MetallicLogo`: 3D Three.js component with mouse-tracking and responsive scaling
- `ScrollReveal`: GSAP-powered scroll animation wrapper that splits text into words
- `GradualBlur`: Creates blur gradient overlays on parent containers

**Pages** (`src/pages/`):
- Currently: `Home.jsx` (main landing page), `Footer.jsx`
- Home page structure: Hero section with 3D model → ScrollReveal content section

### Styling System

- **Tailwind CSS**: Primary styling method
- **Custom utility**: `cn()` function in `utils/cn.js` merges Tailwind classes intelligently (handles conflicts)
- **Global styles**: `index.css` defines custom animations (e.g., `border-shine` keyframe)
- **Custom font**: Bricolage Grotesque loaded from Google Fonts, configured as `mainFont` in Tailwind

### 3D Graphics Details

**MetallicLogo Component:**
- Loads `seebysound2.glb` model from assets
- Dynamically applies metallic PBR materials (high metalness, low roughness)
- Mouse position drives Y-axis rotation (smoothed via lerp)
- Floating animation via sine wave on Y position
- Responsive scaling: mobile (1x), tablet (1.5x), desktop (2x)
- Environment map: "sunset" preset for colorful reflections

## Project Conventions

### Import Patterns
- Use `@/` alias for all src imports: `import Home from "@/pages/Home"`
- Asset imports reference `/src/assets/` directly in paths

### Component Patterns
- Functional components with hooks (no class components)
- Effects that require cleanup use `useEffect` with return cleanup function
- Window event listeners always cleaned up in useEffect returns
- Refs used for DOM manipulation and Three.js object references

### File Naming
- React components: PascalCase (e.g., `MetallicLogo.jsx`, `Home.jsx`)
- Utilities: camelCase (e.g., `cn.js`)
- Constants: camelCase with named exports (e.g., `index.js` exporting `navLinks`)
- Config files: lowercase with extensions (e.g., `vite.config.js`)

### ESLint Configuration
- Unused variables allowed if they match pattern `^[A-Z_]` (constants/React components)
- React Hooks rules enforced via `eslint-plugin-react-hooks`
- React Refresh fast refresh rules via `eslint-plugin-react-refresh`

## Working with 3D Content

### Adding/Modifying 3D Models
1. Place GLB/GLTF files in `src/assets/`
2. Use `useGLTF` hook from `@react-three/drei`
3. Clone the scene if reusing: `const clonedScene = scene.clone()`
4. Traverse scene to modify materials: `clonedScene.traverse((child) => {...})`
5. Add preload at component bottom: `useGLTF.preload('/src/assets/model.glb')`

### Canvas Setup Pattern
- Always include `shadows` prop for shadow support
- Configure tone mapping for better color: `toneMapping: THREE.ACESFilmicToneMapping`
- Use `PerspectiveCamera` from drei for easier camera setup
- Add Environment component for realistic reflections

## Working with Animations

### Scroll Animations
- GSAP ScrollTrigger is registered globally in `ScrollReveal.jsx`
- Standard pattern: `gsap.fromTo(element, fromVars, toVars)` with `scrollTrigger` config
- Always clean up: `return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill())`
- Lenis smooth scrolling may affect scroll positions—test on actual browser

### Three.js Animations
- Use `useFrame` hook for render loop: `useFrame((state) => {...})`
- `state.clock.elapsedTime` provides time for sine/cosine animations
- `THREE.MathUtils.lerp()` for smooth interpolation
- Mouse tracking: normalize to -1 to 1 range: `(event.clientX / window.innerWidth) * 2 - 1`

## Important Technical Notes

### Performance Considerations
- Three.js components clone scenes to avoid material sharing issues
- Custom canvas effects (PixelBlast, LightRays) render independently—multiple instances can impact performance
- GSAP animations use `scrub: true` for smooth 1:1 scroll coupling
- `willChange: 'opacity'` hints used for animation optimization

### Responsive Behavior
- 3D logo scales down on mobile/tablet via window resize listeners
- Text sizes use responsive Tailwind classes: `text-5xl sm:text-8xl`
- Navbar uses horizontal scroll on mobile: `overflow-x-auto`
- Breakpoints: sm (640px), lg (1024px)

### State Management
- No global state library (Redux, Zustand, etc.)
- Component-local state with useState
- Refs for DOM/Three.js object references
- Props drilling for simple data passing

## Deployment Notes

- Build output goes to `dist/` directory (ignored by git)
- Static assets in `public/` directory are copied to dist root
- Assets in `src/assets/` are bundled and get hashed filenames
- Vite automatically optimizes and code-splits during build
