import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Hobbies from './components/Hobbies'
import Goals from './components/Goals'
import ITExperience from './components/ITExperience'
import PhotoGallery from './components/PhotoGallery'
import Feedback from './components/Feedback'

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <AboutMe />;
      case 'education':
        return <Education />;
      case 'hobbies':
        return <Hobbies />;
      case 'goals':
        return <Goals />;
      case 'experience':
        return <ITExperience />;
      case 'gallery':
        return <PhotoGallery />;
      case 'feedback':
        return <Feedback />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="app">
      <Navbar onNavClick={setActiveSection} activeSection={activeSection} />
      <main className="main-content">
        <div className="content-container">
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
