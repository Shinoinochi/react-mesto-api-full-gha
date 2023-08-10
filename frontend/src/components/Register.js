import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
function Register({ isLogin, onRegister }) {
    const [user, setUser] = React.useState({email: '', password: ''});
    //Получение и запись значений из инпутов
    function handleChange(evt) {
        const {name, value} = evt.target;
        setUser((state) => ({...state, [name]: value}));
    }
    //Отправка данных на сервер и регистрация пользователя
    function handleSubmit(evt) {
        evt.preventDefault();
        onRegister(user);
    }
    return (
        <>
        <Header link={'/sign-in'} text={'Войти'} isLogin={isLogin}/>
        <div className="sign" >
            <div className="sign__container">
                <h2 className="sign__header">Регистрация</h2>
                <form className="sign__form" onSubmit={handleSubmit}>
                    <input className="sign__input" type="email" name="email" required placeholder="Email" onChange={handleChange} value={setUser.email}></input>
                    <input className="sign__input" type="password" name="password" required placeholder="Пароль" onChange={handleChange} value={setUser.password}></input>
                    <button className="sign__button" type="submit">Зарегистрироваться</button>
                </form>
                <Link to="/sign-in" replace className="sign__link">Уже зарегистрированы? Войти</Link>
            </div>
        </div>
        
        </>
    )
}
export default Register;