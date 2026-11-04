'use client';

import React from "react";
import { motion } from "framer-motion";
import { SkillCategory } from "../types";

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend & Architecture",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "Redux Toolkit", level: 90 },
        { name: "Micro-Frontends & Module Federation", level: 85 },
        { name: "SSR & Core Web Vitals", level: 90 },
        { name: "Angular", level: 70 },
      ],
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "REST APIs & Integration", level: 90 },
        { name: "PostgreSQL", level: 80 },
        { name: "Java & Spring Boot", level: 75 },
        { name: "MySQL & MongoDB", level: 75 },
      ],
    },
    {
      category: "UI, Styling & Design",
      skills: [
        { name: "HTML5 / CSS3", level: 95 },
        { name: "SCSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Material UI & Ant Design", level: 90 },
        { name: "Responsive UI & Accessibility", level: 95 },
        { name: "Figma", level: 90 },
      ],
    },
    {
      category: "Testing, Cloud & DevOps",
      skills: [
        { name: "Jest & React Testing Library", level: 90 },
        { name: "Cypress", level: 85 },
        { name: "Git / GitHub", level: 90 },
        { name: "Webpack & Babel", level: 85 },
        { name: "AWS S3", level: 80 },
        { name: "GitHub Actions & CI/CD", level: 80 },
        { name: "Agile / Scrum", level: 90 },
      ],
    },
  ];

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
      </div>
    </section>
  );
};

export default Skills;

