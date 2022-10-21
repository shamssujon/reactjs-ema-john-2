1.  Create a context component (UserContext)

2.  Create a context

    -   const AuthContext = createContext();

3.  Return context provider

    -   return <AuthContext.Provider></AuthContext.Provider>

4.  Receive children on the context component

    -   const UserContext = ({ children }) => {...}

5.  Set children inside the context

    -   <AuthContext.Provider>{children}</AuthContext.Provider>

6.  Pass value to the context

    -   const autInfo = {};
    -   <AuthContext.Provider value={autInfo}>{children}</AuthContext.Provider>

7.  Export the context to be used in any other places

    -   export const AuthContext = createContext();

8.  Use the context component in the index.js and place the <App/> inside the component
    -   <UserContext><App /></UserContext>
