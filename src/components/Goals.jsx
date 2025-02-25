import '../styles/Section.css';

const Goals = () => {
  const goals = [
    {
      category: "Professional Growth",
      icon: "💼",
      items: [
        {
          title: "Technical Mastery",
          description: "Deepen expertise in current technologies and learn emerging ones",
          timeline: "Ongoing"
        },
        {
          title: "Project Portfolio",
          description: "Build impactful projects that solve real-world problems",
          timeline: "Short-term"
        },
        {
          title: "Industry Impact",
          description: "Contribute meaningful solutions to the tech community",
          timeline: "Long-term"
        }
      ]
    },
    {
      category: "Personal Development",
      icon: "🌱",
      items: [
        {
          title: "Work-Life Balance",
          description: "Maintain harmony between career and personal interests",
          timeline: "Short-term"
        },
        {
          title: "Continuous Learning",
          description: "Stay curious and embrace new challenges",
          timeline: "Ongoing"
        },
        {
          title: "Community Involvement",
          description: "Share knowledge and mentor others in tech",
          timeline: "Mid-term"
        }
      ]
    },
    {
      category: "Life Aspirations",
      icon: "⭐",
      items: [
        {
          title: "Financial Stability",
          description: "Build a foundation for a comfortable and secure future",
          timeline: "Long-term"
        },
        {
          title: "Personal Growth",
          description: "Develop both professionally and as an individual",
          timeline: "Ongoing"
        },
        {
          title: "Happiness & Fulfillment",
          description: "Find joy in work and personal achievements",
          timeline: "Continuous"
        }
      ]
    }
  ];

  return (
    <section id="goals" className="section">
      <div className="section-content">
        <h1 className="section-title">Goals & Aspirations</h1>
        
        <div className="goals-container">
          {goals.map((category, index) => (
            <div key={index} className="goal-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h2 className="section-subtitle">{category.category}</h2>
              </div>
              <div className="goals-grid">
                {category.items.map((goal, idx) => (
                  <div key={idx} className="section-card goal-card">
                    <div className="goal-content">
                      <h3 className="goal-title">{goal.title}</h3>
                      <p className="section-text">{goal.description}</p>
                      <span className="goal-timeline">{goal.timeline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .goals-container {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .goal-category {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .category-icon {
          font-size: 2rem;
        }

        .goals-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .goal-card {
          height: 100%;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .goal-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .goal-title {
          color: var(--primary-dark-brown);
          font-size: 1.2rem;
          margin: 0;
        }

        .goal-timeline {
          color: var(--secondary-dark-brown);
          font-size: 0.9rem;
          margin-top: auto;
          padding-top: 1rem;
        }

        @media (max-width: 1024px) {
          .goals-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .goals-grid {
            grid-template-columns: 1fr;
          }

          .goal-card {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Goals;
