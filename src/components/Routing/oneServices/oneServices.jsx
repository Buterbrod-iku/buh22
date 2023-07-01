import React from 'react';
import style from './oneServices.module.css';
import OkTextBlock from "./okTextBlock/okTextBlock";
import GreenButton from "../../UI_Kit/button/greenButton";

const OneServices = () => {
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
            <GreenButton text="Оставить заявку" padding="25px 80px"/>
        </div>
    );
};

export default OneServices;