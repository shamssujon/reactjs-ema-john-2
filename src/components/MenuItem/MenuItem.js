import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ route }) => {
    const { name, path } = route;
    return (
        <NavLink
            className={({ isActive }) =>
                (isActive ? "text-rose-600 hover:text-rose-700" : "text-white/70 hover:text-white") + " block p-2 font-semibold uppercase transition"
            }
            to={path}>
            {name}
        </NavLink>
    );
};

export default MenuItem;
