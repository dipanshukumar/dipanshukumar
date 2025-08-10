import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "London Stone and Cheshire Paving",
      description: "Complete redesign and optimization of UK client's website including checkout, about us, and product listings. Built with HTML, CSS, JavaScript, Figma, and AWS S3.",
      image: "/project-images/londonstone.png",
      technologies: ["AWS", "HTML/CSS", "JavaScript", "Figma"],
      category: "frontend",
      liveUrl: "https://www.londonstone.co.uk/",
      featured: true
    },
    {
      id: 2,
      title: "Telstra Web App Migration",
      description: "Migrated legacy Drupal site to React.js & Next.js. Built a micro frontend using webpack Module Federation and created multiplepages and integrated Cypress and Jest testing.",
      image: "/project-images/telstra.png",
      technologies: ["React.js", "Next.js", "Auth0", "TypeScript", "Cypress", "HTML/CSS", "AWS"],
      category: "frontend",
      liveUrl: "https://dev.telstra.com/",
      featured: true
    },
    {
      id: 3,
      title: "Extramarks Platform",
      description: "Contributed to critical modules of the Extramarks educational platform. Built responsive UI with React, Redux, HTML5, CSS3, and AWS integration.",
      image: "/project-images/extramarks.png",
      technologies: ["React", "Redux", "HTML5", "CSS3", "AWS", "JavaScript"],
      category: "frontend",
      liveUrl: "https://www.extramarks.com/",
      featured: false
    },
    {
      id: 4,
      title: "GEM Government Marketplace",
      description: "Built features for the Indian Government's GEM (Government e-Marketplace) platform. Delivered e-commerce solutions for government procurement.",
      image: "/project-images/gem.png",
      technologies: ["Angular", "JavaScript", "HTML/CSS"],
      category: "frontend",
      liveUrl: "https://gem.gov.in/",
      featured: false
    },
    {
      id: 5,
      title: "E-commerce Portals",
      description: "Delivered e-commerce platforms for UAE clients: Sony UAE, Jumbo Electronics, Axiom Telecom. Built complete shopping experiences with modern web technologies.",
      image: "/project-images/hidesign.png",
      technologies: ["React", "JavaScript", "HTML/CSS", "AWS"],
      category: "frontend",
      liveUrl: "https://hidesign.com/",
      featured: false
    },
    {
      id: 6,
      title: "Crossword E-commerce",
      description: "Developed e-commerce platform for Crossword bookstore. Built responsive design and shopping cart functionality with modern web technologies.",
      image: "/project-images/crossword.png",
      technologies: ["React", "JavaScript", "Bootstrap", "HTML/CSS"],
      category: "frontend",
      liveUrl: "https://www.crossword.in/",
      featured: false
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Eye size={20} />
                      <span>Live Demo</span>
                    </a>
                    
                  </div>
                </div>
                {project.featured && <span className="featured-badge">Featured</span>}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="technology-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>Interested in working together?</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
