import React from "react";

import h from './Header.module.scss';
import '../../assets/stylesheets/variables.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHome,
    faBell,
    faSearch,
    faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

const Header = () => {

    const {
        pItem,
        header,
        pItemSpan,
        logoBlock,
        headerMenu,
        searchBlock,
        headerAccount,
        headerImgBlock,
        headerMenuItem,
        headerMenuBlock,
        headerContainer,
        headerNotification,
        headerAccountCaret,
        countOfNotifications,
        headerLogoSearchBlock,
    } = h;

    return (
        <header className={header}>
            <div className={headerContainer}>

                <div className={headerLogoSearchBlock}>
                    <NavLink to='/' className={logoBlock}>
                        IncubatorBlog
                    </NavLink>

                    <div className={searchBlock}>
                        <label htmlFor="search">
                            <FontAwesomeIcon icon={faSearch}/>
                        </label>
                        <input type='search' id='search' placeholder='Search'/>
                    </div>
                </div>


                <div className={headerMenuBlock}>

                    <ul className={headerMenu}>
                        <li className={headerMenuItem}>
                            <NavLink to="/">
                                <p className={pItem}>
                                    <FontAwesomeIcon icon={faHome}/>
                                </p>
                                <p className={pItemSpan}>
                                    <span>Home</span>
                                </p>
                            </NavLink>
                        </li>
                        <li className={`${headerMenuItem} ${headerNotification}`}>
                            <p className={countOfNotifications}>19</p>
                            <NavLink to="/">
                                <p className={pItem}>
                                    <FontAwesomeIcon icon={faBell}/>
                                </p>
                                <p className={pItemSpan}>
                                    <span>Notifications</span>
                                </p>
                            </NavLink>
                        </li>
                    </ul>

                    <NavLink to='/' className={headerAccount}>
                        <p className={headerImgBlock}>

                        </p>
                        <div className={headerAccountCaret}>
                            <span>Me</span>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                    </NavLink>

                </div>
            </div>
        </header>
    )
};

export default Header;
