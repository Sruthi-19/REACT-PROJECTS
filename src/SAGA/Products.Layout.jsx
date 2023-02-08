import React, { useEffect } from "react";
import { getProducts } from "./Products.Slice";
import { useDispatch, useSelector } from "react-redux";

const ProductComp = () => {
  const productsState = useSelector((state) => state.products.productArray);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  console.log("productsState", productsState);
  return (
    <>
      <h1>PRODUCTS</h1>
    </>
  );
};

export default ProductComp;
