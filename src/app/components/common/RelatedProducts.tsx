import React from "react";
import Image from "next/image";
import productImage from "../../assets/pngs/view-container.png";

const RelatedProducts: React.FC<{ products: { id: number; name: string; image: string }[] }> = ({ products }) => (
    <div className="related-products">
        {/* {products.map((product) => (
            <div key={product.id} className="related-product">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
            </div>
        ))} */}
        <div className="related-product">
            <Image src={productImage} alt="Product" />
            <p>Product Name</p>
        </div>
    </div>
);

export default RelatedProducts;