import "./Experience.css";
import React from "react";
import "./Cert.css"

function Cert() {
    return (
        <div className="cert">
            <div className="cert-child">
                <h1 className="cert-header">Certification</h1>
                <ul>
                    <li>
                        <h3 className="cert-h3">
                            Microsoft Certified: Azure Fundamentals</h3>
                        <p className="cert-p">
                            Microsoft <br />
                            Issued: May 09, 2023
                        </p>
                        <a href="https://www.credly.com/badges/8ee5417b-9382-42fa-96b9-4c1dea876243/linked_in?t=rue4bc" >
                            This badge was issued to Aingthawan Khruakhlai on May 09, 2023
                        </a>
                    </li>
                    <li>
                        <h3 className="cert-h3">Open Water Scuba Diver</h3>
                        <p className="cert-p">
                            The National Association of Underwater Instructors [NAUI] <br />
                            Issued: May 28, 2023 <br />
                            Certification : #B7DXXXX 
                        </p>
                        <a href="https://community.naui.org/u/aingthawan_khruakhlai/summary">
                            NAUI Community Profile
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Cert;