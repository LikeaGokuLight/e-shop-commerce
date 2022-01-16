import React from "react";
import "./cart-dropdown.scss";
import CartButton from "../../custom-button/cart-button/cart-button";

const CartDropdown = () => {
    return(
        <div className={"cart-dropdown"}>
            <div className={"cart-items"} />
            <CartButton inverted> CHECKOUT </CartButton>
        </div>
    )
}

export default CartDropdown;
