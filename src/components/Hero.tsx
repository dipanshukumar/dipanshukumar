import React from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero" role="banner" aria-label="Hero Section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I&apos;m <span className="highlight">Dipanshu Kumar</span>
          </h1>

          <h2 className="hero-subtitle">
            Senior Software Engineer | Senior Frontend & Fullstack Engineer
          </h2>

          <p className="hero-description">
            Senior Software Engineer with 7+ years of experience delivering
            enterprise web applications with React.js, Next.js, TypeScript,
            JavaScript, Redux, Node.js, Express.js, Java, and Spring Boot.
            Skilled in micro-frontends, server-side rendering (SSR), REST API
            integration, performance optimization, and automated testing.
          </p>

          <div className="hero-buttons">
            {/* Converted to native anchors for structural scroll navigation */}
            <a
              href="#projects"
              className="btn btn-primary"
              aria-label="View my projects"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              aria-label="Get in touch"
            >
              Get In Touch
            </a>
          </div>

          <nav className="hero-social" aria-label="Social Media Links">
            <a
              href="https://github.com/dipanshukumar"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <GitHub sx={{ fontSize: 24 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/dipanshu-kumar-449b48133/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <LinkedIn sx={{ fontSize: 24 }} />
            </a>
            <a
              href="mailto:dipanshukumar93@gmail.com"
              className="social-link"
              aria-label="Email Contact"
            >
              <Email sx={{ fontSize: 24 }} />
            </a>
          </nav>
        </div>

        {/* Converted to a structural anchor for clean page navigation */}
        <a
          href="#about"
          className="scroll-indicator"
          aria-label="Scroll to about section"
        >
          <KeyboardArrowDown sx={{ fontSize: 24 }} />
          <span>Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
