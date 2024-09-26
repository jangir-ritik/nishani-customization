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
import RelatedProducts from './components/common/RelatedProducts';

const ProductPage: React.FC = () => {
  // const { data: productData, isLoading, error } = useQuery('productData', fetchProductData);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error loading product data</div>;

  return (
    <div className="product-page">
      <ProductHeader name="Product Name" />
      <ProductImage src="product-image.jpg" />
      <ProductDescription description="Product Description" />
      <ChainCustomizer options={["Left Chain", "Right Chain"]} />
      <StyleSelector styles={["Style 1", "Style 2", "Style 3"]} />
      <MetalSelector key="metal-selector" />
      <DetailsAccordion />
      <MaterialAccordion />
      <PriceDisplay price={100} />
      <AddToCartButton />
      <ProductGallery images={["image1.jpg", "image2.jpg", "image3.jpg"]} />
      <RelatedProducts products={[{ id: 1, name: "Product 1", image: "image1.jpg" }, { id: 2, name: "Product 2", image: "image2.jpg" }, { id: 3, name: "Product 3", image: "image3.jpg" }]} />
    </div>
  );
};

export default ProductPage;
