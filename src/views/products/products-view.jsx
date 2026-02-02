import React, { useEffect, useState } from "react";
import ProductItem from "../../components/product-item";

const ProductsView = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const response = await data.json();
      setProducts(response);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <>
          <p>loading ...</p>
        </>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 gap-4 p-3">
            {products.map((product) => (
              <ProductItem key={product.id} data={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsView;
