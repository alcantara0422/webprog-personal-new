import '../styles/Section.css';

const Education = () => {
  const skills = {
    programming: [
      { name: 'Java', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'JavaScript', level: 75 },
      { name: 'HTML/CSS', level: 85 }
    ],
    technical: [
      'Web Development',
      'Database Management',
      'Version Control (Git)',
      'Problem Solving',
      'UI/UX Design'
    ],
    soft: [
      'Team Collaboration',
      'Project Management',
      'Time Management',
      'Communication',
      'Adaptability'
    ]
  };

  return (
    <section id="education" className="section">
      <div className="section-content">
        <h1 className="section-title">Education & Skills</h1>
        
        <div className="education-timeline">
          <div className="timeline-item">
            <div className="timeline-content section-card">
              <h2 className="section-subtitle">Information Technology</h2>
              <p className="section-text timeline-date">Current</p>
              <p className="section-text">
                Currently pursuing a degree in Information Technology, focusing on:
              </p>
              <ul className="timeline-details">
                <li>Advanced Programming Concepts</li>
                <li>Web Development and Design</li>
                <li>Database Systems</li>
                <li>Software Engineering Principles</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h2 className="section-subtitle">Technical Expertise</h2>
          <div className="skills-container">
            <div className="skills-card section-card">
              <h3 className="skills-title">Programming Languages</h3>
              <div className="skill-bars">
                {skills.programming.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-grid">
              <div className="section-card">
                <h3 className="skills-title">Technical Skills</h3>
                <ul className="skills-list">
                  {skills.technical.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className="section-card">
                <h3 className="skills-title">Soft Skills</h3>
                <ul className="skills-list">
                  {skills.soft.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          margin-top: 3rem;
        }

        .skills-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .skills-title {
          color: var(--primary-dark-brown);
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
        }

        .skill-bars {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .skill-item {
          width: 100%;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          color: var(--text-dark);
          font-weight: 500;
        }

        .skill-percentage {
          color: var(--secondary-dark-brown);
        }

        .skill-bar {
          height: 8px;
          background-color: rgba(92, 64, 51, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background-color: var(--primary-dark-brown);
          border-radius: 4px;
          transition: width 1s ease-in-out;
        }

        .skills-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .skills-list li {
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
          color: var(--text-dark);
        }

        .skills-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--secondary-dark-brown);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
