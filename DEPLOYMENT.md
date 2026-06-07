# Deployment Guide

## Hosting Platforms

### 🔵 Vercel (Recommended - Easiest)

**Best for**: Optimized React apps, automatic deployments

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Create Vercel Account**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub

3. **Import Project**
   - Click "New Project"
   - Select your portfolio repository
   - Click "Import"
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

4. **Configure Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add your `.env.local` variables

5. **Custom Domain**
   - Go to Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### 🔴 Netlify

**Best for**: Easy drag-and-drop, good CMS integration

1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Visit [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect GitHub for auto-deploy

3. **Git-based Deployment**
   - Push to GitHub
   - In Netlify: "New site from Git"
   - Select repository
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Environment Variables**
   - Site settings → Build & deploy → Environment
   - Add your variables

### 🟦 GitHub Pages

**Best for**: Free hosting, portfolio showcase

1. **Update `vite.config.js`**
   ```javascript
   export default {
     base: '/portfolio/',  // Replace with your repo name
     // ... rest of config
   }
   ```

2. **Update `package.json`**
   ```json
   "scripts": {
     "deploy": "npm run build && git add dist -f && git commit -m 'Deploy' && git subtree push --prefix dist origin gh-pages"
   }
   ```

3. **Enable GitHub Pages**
   - Repository → Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages, /root
   - Save

4. **Deploy**
   ```bash
   npm run deploy
   ```

### ☁️ AWS Amplify

**Best for**: AWS integration, continuous deployment

1. **Connect Repository**
   - AWS Amplify console
   - Connect your GitHub repository

2. **Configure Build**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Add environment variables

3. **Deploy**
   - Amplify automatically deploys on push

### 🟥 Firebase Hosting

**Best for**: Google ecosystem, real-time database

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```

3. **Configure**
   - Public directory: `dist`
   - Single-page app: Yes
   - Don't overwrite index.html

4. **Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

---

## Domain Configuration

### Buy a Domain

- **Namecheap**: Affordable domains
- **GoDaddy**: Popular, many extensions
- **Google Domains**: Google integration

### Add Custom Domain

#### Vercel
1. Vercel Dashboard → Settings → Domains
2. Add domain name
3. Update DNS at registrar pointing to Vercel nameservers

#### Netlify
1. Domain settings → Custom domain
2. Update DNS records at registrar
3. Netlify provides A and CNAME records

#### GitHub Pages
1. Repository → Settings → Pages
2. Add custom domain
3. Update DNS at registrar
4. Check "Enforce HTTPS"

---

## Performance Optimization

### Before Deployment

1. **Minify & Optimize**
   ```bash
   npm run build  # Already optimized by Vite
   ```

2. **Check Bundle Size**
   ```bash
   npm install -g vite-plugin-visualizer
   npm run build -- --analyzeBundle
   ```

3. **Lighthouse Check**
   - Open `dist/index.html` in browser
   - Run Chrome DevTools Lighthouse
   - Fix any issues

4. **Test Performance**
   - [PageSpeed Insights](https://pagespeed.web.dev)
   - [GTmetrix](https://gtmetrix.com)
   - [WebPageTest](https://www.webpagetest.org)

### Image Optimization

- Use JPEG for photos (highest compression)
- Use WebP for modern browsers
- Compress all images:
  - [TinyPNG](https://tinypng.com)
  - [Squoosh](https://squoosh.app)

### Code Splitting

Already configured in Vite - no additional work needed.

---

## SSL/HTTPS

All recommended platforms provide automatic SSL:
- ✅ Vercel
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Firebase
- ✅ AWS Amplify

No additional configuration needed.

---

## Monitoring & Analytics

### Add Google Analytics

1. **Create Google Analytics Account**
   - Visit [analytics.google.com](https://analytics.google.com)
   - Create new property

2. **Add Tracking Code**
   Edit `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

3. **Verify Installation**
   - Analytics → Real-time
   - Open your site in new tab
   - Should see visitor appear

### Add Vercel Analytics

- Vercel automatically includes Web Analytics
- Check dashboard for insights

---

## Continuous Deployment

### Automatic Deployments

All platforms support automatic deployment on push:

1. **GitHub Push Triggers Build**
   - Every commit to main branch
   - Automatic deployment on success
   - Rollback on failure

2. **Preview Deployments**
   - Create pull request
   - Automatic preview URL generated
   - Share preview before merging

### Deployment Status Badge

Add to `README.md`:

```markdown
[![Deployed with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https%3A%2F%2Fgithub.com%2Fyourname%2Fportfolio)
```

---

## Troubleshooting Deployment

### Build Fails

1. **Check local build**
   ```bash
   npm run build
   ```

2. **Check environment variables**
   - Ensure all required variables are set
   - Check naming for typos

3. **Check Node version**
   - Platform should support Node 16+
   - Check platform settings

### Site Shows Blank Page

1. **Check console errors**
   - Open DevTools → Console
   - Look for JavaScript errors

2. **Verify build output**
   - Check `dist/index.html` exists
   - Check assets are loading

3. **Check routing**
   - For single-page apps, configure server to serve `index.html`
   - Most platforms do this automatically

### Styles Not Loading

1. **Check CSS import**
   - Verify `main.jsx` imports CSS
   - Check asset paths in CSS

2. **Clear cache**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Clear browser cache

3. **Check base URL**
   - If using GitHub Pages, ensure base is set correctly

---

## Email Service Setup

### EmailJS Configuration

1. **Verify Credentials**
   - Check `.env.local` has all variables
   - Verify service is active in EmailJS

2. **Test Email**
   - Submit contact form
   - Check email account for test message

3. **Troubleshoot**
   - Check browser console for errors
   - Verify sender email is authorized
   - Check EmailJS service limits (free: 200/month)

---

## Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] All sections render correctly
- [ ] Mobile responsive
- [ ] Dark mode works
- [ ] Contact form sends emails
- [ ] Links work correctly
- [ ] Images load properly
- [ ] No console errors
- [ ] Fast load times
- [ ] Analytics installed
- [ ] SSL certificate active
- [ ] Domain configured
- [ ] Auto-deployment working

---

## Support & Help

### Platform Support

- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages**: [pages.github.com](https://pages.github.com)
- **Firebase**: [firebase.google.com/docs](https://firebase.google.com/docs)

### Community Help

- [Stack Overflow](https://stackoverflow.com)
- [Dev.to](https://dev.to)
- [Reddit r/webdev](https://reddit.com/r/webdev)

---

**Deployment Complete! 🚀**
