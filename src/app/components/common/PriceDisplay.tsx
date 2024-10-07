import React from "react";

const PriceDisplay: React.FC = () => (
    <div className="price-display-container">
        {/* ₹ {price.toFixed(2)} */}
        <p className="price-display-price">₹ 400</p>
        <p className="price-display-tax-inclusive">(Inclusive of all taxes)</p>
    </div>
);

export default PriceDisplay;