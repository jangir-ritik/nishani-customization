import React, { useState } from "react";

const MaterialAccordion: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="material-accordion">
            <button onClick={() => setIsOpen(!isOpen)}>Material</button>
            {isOpen && <div className="accordion-content">Material information here...</div>}
        </div>
    );
};

export default MaterialAccordion;