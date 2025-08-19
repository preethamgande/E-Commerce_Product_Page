export const getProductsByCategory = (productData, category) => {
  return category.toLowerCase() === "all"
    ? productData
    : productData.filter(
        (product) =>
          product.category.name.toLowerCase() === category.toLowerCase()
      );
};
