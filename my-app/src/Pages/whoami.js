import React from 'react'
import './whoami.css'

export default function Me() {
    return (
        <div className="me">
            <div className="me-block">
                <h1 className='me-title'>Hello!<br />สวัสดี!</h1>
                {/* <h2 className='me-subtitle'>Who Am I?</h2> */}
                    <p className='me-details'>
                        <li>
                            Hi! I'm Aing, from Bangkok, Thailand.
                        </li>
                        <li>
                            A guy who is a professional dreamer and dedicates his life to his passion as a maker.
                        </li>
                        <li>
                            I graduated in Pre-Electrical Engineering with Vocational Certificates, from KMUTNB.
                        </li>
                        <li>
                            Currently studying for a Bachelor's Degree in Computer Engineering, at KMUTNB.
                        </li>
                        <li>
                            Due to my curiosity, I love to learn new things and try to do everything by myself.
                        </li>
                        <li>
                            I always interested in something that sustainable and eco-friendly or not reqire battery replace.
                        </li>
                        <li>
                            I'm try to travel more, especially in hiking and camping.
                        </li>
                    </p>
            </div>
        </div>

    )
}
