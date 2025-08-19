import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/action_creators/actionCreater";

export const Cart = () => {
  const cartData = useSelector((storeData) => {
    return storeData.cart;
  });

  const dispatch = useDispatch();

  const removeitem = (id) => {
    dispatch({
      type: "remove-from-cart",
      payload: id,
    });
  };

  const totalPrice = cartData.reduce(
    (accumulator, cartproduct) =>
      accumulator + cartproduct.price * cartproduct.quantity,
    0
  );

  const deliveryCharges = 0;
  const gst = totalPrice * 0.18;
  const grandTotal = totalPrice + gst + deliveryCharges;

  return (
    <div>
      {cartData.length > 0 ? (
        <div className="cartContainer">
          <section className="cart-section">
            <section className="cart-row">
              <div>Image</div>
              <div>Title</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Action</div>
            </section>
            {Array.isArray(cartData) &&
              cartData
                .filter(
                  (p) => p && Array.isArray(p.images) && p.images.length > 0
                )
                .map((cartproduct, index) => (
                  <section className="cart-row-data" key={index}>
                    <div>
                      <img
                        src={cartproduct.images[0]}
                        alt={cartproduct.title}
                        width={60}
                        height={60}
                        className="img-div"
                      />
                    </div>
                    <div className="title-div">{cartproduct.title}</div>
                    <div className="price-div">
                      {cartproduct.price * cartproduct.quantity}
                    </div>
                    <div>
                      <button
                        className="inc-btn"
                        onClick={() =>
                          dispatch(decreaseQuantity(cartproduct.id))
                        }
                      >
                        -
                      </button>
                      <span className="quantity-display">
                        {cartproduct.quantity}
                      </span>
                      <button
                        className="dec-btn"
                        onClick={() =>
                          dispatch(increaseQuantity(cartproduct.id))
                        }
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          removeitem(cartproduct.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </section>
                ))}
          </section>
          <div>
            <div>
              <section className="order-summary">
                <h3>Order Summary</h3>
                <div className="order-summary-content">
                  <div>
                    <span>Total Price : </span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div>
                    <span>Delivery Charges : </span>
                    <span>${deliveryCharges.toFixed(2)}</span>
                  </div>
                  <div>
                    <span>GST (18%) : </span>
                    <span>${gst.toFixed(2)}</span>
                  </div>
                  <hr />
                  <div className="grand-total">
                    <span>Grand Total : </span>
                    <span>${grandTotal.toFixed(2)}</span>
                  </div>
                </div>
                <div className="order-btn">
                  <button>Place Order</button>
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1
            style={{ color: "black", marginTop: "100px", textAlign: "center" }}
          >
            Your Cart is Empty
          </h1>
        </div>
      )}
    </div>
  );
};
