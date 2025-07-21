import { createContext } from "react";

export const userContext = createContext()


function ContextProvider({ children }) {

    const role = "admin";
    const authenticated = true;

    return (
        <userContext.Provider value={{ role, authenticated }}>
            {children}
        </userContext.Provider>
    )
}



export default ContextProvider