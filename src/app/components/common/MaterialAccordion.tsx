import React, { useState } from "react";

const MaterialAccordion: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="material-accordion-wrapper">
            <button onClick={() => setIsOpen(!isOpen)} className="material-accordion-button">
                Material
                <span>{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && <div className="accordion-content">Material information here...</div>}
        </div>
    );
};

export default MaterialAccordion;