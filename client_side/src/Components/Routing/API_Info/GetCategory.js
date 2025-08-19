import axios from "axios";
const categoryUrl = "https://api.escuelajs.co/api/v1";

export const GetProductCategories = async () => {
  const catUrl = `${categoryUrl}/categories`;
  try {
    const { data } = await axios.get(catUrl);
    return data;
  } catch (err) {
    return err;
  }
};
