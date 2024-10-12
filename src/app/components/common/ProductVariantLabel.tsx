import React from 'react'
import useProductStore from '@/app/store/store';

function ProductVariantLabel() {
  const { selectedPart, parts, setSelectedPart } = useProductStore();
  
  const partOptions: Array<{ key: keyof typeof parts; label: string }> = [
    { key: 'leftChain', label: 'Left Chain' },
    { key: 'rightChain', label: 'Right Chain' },
    { key: 'topLock', label: 'Front Lock' },
    { key: 'bottomLock', label: 'Back Lock' }
  ];

  return (
    <div className='product-variant-label-container'>
      {partOptions.map(({ key, label }) => {
        return (
          <button
            key={key}
            onClick={() => setSelectedPart(key)}
            className={selectedPart === key ? 'selected' : ''}
          >
            {label}
          </button>
        );
      })}
    </div>
  )
}

export default ProductVariantLabel