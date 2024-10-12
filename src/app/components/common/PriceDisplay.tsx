import React from "react";
import useProductStore from "@/app/store/store";

const PriceDisplay: React.FC = () => {
  const calculateTotalPrice = useProductStore(state => state.calculateTotalPrice);
  const parts = useProductStore(state => state.parts);

  const totalPrice = calculateTotalPrice();

  return (
    <div className="price-display-container">
      <p className="price-display-price">₹ {totalPrice.toFixed(2)}</p>
      <p className="price-display-tax-inclusive">(Inclusive of all taxes)</p>
    </div>
  );
};

export default PriceDisplay;