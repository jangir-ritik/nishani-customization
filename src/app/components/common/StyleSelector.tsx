import React from "react";
import useProductStore from "@/app/store/store";

const StyleSelector: React.FC = () => {
    const selectedLeftChainModel = useProductStore(state => state.selectedLeftChainModel);

    return (
        <div className="style-selector-container">
            <p className="style-selector-label">
                {/* Styles: <span className="style-selector-value">{style}</span> */}
                Style: <span className="style-selector-value">{`Model ${(selectedLeftChainModel ?? 0) + 1}`}</span>
                {/* {selectedLeftChainModel !== null && (
                )} */}
            </p>
        </div>
    );
};

export default StyleSelector;