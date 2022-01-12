import React from "react";
import "./menu-item.scss";
import * as url from "url";

const MenuItem = ({ id, title, imageUrl, size }) => {
    return (

        <div className={`${size} menu-item`}>
            <div
                className={"background-image"}
                style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className={"content"}>
                <div className={"content-item"}>
                    <h1 className={"title"}>{ title.toUpperCase() }</h1>
                    <span className={"subtitle"}>SHOP NOW</span>
                </div>
            </div>
        </div>

    )
}

export default MenuItem;