import './reset.scss';
import {useState} from 'react';
import Welcome from './components/Sections/Welcome';
import WorkSection from './components/Sections/WorkSection';
import EducationSection from './components/Sections/EducationSection';
import ProjectsSection from './components/Sections/ProjectsSection';
import SkillsSection from './components/Sections/SkillsSection';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Modal from './components/Modal/Modal';
import styles from './App.module.scss';

function App() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [clearFormFields, setClearFormFields] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setShowSuccessMessage(false);
    setClearFormFields(true);
  }

  return (
    <div className={styles['App']}>
      <NavBar />
      <Welcome />
      <AboutMe />
      <SkillsSection />
      <WorkSection />
      <EducationSection />
      <ProjectsSection />
      <Contact 
        clearFormFields={clearFormFields}
        onShowSuccessMessage={setShowSuccessMessage}
      />
      {showSuccessMessage &&
        <Modal style={{position:'absolute', zIndex:'2000000', height: '100%' }}>
            <div className={styles['modalWrapper']}>
                <h3>Your message was successfully sent!</h3>
                <button 
                    className={styles['closeBtn']} 
                    onClick={(e) => handleButtonClick(e)}
                >
                    Close
                </button>
            </div>
        </Modal>
      }
    </div>
  );
}

export default App;
