import React from "react";
import './Header.css'

const Header = (props) => {

    return(
        <header>
            <h1 id="header">{props.title}</h1>
        </header>
    );

}

export default Header;