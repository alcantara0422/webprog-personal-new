import '../styles/Section.css';

const ITExperience = () => {
  const projects = [
    {
      title: "Web Development",
      description: "Building responsive and dynamic web applications using modern frameworks",
      details: [
        "Frontend development with React",
        "Responsive design implementation",
        "User interface optimization",
        "Performance improvements"
      ],
      tech: ["React", "JavaScript", "HTML5", "CSS3"],
      icon: "💻"
    },
    {
      title: "Python Projects",
      description: "Developing efficient solutions using Python programming",
      details: [
        "Data processing applications",
        "Automation scripts",
        "UI/UX implementation",
        "Problem-solving tools"
      ],
      tech: ["Python", "NumPy", "Pandas"],
      icon: "🐍"
    },
    {
      title: "Java Applications",
      description: "Creating robust and scalable Java applications",
      details: [
        "Object-oriented programming",
        "Application architecture",
        "Code optimization",
        "Best practices implementation"
      ],
      tech: ["Java", "Spring", "JUnit"],
      icon: "☕"
    }
  ];

  const achievements = [
    {
      title: "Open Source",
      items: [
        "Active contributor to community projects",
        "Bug fixes and feature implementations",
        "Code review participation"
      ],
      icon: "🌟"
    },
    {
      title: "Academic Excellence",
      items: [
        "Consistently high academic performance",
        "Active participation in tech events",
        "Peer mentoring and collaboration"
      ],
      icon: "📚"
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="section-content">
        <h1 className="section-title">IT Experience</h1>

        <div className="experience-container">
          <div className="projects-section">
            <h2 className="section-subtitle">Technical Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="section-card project-card">
                  <div className="project-header">
                    <span className="project-icon">{project.icon}</span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  <p className="section-text">{project.description}</p>
                  <ul className="project-details">
                    {project.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  <div className="tech-stack">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="achievements-section">
            <h2 className="section-subtitle">Achievements</h2>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="section-card achievement-card">
                  <div className="achievement-header">
                    <span className="achievement-icon">{achievement.icon}</span>
                    <h3 className="achievement-title">{achievement.title}</h3>
                  </div>
                  <ul className="achievement-list">
                    {achievement.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-container {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 1.5rem;
        }

        .project-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .project-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .project-icon {
          font-size: 2rem;
        }

        .project-title {
          color: var(--primary-dark-brown);
          font-size: 1.2rem;
          margin: 0;
        }

        .project-details {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .project-details li {
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .project-details li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--secondary-dark-brown);
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }

        .tech-tag {
          background-color: var(--primary-dark-brown);
          color: var(--cream);
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.85rem;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 1.5rem;
        }

        .achievement-card {
          height: 100%;
        }

        .achievement-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .achievement-icon {
          font-size: 2rem;
        }

        .achievement-title {
          color: var(--primary-dark-brown);
          font-size: 1.2rem;
          margin: 0;
        }

        .achievement-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .achievement-list li {
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .achievement-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--secondary-dark-brown);
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .projects-grid,
          .achievements-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ITExperience;
