import "./RegistrationForm.css"
import React, { useContext , useState} from 'react';
import { AuthContext } from "../Page/Page.jsx";

const RegistrationForm = () => {

    const { setIsAuthenticated } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = () => {
        if (!name || !email || !password) {
            alert('Пожалуйста, заполните все обязательные поля.');
        } else {
            setIsAuthenticated(true);
        }
    };

    return (
        <form className="registration-form">
            <h1 className="registration-title">
                Создание аккаунта
            </h1>
            <div className="form-group">
                <label htmlFor="name"><h4>Имя пользователя *</h4></label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder="Ваше имя"
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="name"><h4>Адрес электронной почты *</h4></label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder="name@mail.ru"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="name"><h4>Пароль *</h4></label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    placeholder="не менее 6 символов"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn-submit" onClick={handleRegistration} >
                Зарегистрироваться
            </button>
        </form>
    )
}

export default RegistrationForm;
