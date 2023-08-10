function PopupWithForm({isOpen, onClose, name, onSubmit, buttonText, children, title, isLoading}) {
    return (
        <div className={isOpen? `popup ${name}-popup popup_opened` : `popup ${name}-popup`}>
            <div className="popup__container">
                <button type="button" className="popup__button-close" onClick={onClose}></button>
                <h3 className="popup__title">{title}</h3>
                <form
                    name={`${name}-form`}
                    action="#"
                    method="post"
                    target="_blank"
                    className="popup__form form"
                    onSubmit={onSubmit}>
                    {children}
                    <button type="submit" className="popup__button-create popup__button">
                        {isLoading ? "Сохранение..." : buttonText}
                    </button>
                </form>
            </div>
        </div>   
    )
}
export default PopupWithForm;