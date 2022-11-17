import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";

import Category from "../category/category.component";
import { CategoriesProvider } from "../../contexts/categories.context";

import "./shop.styles.scss";
import { useEffect, useState } from "react";

export const Shop = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:4000/autoparts");
      const records = await response.json();

      setParts(records);
    }

    fetchData();
  }, []);

  return (
    <div id="main">
        <h1>SHOP AUTO PARTS</h1>
        <div id="parts">
        {parts.map((part)=>{
            return <p key ={part._id}> {part.part_name} {part.price} </p>;
        })}
        </div>
    </div>
  )
}

export default Shop;
