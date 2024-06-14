import React, { useState } from "react";
import "./_productDetails.css";
import { ProductDetailsType } from "./ProductTypes";

type ProductDetailsProps = {
  productData: ProductDetailsType;
};

export const ProductDetails = ({ productData }: ProductDetailsProps) => {
  console.log(productData);
  const [currentImage, setCurrentImage] = useState(
    productData.images?.length ? 0 : -1
  );

  return (
    <>
      <section className="product-details">
        <div className="images__wrapper">
          <div className="current-image__wrapper">
            <img
              className="current-image"
              src={`${
                currentImage >= 0
                  ? productData.images?.[currentImage].image_url
                  : ""
              }`}
              alt="Main image"
            />
          </div>
          <div className="thumbnails__wrapper">
            {productData.images?.filter((_, idx) => idx > 0).map((thumbnail, idx) => (
              <div className="thumbnails" key={idx}>
                <img
                  className={`thumbnail__image ${idx === 0 ? "thumbnail__image--active": ""}`}
                  src={thumbnail.image_url}
                  alt={`Thumbnail image # ${idx + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
