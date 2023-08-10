import React from 'react';
import Header from './Header';
function Login({ isLogin, onLogin }) {
    const [user, setUser] = React.useState({email: '', password: ''});
     //Получение и запись значений из инпутов
    function handleChange(evt) {
        const {name, value} = evt.target;
        setUser((state) => ({...state, [name]: value}));
    }
    //Отправка данных на сервер, установка токена и вход пользователя
    function handleSubmit(evt) {
        evt.preventDefault();
        onLogin(user, setUser);
    }
    return (
        <>
        <Header link={'/sign-up'} text={'Регистрация'} isLogin={isLogin}/>
        <div className="sign" >
            <div className="sign__container">
                <h2 className="sign__header">Вход</h2>
                <form className="sign__form" onSubmit={handleSubmit}>
                    <input className="sign__input" type="email" name="email" placeholder="Email" required onChange={handleChange} value={setUser.email}></input>
                    <input className="sign__input" type="password" name="password" placeholder="Пароль" required onChange={handleChange} value={setUser.password}></input>
                    <button className="sign__button" type="submit">Войти</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default Login;