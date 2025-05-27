import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCartAdd } from "react-icons/bi";
import "./Header.module.css";
import Image from "../../assets/imags/image.png";
import LowerHeader from "./LowerHeader";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";

function Header() {

     const [{ basket }, dispatch] = useContext(DataContext); // ✅ this now works
     console.log(basket.length);

     const totaItem = basket?.reduce((amount,item)=>{
      return item.amount + amount
     },0)


  return (
    <section className={classes.fixed}>
      <div className={classes.header_container}>
        {/* Logo and Delivery */}
        <div className={classes.logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Logo"
            />
          </Link>
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div className={classes.signin}>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className={classes.search}>
          <select>
            <option value="all">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <BsSearch size={20} />
        </div>

        {/* Right Section */}
        <div className={classes.order_container}>
          <Link to="#" className={classes.language}>
            <img src={Image} alt="US Flag" />
            <select>
              <option value="EN">EN</option>
            </select>
          </Link>

          <Link to="/">
            <div className={classes.signin}>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </Link>

          <Link to="/orders">
            <div className={classes.signin}>
              <p>Returns</p>
              <span>& Orders</span>
            </div>
          </Link>

          <Link to="/cart" className={classes.cart}>
            <BiCartAdd size={30} />
            <span>{totaItem}</span>
          </Link>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
}
export default Header;
