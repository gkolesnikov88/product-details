import { useState } from "react";
import { ProductDetailsType } from "./ProductTypes";
import "./_images.css"

type ImagesPropsTypes = {
  productData: ProductDetailsType;
};

export const Images = ({ productData }: ImagesPropsTypes) => {
  const [currentImage, setCurrentImage] = useState(
    productData.images?.length ? 0 : -1
  );

  return (
    <div className="images__wrapper">
      <div className="current-image__wrapper">
        <img
          className="current-image"
          src={`${
            currentImage >= 0
              ? productData.images?.[currentImage + 1].image_url
              : ""
          }`}
          alt="Main"
          width="592"
          height="800"
          loading="lazy"
          decoding="async"
          sizes="50vw"
        />
      </div>
      <div className="thumbnails__wrapper">
        {productData.images
          ?.filter((_, idx) => idx > 0)
          .map((thumbnail, idx) => (
            <button className="thumbnail" key={idx} onClick={() => {
              setCurrentImage(idx);            
            }}>
              <img
                className={`thumbnail__image ${
                  idx === 0 ? "thumbnail__image--active" : ""
                }`}
                src={thumbnail.image_url}
                alt={`Thumbnail # ${idx + 1}`}
                loading="lazy"
                width="160"
                height="190"
                decoding="async"
              />
            </button>
          ))}
      </div>
    </div>
  );
};
