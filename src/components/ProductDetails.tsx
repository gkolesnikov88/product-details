import React, { useState } from "react";
import "./_productDetails.css";
import "./_productContent.css";
import { ProductDetailsType } from "./ProductTypes";
import { PriceInfo } from "./PriceInfo";
import { Images } from "./Images";
import Rating from "./Rating";
import AvailableColors from "./AvailableColors";

type ProductDetailsProps = {
  productData: ProductDetailsType;
};

type ProductContentPropTypes = {
  productData: ProductDetailsType;
};

const ProductContent = ({ productData }: ProductContentPropTypes) => {
  return (
    <div className="product__content product">
      <h1 className="product__name text-5xl">{productData.name}</h1>
      <PriceInfo 
        discount_percentage = {20}
        list_price = {95}
        sale_price = {76}
      />
      <Rating 
        rating={4.06}
        reviews={62}
      />
      <p className="product__description text-base">{productData.description}</p>
      <AvailableColors 
        colors={productData.colors}
      />
      <div>AvailableColorsSizesComponent</div>
      <div>QuantityComponent</div>
      <button>Add to Cart</button>
      <div>ProductInfoComponent</div>
    </div>
  );
};

export const ProductDetails = ({ productData }: ProductDetailsProps) => {
  const [currentImage, setCurrentImage] = useState(
    productData.images?.length ? 0 : -1
  );

  return (
    <>
      <section className="product-details">
        <Images productData={productData} currentImage={currentImage} />
        <ProductContent productData={productData} />
      </section>
    </>
  );
};
