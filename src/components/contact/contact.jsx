import React from 'react';
import style from './contact.module.css';

const Contact = () => {
    return (
        <div className={style.main} id="contact">
            <div className={style.block}>
                <h2 className={style.title}>Наши контакты</h2>
                <b className={style.bolt}>Телефоны:</b>
                <p className={style.p}>+7 913 233 20 82 <br/> +7 923 720 15 15</p>
                <b className={style.bolt}>Email: info@buhonline22.ru</b>
                <div className={style.position}>
                    <div className={style.ico}></div>
                    <div className={style.ico}></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;