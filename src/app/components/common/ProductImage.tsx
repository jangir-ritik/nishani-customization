import React from "react";
import Image from "next/image";
import useProductStore from "@/app/store/store";
import productImage from "@/public/pngs/view-container.png";

const ProductImage: React.FC = () => {
    const selectedChainPart = useProductStore(state => state.selectedChainPart);
    const selectedChainPartLabel = useProductStore(state => state.chainParts[selectedChainPart].label);
    // const leftChainModels = useProductStore(state => state.leftChainModels);

    const getContentToDisplay = () => {
        if (selectedChainPartLabel === 'Left Chain') {
            return {
                type: 'text',
                content: `Todo Add Model ${selectedChainPart + 1}`
            };
        }
        return {
            type: 'image',
            src: productImage,
            alt: "Default Product Image"
        };
    };

    const content = getContentToDisplay();

    return (
        <div className="product-image-container">
            {content.type === 'image' ? (
                <Image
                    src={content.src ?? ''}
                    alt={content.alt ?? ''}
                    className="product-main-image"
                />
            ) : (
                <div className="product-text-content">
                    {content.content}
                </div>
            )}
        </div>
    );
};

export default ProductImage;