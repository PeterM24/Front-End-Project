import { useEffect, useState } from "react";
import { Category, CategoryType } from "../interfaces/categories.interface";
import { fetchCategories } from "../utils/api";
import { snakeToUpperLower } from "../utils/formatText";
import "../styles/CategoryDropdown.css"

const CategoryDropdown = ({
  setSelectedCategory,
}: CategoryType): JSX.Element => {
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories().then((response) => {
      setCategoryList(response);
    });
  }, []);

  return (
    <div className="category-dropdown">
      <select
        name="categories"
        id="categories"
        className="dropdown"
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all" key="all">
          All reviews
        </option>
        {categoryList.map((category) => {
          return (
            <option key={category.slug}  value={category.slug}>
                {snakeToUpperLower(category.slug)}
              </option>
          );
        })}
      </select>
    </div>
  );
};

export default CategoryDropdown;
