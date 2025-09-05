import { GetProducts } from "../API_Info/GetProducts";
import { useState, useEffect } from "react";
import { ProductCard } from "../../ProductCard/ProductCard";
import { GetProductCategories } from "../API_Info/GetCategory";
import { GetProductsByCategory } from "../API_Info/GetProductsByCategory";
import "./Products.css";

export const Products = () => {
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await GetProducts();
      const categoryData = await GetProductCategories();
      const updatedCategories = [...categoryData, { id: "1a", name: "All" }];
      setProductData(productData.slice(0, 40));
      setCategoryData(updatedCategories);
    };
    fetchProducts();
  }, []);

  const onCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filterByCategories = GetProductsByCategory(
    productData,
    selectedCategory
  );
  return (
    <>
      <div>
        <h2 className="text-center font-bold">Start your Shopping</h2>
      </div>
      <main className="pt-8">
        <div className="category-div">
          Filter by:
          {categoryData?.length > 0 &&
            categoryData.map((category) => (
              <div
                className="category-filter"
                onClick={() => onCategoryClick(category.name)}
              >
                {category.name}
              </div>
            ))}
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {filterByCategories?.length > 0 ? (
            filterByCategories.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))
          ) : (
            <h2>No Products Found, Try another category</h2>
          )}
        </div>
      </main>
    </>
  );
};
