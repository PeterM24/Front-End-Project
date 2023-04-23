import { useEffect, useState } from "react";
import { Category, CategoryType } from "../interfaces/categories.interface";
import { fetchCategories } from "../utils/api";
import { snakeToUpperLower } from "../utils/formatText";

const CategoryDropdown = ({selectedCategory, setSelectedCategory}: CategoryType): JSX.Element => {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchCategories().then((response) => {
      setCategoryList(response);
    });
  }, []);

  return (
    <div className="category-dropdown">
      <select onChange={e=>{setSelectedCategory(e.target.value);
      }}  name="categories" id="categories">
        <option value="reviews" key="all">All reviews</option>
        {categoryList.map((category) => {
          return <option key={category.slug} value={category.slug}>{snakeToUpperLower(category.slug)}</option>;
        })}
      </select>
    </div>
  );
};

export default CategoryDropdown;
