import React from "react";
import Image from "next/image";
import productImage from "../../assets/pngs/view-container.png";

const ProductGallery: React.FC<{ images: string[] }> = ({ images }) => (
    <div className="product-gallery">
        {/* {images.map((src, index) => (
                <img key={index} src={src} alt={`Product view ${index + 1}`} />
            ))} */}
        <Image src={productImage} alt={`Product view`} />
    </div>
);

export default ProductGallery;