import React, { useState } from "react";
import PriceCard from "./PriceCard";
import ToggleBtn from "./ToggleBtn";

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);

  const isMonthly = !isYearly;

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div>
      <ToggleBtn onToggle={handleToggle} isMonthly={isMonthly} />
      <PriceCard isYearly={isYearly} />
    </div>
  );
};

export default PricingPage;
