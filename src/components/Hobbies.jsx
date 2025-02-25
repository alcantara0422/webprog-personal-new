import '../styles/Section.css';

const Hobbies = () => {
  const basketballDetails = [
    {
      title: "Playing Style",
      description: "Team-oriented player focusing on strategy and coordination",
      icon: "🏀"
    },
    {
      title: "Skills",
      description: "Ball handling, defensive plays, and team coordination",
      icon: "⚡"
    },
    {
      title: "Life Lessons",
      description: "Leadership, teamwork, and perseverance learned through the sport",
      icon: "🌟"
    }
  ];

  const cookingDetails = [
    {
      title: "Culinary Interests",
      description: "Exploring various cuisines and cooking techniques",
      icon: "👨‍🍳"
    },
    {
      title: "Specialties",
      description: "Home-cooked comfort food and healthy meal preparation",
      icon: "🍳"
    },
    {
      title: "Kitchen Philosophy",
      description: "Combining creativity with precision in cooking",
      icon: "🎯"
    }
  ];

  return (
    <section id="hobbies" className="section">
      <div className="section-content">
        <h1 className="section-title">Hobbies & Interests</h1>

        <div className="hobbies-container">
          <div className="hobby-category">
            <div className="hobby-header">
              <h2 className="section-subtitle">
                <span className="hobby-icon">🏀</span>
                Basketball Passion
              </h2>
            </div>
            <div className="hobby-grid">
              {basketballDetails.map((item, index) => (
                <div key={index} className="section-card hobby-card">
                  <span className="hobby-card-icon">{item.icon}</span>
                  <h3 className="hobby-card-title">{item.title}</h3>
                  <p className="section-text">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hobby-category">
            <div className="hobby-header">
              <h2 className="section-subtitle">
                <span className="hobby-icon">🍳</span>
                Culinary Adventures
              </h2>
            </div>
            <div className="hobby-grid">
              {cookingDetails.map((item, index) => (
                <div key={index} className="section-card hobby-card">
                  <span className="hobby-card-icon">{item.icon}</span>
                  <h3 className="hobby-card-title">{item.title}</h3>
                  <p className="section-text">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hobbies-container {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .hobby-category {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .hobby-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .hobby-icon {
          font-size: 2rem;
          margin-right: 0.5rem;
        }

        .hobby-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .hobby-card {
          text-align: center;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .hobby-card-icon {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .hobby-card-title {
          color: var(--primary-dark-brown);
          font-size: 1.1rem;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .hobby-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hobby-grid {
            grid-template-columns: 1fr;
          }

          .hobby-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hobbies;
