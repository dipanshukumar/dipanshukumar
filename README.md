# Dipanshu Kumar - Senior Software Engineer Portfolio

A beautiful, responsive portfolio website built with React, Vite, and Framer Motion. Features smooth animations, modern design, and excellent user experience showcasing my expertise in React.js, Next.js, and modern web technologies.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Fast Performance**: Built with Vite for optimal performance
- **SEO Optimized**: Proper meta tags and structured content
- **Accessible**: WCAG compliant with proper focus management
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Beautiful project cards with filtering
- **Skills Display**: Animated skill progress bars
- **Social Links**: Integrated social media links

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons
- **React Router DOM** - Client-side routing
- **CSS3** - Custom styling with modern features

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/dipanshukumar/dipanshukumar.git
cd dipanshukumar
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

#### 1. Hero Section (`src/components/Hero.jsx`)
```jsx
// Update your name and title
<h1>Hi, I'm <span className="highlight">Dipanshu Kumar</span></h1>
<h2>Senior Software Engineer</h2>

// Update social links
<a href="https://github.com/dipanshukumar">GitHub</a>
<a href="https://linkedin.com/in/dipanshu-kumar-449b48133/">LinkedIn</a>
<a href="mailto:dipanshukumar93@gmail.com">Email</a>
```

#### 2. About Section (`src/components/About.jsx`)
```jsx
// Update your bio and statistics
<p>I'm a Senior Software Engineer with more than 6 years of experience in developing modern web applications...</p>

// Update stats
<span className="stat-number">6+</span> // Years of experience
<span className="stat-number">10+</span> // Projects completed
<span className="stat-label">Senior Software Engineer</span> // Current role
```

#### 3. Skills Section (`src/components/Skills.jsx`)
```jsx
// Update your skills and proficiency levels
const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      // Add your skills
    ]
  }
]
```

#### 4. Projects Section (`src/components/Projects.jsx`)
```jsx
// Update with your actual projects
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Your project description...",
    image: "your-project-image.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "fullstack",
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true
  }
]
```

#### 5. Contact Section (`src/components/Contact.jsx`)
```jsx
// Update contact information
const contactInfo = [
  {
    icon: <Mail size={24} />,
    title: "Email",
    value: "dipanshukumar93@gmail.com",
    link: "mailto:dipanshukumar93@gmail.com"
  }
]

// Update social links
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/dipanshukumar",
    icon: <Github size={24} />
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/dipanshu-kumar-449b48133/",
    icon: <LinkedinIcon size={24} />
  },
  {
    name: "X",
    url: "https://x.com/web_developer31",
    icon: <XIcon size={24} />
  }
]
```

#### 6. Footer (`src/components/Footer.jsx`)
```jsx
// Update footer information
<h3>Dipanshu Kumar</h3>
<p>Senior Software Engineer passionate about creating amazing digital experiences.</p>
```

#### 7. HTML Meta Tags (`index.html`)
```html
<title>Dipanshu Kumar - Senior Software Engineer | React.js, Next.js, TypeScript Expert</title>
<meta name="description" content="Senior Software Engineer with 5+ years experience in React.js, Next.js, TypeScript. Expert in modern web development, AWS, and agile methodologies." />
<meta name="author" content="Dipanshu Kumar" />
```

### Styling

The portfolio uses a modern color scheme with gradients. You can customize the colors in `src/App.css`:

```css
/* Primary gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Accent color */
.highlight {
  background: linear-gradient(45deg, #ffd700, #ffed4e);
}
```

### Adding Your Photo

Replace the placeholder in the About section:

1. Add your photo to `public/images/`
2. Update the About component:
```jsx
<img src="/images/profile-photo.jpg" alt="Dipanshu Kumar - Senior Software Engineer" />
```

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. Deploy: `npm run deploy`

## 🔧 Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: dipanshukumar93@gmail.com
- **LinkedIn**: [Dipanshu Kumar](https://linkedin.com/in/dipanshu-kumar-449b48133/)
- **GitHub**: [dipanshukumar](https://github.com/dipanshukumar)
- **X (Twitter)**: [@web_developer31](https://x.com/web_developer31)

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.

---

Made with ❤️ by Dipanshu Kumar using React and Vite
