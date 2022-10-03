import React from "react";
import logo from "../../logo.svg";

const Header = () => {
    return (
        <header className="header bg-slate-800 py-5">
            <div className="container">
                <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between">
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                    <nav className="flex flex-col items-center gap-4 md:flex-row">
                        <a className="p-2 text-white transition hover:text-orange-600" href="/">
                            Home
                        </a>
                        <a className="p-2 text-white transition hover:text-orange-600" href="/">
                            Order
                        </a>
                        <a className="p-2 text-white transition hover:text-orange-600" href="/">
                            Order Review
                        </a>
                        <a className="p-2 text-white transition hover:text-orange-600" href="/">
                            Manage Inventory
                        </a>
                        <a className="p-2 text-white transition hover:text-orange-600" href="/">
                            Login
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
