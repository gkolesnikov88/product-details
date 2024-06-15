import React from 'react';
import "./_quantityToAdd.css";

const QuantityToAdd = () => {
  return (
    <div className='quantity-to-add__container'>
        <p className="quantity-to-add__text text-sm">Quantity</p>
        <div className='quantity-control__container'>
            <div className='quantity-control__wrapper'>
                <button className='quantity-control__minus control-btn text-xl'>-</button>
                <div className='quantity-control__amount text-xl'>{0}</div>
                <button className='quantity-control__plus control-btn text-xl'>+</button>
            </div>
        </div>
    </div>
  )
}

export default QuantityToAdd