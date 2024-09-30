'use client'
import React from 'react';
import { useQuery } from '@tanstack/react-query';
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

const ProductPage: React.FC = () => {
  // const { data: productData, isLoading, error } = useQuery('productData', fetchProductData);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error loading product data</div>;

  return (
    <div className="product-customization-page">
      {/* Left Section */}
      <div>
        <ProductImage src="product-image.jpg" />
        <ProductGallery images={["image1.jpg", "image2.jpg", "image3.jpg"]} />
      </div>
      {/* Right Section */}
      <div className="product-customization-page-right-section">
        <ProductHeader name="Product Name" />
        <ProductDescription description="Product Description" />
        <ChainCustomizer options={["Left Chain", "Right Chain"]} />
        <div className="product-customization-page-right-style-metal-selector-wrapper">
          <StyleSelector style="Style 1" />
          <MetalSelector key="metal-selector" />
        </div>
        <DetailsAccordion />
        <MaterialAccordion />
        <div className="product-customization-page-right-price-add-to-cart-wrapper">
          <PriceDisplay price={100} />
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
