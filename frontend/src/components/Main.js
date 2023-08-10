import { CurrentUserContext } from '../context/CurrentUserContext.js';
import {Link} from 'react-router-dom';
import Card from './Card.js';
import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, user, handleCardLike, cards, onCardDelete, logout, onMenuClick, isLogin }) {
    const currentUser = React.useContext(CurrentUserContext);
    return (
        <>
        <div className='menu'>   
            <p className='menu__email'>{user}</p>
            <Link to='/sign-in' replace onClick={logout} className='menu__link'>Выйти</Link>
        </div>
        <Header email={user} onClick={logout} text={'Выйти'} onMenuClick={onMenuClick} active={'header__link_active'} isLogin={isLogin} link={'/sign-in'}> 
            <button className='header__button' onClick={onMenuClick}></button> 
        </Header>
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <button 
                        type="button"
                        className="profile__avatar-button" 
                        onClick={onEditAvatar}></button>
                    <img
                        src={currentUser.avatar}
                        alt="Фотография профиля"
                        className="profile__image"
                        />
                </div>
                <div className="profile__info">
                    <div className="profile__form">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button
                            type="button"
                            className="profile__edit profile__button"
                            onClick={onEditProfile}>
                        </button>
                    </div>
                    <p className="profile__role">{currentUser.about}</p>
                </div>
                <button 
                    type="button"
                    className="profile__add profile__button"
                    onClick={onAddPlace}>
                </button>
            </section>
            <section className="gallery">
                {cards.map((card) => 
                    <Card card={card} key={card._id} onCardClick={onCardClick} onCardLike={handleCardLike}  onCardDelete={onCardDelete} />
                )}
            </section>
        </main>
        <Footer />
        </>
    )
}
export default Main;