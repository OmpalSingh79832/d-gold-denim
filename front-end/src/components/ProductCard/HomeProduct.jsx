import React, { useState } from "react";
import Filters from "./Filters"; 
import { products } from "./data"; 

const HomeProduct = () => {

  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <div>
      {/* Pass products and setFilteredProducts as props to Filters component */}
      <Filters
        setFilteredProducts={setFilteredProducts}
        filteredProducts={filteredProducts}
        products={products}
      />
      
    </div>
  );
};

export default HomeProduct;
