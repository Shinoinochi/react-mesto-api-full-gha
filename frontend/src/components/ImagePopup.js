function ImagePopup({ card, onClose }) {
    return (
        <div className={`popup popup-image ${Object.keys(card).length > 0 ? 'popup_opened' : ''}` }>
            <div className="popup__image-container">
                <button type="button" className="popup__button-close popup__button-image" onClick={onClose}></button>
                <img src={card.link} alt={card.name} className="popup__image"/>
                <h3 className="popup-image__title">{card.name}</h3>
            </div>
        </div>
    )
}
export default ImagePopup;