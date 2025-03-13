import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  let { products } = useContext(ShopContext);

  const [bestSellers, setbestSellers] = useState([]);
  useEffect(() => {
    let bestProducts = products.filter((product) => product.bestseller === true)
    // console.log(bestProducts.slice(0,5));
    
    setbestSellers(bestProducts.slice(0,5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
          dolor sit amet consectetur
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols 4 lg:grid-cols-5 gap-4 gapy-y-6">
        {bestSellers.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
