import React, { useState } from "react";

const DetailsAccordion: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="details-accordion-wrapper">
            <button onClick={() => setIsOpen(!isOpen)} className="details-accordion-button">
                Details
                <span>{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && <div className="accordion-content">Product details here...</div>}
        </div>
    );
};

export default DetailsAccordion;