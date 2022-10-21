import React, { createContext } from "react";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const autInfo = {};

    return <AuthContext.Provider value={autInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;
