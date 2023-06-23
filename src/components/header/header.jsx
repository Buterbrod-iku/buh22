import React from 'react';
import style from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    const componentDidMount = () => {
        window.scrollTo(0, 0)
    }

    const handleClickScroll = () => {
        const element = document.getElementById('contact');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleClickScrollUp = () => {
        const element = document.getElementById('app');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header id="header">
            <div className={style.logoBlock}>
                <NavLink to="/"  className={style.NavLink} onClick={handleClickScrollUp}><h1 className={style.textLogo}>Бухгалтерское бюро Олеси Якобсон</h1></NavLink>
            </div>
            <div className={style.menu}>
                <div className={style.menuBlock}>
                    <NavLink to="/service" className={style.NavLink} onClick={handleClickScrollUp}>Услуги</NavLink>
                </div>

                <div className={style.menuBlock}>
                    <NavLink to="/price" className={style.NavLink} onClick={handleClickScrollUp}>Цены</NavLink>
                </div>

                <div className={style.menuBlock}>
                    <NavLink to="/interest" className={style.NavLink} onClick={handleClickScrollUp}>Полезные сервисы</NavLink>
                </div>

                <div className={style.menuBlock} onClick={handleClickScroll}>Контакты</div>

                <div className={style.menuBlock}>
                    <NavLink to="/about" className={style.NavLink} onClick={handleClickScrollUp}>О Компании</NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;