import { useSelector, useDispatch } from "react-redux";
import "./Favourite.css";
import { Navigate, useNavigate } from "react-router-dom";

export const Favourite = () => {
  const wishlistItems = useSelector((state) => state.wishList);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCartClick = (item) => {
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      alert("Product is already in the cart!!");
    } else {
      dispatch({
        type: "add-to-cart",
        payload: item,
      });
      dispatch({
        type: "remove-from-wishlist",
        payload: item.id,
      });
      navigate("/Cart");
    }
  };

  const removeitem = (id) => {
    dispatch({
      type: "remove-from-wishlist",
      payload: id,
    });
  };

  return (
    <div>
      <div className="wishlist-div">
        {wishlistItems.length > 0 ? (
          <div className="wishlist-row">
            {wishlistItems.map((item) => (
              <div key={item.id} className="wishlist-row-data">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="rounded"
                />
                <p className="p-div">{item.title}</p>
                <button
                  onClick={() => {
                    handleCartClick(item, dispatch);
                  }}
                  className="flex gap-2"
                >
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                  Add To Cart
                </button>
                <button
                  onClick={() => {
                    removeitem(item.id);
                  }}
                  className="flex gap-2"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p
            style={{ color: "black", marginTop: "100px", textAlign: "center" }}
          >
            Your wishlist is empty.
          </p>
        )}
      </div>
    </div>
  );
};
