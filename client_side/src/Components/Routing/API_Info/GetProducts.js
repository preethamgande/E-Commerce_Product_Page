import axios from "axios";
const productsUrl = "https://api.escuelajs.co/api/v1";

export const GetProducts = async () => {
  const url = `${productsUrl}/products`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    return err;
  }
};
