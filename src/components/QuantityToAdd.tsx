import React, { useState } from "react";
import "./_quantityToAdd.css";

type QuantityToAddPropTypes = {
  availableAmount: number;
};

const QuantityToAdd = ({ availableAmount }: QuantityToAddPropTypes) => {
  const [amount, setAmount] = useState(0);
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
            max={availableAmount}
            onChange={e => setAmount(+e.target.value)}
          />
          <div className={insufficientStock ? 'btn-insufficient-stock' : ''}>
            <button
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
