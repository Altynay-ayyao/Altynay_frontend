import React from 'react'
import { generateAmountOptions } from '../utils';
import {removeItem,editItem} from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux';

const CartItem = ({cartItem}) => {
  const dispatch = useDispatch()

  const removeItemFromTheCart = ()=>{
    dispatch(removeItem({cartID}))
  }

  const handleAmount = (e)=>{
    dispatch(editItem({cartID,amount:parseInt(e.target.value)}))
  }
  
  const {  //cartID:product.id,
    cartID,
    images,
    title,
    price,
    amount,} = cartItem;

  return (
    <article key={cartID} 
    className='mb-12 flex 
    flex-col gap-y-4 
    sm:flex-row flex-wrap 
    border-b border-base-300 
    pb-6 last:border-b-0'>
      {/* IMAGE */}
      <img src={images} alt={title} className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover ' />
      {/* INFO */}
      <div className="sm:ml-16 sm:w-48">
        {/* TITLE */}
        <div className="capitalize font-medium">{title}</div>
        </div>
        <div className="sm:ml-12">
      {/* AMOUNT */}
      <div className="form-control max-w-xs">
        <label htmlFor="amount" className='label p-0'>
          <span className='label-text'>
            Amount
          </span>
        </label>
        <select
         name="amount" 
         id="amount" 
         className='nt-2 select select-base select-bordered select-xs' 
         value={amount}
         onChange={handleAmount}>
          {generateAmountOptions(amount+5)}
        </select>
      </div>
      {/* REMOVE */}
      <button className='mt-2 link link-primary link-hover text-sm' onClick={removeItemFromTheCart}>remove</button>
      </div>
      {/* PRICE */}
      <p className='font-medium sm:ml-auto'>{price}€</p>
  
    </article>
  )
}

export default CartItem