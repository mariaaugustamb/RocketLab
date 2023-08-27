import React, { useState } from 'react';
<script src="https://kit.fontawesome.com/69babdcab3.js"></script>

interface product {
    name: string,
    imageUrl: string,
    price: number,
    quantityInCart: number,
    handleAddToCartClick?: () => void,
    removeFromCart?: () => void
}

const Product = (props: product) => {

  return (
    <div className="flex flex-col items-center bg-zinc-400 rounded-lg pl-4 pr-4 pt-2 pb-2">
      <h3 className=' text-xs mb-2 '><b>{props.name}</b></h3>
      <img src={props.imageUrl} alt={props.name} width={120} className='w-120 h-20 object-cover mb-2 flex rounded-lg'/>
      <div className=' inline-flex gap-4'>
          <p>${props.price.toFixed(2)}</p>
          <div>
            <button onClick={props.removeFromCart} className='bg-zinc-800 rounded-l-md text-zinc-300 w-[24px]'>-</button>
            <span> {props.quantityInCart} </span>
            <button onClick={props.handleAddToCartClick} className='bg-zinc-800 rounded-r-md text-zinc-300 w-[24px]'>+</button>
          </div>
      </div>
      
    </div>
  );
};

export default Product;
