import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const About = () => {
  const downloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a')
    link.href = '/dipanshu_resume_1.pdf'
    link.download = 'Dipanshu_Resume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="about" role="region" aria-label="About Section">
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
              I am a Senior Frontend Developer and Software Engineer with more than 6 years of experience in developing 
              modern frontend applications and responsive web interfaces. I specialize in React.js, JavaScript, HTML5, CSS3, Next.js and TypeScript, 
              with a strong focus on creating responsive, accessible, and high-performance frontend solutions with excellent user experience.
            </p>
            
            <p>
              Recently worked at Smart Working Solutions, I lead agile processes and 
              implement reusable, scalable codebases. My journey includes delivering optimized solutions for clients 
              like London Stone, Telstra, Extramarks, many more Indian Clients, and a Government's Project GEM.
            </p>

            <dl className="about-stats">
              <div className="stat">
                <dt className="stat-number">6+</dt>
                <dd className="stat-label">Years of Experience</dd>
              </div>
              <div className="stat">
                <dt className="stat-number">10+</dt>
                <dd className="stat-label">Projects Completed</dd>
              </div>
              <div className="stat">
                <dt className="stat-label">Senior Software Engineer</dt>
              </div>
            </dl>

            <button className="btn btn-primary" onClick={downloadResume} aria-label="Download Resume">
              <Download size={20} />
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
  )
}

export default About
