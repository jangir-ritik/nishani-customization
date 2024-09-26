import React from "react";

const PriceDisplay: React.FC<{ price: number }> = ({ price }) => (
    <div className="price-display">
        {/* ₹ {price.toFixed(2)} */}
        ₹ 400
    </div>
);

export default PriceDisplay;