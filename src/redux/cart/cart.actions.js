import CArtActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CArtActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = (item) => ({
    type: CArtActionTypes.ADD_ITEM,
    payload: item
})
