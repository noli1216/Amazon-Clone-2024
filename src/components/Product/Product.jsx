import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader"; 

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true); // ✅ Start loading
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsloading(false); // ✅ Correct usage
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false); // ✅ Correct usage
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader /> 
      ) : (
        <section className={classes.products__container}>
          {products.map((singleProduct) => (
             <ProductCard
             product={singleProduct} 
             key={singleProduct.id} 
             renderAdd={true} />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;




// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import ProductCard from "./ProductCard";
// function Product() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data);
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//         <section>
//           {
//           products.map((singleProduct) => {
//             return <ProductCard product={singleProduct} key={singleProduct.id} />;
//           })
//           }
//         </section>

//   );
// }

// export default Product;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard";
// import classes from "./Product.module.css";
// import Loder from "../Loder/Loder";

// function Product() {
//   const [products, setProducts] = useState([]); // initialize as []
//   const [isLoading, setIsloading] = useState(false);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data);
//         console.log(res);
//         isLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         isLoading(false);
//       });
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <section className={classes.products__container}>
//           {products?.map((singleProduct) => (
//             <ProductCard product={singleProduct} key={singleProduct.id} />
//           ))}
//         </section>
//       )}
//     </>
//   );
// }

// export default Product;