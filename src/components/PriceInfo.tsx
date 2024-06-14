
import "./_priceInfo.css";
import { CURRENCY } from "../constants";

type PriceInfoPropTypes = {
  discount_percentage?: number,
  list_price: number,
  sale_price: number
}

export const PriceInfo = ({
  discount_percentage,
  list_price,
  sale_price
}: PriceInfoPropTypes) => {
  return (
    <div className="price-info__wrapper">
      <div className="price__wrapper">
        <div className="sale-price text-3xl">{CURRENCY}{sale_price}</div>
        <div className="list-price">{CURRENCY}{list_price}</div>
      </div>
      <div className="discount__wrapper text-sm">
        <div className="discount">{`${discount_percentage}% OFF`}</div>
      </div>
    </div>
  );
};