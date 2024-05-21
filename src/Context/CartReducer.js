function CartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            const { data } = action.payload;
            // console.log(data);
            const existingItemIndex = state.cart.findIndex(
                (item) => item.id === data.id
            );

            if (existingItemIndex !== -1) {
                // If item already exists in cart, update its quantity
                const updatedCart = state.cart.map((item, index) => {
                    if (index === existingItemIndex) {
                        return { ...item, quantity: (item.quantity || 0) + 1 }; // Ensure quantity is always treated as a number
                    }
                    return item;
                });

                return { ...state, cart: updatedCart };
            } else {
                // If item doesn't exist in cart, add it with quantity 1
                const cartProduct = {
                    id: data.id,
                    title: data.title,
                    Image: data.Image,
                    price: data.price,
                    category: data.category,
                    quantity: 1,
                };

                return { ...state, cart: [...state.cart, cartProduct] };
            }

        case "Remove_TO_Cart":
            let updatedCart1 = state.cart.filter(
                (curItem) => curItem.id !== action.payload
            );
            return { ...state, cart: updatedCart1 };
        case "Remove_All_Cart_Item":
            return { ...state, cart: [] }; // Return state with an empty cart

        case "UPDATE_QUANTITY":
            const { itemId, quantity } = action.payload;
            const updatedCart = state.cart.map((item) => {
                if (item.id === itemId) {
                    return { ...item, quantity: quantity };
                }
                return item;
            });
            return { ...state, cart: updatedCart };

        case "ADD_CONTACT_US":
            return {
                ...state,
                contact: [...state.contact, action.payload],
            };

        default:
            return state;
    }
}

export default CartReducer;
