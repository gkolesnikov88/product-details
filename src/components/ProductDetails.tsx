import React, { useState } from "react";
import "./_productDetails.css";
import "./_productContent.css";
import { ProductDetailsType } from "./ProductTypes";
import { PriceInfo } from "./PriceInfo";
import { Images } from "./Images";

type ProductDetailsProps = {
  productData: ProductDetailsType;
};

type ProductContentPropTypes = {
  productData: ProductDetailsType;
};

const ProductContent = ({ productData }: ProductContentPropTypes) => {
  return (
    <div className="product__content">
      <h1 className="product__name text-5xl">{productData.name}</h1>
      <PriceInfo 
        discount_percentage = {20}
        list_price = {95}
        sale_price = {76}
      />
      <div>RateComponent</div>
      <p>Description</p>
      <div>AvailableColorsComponent</div>
      <div>AvailableColorsSizesComponent</div>
      <div>QuantityComponent</div>
      <button>Add to Cart</button>
      <div>ProductInfoComponent</div>
    </div>
  );
};

export const ProductDetails = ({ productData }: ProductDetailsProps) => {
  console.log(productData);
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
