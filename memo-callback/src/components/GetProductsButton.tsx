import { memo } from "react";

interface GetProductsButton {
  fetchProducts: () => void;
}

const GetProductsButton = memo(({ fetchProducts }: GetProductsButton) => {
  console.log("Rendered Button Component");

  return (
    <>
      <button onClick={fetchProducts}>Fetch Products</button>
    </>
  );
});

export default GetProductsButton;
