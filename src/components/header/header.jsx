import React from "react";
import "./header.scss";

import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/Larkef x Rareblocks _ Logo #13.svg";

const Header = () => {
    return (
        <div className={"header"}>

            <Link className={"logo-container"} to={"/"}>
                <Logo className={"logo"}/>
            </Link>

            <div className={"options"}>

                <Link className={"option"} to={"/shop"}>
                    SHOP
                </Link>

                <Link className={"option"} to={"/shop"}>
                    CONTACT
                </Link>

            </div>
        </div>
    )
}

export default Header;