import React from "react";

import h from './Header.module.scss';
import './../../cssVariables/variables.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHome,
    faBell,
    faSearch,
    faCaretDown,

} from "@fortawesome/free-solid-svg-icons";

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
    } = h;

    return (
        <header className={header}>
            <div className={logoBlock}>
                IncubatorBlog
            </div>
            <div className={searchBlock}>
                <label htmlFor="search">
                    <FontAwesomeIcon icon={faSearch}/>
                </label>
                <input type='search' id='search' placeholder='Search'/>
            </div>
            <div className={headerMenuBlock}>
                <ul className={headerMenu}>
                    <li className={headerMenuItem}>
                        <a href="/">
                            <p className={pItem}>
                                <FontAwesomeIcon icon={faHome}/>
                            </p>
                            <p className={pItemSpan}>
                                <span>Home</span>
                            </p>
                        </a>
                    </li>
                    <li className={headerMenuItem}>
                        <a href="/">
                            <p className={pItem}>
                                <FontAwesomeIcon icon={faBell}/>
                            </p>
                            <p className={pItemSpan}>
                                <span>Notifications</span>
                            </p>
                        </a>
                    </li>
                </ul>
                <div className={headerAccount}>
                    <p className={headerImgBlock}></p>
                    <span>Me</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
            </div>
        </header>
    )
};

export default Header;