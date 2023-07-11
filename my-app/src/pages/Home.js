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
          {/* I'm a computer engineering student <br/>
          with a Voc.Cert. in pre-electrical engineering, <br/>
          proficient in hardware and software systems. <br/>
          My interests include Open Source Projects, <br/>
          Robotics, Agritech, and 3D-Printing Technology. <br/>
          Seeking opportunities to enhance my expertise in these fields. */}

          {/* Welcome to Aing's Portfolio! I'm Aing, <br/> */}
          a passionate computer engineering student pursuing my B.Eng. degree at KMUTNB. <br/><br/>
          {/* Prior to this, I graduated from the Pre-Engineering School at KMUTNB, <br/>
          specializing in Pre-Electrical Engineering Vocational Certification. <br/> */}
          {/* When I'm not immersed in the world of circuits and coding, <br/> */}
          you can find me indulging in my love for classic cars, 
          particularly the Mazda Miata MX5 NA and the Porsche 930 Turbo. 
          Apart from my academic pursuits, I have a diverse range of hobbies including photography, 
          tinkering, 3D printing, and taking care of my dad's classic motorcycles. Occasionally, 
          I embark on solo travel adventures or go trekking. <br/><br/>
          I am fascinated by the process of creating and making things, and my interests lie in hardware,  <br/>
          clean energy, self-sustainability, FDM 3D printing, automation,
          and solar energy. Join me on this journey as I showcase my projects and share my passion for technology and innovation. 
        </p>
        <h2>Education</h2>
        <p>
            <b>Computer Engineering (B.Eng. CprE. Currently)</b> <br/>
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
