import React from "react";
import "./style/topSelling.css";
const topSelling = () => {
  return (
    <div className="containerTS">
      <div className="headingTS">
        <h1>The following products top our selling list</h1>
      </div>
      <div className="contentTS">
        <div className="verticalLineTS"></div>
        <div className="productsTS">
          <h3>Livo fit-4G: keeps the liver strong</h3>
          <h3>Divine Naari syrup: Health Tonic for women</h3>
          <h3>
            Naari Intimate wash: a pH-balanced natural intimate wash for women
          </h3>
          <h3>Gentle Man Intimate: intimate wash for men</h3>
          <h3>D-Toses Ras: Holistic Diabetic- Sugar free</h3>
          <h3>
            Bronc Fit Cough Syrup: Relief from cold cough, Dry cough, Allergic
            cough.
          </h3>
          <h3>Enamel herbal mouthwash: For healthy Teeth</h3>
          <h3>Dr. Pain Expert Oil: Instant relief from joints pain.</h3>
          <h3>Dr. Pain Expert Capsule: Quick Effective in Arthritis</h3>
          <h3>
            Delite –BP Capsule: Quick action in Hypertension, Mental stress,
            Anxiety.
          </h3>
          <h3>Enamel Toothpaste with plant extract</h3>
          <h3>Enamel organic bamboo toothbrush</h3>
        </div>
      </div>
      <hr className="lastHr" />
    </div>
  );
};
export default topSelling;
