# Muhammad Muneeb — DevOps Engineer Portfolio

A modern, fast, and fully responsive React portfolio built with **Next.js** and **Tailwind CSS**, deployed on **Vercel**.

## 🚀 Features

- ✅ Professional experience & work history
- ✅ Certifications & education timeline
- ✅ Detailed skills with proficiency levels (8+ categories)
- ✅ Key projects & achievements showcase
- ✅ GitHub stats integration
- ✅ Fully responsive design
- ✅ Dark theme with cyan accents
- ✅ Smooth scroll navigation
- ✅ SEO optimized with meta tags
- ✅ Lightning-fast performance

## 📋 Page Structure

- **About** — Professional introduction & key profile updates
- **Work** — Experience, responsibilities, and key capabilities
- **Projects** — Major achievements with measurable results
- **Skills** — 8+ skill categories with proficiency levels
- **Education** — Degree and industry certifications
- **Connect** — LinkedIn, Medium, GitHub links & stats

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel (Recommended)

### Option 1: Git Integration (Fastest)

1. Push code to GitHub/GitLab:
   ```bash
   git add .
   git commit -m "React portfolio with resume data"
   git push origin main
   ```

2. Visit [vercel.com](https://vercel.com)

3. Sign up or log in

4. Click **"New Project"** → Select your GitHub repository

5. Vercel auto-detects Next.js and deploys automatically ✨

6. Your portfolio is live at: `your-project-name.vercel.app`

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the interactive prompts and your site deploys instantly.

### Option 3: Manual Deploy

```bash
npm run build
vercel --prod
```

## 📁 Project Structure

```
wintogeno/
├── pages/                    # Next.js pages
│   ├── _app.jsx             # App wrapper
│   ├── _document.jsx        # HTML document
│   └── index.jsx            # Home page
├── components/              # React components
│   ├── Header.jsx           # Sticky header with nav
│   ├── About.jsx            # Professional intro
│   ├── Work.jsx             # Experience & responsibilities
│   ├── Projects.jsx         # Showcase of key projects
│   ├── Skills.jsx           # Skills with proficiency levels
│   ├── Education.jsx        # Education & certifications
│   ├── Connect.jsx          # Links & GitHub stats
│   └── Footer.jsx           # Footer
├── globals.css              # Global Tailwind styles
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
├── jsconfig.json            # JS path aliases (@/)
├── package.json             # Dependencies
└── vercel.json              # Vercel deployment config
```

## 🔧 Customization

### Update Content

Edit component files in `/components`:
- **About.jsx** — Update bio and profile highlights
- **Work.jsx** — Add/modify experience entries
- **Projects.jsx** — Add new projects with achievements
- **Skills.jsx** — Update skill categories and proficiency
- **Education.jsx** — Add certifications and degrees
- **Connect.jsx** — Update social links

### Update Styling

Modify `/globals.css` or `/tailwind.config.js` to customize:
- Color scheme
- Typography
- Spacing & layout
- Dark mode settings

### Domain Configuration

After deploying to Vercel:

1. Go to Project Settings → Domains
2. Add your custom domain (muneeb.dev, portfolio.com, etc.)
3. Follow DNS instructions
4. Domain is active in ~24 hours

## 📊 Performance

- ✅ **Lighthouse Score**: 95+
- ✅ **First Contentful Paint**: < 1s
- ✅ **Largest Contentful Paint**: < 2.5s
- ✅ **Cumulative Layout Shift**: < 0.1

## 🔒 SEO & Meta Tags

Pre-configured with:
- Semantic HTML structure
- Open Graph tags for social sharing
- Description meta tags
- Viewport optimization
- Favicon support

## 🚀 Environment Variables

No environment variables required for basic deployment. For analytics (optional):

```bash
# .env.local (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 📞 Support & Updates

**For Vercel Support:**
- Docs: https://vercel.com/docs
- Status: https://vercel.status.page.io

**For Next.js Help:**
- Docs: https://nextjs.org/docs
- GitHub Issues: https://github.com/vercel/next.js/issues

## 📄 License

This portfolio is open source and available for personal use.

---

**Built with ❤️ using React, Next.js, and Tailwind CSS**

**Deployed on Vercel for speed, reliability, and global CDN performance** 🚀

