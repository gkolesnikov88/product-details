import React, { useState } from "react";
import "./_productDetails.css";
import "./_productContent.css";
import { ProductDetailsType } from "./ProductTypes";
import { PriceInfo } from "./PriceInfo";
import { Images } from "./Images";
import Rating from "./Rating";
import AvailableColors from "./AvailableColors";
import AvailableSizes from "./AvailableSizes";
import QuantityToAdd from "./QuantityToAdd";
import { ProductInfo } from "./ProductInfo";

type ProductDetailsProps = {
  productData: ProductDetailsType;
};

type ProductContentPropTypes = {
  productData: ProductDetailsType;
};

const ProductContent = ({ productData }: ProductContentPropTypes) => {
  const [selectedColor, setSelectedColor] = useState(productData.colors?.[0]);
  const [selectedSize, setSelectedSize] = useState(productData.sizes?.[0]);
  const [amount, setAmount] = useState(1);

  const availableAmount =
    productData.inventory?.find(
      el => el.color === selectedColor && el.size === selectedSize
    )?.stock || 0;

  return (
    <div className="product__content product">
      <h1 className="product__name text-5xl">{productData.name}</h1>
      <PriceInfo discount_percentage={20} list_price={95} sale_price={76} />
      <Rating rating={4.06} reviews={62} />
      <p className="product__description text-base">
        {productData.description}
      </p>
      <AvailableColors
        colors={productData.colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <AvailableSizes
        sizes={productData.sizes}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
      <QuantityToAdd amount={amount} setAmount={setAmount} availableAmount={availableAmount} />
      <div className={`add-to-cart__wrapper ${amount === 0 ? "disabled": ""}`}>
        <button disabled={amount === 0} className="add-to-cart text-lg">
          Add to Cart
        </button>
      </div>      
      <ProductInfo info={productData.info} />
    </div>
  );
};

export const ProductDetails = ({ productData }: ProductDetailsProps) => {
  return (
    <>
      <section className="product-details">
        <Images productData={productData} />
        <ProductContent productData={productData} />
      </section>
    </>
  );
};
