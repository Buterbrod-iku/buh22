import React from 'react';
import style from './footer.module.css';
import image from '../../assets/image/mini-logo.png';
import {NavLink} from "react-router-dom";
import OneServices from "../Routing/oneServices/oneServices";

const Footer = () => {
    const handleClickScrollUp = () => {
        const element = document.getElementById('app');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer>
            <div className={style.position}>
                <div className={style.menuBlock}>
                    <NavLink to="/about" className={style.NavLink} onClick={handleClickScrollUp}>О Компании</NavLink>
                </div>
                <div className={style.menuBlock}>
                    <NavLink to="/service" className={style.NavLink} onClick={handleClickScrollUp}>Услуги</NavLink>
                </div>
                <div className={style.menuBlock}>
                    <NavLink to="" className={style.NavLink} onClick={handleClickScrollUp}>Цены</NavLink>
                </div>
                <div className={style.menuBlock}>
                    <NavLink to="/OneServices" className={style.NavLink} onClick={handleClickScrollUp}>Разовые услуги</NavLink>
                </div>
                <div className={style.menuBlock}>
                    <NavLink to="" className={style.NavLink} onClick={handleClickScrollUp}>Декларации 3НДФЛ</NavLink>
                </div>
                <div className={style.menuBlock}>
                    <NavLink to="/interest" className={style.NavLink} onClick={handleClickScrollUp}>Полезные сервисы</NavLink>
                </div>
                <div className={style.menuBlock}>
                    <NavLink to="/application" className={style.NavLink} onClick={handleClickScrollUp}>Оставить заявку</NavLink>
                </div>
            </div>
            <img src={image} alt="" className={style.img}/>
            <p className={style.text}>ИП Якобсон Олеся Васильевна <br/>ИНН 222310304716 ОГРНИП 322220200097120</p>
        </footer>
    );
};

export default Footer;