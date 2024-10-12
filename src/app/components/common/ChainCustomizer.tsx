import React from "react";
import useProductStore from "@/app/store/store";
import ProductVariantLabel from "./ProductVariantLabel";

const ChainCustomizer: React.FC = () => {
    const { selectedPart, parts, setPartModel } = useProductStore();
    const selectedModel = parts[selectedPart].selectedModel;
    const modelCount = parts[selectedPart].modelCount;

    return (
        <div className="chain-customizer-container">
            <ProductVariantLabel />
            <div style={{display: 'flex', gap: 10}}>
            {Array.from({ length: modelCount }).map((_, index) => (
                <div
                    onClick={() => setPartModel(selectedPart, index)}
                    className={index === selectedModel ? 'selected product-variant-type' : 'product-variant-type'}
                    key={index}
                >
                    model {index + 1}
                </div>
            ))}
            </div>
        </div>
    );
};

export default ChainCustomizer;