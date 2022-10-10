import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import MenuItem from "../MenuItem/MenuItem";

const Header = () => {
    const routes = [
        { id: 1, name: "Home", path: "/home" },
        { id: 2, name: "Shop", path: "/shop" },
        { id: 3, name: "Orders", path: "/orders" },
        { id: 4, name: "About", path: "/about" },
        { id: 5, name: "Contact", path: "/contact" },
    ];

    const [btnState, toggleBtnState] = useState(false);
    return (
        <header className="header relative bg-slate-800 py-5">
            <div className="container">
                <div className="flex items-center justify-between gap-8">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <button
                        type="button"
                        onClick={() => toggleBtnState(!btnState)}
                        className="relative h-6 w-8 md:hidden">
                        <span
                            className={`absolute left-1/2 top-0 block h-0.5 w-full origin-top-right -translate-x-1/2 transform rounded bg-orange-600 transition will-change-transform ${
                                btnState ? "-rotate-45" : "rotate-0"
                            }`}></span>
                        <span
                            className={`absolute left-1/2 top-1/2 block h-0.5 w-full origin-left -translate-y-1/2 -translate-x-1/2 transform rounded bg-orange-600 transition  will-change-transform ${
                                btnState ? "scale-x-0" : "scale-x-100"
                            }`}></span>
                        <span
                            className={`absolute left-1/2 bottom-0 block h-0.5 w-full origin-bottom-right -translate-x-1/2 transform rounded bg-orange-600 transition will-change-transform ${
                                btnState ? "rotate-45" : "rotate-0"
                            }`}></span>
                    </button>
                    <nav
                        className={`absolute top-full left-0 right-0 z-10 flex origin-top transform flex-col items-center gap-4 bg-slate-800 transition-all md:static md:flex-row ${
                            btnState
                                ? "visible scale-y-100 opacity-100"
                                : "invisible scale-y-0 opacity-0 md:visible md:scale-y-100 md:opacity-100"
                        }`}>
                        {routes.map((route) => (
                            <MenuItem key={route.id} route={route}></MenuItem>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
