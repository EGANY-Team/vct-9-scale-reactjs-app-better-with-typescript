import React from "react";
import styles from "./SearchBox.module.css";
import SearchBoxProps from "../models/SearchBoxProps";

const SearchBox: React.FC<SearchBoxProps> = ({ query, updateQuery }) => {
  return (
    <input
      className={styles.SearchBox}
      type="text"
      placeholder="Search by anime name"
      value={query}
      onChange={updateQuery}
    />
  );
};

export default SearchBox;
