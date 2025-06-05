import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtactedRouter from "./components/ProtactedRouter/ProtactedRouter";

const stripePromise = loadStripe(
  "pk_test_51RVbsdAO43Ae11f8XomqYiakbxw10EbKv9eA2qltA3zChKXMX6Hkz7tQbuj7PKpUGZD4JDOTtpRdeDM2NpAD78rF00QrhaTr32"
);

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route
        path="/payment"
        element={
          <ProtactedRouter
            msg={"you must log in to pay"}
            redirect={"/payment"}
          >
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtactedRouter>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtactedRouter
            msg={"you must log in to access your order"}
            redirect={"/orders"}
          >
            <Orders />
          </ProtactedRouter>
        }
      />
      <Route path="/cart" element={<Cart />} />
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
    </Routes>
  );
}

export default Routing;
