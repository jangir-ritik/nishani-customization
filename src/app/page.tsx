'use client'
import React from 'react';
import ProductHeader from './components/common/ProductHeader';
import ProductImage from './components/common/ProductImage';
import ProductDescription from './components/common/ProductDescription';
import ChainCustomizer from './components/common/ChainCustomizer';
import StyleSelector from './components/common/StyleSelector';
import MetalSelector from './components/common/MetalSelector';
import DetailsAccordion from './components/common/DetailsAccordion';
import MaterialAccordion from './components/common/MaterialAccordion';
import PriceDisplay from './components/common/PriceDisplay';
import AddToCartButton from './components/common/AddToCartButton';
import ProductGallery from './components/common/ProductGallery';
import UserProfile from './components/common/GetUser';
import { useMedia } from './utils/useMedia';
import ExperienceWrapper from './components/common/experience/ExperienceWrapper';
import Experience from './components/common/experience/Experience';

const ProductPage: React.FC = () => {
  const { isMobile } = useMedia();
  // const { data: productData, isLoading, error } = useQuery('productData', fetchProductData);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error loading product data</div>;

  return (
    <div className="product-customization-page">
      <UserProfile />
      {/* Left Section */}
      <div className="product-customization-page-left-section">
        <ExperienceWrapper>
          <Experience />
        </ExperienceWrapper>
        {/* <ProductImage /> */}
        <ProductGallery />
      </div>
      {/* Right Section */}
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
