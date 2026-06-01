# Andrés Zelaya - Professional Portfolio

> 🔗 **Visit the live portfolio:** [https://opsord.github.io/azelaya-portfolio](https://opsord.github.io/azelaya-portfolio)

---

This is the repository for my professional software development portfolio. It is a responsive static website, designed with a modern dark mode aesthetic, dynamic glassmorphism, and glowing borders.

## 🚀 Project Features

* **Modern Stack**: Built using **React 19**, **TypeScript**, and **Vite**.
* **Fluid Styling**: Styled with **Tailwind CSS** for a clean, responsive layout.
* **Automated CI/CD**: Integrated with a continuous deployment pipeline via **GitHub Actions** that automatically builds and deploys the site to **GitHub Pages** on every push to the `main` branch.
* **Package Manager**: Optimized using **pnpm** for ultra-fast dependency installation.
* **Automated Certifications Section**: Powered by a custom Node.js script (`scripts/generate-certs.js`) that:
  * Automatically scans the public assets folder `public/certs/`.
  * Extracts metadata (Title, Issuer, Date, and Skills) based on the PDF filename structure.
  * Generates the dynamic data file `src/data/certifications.json` at build time to render React cards automatically.

---

## 🛠️ Repository Structure

The project is structured within the workspace root as follows:
* `azelaya-portfolio/` - Contains the web application codebase (React + TypeScript + Vite).
  * `public/certs/` - Directory storing certification PDF files.
  * `scripts/generate-certs.js` - Node.js script for automated PDF parsing.
  * `src/sections/` - Portfolio sections (Hero, About, Trajectory, Projects, Certifications, Contact).
* `.github/workflows/deploy.yml` - GitHub Actions pipeline definition.

---

## 💻 Local Development

To run this project in your local environment:

### Prerequisites:
* **Node.js** v22.13 or higher.
* **pnpm** v11 or higher.

### Steps:
1. Clone the repository.
2. Navigate to the project directory:
   ```bash
   cd azelaya-portfolio
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Start the local development server:
   ```bash
   pnpm run dev
   ```
5. To build for production:
   ```bash
   pnpm run build
   ```
