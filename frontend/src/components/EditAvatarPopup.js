import PopupWithForm  from './PopupWithForm.js';
import React from 'react';
function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
    const avatarRef = React.useRef();    
    //Получение и смена аватара пользователя
    function handleSubmit(evt) {
        evt.preventDefault();
        const button = evt.currentTarget.querySelector('.popup__button');
        onUpdateAvatar({
            avatar: avatarRef.current.value,
            button: button
        });
    }  
    
    return (
        <PopupWithForm 
            name="avatar" 
            title="Обновить аватар" 
            buttonText="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isLoading={isLoading}>
            <input 
                type="url"
                required
                placeholder="Ссылка на аватар"
                className="popup__url form__input-second popup__input"
                id="avatar-input"
                name="text"
                ref={avatarRef}/>
        <span className="form__input-error form__input-second-error form__avatar-input-error" ></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;