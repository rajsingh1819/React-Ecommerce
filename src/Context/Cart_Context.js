import { createContext, useContext, useEffect, useReducer } from "react";
import CartReducer from "./CartReducer";
import toast from "react-hot-toast";
const CartContext = createContext();

const getLocalStorageData = () => {
  let cartData = localStorage.getItem("cart");
  if (cartData == null) {
    return [];
  } else {
    return JSON.parse(cartData);
  }
};

const getLocalStorageContacts = () => {
  let contactData = localStorage.getItem("contactUS");
  return contactData ? JSON.parse(contactData) : [];
};

const initialState = {
  cart: getLocalStorageData(),

  contact: getLocalStorageContacts(),
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (data) => {
    if (state.cart.length >= 8) {
      toast("Cannot add more than 8 items to the cart!", {
        icon: <span className="hot-toast-icon">ⓘ</span>,
        duration: 2000,
        className: "hot-toast",
      });

      return;
    }

    dispatch({ type: "ADD_TO_CART", payload: { data } });
    toast.success("Item Add to Cart!", {
      duration: 2000,
      className: "hot-toast",
    });
  };

  const removeToCart = (id) => {
    dispatch({ type: "Remove_TO_Cart", payload: id });
    toast("Item removed from cart!", {
      icon: <span className="hot-toast-icon">ⓘ</span>,
      duration: 2000,
      className: "hot-toast",
    });
  };

  const updateQuantity = (itemId, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { itemId, quantity } });
  };

  const RemoveAllCartItem = () => {
    dispatch({ type: "Remove_All_Cart_Item" });
    // toast("Cart is Empty!", {
    //   icon: <span className="hot-toast-icon">ⓘ</span>,
    //   duration: 2000,
    //   className: "hot-toast",
    // });
  };

  const addContact = (message) => {
    dispatch({ type: "ADD_CONTACT_US", payload: message });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));

    localStorage.setItem("contactUS", JSON.stringify(state.contact));
  }, [state.cart, state.contact]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeToCart,
        updateQuantity,
        RemoveAllCartItem,
        addContact,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
