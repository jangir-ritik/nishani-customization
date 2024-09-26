import React from "react";

const StyleSelector: React.FC<{ styles: string[] }> = ({ styles }) => (
    <div className="style-selector">
        <select>
            {/* {styles.map((style) => (
                <option key={style} value={style}>
                    {style}
                </option>
            ))} */}
            <option value="style1">Style 1</option>
            <option value="style2">Style 2</option>
            <option value="style3">Style 3</option>
        </select>
    </div>
);

export default StyleSelector;