import React from "react";
import {
  RiCheckboxBlankCircleFill,
  RiCheckboxCircleFill
} from "@remixicon/react";
import "./_availableColors.css";

type AvailableColorsPropTypes = {
  colors: string[] | null | undefined;
};

const AvailableColors = ({ colors = [] }: AvailableColorsPropTypes) => {
  return (
    <div className="available-colors__wrapper">
      <p className="available-colors__text text-sm">Available Colors</p>
      <div className="available-colors__color-circles">
        {colors &&
          colors.map((color, idx) => {
            return (
              <button key={idx} className="color-circles__button">
                {idx === 0 ? (
                  <RiCheckboxCircleFill
                    size={38}
                    color={color}
                    className="active-circle"
                  />
                ) : (
                  <RiCheckboxBlankCircleFill
                    color={color}
                    style={{
                      borderColor: color,
                      backgroundColor: color
                    }}
                  />
                )}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default AvailableColors;
