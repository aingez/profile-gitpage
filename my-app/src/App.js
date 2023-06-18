import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const themeClass = darkMode ? 'dark' : 'light';

  return (
      <div className={`app ${themeClass}`}>
        <div className="left-side">
          <h1 className="name">Aingthawan K.</h1>
          <div className="details">
            {/* Add your details here */}
            <p className="details-text">อิงธวัล</p>
          </div>
        </div>
 
        <div className="right-side">
          <div className="cv-details">
            {/* Add your CV details here */}
            <h1 className="details-text-quotes"> " life is like a box of chocolates. You never know what you're gonna get. " </h1>
            <h1 className='details-text-quotes'> - Forrest Gump </h1>
            <h2>Profile
            <p className="details-text-2">As a computer engineering student with a Voc. Cert. degree in pre-electrical engineering, I have a foundation in both hardware and software systems. My passion lies in Open Source Project, Robotics, Agritech ,and 3D-Printing Technology. I'm looking forward for a position to further improve my profession in these field.
            </p>
            </h2>
            <h2>Education
            <p className="details-text-2"> King Mongkut's University of Technology North Bangkok [KMUTNB] </p>
            <li className="details-text-2">Vocational Certificate in Pre-Electrical Engineering</li>
            <li className="details-text-2">Bachelor of Engineering in Computer Engineering</li>
            </h2>
          </div>
        </div>
        <div className="theme-switch" onClick={toggleTheme}>
          {darkMode ? 'Light' : 'Dark'}
        </div>
      </div>
  );
}




export default App;