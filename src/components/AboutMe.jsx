import '../styles/Section.css';

const AboutMe = () => {
  return (
    <section id="about" className="section">
      <div className="section-content">
        <h1 className="section-title">About Me</h1>
        <div className="section-grid">
          <div className="section-card">
            <h2 className="section-subtitle">Personal Profile</h2>
            <p className="section-text">
              I am a passionate individual whose heart beats for both technology and active living.
              As a varsity student pursuing Information Technology, I bring together the precision of
              coding with the creativity of my hobbies - basketball and cooking.
            </p>
          </div>

          <div className="section-card">
            <h2 className="section-subtitle">Basketball Journey</h2>
            <p className="section-text">
              Basketball isn't just a sport for me - it's a way of life. It teaches me valuable
              lessons about teamwork, strategy, and perseverance. Whether I'm on the court or
              coding at my desk, I apply the same principles of dedication and continuous improvement.
            </p>
          </div>

          <div className="section-card">
            <h2 className="section-subtitle">Culinary Passion</h2>
            <p className="section-text">
              My love for cooking goes beyond just preparing meals. It's about creativity,
              precision, and bringing joy to others. Just like in programming, cooking requires
              attention to detail, experimentation, and the willingness to learn from both
              successes and failures.
            </p>
          </div>

          <div className="section-card">
            <h2 className="section-subtitle">Skills</h2>
            <p className="section-text">
              Proficient in front-end development with React, HTML, CSS, and JavaScript.
              Experienced in back-end development with Node.js and Python.
              Familiar with database management systems such as SQL and NoSQL.
              Continuously learning new technologies and frameworks to expand my skill set.
            </p>
          </div>

          <div className="section-card">
            <h2 className="section-subtitle">Values</h2>
            <ul className="section-text">
              <li>Integrity and Honesty</li>
              <li>Continuous Learning and Growth</li>
              <li>Teamwork and Collaboration</li>
              <li>Creativity and Innovation</li>
            </ul>
          </div>

          <div className="section-card">
            <h2 className="section-subtitle">Life Philosophy</h2>
            <p className="section-text">
              My vision of a comfortable life extends beyond material success. It's about finding
              fulfillment in what I do, maintaining a healthy work-life balance, and creating
              positive impact through technology. Happiness, for me, comes from continuous growth,
              meaningful relationships, and the joy of creating something valuable.
            </p>
          </div>
        </div>

        <div className="about-quote">
          <blockquote>
            "Combining my passion for technology with my love for basketball and cooking,
            I strive to bring creativity and precision to everything I do."
          </blockquote>
        </div>
      </div>

      <style jsx>{`
        .about-quote {
          margin-top: 2rem;
          padding: 2rem;
          background-color: rgba(92, 64, 51, 0.05);
          border-radius: 8px;
          text-align: center;
        }

        blockquote {
          font-size: 1.2rem;
          color: var(--secondary-dark-brown);
          font-style: italic;
          margin: 0;
          position: relative;
        }

        blockquote::before,
        blockquote::after {
          content: '"';
          font-size: 2rem;
          color: var(--light-brown);
          position: absolute;
          top: -1rem;
        }

        blockquote::before {
          left: -1rem;
        }

        blockquote::after {
          right: -1rem;
          transform: rotate(180deg);
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
