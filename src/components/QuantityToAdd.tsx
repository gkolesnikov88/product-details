import React, { Dispatch, SetStateAction } from "react";
import "./_quantityToAdd.css";

type QuantityToAddPropTypes = {
  availableAmount: number;
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
};

const QuantityToAdd = ({ availableAmount, amount, setAmount}: QuantityToAddPropTypes) => {  
  if (amount > availableAmount) {
    setAmount(availableAmount);
  }
  const insufficientStock = amount === availableAmount;

  return (
    <div className="quantity-to-add__container">
      <p className="quantity-to-add__text text-sm">Quantity</p>
      <div className="quantity-control__container">
        <div className="quantity-control__wrapper">
          <button
            disabled={amount === 0}
            className="quantity-control__minus control-btn text-xl"
            onClick={() => {
              if (amount !== 0) {
                setAmount(amount - 1);
              }
            }}
          >
            -
          </button>
          <input
            value={amount}
            className="quantity-control__amount text-xl"
            min={0}
            max={availableAmount}            
            onChange={e => setAmount(+e.target.value)}
            type="number"
          />
          <div className={insufficientStock ? 'btn-insufficient-stock' : ''}>
            <button
              disabled={availableAmount === amount}
              className="quantity-control__plus control-btn text-xl"
              onClick={() => {
                if (amount < availableAmount) {
                  setAmount(amount + 1);
                }
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantityToAdd;
