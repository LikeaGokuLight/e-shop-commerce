import React from "react";
import "./cart-icon.scss"

import {connect} from "react-redux";

import { ReactComponent as ShoppingLogo } from "../../assets/shopping-bag-svgrepo-com.svg";
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden, cartCount }) => {
    console.log(cartCount)
    return(
        <div className={"cart-icon"} onClick={() => toggleCartHidden()}>
            <ShoppingLogo className={"shopping-icon"} />
            <span className={"item-count"}> { cartCount } </span>
        </div>
    )
}

const mapStateToProps = state => ({
    cartCount: state.cart.cartItems.length
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);