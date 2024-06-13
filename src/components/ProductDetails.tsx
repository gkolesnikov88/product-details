import React from "react";
import { ProductDetailsType } from "./ProductTypes";

type ProductDetailsProps = {
    productData: ProductDetailsType;
}

export const ProductDetails = ({
  productData
}: ProductDetailsProps) => {
  console.log(productData);

  return <div>ProductDetails</div>;
};
