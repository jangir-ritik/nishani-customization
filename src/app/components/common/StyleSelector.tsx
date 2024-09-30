import React from "react";

const StyleSelector: React.FC<{ style: string }> = ({ style }) => (
    <div className="style-selector-container">
        <p className="style-selector-label">
            Styles: <span className="style-selector-value">{style}</span>
        </p>
    </div>
);

export default StyleSelector;