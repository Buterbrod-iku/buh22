import React from 'react';
import style from './title.module.css';
import GreenButton from "../UI_Kit/button/greenButton";
import {NavLink} from "react-router-dom";

const Title = () => {
    function componentDidMount(){
        document.title = "Бухгалтерское бюро Олеси Якобсон | Бухгалтерское сопровождение | Оформление докуменетов";
    }
    componentDidMount();

    const handleClickScrollUp = () => {
        const element = document.getElementById('app');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={style.main} id="title">
            <div className={style.leftBlock}>
                <h2 className={style.titleText}>Бухгалтерское обслуживание <br/> малого и среднего <br/> бизнеса</h2>
                <p className={style.articleText}>Аутсорсинг бухгалтерии без забот и сюрпризов</p>
                <NavLink to="/application" className={style.NavLink} onClick={handleClickScrollUp}><GreenButton text="Получите 1 месяц ведения бесплатно" padding="25px 80px"/></NavLink>
            </div>
            <div className={style.rightBlock}></div>
        </div>
    );
};

export default Title;