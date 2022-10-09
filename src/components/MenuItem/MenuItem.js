import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ route }) => {
    const { name, path } = route;
    return (
        <NavLink className="p-2 text-white transition hover:text-yellow-600" to={path}>
            {name}
        </NavLink>
    );
};

export default MenuItem;
