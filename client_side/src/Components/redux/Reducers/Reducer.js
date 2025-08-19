export const Reducer = (
  state = { input: "-----", cart: [], wishList: [] },
  action
) => {
  switch (action.type) {
    case "my-action":
      return { ...state, input: action.payload };
    case "add-to-cart":
      const existingCartItems = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingCartItems) {
        return {
          ...state,
          cart: state.cart.map(
            (item) => item,
            id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case "increase-quantity":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "decrease-quantity":
      return {
        ...state,
        cart: state.cart
          .map((item) => {
            if (item.id === action.payload) {
              if (item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
              }
              return null;
            }
            return item;
          })
          .filter(Boolean),
      };

    case "remove-from-cart":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "add-to-wishlist":
      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      };

    case "remove-from-wishlist": // New case to handle removal
      return {
        ...state,
        wishList: state.wishList.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
