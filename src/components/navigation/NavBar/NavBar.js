// import { NavLink } from "react-router-dom"
import './navBar.css';

import { useState } from "react"
import { Logo } from '../logo/Logo';
import { links } from '../../../data/links';

export const NavBar = () => {

    console.log("hola desde el navbar")

    const [menu, setMenu] = useState(false);

    const [scroll, setScroll] = useState(false);

    const handleShow = () => {
        setMenu(!menu);
    }

    // const headerNavigationStylesShow = {
    //     height: `calc(2.3rem * ${links.length} + 2rem * ${links.length-1} + 2rem * 2)`,
    //     overflow: 'visible',
    //     opacity: '1' 
    // }

    // const headerNavigationStylesDefault = {
    //     height: 0,
    //     opacity: 0,
    //     overflow: 'hidden',
    //     transition: '.3s'
    // }

    const changeScroll = () => {
        window.scrollY > 0 ? setScroll(true) : setScroll(false);
    }

    window.addEventListener('scroll', changeScroll);

    return (
        
        <header className={scroll ? "header scroll" : "header"}>
            <div className='header-flex container'>
                <Logo />
                <div className="header-menu">
                    <ion-icon onClick={ handleShow } name={menu ? "close-outline" : "menu-outline"}></ion-icon>
                </div>

                <nav 
                    // style={menu ? headerNavigationStylesShow : headerNavigationStylesDefault}
                    className={menu ? 'header__navigation show' : 'header__navigation'}
                >
                    <ul className='header__navigation__content'>
                        {
                            links.map(({ id, text, href }) => (
                                <li key={id} className='header__navigation__item'>
                                    <a className='header__navigation__item__link' href={href}>{ text }</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header>
        
    )
}
