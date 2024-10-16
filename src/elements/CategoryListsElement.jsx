import React from "react";
import { Link } from "react-router-dom";

const CategoryListsElement = ({ category }) => {
  return (
    <Link
      className="cursor-pointer py-2 text-md"
      to={`/products/category/${category}`}
    >
      {category}
    </Link>
  );
};

export default CategoryListsElement;
