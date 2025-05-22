import { useCallback, useState } from "react";
import GetProductsButton from "./GetProductsButton";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <GetProductsButton fetchProducts={fetchProducts} />
      {products.map((product) => (
        <div key={product.id} className="border rounded-xl p-4 shadow-md">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="text-lg font-bold mt-2">{product.title}</h3>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-green-500 font-semibold mt-2">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
