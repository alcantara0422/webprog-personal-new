import { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ onNavClick, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (section) => {
    onNavClick(section);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Mark Angelo Alcantara</div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <button 
          className={activeSection === 'about' ? 'active' : ''}
          onClick={() => handleNavClick('about')}
        >
          About Me
        </button>
        <button 
          className={activeSection === 'education' ? 'active' : ''}
          onClick={() => handleNavClick('education')}
        >
          Education
        </button>
        <button 
          className={activeSection === 'hobbies' ? 'active' : ''}
          onClick={() => handleNavClick('hobbies')}
        >
          Hobbies
        </button>
        <button 
          className={activeSection === 'goals' ? 'active' : ''}
          onClick={() => handleNavClick('goals')}
        >
          Goals
        </button>
        <button 
          className={activeSection === 'experience' ? 'active' : ''}
          onClick={() => handleNavClick('experience')}
        >
          IT Experience
        </button>
        <button 
          className={activeSection === 'gallery' ? 'active' : ''}
          onClick={() => handleNavClick('gallery')}
        >
          Photo Gallery
        </button>
        <button 
          className={activeSection === 'feedback' ? 'active' : ''}
          onClick={() => handleNavClick('feedback')}
        >
          Feedback
        </button>
      </div>
      <button 
        className="mobile-menu" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className={`hamburger ${isOpen ? 'active' : ''}`}></div>
      </button>
    </nav>
  );
};

export default Navbar;
