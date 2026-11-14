# Htet Khant Linn | Data Analyst Portfolio

A minimalist, high-performance professional portfolio website built for Data Analysts and Statistics & Data Science professionals. Designed with a focus on typography, whitespace, and clear information hierarchy.

## 🚀 Built With

- **React 19** - UI components and rendering
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Modern utility-first styling
- **Motion** - Fluid layout animations and transitions (`motion/react`)
- **Lucide React** - Clean and consistent iconography
- **TypeScript** - Type-safe development

## ✨ Key Features

- **Minimalist Aesthetic**: High-contrast, clean design that prioritizes content readability.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Dynamic Content**: Data-driven architecture using `src/portfolioData.ts` for easy maintenance.
- **Automated Deployment**: Ready-to-use GitHub Actions workflow for seamless CI/CD to GitHub Pages.

## 🛠️ Usage & Customization

1. **Modify Portfolio Data**:
   Open `src/portfolioData.ts` and update the content with your personal information, experience, and projects.

2. **Update Profile Photo**:
   Place your photo in the `public/` directory and update the `profileImage` path in `src/portfolioData.ts`.

3. **Run Locally**:
   ```bash
   npm ci
   npm run dev
   ```

   Use a Node.js version supported by the declared Vite plugins (Node 20.19+ or 22.12+). The development server uses port 3000; open `http://localhost:3000/my-portfolio/`. No API keys or environment variables are required. The Gemini summarizer listed in Projects is a separate linked project.

4. **Check and Build**:
   ```bash
   npm run lint
   npm run build
   npm run preview
   ```
   `lint` runs the TypeScript check; it does not run ESLint. The build outputs static files to `dist/`. `npm run clean` removes `dist/` and any generated `server.js` using Node.js and works on Windows, macOS, and Linux.

5. **Deploying to GitHub Pages**:
   - Push this repository to GitHub.
   - Go to **Settings > Pages**.
   - Select **GitHub Actions** as the source for your build and deployment.
   - The workflow in `.github/workflows/deploy.yml` uses `npm ci`, checks TypeScript, builds, and deploys on pushes to `main` or manual runs.
   - Vite's `base` is `/my-portfolio/`. Review it if the repository name or hosting location changes.

## Project Structure

- `src/portfolioData.ts`: typed portfolio content and links.
- `src/App.tsx`: page sections, layout, and animations.
- `src/components/Sidebar.tsx`: section navigation and profile photo.
- `src/components/Icon.tsx`: Lucide icon rendering.
- `src/index.css`: Tailwind CSS v4 entry point; the Vite plugin supplies integration without a separate Tailwind configuration file.
- `public/`: static assets copied into the build.
- `index.html`: page title, description, and social metadata.
- `vite.config.ts`: build base path, plugins, and development settings.

Navigation uses same-page anchors such as `#projects`; no routing library or backend is required. Projects, certifications, blogs, and interviews are displayed when their arrays contain entries.

## Links Awaiting Destinations

Missing destinations are omitted from the data and rendered without clickable links, while retaining their visible content:

- Website social icon.
- Independent freelance work company link.
- Academic and Research Skills Workshop certificate.
- Ethical Leadership Network Collaborative Course certificate.
- Sar Phart Win civic engagement project (its misplaced date is now the period, March 2026).
- Yoe Yar civic engagement project.

Add an actual `url` or `companyUrl` when available; do not use `#` as a placeholder. Existing external destinations have not been checked for availability.

## 📄 License

No license file is currently included. Add a license file before declaring a license for reuse.

---
