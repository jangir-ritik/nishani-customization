import React from "react";
import useProductStore from "@/app/store/store";
import { ChainType } from "@/app/types/types";

const ChainCustomizer: React.FC<{ options: ChainType[] }> = ({ options }) => {
    const { selectedChain, setSelectedChain } = useProductStore();

    return (
        <div className="chain-customizer">
            <button
                // key={option}
                onClick={() => setSelectedChain('Left Chain')}
                className={selectedChain === 'Left Chain' ? 'selected' : ''}
            >
                chain options
            </button>
            {/* {options.map((option) => (
                <button
                    key={option}
                    onClick={() => setSelectedChain(option)}
                    className={selectedChain === option ? 'selected' : ''}
                >
                    {option}
                </button>
            ))} */}
        </div>
    );
};

export default ChainCustomizer;