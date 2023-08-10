import PopupWithForm  from './PopupWithForm.js';
import React from 'react';
function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
    const nameRef = React.useRef();
    const linkRef = React.useRef();

    React.useEffect(() => {
        nameRef.current.value = '';
        linkRef.current.value = '';
    }, [isOpen]);
    //Добавление новой карточки
    function handleSubmit(evt) {
        evt.preventDefault();
        const button = evt.currentTarget.querySelector('.popup__button');
        onAddPlace({
            name: nameRef.current.value,
            link: linkRef.current.value,
            button: button
        });
    }

    return(
        <PopupWithForm 
            name="create" 
            title="Новое место"
            buttonText="Создать"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isLoading={isLoading}>
            <input 
                type="text"
                minLength="2"
                maxLength="30"
                required
                placeholder="Название"
                className="popup__name form__input-first popup__input"
                id="name-input"
                name="name"
                ref={nameRef}/>
            <span className="form__input-error form__input-first-error form__name-input-error" ></span>
            <input 
                type="url"
                required
                placeholder="Ссылка на картинку"
                className="popup__url form__input-second popup__input"
                id="url-input"
                name="link"
                ref={linkRef}/>
            <span className="form__input-error form__input-second-error form__url-input-error" ></span>
    </PopupWithForm>
    )
}

export default AddPlacePopup;