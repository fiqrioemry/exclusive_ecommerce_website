import React, { createContext, useEffect, useState } from "react";

export const ProductContexts = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <ProductContexts.Provider value={{ products }}>
      {children}
    </ProductContexts.Provider>
  );
};

export default ProductProvider;
