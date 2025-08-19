import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleWishList } from "./WishListHandler.js";
import { handleCartClick } from "./CartHandler.js";
import "./ProductCard.css";

export const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart);
  const wishListItems = useSelector((state) => state.wishList);

  const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);
  const isItemInWishList = wishListItems.some(
    (wishListItems) => wishListItems.id === item.id
  );

  return (
    // <div className="card card-vertical d-flex direction-column relative shadow">
    <div className="card">
      <div className="card-image-container">
        <img className="card-image" src={item.images[0]} alt="shoes" />

        <div className="card-details">
          <div className="card-title">{item.title}</div>
          <div className="card-description">
            <p className="card-price">
              Rs. {item.price}
              <span className="price-strike-through">Rs. 2499</span>
              <span className="discount">(30% OFF)</span>
            </p>
          </div>

          <div className="main-button">
            {/* Add to wishlist button */}
            {isItemInWishList ? (
              <button
                onClick={() => navigate("/Favourite")}
                // className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
                className="primary-btn"
              >
                <span className="material-symbols-outlined">favorite</span>
                Go to Wishlist
              </button>
            ) : (
              <button
                onClick={() => {
                  handleWishList(item, dispatch);
                }}
                // className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
                className="primary-btn"
              >
                <span className="material-symbols-outlined">favorite</span>
                Add To wishlist
              </button>
            )}

            {/* Add to Cart button */}
            {isItemInCart ? (
              <button
                onClick={() => navigate("/Cart")}
                // className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
                className="primary-btn"
              >
                <span className="material-symbols-outlined">shopping_cart</span>
                Go To Cart
              </button>
            ) : (
              <button
                onClick={() => {
                  handleCartClick(item, dispatch);
                }}
                // className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
                className="primary-btn"
              >
                <span className="material-symbols-outlined">shopping_cart</span>
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
