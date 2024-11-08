import "./Header.scss"
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import user from "../../assets/icons/user.svg"
import menu from "../../assets/icons/menu.svg"
import search from "../../assets/icons/search.svg"
import close from "../../assets/icons/close.svg"

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleClear = () => {
        setIsOpen(false);
    };

    const openNav = () => {
        setIsNavOpen(true)
    }

    const closeNav = () => {
        setIsNavOpen(false)
    }

    return (
        <>
            {
                isNavOpen &&
                <nav className='main-nav'>
                    <div className='nav'>
                        <div className='close-button' onClick={closeNav}>
                            <img src={close} alt="Close" />
                        </div>

                        <div className='nav-item'>
                            <NavLink to="/" className='link-nav'>
                                وبلاگ
                            </NavLink>
                            <NavLink to="/" className='link-nav'>
                                آموزش
                            </NavLink>
                            <NavLink to="/" className='link-nav'>
                                درباره ما
                            </NavLink>
                            <NavLink to="/" className='link-nav'>
                                پشتیبانی
                            </NavLink>
                            <NavLink to="/" className='link-nav'>
                                خدمات
                            </NavLink>
                        </div>
                    </div>
                </nav>
            }
            <header className="main-header" id="header">
                <div className="logo-link-search">
                    <span className="logo">LOGO</span>
                    <NavLink to="/" className='link-nav'>
                        وبلاگ
                    </NavLink>
                    <NavLink to="/" className='link-nav'>
                        آموزش
                    </NavLink>
                    <NavLink to="/" className='link-nav'>
                        درباره ما
                    </NavLink>
                    <NavLink to="/" className='link-nav'>
                        پشتیبانی
                    </NavLink>
                    <NavLink to="/" className='link-nav'>
                        خدمات
                    </NavLink>

                    <input placeholder="جست و جو" type="text" className='search-input' />
                </div>
                <div className="buttons">
                    <button className='outlined-button'>
                        <span>پنل کاربری</span>
                        <img src={user} alt="User" />
                    </button>
                    <div className="input-search-container">
                        <input
                            type="text"
                            className={`input-search ${isOpen ? 'open' : ''}`}
                            readOnly={!isOpen}
                        />

                        {isOpen ? (
                            <img className="close handle" onClick={isOpen ? handleClear : handleToggle} src={close} alt="Close" />
                        ) : (
                            <img className="open handle" onClick={isOpen ? handleClear : handleToggle} src={search} alt="Search" />
                        )}

                    </div>
                    <button className="phone-button menu" onClick={openNav}>
                        <img src={menu} alt="Menu" />
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header;