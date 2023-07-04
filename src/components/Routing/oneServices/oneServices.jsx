import React from 'react';
import style from './oneServices.module.css';
import OkTextBlock from "./okTextBlock/okTextBlock";
import GreenButton from "../../UI_Kit/button/greenButton";
import {NavLink} from "react-router-dom";

const OneServices = () => {
    function componentDidMount(){
        document.title = "Разовые услуги";
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
        <div className={style.main}>
            <h2 className={style.title}>Разовые услуги</h2>
            <div className={style.position}>
                <OkTextBlock title="Составление бухгалтерской и налоговой отчетности за определенный период."/>
                <OkTextBlock title="Сдача в ИФНС, ПФР и ФСС РФ всех форм бухгалтерской и налоговой отчетности за определенный период."/>
                <OkTextBlock title="Расчет всех налогов и подготовка платежных поручений для уплаты за определенный период."/>
                <OkTextBlock title="Восстановление бухгалтерского и налогового учета с проведением сверки с ИФНС, ПФР и ФСС"/>
                <OkTextBlock title="Разблокировка счета с выяснением причин ареста в ИФНС."/>
                <OkTextBlock title="Постановка на учет кассовой техники и организация обслуживания ККТ."/>
            </div>
            <NavLink to="/application" className={style.NavLink} onClick={handleClickScrollUp}><GreenButton text="Оставить заявку" padding="25px 80px"/></NavLink>
        </div>
    );
};

export default OneServices;