# Aegis - Next.js 15 App Router Capstone Project

A modern, high-performance web application scaffold built with **Next.js 15 (App Router)** and **Tailwind CSS**, styled using a bespoke design theme. This project is the initial scaffold for the Frontend AI Engineering capstone track.

## 🔗 Live Demo & Links
* **Live Website**: [https://ai-frontend-capstone-self.vercel.app](https://ai-frontend-capstone-self.vercel.app)
* **GitHub Repository**: [https://github.com/AreejZahra92/ai-frontend-capstone](https://github.com/AreejZahra92/ai-frontend-capstone)

---

## 🎨 Design System & Colors
The project utilizes a custom, modern color theme built on:
* **Primary (Dusty Blue)**: `#6D8DBF` (used for headers, footers, action buttons, active navigation states)
* **Secondary (Peach)**: `#FFD1B6` (used for the global page background, accents, and visual layouts)
* **Typography**: Integrated Geist Sans for clean body text and Geist Mono for code indicators.

---

## 🚀 Routed Pages Checklist
*   **Home (`/`)**: Overview of the project scope and routed pages layout card list.
*   **About (`/about`)**: Background information and project milestones cards.
*   **Dashboard (`/dashboard`)**: Visual analytic stats cards and performance logs mockup graph.
*   **Profile (`/profile`)**: Dynamic account summary layout with avatar display and commits stats.
*   **Settings (`/settings`)**: Account details management featuring our ported **Tailwind SettingsForm** with live inputs validation.
*   **Contact (`/contact`)**: Interactive contact query form with loading and feedback states.
*   **Health (`/health`)**: Server Component that asynchronously fetches data from the JSONPlaceholder API to verify network status.
*   **404 Not Found**: Custom error boundary layout card.

---

## 🛠️ Reusable UI Components
All components are modularized under `src/components/`:
*   **`Navbar.js`**: Responsive navigation bar with client-side mobile menu toggle.
*   **`Footer.js`**: Consistent layout footer with dynamic copyright year.
*   **`PageHeader.js`**: Header helper to display responsive page titles and descriptions.
*   **`Card.js`**: Container container wrapper with custom shadows and rounded borders.
*   **`SettingsForm.js`**: Client-side setting manager with built-in accessibility compliance.

---

## 💻 Local Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root folder (this is already git-ignored) and add:
```env
NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com
```
You can reference [.env.example](.env.example) for template details.

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the result in your browser.

---

## 📦 Build & Deploy

### Production Build
To check linting and build an optimized production bundle:
```bash
# Run ESLint linter
npm run lint

# Compile production bundle
npm run build
```

### Vercel Deployment
This repository is connected directly with Vercel. Pushing to the `main` branch automatically triggers production redeployment.
