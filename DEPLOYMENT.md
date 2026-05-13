# Deployment Guide: GitHub Pages

This guide will help you deploy your portfolio website to GitHub Pages using GitHub Actions.

## Prerequisites

1.  A GitHub account.
2.  A repository for your portfolio.

## Step-by-Step Instructions

### 1. Update `vite.config.ts` (Optional)

If your website will be hosted at `https://<your-username>.github.io/<your-repo-name>/` (not a custom domain or the main user page), you need to set the `base` property in `vite.config.ts`.

In `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/', // Add this line
  // ... rest of the config
})
```

### 2. Push your code to GitHub

Initialize your git repository and push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### 3. Configure GitHub Pages Settings

1.  Go to your repository on GitHub.
2.  Click on **Settings** (top tab).
3.  Click on **Pages** (left sidebar).
4.  Under **Build and deployment** > **Source**, select **GitHub Actions**.

### 4. How to edit your content

To update your portfolio info, simply edit the file:
`src/portfolioData.ts`

Any changes pushed to the `main` branch will automatically trigger a new deployment if you have the deployment workflow set up.

## Automatic Deployment Workflow

I have already included a deployment workflow in `.github/workflows/deploy.yml`. Once you push this to your repository, it will automatically build and deploy your site to GitHub Pages whenever you push to the `main` branch.

### Deployment Workflow Details
- **Trigger**: Push to `main` branch.
- **Action**: Runs `npm install`, `npm run build`, and uploads the `dist` folder to GitHub Pages.
