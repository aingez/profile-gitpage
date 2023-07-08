import React from 'react';
import './Contact.css'; // Import the CSS file
// import profileImage from './image/00007-3407597166.png'; // Import the circular profile image
import profileImage from './image/IMG_5149.jpg'; // Import the circular profile image

const ContactPage = () => {
  const githubProfile1 = 'https://github.com/aingez';
  const githubProfile2 = 'https://github.com/aingthawan';
  const linkedinProfile = 'https://www.linkedin.com/in/aingthawan-k-8b3b24245/';
  const thingiverseProfile = 'https://www.thingiverse.com/aing1970/designs';
  const email = 's6401012610042@email.kmutnb.ac.th';

  return (
    <div className="container"> 
        <div className="profile-section">
          
          <div className="profile-image-container">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>

          <div className="profile-details">
            <h1 className='contact-title'>Contact</h1>
            <ul>
              <li>
                <a href={githubProfile1} target="_blank" rel="noopener noreferrer">
                  Personal GitHub Profile
                </a>
              </li>
              <li>
                <a href={githubProfile2} target="_blank" rel="noopener noreferrer">
                  Academic GitHub Profile
                </a>
              </li>
              <li>
                <a href={linkedinProfile} target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </li>
              <li>
              <a href={thingiverseProfile} target="_blank" rel="noopener noreferrer">
                  Thingiverse Profile
                </a>
              </li>
              <li>Email: <a href={`mailto:${email}`} className="email-link">{email}</a></li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default ContactPage;