# Nandini Jampani — Portfolio

A pastel-themed React portfolio built with Vite. Features expandable client cards with responsibilities, a skills grid, and smooth animations.

## Tech Stack

- React 18
- Vite 5
- CSS Modules
- GitHub Pages (via GitHub Actions)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Deploying to GitHub Pages

1. **Create a new GitHub repo** named `nandini-portfolio` (or any name you like).

2. **Update `vite.config.js`** — set `base` to match your repo name:
   ```js
   base: '/your-repo-name/',
   ```

3. **Push this code** to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/nandini-portfolio.git
   git push -u origin main
   ```

4. **Enable GitHub Pages** in your repo:
   - Go to **Settings → Pages**
   - Under *Source*, select **GitHub Actions**

5. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy on every push to `main`.

6. Your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/nandini-portfolio/
   ```

## Project Structure

```
nandini-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.jsx / Hero.module.css
│   │   ├── SectionLabel.jsx / SectionLabel.module.css
│   │   ├── SkillsGrid.jsx / SkillsGrid.module.css
│   │   ├── ClientCard.jsx / ClientCard.module.css
│   │   └── Education.jsx / Education.module.css
│   ├── data/
│   │   └── resume.js          ← all your resume content lives here
│   ├── App.jsx / App.module.css
│   ├── main.jsx
│   └── index.css
├── .github/workflows/deploy.yml
├── index.html
├── vite.config.js
└── package.json
```

## Customizing Content

All resume data is in `src/data/resume.js`. Edit that file to update any text, add clients, or change skills — no component changes needed.
