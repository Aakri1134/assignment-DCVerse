import { createContext, useContext, useState } from "react"

const GlobalContext = createContext(null)

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

const GlobalContextProvider = ({children}) => {

    const [username, setUsername] = useState("Aakrisht Srivastava");
    const [loggedIn, setLoggedIn] = useState(false);

    return(
        <GlobalContext.Provider value={{username, loggedIn}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider