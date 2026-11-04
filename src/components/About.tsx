'use client';

import React from "react";
import { motion } from "framer-motion";
import Download from "@mui/icons-material/Download";

const About: React.FC = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Dipanshu_Kumar_Resume_Nov_04_2026.pdf";
    link.download = "Dipanshu_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="about"
      role="region"
      aria-label="About Section"
    >
      <div className="container">
        <motion.header
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.header>

        <div className="about-content">
          <motion.article
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Who I Am</h3>
            <p>
              I am a Senior Software Engineer with more than 7 years of
              experience delivering enterprise web applications and high-performance
              user interfaces. I specialize in React.js, Next.js, TypeScript,
              JavaScript, Redux, Node.js, Express.js, Java, and Spring Boot, with a
              strong focus on micro-frontends, server-side rendering (SSR),
              REST API integration, performance optimization, and automated testing.
            </p>

            <p>
              Throughout my journey, I have contributed to mission-critical
              solutions for clients like Schneider Electric, Telstra, London Stone,
              Extramarks, Sony UAE, and the Government e-Marketplace (GeM)—helping
              achieve 40% faster page loads, 40% fewer reported UI bugs, and 25%
              improvements in Core Web Vitals and page speed.
            </p>

            <dl className="about-stats">
              <div className="stat">
                <dt className="stat-number">7+</dt>
                <dd className="stat-label">Years of Experience</dd>
              </div>
              <div className="stat">
                <dt className="stat-number">15+</dt>
                <dd className="stat-label">Projects Completed</dd>
              </div>
              <div className="stat">
                <dt className="stat-label">Senior Software Engineer</dt>
              </div>
            </dl>

            <button
              className="btn btn-primary"
              onClick={downloadResume}
              aria-label="Download Resume"
            >
              <Download sx={{ fontSize: 20 }} />
              Download Resume
            </button>
          </motion.article>

          <motion.figure
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="profile-image-container">
              <img
                src="/images/profile-photo.jpg"
                alt="Dipanshu Kumar - Senior Software Engineer"
                className="profile-image"
                loading="lazy"
              />
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default About;
