import React from "react";

const ProductHeader: React.FC<{ name: string }> = ({ name }) => (
    <div className="product-header">
        {/* <h1>{name}</h1> */}
        <h1>Product Name</h1>
        <div>
            <button>Share</button>
            <button>Favorite</button>
        </div>
    </div>
);

export default ProductHeader;