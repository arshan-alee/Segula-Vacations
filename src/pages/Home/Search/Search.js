import React from "react";
import "./Search.css";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="search__container">
      {/* Category Container */}
      <div className="search__category-container">
        <label>Category</label>
        <select placeholder="Select">
          <option>Select</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </select>
      </div>
      {/* Guest Container */}
      <div className="search__guest-container">
        <label>Guest</label>
        <select placeholder="Select">
          <option>Select</option>
          <option>Guest 2</option>
          <option>Guest 3</option>
          <option>Guest 4</option>
        </select>
      </div>
      {/* Check In Container */}
      <div className="search__check-in-container">
        <label>Check In</label>
        <input type="date" placeholder="Select Date" />
      </div>

      {/* Check Out Container */}
      <div className="search__check-out-container">
        <label>Check Out</label>
        <input type="date" placeholder="Select Date" />
      </div>

      {/* Search Button Container */}
      <div className="search__button-container">
        <div>
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;
