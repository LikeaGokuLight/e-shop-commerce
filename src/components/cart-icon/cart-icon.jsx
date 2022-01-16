import React from "react";
import "./cart-icon.scss"

import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import { ReactComponent as ShoppingLogo } from "../../assets/shopping-bag-svgrepo-com.svg";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    console.log(itemCount)
    return(
        <div className={"cart-icon"} onClick={() => toggleCartHidden()}>
            <ShoppingLogo className={"shopping-icon"} />
            <span className={"item-count"}> { itemCount } </span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);