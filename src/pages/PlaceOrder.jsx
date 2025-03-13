import React, { useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const PlaceOrder = () => {

  const [method, setmethod] = useState('cod')
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-300'>
{/* -------------left side------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="tex-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className="flex gap-3">
          <input required  type="text" placeholder='First name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input required type="text" placeholder='Last name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input required type="email" placeholder='Email address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <input required type="text" placeholder='Street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <div className="flex gap-3">
          <input required type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input required type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <div className="flex gap-3">
          <input required type="number" placeholder='Zipcode' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input required type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input required type="number" placeholder='Phone' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
      </div>
      {/* -----------Right Side-------------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">

      <CartTotal/>
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={'METHOD'}/>
          {/* -------------payment method selection------------- */}
          <div className="flex gap-3 flex-col lg:flex-row">
               <div onClick={()=>setmethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer border-gray-200">
                <p className={`min-w-3.5 h-3.5 border rounded-full border-gray-200 ${method==='stripe'? "bg-green-400":""}`}></p>
                <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
               </div>
               <div onClick={()=>setmethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer border-gray-200">
                <p className={`min-w-3.5 h-3.5 border rounded-full border-gray-200 ${method==='razorpay'?"bg-green-400":""} `}></p>
                <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
               </div>
               <div onClick={()=>setmethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer border-gray-200">
                <p className={`min-w-3.5 h-3.5 border rounded-full border-gray-200 ${method==='cod'? "bg-green-400":""} `}></p>
                <p className='mx-4 text-gray-500 font-medium text-sm'>CASH  ON DELIVERY</p>
               </div>
          </div>
          <div className="w-full text-end">
            
            <Link to='/orders'>
            <button className='bg-black text-white text-sm font-medium  my-8 px-16 py-3 cursor-pointer' type='submit'>PLACE ORDER</button>
            </Link>
             
              </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder