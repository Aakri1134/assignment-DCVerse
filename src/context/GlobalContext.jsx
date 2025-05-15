import { createContext, useContext, useState } from "react"

const GlobalContext = createContext(null)

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

const GlobalContextProvider = ({children}) => {

    const [username, setUsername] = useState("Aakrisht");
    const [loggedIn, setLoggedIn] = useState(false);
    const [successSubmit, setSuccessSubmit] = useState(false)

    const successfulSubmission = () => {
        setSuccessSubmit(true)
        setTimeout(() => {
            setSuccessSubmit(false)
        }, 2000)
    }

    return(
        <GlobalContext.Provider value={{username, loggedIn, successSubmit, successfulSubmission}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider