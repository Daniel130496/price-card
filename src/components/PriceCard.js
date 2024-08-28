import React from "react";
import'./css/PriceCard.css';
import pricingData from "../pricingData";

const PriceCard = ({ isYearly }) => {
  return (
    <div className="price-card">
      {pricingData.map((data, index) => (
        <div key={index} className="plan-list">
          <h3>{data.plan}</h3>
          <h2>{isYearly ? `$${data.yearPrice}` : `$${data.monthPrice}`}</h2>
          <p>{isYearly ? "/year" : "/month"}</p>
          <ul>
            {data.features.map((feature, featureIndex) => (
              <li key={featureIndex}>{feature}</li>
            ))}
          </ul>
          <button type="submit">Get Now</button>
        </div>
      ))}
    </div>
  );
};

export default PriceCard;
