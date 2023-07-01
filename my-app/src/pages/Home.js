import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="left-side">
        <h1 className='home-name'>Aingthawan K.</h1>
        <p style={{color:"grey"}}>อิงธวัล</p>
      </div>
      <div className="right-side">
        <p className='home-quote'>
          " life is like a box of chocolates. <br/>
          You never know what you're gonna get. "  <br/>
          - Forrest Gump
        </p>
        <h2>Profile</h2>
        <p style={{color:"grey"}}>
          I'm a computer engineering student <br/>
          with a Voc.Cert. in pre-electrical engineering, <br/>
          proficient in hardware and software systems. <br/>
          My interests include Open Source Projects, <br/>
          Robotics, Agritech, and 3D-Printing Technology. <br/>
          Seeking opportunities to enhance my expertise in these fields.
        </p>
        <h2>Education</h2>
        <p>
            <b>Computer Engineering (CprE.)</b> <br/>
            <i style={{color:"grey"}}>King Mongkut's University of Technology North Bangkok [KMUTNB]</i> <br/>
        </p>
        <p>
            <b>Pre-Electrical Engineering (Voc.Cert.)</b> <br/>
            <i style={{color:"grey"}}>King Mongkut's University of Technology North Bangkok [KMUTNB]</i> <br/>
        </p>
      </div>
    </div>
  );
};

export default Home;
