import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";

import Category from "../category/category.component";
import { CategoriesProvider } from "../../contexts/categories.context";
import SearchBox from "../../components/search-box/search-box.component";

import "./shop.styles.scss";
import { useEffect, useState } from "react";

export const Shop = () => {
  const [parts, setParts] = useState([]);

  const [searchField, setSearchField] = useState(""); //[value,setValue]

  const [filteredParts, setFilteredParts] = useState(parts);

  // useEffect(() => {
  //   const newFilteredParts = parts.filter((part) => {
  //     return part.name.toLocaleLowerCase().includes(searchField);
  //   });
  //   setFilteredParts(newFilteredParts);
  // }, [parts, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

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
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search Car Parts..."
      />
      <div id="parts">
        <li>
        {parts.map((part) => {
          return (
            <p key={part._id}>
              {" "}
              {part.part_name} {part.price}{" "}
            </p>
          );
        })}

        </li>
       
      </div>
    </div>
    
  );
};

export default Shop;
