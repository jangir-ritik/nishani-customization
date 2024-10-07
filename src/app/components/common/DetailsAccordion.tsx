import React, { useState } from "react";
import AddIcon from "../../../../public/icons/add.svg";
import MinusIcon from "../../../../public/icons/minus.svg";
const DetailsAccordion: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="details-accordion-wrapper">
            <button onClick={() => setIsOpen(!isOpen)} className="details-accordion-button">
                Details
                {isOpen ? <MinusIcon /> : <AddIcon />}
            </button>
            {isOpen && <div className="accordion-content">Product details here...</div>}
        </div>
    );
};

export default DetailsAccordion;