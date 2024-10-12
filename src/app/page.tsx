'use client'
import ProductHeader from './components/common/ProductHeader';
import ProductDescription from './components/common/ProductDescription';
import ChainCustomizer from './components/common/ChainCustomizer';
import StyleSelector from './components/common/StyleSelector';
import MetalSelector from './components/common/MetalSelector';
import DetailsAccordion from './components/common/DetailsAccordion';
import MaterialAccordion from './components/common/MaterialAccordion';
import PriceDisplay from './components/common/PriceDisplay';
import AddToCartButton from './components/common/AddToCartButton';
import ProductGallery from './components/common/ProductGallery';
import ChainDemo from './components/common/experience/ChainDemo';

const ProductPage: React.FC = () => {

  return (
    <div className="product-customization-page">
      <div className="product-customization-page-left-section">
        <ChainDemo />
        <ProductGallery />
      </div>
      <div className="product-customization-page-right-section">
        <ProductHeader />
        <ProductDescription />
        <ChainCustomizer />
        <div className="product-customization-page-right-style-metal-selector-wrapper">
          <StyleSelector />
          <MetalSelector key="metal-selector" />
        </div>
        <DetailsAccordion />
        <MaterialAccordion />
        <div className="product-customization-page-right-price-add-to-cart-wrapper">
          <PriceDisplay />
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
