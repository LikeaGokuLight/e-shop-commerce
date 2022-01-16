import React from "react";
import "./cart-dropdown.scss";
import {connect} from "react-redux";
import CartButton from "../../custom-button/cart-button/cart-button";
import CartItem from "./cart-item/cart-item";
import {selectCartItems} from "../../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import {toggleCartHidden} from "../../../redux/cart/cart.actions";


const CartDropdown = ({ cartItems, dispatch }) => {
    const navigate = useNavigate();

    return(
        <div className={"cart-dropdown"}>
            <div className={"cart-items"}>
                {
                    cartItems.length
                        ? cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
                        : <span className={"empty-message"}> Your cart is empty  </span>
                }
            </div>
            <CartButton inverted onClick={() => {
                navigate("/checkout")
                dispatch(toggleCartHidden())
            }}> CHECKOUT </CartButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(
    mapStateToProps
)(CartDropdown)
