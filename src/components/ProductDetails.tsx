import React, { useState } from "react";
import "./_productDetails.css";
import "./_productContent.css";
import { ProductDetailsType } from "./ProductTypes";

type ProductDetailsProps = {
  productData: ProductDetailsType;
};

type ImagesPropsTypes = {
  productData: ProductDetailsType;
  currentImage: number;
};

type ProductContentPropTypes = {
  productData: ProductDetailsType
}

const Images = ({ productData, currentImage }: ImagesPropsTypes) => {
  return (
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
        {productData.images
          ?.filter((_, idx) => idx > 0)
          .map((thumbnail, idx) => (
            <div className="thumbnails" key={idx}>
              <img
                className={`thumbnail__image ${
                  idx === 0 ? "thumbnail__image--active" : ""
                }`}
                src={thumbnail.image_url}
                alt={`Thumbnail image # ${idx + 1}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

const ProductContent = ({productData} : ProductContentPropTypes) => {
  return (
    <div className="product__content">
      <h1 className="product__name text-5xl">{productData.name}</h1>
      <div>PriceComponent</div>
      <div>RateComponent</div>
      <p>Description</p>
      <div>AvailableColorsComponent</div>
      <div>AvailableColorsSizesComponent</div>
      <div>QuantityComponent</div>
      <button >Add to Cart</button>
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
        <ProductContent 
          productData={productData}
        />
      </section>
    </>
  );
};
