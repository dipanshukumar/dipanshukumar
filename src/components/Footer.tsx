import React from "react";
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
        {/* Removed motion.div wrappers for lean semantic layout components */}
        <div className="footer-content footer-fade-up">
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
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link social-icon-animate"
                  aria-label={`Visit ${social.name} profile`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom footer-fade-in">
          <div className="footer-line"></div>
          <p className="copyright">
            © {currentYear} Dipanshu Kumar. Made with{" "}
            <Favorite sx={{ fontSize: 16 }} className="heart-icon" /> and Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
