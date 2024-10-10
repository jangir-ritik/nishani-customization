import React from 'react'
import Image from 'next/image'
import useProductStore from '@/app/store/store'

function ProductVariantModel() {
    const selectedChainPart = useProductStore(state => state.selectedChainPart)
    const selectedChainPartModel = useProductStore(state => state.selectedChainPartModel)
    const setSelectedChainPartModel = useProductStore(state => state.setSelectedChainPartModel)
    const chainPartModels = useProductStore(state => state.chainPartModels)

    const handleChainPartModelClick = (index: number) => {
        setSelectedChainPartModel(index === selectedChainPartModel ? null : index)
    }

    return (
        <div className="product-variant-model-container">
            {selectedChainPart === 'Left Chain' && (
                <div className="product-variant-model-left-chain">
                    {chainPartModels.map((model, index) => (
                        <div 
                            key={index} 
                            className={`left-chain-model ${selectedChainPartModel === index ? 'selected' : 'default'}`}
                            onClick={() => handleChainPartModelClick(index)}
                        >
                            <Image src={model} alt={`left-chain-model-${index + 1}`} />
                        </div>
                    ))}
                </div>
            )}
            {selectedChainPart === 'Front Lock' && (
                <p>This is the front lock of the product.</p>
            )}
            {/* Add more conditions for other chain types */}
        </div>
    )
}

export default ProductVariantModel