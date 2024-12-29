import { useEffect, useState } from "react";
import {useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  // const navigate = useNavigate();
  const data = useLoaderData(); 
  const { category } = useParams();
  console.log("categories :", category);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (product) => product.category === category
      );
      setProducts(filteredByCategory);
    } else {
      setProducts(data);
    }
  }, [category, data]);
  return (
    <>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </>
  );
};

export default Products;
