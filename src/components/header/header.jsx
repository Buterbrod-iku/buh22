import React, {useState} from 'react';
import style from './header.module.css';
import {NavLink} from "react-router-dom";
import menu from '../../assets/ico/burger-menu-svgrepo-com.svg'

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
        OpenMenu();
    };

    const handleClickScrollUp = () => {
        const element = document.getElementById('app');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
        OpenMenu();
    };

    const onlyHandleClickScrollUp = () => {
        const element = document.getElementById('app');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [open, setOpen] = useState(true);

    const OpenMenu = () => {
        setOpen(!open);
    }

    return (
        <header id="header">
            <div className={style.logoBlock}>
                <NavLink to="/"  className={style.NavLink} onClick={onlyHandleClickScrollUp}><h1 className={style.textLogo}>Бухгалтерское бюро Олеси Якобсон</h1></NavLink>
                <div className={style.close} onClick={OpenMenu}>
                    {
                        open ? <img src={menu} alt="" style={{width: "30px", height: "28px"}}/> : <p style={{transform: "rotate(45deg)", fontSize: "50px", position: "fixed", right: "20px", top: "20px"}}>+</p>
                    }
                </div>
            </div>
            <div className={open ? style.menu : style.openMenu}>
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
                    <NavLink to="/about" className={style.NavLink} onClick={handleClickScrollUp}>О компании</NavLink>
                </div>
            </div>
            <div className={style.mainMenu}>
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
                    <NavLink to="/about" className={style.NavLink} onClick={handleClickScrollUp}>О компании</NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;