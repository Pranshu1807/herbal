import React from "react";
import "./style/doctors.css";
const Doctors = () => {
  return (
    <div className="containerDoctor">
      <div className="doctorHeading">
        our doctors and directors
      </div>
      <div className="mainDoctors">
        <div>
          <div>
            <div className="imageContainer">
              <img src="/Images/1.jpeg" alt="ankush image"/>
            </div>
            <div className="doctorDescription">
              <div className="title">
                <span>Dr. Ankush Bhardwaj</span>
                <span>Director</span>
              </div>
              <div className="doctorContent">
              <div>Delivering quality products is our goal. As we, as human beings are not perfect, so we know it is impossible for any body or person to offer perfect service to the customers. But we insure you that we will try to remove that impossible word from our dictionary.</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="imageContainer">
              <img src="/Images/index.jpeg" alt="ankush image"/>
            </div>
            <div className="doctorDescription">
              <div className="title">
                <span>Dr. Tanika Bhateja</span>
                <span>Director</span>
              </div>
              <div className="doctorContent">
              <div>
                If you can not do great things.Do small things in a great way.. We would like to contribute to make the  society healthy and fit by using natural products according to the people's need with quality products.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainDoctors">
        <div>
          <div>
            <div className="imageContainer">
              <img src="/Images/2.jpeg" alt="ankush image"/>
            </div>
            <div className="doctorDescription">
              <div className="title">
                <span>Dr. Nitin Bhateja</span>
                <span>Head of dental advisory committee</span>
              </div>
              <div className="doctorContent">
              <ul>
                <li>BDS, MDS(ENDODONTICS)</li>
                <li>GOLD MEDALIST</li>
                <li>Currently Running Toothcare dental clinic in Gurugram</li>
                <li>FORMER Senior resident</li>
                <div>(lady hardinge medical college and research centre delhi) </div>
              </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="imageContainer">
              <img src="/Images/3.jpeg" alt="ankush image"/>
            </div>
            <div className="doctorDescription">
              <div className="title">
                <span>Dr. Jitender Sharma</span>
                {/* <span>Dob: 07/07/1993</span> */}
              </div>
              <div className="doctorContent">
              <div>
              B.A.M.S - BABE KE AYURVEDIC MEDICAL COLLEGE AND HOSPITAL 
              <ul>
                <li>Care Max hospital Jalandhar</li>
                <li>Arman  hospital Jalandhar</li>
                <li>Sharma nursing home Jalandhar</li>
                <li>Nasa & hub superspeciality hospital Jalandhar</li>
                <li>Now Running shree balaji clinic a chain of humanity And adviser and Zonal manager in dark roots.</li>
              </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="imageContainer">
              <img src="/Images/5.jpeg" alt="ankush image"/>
            </div>
            <div className="doctorDescription">
              <div className="title">
                <span>Dr. Arun Jangra</span>
                {/* <span>Native place palwal</span> */}
              </div>
              <div className="doctorContent">
              <div>
              BDS - Manav rachna dental COLLEGE AND HOSPITAL 
              <ul>
                <li>Running Sanjivani Dental Clinic since 2016</li>
                <li>Head of dental advisory Committee</li>
              </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Doctors;
