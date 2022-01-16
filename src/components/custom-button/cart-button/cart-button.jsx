
import React from 'react';
import "./cart-button.scss";

const CartButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button
        className={`${inverted ? 'inverted' : ''} cart-button`}
        {...otherProps}
    >
        {children}
    </button>
);

export default CartButton;