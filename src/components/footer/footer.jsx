import React from 'react';
import style from './footer.module.css';
import image from '../../assets/image/mini-logo.png';

const Footer = () => {
    return (
        <footer>
            <div className={style.position}>
                <div className={style.menuBlock}>О Компании</div>
                <div className={style.menuBlock}>Услуги</div>
                <div className={style.menuBlock}>Цены</div>
                <div className={style.menuBlock}>Разовые услуги</div>
                <div className={style.menuBlock}>Декларации 3НДФЛ</div>
                <div className={style.menuBlock}>Полезные сервисы</div>
                <div className={style.menuBlock}>Оставить заявку</div>
            </div>
            <img src={image} alt="" className={style.img}/>
            <p className={style.text}>ИП Якобсон Олеся Васильевна <br/>ИНН 222310304716 ОГРНИП 322220200097120</p>
        </footer>
    );
};

export default Footer;