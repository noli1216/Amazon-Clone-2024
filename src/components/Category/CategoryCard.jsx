import React from "react";
import classes from "./Category.module.css";
import { Link } from "react-router";

function CategoryCard({ data }) {
  if (!data) return null; // <- Prevents crash if data is undefined

  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title} />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
