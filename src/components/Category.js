import { useEffect, useState } from "react";
import CategoryService from "../services/categoryService";
import CategoryCard from "./CategoryCard";

const Category = (props) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService.getAllCategories().then((result) => {
      setCategories(result.data);
    });
  }, []);

  let categoryItems = [];
  categories.forEach((category) => {
    categoryItems.push(
      <CategoryCard id={category.id} name={category.name}></CategoryCard>
    );
  });

  return (
    <div
      style={{
        margin: "0 78px",
        width: "980px",
      }}
    >
      <h2>Categories</h2>
      {categoryItems}
    </div>
  );
};

export default Category;
