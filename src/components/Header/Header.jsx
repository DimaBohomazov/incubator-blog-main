import React from "react";

import h from './Header.module.scss';
import './../../cssVariables/variables.css'

const Header = () => {

    const {
        header,
        logoBlock,
    } = h;

    return (
        <header className={header}>
            <div className={logoBlock}>
                IncubatorBlog
            </div>
            Search
            Home
            Notifications
            Account
        </header>
    )
};

export default Header;