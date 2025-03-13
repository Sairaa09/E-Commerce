import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ({id,name,image,price}) => {
     
      
    const {currency} =useContext(ShopContext)
 
    return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer    flex flex-col items-center'>
      <div className='overflow-hidden h-[250px] '>
        <img src={image[0]} alt="" className='hover:scale-110 transition ease-in-out h-full' />
      </div>
     <div>
     <p className='pt-3 pb-1 text-sm'>{name}</p>
     <p className='text-sm font-medium '>{currency}{price}</p>
     </div>
    </Link>
  )
}

export default ProductItem
