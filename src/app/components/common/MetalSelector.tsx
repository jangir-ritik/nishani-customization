import React from "react";
import useProductStore from "@/app/store/store";

const MetalSelector: React.FC = () => {
  const { selectedChainPart, chainParts, setChainPartMetal } = useProductStore();
  const selectedMetal = chainParts[selectedChainPart].metal;
  const selectedChainPartLabel = chainParts[selectedChainPart].label;

  return (
    <div className="metal-selector-container">
      <p className="metal-selector-label">Metal for {selectedChainPartLabel}:</p>
      <div className="metal-selector-buttons-wrapper">
        <button 
          onClick={() => setChainPartMetal(selectedChainPart, 'gold')} 
          className={selectedMetal === 'gold' ? 'selected' : ''}
          style={{ backgroundColor: 'gold', color: 'black' }}
        >
        </button>
        <button 
          onClick={() => setChainPartMetal(selectedChainPart, 'silver')} 
          className={selectedMetal === 'silver' ? 'selected' : ''}
          style={{ backgroundColor: 'silver', color: 'black' }}
        >
        </button>
      </div>
    </div>
  );
};

export default MetalSelector;