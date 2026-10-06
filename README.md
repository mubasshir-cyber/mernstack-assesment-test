# 🌐 Responsive Navbar (React + Vite)

A clean, modern, and fully responsive navigation bar built with **React** and **Pure CSS**. Designed with custom layouts for **Desktop**, **Tablet**, and **Mobile** viewports.

🔗 **Live Demo**: [https://responsive-navbar-mernstack.netlify.app/](https://responsive-navbar-mernstack.netlify.app/)  
📂 **GitHub Repository**: [https://github.com/mubasshir-cyber/mernstack-assesment-test](https://github.com/mubasshir-cyber/mernstack-assesment-test)

---

## ✨ Features

- **Adaptive Responsive Layouts**:
  - **🖥️ Desktop (≥ 1024px)**: Classic horizontal navbar with logo, navigation links, and a highlighted call-to-action button.
  - **📱 Tablet (768px – 1023px)**: Full-width green sliding header bar with horizontal links, CTA button, and a quick `✕` close trigger.
  - **📲 Mobile (< 768px)**: Full-screen overlay menu featuring centered links, a brand header, and a sticky bottom CTA button.
- **Animated Hamburger Icon**: Smooth 3-bar morph animation when toggling the mobile menu.
- **Scroll Lock**: Automatically disables body background scrolling when the mobile modal is open to ensure a native app-like experience.
- **Window Resize Listener**: Automatically closes mobile/tablet overlays when resizing back to desktop resolution.
- **Pure CSS**: Styled without heavy utility frameworks for minimal bundle size and full layout control.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS3 (Custom Design System, Flexbox, Animations)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 📁 Project Structure

```text
exam/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   └── Navbar.jsx   # Core navbar component & responsive logic
│   ├── App.jsx          # Main demo showcase page
│   ├── index.css        # Global design tokens, typography, and styling
│   └── main.jsx         # React application entry point
├── index.html           # HTML template
├── package.json         # Project metadata and dependencies
└── vite.config.js       # Vite configuration
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/mubasshir-cyber/mernstack-assesment-test.git
cd mernstack-assesment-test
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

### 4. Build for Production
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 📐 Responsive Breakpoints

| Device Category | Viewport Width | Navigation Behavior |
| :--- | :--- | :--- |
| **Desktop** | `>= 1024px` | Standard header bar, links visible inline, hamburger hidden |
| **Tablet** | `768px - 1023px` | Hamburger trigger opens a compact horizontal green bar |
| **Mobile** | `< 768px` | Hamburger trigger opens a full-screen vertical menu |

---

## 💡 How to Customize

- **Add / Edit Links**: Open [src/components/Navbar.jsx](file:///c:/Users/MUBASSIR/OneDrive/Desktop/TuteDude%20Course%27s/MERN%20Stack/exam/src/components/Navbar.jsx) and update the `navLinks` array.
- **Change Brand / Colors**: Open [src/index.css](file:///c:/Users/MUBASSIR/OneDrive/Desktop/TuteDude%20Course%27s/MERN%20Stack/exam/src/index.css) to tweak the primary color theme (`#10b981`), font family, or spacing variables.
