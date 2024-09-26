import React from "react";
import useProductStore from "@/app/store/store";

const MetalSelector: React.FC = () => {
    const { selectedMetal, setSelectedMetal } = useProductStore();

    return (
        <div className="metal-selector">
            <button onClick={() => setSelectedMetal('gold')} className={selectedMetal === 'gold' ? 'selected' : ''}>
                Gold
            </button>
            <button onClick={() => setSelectedMetal('silver')} className={selectedMetal === 'silver' ? 'selected' : ''}>
                Silver
            </button>
        </div>
    );
};

export default MetalSelector;