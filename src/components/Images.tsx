import { ProductDetailsType } from "./ProductTypes";
import "./_images.css"

type ImagesPropsTypes = {
  productData: ProductDetailsType;
  currentImage: number;
};

export const Images = ({ productData, currentImage }: ImagesPropsTypes) => {
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
          alt="Main"
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
                alt={`Thumbnail # ${idx + 1}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
