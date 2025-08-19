import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity, // Badge configuration...
    0
  );
  return (
    <>
      <div className="Nav">
        <div className="brandName">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "28px" }}
          >
            store
          </span>
          <h2 onClick={() => navigate("/")}>ShopNow</h2>
        </div>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/Profile">Profile</Link>
          <Link to="/Products">Products</Link>

          <div className="icons">
            <Link to="/Favourite">
              <span className="material-symbols-outlined">favorite</span>
            </Link>
            <Link to="/Cart" className="cart-icon-container">
              <span className="material-symbols-outlined">shopping_cart</span>
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
