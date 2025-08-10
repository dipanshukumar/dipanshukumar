import { motion } from 'framer-motion'
import { ArrowDown, Github, LinkedinIcon, Mail } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero" role="banner" aria-label="Hero Section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Dipanshu Kumar</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Senior Software Engineer
          </h2>
          
          <p className="hero-description">
            Experienced software engineer specializing in React.js, JavaScript, and modern web technologies.
            Passionate about creating scalable, user-centered digital experiences.
          </p>

          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
              aria-label="View my projects"
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
              aria-label="Get in touch"
            >
              Get In Touch
            </button>
          </div>

          <nav className="hero-social"
            aria-label="Social Media Links"
          >
            <a href="https://github.com/dipanshukumar" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub Profile">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/dipanshu-kumar-449b48133/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn Profile">
              <LinkedinIcon size={24} />
            </a>
            <a href="mailto:dipanshukumar93@gmail.com" className="social-link" aria-label="Email Contact">
              <Mail size={24} />
            </a>
          </nav>
        </div>

        <button
          className="scroll-indicator"
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to about section"
        >
          <ArrowDown size={24} />
          <span>Scroll Down</span>
        </button>
      </div>
    </section>
  )
}

export default Hero
