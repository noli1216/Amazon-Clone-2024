
import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const { categoryName } = useParams();

  useEffect(() => {
    setIsloading(true); // set loading before fetching
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        console.log(res);
        setResults(res.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false); // fix incorrect function call
      });
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader/> // or replace with your custom loader component
        ) : (
          <div className={classes.products__container}>
            {results.map((product) => (
              <ProductCard
                key={product.id}
                renderAdd={true}
                product={product}
                renderDesc={false}
               
              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;







