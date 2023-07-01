import React from 'react';
import './Experience.css';

function Experience() {
    return (
        <div className='experience-outer'>
            <div className='experience-container'>
                <h1 className='exp-title'>Experience</h1>
                <p className='exp-p'>
                    My work and projects experience.
                </p>

                <h2 className='exp-h2'>Electrical Skills Experience</h2>
                <hr className='exp-line' />
                <h3 className='exp-h3'>Participated in EVAT Electric Motorcycle Conversion Competition 2021</h3>
                <p className='exp-p'>
                    I was a member of the team that participated in the EVAT Electric Motorcycle Conversion Competition 2021.
                    The competition was held by the Electrical Vehicle Association of Thailand (EVAT)
                    The team was required to convert a gasoline motorcycle to an electric motorcycle. <br /><br /> 

                    We converted an abandoned Suzuki RC100 from one of our friends into an electric motorcycle.
                    Although we didn't win the competition, we learned a lot from the experience. <br />
                    I was responsible for : <br />
                    - Designing the overall look of the motorcycle. <br />
                    - Some parts of the mechanical modification design. <br />
                    - Design and 3d print some parts of the motorcycle. <br />
                    - Parts restoration. <br />
                    - And some of the electrical works. <br /><br />

                    {/* link to evat */}
                    <a href='http://www.evat.or.th/' target='_blank' rel='noreferrer'>
                        >> Electrical Vehicle Association of Thailand (EVAT)
                    </a> <br />
                    <a href='http://www.evat.or.th/17318890/emc-2022' target='_blank' rel='noreferrer'>
                        >> E-Motorcycle Conversion 2021 (eMC 2021)
                    </a>
                </p>
                <hr className='exp-line-small' />
                <h3 className='exp-h3'>Experienced in Electronics Design, Laboratory Experiments</h3>
                <p className='exp-p'>
                    Since I was a student in Pre-Engineering Program and faculty of Electrical Engineering,
                    I have learned about basic electronics theory, circuit analysis, and circuit design. 
                    along with laboratory experiments to verify the theory and design. <br />
                </p>
                <hr className='exp-line-small'/>
                <h3 className='exp-h3'>Related Hobby Projects</h3>
                <p className='exp-p'>
                    Most of my hobby projects are tinkering that mostly related to electronics.
                    I have done some projects that are related to Arduino, SBC, and ESP32. <br /><br />
                    
                    Especially, I have done some projects that are related to the FDM 3D printing. <br />
                    I experienced in designing and 3D printing parts for my projects and shared some of them on Thingiverse.
                    and of course, a lot of troubleshooting and practical problem solving of the 3D printer itself. <br /><br />

                    I currently build an open source 3D printer called Voron 2.4. 
                    I have learned a lot from this project. both in mechanical, electrical, hardware and software aspects. <br />
                </p>
                <hr className='exp-line-small'/>

                <h2 className='exp-h2'>Computer Skills Experience</h2>
                <hr className='exp-line' />
                <h3 className='exp-h3'>Experience in Programming</h3>
                <p className='exp-p'>
                    I have learned about programming since I was in Pre-Engineering Program.
                    I have experienced mostly in Python and C programming languages. <br /><br />

                    I have done some projects that are related to Python programming languages during my study.
                    such as a Arduino IOT project that involves Python, MQTT and Node-RED. <br /><br />
                    Also a project about simple Search Engine and web scraping that uses Python and SQLite. <br />
                </p>
                <hr className='exp-line-small'/>
                <h3 className='exp-h3'>Experience in Linux</h3>
                <p className='exp-p'>
                    I have been using Linux for many projects and works. <br />
                    Since one of my professors introduced me to Linux. <br /><br />

                    After that, I used to use Linux for my study and projects. <br />
                    I have experienced in using Linux for many projects and works. <br />
                    Such as for being a server, a development environment, <br />
                    and a platform for my hobby projects, like 3D printing OS such as MainsailOS and Klipper. <br />
                </p>

            </div>
        </div>
    );
}

export default Experience;
