import React, { useState } from "react";

const DetailsAccordion: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="details-accordion">
            <button onClick={() => setIsOpen(!isOpen)}>Details</button>
            {isOpen && <div className="accordion-content">Product details here...</div>}
        </div>
    );
};

export default DetailsAccordion;