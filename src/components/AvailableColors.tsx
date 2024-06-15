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
            if (idx === 0) {
              return (
                <RiCheckboxCircleFill
                  color={color}
                  className="active-circle"
                  style={{
                    boxShadow: "0px 0px 0px 1px #444CE7"
                  }}
                />
              );
            }
            return (
              <RiCheckboxBlankCircleFill
                color={color}
                style={{
                  borderColor: color,
                  backgroundColor: color,
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default AvailableColors;
