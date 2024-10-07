import React from "react";
import ProductVarientLabel from "./ProductVarientLabel";
import ProductVarientModel from "./ProductVarientModel";

const ChainCustomizer = ({ options }: { options: string[] }) => {
    return (
        <div className="chain-customizer-container">
            <ProductVarientLabel options={['Left Chain', 'Front Lock', 'Right Chain', 'Back Lock', 'Charm', 'Additional Chain']} />
            <ProductVarientModel />
        </div>
    );
};

export default ChainCustomizer;