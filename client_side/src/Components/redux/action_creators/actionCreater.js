export const actionCreater = (item) => {
  return {
    type: "add-to-cart",
    payload: item,
  };
};

export const removeFromCart = (item) => {
  return {
    type: "remove-from-cart",
    payload: item.id,
  };
};

export const wishListActionCreater = (item) => {
  return {
    type: "add-to-wishlist",
    payload: item,
  };
};

export const increaseQuantity = (item) => {
  return {
    type: "increase-quantity",
    payload: item,
  };
};

export const decreaseQuantity = (item) => {
  return {
    type: "decrease-quantity",
    payload: item,
  };
};
