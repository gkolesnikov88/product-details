import React, { useEffect, useRef, useState } from "react";
import "./_productInfo.css";
import { InfoEntity } from "./ProductTypes";
import { RiAddCircleLine } from "@remixicon/react";
import { RiIndeterminateCircleLine } from "@remixicon/react";

type ProductInfoPropTypes = {
  info?: InfoEntity[] | null;
};
type ProductInfoItemTypes = {
  info: InfoEntity;
};

const ProductInfoItem = ({ info }: ProductInfoItemTypes) => {
  const [collapsed, setCollapsed] = useState(false);
  const [initialHeight, setInitialHeight] = useState<number | undefined>(undefined);
  const listRef = useRef(null);

  useEffect(() => {
    if(listRef?.current) {
      setInitialHeight((listRef?.current as HTMLUListElement).offsetHeight);
    }
  }, []);

  return (
    <div className="product-info__container">
      <div className="product-info__header text-lg">
        {info.title}
        <button
          className="product-info__header__toggle"
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        >
          {collapsed ? <RiAddCircleLine /> : <RiIndeterminateCircleLine />}
        </button>
      </div>
      <ul ref={listRef} className={`product-info__list ${collapsed ? "collapsed" : ""}`} style={{
        height: initialHeight + 'px'
      }}>
        {info.description?.map((description, idx) => {
          return (
            <li key={idx} className="product-info__list__item text-base">
              {description}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const ProductInfo = ({ info }: ProductInfoPropTypes) => {
  return (
    <div className="product-infos__container">
      {info?.map((info, idx) => (
        <ProductInfoItem key={idx} info={info} />
      ))}
    </div>
  );
};
