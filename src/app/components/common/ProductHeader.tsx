import React from "react";

const ProductHeader: React.FC<{ name: string }> = ({ name }) => (
    <div className="product-name-header-container">
        {/* <h1>{name}</h1> */}
        <h1>Product Name</h1>
        <div className="product-header-actions">
            <button>Share</button>
            <button>Favorite</button>
        </div>
    </div>
);

export default ProductHeader;