import React from "react";

const NavLink = ({ route }) => {
    const { name, path } = route;
    return (
        <a className="p-2 text-white transition hover:text-orange-600" href={path}>
            {name}
        </a>
    );
};

export default NavLink;
