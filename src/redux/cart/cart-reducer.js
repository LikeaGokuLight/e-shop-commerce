import CArtActionTypes from "./cart.types";
import {addItemToCart} from "../../components/cart/cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems:[]
}

const cartReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action

    switch (type) {
        case CArtActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case CArtActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, payload)
            }

        default: return state
    }
}

export default cartReducer;