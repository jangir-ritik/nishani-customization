import React from 'react'
import useProductStore from '@/app/store/store';
import { ChainType } from '@/app/types/types';

function ProductVarientLabel({ options }: { options: ChainType[] }) {
    const { selectedChain, setSelectedChain } = useProductStore();

    return (
        <div className='product-varient-label-container'>
            {options.map((option) => (
                <button
                    key={option}
                    onClick={() => setSelectedChain(option)}
                    className={selectedChain === option ? 'selected' : ''}
                >
                    {option}
                </button>
            ))}
        </div>
    )
}

export default ProductVarientLabel