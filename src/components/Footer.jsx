import { motion } from 'framer-motion'
import { Github, LinkedinIcon, Heart } from 'lucide-react'
import XIcon from './XIcon'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/dipanshukumar",
      icon: <Github size={20} />
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dipanshu-kumar-449b48133/",
      icon: <LinkedinIcon size={20} />
    },
    {
      name: "X",
      url: "https://x.com/web_developer31",
      icon: <XIcon size={20} />
    }
  ]

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
            <p>Senior Software Engineer passionate about creating amazing digital experiences.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
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
          <p className="copyright">
            © {currentYear} Dipanshu Kumar. Made with <Heart size={16} className="heart-icon" /> and React.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
