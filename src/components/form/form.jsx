import React from 'react';
import style from './form.module.css';
import GreenButton from "../UI_Kit/button/greenButton";
import emailjs from "emailjs-com";

const Form = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rhmlpac', 'template_8goyanf', e.target, '9yTjRgGaW20LK-FCK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div className={style.main}>
            <h2 className={style.title}>Остались вопросы?</h2>
            <p className={style.text}>Заполните форму, и мы ответим вам в течении часа</p>
            <form className={style.position} onSubmit={sendEmail}>
                <input placeholder="Ваше Ф.И.О" type="text" name="to_name" className={style.input}/>
                <input placeholder="Ваш телефон" type="tel" id="phone" name="phone"
                       required className={style.input}/>
                <input placeholder="Ваш Email" type="email" id="email" name="email" size="30" required className={style.input}/>
                <textarea placeholder="Ваш вопрос" name='message' className={style.input + ' ' + style.area}/>
                    <GreenButton text="Отправить" padding="25px 80px" />
            </form>

        </div>
    );
};

export default Form;