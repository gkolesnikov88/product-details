import React from 'react';
import "./_availableSizes.css";

type AvailableSizesPropTypes = {
    sizes: string[] | null | undefined
}

const AvailableSizes = ({sizes = []} : AvailableSizesPropTypes ) => {
  return (
    <div className='available-sizes__wrapper'>
        <p className="available-sizes__text text-sm">Available Sizes</p>
        <div className="available-sizes__buttons">
            {
                sizes && sizes.map((size, idx) => {
                    return <button className={`available-sizes__buttons__button ${idx === 0 ? "button_active": ""}`}>{size}</button>
                })
            }
        </div>
    </div>
  )
}

export default AvailableSizes