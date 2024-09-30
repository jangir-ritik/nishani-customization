import React from "react";
import Image from "next/image";
import productImage from "../../assets/pngs/view-container.png";

const ProductImage: React.FC<{ src: string }> = ({ src }) => (
    <div className="product-image-container">
        {/* <img src={src} alt="Product" /> */}
        <Image src={productImage} alt="Product" className="product-main-image" />
    </div>
);

export default ProductImage;