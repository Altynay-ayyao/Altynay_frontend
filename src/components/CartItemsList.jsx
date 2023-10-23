import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'



const CartItemsList = () => {
  const cartItems = useSelector((state)=> state.cartState.cartItems);
  return (
   <>
   {cartItems.map((product)=>{
    return <CartItem key={product.cartID} cartItem={product}/>
   })}
   </>
  )
}

export default CartItemsList