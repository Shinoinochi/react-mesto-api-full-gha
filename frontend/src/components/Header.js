import headerLogo from '../images/Vector.svg';
import {Link} from 'react-router-dom';
function Header({ link, email, text, onClick, children, active, isLogin }) {
    return (
        <>
        <header className="header">
            <img
                src={headerLogo}
                alt="Логотип"
                className="header__logo logo"/>
            {children}
            <div className={isLogin? 'header__links' : 'header__links_auth'}>    
                <p className='header__email'>{email}</p>
                <Link to={link} replace onClick={onClick} className={`header__link ${active}`}>{text}</Link>
            </div>
        </header>
        </>
    )
}
export default Header;