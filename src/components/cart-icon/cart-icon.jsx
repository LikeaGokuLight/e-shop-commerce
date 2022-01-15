import React from "react";
import "./cart-icon.scss"

import {connect} from "react-redux";
import {toggleCArtHidden} from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingLogo } from "../../assets/shopping-bag-svgrepo-com.svg";

const CartIcon = ({ toggleCartHidden }) => {
    return(
        <div className={"cart-icon"} onClick={toggleCartHidden}>
            <ShoppingLogo className={"shopping-icon"} />
            <span className={"item-count"}> 0 </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCArtHidden())
})

export default connect(
    null,
    mapDispatchToProps
)(CartIcon);