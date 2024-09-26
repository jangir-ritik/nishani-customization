import React from "react";

const ProductDescription: React.FC<{ description: string }> = ({ description }) => (
    <p className="product-description">
        {/* {description} */}
        This is a product description
    </p>
);

export default ProductDescription;