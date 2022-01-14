import React from "react";
import "./custom-button.scss";

const CustomButton = ({ children, ...otherProps }) => {
    return (
        <button className="pushable" { ...otherProps }>
            <span className="front">
                { children }
            </span>
        </button>)
}

export default CustomButton;