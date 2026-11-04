'use client';

import React from "react";
import { motion } from "framer-motion";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Favorite from "@mui/icons-material/Favorite";
import XIcon from "./XIcon";
import { SocialLink } from "../types";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/dipanshukumar",
      icon: <GitHub sx={{ fontSize: 20 }} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dipanshu-kumar-449b48133/",
      icon: <LinkedIn sx={{ fontSize: 20 }} />,
    },
    {
      name: "X",
      url: "https://x.com/web_developer31",
      icon: <XIcon size={20} />,
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-section">
            <h3>Dipanshu Kumar</h3>
            <p>
              Senior Software Engineer passionate about creating responsive,
              accessible, high-performance web applications and enterprise
              solutions with modern frontend and fullstack technologies.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" aria-label="Navigate to home section">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" aria-label="Navigate to about section">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" aria-label="Navigate to skills section">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" aria-label="Navigate to projects section">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" aria-label="Navigate to contact section">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={`Visit ${social.name} profile`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="footer-line"></div>
          <p className="copyright" suppressHydrationWarning>
            © {currentYear} Dipanshu Kumar. Made with{" "}
            <Favorite sx={{ fontSize: 16 }} className="heart-icon" /> and Next.js.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

