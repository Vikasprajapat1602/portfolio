# Modern Portfolio Website

A fully responsive, production-ready personal portfolio website built with React.js, Vite, Tailwind CSS, and Framer Motion.

## Features

### 🎨 Design & UX
- **Glassmorphism Design**: Modern glass effect UI components
- **Dark/Light Mode Toggle**: Seamless theme switching with localStorage persistence
- **Smooth Animations**: Powered by Framer Motion for delightful user interactions
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Professional Gradient Colors**: Carefully chosen cyan and blue color palette
- **Consistent Typography**: Clean, modern font styling throughout

### 📱 Core Sections

1. **Hero Section**
   - Full-screen hero with animated typing effect
   - Professional introduction with name and role
   - Call-to-action buttons for projects and contact
   - Animated background with gradient orbs
   - Scroll indicator animation

2. **About Section**
   - Professional profile image
   - Comprehensive bio and career objectives
   - Timeline-style education details
   - Professional experience cards with descriptions
   - Hover effects on all interactive elements

3. **Skills Section**
   - Skills organized by category:
     - Programming Languages
     - Frontend Development
     - Backend Development
     - Databases
     - Tools & Technologies
   - Animated progress bars
   - Skill level indicators
   - Icon support for visual appeal

4. **Projects Section**
   - Dynamic project cards loaded from JSON
   - Project image with hover effects
   - Technology tags
   - GitHub and Live Demo links
   - Search functionality
   - Technology-based filtering
   - Modal popup for detailed project information

5. **Certificates Section**
   - Certificate gallery with images
   - Organization and issue date information
   - Lightbox preview functionality
   - View and download buttons
   - Smooth animations on card interactions

6. **Contact Section**
   - Contact form with validation
   - Name, Email, Subject, Message fields
   - Real-time form validation
   - EmailJS integration for email sending
   - Success and error notifications
   - Social media links
   - Contact information (email, phone, location)

### 🎯 Additional Features

- **Sticky Navbar**: Navigation that stays visible while scrolling
- **Mobile Menu**: Hamburger menu for mobile devices
- **Scroll Progress Indicator**: Visual indicator of page scroll position
- **Back-to-Top Button**: Floating button to quickly return to top
- **Scroll Animations**: Elements animate in as they enter viewport
- **Loading Animation**: Professional loading spinner on app start
- **Footer**: Complete with copyright and quick links
- **SEO-Friendly**: Semantic HTML and proper meta tags

## Project Structure

```
portfolio/
├── public/                      # Static assets
├── src/
│   ├── components/             # Reusable components
│   │   ├── Navbar.jsx          # Navigation bar with mobile menu
│   │   ├── BackToTop.jsx       # Back-to-top button
│   │   ├── ScrollProgress.jsx  # Scroll progress indicator
│   │   ├── LoadingSpinner.jsx  # Loading animation
│   │   ├── Modal.jsx           # Project details modal
│   │   └── Notification.jsx    # Toast notifications
│   ├── sections/               # Page sections
│   │   ├── HeroSection.jsx     # Hero/landing section
│   │   ├── AboutSection.jsx    # About & experience
│   │   ├── SkillsSection.jsx   # Skills with progress bars
│   │   ├── ProjectsSection.jsx # Projects with filters
│   │   ├── CertificatesSection.jsx # Certificates gallery
│   │   ├── ContactSection.jsx  # Contact form
│   │   └── Footer.jsx          # Footer
│   ├── data/                   # JSON data files
│   │   ├── skills.json         # Skills data
│   │   ├── projects.json       # Projects data
│   │   ├── certificates.json   # Certificates data
│   │   └── about.json          # About section data
│   ├── hooks/                  # Custom React hooks
│   │   └── useCustomHooks.js   # useDarkMode, useScrollPosition, useInView
│   ├── utils/                  # Utility functions
│   │   └── helpers.js          # Helper functions for email, validation, etc.
│   ├── styles/                 # Global styles
│   │   └── globals.css         # Tailwind imports and custom styles
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Application entry point
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
├── .env.example                # Environment variables example
├── .env.local                  # Local environment variables
└── package.json                # Dependencies and scripts
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Steps

1. **Start development server**
   ```bash
   npm run dev
   ```
   The portfolio will be available at `http://localhost:5173/`

2. **Build for production**
   ```bash
   npm run build
   ```

3. **Preview production build**
   ```bash
   npm run preview
   ```

## Customization Guide

### 1. Update Personal Information

Edit files in `src/data/`:

**`about.json`**: Update your name, role, bio, education, and experience
```json
{
  "about": {
    "name": "Your Name",
    "role": "Your Role",
    "bio": "Your biography...",
  }
}
```

**`skills.json`**: Add/remove skills by category

**`projects.json`**: Add your projects with details

**`certificates.json`**: Add your certifications

### 2. Customize Colors

Edit `tailwind.config.js` to change the color scheme

### 3. Update Contact Information

In `ContactSection.jsx`, update email, phone, location, and social links

### 4. Setup EmailJS for Contact Form

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Create a service and template
3. Add credentials to `.env.local`
4. Update recipient email in code

### 5. Replace Images

- Update profile image URL in `about.json`
- Update project images in `projects.json`
- Update certificate images in `certificates.json`

## Technologies Used

- **React 19**: UI library
- **Vite 8**: Fast build tool
- **Tailwind CSS 4**: Utility-first CSS framework
- **Framer Motion 12**: Animation library
- **React Icons 5**: Icon library
- **EmailJS 3**: Email service integration

## Best Practices Implemented

✅ **Clean Code**: Well-organized, documented, and modular structure
✅ **Performance**: Optimized rendering and animations
✅ **Accessibility**: Semantic HTML and proper ARIA labels
✅ **SEO**: Proper heading hierarchy and meta tags
✅ **Responsive**: Mobile-first design approach
✅ **Scalability**: Easy to add new sections and content
✅ **Maintainability**: Reusable components and utilities

## Deployment

### Vercel (Recommended)
```bash
npm run build
```

### Netlify
```bash
npm run build
```

Deploy the `dist` folder to your hosting provider.

---

**Made with ❤️ for developers and data scientists**
