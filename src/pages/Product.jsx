import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { produtctId } = useParams();

  
  const { products,currency,addToCart } = useContext(ShopContext);
  const [productData, setproductData] = useState(false);
  const [imageSet, setimageSet] = useState("");
  const [size, setsize] = useState("")

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === Number(produtctId)) {
        setproductData(item);
        setimageSet(item.image[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [produtctId, products]);
 
  
  
  

  return productData ? (
    <div className="border-t pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* -----------------product data----------------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* -----------------product images----------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                alt=""
                key={index}
                className="w-[24%]  sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer "
                onClick={() => setimageSet(item)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={imageSet} alt="" className="w-full " />
          </div>
        </div>
        {/* -----------------product information----------------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
                 {
                  productData.sizes.map((item,index)=>(
                    <button key={index} onClick={()=>setsize(item)} className={`border border-gray-300 py-2 px-4 bg-gray-100 cursor-pointer ${item === size? 'border-orange-500':''}`} >{item}</button>
                  ))
                 }
            </div>
          </div>
          <div>
            <button onClick={()=>addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer">ADD TO CART</button>
            <hr className="mt-8 sm:w-3/4 border-gray-200"/>
            <div className="text-sm text-gray-400 mt-5 flex flex-col gap-1">
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>
      </div>
      {/* description and review section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border  border-gray-300  px-5 py-3 text-sm">
            Description
          </b>
          <p className="border  border-gray-300 px-5 py-3 text-sm">
          Reviews (122)
          </p>

        </div>
        <div className="flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-500">
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
          <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
      </div>
      {/* ---------------display related products----------- */}
      <RelatedProducts category={productData.category} subcategory={productData.subcategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
