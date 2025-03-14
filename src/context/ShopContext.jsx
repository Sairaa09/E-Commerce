import { createContext, useEffect } from "react";
import { products } from "../assets/assets";
import { useState } from "react";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider=(props)=>{

    const currency = '$';
    const delivery_fee = 10;
    const [search, setsearch] = useState("")
    const [showSearch, setshowSearch] = useState(false)
    const [cartItems, setcartItems] = useState({})

    const addToCart=async(itemId,size) => {
      
      if(!size){
        toast.error('Select Product Size!', {
         
          
          });
          return;
      }

      let cartData=structuredClone(cartItems)

      if(cartData[itemId]){
        if(cartData[itemId][size]){
          cartData[itemId][size]+=1;
        }else{
          cartData[itemId][size]=1
        }
      }else{
        cartData[itemId]={};
        cartData[itemId][size]=1;
      }
      setcartItems(cartData)
    }
    
  const getCartCount=() => {
    
    let totalCount=0
   
    for(const items in cartItems){
      for(const item in cartItems[items]){
        try {
          if(cartItems[items][item]>0){
            totalCount+=cartItems[items][item]
           
            
          }
        } catch (error) {
          console.log(error);
          
        }
         
      }
      
    }
    
    return totalCount;
   
  
  }



  const updateQuantity= async(itemId,size,quantity) => {
    let cartData=structuredClone(cartItems);
    cartData[itemId][size]=quantity;
    setcartItems(cartData)
  }
  
   const cartAmount= () => {
     let totalAmount=0;
     for(const items in cartItems){
      
      
      let iteminfo = products.find((product)=>product._id===Number(items));
      for(const item in cartItems[items]){
        try {
          if (cartItems[items][item]) {
            totalAmount += iteminfo.price*cartItems[items][item]
          }
        } catch (error) {
          
        }
      }
     }

     return totalAmount;
   }
   
  

    const value={
         products , currency , delivery_fee,
         search,setsearch,showSearch,setshowSearch,
         cartItems,addToCart,getCartCount,
         updateQuantity,cartAmount
    }
    return(
        <ShopContext.Provider value={value}>
          {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;