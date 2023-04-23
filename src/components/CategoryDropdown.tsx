import { useEffect, useState } from "react";
import { Category } from "../interfaces/categories.interface";
import { fetchCategories } from "../utils/api";

const CategoryDropdown = (): JSX.Element => {
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories().then((response) => {
      setCategoryList(response);
      console.log(categoryList);
    });
  });

  return (
    <div>
      <label htmlFor="categories">Choose a category</label>
      <select name="categories" id="categories">
        {categoryList.map((category) => {
          return <option value={category.slug}>{category.slug}</option>;
        })}
      </select>
    </div>
  );
};

export default CategoryDropdown;
