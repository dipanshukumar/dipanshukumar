import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages & Frameworks",
      skills: [
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 70 },
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 70 },
        { name: "Angular", level: 55 },
        { name: "Node.js", level: 50 },
        { name: "React Native", level: 40 }
      ]
    },
    {
      category: "Frontend & Styling",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "SCSS", level: 95 },
        { name: "Bootstrap", level: 90 },
        { name: "JSX", level: 90 },
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "AWS", level: 50 },
        { name: "Webpack", level: 70 },
        { name: "Figma", level: 90 },
        { name: "GitHub Actions", level: 55 },
        { name: "Redux Toolkit", level: 80 }
      ]
    },
    {
      category: "Testing & Methodologies",
      skills: [
        { name: "Jest", level: 70 },
        { name: "Cypress", level: 70 },
        { name: "React Testing Library", level: 70 },
        { name: "Agile/Scrum", level: 80 },
        { name: "Babel", level: 70 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>What I Bring to the Table</h3>
          <div className="summary-grid">
            <div className="summary-item">
              <h4>Modern Web Development</h4>
              <p>Expert in React.js, JavaScript, Next.js, HTML, CSS, SCSS with focus on scalable applications.</p>
            </div>
            <div className="summary-item">
              <h4>Agile Leadership</h4>
              <p>Leading agile processes and implementing reusable, scalable codebases.</p>
            </div>
            <div className="summary-item">
              <h4>Client Delivery</h4>
              <p>Delivered solutions for major clients including Telstra and Government projects.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
