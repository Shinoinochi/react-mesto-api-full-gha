import { CurrentUserContext } from '../context/CurrentUserContext.js';
import React from 'react';
function Card({ card, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner === currentUser._id;
    const isLiked = card.likes.some(i => i === currentUser._id);
    const cardLikeButtonClassName = ( `gallery__button-like ${isLiked && 'gallery__like_active'}`);
    //Удаление карточки
    function handleDeleteClic() {
        onCardDelete(card);
    }
    //Открытие карточки
    function handleClick() {
        onCardClick(card);
    }
    //Лайк карточке
    function handleClickLike() {
        onCardLike(card);
    }
    return (
    <div className="gallery__item">
        {isOwn && <button className="gallery__delete" type="button" onClick={handleDeleteClic}/>} 
        <img
            src={card.link}
            alt={card.name}
            className="gallery__image"
            onClick={handleClick} />
        <div className="gallery__info">
            <h3 className="gallery__title">{card.name}</h3>
            <div className="gallery__like">
                <button 
                    type="button"
                    className={cardLikeButtonClassName}
                    onClick={handleClickLike} >
                </button>
                <p className="gallery__like-count">{card.likes.length}</p>
            </div>
        </div>
    </div>
    )
}

export default Card;