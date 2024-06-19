import React, { Dispatch, SetStateAction } from "react";
import "./_availableSizes.css";

type AvailableSizesPropTypes = {
  sizes: string[] | null | undefined;
  selectedSize?: string;
  setSelectedSize: Dispatch<SetStateAction<string | undefined>>;
};

const AvailableSizes = ({
  sizes = [],
  selectedSize,
  setSelectedSize
}: AvailableSizesPropTypes) => {
  return (
    <div className="available-sizes__wrapper">
      <p className="available-sizes__text text-sm">Available Sizes</p>
      <div className="available-sizes__buttons">
        {sizes &&
          sizes.map((size, idx) => {
            return (
              <button
                key={idx}
                className={`available-sizes__buttons__button ${
                  (selectedSize ? size === selectedSize : idx === 0) ? "button_active" : ""
                }`}
                onClick={() => {
                    setSelectedSize(size);
                }}
              >
                {size}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default AvailableSizes;
