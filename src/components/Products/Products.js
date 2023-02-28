import React, { useState } from "react";
import { products } from "../../data/data";
import AppPath from "../AppPath/AppPath";
import Filter from "../Filter/Filter";
import ProductCard from "./ProductCard";

const Products = () => {
  const [productList, setProductList] = useState(products);

  return (
    <div>
      <div className="w-full space-y-4 max-w-6xl mx-auto">
        <AppPath />
        <Filter />
      </div>
      <div className="max-w-6xl mx-auto mb-10 mt-4 grid grid-cols-2 lg:grid-cols-4 gap-5 text-black pt-8">
        {productList.map((item) => {
          return <ProductCard productInfo={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
export default Products;
