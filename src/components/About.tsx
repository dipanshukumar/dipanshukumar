import React from "react";
import Image from "next/image";
import DownloadButton from "./DownloadButton"; // Import the client button

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="about"
      role="region"
      aria-label="About Section"
    >
      <div className="container">
        {/* Removed Framer Motion wrappers for raw semantic HTML elements */}
        <header className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </header>

        <div className="about-content">
          <article className="about-text">
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
                <dt className="stat-number">Senior Software Engineer</dt>
              </div>
            </dl>

            {/* Interactive button isolated into a Client Component */}
            <DownloadButton />
          </article>

          <figure className="about-image">
            <div className="profile-image-container">
              <Image
                src="/images/profile-photo.jpg"
                alt="Dipanshu Kumar - Senior Software Engineer"
                width={500}
                height={500}
                className="profile-image"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false} // Set to true if this section sits above the fold
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
