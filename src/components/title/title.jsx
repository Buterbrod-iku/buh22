import React from 'react';
import style from './title.module.css';
import GreenButton from "../UI_Kit/button/greenButton";

const Title = () => {
    return (
        <div className={style.main} id="title">
            <div className={style.leftBlock}>
                <h2 className={style.titleText}>Бухгалтерское обслуживание <br/> малого и среднего <br/> бизнеса</h2>
                <p className={style.articleText}>Аутсорсинг бухгалтерии без забот и сюрпризов</p>
                <GreenButton text="Получите 1 месяц ведения бесплатно" padding="25px 80px"/>
            </div>
            <div className={style.rightBlock}></div>
        </div>
    );
};

export default Title;