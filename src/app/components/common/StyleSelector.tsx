import React from "react";
import useProductStore from "@/app/store/store";

const StyleSelector: React.FC = () => {
    const { selectedPart, parts } = useProductStore();
    const selectedModel = parts[selectedPart].selectedModel;
    const partLabel = parts[selectedPart].label;

    return (
        <div className="style-selector-container">
            <p className="style-selector-label">
                Style for {partLabel}: <span className="style-selector-value">Model {selectedModel + 1}</span>
            </p>
        </div>
    );
};

export default StyleSelector;