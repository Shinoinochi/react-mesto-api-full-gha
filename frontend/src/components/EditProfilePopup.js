import PopupWithForm  from './PopupWithForm.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import React from 'react';
function EditProfilePopup({isOpen, onClose, onUpdateUser, isLoading}) {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);
    //Получение имени пользователя
    function handleEditName(evt) {
        setName(evt.target.value);
    }
    //Получение описания пользователя
    function handleEditDescription(evt) {
        setDescription(evt.target.value);
    }
    //Отправка и смена данных пользователя 
    function handleSubmit(evt) {
        const button = evt.currentTarget.querySelector('.popup__button');
        evt.preventDefault();
        onUpdateUser({
            name: name,
            about : description,
            button: button
        });
    }

    return (
        <PopupWithForm 
            name="profile" 
            title="Редактировать профиль" 
            buttonText = "Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isLoading={isLoading}>
        <input 
            type="text"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
            className="popup__username form__input-first popup__input"
            id="username-input"
            name="name"
            onChange={handleEditName}
            value={name ?? ""}
            />
        <span className="form__input-error form__input-first-error form__username-input-error"></span>
        <input 
            type="text"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required
            className="popup__role form__input-second popup__input"
            id="role-input"
            name="link"
            onChange={handleEditDescription}
            value={description ?? ""}
            />
        <span className="form__input-error form__input-second-error form__role-input-error"></span>
    </PopupWithForm>
    )
}
export default EditProfilePopup;