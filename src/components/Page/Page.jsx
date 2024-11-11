import React, { useContext, useState } from 'react';
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import "./Page.css";

export const AuthContext = React.createContext();

const Page = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    if  (!isAuthenticated) {
        return (
            <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
                <div className="Page">
                    <RegistrationForm></RegistrationForm>
                </div>
            </AuthContext.Provider>
        )
    }
    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            <div className="Page">
                <AuthorizationForm/>
            </div>
        </AuthContext.Provider>
    )
}

export default Page;