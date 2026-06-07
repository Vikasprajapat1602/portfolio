# Portfolio Setup & Customization Guide

## Quick Start

### 1. Install Dependencies
Already installed during project creation. If you need to reinstall:
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Visit `http://localhost:5173/` in your browser.

### 3. Build for Production
```bash
npm run build
```
The `dist` folder contains the production-ready build.

---

## Customization

### Personal Information

#### Profile & Bio
**File**: `src/data/about.json`

```json
{
  "about": {
    "name": "John Developer",              // Change to your name
    "role": "Full Stack Developer & Data Scientist",  // Your role
    "tagline": "Building exceptional digital experiences with modern technologies",
    "bio": "I'm a passionate full-stack developer...",  // Your bio
    "image": "https://images.unsplash.com/...",  // Your profile image URL
    "objectives": "To leverage my technical expertise..."
  }
}
```

#### Education & Experience
In the same `about.json` file:

```json
"education": [
  {
    "degree": "Bachelor of Technology in Computer Science",
    "institution": "Tech University",
    "year": "2019",
    "details": "GPA: 3.8/4.0"
  }
],
"experience": [
  {
    "company": "Tech Innovations Inc",
    "position": "Senior Full Stack Developer",
    "duration": "2022 - Present",
    "details": "Leading the development..."
  }
]
```

### Skills

**File**: `src/data/skills.json`

Add or modify skills by category:

```json
{
  "skills": [
    {
      "category": "Programming Languages",
      "items": [
        {
          "name": "Python",
          "level": 95,            // Proficiency level (0-100)
          "icon": "🐍"            // Emoji or can use React Icons
        }
      ]
    }
  ]
}
```

**Tips**:
- `level`: Controls the animated progress bar width
- `icon`: Use emoji or customize with React Icons (modify components to import specific icons)
- Add new categories by adding new objects to the skills array

### Projects

**File**: `src/data/projects.json`

```json
{
  "projects": [
    {
      "id": 1,
      "title": "AI Chat Application",
      "description": "A real-time chat application powered by AI...",
      "image": "https://images.unsplash.com/photo-1587620962853-3e4e0a93688d?w=500&h=300&fit=crop",
      "technologies": ["React", "Node.js", "MongoDB"],
      "github": "https://github.com/yourname/project",
      "live": "https://project-live-url.com",
      "details": "Built a full-stack chat application..."
    }
  ]
}
```

**Features**:
- Search projects by title/description (built-in)
- Filter by technology (auto-generated from technologies array)
- Click project to view details in modal
- Direct GitHub and Live demo links

### Certificates

**File**: `src/data/certificates.json`

```json
{
  "certificates": [
    {
      "id": 1,
      "title": "AWS Certified Solutions Architect",
      "organization": "Amazon Web Services",
      "issueDate": "2024-03-15",
      "image": "https://images.unsplash.com/photo-1516534775068-bb57e39b7b27?w=300&h=300&fit=crop",
      "credentialUrl": "https://aws.amazon.com/certification"
    }
  ]
}
```

---

## Advanced Customization

### Colors & Theme

**File**: `tailwind.config.js`

Change the primary color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',           // Dark blue
      secondary: '#1e293b',         // Slate
      accent: '#06b6d4',            // Cyan
      'accent-light': '#22d3ee',    // Light cyan
      'gradient-start': '#0f172a',
      'gradient-end': '#1e293b',
    },
  },
},
```

### Animations

**File**: `src/styles/globals.css`

Modify animation speeds and effects:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);    /* Adjust distance */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

In components, adjust animation timing:

```jsx
transition={{ duration: 0.6 }}  // Change duration in seconds
```

### Component Styling

Each section has custom styling. Example:

**File**: `src/sections/HeroSection.jsx`

```jsx
// Adjust animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,  // Delay between children animations
      delayChildren: 0.3,    // Initial delay
    },
  },
};
```

### Navigation

**File**: `src/components/Navbar.jsx`

Update navigation links:

```jsx
const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  // Add more items
];
```

---

## Contact Form Setup

### EmailJS Integration

1. **Create EmailJS Account**:
   - Visit [emailjs.com](https://www.emailjs.com/)
   - Sign up for free account
   - Create a new email service

2. **Get Credentials**:
   - Service ID
   - Template ID
   - Public Key

3. **Create `.env.local`** in project root:
   ```
   VITE_EMAILJS_KEY=your_public_key_here
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   ```

4. **Update Contact Email**:
   **File**: `src/sections/ContactSection.jsx`
   
   ```jsx
   // Line in handleSubmit function
   const result = await sendEmail(
     'your-email@example.com',  // Change to your email
     formData.name,
     formData.email,
     formData.subject,
     formData.message
   );
   ```

5. **Test Form**:
   - Fill out contact form
   - Should receive email at your configured address

### Social Links

**File**: `src/sections/ContactSection.jsx`

Update social media links:

```jsx
const social = [
  { icon: FaLinkedin, link: 'https://linkedin.com/in/yourname' },
  { icon: FaGithub, link: 'https://github.com/yourname' },
  { icon: FaTwitter, link: 'https://twitter.com/yourname' },
];
```

Also update footer and other sections with your actual URLs.

---

## Images & Media

### Replace Images

1. **Profile Image**: 
   - Edit `src/data/about.json`
   - Update `image` URL

2. **Project Images**:
   - Edit `src/data/projects.json`
   - Update `image` URL for each project

3. **Certificate Images**:
   - Edit `src/data/certificates.json`
   - Update `image` URL for each certificate

### Image Sources

- **Free Images**: Unsplash, Pexels, Pixabay
- **CDN**: Use cloud URL or upload to GitHub
- **Local**: Place in `public/` and reference as `/image-name.jpg`

---

## Deployment

### Vercel (Recommended)

```bash
npm run build
```

1. Push code to GitHub
2. Connect repository to Vercel
3. Auto-deploys on every push

### Netlify

```bash
npm run build
```

1. Drag `dist` folder to Netlify
2. Or connect GitHub repo for auto-deploy

### GitHub Pages

1. Update `vite.config.js`:
   ```javascript
   export default {
     base: '/portfolio-repo/',  // Your repo name
     // ... rest of config
   }
   ```

2. Build and deploy to `gh-pages` branch

---

## Performance Optimization

### Image Optimization
- Use JPEG for photos
- Use PNG for transparent graphics
- Compress images (TinyPNG, Squoosh)
- Use appropriate sizes

### Code Splitting
- Already configured with Vite
- Lazy load components if needed

### Animations
- Framer Motion handles GPU acceleration
- Reduces motion for accessibility:
  ```jsx
  prefers-reduced-motion: reduce
  ```

---

## SEO Improvements

### Meta Tags

**File**: `index.html`

```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="developer, react, portfolio">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="your-image-url">
```

### Sitemap & Robots

Add to `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://yourname.com/sitemap.xml
```

---

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Styling Issues
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### EmailJS Not Working
- Check `.env.local` credentials
- Verify EmailJS template setup
- Check console for errors
- Ensure service is active in EmailJS dashboard

### Build Errors
```bash
npm run build
# Check dist folder is created
```

### Dark Mode Not Working
- Check browser localStorage permissions
- Clear browser cache
- Try in incognito mode

---

## Adding New Features

### Add New Section

1. Create component in `src/sections/NewSection.jsx`
2. Import in `App.jsx`
3. Add to JSX render
4. Update navbar navigation

### Add New Data Source

1. Create JSON file in `src/data/`
2. Import in component:
   ```jsx
   import data from '../data/new-data.json'
   ```
3. Render data in component

### Modify Animations

- Edit animation props in components
- Update keyframes in `globals.css`
- Adjust transition timing

---

## Best Practices

✅ Keep data in JSON files (easy to update)
✅ Use Framer Motion for animations
✅ Keep components small and focused
✅ Use custom hooks for reusable logic
✅ Comment complex code
✅ Test on mobile devices
✅ Optimize images before using
✅ Keep dependencies updated

---

## Common Customizations Checklist

- [ ] Update name and role in `about.json`
- [ ] Replace profile image
- [ ] Update education and experience
- [ ] Add your skills
- [ ] Add your projects
- [ ] Add your certificates
- [ ] Setup EmailJS integration
- [ ] Update social media links
- [ ] Change color scheme if desired
- [ ] Update contact information
- [ ] Test on mobile devices
- [ ] Deploy to hosting platform

---

## Support & Resources

- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev
- **Tailwind Docs**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **EmailJS**: https://www.emailjs.com

---

**Happy customizing! 🚀**
