# Quick Start Guide

## 🚀 Get Your Portfolio Running in 60 Seconds

### Step 1: Navigate to Project
```bash
cd "E:\D Drive Data\Projects\portfolio"
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Visit: **http://localhost:5173/**

That's it! Your portfolio is now running locally.

---

## 📝 Essential Customizations (5 Minutes)

### 1. Update Your Name
Open `src/data/about.json` and change:
```json
"name": "Your Name Here"
```

### 2. Update Your Role  
In same file, change:
```json
"role": "Your Job Title Here"
```

### 3. Add Your Bio
Change the `bio` field with your professional summary

### 4. Update Social Links
Open `src/sections/ContactSection.jsx` and update links:
- Line with `FaLinkedin`: Your LinkedIn URL
- Line with `FaGithub`: Your GitHub URL
- Line with `FaTwitter`: Your Twitter URL

### 5. Update Email
In same file, change:
```jsx
"your-email@example.com"  // Change to your email
```

---

## 🎨 Key Files to Customize

| File | What to Update |
|------|----------------|
| `src/data/about.json` | Your bio, education, experience |
| `src/data/skills.json` | Your technical skills |
| `src/data/projects.json` | Your portfolio projects |
| `src/data/certificates.json` | Your certifications |
| `tailwind.config.js` | Colors (if you want) |
| `.env.local` | EmailJS credentials |

---

## ✉️ Setup Email (Optional but Recommended)

1. Create free account at: https://www.emailjs.com/
2. Create a new email service
3. Get your credentials:
   - Public Key
   - Service ID
   - Template ID
4. Add to `.env.local`:
   ```
   VITE_EMAILJS_KEY=your_public_key
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   ```

---

## 🏗️ Build for Production

When ready to deploy:

```bash
npm run build
```

This creates a `dist` folder with your production build (ready to deploy).

---

## 🌐 Deploy (Choose One)

### Option A: Vercel (Easiest)
1. Push code to GitHub
2. Go to https://vercel.com/new
3. Select your repository
4. Click Deploy
5. Done! Your site is live

### Option B: Netlify
1. Build locally: `npm run build`
2. Go to https://netlify.com
3. Drag & drop `dist` folder
4. Done! Your site is live

### Option C: GitHub Pages
1. See DEPLOYMENT.md for full instructions
2. Free hosting on GitHub

---

## 🔍 Project Structure Quick Reference

```
src/
├── components/     ← Reusable UI components
├── sections/       ← Page sections (Hero, About, Skills, etc.)
├── data/           ← JSON files with your content
├── hooks/          ← Custom React hooks
├── utils/          ← Helper functions
├── styles/         ← Global CSS styles
├── App.jsx         ← Main app component
└── main.jsx        ← Entry point
```

---

## ✨ Cool Features to Try

1. **Dark Mode**: Click the sun/moon icon in navbar
2. **Scroll Effects**: Scroll down to see animations
3. **Project Filter**: Type in search box to find projects
4. **Project Modal**: Click any project card for details
5. **Back to Top**: Click floating arrow to return to top
6. **Mobile Menu**: Resize browser to see mobile menu
7. **Contact Form**: Try submitting a message

---

## 🛠️ Useful Commands

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm run preview   # Preview production build locally
npm install       # Install dependencies
```

---

## 📖 Full Documentation

- **README.md** - Project overview
- **SETUP_GUIDE.md** - Detailed setup & customization
- **DEPLOYMENT.md** - Hosting & deployment guide
- **FEATURES.md** - Complete feature list

---

## ❓ Common Questions

**Q: How do I change colors?**
A: Edit `tailwind.config.js` → theme → colors

**Q: How do I add more projects?**
A: Edit `src/data/projects.json` and add new project objects

**Q: How do I change animations?**
A: Edit Framer Motion `transition` props in component files

**Q: Is it mobile responsive?**
A: Yes! Fully responsive on all devices

**Q: Can I add new sections?**
A: Yes! Create component in `src/sections/`, import in `App.jsx`

---

## 🎯 Customization Checklist

Before deploying, make sure to:

- [ ] Update name and role
- [ ] Replace profile image
- [ ] Update education/experience
- [ ] Add your skills
- [ ] Add your projects  
- [ ] Add your certificates
- [ ] Update social links
- [ ] Setup EmailJS (optional)
- [ ] Test on mobile
- [ ] Test contact form
- [ ] Change colors if desired
- [ ] Build locally (`npm run build`)

---

## 🚀 Ready to Deploy?

1. Ensure all customizations are done
2. Run `npm run build` locally
3. Choose a hosting platform (Vercel recommended)
4. Follow that platform's instructions
5. Your portfolio is live! 🎉

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

---

## 💡 Pro Tips

1. **Use Cloud Image URLs**: Store images on Cloudinary or similar
2. **Keep JSON Updated**: Update data files as you grow
3. **Test Everywhere**: Check portfolio on different devices
4. **Add Analytics**: Track visitor behavior
5. **Keep Content Fresh**: Update projects regularly

---

## 🎉 You're All Set!

Your professional portfolio is ready to impress! 

**Start by:**
```bash
npm run dev
```

Then visit: **http://localhost:5173/**

Enjoy! 🚀

---

**Questions?** Check SETUP_GUIDE.md for detailed instructions.
