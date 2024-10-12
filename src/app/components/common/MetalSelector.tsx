import React from "react";
import useProductStore from "@/app/store/store";

const MetalSelector: React.FC = () => {
  const { selectedPart, parts, setPartMetal } = useProductStore();
  const selectedMetal = parts[selectedPart].metal;
  const partLabel = parts[selectedPart].label;

  return (
    <div className="metal-selector-container">
      <p className="metal-selector-label">Metal for {partLabel}:</p>
      <div className="metal-selector-buttons-wrapper">
        <button
          onClick={() => setPartMetal(selectedPart, 'gold')}
          className={selectedMetal === 'gold' ? 'selected' : ''}
          style={{ backgroundColor: 'gold', color: 'black' }}
        >
          {/* Gold */}
        </button>
        <button
          onClick={() => setPartMetal(selectedPart, 'silver')}
          className={selectedMetal === 'silver' ? 'selected' : ''}
          style={{ backgroundColor: 'silver', color: 'black' }}
        >
          {/* Silver */}
        </button>
      </div>
      {/* <p className="metal-selector-note">Note: Metal choice does not affect price</p> */}
    </div>
  );
};

export default MetalSelector;