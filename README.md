# ✨ Personal Portfolio — PAKHI SAXENA

A premium personal portfolio website built with **React + Vite + Tailwind CSS + Framer Motion**, featuring a UK-inspired feminine luxury aesthetic with glassmorphism, editorial typography, and smooth animations.

---

## 🖼️ Preview

| Section | Description |
|---|---|
| Hero | Animated blobs, typing effect, floating badges, rotating avatar ring |
| About | Two-column layout with glass image overlay and stat counters |
| Skills | Colour-coded cards with animated progress bars |
| Projects | Hover-reveal cards with GitHub / live links |
| Experience | Vertical timeline with gradient connector lines |
| Education | Sage-themed vertical timeline |
| Achievements | 3×2 icon grid with gold corner accents |
| Contact | Info panel + contact form with success state |
| Footer | Dark charcoal with social links |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm v8+

### Installation

```bash
# 1. Clone or extract the project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder. Deploy it to Vercel, Netlify, or any static host.

---

## 🗂️ Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx             # Responsive navbar with dark mode toggle
│   │   │   └── Footer.jsx             # Footer with social links
│   │   ├── sections/
│   │   │   ├── Hero.jsx               # Animated hero with typing effect
│   │   │   ├── About.jsx              # About + stats
│   │   │   ├── Skills.jsx             # Skill bars by category
│   │   │   ├── Projects.jsx           # Project cards with hover overlay
│   │   │   ├── Experience.jsx         # Work timeline
│   │   │   ├── Education.jsx          # Education timeline
│   │   │   ├── Achievements.jsx       # Achievement cards
│   │   │   └── Contact.jsx            # Contact form + info
│   │   └── ui/
│   │       ├── Loader.jsx             # Loading animation screen
│   │       ├── CursorGlow.jsx         # Cursor glow effect
│   │       ├── ScrollProgressBar.jsx
│   │       ├── ScrollToTop.jsx
│   │       ├── Reveal.jsx             # Scroll-triggered reveal wrapper
│   │       └── SectionHeading.jsx     # Reusable section heading
│   ├── context/
│   │   └── ThemeContext.jsx           # Dark / Light mode context
│   ├── hooks/
│   │   └── index.js                   # useScrollProgress, useScrolled, useTyping
│   ├── data/
│   │   └── portfolio.js               # ⭐ ALL personal content lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## ✏️ Personalising Your Portfolio

**You only ever need to edit one file:**

```
src/data/portfolio.js
```

This file contains every piece of personal content on the site. No component files need to be touched.

### What you can configure

```js
// Personal info
personal.name            // Your full name
personal.firstName       // Used in the navbar logo and loader
personal.profession      // Subtitle under your name
personal.taglines        // Array of strings for the typing effect
personal.bio             // Short paragraph for the hero
personal.bioExtended     // Second paragraph for the About section
personal.avatar          // URL or imported image for your profile photo
personal.location        // e.g. "London, United Kingdom"
personal.resumeUrl       // Link to your CV / resume PDF
personal.email
personal.phone           // Set to null to hide

// Social links
social.github
social.linkedin
social.instagram
social.twitter

// Content arrays
skills[]                 // Categories, items, and proficiency levels (0-100)
projects[]               // Title, description, tags, image, GitHub, live URL, featured flag
experience[]             // Role, company, duration, description, highlights
education[]              // Degree, institution, grade, description
achievements[]           // Title, organisation, year, description, emoji icon

// Contact section copy
contact.heading
contact.subheading
contact.availability
```

---

## 🎨 Design System

### Colour Palette

| Name | Hex | Usage |
|---|---|---|
| Ivory | `#FDFAF4` | Primary background |
| Warm White | `#FAF8F5` | Alternate sections |
| Rose Dusty | `#C9A0A0` | Frontend skill, accents |
| Sage | `#4d7a4d` | Backend skill, success states |
| Gold | `#C9A84C` | Primary accent, CTAs |
| Taupe | `#8A7B6E` | Muted text |
| Charcoal | `#2C2C2C` | Dark text, dark mode base |

### Typography

| Font | Usage |
|---|---|
| Playfair Display | Headings, names, titles |
| Inter | Body text, labels, descriptions |
| Poppins | Eyebrows, badges, tags |

---

## ⚙️ Features

- ✅ Loading animation with monogram spinner
- ✅ Typing effect cycling through taglines
- ✅ Scroll progress bar (rose → gold → sage gradient)
- ✅ Cursor glow following mouse
- ✅ Dark / Light mode toggle (persists in localStorage)
- ✅ Animated hero blobs and floating badges
- ✅ Skill bars with animated fill on scroll-into-view
- ✅ Project cards with hover zoom and overlay links
- ✅ Featured / Show All toggle on projects section
- ✅ Timeline layouts for Experience and Education
- ✅ Achievement cards with icon and gold accent
- ✅ Contact form with loading and success states
- ✅ Scroll-to-top button
- ✅ Responsive navbar with hamburger menu
- ✅ Glassmorphism effects throughout
- ✅ SEO-friendly meta tags in index.html

---

## 📦 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| Vite | 5 | Build tool |
| Tailwind CSS | 3 | Styling |
| Framer Motion | 11 | Animations |
| react-icons | 5 | Social / UI icons |

---

## 🌐 Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the dist/ folder into app.netlify.com
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## 📝 Updating the Contact Form

The contact form currently simulates a submission. To make it functional, replace the `handleSubmit` function in `src/components/sections/Contact.jsx` with your preferred method:

- **Formspree** — formspree.io (free tier, no backend needed)
- **EmailJS** — emailjs.com (sends directly from the browser)
- **Custom API** — POST to your own backend endpoint

---

## 📄 License

MIT — free to use and adapt for your own portfolio.
