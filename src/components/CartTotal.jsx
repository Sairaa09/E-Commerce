import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {
    const{currency,delivery_fee,cartAmount} = useContext(ShopContext)
    
    
  return (
    <div className='w-full'>
        <div className="text-2xl">
            <Title text1={'CART'} text2={'TOTALS'}/>
        </div>

        <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{currency}{cartAmount()}.00</p>
            </div>
            <hr className='border-gray-300' />
            <div className="flex justify-between">
                <p>Shipping Fee</p>
                    <p>{currency}{delivery_fee}.00</p>
            </div>
            <hr className='border-gray-300'/>
            <div className="flex justify-between">
                <b>Total</b>
                <p>{currency}{cartAmount()===0?0:cartAmount()+delivery_fee}.00</p>
            </div>
        </div>
      
    </div>
  )
}

export default CartTotal
