import React from "react";
import classes from "./ProductDetail.module.css";

import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [isLoading, setIsloading] = useState(false);
  const [product, setProduct] = useState({});
  useEffect(() => {
    setIsloading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false);
      });
  }, []);
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
         product={product}
          flex={true}
           renderDesc={true} renderAdd={true} />
      )}
    </LayOut>
  );
}

export default ProductDetail;
