import { wishListActionCreater } from "../redux/action_creators/actionCreater";
import toast from "react-hot-toast";
export const handleWishList = (item, dispatch) => {
  const wishListActionObj = wishListActionCreater(item);
  dispatch(wishListActionObj); // Instead---> disptach(wishLishActionCreater(item))

  toast.success("Added to wishlist");
};
