import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const {products,search,showSearch} = useContext(ShopContext);
  const [filterProducts, setfilterProducts] = useState([]);
  const [showFilter, setshowFilter] = useState(false);
  const [category, setcategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);
  const [sortType,setsortType]=useState("relative")
  const toggleCategory=(e) => {
    if(category.includes(e.target.value)){
         setcategory(category.filter(item=>item!==e.target.value))
    }else{
      setcategory([...category,e.target.value])
    }
  }
  const toggleSubCategory=(e) => {
    if(subCategory.includes(e.target.value)){
         setsubCategory(subCategory.filter(item=>item!==e.target.value))
    }else{
      setsubCategory([...subCategory,e.target.value])
    }
  }

  const applyFilter=() => {
    let productCopy = products.slice()
    if(showSearch && search){
      productCopy = productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
  
    }
    if(category.length>0){
      productCopy=productCopy.filter(item=>category.includes(item.category))
    }

    if(subCategory.length>0){
      productCopy=productCopy.filter(item=>subCategory.includes(item.subCategory))
    }
    setfilterProducts(productCopy)
  }

  const sortProduct=() => {
    let fpCopy=filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setfilterProducts(fpCopy.sort((a,b)=>a.price-b.price))
        break;
      case "high-low":
        setfilterProducts(fpCopy.sort((a,b)=>b.price-a.price))
        break;
    
      default:
        applyFilter()
    }
  }
  
  
  

  useEffect(() => {
 
    setfilterProducts(products)
  }, [])
  useEffect(() => {
   applyFilter()
  }, [category,subCategory,search,showSearch])
  useEffect(() => {
    
    sortProduct()
  },[sortType])
  
  
  return (
    <div  className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t border-t-gray-300 py-10 '>
       {/* filter options */}
       <div className="min-w-50 lg:min-w-60">
        <p className='my-2 text-xl cursor-pointer items-center gap-2 flex font-medium' onClick={()=>setshowFilter(!showFilter)}>FILTERS <img src={assets.dropdown_icon} alt="" className={`w-2 block sm:hidden ${showFilter? "rotate-90" : ""}`} /></p>
        {/* category filter */}
        <div  className={` border border-gray-300 pl-5 py-3 my-5 ${showFilter? "" : "hidden"} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input type="checkbox" value={'Men'} className='w-3' onChange={toggleCategory} />Men
              </p>
              <p className="flex gap-2">
                <input type="checkbox" value={'Women'} className='w-3' onChange={toggleCategory} />Women
              </p>
              <p className="flex gap-2">
                <input type="checkbox" value={'Kids'} className='w-3' onChange={toggleCategory} />Kids
              </p>
            </div>
        </div>
        {/* type filter */}
        <div  className={` border border-gray-300 pl-5 py-3 my-5 ${showFilter? "" : "hidden"} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input type="checkbox" value={'Topwear'} className='w-3' onChange={toggleSubCategory} />Topwear
              </p>
              <p className="flex gap-2">
                <input type="checkbox" value={'Bottomwear'} className='w-3'  onChange={toggleSubCategory}/>Bottomwear
              </p>
              <p className="flex gap-2">
                <input type="checkbox" value={'Winterwear'} className='w-3' onChange={toggleSubCategory} />Winterwear
              </p>
            </div>
        </div>
       </div>
       {/* Right Side */}
       <div className='flex-1'>
             <div className="flex justify-between text-base sm:text-2xl mb-4">
              <Title text1={"ALL"} text2={"COLLECTIONS"}/>
              {/* Product Sort */}
              <select className='border-2 border-gray-300 text-sm px-2'onChange={(e)=>setsortType(e.target.value)}>
                <option value="relative">Sort by:Relavent</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>
             </div>

             {/* Map Products */}

             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                   {
                    filterProducts.map((item,index)=>(
                      <ProductItem
                      key={index}
                      id={item._id}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                    />
                    ))
                   }
             </div>
       </div>
    </div>
  )
}

export default Collection