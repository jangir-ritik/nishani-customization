import React from "react";
import useProductStore from "@/app/store/store";

const MetalSelector: React.FC = () => {
    const { selectedMetal, setSelectedMetal } = useProductStore();

    return (
        <div className="metal-selector-container">
            <p className="metal-selector-label">Metal:</p>
            <div className="metal-selector-buttons-wrapper">
                <button onClick={() => setSelectedMetal('gold')} className={selectedMetal === 'gold' ? 'selected' : ''}>
                    {/* Gold */}
                </button>
                <button onClick={() => setSelectedMetal('silver')} className={selectedMetal === 'silver' ? 'selected' : ''}>
                    {/* Silver */}
                </button>
            </div>
        </div>
    );
};

export default MetalSelector;