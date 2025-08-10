import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, LinkedinIcon } from 'lucide-react'
import emailjs from 'emailjs-com'
import XIcon from './XIcon'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('') // 'success' or 'error'

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("T69-yhXusjlYu7_FJ")
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')
    
    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message,
        to_email: 'dipanshukumar93@gmail.com'
      }

      const result = await emailjs.send(
        'service_vfjnfxp', // EmailJS service ID
        'template_fxouafx', // EmailJS template ID
        templateParams,
        'T69-yhXusjlYu7_FJ' // EmailJS public key
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "dipanshukumar93@gmail.com",
      link: "mailto:dipanshukumar93@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 87095 92699",
      link: "tel:+918709592699"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Ramgarh, Jharkhand, India",
      link: null
    }
  ]

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/dipanshukumar",
      icon: <Github size={24} />
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dipanshu-kumar-449b48133/",
      icon: <LinkedinIcon size={24} />
    },
    {
      name: "X",
      url: "https://x.com/web_developer31",
      icon: <XIcon size={24} />
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together on your next project</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="contact-link">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-grid">
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
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="success-message">
                  Thank you for your message! I will get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-message">
                  Sorry, there was an error sending your message. Please try again or contact me directly.
                </div>
              )}
              
              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
