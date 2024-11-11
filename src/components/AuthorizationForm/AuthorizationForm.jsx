import React, {useContext} from 'react';
import { AuthContext } from "../Page/Page.jsx";
import "./AuthorizationForm.css"


const AuthorizationForm = () => {

    const { setIsAuthenticated } = useContext(AuthContext);


    return (
        <div className="authorization-form">
            <h1 className="welcome-text">Добро пожаловать!</h1>
            <p>Вы успешно авторизовались.</p>
            <button
                type="submit"
                className="btn-submit"
                onClick={() => setIsAuthenticated(false)}
            >
                Выйти
            </button>
        </div>
    )
}

export default AuthorizationForm;