import React from "react";
import Image from "next/image";
import productImage from "../../assets/pngs/view-container.png";

const ProductImage: React.FC<{ src: string }> = ({ src }) => (
    <div className="product-image">
        {/* <img src={src} alt="Product" /> */}
        <Image src={productImage} alt="Product" />
    </div>
);

export default ProductImage;