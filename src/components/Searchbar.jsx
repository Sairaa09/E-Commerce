import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Searchbar = () => {
    const {search,setsearch,showSearch,setshowSearch} = useContext(ShopContext)

    const [visible, setvisible] = useState(false)
    const loction= useLocation();
    useEffect(()=>{
        if(loction.pathname.includes("collection")){
            setvisible(true)
        }else{
            setvisible(false)
        }
    },[loction])

  return showSearch && visible?(
    <div className='border-t  border-gray-300 bg-gray-50 text-center'>
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
      <input type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm' value={search} onChange={(e)=>setsearch(e.target.value)}/>
      <img src={assets.search_icon} alt="search-icon" className='w-4'/>
      </div>
      <img src={assets.cross_icon} alt="cross" className='inline w-3 cursor-pointer' onClick={()=>setshowSearch(false)} />
    </div>
  ): null
}

export default Searchbar
