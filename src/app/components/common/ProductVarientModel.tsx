import React from 'react'
import Image from 'next/image'
import useProductStore from '@/app/store/store'

function ProductVarientModel() {
    const selectedChain = useProductStore(state => state.selectedChain)
    const selectedLeftChainModel = useProductStore(state => state.selectedLeftChainModel)
    const setSelectedLeftChainModel = useProductStore(state => state.setSelectedLeftChainModel)
    const leftChainModels = useProductStore(state => state.leftChainModels)

    const handleLeftChainModelClick = (index: number) => {
        setSelectedLeftChainModel(index === selectedLeftChainModel ? null : index)
    }

    return (
        <div className="product-varient-model-container">
            {selectedChain === 'Left Chain' && (
                <div className="product-varient-model-left-chain">
                    {leftChainModels.map((model, index) => (
                        <div 
                            key={index} 
                            className={`left-chain-model ${selectedLeftChainModel === index ? 'selected' : 'default'}`}
                            onClick={() => handleLeftChainModelClick(index)}
                        >
                            <Image src={model} alt={`left-chain-model-${index + 1}`} />
                        </div>
                    ))}
                </div>
            )}
            {selectedChain === 'Front Lock' && (
                <p>This is the front lock of the product.</p>
            )}
            {/* Add more conditions for other chain types */}
        </div>
    )
}

export default ProductVarientModel