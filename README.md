# Htet Khant Linn | Data Analyst Portfolio

A minimalist, high-performance professional portfolio website built for Data Analysts and Statistics & Data Science professionals. Designed with a focus on typography, whitespace, and clear information hierarchy.

## 🚀 Built With

- **React 18** - UI components & state management
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Modern utility-first styling
- **Framer Motion** - Fluid layout animations and transitions (motion/react)
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
   npm install
   npm run dev
   ```

4. **Deploying to GitHub Pages**:
   - Push this repository to GitHub.
   - Go to **Settings > Pages**.
   - Select **GitHub Actions** as the source for your build and deployment.
   - The included workflow in `.github/workflows/deploy.yml` will handle the rest.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

