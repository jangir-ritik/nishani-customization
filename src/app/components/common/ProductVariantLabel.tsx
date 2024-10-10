import React from 'react'
import useProductStore from '@/app/store/store';

function ProductVariantLabel() {
  const { selectedChainPart, setSelectedChainPart } = useProductStore();
  const options = ['L1', 'R1', 'Hooktop', 'HookBotm'];
  const labels = ['Left Chain', 'Right Chain', 'Front Lock', 'Back Lock'];

  const optionsWithLabels = options.map((option, index) => ({ option, label: labels[index] }));

  return (
    <div className='product-variant-label-container'>
      {optionsWithLabels.map(({ option, label }) => (
        <button
          key={option}
          onClick={() => setSelectedChainPart(option)}
          className={selectedChainPart === option ? 'selected' : ''}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default ProductVariantLabel