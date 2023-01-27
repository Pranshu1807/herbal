import React from "react";
import "./style/doctors.css";
const Doctors = () => {
  return (
    <div className="containerDoctor" id="directors">
      <h1 className=" headingDoctor">Our Doctors and Directors</h1>
      <div className="Directors">
        <div className="DirectorInfo">
          <img src="/Images/1.jpeg" alt="" />
          <div className="DirectorDetails">
            <h3>Ankush Bharadwaj</h3>
            <h3>Director</h3>
          </div>
        </div>
        <div className="DirectorInfo">
          <img src="/Images/4.jpeg" alt="" />
          <div className="DirectorDetails">
            <h3>Dr Tanika Bhateja</h3>
          </div>
        </div>
      </div>
      <div className="Doctors">
        <div className="DoctorsInfo">
          <img src="/Images/2.jpeg" alt="" />
          <div className="DoctorDetails">
            <h2>Dr Nitin Bhateja</h2>
            <h2>Head of dental advisory Committee</h2>
          </div>
          <h3>BDS, MDS(ENDODONTICS)</h3>
          <h3>GOLD MEDALIST</h3>
          <h3>
            FORMER Senior resident (lady hardinge medical college and research
            centre delhi)
          </h3>
          <h3>Currently Running Toothcare dental clinic in Gurugram</h3>
        </div>
        <div className="DoctorsInfo SecondDoc">
          <img src="/Images/3.jpeg" alt="" />
          <div className="DoctorDetails">
            <h2>Dr. Jitender Sharma</h2>
            <h2>Dob 07/07/1993 </h2>
            <h2> Birth place palwal</h2>
          </div>
          <h3>B.A.M.S - BABE KE AYURVEDIC MEDICAL COLLEGE AND HOSPITAL</h3>
          <h3>Work experience</h3>
          <h3>*Care Max hospital Jalandhar</h3>
          <h3>* Arman hospital Jalandhar</h3>
          <h3>* Sharma nursing home Jalandhar</h3>
          <h3>* Nasa & hub superspeciality hospital Jalandhar</h3>
          <h3>Now Running shree balaji clinic a chain of humanity</h3>
          <h3>And adviser and Zonal manager in dark roots.</h3>
        </div>
        <div className="DoctorsInfo">
          <img src="/Images/5.jpeg" alt="" />
          <div className="DoctorDetails">
            <h2>Dr. Arun Jangra</h2>
            <h2>Native place palwal</h2>
          </div>
          <h3>Head of dental advisory Committee</h3>
          <h3>BDS - Manav rachna dental COLLEGE AND HOSPITAL </h3>
          <h3>Work experience </h3>
          <h3>* Running Sanjivani dental clinics from 7 yrs successfully</h3>
        </div>
      </div>
    </div>
  );
};
export default Doctors;
