import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            {/* 頁首區 */}
            <header className="topbar">
                {/* Logo */}
                <div className="logo">
                    <a href="./">
                        <img className="img-logo" src="./images/logo-1.png" alt="" />
                    </a>
                </div>
                <nav>
                    <ul className="menu">
                        <li><Link to="/">首頁</Link></li>
                        <li><Link to="/PcIndex">配對明信片</Link></li>
                        {/* <li><a href="">商店</a></li> */}
                        <li><Link to="/MemberIndex">會員專區</Link></li>
                        <li><Link to="/About">關於</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Navbar;