import React from "react";
import useProductStore from "@/app/store/store";

const StyleSelector: React.FC = () => {
    const selectedChainPartModel = useProductStore(state => state.selectedChainPartModel)

    return (
        <div className="style-selector-container">
            <p className="style-selector-label">
                {/* Styles: <span className="style-selector-value">{style}</span> */}
                Style: <span className="style-selector-value">{`Model ${(selectedChainPartModel ?? 0) + 1}`}</span>
                {/* {selectedLeftChainModel !== null && (
                )} */}
            </p>
        </div>
    );
};

export default StyleSelector;