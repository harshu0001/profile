# Harsh Pratap Singh - Portfolio Website

A high-performance, design-driven personal portfolio website built with **Next.js 16**, **Tailwind CSS**, and **Framer Motion**. This project features a premium "Apple-style" aesthetic, emphasizing fluid physics-based animations, glassmorphism, and deep immersion.

## ✨ Features

- **Immersive Hero Section:**
  - Mouse-reactive spotlight effect using `framer-motion` springs.
  - Staggered text reveals and scroll-linked parallax animations.
  
- **Interactive Experience Timeline:**
  - A clean, vertical timeline visualizing professional journey.
  - Active focus states that highlight items as they enter the viewport.

- **Bento Grid Projects:**
  - Responsive grid layout for showcasing work.
  - Glassmorphic cards with custom abstract 3D cover art.
  - Interactive hover states with glow effects.

- **Premium Design System:**
  - **Typography:** Inter (tightly tracked) for a clean, modern look.
  - **Theme:** Deep black backgrounds with subtle noise textures and radial gradients.
  - **Accessibility:** Semantic HTML and hydration-safe rendering.

## 🚀 Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/harshu0001/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Workflow & Customization

The project is structured to be easily customizable via a central data file.

### Updating Content
Navigate to `src/lib/data.ts` (or `lib/data.ts`) to update your personal information:

- **Personal Details:** Name, title, summary, location.
- **Experience:** Add or edit entries in the `work` array.
- **Projects:** Add projects to the `projects` array. Ensure you add corresponding images to `public/images/`.
- **Social Links:** Update the `contact` object.

### Adding New Images
1. Place your image files in the `public/images/` directory.
2. Reference them in `lib/data.ts`:
   ```typescript
   imageUrl: "/images/your-new-image.png"
   ```

### Styling
Global styles are defined in `app/globals.css`, including the noise texture and scrollbar customization. Tailwind configuration is automatic via v4 imports.

## 📦 Deployment

This project is optimized for deployment on **Vercel**.

1. Push your code to a GitHub repository.
2. Import the project in Vercel.
3. Vercel will automatically detect Next.js and configure the build settings (`npm run build`).

## 👤 Author

**Harsh Pratap Singh**

- **GitHub:** [@harshu0001](https://github.com/harshu0001)
- **LinkedIn:** [Harsh Pratap Singh](https://www.linkedin.com/in/harsh-pratap-singh-62b831257/)
- **X (Twitter):** [@prataph229](https://x.com/prataph229)

---

© 2026 Harsh Pratap Singh. All Rights Reserved.
