import React from 'react';
import style from './form.module.css';
import GreenButton from "../UI_Kit/button/greenButton";

const Form = () => {
    return (
        <div className={style.main}>
            <h2 className={style.title}>Остались вопросы?</h2>
            <p className={style.text}>Заполните форму, и мы ответим вам <br/> в течении часа</p>
            <div className={style.position}>
                <input placeholder="Ваше имя" type="text" name="name" className={style.input}/>
                <input placeholder="Ваш телефон" type="tel" id="phone" name="phone"
                       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                       required className={style.input}/>
                <input placeholder="Ваш Email" type="email" id="email"
                       pattern=".+@globex\.com" size="30" required className={style.input}/>
                <textarea placeholder="Ваш вопрос" className={style.input + ' ' + style.area}/>
            </div>
            <div className={style.position}>
                <GreenButton text="Отправить" padding="25px 80px"/>
            </div>
        </div>
    );
};

export default Form;